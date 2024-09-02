import TodoItem from './TodoItem';  

function TodoList({ items, onComplete, onDelete }) {
  if (!items || items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0, }}>
      {items.map((item, index) => (
        <TodoItem 
          key={index}
          index={index}
          todo={item}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
