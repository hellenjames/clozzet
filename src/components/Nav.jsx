
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

function Nav({cart, setCart}) {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <ul className="left flex gap-9 items-center">
          <Link to="/"><img src="src/assets/images/logo.svg" /></Link>
        <Link to="/">  <li className="hidden md:block" >Home</li></Link>
          <Link to="/about"><li className="hidden md:block">About Us</li></Link>
         <Link to="/shop" ><li className="hidden md:block">Shop</li></Link>
        </ul>
        <ul className="flex items-center   justify-between gap-5">
          <li className="  size-7">
            <Link to="/cart" ><CiShoppingCart className="cursor-pointer" size={30} /></Link>
          </li>
          <Link to="/signup"><li >Sign Up</li></Link>
         <Link to="/login"> <button className="border border-black py-3 px-[4em] rounded-full cursor-pointer">
            Log In
          </button></Link>
          <FaBars className="size-9 block md:hidden" />
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
