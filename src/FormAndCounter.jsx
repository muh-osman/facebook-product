// SCSS
import style from "./FormAndCounter.module.scss"
// 
import FormInput from "./FormInput"
import Counter from "./Counter"

export default function FormAndCounter() {
  return (
    <div className={style.form_and_counter_container}>

        <div className={style.counter_box}>
            <Counter />
        </div>

        <div className={style.form_box} id="FormAndCounter">
            <FormInput/>
        </div>
        
    </div>
  )
}