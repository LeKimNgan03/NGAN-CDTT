import { useState, useEffect } from "react";
import "../../assets/css/countdown.css";

function CountDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState("1 Jan 2023");
    const [currentDate, setCurrentDate] = useState(inputDate);

    useEffect(() => {
        const changingDate = new Date(inputDate);
        const currentDate = new Date();
        const totalSeconds = (changingDate - currentDate) / 1000;

        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds % 60));
    }, [currentDate]);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    const onChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const onClickHandler = () => {
        setCurrentDate(inputDate);
    };

    // <input className="countdown-input" onChange={onChangeHandler} />
    //     <button className="countdown-button" onClick={onClickHandler}></button>
    return (
        <div id="countdown">
            <div id="tiles">
                <span>{days}</span>:
                <span>{hours}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
        </div>
    );
}

export default CountDown;