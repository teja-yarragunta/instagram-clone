import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// import { extendTheme } from "@chakra-ui/react";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// // extend the theme
// const theme = extendTheme({ config });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider theme={theme}> */}
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
