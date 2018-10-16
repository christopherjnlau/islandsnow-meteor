import React from 'react';
import { Grid, List, Input, Button } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className='k'>
          <Grid padded className = 'k' divided='vertically'>
            <Grid.Row padded className ='pad' container columns={3} >
              <Grid.Column padded><h5>NAVIGATION</h5><hr/><List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
              </Grid.Column>
              <Grid.Column padded><h5>MAIN MENU</h5><hr/><List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List></Grid.Column>
              <Grid.Column padded><h5>CONNECT</h5><hr/><List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item>
                  <Input focus placeholder='Enter email address'/>
                  <Button className='black' size='small'>Join</Button>
                </List.Item>
              </List></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
