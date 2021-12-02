import { Grid, Header } from 'semantic-ui-react';

export const AppHeader = () => (
  <Grid.Row style={{ padding: "1rem 1rem 0 1rem" }}>
    <Header as='h1' textAlign='center'>
      <Header.Content>toolkit-st-mngmt</Header.Content>
      <Header.Subheader>
        State management using "reduxjs/toolkit"
      </Header.Subheader>
    </Header>
  </Grid.Row>
)