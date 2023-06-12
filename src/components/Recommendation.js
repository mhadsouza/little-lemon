import Testimonial from "./Testimonial";
import profile from '../assets/profile.jpg';

const recommendations = [
    {
        id: 1,
        rating: '4.8',
        name: 'Adams',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: `${profile}`
    },
    {
        id: 2,
        rating: '4.5',
        name: 'Larry',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: `${profile}`
    },
    {
        id: 3,
        rating: '4.7',
        name: 'Jons',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: `${profile}`
    },
    {
        id: 4,
        rating: '5.0',
        name: 'Stevens',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: `${profile}`
    },
    {
        id: 5,
        rating: '4.9',
        name: 'Lawrence',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: `${profile}`
    },
];

function Recommendation() {
    const recommendationList = recommendations.map(item => <Testimonial key={item.id} testimonial={{rating: item.rating, name: item.name, feedback: item.feedback, image: item.image}}/>)
    return (
      <section className={'recommendation-layout green-back'} style={{marginTop: '50px'}}>
          <section style={{display: 'flex', justifyContent: 'center'}}>
              <h2 className={'white'}>Recent recommendations!</h2>
          </section>
          <section className={'recommendation-card-layout'}>
              {recommendationList}
          </section>
      </section>
    );
}

export default Recommendation;