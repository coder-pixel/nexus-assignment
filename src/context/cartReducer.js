export const cartReducer = (state, action) => {
    // return state
    switch (action.type) {
        case "INCREMENT_PRODUCT":
            console.log("increment item func called");
            const updatedCart_incre = state.products.map(currProduct => {
                if (currProduct.id === action.payload) {
                    return {
                        ...currProduct,
                        quantity: currProduct.quantity + 1
                    }
                }
                return currProduct;
            })
            return {
                ...state,
                products: updatedCart_incre,
                totalItems: state.totalItems + 1,
                totalAmount: updatedCart_incre.map(currProduct => {
                    console.log("inc price")
                    return currProduct.price * currProduct.quantity
                }).reduce((accumulator, currValue) => accumulator + currValue, 0)
            }

        case "DECREMENT_PRODUCT":
            console.log("decrement item func called");
            const updatedCart_decre = state.products.map(currProduct => {
                if (currProduct.id === action.payload) {
                    if (currProduct.quantity > 0) {
                        return {
                            ...currProduct,
                            quantity: currProduct.quantity - 1
                        }
                    }
                }
                return currProduct;
            })
            return {
                ...state,
                products: updatedCart_decre.filter(currProduct => currProduct.quantity > 0),
                totalItems: state.totalItems - 1,
                totalAmount: updatedCart_decre.map(currProduct => {
                    console.log("dec price")
                    return currProduct.price * currProduct.quantity
                }).reduce((accumulator, currValue) => accumulator + currValue, 0)
            }

        // case "REMOVE_ITEM":
        //     console.log("remove item func called")
        //     return {
        //         ...state,
        //         products: state.products.filter(currProduct => currProduct.id !== action.payload),
        //         totalItems: state.products.map(product => {
        //             if(!(product.id == action.payload)){
        //                 // console.log(state.totaItems)
        //                 console.log(product.quantity)
        //                 return product.quantity
        //             }
        //         }).reduce((accumulator, currValue) => accumulator + currValue, 0),
        //         // totalAmount: 
        //     }

        // case "CLEAR_CART":
        //     return {
        //         ...state,
        //         products: [],
        //         totalItems: 0
        //     }
        default:
            return state 
    }
}