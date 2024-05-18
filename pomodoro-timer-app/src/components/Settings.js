import { useState } from "react";

export const Settings = ({isDisplayed, onClose, onSaveSettings}) => {
    const [pomodoroTime, setPomodoroTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [longBreakTime, setlongBreakTime] =  useState(60);
    const [pomodoroCount, setPomodoroCount] = useState(4);

    const handleSaveSettings = ()=>{
        onSaveSettings(pomodoroTime, breakTime, longBreakTime, pomodoroCount);
    }

    return ( 
        <div className="settingsBg" style={{display:isDisplayed}}>
            <div className="settings">
                <div className="settingsHeader">
                    <h1>Settings</h1>
                    <button className="closeSettingsBut" onClick={onClose}>X</button>
                </div>
                <div className="settingsBody">
                    <div className="input">
                        <p>Pomodoro Time (m):</p>
                        <input type="number" value={pomodoroTime} onChange={(e) => setPomodoroTime(e.target.value)}/>
                    </div>
                    <div className="input">
                        <p>Break Time (m):</p>
                        <input type="number" value={breakTime} onChange={(e) => setBreakTime(e.target.value)}/>
                    </div>
                    <div className="input">
                        <p>Long Break Time (m):</p>
                        <input type="number" value={longBreakTime} onChange={(e) => setlongBreakTime(e.target.value)}/>
                    </div>
                    <div className="input">
                        <p>Long Break After</p>
                        <input type="number" value={pomodoroCount} onChange={(e) => setPomodoroCount(e.target.value)}/>
                        <p>Pomdoros</p>
                    </div>
                </div>
                <button className="saveSettingsBut" onClick={handleSaveSettings}>Save Settings</button>
            </div>
        </div>
    );
}