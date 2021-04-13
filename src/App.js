import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from '../src/components/Sidebar'
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">
              <Sidebar/>
            </div>
            <div className="col-lg-9 app__main-content">
            {/* navbar */}
              <Navbar/>
                  <Switch>  {/* with the help of switch if we encounter any matching route it breaks there */}
                    <Route exact path="/">
                      <About/>
                    </Route>
                    <Route exact path="/resume">
                      <Resume/>
                    </Route>
                    <Route exact path="/projects">
                      <Projects/>
                    </Route>
                    <Route>
                      <Redirect to="/"/>
                    </Route>
                  </Switch>
            </div>
          </div>
        </div>
      </div>  
    </Router>
    
  );
}

export default App;
