import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [editTodo, setEditTodo] = useState(null);

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Todo App with Redux</h1>
        <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} />
        <TodoList setEditTodo={setEditTodo} />
      </div>
    </Provider>
  );
};

export default App;
