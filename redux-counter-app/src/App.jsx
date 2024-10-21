import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Counter from "./Counter";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
