import React from 'react';
import { Provider } from 'react-redux';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import store from '../redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { ArrayView } from '../ArrayView';
import { SortingInfo } from '../SortingInfo';
import { ControlPanel } from '../ControlPanel';
import { arrays, algorithms } from './configs';

export const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol xl="9" lg="8">
            <ArrayView />
          </MDBCol>
          <MDBCol xl="3" lg="4" className="d-none d-lg-block">
            <SortingInfo arrays={arrays} algorithms={algorithms} />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="12">
            <ControlPanel arrays={arrays} algorithms={algorithms} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </Provider>
);
