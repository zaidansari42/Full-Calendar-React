import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';
import techEvents from './data/events';
import { Tooltip, Typography } from '@mui/material';

function renderEventContent(eventInfo) {
  const eventDetails = eventInfo.event?._def;
  return (
    <div style={{ overflow: 'hidden' }}>
      <Tooltip title={`${eventDetails?.title} - ${eventDetails?.extendedProps.description}`}>
        <Typography>
          <Typography>{eventInfo.timeText}</Typography>
          <Typography>{eventDetails?.title}</Typography>
          <Typography>{eventDetails?.extendedProps.description}</Typography>
        </Typography>
      </Tooltip>
    </div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Full Calendar App</header>
      <FullCalendar
        headerToolbar={{
          start: 'title', // Will show us the calendar's month & year on the start
          end: 'today prev,next' // Will give us the option of the buttons on the right to navigate
        }}
        plugins={[dayGridPlugin]} // Calendar View type
        events={techEvents} // List of all the events to be displayed
        eventContent={renderEventContent} // Extra content to be diplayed
      />
    </div>
  );
}

export default App;
