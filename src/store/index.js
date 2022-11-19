import { createSlice, configureStore } from "@reduxjs/toolkit";

const countInitState = { counter: 0, showCounter: true };
const initialAuthState = { isAuth: false };

// const counterReducer = (state = initState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: countInitState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
      console.log("true");
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

//this is what you look at for when you want to access it

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;


