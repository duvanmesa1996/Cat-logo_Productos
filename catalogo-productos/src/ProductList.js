import React from 'react';

const ProductList = ({ products, deleteProduct, setEditingProduct }) => (
  <div className="product-list">
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className="product-item">
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => setEditingProduct(product)}>Editar</button>
          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))
    ) : (
      <p>No hay productos disponibles</p>
    )}
  </div>
);

export default ProductList;
