import {Link} from "react-router-dom";

function YellowButton(props) {
    return (
        <Link aria-label="On Click" to={props.link} className={'reservation-btn'}>{props.title}</Link>
    )
}

export default YellowButton;