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


export default function BasicTable({ data }) {
  const [table, setTable] = React.useContext(TableContext);
  console.log();
  // const keys=Object?.keys(table.data[0])
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(table[0]).map((key) => {
              return (
                <TableCell key={key} align="left">
                  {key}
                </TableCell>
              );
            })}
            {/* <TableCell align="left">Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="left">Permission</TableCell>
            <TableCell align="left">Created Date</TableCell>
            <TableCell align="left">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {table?.map((row) => (
            <TableRow
              key={row.col1}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.keys(row).map((key) => {
                return (
                  <TableCell key={key} align="left">
                    {row[key]}
                  </TableCell>
                );
              })}
            </TableRow>
            //   <TableCell component="th" scope="row">
            //     {row.col1}
            //   </TableCell>
            //   <TableCell align="left">{row.col2}</TableCell>
            //   <TableCell align="left">{row.col3}</TableCell>
            //   <TableCell align="left">{row.col4}</TableCell>
            //   <TableCell align="left">{row.col5}</TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
