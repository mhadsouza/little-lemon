import {Link} from "react-router-dom";

function Nav () {
    return (
        <nav className={'header-nav'}>
            <ul>
                <li className={'menu-item'}><Link aria-label="On Click" to="/">Home</Link></li>
                <li className={'menu-item'}><a aria-label="On Click" href="#about">About</a></li>
                <li className={'menu-item'}><a aria-label="On Click" href="#menu">Menu</a></li>
                <li className={'menu-item'}><Link aria-label="On Click" to="/booking">Reservations</Link></li>
                <li className={'menu-item'}><a aria-label="On Click" href="#">Login</a></li>
                <li className={'menu-item'}><a aria-label="On Click" className={'yellow-back'} style={{borderRadius: '16px'}} href="#">Order Online</a></li>
            </ul>
        </nav>
    );
}

export default Nav;