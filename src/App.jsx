import { useState } from "react";
import Header from "./components/Header";
import ListaCompra from "./components/ListaCompra";
import Totales from "./components/Totales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";

function App() {
  const items = [
    {
      descripcion: "Aceite",
      precio: 270,
      cant: 6,
      promo: "2x1",
      descuento: 0,
    },
    {
      descripcion: "Desodorante",
      precio: 350,
      cant: 2,
      promo: null,
      descuento: 20,
    },
    {
      descripcion: "Mayonesa",
      precio: 150,
      cant: 3,
      promo: null,
      descuento: 0,
    },
    {
      descripcion: "Ketchup",
      precio: 160,
      cant: 3,
      promo: null,
      descuento: 0,
    },
  ];

  const [listaCompra, setListaCompra] = useState([]);

  useEffect(() => {
    setListaCompra(items);
  }, []);

  return (
    <div className="App">
      <div className="container d-flex flex-column justify-content-center">
        <Header />
        <ListaCompra listaCompra={items} />
        <Totales listaCompra={items} />
      </div>
    </div>
  );
}

export default App;
