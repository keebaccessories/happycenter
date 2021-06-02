import React from 'react';
import './assets/css/dist/tailwind.css'
import { BrowserRouter, Route, Router,Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Activities from "./pages/Activities";
import Course from "./pages/CoursePage/Course";
import About from './pages/About';
import CourseDetail from './pages/CoursePage/CourseDetail';
import CarouselCard from './components/Card/CarouselCard';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/CarouselCard" exact component={CarouselCard}/>
          <Route path="/CourseDetail" exact component={CourseDetail}/>
          <Route path="/" exact  component={Home} />
          <Route path="/Course" exact  component={Course} />
          <Route path="/Activities" exact  component={Activities} />
          <Route path="/Teacher" exact  component={Teacher} />
          <Route path="/About" exact  component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
