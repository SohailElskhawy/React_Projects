import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Timer } from './components/Timer';
import { Settings } from './components/Settings';
import { useState } from 'react';


function App() {
  const [settingsDisplayed, setSettingsDisplayed]= useState("none");
  const handleCloseSettings = ()=>{
    setSettingsDisplayed('none')
  }
  const handleOpenSettings = ()=>{
    setSettingsDisplayed('flex')
  }
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreakTime, setlongBreakTime] =  useState(60);
  const [pomodoroCount, setPomodoroCount] = useState(4);
  
  const handleSaveSettings = (pomodoroTime, breakTime, longBreakTime, pomodoroCount)=>{
    setPomodoroTime(pomodoroTime);
    setBreakTime(breakTime);
    setlongBreakTime(longBreakTime);
    setPomodoroCount(pomodoroCount);
  }

  return (
    <div className="App">
      <Navbar 
      onDisplayingSettings={handleOpenSettings}
      />
      <div className="content">
        <Timer 
        pomodoroTime={pomodoroTime}
        pomodoroCount={pomodoroCount}
        breakTime={breakTime}
        longBreakTime={longBreakTime}
        />
      </div>
      <Footer />
      <Settings
        isDisplayed={settingsDisplayed}
        onClose={handleCloseSettings}
        onSaveSettings={handleSaveSettings}
      />
    </div>
  );
}

export default App;
