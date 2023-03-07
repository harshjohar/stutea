import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import { About } from "./components/About";
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
import { createContext, useState } from "react";
import Dashboard from "./components/Dashboard";
export const ThemeContext = createContext(null);

function App(props) {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
        };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
            <Router>
                <CreditState>
                  <DashBoardNavbar theme={props.theme} toggleTheme={props.toggleTheme}/>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <UserState>
                                    <QuestionState>
                                        <Home theme={theme} toggleTheme={toggleTheme} flag={false} />
                                    </QuestionState>
                                </UserState>
                            }
                        />
                        <Route exact path="/login" element={<Login />} />

                        <Route exact path="/register" element={<Register />} />

                        <Route exact path="/about" element={<About />} />

                        <Route exact path="/contact" element={<Contact />} />

                        <Route exact path="/add" element={<AddQuestion />} />

                        <Route exact path="/shop" element={<ShopHome />} />

                        <Route
                            exact
                            path="/answer/:quesid"
                            element={<Answer />}
                        />

                        <Route
                            exact
                            path="/view/:quesid"
                            element={<ViewAnswer />}
                        />

                        <Route
                            exact
                            path="/viewmyans/:quesid"
                            element={<ViewMyAns />}
                        />

                        <Route
                            exact
                            path="/profile"
                            element={
                                <UserState>
                                    <Profile />
                                </UserState>
                            }
                        />

                        <Route
                            exact
                            path="/confirmation/:email/:token"
                            element={<Confirmation />}
                        />

                        <Route exact path="/wait/:email" element={<Wait />} />

                        <Route exact path="/tags-all" element={<Tags />} />

                        <Route
                            exact
                            path="/settings"
                            element={
                                <UserState>
                                    <Settings />
                                </UserState>
                            }
                        />

                        <Route
                            exact
                            path="/buycredits"
                            element={<BuyCredits />}
                        />

                        <Route
                            exact
                            path="/query"
                            element={
                                <UserState>
                                    <QuestionState>
                                        <Home flag={true} />
                                    </QuestionState>
                                </UserState>
                            }
                        />

                        <Route exact path="/favs" element={<FavTagQues />} />
                    </Routes>
                </CreditState>
            </Router>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
