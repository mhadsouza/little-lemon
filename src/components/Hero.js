import YellowButton from "./YellowButton";
import cooking from '../assets/cooking.jpg';

function Hero() {
    return (
        <section className={'hero-layout green-back'}>
            <section style={{width: '40%', padding: '50px'}}>
                <h1 className={'yellow'}>Little Lemon</h1>
                <h4 className={'card-title white'}>Chicago</h4>
                <p className={'highlight-text white'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <YellowButton title={'Reserve a Table'} link={'/booking'}/>
            </section>
            <section style={{position: 'relative'}}>
                <img src={cooking} width={'350px'} height={'400px'} className={'hero-img'} style={{position: 'relative', top: '90px'}}/>
            </section>
        </section>
    )
}

export default Hero;