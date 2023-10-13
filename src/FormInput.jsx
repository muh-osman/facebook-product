import "./App.css";
import { useRef, useState } from "react";
// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";


export default function FormInput() {
  const form = useRef();
  const [alertMsg, setAlertMsg] = useState("");
  const [validated, setValidated] = useState(false);
  const btn = useRef();

  let alert = <Alert variant={"warning"}> {alertMsg} </Alert>;

  function submitHandler(e) {
    e.preventDefault();
    btn.current.classList.add("btn_loader");
    const formData = new FormData(form.current);

    if (form.current.checkValidity() === false) {
      btn.current.classList.remove("btn_loader");
      e.stopPropagation();
      setValidated(true);
    } else {
      console.log(formData)
      fetch(
        "https://script.google.com/macros/s/AKfycbwFafeIQmVnnDoh1o1MZ2MRA8g1yl3LcN8lh2sHbr1mBi1FMK7u7rXxhI48KNQaU8Rs/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          document.querySelector(".flip-card-inner").style.transform =
            "rotateY(180deg)";
        })
        .catch((error) => {
          setAlertMsg(error.message);
          btn.current.classList.remove("btn_loader");
        });
    }
  }

  return (
    <>
      <h1 className="mt-3 mb-3" style={{textAlign: "center"}}>أطلب الان</h1>

      <div className="App flip-card">
        <div className="flip-card-inner">
          {alertMsg && alert}

          <Form
            className="flip-card-front"
            ref={form}
            noValidate
            validated={validated}
          >
            {/* Your name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="ادخل اسمك"
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Label>رقم الهاتف</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="ادخل رقم هاتفك"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
                name="email"
                required
                autoComplete="off"
              />
            </InputGroup>

            {/* Your message */}
            <Form.Label>العنوان</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                name="textarea"
                aria-label="textarea"
                placeholder="ادخل عنوانك"
                required
              />
            </InputGroup>

            {/* Button */}
            <Button
              onClick={(e) => {
                submitHandler(e);
              }}
              variant="primary"
              type="submit"
              ref={btn}
            >
              شراء
            </Button>
          </Form>

          <div className="flip-card-back">
            <h1>Thank You!</h1>
            <h3>Your submission has been sent.</h3>
            <a href="https://docs.google.com/spreadsheets/d/1Zb017NbM6-fKMuNOz1BU01O0dSP7lV7edyHLIhe-S7I/edit?usp=sharing">form data</a>
          </div>
        </div>
      </div>
    </>
  );
}
