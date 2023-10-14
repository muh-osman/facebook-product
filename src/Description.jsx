// SCSS
import style from "./Description.module.scss"
// Icons
import { FaStar } from "react-icons/fa6";


export default function Description() {
  return (
    <div className={style.description_container}>
      <h1>غسالة ملابس بتحميل علوي سعة 5 كجم 2 في 1</h1>

      <h4 className={style.watanty}>اللون: ابيض</h4>


      <h4 className={style.watanty}>الكفالة: ثلاث سنوات</h4>


      <h4 className={style.last_price}>السعر السابق: <span>1499 LYD</span></h4>
      <h4 className={style.current_price}>السعر الحالي: <span>999 LYD</span><div>خصم 50%</div></h4>
      <h4 className={style.rate}>تقييم المنتج: <span><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span> </h4>
      <a href="#features">المواصفات كاملة</a>

      <a href="#FormAndCounter">أطلب الان</a>

    </div>
  )
}