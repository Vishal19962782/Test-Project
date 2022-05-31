import { createContext, useState } from "react";

const CodeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("");
  return (
    <CodeContext.Provider value={[code, setCode]} >
      {children}
    </CodeContext.Provider>
  );
};

export default CodeContext;
