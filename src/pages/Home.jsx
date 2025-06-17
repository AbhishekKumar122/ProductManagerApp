import React, { useState } from 'react';
import AddProduct from '../components/AddProduct';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const addProduct = (newProduct) => {
    const exists = products.some(p => p.name.toLowerCase() === newProduct.name.toLowerCase());
    if (!exists) {
      setProducts([...products, newProduct]);
    } else {
      alert('Product already exists!');
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Product Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
          >
          
            Logout
          </button>
          
        </div>
        <AddProduct onAdd={addProduct} />
        <div className="my-4">
          <SearchBar onSearch={setQuery} />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;
