// App.js
import React from 'react';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { SearchPage } from './components/SearchPage';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <NavigationBar/>
      <SearchPage/>
    </Provider>
  );
};

export default App;
