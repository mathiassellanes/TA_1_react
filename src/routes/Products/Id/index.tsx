import { useParams } from "react-router-dom";

import { products } from "../../../constants";

const Product = () => {
  const { id } = useParams();
  const product = products.find(product => product.id.toString() === id);

  return (
    <div>
      {
        product ? (
          <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </>
        ) : (
          <h1>Product not found</h1>
        )
      }

    </div>
  );
}

export default Product;
