import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/theme/dracula.css";
import { sql } from '@codemirror/lang-sql'
function CodeEditor() {
  return (
    <CodeMirror
    width="95%"
      height="70vh"
      extensions={[sql()]}
      options={{
        theme: "dracula",
        keyMap: "submlime",
      }}
    />
  );
}

export default CodeEditor;
