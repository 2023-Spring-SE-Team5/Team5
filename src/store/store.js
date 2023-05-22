import { createStore } from "redux";

const initialState = {
  login: false,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "login") {
    return {
      login: true,
    };
  }

  if (action.type === "logout") {
    return {
      login: false,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
