import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import { createContext, useState } from "react";

const TestContext = createContext();

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  
  
  return (
    <TestContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </TestContext.Provider>
  );
}

export default MyApp;
