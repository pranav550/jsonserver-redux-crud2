import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Reducer/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const Store = createStore(RootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
        // other store enhancers if any
    ))

export default Store    