import React from 'react';
import { event_style } from './styles';
import { Box } from '@mui/material';

interface EventBoxProps {
  title: string;
  targetDate: Date;
  location: string;
  style?: EventBoxStyles;
  end_time: string;
  start_time: string;
  _id: string;
  pastEvent?: boolean;
}

interface EventBoxStyles {
  outerBox?: React.CSSProperties;
  innerBox?: React.CSSProperties;
}

const MobileEventBox = ({ targetDate, end_time, location, start_time, title }: EventBoxProps) => {
  const styles = event_style();

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

  return (
    <Box
      className="outerBox"
<<<<<<< HEAD
      sx={{ ...styles?.outerBox, marginLeft: '0', padding: '3px', width: '250px' }}
=======
      sx={{ ...styles?.outerBox, marginLeft: '45px', padding: '3px', width: '250px' }}
>>>>>>> 2841588d03bbf308287760ce3ac8ed81b2b12dc4
    >
      <div
        className="innerBox"
        style={{ ...styles?.innerBox, marginTop: '0px', padding: '10px', width: '95%' }}
      >
        <p
          style={{
            color: 'white',
            fontSize: '15px',
            fontFamily: 'Chakra Petch',
            fontWeight: '600',
            marginTop: '0',
            height: '30px',
          }}
        >
          {title}
        </p>

        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: '10px',
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
              fontSize: '10px',
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
              fontSize: '10px',
              fontFamily: 'Chakra Petch',
              fontWeight: '500',
              marginTop: '5px',
              lineHeight: '0px',
            }}
          >
            {location}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default MobileEventBox;
