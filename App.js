import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActionPlan from './components/ActionPlan';
import BidList from './components/BidList';
import CreateResponse from './components/CreateResponse';
import Review from './components/Review'
import PieChartSample from './components/charts/PieChart';
import AddReview from './components/AddReview';
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import Signout from './components/Signout';
import SignUp from './components/SignUp';
import ErrorPage from './errorResponse/ErrorPage';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signUp" component={SignUp} exact />
        <Route path="/Error" component={ErrorPage} exact />
        <PrivateRoute path="/bids" component={BidList} />
        <PrivateRoute path="/actionPlan" component={ActionPlan} />
        <PrivateRoute path="/createResponse" component={CreateResponse} />
        <PrivateRoute path="/review" component={Review} />
        <PrivateRoute path="/pieChart" component={PieChartSample} />
        <PrivateRoute path="/addReview" component={AddReview} />
        <PrivateRoute path="/signout" component={Signout} />
        {/* <Route path="" component={SideBar} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
