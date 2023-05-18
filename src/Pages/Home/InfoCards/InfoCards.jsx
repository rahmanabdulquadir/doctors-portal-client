import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Card from './Card';

const InfoCards = () => {
  const infoCards = [
    {
      id: 1,
      name: 'Opening Hours',
      description: 'Open from 9am to 8pm',
      img:clock,
      bgColor: "bg-primary"
    },
    {
      id: 2,
      name: 'Visit our location',
      description: 'Brooklyn, NY 1003299, United States ',
      img:location,
      bgColor: "bg-accent"
    },
    {
      id: 3,
      name: 'Contact us now',
      description: '+123456789',
      img:phone,
      bgColor: "bg-primary"
    },
  ]
  return (
    <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        infoCards.map(card => <Card
        key={card.id}
        card={card}
        ></Card>)
      }
    </div>
  );
};

export default InfoCards;