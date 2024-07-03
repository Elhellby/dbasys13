type Table = {
  columns: string[],
  data: any[]
}

export default function Table({ columns, data }: Table) {
  return (
    <div className="tableContainer">
      <table className="table">
        <thead className="thead">
          <tr>
            {columns.map((column, index) => (
                <td className="tdh">{column}</td>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((user, index) => (
            <tr key={index}>
              <td className="td">{user.nombre}</td>
              <td className="td">{user.correo}</td>
              <td className="td">{user.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
