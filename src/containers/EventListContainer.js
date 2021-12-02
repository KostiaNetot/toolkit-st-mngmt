// import loader
import { EventList } from '../components/EventList';

import { useGetEvents } from '../hooks/reduxHooks';

export const EventListContainer = () => {
  const events = useGetEvents();

  return !events?.loading ? <EventList eventsData={events} /> : <div>Loading...</div>;
}
