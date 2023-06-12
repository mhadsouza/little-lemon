import HomePage from "../pages/HomePage";
import {Route, Routes, useNavigate} from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import {useEffect, useReducer} from "react";
import {fetchAPI, submitAPI} from "../api";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";

export function Main() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();
    let reservations;

    useEffect(() => {
        reservations = JSON.parse(localStorage.getItem('reservations'));
    });

    function fetchData(date) {
        return fetchAPI(date);
    }

    function initializeTimes() {
        return fetchData(new Date());
    }

    function updateTimes(state, date) {
        return fetchData(new Date(date));
    }

    function submitForm(formData) {
        const isSuccessful = submitAPI(formData);
        if (isSuccessful) {
            navigate("/confirmed");
        }
        const indexedFormData = !reservations ? {
            id: 1,
            ...formData,
        } : {
            id: reservations.length + 1,
            ...formData,
        }
        localStorage.setItem('reservations', JSON.stringify(reservations ? [...reservations, indexedFormData] : [indexedFormData]));
    }

    return (
        <main className={'main-layout'}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBookingPage />}/>
            </Routes>
        </main>
    );
}

export default Main;