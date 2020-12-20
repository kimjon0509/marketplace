import React from 'react';
import './todaysDeal.scss';

export default function TodaysDeal(props){
  return (
    <div className='todays-deal'>
      <div>
        <h2>Today's Deal</h2>
      </div>
      <div className='todays-deal-image'>
        <div>
          <img 
            src='https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg' 
            alt='apple' 
            name='apple'>
          </img>
        </div>
        <div>
          <img 
            src='https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg' 
            alt='apple' 
            name='apple'>
          </img>
        </div>
        <div>
          <img 
            src='https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg' 
            alt='apple' 
            name='apple'>
          </img>
        </div>
        <div>
          <img 
            src='https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg' 
            alt='apple' 
            name='apple'>
          </img>
        </div>
      </div>
        
    </div>
  )
}
