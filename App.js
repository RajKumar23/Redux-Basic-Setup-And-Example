import React from 'react';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import Counter from "./src/screens/CounterScreen"

export default function App() {
  return <Provider store={store}>
    <Counter />
  </Provider >
}


