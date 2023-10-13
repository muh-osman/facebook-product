// SCSS
import style from "./HowWorks.module.scss";
// Icons
import { FaHeart } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function HowWorks() {
  return (
    <div className={style.how_works_container}>

      <div className={style.title}>
        <h1>كيف نعمل</h1>
        <p>لتفادي أي مشاكل في معالجة الطلب نقوم باتباع الخطوات التالية:</p>
      </div>

      <div className={style.container}>
                <div className={style.box}>
                        <FaHeart className={style.icon}/>
                        <h2>تقديم الطلب</h2>
                        <p>قم بادخال اسمك وعنوانك ورقم الهاتف واختر وسيلة الدفع التي تناسبك</p>
                </div>

                <div className={style.box}>
                        <FaPhoneFlip className={style.icon}/>
                        <h2>تأكيد الطلب عبر الهاتف</h2>
                        <p>سنقوم بالاتصال بك لتأكيد الطلب خلال دقائق بعد تقديم الطلب</p>
                </div>

                <div className={style.box}>
                        <FaLocationDot className={style.icon}/>
                        <h2>شحن الطلب</h2>
                        <p>بعد التأكد من الطلب سيتم الشحن في غضون 1-3 يوم عمل</p>
                </div>
      </div>

    </div>
  );
}
