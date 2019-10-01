import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';

const LoginPage = props => {
  const {navigate} = props.navigation;
  return (
    <Container>
      <Header>
        <Body style={styles.header}>
          <Title>Login</Title>
        </Body>
      </Header>
      <Content padder>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
        <Button full onPress={() => navigate('Expenses')}>
          <Text>Sign In</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginPage;
