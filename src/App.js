import Header from "./Header.jsx"
import ControlledCarousel from "./ControlledCarousel.jsx"
import Main from "./Main.jsx";
import PaymentMethod from "./PaymentMethod.jsx";
import Footer from "./Footer.jsx";
import FormAndCounter from "./FormAndCounter.jsx";
import Video from "./Video.jsx";
import HowWorks from "./HowWorks.jsx";
import Features from "./Features.jsx";

function App() {
  return (
    <>
      <Header />
      <ControlledCarousel />
      <Main />
      <Features />
      <FormAndCounter />
      <PaymentMethod />
      <HowWorks />
      <Video />
      <Footer />
    </>
  );
}

export default App;
