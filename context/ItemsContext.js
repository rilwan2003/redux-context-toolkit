import { createContext, useState, useEffect } from 'react';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const value = {
    items,
    loading,
    error,
    addItem,
    deleteItem,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
