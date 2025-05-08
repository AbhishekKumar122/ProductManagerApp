import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search Product"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
