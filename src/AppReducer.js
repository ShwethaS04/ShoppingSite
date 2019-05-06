import { AppActions } from "./AppActions";

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items: [],
    cartItems: [],
    totalItems: 0
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActions.INITIALIZE_ITEMS: {
            return {
                ...state,
                items: action.payload
            }
        }

        case AppActions.ADD_ITEM_TO_CART: {
            let tempCart = [...state.cartItems];
            let item = action.payload
            let valueFound = false;
            for (let i = 0; i < tempCart.length; i++) {
                if (tempCart[i].id === item.id) {
                    tempCart[i] = { ...tempCart[i], count: tempCart[i].count + 1 }
                    valueFound = true;
                    break;
                }
            }
            if (!valueFound) {
                tempCart = [...tempCart, { ...item, count: 1 }]
            }
            return {
                ...state,
                cartItems: tempCart,
                totalItems: state.totalItems + 1
            }
        }

        default:
            return state;
    }
}

export default appReducer;