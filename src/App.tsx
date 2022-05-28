import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


type RouteType = {
  path : string,
  component: any
}

type RoutesType = {
  [key : string] : RouteType
}

const Routers : RoutesType = {
  home: {
    path: '/',
    component: <div>Home</div>
  }
}

function App() {  
  return (
    <Router>
      <Routes>
        <Route path={Routers.home.path} element={Routers.home.component}/>
      </Routes>
    </Router>
  );
}

export default App;
