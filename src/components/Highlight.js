import YellowButton from "./YellowButton";
import Special from "./Special";
import salad from "../assets/greek.jpg";
import bruschetta from '../assets/bruschetta.jpg';
import dessert from '../assets/dessert.jpg';

const specials = [
    {
        id: 1,
        title: 'Lemon dessert',
        price: '$12.99',
        src: `${dessert}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
        id: 2,
        title: 'Greek Salad',
        price: '$12.99',
        src: `${salad}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
        id: 3,
        title: 'Lemon dessert',
        price: '$12.99',
        src: `${dessert}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
        id: 4,
        title: 'Bruschetta',
        price: '$12.99',
        src: `${bruschetta}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
        id: 5,
        title: 'Lemon dessert',
        price: '$12.99',
        src: `${dessert}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
    {
        id: 6,
        title: 'Bruschetta',
        price: '$12.99',
        src: `${bruschetta}`,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                    Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    },
];

function Highlight() {

    const specialList = specials.map(item => <Special key={item.id} special={{title: item.title, price: item.price, src: item.src, description: item.description}}/>)
    return (
        <section id="menu" className={'highlight-layout'} style={{marginTop: '110px'}}>
            <section style={{display: 'flex', justifyContent: 'space-around'}}>
                <h2>This weeks specials!</h2>
                <YellowButton title={'Online Menu'} link={''}/>
            </section>
            <section className={'special-card-layout'}>
                {specialList}
            </section>
        </section>
    )
}

export default Highlight;