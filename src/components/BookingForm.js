import {useState} from "react";

function BookingForm(props) {
    const today = new Date().toISOString().split('T')[0];
    const threeWeeks = new Date(new Date().setDate(new Date().getDate() + 21)).toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [time, setTime] = useState(props.availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    function handleDate(e) {
        e.preventDefault();
        setDate(e.target.value);
        props.setAvailableTimes(e.target.value);
    }

    function handleTime(e) {
        e.preventDefault();
        setTime(e.target.value);
    }

    function handleGuests(e) {
        e.preventDefault();
        setGuests(+e.target.value);
    }

    function handleOccasion(e) {
        e.preventDefault();
        setOccasion(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const isConfirmed = window.confirm('You are going to make a reservation.\nDoes the information correct?');
        if (isConfirmed) {
            const formData = {
                date,
                time,
                guests,
                occasion,
            };
            props.submitForm(formData);
        }
    }

    return (
        <>
            <h2 style={{textAlign: 'center'}}>Reserve a table now!</h2>
            <section className={'centered'}>
                <form style={{display: 'grid', minWidth: '250px', maxWidth: '260px', gap: '20px'}} onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date<span className={'required-label'}>*</span></label>
                    <input type="date" id="res-date" min={today} max={threeWeeks} value={date} onChange={handleDate} required/>
                    <label htmlFor="res-time">Choose time<span className={'required-label'}>*</span></label>
                    <select id="res-time " value={time} onChange={handleTime} required>
                        {props.availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
                    </select>
                    <label htmlFor="guests">Number of guests<span className={'required-label'}>*</span></label>
                    <input type="number" min="1" max="10" id="guests" value={guests} onChange={handleGuests} required/>
                    {guests > 0 ? "" : <p className={'required-label'}>Should be at least one guest</p>}
                    <label htmlFor="occasion">Occasion<span className={'required-label'}>*</span></label>
                    <select id="occasion" value={occasion} onChange={handleOccasion} required>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <button aria-label="On Click" className={'reservation-btn'} disabled={!date || !time || !occasion || !guests || +guests < 1} type="submit">Make Your reservation</button>
                </form>
            </section>
        </>
    );
}

export default BookingForm;