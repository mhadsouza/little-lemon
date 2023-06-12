function Testimonial(props) {
    return (
        <section className={'testimonial-card'}>
            <section className={'testimonial-header'}>
                <section style={{textAlign: 'center'}}>
                    <p className={'lead-text'} style={{margin: 0}}>{props.testimonial.rating}</p>
                    <img src={props.testimonial.image} alt="Profile image" width={'50px'}/>
                </section>
                <section style={{marginLeft: '10px'}}>
                    <p className={'lead-text'}>{props.testimonial.name}</p>
                </section>
            </section>
            <p>{props.testimonial.feedback}</p>
        </section>
    );
}

export default Testimonial;