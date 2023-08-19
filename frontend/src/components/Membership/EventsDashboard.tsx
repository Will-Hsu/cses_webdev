import {
  Button,
  Container,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import { eventListAPI } from '../../api';

const DashBorad = () => {
  const [events, setEvents] = useState([]);
  eventListAPI().then((res) => setEvents(res));

  // console.log(events);

  return (
    <Container style={{ background: 'white' }}>
      <Typography variant="h3" gutterBottom>
        Events Dashboard
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Button variant="contained">Add Event</Button>
        <Button variant="outlined">Logout</Button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Calendar Link</TableCell>
              <TableCell>Instagram Link</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DashBorad;
