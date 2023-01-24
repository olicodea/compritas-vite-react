function Totales({ listaCompra }) {
  let totalCompra = () => {
    let totalTemporal = 0;
    listaCompra.forEach((element) => {
      totalTemporal += element.precio * element.cant;
    });
    return totalTemporal;
  };

  return (
    <>
      <div>
        <div className="d-flex">
          <h5 className="me-1">TOPE ASIGNADO:</h5>
          <p>$28.000</p>
        </div>
        <div className="d-flex">
          <h5 className="me-1">TOTAL COMPRA:</h5>
          <p>${totalCompra()}</p>
        </div>
      </div>
    </>
  );
}

export default Totales;
