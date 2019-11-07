/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import tabAssets from '@assets/tab';

const HomeIcon = styled.Image`
  width: 21;
  height: 20;
`;
let Icon = styled.Image``;

class TabIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {type, focused} = this.props;

    const source = tabAssets[`${type.toLowerCase()}${focused ? '' : 'Grey'}`];
    switch (type) {
      case 'Home':
        Icon = HomeIcon;
        break;
      default:
        return null;
    }

    return <Icon source={source} />;
  }
}

TabIcon.propTypes = {
  type: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

TabIcon.defaultProps = {
  type: '',
  focused: false,
};

export default TabIcon;
