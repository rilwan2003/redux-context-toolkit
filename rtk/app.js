import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, deleteItem } from './itemsSlice';

const ItemsList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleAddItem({ name: newItemName });
          setNewItemName("");
        }}>
          <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ItemsList;






