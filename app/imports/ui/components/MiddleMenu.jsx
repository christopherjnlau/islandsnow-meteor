import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <div className='mid'>
          <Container>
            <Menu className = 'ui borderless compact middle menu'>

              <Dropdown item text="MEN">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMEN">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>KIDS</Menu.Item>
              <Dropdown item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>SEARCH</Menu.Item>

            </Menu>
          </Container>
        </div>

    );
  }
}
