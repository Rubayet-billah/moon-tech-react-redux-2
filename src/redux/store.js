import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";

// composeWithDevTools()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
