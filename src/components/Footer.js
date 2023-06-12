import logo from "../assets/logo.png"
import {Link, useNavigate} from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    function navigateToHome() {
        navigate("/");
    }
    return (
        <footer className={'footer-nav footer-layout green-back'}>
            <img src={logo} width={'110px'} height={'120px'} alt={'Logo'} onClick={navigateToHome} style={{cursor: 'pointer'}}/>
            <section>
                <h5>Doormant navigation</h5>
                <ul>
                    <li className={'description'}><Link aria-label="On Click" to="/">Home</Link></li>
                    <li className={'description'}><a aria-label="On Click" href="#about">About</a></li>
                    <li className={'description'}><a aria-label="On Click" href="#menu">Menu</a></li>
                    <li className={'description'}><Link aria-label="On Click" to="/booking">Reservations</Link></li>
                    <li className={'description'}><a aria-label="On Click" href="#">Order Online</a></li>
                    <li className={'description'}><a aria-label="On Click" href="#">Login</a></li>
                </ul>
            </section>
            <section>
                <h5>Contact</h5>
                <ul>
                    <li className={'description'}><a aria-label="On Click" href="#">Address</a></li>
                    <li className={'description'}><a aria-label="On Click" href="#">Phone number</a></li>
                    <li className={'description'}><a aria-label="On Click" href="#">Email</a></li>
                </ul>
            </section>
            <section>
                <h5>Social Media Links</h5>
                <ul>
                    <li className={'description'}><a href="#">Address</a></li>
                    <li className={'description'}><a href="#">Phone number</a></li>
                    <li className={'description'}><a href="#">Email</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;