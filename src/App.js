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
import { Answer } from "./components/Answer";
import { ViewAnswer } from "./components/ViewAnswer";

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
          <Route exact path="/answer/:quesid">
            <Answer/>
          </Route>
          <Route exact path="/view/:quesid">
            <ViewAnswer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
