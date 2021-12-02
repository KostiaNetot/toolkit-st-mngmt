import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

export const EventListItem = ({ event }) => {
  const eventPath = `/events/${event.id}`;

  return (
    <List.Item>
      <List.Icon name='calendar outline' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>
          <Link to={eventPath}>{event.title}</Link>
        </List.Header>
        <List.Description as='a'>
          {event.datetime_local}
        </List.Description>
      </List.Content>
    </List.Item>
  );
}