import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {ListItem, Left, Text, Body, Right} from 'native-base';

const ListRow = props => {
  const {item} = props;
  return (
    <ListItem avatar>
      <Left>
        <Text
          style={[styles.money, item.type === 'income' ? styles.income : {}]}>
          {item.type === 'income' ? '+' : ''}
          {item.money} руб.
        </Text>
      </Left>
      <Body>
        <Text>{item.category}</Text>
        <Text note>{item.description}</Text>
      </Body>
      <Right>
        <Text note>{item.date}</Text>
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  money: {
    textAlign: 'left',
    lineHeight: 19,
    width: 95,
  },
  income: {
    color: 'green',
  },
});

ListRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListRow;
