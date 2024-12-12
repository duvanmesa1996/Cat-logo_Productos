import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ProductFilter from './ProductFilter';
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // Cargar datos desde localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Guardar datos en localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Agregar o actualizar productos
  const addOrUpdateProduct = (product) => {
    if (product.id) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  // Eliminar producto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Filtrar productos
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Catálogo de Productos</h1>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <ProductForm
        addOrUpdateProduct={addOrUpdateProduct}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />
      <ProductList
        products={filteredProducts}
        deleteProduct={deleteProduct}
        setEditingProduct={setEditingProduct}
      />
    </div>
  );
};

export default App;
