


export const EventDetails = ({ event }) => {

  return (
    <div>
      <h3>Event ID: {event.title}</h3>
      <h4>Event ID: {event.id}</h4>
      <ul>
        <li>Date: {event.datetime_local}</li> {/* TODO: date format */}
        <li>Type: {event.type}</li>
        <li>Venue: {event.venue.name}</li>
      </ul>
    </div>
  );
}

