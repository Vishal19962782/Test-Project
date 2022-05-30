import { Accordion, AccordionSummary, Box } from "@material-ui/core";
import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function FolderComponent() {
  const [data, setData] = useState([
    {
      schema: "Customer",
      tables: ["customer", "address"],
      views: ["customer_vw", "address_vs"],
    },
    {
      schema: "Sales",
      tables: ["sales", "city", "target"],
      views: ["sales_vw", "customer_sales", "city_total"],
    },
  ]);
  //   useEffect(() => {
  //     axios
  //       .post("https://dabler.app/api/test/getwarehouseitems", {
  //         warehouseid: "1",
  //       })
  //       .then(({ data }) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <Stack
      sx={{
      
        minHeight: "70vh",
        width:"90%",
        backgroundColor: "#FFFFFF",
      }}
    >
      {data.map((item) => {
        return (
          <Stack sx={{ pl: "20px" }} justifyContent={"flex-start"}>
            <Stack direction alignItems={"center"}>
              <FolderOpenIcon />
              <Typography variant="h6">{item.schema}</Typography>
            </Stack>

            {item.tables.map((table) => {
              return (
                <Stack
                  sx={{ pl: "20px" }}
                  direction
                  gap={2}
                  alignItems="Center"
                >
                  <ArrowForwardIosIcon fontSize="10px" />
                  <FolderIcon />
                  <Typography>{table}</Typography>
                </Stack>
              );
            })}
          </Stack>
        );
      })}
    </Stack>
  );
}

export default FolderComponent;
