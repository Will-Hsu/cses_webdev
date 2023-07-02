import React, { useState, useEffect } from 'react';
import { event_style } from './styles';

interface EventBoxProps {
  targetDate: Date;
  location: string;
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
    const startTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    date.setHours(date.getHours() + 1);
    const endTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `${dayOfWeek}, ${day} ${month}, ${year}\n${startTime} - ${endTime}`;
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

  return (
    <div className="outerBox">
      <div className="innerBox">
        <h4>Google ML SWE Alumnus Q&A</h4>
        <div className="countDown">
          {days > 0 && <span>{days}d </span>}
          {hours > 0 && <span>{hours}h </span>}
          {minutes > 0 && <span>{minutes}m </span>}
          {seconds > 0 && <span>{seconds}s</span>}
        </div>
        <div>
          <p>{cleanDate()}</p>
          <p>{meetingLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default EventBox;
