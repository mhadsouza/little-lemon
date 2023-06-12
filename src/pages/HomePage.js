import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import Recommendation from "../components/Recommendation";
import About from "../components/About";
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        document.title = 'Little Lemon | Home';
    });

    return (
        <>
            <Hero />
            <Highlight />
            <Recommendation />
            <About />
        </>
    )
}

export default HomePage;