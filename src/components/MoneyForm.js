import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Item, Input, Picker, Button, Text} from 'native-base';

const MoneyForm = props => {
  const {
    money,
    category,
    comment,
    categoriesDic,
    setMoney,
    setCategory,
    setComment,
    onSave,
  } = props;

  return (
    <Fragment>
      <Item>
        <Input placeholder="Деньги" value={money} onChange={setMoney} />
      </Item>
      <Item>
        <Picker selectedValue={category} onValueChange={setCategory}>
          {categoriesDic.map(item => {
            return (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            );
          })}
        </Picker>
      </Item>
      <Item>
        <Input
          placeholder="Комментарий"
          value={comment}
          onChange={setComment}
        />
      </Item>
      <Button block onPress={onSave} full>
        <Text>Add</Text>
      </Button>
    </Fragment>
  );
};

MoneyForm.propTypes = {
  money: PropTypes.string,
  category: PropTypes.string,
  comment: PropTypes.string,
  categoriesDic: PropTypes.array.isRequired,
  setMoney: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default MoneyForm;
