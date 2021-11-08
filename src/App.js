import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import  { About } from "./components/About";
import Contact from "./components/Contact";
import QuestionState from "./Context/Questions/questionState";
import { AddQuestion } from "./components/AddQuestion";
import { ShopHome } from "./components/ShopHome";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <QuestionState>
              <Home/>
            </QuestionState>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/add">
            <AddQuestion/>
          </Route>
          <Route exact path="/shop">
            <ShopHome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
