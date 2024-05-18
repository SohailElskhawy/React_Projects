export const Navbar = ({onDisplayingSettings}) => {
    return ( 
        <nav className='navbar'>
            <h1 className="appTitle">Pomodoro Timer App</h1>
            <button onClick={onDisplayingSettings} className="SettingsBut">Settings</button>
        </nav>
    );
}