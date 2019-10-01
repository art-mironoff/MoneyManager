import React, {useState} from 'react';
import Layout from '../../layout/container.js';
import MoneyForm from '../../components/MoneyForm';

const ExpensesPage = props => {
  const {navigation} = props;
  const [money, setMoney] = useState('');
  const [category, setCategory] = useState('0');
  const [comment, setComment] = useState();

  const categories = [
    {id: 0, name: 'Продукты'},
    {id: 1, name: 'Обеды, перекусы'},
    {id: 2, name: 'Проезд'},
    {id: 3, name: 'Автомобиль'},
    {id: 4, name: 'Коммуналка, Интернет, Связь'},
    {id: 5, name: 'Аптека, Лечение'},
    {id: 6, name: 'Одежда'},
    {id: 7, name: 'Подарки'},
    {id: 8, name: 'Отдых'},
    {id: 9, name: 'Ремонт'},
    {id: 10, name: 'Отложили в Банк'}
  ];

  const handleAdd = () => {
    if (!money || !category) {
      alert('Все поля должны быть заполнены!');
    }
    //addExpense(money, category, comment);
  };

  return (
    <Layout navigation={navigation}>
      <MoneyForm
        money={money}
        category={category}
        comment={comment}
        categoriesDic={categories}
        setMoney={setMoney}
        setCategory={setCategory}
        setComment={setComment}
        onSave={handleAdd}
      />
    </Layout>
  );
};

export default ExpensesPage;
