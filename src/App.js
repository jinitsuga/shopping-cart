import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteSwitch />
    </div>
  );
}

export default App;
