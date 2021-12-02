import { useParams } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { Loader } from '../components/Loader';
import { useGetEvent } from '../hooks/reduxHooks';
import { EventDetails } from '../components/EventDetails';

export const EventDetailsContainer = () => {
  const { id } = useParams();
  const eventData = useGetEvent(Number(id));

  return (
    <Grid.Row style={{ padding: "1rem" }}>
      {!eventData?.loading ? <EventDetails event={eventData.event} /> : <Loader/>}
    </Grid.Row>
  );
}

