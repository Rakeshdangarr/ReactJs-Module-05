import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItem } from '../features/items/itemsSlice';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState('');

  // Handle adding a new item
  const handleAddItem = () => {
    if (newItem) {
      dispatch(addItem({ id: Date.now(), name: newItem }));
      setNewItem('');
    }
  };

  // Handle removing an item
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  // Handle editing an item
  const handleEditItem = (item) => {
    setEditItem(item);
    setEditText(item.name);
  };

  // Handle updating an item
  const handleUpdateItem = () => {
    if (editItem && editText) {
      dispatch(updateItem({ id: editItem.id, updatedData: { name: editText } }));
      setEditItem(null);
      setEditText('');
    }
  };

  return (
    <div>
      <h2>Item List</h2>

      {/* Input to add a new item */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Display the list of items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editItem && editItem.id === item.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdateItem}>Update</button>
              </div>
            ) : (
              <span>{item.name}</span>
            )}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleEditItem(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
