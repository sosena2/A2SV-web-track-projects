import React from 'react';
import TodoItem from './TodoItem';
import type { Todo } from '../Todo';

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;