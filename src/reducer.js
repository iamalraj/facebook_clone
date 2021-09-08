// data layer at the beginning - no user
export const initialState = {
    user: null,
};

//Actions
export const actionTypes = {
    SET_USER: "SET_USER",
};

// reducer listens to actions and 
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user:action.user,
                };
        default:
            return state;
    }
};

export default reducer;
