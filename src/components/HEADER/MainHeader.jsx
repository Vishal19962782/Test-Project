import { Switch } from "@material-ui/core";
import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function MainHeader() {
  return (
    <Stack sx={{ padding: "10px" }} direction justifyContent={"space-between"}>
      <Stack gap={3} direction>
        <Typography variant="h6">Project 1</Typography>
        <Typography variant="h6">Model 1</Typography>
      </Stack>
      <Stack gap={2} direction>
        <Switch color="success.main" />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#5B93FF", borderRadius: "0px" }}
        >
          SAVE
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FF97AA", borderRadius: "0px" }}
        >
          Discard
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FFB697", borderRadius: "0px" }}
        >
          Deploy
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#06CA6B", borderRadius: "0px" }}
        >
          BUILD
        </Button>
      </Stack>
    </Stack>
  );
}

export default MainHeader;
