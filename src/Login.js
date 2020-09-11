import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth,provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes} from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();
    const signin = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return  <div className="login">
                <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250"/>
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"/>
                </div>
            
        <Button type="submit" onClick={signin} >SignIn</Button>
        </div>
     }

export default Login;
