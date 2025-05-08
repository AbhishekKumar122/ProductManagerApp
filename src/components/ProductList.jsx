import React from 'react';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No Product Found</p>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {products.map((p, i) => (
        <li
          key={i}
          className="flex justify-between items-center py-3 px-4 bg-white hover:bg-gray-100 rounded transition mb-2 shadow"
        >
          <span className="font-medium text-gray-800">{p.name}</span>
          <span className="text-green-600 font-semibold">₹{p.price}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
