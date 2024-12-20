import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/styles.scss";
import "./App.css";
import AppRouter from "./Router";
import { GlobalProvider } from "./contextApi/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
}

export default App;
