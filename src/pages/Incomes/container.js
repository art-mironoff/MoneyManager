import React, {useState} from 'react';
import Layout from '../../layout/container.js';
import MoneyForm from '../../components/MoneyForm';

const IncomesPage = props => {
  const {navigation} = props;
  const [money, setMoney] = useState('');
  const [category, setCategory] = useState('0');
  const [comment, setComment] = useState();

  const categories = [{id: 0, name: 'Зарплата'}, {id: 1, name: 'Другое'}];

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

export default IncomesPage;
