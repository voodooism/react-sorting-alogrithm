import React from 'react';
import { Provider } from 'react-redux';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import store from '../redux/store';
import ControlPanel from '../ControlPanel/ControlPanel';
import ArrayView from '../ArrayView/ArrayView';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import SortingInfo from '../SortingInfo/SortingInfo';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol xl="9" lg="8">
              <ArrayView />
            </MDBCol>
            <MDBCol xl="3" lg="4" className="d-none d-lg-block">
              <SortingInfo />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="12">
              <ControlPanel />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Provider>
  );
}
