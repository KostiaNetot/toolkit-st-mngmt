import { NavLink } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';

export const Navigation = () => {

  return (
    <Grid.Row>
      <Menu>
        <Menu.Item>
          <NavLink to='/'>Home</NavLink>  
        </Menu.Item>
        <Menu.Item>
          <NavLink to={'/events'}>Events</NavLink>
        </Menu.Item>
      </Menu>
    </Grid.Row>
  )
}