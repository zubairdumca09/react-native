import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../models/CartItem'
import { ADD_ORDER } from '../actions/order';
const initialState = {
    items: {},
    totalAmount: 0
}
export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART : 
            const addedProduct = action.product;
            let updatedOrNewItem;
            if(state.items[addedProduct.id]){
                updatedOrNewItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1, 
                    addedProduct.price, 
                    addedProduct.title, 
                    state.items[addedProduct.id].sum + addedProduct.price
                    )
                       
            }else{
                updatedOrNewItem = new CartItem(1, addedProduct.price, addedProduct.title, addedProduct.price)
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewItem},
                totalAmount: state.totalAmount + addedProduct.price

            } 
        case ADD_ORDER :
            return initialState;
        default :
            return state
    } 
}