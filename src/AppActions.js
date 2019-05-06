// ------------------------------------
// Constants
// ------------------------------------
export const AppActions = {
    INITIALIZE_ITEMS: 'INITIALIZE_ITEMS',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART'
}

// ------------------------------------
// Actions
// ------------------------------------
export const initializeItems = items => {
    return {
        type: AppActions.INITIALIZE_ITEMS,
        payload: items
    }
}

export const addItemToCart = item => {
    return {
        type: AppActions.ADD_ITEM_TO_CART,
        payload: item
    }
}