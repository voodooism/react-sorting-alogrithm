import React from 'react';
import {Provider} from "react-redux";
import store from "../redux/store";
import Header from "../Header/Header";
import ArrayView from "../ArrayView/ArrayView";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ArrayView />
      </div>
    </Provider>
  );
}
