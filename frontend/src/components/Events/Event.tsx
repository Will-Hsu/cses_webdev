import React, { useState, useEffect } from 'react';
import { event_style } from './styles';
import calendarIcon from '../../images/calendarIcon.png';

interface EventBoxProps {
  targetDate: Date;
  location: string;
  style?: EventBoxStyles;
}
interface EventBoxStyles {
  outerBox?: React.CSSProperties;
  innerBox?: React.CSSProperties;
  // Add more style properties if needed
}
const EventBox = ({ targetDate, location }: EventBoxProps) => {
  const styles = event_style();

  const calculateTimeLeft = (targetDate: Date): TimeFuns => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeFuns = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const cleanDate = () => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const date = new Date(targetDate);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month}, ${year}`;
  };

  const cleanTime = () => {
    const date = new Date(targetDate);
    const startTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    date.setHours(date.getHours() + 1);
    const endTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `${startTime} - ${endTime}`;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate)); // Pass targetDate as an argument
    }, 1000);

    return () => clearTimeout(timer);
  });

  interface TimeFuns {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const { days, hours, minutes, seconds }: TimeFuns = timeLeft;

  const meetingLocation = location ? 'Virtual' : 'Place';

  /**
   * If the current the current function is just one character add a 0 beofore it.
   * @param time includes, days, hours, min, sec.
   * @returns Returns the modified number
   */
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const countdownCharacters = `${formatTime(days)}:${formatTime(hours)}:${formatTime(
    minutes,
  )}:${formatTime(seconds)}`.split('');

  /*

    <div>
        <div>{formatTime(days)}</div>:<div>{formaTime(hours)}</div>:<div>{formatTime(seconds)}</div>
    </div>

    */

  /*
     {countdownCharacters.map((character, index) => (
            <div
              key={index}
              style={{
                backgroundColor: character === ':' ? 'transparent' : 'white',
                padding: '10px',
                marginLeft: character === ':' ? '0px' : '4px',
                fontSize: '20px',
                fontFamily: 'Chakra Petch',
                fontWeight: '500',
                color: character === ':' ? 'white' : 'black',
                borderRadius: '4px',
              }}
            >
              {character}
            </div>
          ))} */
  
{}
  const numStyle = { backgroundColor: 'white' };

  return (
    <div style={{ display: 'flex' }}>
    <div className="outerBox" style={styles?.outerBox}>
      <div className="innerBox" style={styles?.innerBox}>
        <h4
          style={{
            color: 'white',
            fontSize: '40px',
            fontFamily: 'Chakra Petch',
            fontWeight: '600',
            marginTop: '30px',
            marginLeft: '30px',
          }}
        >
          Google ML SWE Alumnus Q&A
        </h4>
        <div
          className="countDown"
          style={{
            marginTop: '2px',
            marginLeft: '30px',
            display: 'flex',
          }}
        >
          {countdownCharacters.map((character, index) => (
            <div
              key={index}
              style={{
                backgroundColor: character === ':' ? 'transparent' : 'white',
                padding: '10px',
                marginLeft: character === ':' ? '0px' : '4px',
                fontSize: '20px',
                fontFamily: 'Chakra Petch',
                fontWeight: '500',
                color: character === ':' ? 'white' : 'black',
                borderRadius: '4px',
              }}
            >
              {character}
            </div>
          ))}

          
          
        </div>
        <div style={{ marginTop: '-10px' ,marginLeft: '35px',display: 'flex', flexDirection: 'row' }}>
          <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Chakra Petch', fontWeight: '600' }}>days</p>
          <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Chakra Petch', fontWeight: '500' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Chakra Petch', fontWeight: '600' }}>hours</p>
          <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Chakra Petch', fontWeight: '500' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Chakra Petch', fontWeight: '600' }}>minutes</p>
          <p style={{ color: 'white', fontSize: '20px', fontFamily: 'Chakra Petch', fontWeight: '500' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Chakra Petch', fontWeight: '600' }}>seconds</p>
        </div>
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column'}} >
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              marginTop: '5px',
              marginLeft: '30px',
              lineHeight: '0px',
            }}
          >
            {cleanDate()}
          </p>
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              marginTop: '5px',
              marginLeft: '30px',
              lineHeight: '0px',
            }}
          >
            {cleanTime()}
          </p>
          <a href="https://example.com">
            <img src={calendarIcon} alt="Calendar Icon" style={{ width: '1000px', height: '100px' }} />
          </a>
          <p
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              marginTop: '5px',
              marginLeft: '30px',
              lineHeight: '0px',
            }}
          >
            {meetingLocation}
          </p>
          

        </div>
      </div>
    </div>
    </div>

  
  );
};

export default EventBox;