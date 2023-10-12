// SCSS
import style from "./Header.module.scss";
// Icons
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
// Logo
import logo from "./assets/images/logo.jpeg";
import whatsapp from "./assets/images/whatsapp-icon.png";

export default function Header() {
  return (
    <>
      <a className={style.wahatsapp_icon} href="https://www.whatsapp.com">
        <img src={whatsapp} alt="whatsapp icon" />
      </a>
      <header>
        <div className={style.free_delivery_box}>
          <p>التوصيل مجاني - الدفع عند الإستلام</p>

          <div className={style.social}>
            <a target="_blank" href="https://twitter.com" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com"
              rel="noreferrer"
            >
              <FaSquareInstagram />
            </a>
            <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
              <FaSquareFacebook />
            </a>
          </div>
        </div>

        <nav>
          <a href="/">
            <img src={logo} alt="the best logo" />
          </a>
        </nav>
      </header>
    </>
  );
}
