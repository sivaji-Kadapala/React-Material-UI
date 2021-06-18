//3.1
const redux=require('redux')
//3.2. creating store
const createStore=redux.createStore
//1.define string constant
const BUY_CAKE='BUY_CAKE';
//1.2.action funtion
function buyCake(){
//1.1.define an action 
return{
    type:BUY_CAKE,
    info:'first redux action'
}
}
//2.Reducers
//specify how the apps state changes in response to actions sent to the store
//functions that accepts state and action as arguements,and returns the next state of the application
//(previousState,action)=>newState
//(previousState
const intialState={
    numofcakes:10
}
const reducer=(state=intialState,action) => {
    switch (action.type) {
        case BUY_CAKE:
            return{
                //2.1.copy of the state object
                ...state,
                //2.2.update
                numofcakes:state.numofcakes-1
            }
            
          
    
        default:
           return state;
    }
    
}
//3.3.createStore function accepts the reducer
const store=createStore(reducer)
//3.4.access to state via getState()
console.log('intial state',store.getState());
//3.5,3.7
const unsubscribe=store.subscribe(() => {
    console.log('update state',store.getState());
})
//3.6.dispatch
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();