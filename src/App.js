import "./App.css";
import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./componenets/Login";
import Register from "./componenets/Register";
import Home from "./componenets/Home";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
