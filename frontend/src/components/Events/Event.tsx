import * as React from 'react';
import { event_style } from './styles';
import { Button, Container } from '@mui/material';




const EventBox = () => {
  const styles = event_style();

  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  return (
    <Container>
      <div style={styles.outerBox}>
              <div>
                  
        </div>
      </div>
    </Container>
  );
};

export default EventBox;
