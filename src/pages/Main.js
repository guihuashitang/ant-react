import React from 'react';
import Home from './home/index'
import Login from './login/login'
import {BrowserRouter, Route} from 'react-router-dom'
// import routerLists from '../routers.js'


function App() {
  
  return (
      <BrowserRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Home}></Route>
      </BrowserRouter>
  );
}

export default App;
