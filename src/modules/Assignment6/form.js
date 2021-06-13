import React, {useState} from "react";
import Login from "./login";
import SignupForm from "./signup";
import './index.css';

function Form(){
    const [isForm, setForm]=useState(true);
    const [isLogin, setLogin]=useState(false);
    const [isSignup, setSignup]= useState(false);

    const checkLogin= () =>{
        setForm(false);
        setLogin(true);
    }
    const checkSignup= () =>{
        setForm(false);
        setSignup(true);
    }
    return(
     <>   
        {
    isForm &&(
        <div className={"form"}>
            <button type="submit" onClick={checkLogin}>Login</button>
            <button type="submit" onClick={checkSignup}>Sign Up</button>
        </div>
    )}
    {isLogin && <Login/>}
    {isSignup && <SignupForm/>}
    </>
    )
}
export default Form;
  
  

