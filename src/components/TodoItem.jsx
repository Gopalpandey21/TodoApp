import React from 'react';

function TodoItem({ todo, index, onComplete, onDelete }) {
  return (
    <li 
      style={{
        marginBottom: '10px',
        fontSize: '1.3em',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.text}

      <button
        style={{
          marginLeft: '10px',
          backgroundColor: 'black',
          color: 'white',
          width: '10%',
          height: '36px',
          fontSize: '1em',
          borderRadius: '7px',
        }}
        onClick={() => onComplete(index)}
      >
        {todo.completed ? 'Undo' : 'Done'}
      </button>
      
      <button
        style={{
          marginLeft: '10px',
          backgroundColor: 'black',
          color: 'white',
          width: '10%',
          height: '36px',
          fontSize: '1em',
          borderRadius: '7px',
        }}
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem; 
