import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";

function About() {
    return (
        <section id="about" className={'hero-layout'} style={{marginTop: '50px'}}>
            <section style={{width: '40%', padding: '50px'}}>
                <h1>Little Lemon</h1>
                <h4 className={'card-title'}>Chicago</h4>
                <p className={'highlight-text'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
            <section style={{position: 'relative'}}>
                <img src={profile} width={'200px'} height={'250px'} className={'hero-img'} style={{position: 'relative', top: '130px'}}/>
                <img src={profile2} width={'200px'} height={'250px'} className={'hero-img'} style={{position: 'relative', right: '50px'}}/>
            </section>
        </section>
    );
}

export default About;