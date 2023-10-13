// SCSS
import style from "./FormAndCounter.module.scss"
// 
import FormInput from "./FormInput"

export default function FormAndCounter() {
  return (
    <div className={style.form_and_counter_container}>

        <div className={style.counter_box}>

        </div>

        <div className={style.form_box}>
            <FormInput/>
        </div>
        
    </div>
  )
}