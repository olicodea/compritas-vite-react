function ListaCompra() {
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
          <tr>
            <td>*</td>
            <td>Aceite girasol</td>
            <td>$370</td>
            <td>10</td>
            <td>2x1</td>
            <td>15%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListaCompra;
