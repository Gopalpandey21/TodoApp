import { useState,useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputVal, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputVal.trim()) {
      setItems([...items, { text: inputVal, completed: false }]);
      setInputValue(""); 
    }
  };

  const handleComplete = (index) => {
    setItems(items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);
  
  return (
    <>
      <h1>Todo App</h1>
      <input
        style={{ width: '25%', padding: '7px', fontSize: '1.4em' }}
        type="text"
        value={inputVal}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
        style={{ marginLeft: '10px', backgroundColor: 'black', color: 'white', width: '54px', height: '36px', fontSize: '1.3em', borderRadius: '7px' }} 
        onClick={handleAddTodo}
      >
        Add
      </button>

      <TodoList items={items} onComplete={handleComplete} onDelete={handleDelete} />
    </>
  );
}

export default App;
