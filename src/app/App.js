import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { HomePage } from '../containers/HomePageContainer';
import { EventListContainer } from '../containers/EventListContainer';
import { EventDetailsContainer } from '../containers/EventDetailsContainer';
import { AppHeader } from '../components/AppHeader';
import { Navigation } from '../components/Navigation';

function App() {
  return (
    <Router>
      <Grid padded>
        <AppHeader/>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={ <HomePage/> } />
          <Route exact path="/events" element={ <EventListContainer/> } />
          <Route path="/events/:id" element={ <EventDetailsContainer/> } />
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
