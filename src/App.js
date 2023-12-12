import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './App.css';
import techEvents from './data/events';

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
      />
    </div>
  );
}

export default App;
