import { Switch } from "@material-ui/core";
import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import  CodeContext  from "../../Context/CodeContext";
function MainHeader() {
    const [code,setcode] = useContext(CodeContext);
  return (
    <Stack
      sx={{mt:"10px", padding: "6px",backgroundColor: "#FFFFFF",borderRadius:"10px" }}
      direction
      alignItems={"center"}
      justifyContent={"space-between"}
      
    >
      <Stack gap={3} direction>
        <Typography variant="h6">Project 1</Typography>
        <Typography variant="h6">Model 1</Typography>
      </Stack>
      <Stack gap={2} direction alignItems={"center"}>
        <Switch color="success.main" />
        <Button
          variant="contained"
          sx={{
            height: "30px",
            backgroundColor: "#5B93FF",
            borderRadius: "0px",
          }}
        >
          SAVE 
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "30px",
            backgroundColor: "#FF97AA",
            borderRadius: "0px",
          }}
        >
          Discard
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "30px",
            backgroundColor: "#FFB697",
            borderRadius: "0px",
          }}
        >
          Deploy
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "30px",
            backgroundColor: "#06CA6B",
            borderRadius: "0px",
          }}
        >
          BUILD
        </Button>
      </Stack>
    </Stack>
  );
}

export default MainHeader;
