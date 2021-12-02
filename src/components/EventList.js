import { EventListItem } from '../components/EventListItem';

export const EventList = ({ eventsData }) => {
  const { events } = eventsData;

  return (
    <div>
      <h2>Events: </h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <EventListItem event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}