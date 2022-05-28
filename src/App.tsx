import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

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
    component: <Home />,
  },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Routers.home.path} element={Routers.home.component} />
      </Routes>
    </Router>
  );
}

export default App;
