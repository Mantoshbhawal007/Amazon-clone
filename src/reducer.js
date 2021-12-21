export const initialState={
    basket:[],
    user:null,
};
 
const reducer=(state, action)=>{
    console.log(action);
  switch(action.type){
    case"ADD_TO_BASKET":
    //logic for adding item to basket
    return{
        ...state,
        basket:[...state.basket, action.item],
    };
  
    case"REMOVE_FROM_BASKET":
    //logic for removing items from basket
    let newBasket=[...state.basket];
 
    
    const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
  if(index>=0){
      //item exist in the basket , remove it
      newBasket.splice(index,1)
  }
  else{
      console.warn(`cant remove product(id:${action.id})as its not in basket item`);
  }
    return{...state, basket:newBasket}

    case "SET_USER":
        return{
            ...state,user:action.user
        }
    
    //if we dont want to add or remove dimpley retrun the state
    default:
    return state;
}
}
export default  reducer;