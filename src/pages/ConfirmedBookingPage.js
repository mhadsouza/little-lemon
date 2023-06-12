import {useEffect} from "react";

function ConfirmedBookingPage() {
    useEffect(() => {
        document.title = 'Little Lemon | Confirmed Reservation';
    });

    return (
        <section className={'confirmation'}>
            <h1 style={{textAlign: 'center'}}>Your booking has been successfully confirmed!</h1>
        </section>
    );
}

export default ConfirmedBookingPage;