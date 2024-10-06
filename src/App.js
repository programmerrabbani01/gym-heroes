
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking/Booking";
import Classes from "./Pages/Classes/Classes";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Notfound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
          <Header></Header>
          <Switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/home">
                <Home></Home>
             </Route>
             <PrivateRoute path="/about">
                <About></About>
             </PrivateRoute>
             <PrivateRoute path="/classes">
               <Classes></Classes>
             </PrivateRoute>
             <Route path="/register">
                <Register></Register>
             </Route>
             <Route path="/login">
              <Login></Login>?
             </Route>
             <PrivateRoute path="/booking/:servicesId">
                  <Booking></Booking>
             </PrivateRoute>
             <Route path="*">
                <Notfound></Notfound>
             </Route>
          </Switch>
        </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
