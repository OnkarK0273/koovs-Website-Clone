import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./Product/product.reducer";
import { reducer as HomeProductReducer } from "./HomeProduct/homeproduct.reducer";
import { reducer as CartReducer } from "./Cart/cart.reducer";
import { adminReducer } from "./admin/admin.reducer";
import { reducer as PaymentReducer } from "./Payments/payment.reducer";
import { signupReducer} from "./Auth/signup.reducer"
import { loginReducer } from "./Auth/login.reducer";

const root = combineReducers({
  CartReducer,
  ProductReducer,
  PaymentReducer,
  adminReducer,
  signupReducer,
  loginReducer,
  HomeProductReducer,
});
export const store = legacy_createStore(root, compose(applyMiddleware(thunk)));
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
