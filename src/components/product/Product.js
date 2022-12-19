import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import "./product.css"

const Items = ({ product }) => {
    const { decrementProduct, removeItem, dispatch } = useContext(CartContext);
    
    return (
        <>
            <div className="product">
                <div className="product-img">
                    <img src={product.img} alt={product.title} />
                    <span className="wishlist"><i class="fa-regular fa-heart"></i></span>
                </div>
                <div className="product-desc">
                    <h2>{product.title}</h2>
                    <div className="product-extra">
                        <h4>Color - {product.color}</h4>
                        <h4>{`${product.size ? `Size - ${product.size}` : ""}`}</h4>
                        <h4>{`${product.material ? `Material - ${product.material}` : ""}`}</h4>
                        <div className="reviews">
                            <span className="rating">{product.rating} <i class="fa-solid fa-star-half-stroke"></i></span>
                            <span className="review">{product.reviews} Reviews</span>
                        </div>
                    </div>
                </div>
                <div className="product-actions">
                    <div className="add-minus-quantity">
                        <i className="fas fa-minus" onClick={() => decrementProduct(product.id)}></i>
                        <span>{product.quantity}</span>
                        <i className="fas fa-plus" onClick={() => dispatch({ type: "INCREMENT_PRODUCT", payload: product.id })}></i>
                    </div>

                    <div className="price">
                        <h3>₹ {product.price} <span>/ piece</span></h3>
                    </div>

                    {/* <div className="remove-item">
                        <i className="fas fa-trash-alt remove" onClick={() => removeItem(product.id)}></i>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Items
