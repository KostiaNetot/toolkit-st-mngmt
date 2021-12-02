import { useParams } from 'react-router';
// import Loader...
import { useGetEvent } from '../hooks/reduxHooks';
import { EventDetails } from '../components/EventDetails';

export const EventDetailsContainer = () => {
  const { id } = useParams();
  const eventData = useGetEvent(Number(id));

  return (
    !eventData?.loading ? <EventDetails event={eventData.event} /> : <div>Loading...</div>
  );
}

