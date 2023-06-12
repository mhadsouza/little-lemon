function Special(props) {
    return (
        <section className={'special'} style={{width: '300px', margin: '15px'}}>
            <section style={{height: '250px'}}>
                <img src={props.special.src} width={'300px'} height={'250px'} style={{borderRadius: '16px 16px 0 0'}}/>
            </section>
            <section style={{backgroundColor: '#edefee'}}>
                <section className={'special-card-header'} style={{padding: '15px'}}>
                    <h4 className={'card-title'}>{props.special.title}</h4>
                    <p className={'highlight-text orange'} style={{margin: 0}}>{props.special.price}</p>
                </section>
                <section style={{padding: '15px'}}>
                    <p className={'description black'}>{props.special.description}</p>
                    <p className={'footer-card'} style={{cursor: 'pointer'}}>Order a delivery <i className={"bi bi-bicycle"}></i></p>
                </section>
            </section>
        </section>
    )
}

export default Special;