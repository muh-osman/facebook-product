// SCSS
import style from "./PaymentMethod.module.scss"
// Images
import method1 from "./assets/images/payment/1.png"
import method2 from "./assets/images/payment/2.png"
import method3 from "./assets/images/payment/3.png"
import method4 from "./assets/images/payment/4.png"
import method5 from "./assets/images/payment/5.png"
import method6 from "./assets/images/payment/6.png"
import method7 from "./assets/images/payment/7.png"


export default function PaymentMethod() {
  return (
    <div className={style.payment_method_container}>

        <div>
            <h1>طرق الدفع المتوفرة</h1>
        </div>

        <div className={style.method_box}>
            <div className={style.method}><img src={method1} alt="Payment Method" /></div>
            <div className={style.method}><img src={method2} alt="Payment Method" /></div>
            <div className={style.method}><img src={method3} alt="Payment Method" /></div>
            <div className={style.method}><img src={method4} alt="Payment Method" /></div>
            <div className={style.method}><img src={method5} alt="Payment Method" /></div>
            <div className={style.method}><img src={method6} alt="Payment Method" /></div>
            <div className={style.method}><img src={method7} alt="Payment Method" /></div>
        </div>

    </div>
  )
}