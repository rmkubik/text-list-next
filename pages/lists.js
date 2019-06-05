const Table = ({ children }) => (
  <table className="w-full text-left table-collapse">{children}</table>
);

const TableHead = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);

const TableHeadCol = ({ children }) => (
  <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
    {children}
  </th>
);

const TableBody = ({ children }) => (
  <tbody className="align-baseline">{children}</tbody>
);

const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

const TabelBodyCol = ({ children }) => (
  <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">
    {children}
  </td>
);

const Lists = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableHeadCol>Number</TableHeadCol>
        </TableHead>
        <TableBody>
          <TableRow>
            <TabelBodyCol>(304) 867-5309 </TabelBodyCol>
          </TableRow>
          <TableRow>
            <TabelBodyCol>(304) 867-5309 </TabelBodyCol>
          </TableRow>
          <TableRow>
            <TabelBodyCol>(304) 867-5309 </TabelBodyCol>
          </TableRow>
          <TableRow>
            <TabelBodyCol>(304) 867-5309 </TabelBodyCol>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Lists;
