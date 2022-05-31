import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableContext from "../../Context/tableContext";
import { Box } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable({ data }) {
  const [table, setTable] = React.useContext(TableContext);
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="left">Permission</TableCell>
            <TableCell align="left">Created Date</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table?.map((row) => (
            <TableRow
              key={row.col1}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.col1}
              </TableCell>
              <TableCell align="left">{row.col2}</TableCell>
              <TableCell align="left">{row.col3}</TableCell>
              <TableCell align="left">{row.col4}</TableCell>
              <TableCell align="left">{row.col5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
