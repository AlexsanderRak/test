import { combineReducers } from 'redux';
import countersReducer from "./countersReducer";

let combinedReducer = combineReducers({
    store: countersReducer
});

export default combinedReducer;










// import { combineReducers } from 'redux';
// import countersReducer from "./countersReducer";

// let combinedReducer = combineReducers({
//     // редьюсер countersReducer отвечает за раздел state под именем counter
//     counter: countersReducer,
//     // + другие редьюсеры
// });

// export default combinedReducer;