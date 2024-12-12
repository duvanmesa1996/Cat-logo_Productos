import React, { useState, useEffect } from 'react';

const ProductForm = ({ addOrUpdateProduct, editingProduct, setEditingProduct }) => {
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    } else {
      setProduct({ name: '', price: '' });
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert('Por favor, llena todos los campos.');
      return;
    }
    addOrUpdateProduct(product);
    setProduct({ name: '', price: '' });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <button type="submit">{editingProduct ? 'Actualizar' : 'Agregar'}</button>
      {editingProduct && (
        <button type="button" onClick={() => setEditingProduct(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default ProductForm;
