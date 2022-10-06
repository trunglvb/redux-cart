import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/main";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState } from "./reducers/reducer";

const middleware = [thunk];

const store = createStore(
    rootReducer, //lang nghe thau hieu tong hop
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// //rat loang ngoang nhung ap dung cho hau nhu moi app co su dung redux

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../redux/reducers/reducer";

// const store = configureStore({
//     reducer: {
//         cartReducer: cartReducer,
//     },
// });

// export default store;
