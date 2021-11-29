import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import  { About } from "./components/About";
import Contact from "./components/Contact";
import QuestionState from "./Context/Questions/questionState";
import { AddQuestion } from "./components/AddQuestion";
import { ShopHome } from "./components/ShopHome";
import { Answer } from "./components/Answer";
import { ViewAnswer } from "./components/ViewAnswer";
import { UserState } from "./Context/User/userState";
import { Profile } from "./components/Profile";
// import { Footer } from "./components/Footer";
import { Confirmation } from "./components/Confirmation";
import { Wait } from "./components/Wait";
import { Tags } from "./components/Tags";
import { CreditState } from "./Context/Credits/CreditState";

// import { Nav } from "./components/Nav";
import { DashBoardNavbar } from "./components/DashBoardNavbar";
import { Settings } from "./components/Settings";
import { BuyCredits } from "./components/BuyCredits";
import { FavTagQues } from "./components/FavTagQues";
import { ViewMyAns } from "./components/ViewMyAns";

function App() {
  return (
    <div className="App">
      <Router>
        <CreditState>
            <DashBoardNavbar/> 
        <Switch>
          <Route exact path="/">
            <UserState>
              <QuestionState>
                <Home/>
              </QuestionState>
            </UserState>
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
          <Route exact path="/viewmyans/:quesid">
            <ViewMyAns/>
          </Route>
          <Route exact path="/profile">
            <UserState>
              <Profile/>
            </UserState>
          </Route>
          <Route exact path="/confirmation/:email/:token">
            <Confirmation/>
          </Route>
          <Route exact path="/wait/:email">
            <Wait/>
          </Route>
          <Route exact path="/tags-all">
            <Tags/>
          </Route>
          <Route exact path="/settings">
            <UserState>
            <Settings/>
            </UserState>
          </Route>
          <Route exact path="/buycredits">
            <BuyCredits/>
          </Route>
          <Route exact path='/query'>
          <UserState>
              <QuestionState>
                <Home/>
              </QuestionState>
            </UserState>
          </Route>
          <Route exact path="/favs">
            <FavTagQues/>
          </Route>
        </Switch>
        </CreditState>
      </Router>
    </div>
  );
}

export default App;
