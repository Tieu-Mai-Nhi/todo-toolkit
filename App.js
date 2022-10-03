import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Form from './components/Form';
import TodoList from './features/TodoList';
import Navigation from './navigation/Navigation';
import store from './redux/store';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Navigation />
        <Form />
        <TodoList />
      </SafeAreaView >
    )
  }




  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'deeppink',
    marginTop: 100,
  }
});
