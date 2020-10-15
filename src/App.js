import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import OrderForm from './components/CustomarOrder/OrderForm/OrderForm';
import ServiceList from './components/CustomarOrder/ServiceList/ServiceList';
import PostReview from './components/PostReview/PostReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

import AddService from './components/Admin/AddService/AddService';
import Admin from './components/Admin/Admin/Admin';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/login" >
              <Login></Login>
            </Route>
          <Route path="/orderForm" >
              <OrderForm></OrderForm>
            </Route>
          <Route path="/serviceList" >
              <ServiceList></ServiceList>
            </Route>
            <Route path="/postReview" >
              <PostReview></PostReview>
            </Route> 
            <Route path="/admin">
               <Admin></Admin>
            </Route>
            <Route path="/addService" >
              <AddService></AddService>
            </Route>
            <Route path="/makeAdmin" >
              <MakeAdmin></MakeAdmin>
            </Route>

            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
          
            <Route exact path="/" >
              <Home></Home>
            </Route>
           
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
