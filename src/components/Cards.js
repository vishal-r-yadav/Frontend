import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Think about your family and buy now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1-crore-cover.png'
              text='Total 1Cr for your health'
              label='10%discount for new year'
              path='/buypolicy'
            />
            <CardItem
              src='images/family-health-insurance.jpg'
              text='Lets buy for your Support System'
              label='10%discount for new year'
              path='/buypolicy'
            />
          </ul>
            </div>
      </div>
    </div>
  );
}

export default Cards;