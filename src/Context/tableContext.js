import { createContext,useState } from "react";
 
const TableContext=createContext();

export function TableProvider({ children }) {
  const [table, setTable] = useState([]);
  return (
    <TableContext.Provider value={[table, setTable]} >
      {children}
    </TableContext.Provider>
  );
}

export default TableContext;