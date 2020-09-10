import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {
  profileListReducer,
  profileDetailsReducer,
  profileSaveReducer,
  profileDeleteReducer,
  profileReviewSaveReducer,
} from './reducers/profileReducers';
// import { cartReducer } from "./reducers/cartReducers";
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
// import {
//  orderCreateReducer,
//  orderDetailsReducer,
//  orderPayReducer,
//  myOrderListReducer,
//  orderListReducer,
//  orderDeleteReducer,
// } from "./reducers/orderReducers";

// const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

// export const InitialProps = {
//   //  cart: {
//   //   cartItems?: number;
//   //   shipping?: object;
//   //   payment?: object;
//   //  };
//   userSignin: {
//     loading: boolean,
//     error: boolean,
//     userInfo: {
//       token: string,
//     },
//   },
//   userRegister: {
//     loading: boolean,
//     error: boolean,
//     userInfo: {
//       token: string,
//     },
//   },
//   profileList: {
//     loading: boolean,
//     error: boolean,
//     profiles: object,
//   },
// };

const initialState = {
  //  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
  userRegister: { userInfo },
  profileList: {},
};

const reducer = combineReducers({
  profileList: profileListReducer,
  profileDetails: profileDetailsReducer,
  //  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  profileSave: profileSaveReducer,
  profileDelete: profileDeleteReducer,
  profileReviewSave: profileReviewSaveReducer,
  //  orderCreate: orderCreateReducer,
  //  orderDetails: orderDetailsReducer,
  //  orderPay: orderPayReducer,
  //  myOrderList: myOrderListReducer,
  //  orderList: orderListReducer,
  //  orderDelete: orderDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
