const redux=require('redux');

const createStore=redux.createStore;
const initialState={
    counter:0
}
//reducer
const rootReducer=(state=initialState,action)=>{
    if(action.type=='INC')
    return {
        ...state,
        counter:action.value
    }
}
//

//store
const store=createStore(rootReducer);

//subscription
store.subscribe(()=>{
    console.log('from subscribe',store.getState());
})

//dispatch(by default it diapatches a object'action')
store.dispatch({type:'INC',value:10});



console.log('from console',store.getState());

