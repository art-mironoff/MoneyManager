import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './src/pages/Login/container';
import ExpensesPage from './src/pages/Expenses/container';
import IncomesPage from './src/pages/Incomes/container';
import ListPage from './src/pages/List/container';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: LoginPage},
    Expenses: {screen: ExpensesPage},
    Incomes: {screen: IncomesPage},
    List: {screen: ListPage},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
