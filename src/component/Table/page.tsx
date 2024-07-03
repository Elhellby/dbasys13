type Table = {
  columns: string[],
  data: any[]
}

export default function Table({ columns, data }: Table) {
  return (
    <>
      <div className="overflow-x-auto border-4">
        <table className="min-w-full divide-y divide-gray-400">
          <thead className="bg-gray-300">
            <tr>
              {columns.map((name, index) => (
                <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.correo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
