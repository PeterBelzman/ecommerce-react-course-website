import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
    // console.log(foundProduct);
  }, [id]);

  if(!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h2 className="product-detail-name">{product.name}</h2>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
