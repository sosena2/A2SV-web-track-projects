import React, { useState, useEffect, useRef } from 'react';
import type {Todo} from '../Todo';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    } else if (!editText.trim()) {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    } else if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="todo-edit-input"
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={() => {
            setIsEditing(true);
            setEditText(todo.text);
          }}
        >
          {todo.text}
        </span>
      )}
      
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;