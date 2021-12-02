import { EventListItem } from '../components/EventListItem';
import { Header, List } from 'semantic-ui-react';

export const EventList = ({ eventsData }) => {
  const { events } = eventsData;

  return (
    <List divided relaxed>
       <Header as='h2'>Events: </Header>
      {events.map(event => <EventListItem key={event.id} event={event} />)}
      </List>
  );
}