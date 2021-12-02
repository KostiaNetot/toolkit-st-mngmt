import { Card, Grid, Icon, Image } from 'semantic-ui-react';

export const HomePage = () => {
  return (
    <Grid.Row style={{ padding: "1rem" }}>
      <Card>
        <Image src='https://avatars.githubusercontent.com/u/44783119?s=400&u=0fee91000a2c63aefe31572f4796ac07958c56c1&v=4' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Kostia</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:pugjazz@gmail.com">
            <Icon name='mail' />
            pugjazz@gmail.com
          </a>
        </Card.Content>
      </Card>
    </Grid.Row>
  );
}