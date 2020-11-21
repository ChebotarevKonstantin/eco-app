import React from "react";
import './App.css';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function App() {
  const [ data, setData ] = React.useState('Not Found');

  return (
    <div className="App">
      <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text)
          }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;