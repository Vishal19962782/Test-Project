import logo from "./logo.svg";

import SideBar from "./SideBar/SideBar";
import { Container, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import MainHeader from "./components/HEADER/MainHeader";
import Subheader from "./components/HEADER/Subheader";
import FolderComponent from "./components/CodeComponent/FolderComponent";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Table from "./components/Table/BasicTable";

function App() {
  return (
    <Stack direction justifyContent={"center"}>
      <SideBar />
      <Container maxWidth="xl">
        <Stack sx={{ width: "100%" }}>
          <Grid container>
            <Grid item lg={12}>
              <MainHeader />
              <Subheader />
            </Grid>
          </Grid>
        </Stack>
        <Stack direction>
          <FolderComponent />
          <CodeEditor />
        </Stack>
        <Stack sx={{ width: "100%", height: "33vh" }}>
          <Table />
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
