import React from 'react';
import Layout from '../../layout/container.js';
import {List} from 'native-base';
import ListItem from './components/ListItem';

const data = [
  {
    type: 'income',
    money: 20000,
    category: 'Зарплата',
    description: '',
    date: '29 сентября',
  },
  {
    type: 'expense',
    money: -1025,
    category: 'Продукты',
    description: 'Покупки из Магнита',
    date: '29 сентября',
  },
  {
    type: 'expense',
    money: -1025,
    category: 'Продукты',
    description: 'Покупки из Магнита',
    date: '29 сентября',
  },
];

const ListPage = props => {
  const {navigation} = props;
  return (
    <Layout navigation={navigation}>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </List>
    </Layout>
  );
};

export default ListPage;
