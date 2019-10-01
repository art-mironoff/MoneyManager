import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content} from 'native-base';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = props => {
  const {navigation} = props;
  return (
    <Container>
      <Header navigation={navigation} />
      <Content padder>{props.children}</Content>
      <Footer navigation={navigation} />
    </Container>
  );
};

Layout.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Layout;
