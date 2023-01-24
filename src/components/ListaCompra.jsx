function ListaCompra({ listaCompra }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            <th></th>
            <th>Descrip.</th>
            <th>Precio</th>
            <th>Cant.</th>
            <th>Promo</th>
            <th>Desc.</th>
          </tr>
          {listaCompra && listaCompra.length ? (
            <>
              {listaCompra.map((paciente) => {
                return (
                  <tr key={paciente.descripcion}>
                    <td>*</td>
                    <td>{paciente.descripcion}</td>
                    <td>{paciente.precio}</td>
                    <td>{paciente.cant}</td>
                    <td>{paciente.promo}</td>
                    <td>{paciente.descuento}%</td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <tr>
              <td><h5>No hay datos</h5></td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCompra;
