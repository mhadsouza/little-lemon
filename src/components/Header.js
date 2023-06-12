import Nav from "./Nav";
import logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    function navigateToHome() {
        navigate("/");
    }

    return (
        <header className={'header-layout'}>
            <img src={logo} width={'72px'} height={'75px'} alt={'Logo'} onClick={navigateToHome} style={{cursor: 'pointer'}}/>
            <Nav />
        </header>
    );
}

export default Header;