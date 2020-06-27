import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";
import theme from "../theme";
import { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import { SWRConfig } from "swr";
import axios from "axios";

axios.defaults.baseURL = "http://localhost";

export const TestContext = createContext();

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 32 },
    { id: 2, name: "Sarah Smith", age: 30 },
    { id: 3, name: "Mike Oneil", age: 29 },
  ]);

  return (
    <TestContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <SWRConfig value={{ fetcher: (url) => axios(url).then((r) => r.data) }}>
          <Container maxWidth="md">
            <Component {...pageProps} />
          </Container>
        </SWRConfig>
      </ThemeProvider>
    </TestContext.Provider>
  );
}

export default MyApp;
