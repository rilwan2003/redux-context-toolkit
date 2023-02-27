import { useContext } from 'react';
import { ItemsContext } from './ItemsContext';

const ItemsList = () => {
  const { items, loading, error, deleteItem } = useContext(ItemsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
