import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import RouteSwitch from "./components/RouteSwitch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
