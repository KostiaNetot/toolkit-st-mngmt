import { Link } from 'react-router-dom';

export const EventListItem = ({ event }) => {
  const eventPath = `/events/${event.id}`;

  return (
    <div>
      <Link to={eventPath}>
        {event.title}
      </Link>
      <div>
        {event.datetime_local}
      </div>
    </div>
  );
}