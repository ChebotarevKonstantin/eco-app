import React from "react";
import "./App.css";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

import { Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import CompanyRegistration from "./components/CompanyRegistration/CompanyRegistration";
import "./components/CompanyRegistration/CompanyRegistration.css";

import {Switch, Route} from 'react-router-dom'
import BlicStart from '../src/components/BlicStart'
import RouteCategory from "./components/RouteCategory";


function App() {
  const [data, setData] = React.useState("Отсканируйте штрих-код");



  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        +
      </button>


      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Введите данные
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CompanyRegistration />
            </div>
          </div>
        </div>
      </div>

    <Switch>
       <Route exact path='/'>
           {/* <BarcodeScannerComponent
           width={500}
           height={500}
           onUpdate={(err, result) => {
           if (result) setData(result.text)
           }}
           /> */}
           <p>{data}</p>
           <BlicStart />
       </Route>
       <Route path='/'>
          <RouteCategory/>
       </Route>  
    </Switch>

    </div>
  );
}

export default App;

