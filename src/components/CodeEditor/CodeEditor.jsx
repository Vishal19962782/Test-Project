import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/theme/dracula.css";
import { sql } from "@codemirror/lang-sql";
import { Container } from "@material-ui/core";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeContext from "../../Context/CodeContext";

// import {monokai} from "@codemirror/theme-monokai"
function CodeEditor() {
  const [code,setCode] = useContext(CodeContext);
  return (
    <Container>
      <CodeMirror
        value={code}
        onChange={(value) => setCode(value)}
        width="100%"
        height="55vh"
        extensions={[sql()]}
        options={{
          theme: "dracula",
          keyMap: "submlime",
        }}
      />
    </Container>
  );
}

export default CodeEditor;
