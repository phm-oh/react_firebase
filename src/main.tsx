
import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

//store
import { store } from "./redux-toolkit/store";


import theme from "./theme";
import "./index.css";
import router from "./routes/root";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
  {/*  <React.StrictMode> */}
  <ThemeProvider theme={theme}>
    <CssBaseline />
       <RouterProvider  router={router} />
       <Toaster position="bottom-right" />
  </ThemeProvider>
  {/*  </React.StrictMode>, */}
  </Provider>
);
