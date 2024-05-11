import logo from '../assets/so softwear development-02.png';
export const Footer = () => {
    return ( 
        <footer className="footer">
            <p>Developed By</p>
            <a href="https://github.com/SohailElskhawy">
            <img src={logo} alt="So-Code" />
            </a>
        </footer>
    );
}