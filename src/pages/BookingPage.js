import BookingForm from "../components/BookingForm";
import {useEffect} from "react";

function BookingPage(props) {
    let reservations = JSON.parse(localStorage.getItem('reservations'));

    useEffect(() => {
        document.title = 'Little Lemon | Table Reservation';
    });

    return (
        <>
            <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm}/>
            <h2 style={{textAlign: 'center'}}>Previous Reservations</h2>
            <section className={'centered'}>
                {reservations ?
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Guests</th>
                                <th>Occasion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map(item => <tr key={item.id}>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.guests}</td>
                                <td>{item.occasion}</td>
                            </tr>)}
                        </tbody>
                </table>
                : <p style={{textAlign: 'center'}}>There are no reservations yet</p>}
            </section>
        </>
    )
}

export default BookingPage;