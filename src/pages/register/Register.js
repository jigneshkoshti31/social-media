// import { useState } from "react";
import "./register.css";
// import {useHistory} from 'react-router-dom';
// http://localhost:8000/api/register
export default function Register() {

  // const [name,setName]=useState("")
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const history=useHistory();
  // async function signUp() {
  //   let item={name,password,email}
  //   console.log(item)

  //   let result= await fetch("http://localhost:8000/api/register",{
  //     method: 'POST',
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Content-Type" : 'application/json',
  //       "Accept" : 'application/json'
  //     }
  //   })
  //   result =await result.json()
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   history.push("/add")
  // }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Web</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>  
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username"  className="loginInput" />
            <input placeholder="Email"  className="loginInput" />
            <input placeholder="Password" type="password"  className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>  
        </div>
      </div>
    </div>
  );
}
