import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && price) {
      onAdd({ name, price });
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Add Product</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full md:w-1/4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
