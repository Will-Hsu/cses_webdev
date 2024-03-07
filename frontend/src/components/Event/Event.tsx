import React, { useState, useEffect } from 'react';
import { event_style } from './styles';
import { Box } from '@mui/material';

import calendarIcon from '../../images/calendarIcon.svg';
import instagramIcon from '../../images/instaLogo.svg';

interface EventBoxProps {
  title: string;
  targetDate: Date;
  location: string;
  style?: EventBoxStyles;
  calendar_link: string;
  description: string;
  end_time: string;
  instagram_link?: string;
  start_time: string;
  _id: string;
  pastEvent?: boolean;
}
interface EventBoxStyles {
  outerBox?: React.CSSProperties;
  innerBox?: React.CSSProperties;
  // Add more style properties if needed
}

/**
 *
 * @param title of the event
 * @param targetDate date of the event
 * @param location of the event
 * @returns the an eventBox
 */

// title, targetDate, location
const EventBox = ({
  targetDate,
  calendar_link,
  description,
  end_time,
  instagram_link,
  location,
  start_time,
  title,
  _id,
  pastEvent,
}: EventBoxProps) => {
  const styles = event_style();

  /**
   * Calculates the time in days, hours, mins, and secs by subtracting the target date, minus the curent date.
   * @param targetDate Date given
   * @returns Time left
   */
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

  /**
   * Returns the clean date
   * @returns Returns the clean date
   */
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

  /**
   * This function takes a not clean string representing the time and returns the clean time.
   * @returns Returns the clean time
   */
  const cleanTime = () => {
    const startDate = new Date(start_time);
    const endDate = new Date(end_time);

    const startTime = startDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });

    const endTime = endDate.toLocaleTimeString('en-US', {
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

  return (
    <Box style={{ display: 'flex' }}>
      <Box className="outerBox" sx={styles?.outerBox}>
        <div className="innerBox" style={styles?.innerBox}>
          <p
            style={{
              color: 'white',
              fontSize: 'clamp(25px, 1vw, 35px)',
              fontFamily: 'Chakra Petch',
              fontWeight: '600',
              marginTop: '0',
              height: '110px',
              marginBottom: '15px',
            }}
          >
            {title}
          </p>
          {!pastEvent && (
            <>
              <div
                className="countDown"
                style={{
                  marginTop: '2px',
                  display: 'flex',
                }}
              >
                {countdownCharacters.map((character, index) => (
                  <div
                    key={index}
                    style={{
                      width: '30px', // Adjust the width as needed
                      height: '60px', // Adjust the height as needed
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      backgroundColor: character === ':' ? 'transparent' : 'white',
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
              <div
                style={{
                  marginTop: '0',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '600',
                  }}
                >
                  &nbsp;days
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '500',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '600',
                  }}
                >
                  hours
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '500',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '600',
                  }}
                >
                  minutes
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '500',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'Chakra Petch',
                    fontWeight: '600',
                  }}
                >
                  seconds
                </p>
              </div>
            </>
          )}

          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: '18px',
                fontFamily: 'Chakra Petch',
                fontWeight: '500',
                marginTop: '5px',
                lineHeight: '0px',
              }}
            >
              {cleanDate()}
            </p>
            <p
              style={{
                color: 'white',
                fontSize: '18px',
                fontFamily: 'Chakra Petch',
                fontWeight: '500',
                marginTop: '5px',
                lineHeight: '0px',
              }}
            >
              {cleanTime()}
            </p>

            <p
              style={{
                color: 'white',
                fontSize: '18px',
                fontFamily: 'Chakra Petch',
                fontWeight: '500',
                marginTop: '5px',
                lineHeight: '0px',
              }}
            >
              {location}
            </p>

            <div style={{ display: 'flex', marginLeft: '320px', marginTop: '-35px', marginBottom: '30px' }}>
              {instagram_link !== '' && (
                <a href={instagram_link}>
                  <img
                    src={instagramIcon}
                    alt="Instagram Icon"
                    style={{
                      width: '30px',
                      height: '30px',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                  />
                </a>
              )}
              
              {calendar_link !== '' && (
                <a 
                  href={calendar_link}
                  style={{ marginLeft: instagram_link === '' ? '40px' : '10px' }}>
                  <img
                    src={calendarIcon}
                    alt="Calendar Icon"
                    style={{
                      width: '30px',
                      height: '30px',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default EventBox;
