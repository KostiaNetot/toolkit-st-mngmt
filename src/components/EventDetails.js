import { Card } from 'semantic-ui-react';

export const EventDetails = ({ event }) => {

  return (
    <Card>
      <Card.Content>
        <Card.Header>{event.title}</Card.Header>
        <Card.Meta>Date: {event.datetime_local}</Card.Meta>
        <Card.Meta>Event ID: {event.id}</Card.Meta>
        <Card.Description>Type: {event.type}</Card.Description>
        <Card.Description>Venue: {event.venue.name}</Card.Description>
      </Card.Content>
    </Card>
  );
}

