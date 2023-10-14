// SCSS
import style from "./Counter.module.scss";
// Icons
import { FcAlarmClock } from "react-icons/fc";

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
    <div className="countr_box">

        <h1 className="h1">عرض لمدة محددة<FcAlarmClock/>:</h1>
        <p style={{marginBottom: "28px", fontSize: "18px"}}>حسم <span>50%</span> عند طلب قطعتين.</p>

        <div>
          <h1 style={{color: "#7e859b", fontSize: "35px", fontWeight: "600", marginBottom: "28px"}}><span style={{color: "#000"}}>999 LYD</span> بدلا من <span style={{textDecoration: "line-through"}}>1499 LYD</span></h1>
        </div>

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
