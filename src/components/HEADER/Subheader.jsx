import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";
import CodeContext from "../../Context/CodeContext";
import axios from "axios";
import TableContext from "../../Context/tableContext";

const StyledButton = styled(Button)({
  color: "black",
  borderRadius: "0px",
  height: "25px",
});
function Subheader() {
  const  [code,setCode] = React.useContext(CodeContext);
  const [table,setTable] = React.useContext(TableContext)
  const handleRunCode = () => {
    axios.post('https://dabler.app/api/test/runquery',{
        query:code
    }).then(({data})=>{
        console.log(data)
        setTable(data)
    })
  };
  return (
    <Stack
      direction
      justifyContent={"space-between"}
      sx={{ pl: "10px", pr: "50px" }}
    >
      <Stack gap={2} direction>
        <StyledButton variant="text" >
          Details
        </StyledButton>
        <StyledButton
          variant="text"
          sx={{ borderBottom: "3px solid" }}
          
        >
          Code 
        </StyledButton>
        <StyledButton variant="text" >
          Validation
        </StyledButton>
        <StyledButton variant="text" >
          Model Version
        </StyledButton>
        <StyledButton variant="text" >
          Build History
        </StyledButton>
      </Stack>
      <Button
        variant="contained"
        sx={{
          ml: "600px",
          height: "30px",
          backgroundColor: "#06CA6B",
          borderRadius: "0px",
        }}
        onClick={handleRunCode}
      >
        TEST RUN
      </Button>
    </Stack>
  );
}

export default Subheader;
