import React from "react";
import "./App.css";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { Route, Switch } from "react-router-dom";
import BlicStart from "../src/components/BlicStart";
import Blic from "../src/components/Blic";
import Tires from "../src/components/Tires/Tires";
import Clothing from "./components/Clothing/Clothing";
import Products from "./components/Products/Products";
import Plastic from "./components/Plastic/Plastic";
import Tetrapac from "./components/Tetrapac/Tetrapac";
import Glass from "./components/Glass/Glass";
import Flakon from "./components/Plastic/Flakon";
import Plasticbottel from "./components/Plastic/Plasticbottel";
import Styrofoam from "./components/Plastic/Styrofoam";
import Metal from "./components/Metal/Metal";
import Paper from "./components/Paper/Paper";
import Lightbulbs from "./components/Lightbulbs/Lightbulbs";
import Batteries from "./components/Batteries/Batteries";
import Hazardouswaste from "./components/Hazardouswaste/Hazardouswaste";
import Glasscontainer from "./components/Glass/Glasscontainer";
import Glassglassbreak from "./components/Glass/Glassglassbreak";
import Form from "./components/Form/Form";

function App() {
  const [data, setData] = React.useState("Отсканируйте штрих-код");

  return (
    <div className="App">
      <Switch>
        <Route path="/blic">
          <Blic />
        </Route>
        <Route path="/tires">
          <Tires />
        </Route>
        <Route path="/clothing">
          <Clothing />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/plastic/flakon">
          <Flakon />
        </Route>
        <Route path="/plastic/plasticbottel">
          <Plasticbottel />
        </Route>
        <Route path="/plastic/styrofoam">
          <Styrofoam />
        </Route>
        <Route path="/plastic">
          <Plastic />
        </Route>
        <Route path="/tetrapac">
          <Tetrapac />
        </Route>
        <Route path="/glass/glassbreak">
          <Glassglassbreak />
        </Route>
        <Route path="/glass/container">
          <Glasscontainer />
        </Route>
        <Route path="/glass">
          <Glass />
        </Route>
        <Route path="/metal">
          <Metal />
        </Route>
        <Route path="/paper">
          <Paper />
        </Route>
        <Route path="/lightbulbs">
          <Lightbulbs />
        </Route>
        <Route path="/batteries">
          <Batteries />
        </Route>
        <Route path="/hazardouswaste">
          <Hazardouswaste />
        </Route>
        <Route path="/">
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
            }}
          />
          {/*<p>{data}</p>*/}
          <BlicStart />
          <Form data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
