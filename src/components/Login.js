import { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
import { CheckValidateData } from "../utils/validate";

const Login = () =>{
    const[signInForm,seSignInForm]=useState(true);
const[errorMessage,setErrorMessage]=useState(true);

    const email=useRef(null);
    const password=useRef(null);

    const handleButton=()=>{
const message=CheckValidateData(email.current.value,password.current.value);
setErrorMessage(message);
            };

    const toggleForm=()=>{
seSignInForm(!signInForm)
    }

    return(
        <div>
<Header />
<div className="absolute">

<img src={BG_URL} alt="bg_url" />
</div>
<form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black p-12 my-36 w-[450px] text-white mx-auto right-0 left-0 bg-opacity-80">
    <div className="m-5">

    <h1 className="text-white text-3xl font-bold mb-4 ml-2">Sign in</h1>

    <input ref={email} type="text" placeholder="Email or phone number" className="p-4 m-2 bg-transparent border border-white rounded-md  w-full"/>

    {!signInForm && <p className="text-center text-sm m-2">Message and dat rates may apply</p>}

    {signInForm && <input ref={password} type="password" placeholder="Password" className="p-4 m-2 bg-transparent border border-white rounded-md w-full"/>}

    <p className="text-center text-red-500 font-semibold">{errorMessage}</p>

    <button className="bg-red-500 w-full p-2 m-2 rounded-lg" onClick={handleButton}>{ signInForm ? "Sign in" : "Send sign-in code"}</button>

    <h3 className=" text-center m-2">OR</h3>

    <button className=" bg-slate-500 w-full p-2 m-2 rounded-lg" onClick={toggleForm}>{signInForm ? "Use a sign-in code":"Use Password"}</button>

    <p className="text-center m-2">{ signInForm ? "Forgot Password" : "Forgot email or phone number"}</p>

    <div className="flex my-5">

<input className="h-5 w-5" type="checkbox" /> <span className="ml-3">Remember me</span>

</div>

<p>New to Netflix? <span className="font-bold cursor-pointer" >Sign up now. </span></p>

    </div>
</form>
        </div>
    )
}
export default Login;