import Header from "./Header";
import { BG_URL } from "../utils/constant";
const Login = () =>{
    return(
        <div>
<Header />
<div className="absolute">
<img src={BG_URL} />
</div>
<form className="absolute bg-black p-12 my-36 w-[450px] mx-auto right-0 left-0 bg-opacity-80">
    <div className="m-5">

    <h1 className="text-white text-3xl font-bold mb-4 ml-2">Sign in</h1>

    <input type="text" placeholder="Email or phone number" className="p-4 m-2 bg-transparent border border-white rounded-md  w-full"/>

    <input type="password" placeholder="Password" className="p-4 m-2 bg-transparent border border-white rounded-md w-full"/>

    <button className="bg-red-500 w-full p-2 m-2 rounded-lg">Sign in</button>

    <h3 className="text-white text-center m-2">OR</h3>

    <button className="text-white bg-slate-500 w-full p-2 m-2 rounded-lg">Use a sign-in code</button>

    <p className="text-white text-center m-2">Forgot Password?</p>

    <div className="flex mt-5">
        
<input className="h-5 w-5" type="checkbox" /> <span className="text-white ml-3">Remember me</span>
</div>
<p>New to Netflix?</p>
    </div>
</form>
        </div>
    )
}
export default Login;