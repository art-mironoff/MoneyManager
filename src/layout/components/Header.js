import React from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Button, Icon, Body, Title} from 'native-base';

const LayoutHeader = props => {
  const {navigation} = props;
  return (
    <Header noShadow>
      <Left>
        <Button
          transparent
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Money Manager</Title>
      </Body>
    </Header>
  );
};

LayoutHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LayoutHeader;