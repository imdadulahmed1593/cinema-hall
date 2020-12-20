import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import Admin from "./Components/Admin/Admin";
// import AdminEvents from "./Components/AdminEvents/AdminEvents";
// import Events from "./Components/Events/Events";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import Booking from "./Components/Booking/Booking";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./Components/firebase";
import PrivateRoute from "./Components/PrivateRoute";
// import PrivateRoute from "./Components/PrivateRoute";
// import Register from "./Components/Register/Register";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        //loged in
        dispatch(
          login({
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/movieDetail">
            <Header />
            <MovieDetail />
          </Route>

          <PrivateRoute path="/booking">
            <Header />
            <Booking />
          </PrivateRoute>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/events">
//             <Header />
//             <Events />
//           </Route>
//           <Route path="/admin">
//             <Admin />
//           </Route>
//           <Route path="/adminEvents">
//             <AdminEvents />
//           </Route>

//           <PrivateRoute path="/register">
//             <Register />
//           </PrivateRoute>

// <PrivateRoute path="/register">
//             <Register />
//           </PrivateRoute>
