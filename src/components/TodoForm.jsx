import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo(''); // Reset input to an empty string after adding
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write here"
        className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/30 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="text-center text-white bg-green-700 px-4 rounded-r-lg">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
