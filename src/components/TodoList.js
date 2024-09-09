import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../store/actions';

const TodoList = ({ setEditTodo }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          {todo.text}
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => setEditTodo(todo)}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
