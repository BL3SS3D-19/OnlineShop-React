import { Products } from '../components/Products.jsx';

export function ProductsView() {
  return (
    <div>
      <h1>Todos los productos</h1>
      <Products /> {/* Aquí se muestran todos los productos */}
    </div>
  );
}

export default ProductsView;
