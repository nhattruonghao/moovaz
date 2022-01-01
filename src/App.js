
import "./sass/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from './MyRoutes'
import { DataProvider } from "./GlobalState";
const App = () =>  {
  return (
    <DataProvider>
    <Router>
          <MyRoutes />
    </Router>
  </DataProvider>
  );
}

export default App;
