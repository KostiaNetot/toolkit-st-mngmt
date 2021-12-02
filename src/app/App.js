import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventListContainer } from '../containers/EventListContainer';
import { EventDetailsContainer } from '../containers/EventDetailsContainer';

function App() {
  return (
    <Router>
      <div>
        <div> {/* TODO: Header */}
          <h1>Header</h1>    
          <NavLink to='/'>Home</NavLink>
          <NavLink to={'/events'}>Events</NavLink>
        </div>
        <hr/>  {/* TODO: Divider */}
        <Routes>
          <Route exact path="/" element={ <div>Home</div> } />
          <Route exact path="/events" element={ <EventListContainer/> } />
          <Route path="/events/:id" element={ <EventDetailsContainer/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
