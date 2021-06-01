import React from 'react';
import './assets/css/dist/tailwind.css'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router,Link, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Activities from "./pages/Activities";
import Course from "./pages/Course";
import About from './pages/About';
import CommentSingle from './components/CommentSingle';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/CommentSingle" exact  component={CommentSingle} />
          <Route path="/" exact  component={Home} />
          <Route path="/Course" exact  component={Home, Course} />
          <Route path="/Activities" exact  component={Home, Activities} />
          <Route path="/Teacher" exact  component={Home, Teacher} />
          <Route path="/About" exact  component={Home, About} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
