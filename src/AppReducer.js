// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    items : [],
    cartItems: [],
    totalItems: 0
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state;
    }
}

export default appReducer;