import React from 'react';

const ProductFilter = ({ filter, setFilter }) => (
  <input
    type="text"
    placeholder="Buscar productos"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="product-filter"
  />
);

export default ProductFilter;
