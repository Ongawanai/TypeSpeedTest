import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
