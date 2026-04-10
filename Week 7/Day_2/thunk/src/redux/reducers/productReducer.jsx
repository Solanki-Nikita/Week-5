import { ActionTypes } from "../contants/action-types";


const initialState = {
    products:[{
        id:1,
        title:"Nikita",
        category:"Programmer"
    }]
}

export const productReducer = (state = initialState, action) => {
     switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
            ...state,
            products: action.payload, 
            };
          
        default:
            return state;
    }
};