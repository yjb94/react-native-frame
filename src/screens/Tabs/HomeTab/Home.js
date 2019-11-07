import React from 'react';
import {inject} from 'mobx-react';
import styled from 'styled-components/native';
import RoomList from './Room/RoomList';

@inject(stores => ({
  setNav: stores.nav.setNav,
}))
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.props.setNav(this.props.navigation);
  }

  render() {
    return (
      <Container>
        <RoomList />
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

export default Home;
