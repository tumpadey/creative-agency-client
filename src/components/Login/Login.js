import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';

import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/icons/google-logo.png';

import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggesinUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
           console.log(displayName,email);
           const signInUser = {name:displayName, email};
           setLoggedInUser(signInUser);
           history.replace(from);
           
            
        })
          .catch(error=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          })
       }

       

    
    return (
        <div className="text-center">
        <div className="my-5">
            <a class="navbar-brand" href="/"><img src={logo} alt="" style={{ height: '50px' }} /></a>
        </div>
        
        <div className="login-form">

            <h3>Login with</h3>
            <button onClick={handleGoogleLogin} className="btn w-75 border my-3">
                <img src={googleLogo} style={{ height: '30px' }} alt="" /> Continue with Google
            </button>
            <p>Don’t have an account? <a href="" onClick={handleGoogleLogin}>Create an account</a></p>


        </div>
        


    </div>
    );
};

export default Login;
