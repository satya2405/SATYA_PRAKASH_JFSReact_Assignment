import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./Components/Navbar/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";

import Question1 from "./Components/Pages/QuestionPage/Question1";
import Question2 from "./Components/Pages/QuestionPage/Question2";
import Question3 from "./Components/Pages/QuestionPage/Question3";
import Question4 from "./Components/Pages/QuestionPage/Question4";
import Question5 from "./Components/Pages/QuestionPage/Question5";
import Question6 from "./Components/Pages/QuestionPage/Question6";
import Question7 from "./Components/Pages/QuestionPage/Question7";

function App() {
  var myquestions = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Router>
      <div className="App">
        <MyNavbar></MyNavbar>
        <Switch>
          {/* <Route path="/home" component={Home} exact /> */}
          <Route
            path="/home"
            render={() => {
              return <Home questions={myquestions} />;
            }}
            exact
          />
          <Route
            path="/"
            render={() => {
              return <Home questions={myquestions} />;
            }}
            exact
          />
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contacts">
            <Contact />
          </Route>

      {/*********************************Routing Questions Pages Start***************************************/}
          
          <Route path="/question1">
            <Question1 />
          </Route>
          <Route path="/question2">
            <Question2 />
          </Route>
          <Route path="/question3">
            <Question3 />
          </Route>
          <Route path="/question4">
            <Question4 />
          </Route>
          <Route path="/question5">
            <Question5 />
          </Route>
          <Route path="/question6">
            <Question6 />
          </Route>
          <Route path="/question7">
            <Question7 />
          </Route>

        {/*********************************Routing Questions Pages End***************************************/}
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
