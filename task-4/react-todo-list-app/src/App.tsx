import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import type { Todo } from './Todo';
import './App.css';

const STORAGE_KEY = 'todos-react-ts';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  
  const [nextId, setNextId] = useState(() => {
    // Initialize nextId based on existing todos
    if (todos.length === 0) return 1;
    return Math.max(...todos.map(todo => todo.id)) + 1;
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nextId,
      text: text.trim(),
      completed: false
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    const trimmedText = newText.trim();
    if (!trimmedText) return;
    
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default App;