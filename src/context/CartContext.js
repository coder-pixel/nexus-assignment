import React, { createContext, useReducer } from 'react'
import { products } from "../products";
import { cartReducer } from './cartReducer';

export const CartContext = createContext();  // creating the context

const initialState = {
    products:  products,
    gstAmount: 78.00,
    totalAmount: products.map(currProduct => {
        return currProduct.price * currProduct.quantity
    }).reduce((accumulator, currValue) => accumulator + currValue, 0)
    ,
    totalItems: products.map(currProduct => {
        return currProduct.quantity
    }).reduce((accumulator, currValue) => accumulator + currValue, 0)
}
// console.log(initialState.totalItems)

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // actions
    const incrementProduct = (id) => {
        return dispatch({ type: "INCREMENT_PRODUCT", payload: id })
    }

    const decrementProduct = (id) => {
        return dispatch({ type: "DECREMENT_PRODUCT", payload: id })
    }

    const removeItem = (id) => {
        return dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }

    return (
        <CartContext.Provider value={{
            products: state.products,
            gstAmount: state.gstAmount,
            totalItems: state.totalItems,
            totalAmount: state.totalAmount,
            incrementProduct,
            decrementProduct,
            removeItem,
            clearCart,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
