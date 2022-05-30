import logo from "./logo.svg";

import SideBar from "./SideBar/SideBar";
import { Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import MainHeader from "./components/HEADER/MainHeader";
import Subheader from "./components/HEADER/Subheader";
import FolderComponent from "./components/CodeComponent/FolderComponent";
import CodeEditor from "./components/CodeEditor/CodeEditor";

function App() {
  return (
    <Stack direction>
      <SideBar />
      <Grid container>
        <Grid item lg={12}>
          <MainHeader />
          <Subheader />
        </Grid>
        <Grid item lg={2}>
          <FolderComponent />
        </Grid>
        <Grid container item lg={12} justifyContent="center">
          <Grid item lg={9} >
            <CodeEditor />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
