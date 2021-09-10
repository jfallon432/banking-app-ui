import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from "./components/RegistrationComponent";
import LoginComponent from "./components/LoginComponent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/NavBarComponent";
import DashBoardComponent from "./components/DashBoardComponent";
function App() {

  return (



          <Router>
              <Nav/>
              <Switch>
                  <Route exact path = "/">
                      <div style={{display: "flex"}}><LoginComponent/>
                          <Registration/></div>
                  </Route>
                  <Route exact path={"/dash"} >
                      <DashBoardComponent/>
                  </Route>
              </Switch>
          </Router>



  );
}

export default App;
