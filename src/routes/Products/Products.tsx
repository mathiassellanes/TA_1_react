import { Link } from 'react-router-dom';
import { products } from '../../constants';

import './index.css';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul className="products">
        {products.map(product => (
          <li className="products__item" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
