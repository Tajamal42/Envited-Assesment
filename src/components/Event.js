import React from "react";
import eventImg from '../images/event-image.png';
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";



function Event(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='content'>
          <div className='event-col-left'>
            <h1>Birthday Bash</h1>
            <span className="tag">Hosted by Elysia</span>
            <table>
                <tr>
                    <td align="left" valign="top">
                        <BsFillCalendar2WeekFill />
                    </td>
                    <td align="left" valign="middle">
                        <small className="p-sm"><strong>18 August 6:00PM</strong> <br />to 19 August 1:00PM UTC +10</small>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <BsFillGeoAltFill />
                    </td>
                    <td align="left" valign="middle">
                    <small className="p-sm"><strong>Street names</strong> <br />Suburb, State, Postcode</small>
                    </td>
                </tr>
            </table>
          </div>
          <div className='event-col-right'>
            <img src={eventImg} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Event;


