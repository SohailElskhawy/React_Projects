import { useState, useEffect } from "react";


export const Timer = ({pomodoroTime, breakTime, longBreakTime, pomodoroCount}) => {
    const [time, setTime] = useState(pomodoroTime * 60);
    const [timeString, setTimeString] = useState('');
    const [pomodorosDoneCount, setPomodoroDoneCount] = useState(0);
    const [timerType, setTimerType] = useState("Work Time");
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setTime(pomodoroTime * 60);
    }, [pomodoroTime]);


    useEffect(()=>{
        setTimeString(`${time / 60 < 10 ? '0' : ''}${Math.floor(time / 60)} : ${time % 60 < 10 ? '0' : ''}${time % 60}`);
    },[time])


    const handlePomodoro = ()=> {
        setTime(pomodoroTime * 60);
        setTimerType('Work Time');
        document.querySelector('body').style.backgroundColor = '#ed6a5a';
    }
    const handleBreak = ()=>{
        setTime(breakTime * 60);
        setTimerType('Break Time');
        document.querySelector('body').style.backgroundColor = '#f4f1bb';
    }
    const handleLongBreak = ()=>{
        setTime(longBreakTime * 60);
        setTimerType('Long Break Time');
        document.querySelector('body').style.backgroundColor = '#9bc1bc';
    }

    const handleStartTime = ()=>{
        if (intervalId) return;

        const timerInterval = setInterval(()=>{
            setTime(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timerInterval);
                    setIntervalId(null);
                    if (timerType === "Work Time") {
                        if (pomodorosDoneCount < pomodoroCount) {
                            handleBreak();
                        } else {
                            handleLongBreak();
                        }
                    } else if (timerType === "Break Time") {
                        setPomodoroDoneCount(pomodorosDoneCount + 1);
                        handlePomodoro();
                    } else if (timerType === 'Long Break Time') {
                        handlePomodoro();
                        setPomodoroDoneCount(0);
                    }
                    return prevTime;
                }
            });
        },1000);
        setIntervalId(timerInterval);
    }

    const handlePauseTime = ()=>{
        if(intervalId){
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    const handleResetTime = () =>{
        handlePauseTime();
        handlePomodoro();
        setPomodoroDoneCount(0);
    }

    return ( 
        <div className="timer">
            <h1>{timerType}</h1>
            <div className="timerClock">
                <h1>
                    {timeString}
                </h1>
            </div>
            <div className="start-pause-buttons">
                <button onClick={handleStartTime}>Start</button>
                <button onClick={handlePauseTime}>Pause</button>
                <button onClick={handleResetTime}>Reset</button>
            </div>
            <div className="pomodoroCount">
                <p>Pomodoros Done: {pomodorosDoneCount}</p>
            </div>
        </div>
    );
}