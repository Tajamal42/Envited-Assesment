import React from "react";
import { Button, Card } from 'react-bootstrap';
import eventImg from '../images/event.svg';

function Home(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='content'>
          <div className='event-col-left'><img src={eventImg} alt="SVG as an image" className='event--img' /></div>
          <div className='event-col-right'>
            <h1>Imagine if <span>Snapchat</span>had events.</h1>
            <p>Easily host and share events with your friends across any social media.</p>
            
              <button className='btn btn--event'>🎉 Create my event</button>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;


