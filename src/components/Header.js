import { HEAD_URL } from "../utils/constant";
const Header = () =>{
    return(
        <div className="absolute px-20 z-10 py-4 bg-gradient-to-b from-black">
    <img className="w-44"  src={HEAD_URL} alt="header"/>
        </div>
    )
}
export default Header;