import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../store/actions';

const TodoForm = ({ editTodo, setEditTodo }) => {
  const [input, setInput] = useState(editTodo ? editTodo.text : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo) {
      dispatch(updateTodo({
        id: editTodo.id,
        text: input
      }));
      setEditTodo(null);
    } else {
      dispatch(addTodo({
        id: Date.now(),
        text: input
      }));
    }

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit" className="btn btn-primary">
        {editTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
