import {
  Box,
  Button,
  Container,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Modal,
  TextField,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { eventListAPI, eventCreateAPI, eventDeleteAPI, eventUpdateAPI } from '../../api';

interface Event {
  title: string;
  start_time: string;
  end_time: string;
  location: string;
  description: string;
  calendar_link: string;
  instagram_link: string;
  _id: string;
  code: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EventRow = ({
  event,
  onDelete,
  onEdit,
}: {
  event: Event;
  onDelete: () => void;
  onEdit: (updatedEvent: Event) => void;
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editedEvent, setEditedEvent] = useState({ ...event });
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <TableRow key={event._id}>
      <TableCell>{event.code}</TableCell>
      <TableCell>{event.title}</TableCell>
      <TableCell>{new Date(event.start_time).toLocaleString()}</TableCell>
      <TableCell>{new Date(event.end_time).toLocaleString()}</TableCell>
      <TableCell>{event.location}</TableCell>
      <TableCell>{event.description}</TableCell>
      <TableCell>{event.calendar_link}</TableCell>
      <TableCell>{event.instagram_link}</TableCell>
      <TableCell>
        <Button
          itemID={event._id}
          onClick={() => {
            setOpenEdit(true);
            setEditedEvent({ ...event });
          }}
          variant="outlined"
        >
          Edit
        </Button>
        <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
          <Box sx={style} component="form">
            <TextField
              label="Title"
              id="title"
              size="small"
              fullWidth
              margin="normal"
              value={editedEvent.title}
              onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })}
              required
              helperText="Please enter the title of the event"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Start Time"
                value={dayjs(editedEvent.start_time)}
                onChange={(newValue) => {
                  if (newValue) {
                    setEditedEvent({ ...editedEvent, start_time: newValue.toISOString() });
                  }
                }}
                disablePast
                sx={{ width: '100%', marginBottom: '20px' }}
              />
              <DateTimePicker
                label="End Time"
                value={dayjs(editedEvent.end_time)}
                onChange={(newValue) => {
                  if (newValue) {
                    setEditedEvent({ ...editedEvent, end_time: newValue.toISOString() });
                  }
                }}
                disablePast
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>
            <TextField
              label="Description"
              id="description"
              size="small"
              fullWidth
              margin="normal"
              value={editedEvent.description}
              onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })}
              helperText="Optional"
            />
            <TextField
              label="Location"
              id="location"
              size="small"
              fullWidth
              margin="normal"
              value={editedEvent.location}
              onChange={(e) => setEditedEvent({ ...editedEvent, location: e.target.value })}
              required
              helperText="Please enter the location of the event"
            />
            <TextField
              label="Calendar Link"
              id="calendar_link"
              size="small"
              fullWidth
              required
              margin="normal"
              value={editedEvent.calendar_link}
              onChange={(e) => setEditedEvent({ ...editedEvent, calendar_link: e.target.value })}
              helperText="Please enter the calendar link of the event"
            />
            <TextField
              label="Instagram Link"
              id="instagram_link"
              size="small"
              fullWidth
              margin="normal"
              value={editedEvent.instagram_link}
              onChange={(e) => setEditedEvent({ ...editedEvent, instagram_link: e.target.value })}
              helperText="Optional"
            />

            <Button
              variant="contained"
              onClick={() => {
                onEdit(editedEvent);
                setOpenEdit(false);
              }}
            >
              Update
            </Button>
            <Button variant="outlined" onClick={() => setOpenEdit(false)}>
              Cancel
            </Button>
          </Box>
        </Modal>
        <Button itemID={event._id} onClick={() => setOpenDelete(true)} variant="outlined">
          Delete
        </Button>
        <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
          <Box sx={style} component="form">
            <p>Are you sure you want to delete this item? ({event._id})</p>
            <Button
              variant="contained"
              onClick={() => {
                onDelete();
                setOpenDelete(false);
              }}
            >
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </TableCell>
    </TableRow>
  );
};

const DashBoard = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [events, setEvents] = useState<Array<Event>>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [calendarLink, setCalendarLink] = useState<String>();
  const [instagramLink, setInstagramLink] = useState<String>();
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);

  useEffect(() => {
    eventListAPI().then((res) => {
      setEvents(res);
      console.log(res);
    });
  }, []);

  const handleOpen = () => setOpenCreate(true);
  const handleClose = () => setOpenCreate(false);
  const handleSubmit = () => {
    if (startTime === null || endTime === null) {
      return;
    }

    const requestBody = {
      title,
      description,
      location,
      calendar_link: calendarLink,
      instagram_link: instagramLink,
      start_time: startTime.toISOString(),
      end_time: endTime.toISOString(),
    };

    eventCreateAPI(requestBody)
      .then((res) => {
        eventListAPI().then((res) => setEvents(res));
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id: string) => {
    eventDeleteAPI(id)
      .then((res) => {
        setEvents(events.filter((event) => event._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id: string, updatedEvent: Event) => {
    // Send API request to update the event
    eventUpdateAPI(id, updatedEvent)
      .then((res) => {
        const updatedEvents = events.map((event) => (event._id === id ? updatedEvent : event));
        setEvents(updatedEvents);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container style={{ background: 'white' }}>
      <Typography variant="h3" gutterBottom>
        Events Dashboard
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Button onClick={handleOpen} variant="contained">
          Add Event
        </Button>
        <Modal open={openCreate} onClose={handleClose}>
          <Box sx={style} component="form">
            <TextField
              label="Title"
              id="title"
              size="small"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              helperText="Please enter the title of the event"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => {
                  setStartTime(newValue);
                }}
                disablePast
                sx={{ width: '100%', marginBottom: '20px' }}
              />
              <DateTimePicker
                label="End Time"
                value={endTime}
                onChange={(newValue) => {
                  setEndTime(newValue);
                }}
                disablePast
                sx={{ width: '100%' }}
              />
            </LocalizationProvider>
            <TextField
              label="Description"
              id="description"
              size="small"
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              helperText="Optional"
            />
            <TextField
              label="Location"
              id="location"
              size="small"
              fullWidth
              margin="normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              helperText="Please enter the location of the event"
            />
            <TextField
              label="Calendar Link"
              id="calendar_link"
              size="small"
              fullWidth
              required
              margin="normal"
              value={calendarLink}
              onChange={(e) => setCalendarLink(e.target.value)}
              helperText="Please enter the calendar link of the event"
            />
            <TextField
              label="Instagram Link"
              id="instagram_link"
              size="small"
              fullWidth
              margin="normal"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              helperText="Optional"
            />

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Modal>
        <Button variant="outlined">Logout</Button>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>6-Digit</TableCell>
              <TableCell>Title</TableCell>
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
            {events.map((event) => (
              <EventRow
                key={event._id}
                event={event}
                onDelete={() => handleDelete(event._id)}
                onEdit={(updatedEvent: Event) => handleEdit(event._id, updatedEvent)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DashBoard;
