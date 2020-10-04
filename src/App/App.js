import React from 'react';
import {Provider} from "react-redux";
import store from "../redux/store";
import Header from "../Header/Header";
import ArrayView from "../ArrayView/ArrayView";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
