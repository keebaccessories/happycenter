import React from 'react';
import './assets/css/dist/tailwind.css'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router,Link, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Activities from "./pages/Activities";
import TopMenu from "./components/TopMenu";
import Course from "./pages/Course";
import Card from './components/Card';
import Search from './components/Search';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Search" exact component={Search}/>
          <Route path="/Course" exact  component={Course} />
          <Route path="/Activities" exact  component={Activities} />
          <Route path="/Teacher" exact  component={Teacher} />
          <Route path="/Home" exact  component={Home} />
          <Route path="/TopMenu" exact  component={TopMenu} />
          <Route path="/Card" exact  component={Card} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
