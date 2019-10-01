import React from 'react';
import PropTypes from 'prop-types';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

const FooterLayout = props => {
  const {navigation} = props;
  const {navigate} = navigation;
  const {routeName} = navigation.state;
  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          active={routeName === 'Expenses'}
          onPress={() => navigate('Expenses')}>
          <Icon name="ios-remove-circle-outline" />
          <Text>Expenses</Text>
        </Button>
        <Button
          vertical
          active={routeName === 'Incomes'}
          onPress={() => navigate('Incomes')}>
          <Icon name="ios-add-circle-outline" />
          <Text>Incomes</Text>
        </Button>
        <Button
          vertical
          active={routeName === 'List'}
          onPress={() => navigate('List')}>
          <Icon name="list" />
          <Text>List</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

FooterLayout.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FooterLayout;
