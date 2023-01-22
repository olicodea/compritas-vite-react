import { useState } from "react";
import Header from "./components/Header";
import ListaCompra from "./components/ListaCompra";
import Totales from "./components/Totales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [listaCompra, setListaCompra] = useState([]);
  return (
    <div className="App">
      <div className="container d-flex flex-column justify-content-center">
        <Header />
        <ListaCompra />
        <Totales />
      </div>
    </div>
  );
}

export default App;
