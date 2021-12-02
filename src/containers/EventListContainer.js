import { Grid } from 'semantic-ui-react';
import { Loader } from '../components/Loader';
import { EventList } from '../components/EventList';

import { useGetEvents } from '../hooks/reduxHooks';

export const EventListContainer = () => {
  const events = useGetEvents();

  return (
    <Grid.Row style={{ padding: "1rem" }}>
      {!events?.loading ? <EventList eventsData={events} /> : <Loader/>}
    </Grid.Row>
  )
}
