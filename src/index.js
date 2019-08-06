import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers);


// //ACTION INCREMENT
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return{
//         type: 'DECREMENT'
//     }
// }
// //REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// };

// //STORE -> GLOBALIZED STATE
// let store = createStore(counter);
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

