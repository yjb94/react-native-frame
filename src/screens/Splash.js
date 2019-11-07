import React from 'react';
import styled from 'styled-components/native';
import {inject} from 'mobx-react';

@inject(stores => ({}))
class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.disableYellowBox = true;
  }

  componentDidMount = async () => {};

  render() {
    //render for authorized user
    // return ();

    return (
      <Container>
        <Text>it works!</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

export default Splash;
