import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";


function App() {
  return (
    <Switch>
      <PublicRoute path = "/signin">
        <SignIn/>
      </PublicRoute>
      <PrivateRoute path = "/">
        <Home/>
      </PrivateRoute>
    </Switch>
  );
}

export default App;
