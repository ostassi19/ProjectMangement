import {Component, useState} from "react";
import "./login.css"
import httpClient from "../http/http-client";
import {useDispatch, useSelector} from "react-redux";
import {succes} from "./action";
import { Navigate } from 'react-router-dom';
import LoginReducer from "./reducer";

const Login =()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const login=(e)=>{
        e.preventDefault();
        httpClient.post("/login",{__username: username, __password: password}).then(
            response =>{
                localStorage.setItem('token', response.data.token);
                dispatch(succes())
            }
        )
        console.log('username: ',username,' password:', password)
    }
    const Logged= useSelector(state => state.LoginReducer.isLogged);
    console.log(Logged);
     if (!Logged){
        return (
            <div className="App">
                <form className="form" onSubmit={login}>
                    <div className="input-group">
                        <label htmlFor="email">Username</label>
                        <input name="username"  value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="primary" type="submit">Login</button>
                </form>
            </div>
        );
     }
     else return <Navigate to={'projects'}/>

}
export default Login;