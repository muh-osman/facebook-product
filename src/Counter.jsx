// SCSS
import style from "./Counter.module.scss";
// Icons
import { FaBolt } from "react-icons/fa6";

export default function Counter() {


        //Number of ms from 1970 until May 6, 2023
    let countDownDate = new Date().getTime() + 100000000;

    let counter = setInterval(() => {

    // Get Date Now (from 1970 until now in ms)
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }

    }, 1000);


  return (
    <div>

        <h1 className="h1">عرض لمدة محددة<FaBolt style={{color: "#FFD700"}}/>:</h1>
        <p>حسم 50% عند طلب قطعتين معا</p>

      <div className="time">

            <div className="unit">
                <span className="days t"></span>
                <span>يوم</span>
            </div>

            <div className="unit">
                <span className="hours t"></span>
                <span>ساعة</span>
            </div>

            <div className="unit">
                <span className="minutes t"></span>
                <span>دقيقة</span>
            </div>
            
            <div className="unit">
                <span className="seconds t"></span>
                <span>ثانية</span>
            </div>

      </div>

    </div>
  );
}
