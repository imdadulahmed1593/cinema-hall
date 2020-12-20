import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./Login.css";
import { auth } from "../firebase";
import logo from "../../images/logo.png";
// import { useStateValue } from "../StateProvider";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../features/userSlice";

function Login() {
  // const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const location = useLocation();
  const [userinfo, setUserinfo] = useState(null);
  const { from } = location.state || { from: { pathname: "/" } };
  console.log(from);

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // console.log(user);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       //loged in
  //       dispatch(
  //         login({
  //           email: authUser.email,
  //           displayName: authUser.displayName,
  //         })
  //       );
  //     } else {
  //       //logged out
  //       dispatch(logout());
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [dispatch]);

  const handleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        if (from) {
          history.replace(from);
        } else {
          history.push("/");
        }
      })
      // .then(function (result) {
      //   var token = result.credential.accessToken;
      //   // The signed-in user info.
      //   var { displayName, email } = result.user;
      //   console.log(displayName, email);
      //   dispatch({
      //     type: "SET_USER",
      //     user: {
      //       ...user,
      //       name: displayName,
      //       email: email,
      //     },
      //   });
      //   history.replace(from);
      //   // ...
      // })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <form>
        <h2>Login With</h2>
        <button onClick={handleSignIn} className="btn btn-light">
          Continue with Google
        </button>
        <p>
          Don't have an account ? <span>Create an account</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

// onClick={handleSignIn}
