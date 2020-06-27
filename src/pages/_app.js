import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import { createContext, useState } from "react";
import Navbar from '../components/Navbar'

export const TestContext = createContext();

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([
    {id: 1, name: 'John Doe', age: 32},
    {id: 2, name: 'Sarah Smith', age: 30},
    {id: 3, name: 'Mike Oneil', age: 29}
  ]);
  
  
  return (
    <TestContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Component {...pageProps} />
      </ThemeProvider>
    </TestContext.Provider>
  );
}

export default MyApp;
