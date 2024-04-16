import { FiEye } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";

function Logins() {
  const [showPassword, setshowPassword] = useState(true);
  function handleShowPassword() {
    setshowPassword((prev) => !prev);
  }
  return (
    <section>
      <div className="flex flex-1 justify-between my-4 gap-3">
        <div className="flex-1 flex  justify-between  ">
          <div className="w-full flex-1 border-4">
            <img
              
              src="src/assets/images/login.png"

              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 justify-between my-4">
            <h1 className="text-5xl">Login to your Account</h1>
            <input
              className="text-2xl border border-gray-300 rounded-full py-8 px-[5em] flex-1 outline-none"
              type="text"
              placeholder="Email Address"
            />
            <div
             
              className=" flex items-center border border-gray-300 rounded-full w-fit pr-4  px-[5em] mt-10 gap-3 justify-between"
            >
              <input
                className=" outline-none flex-1 text-2xl py-7 px-[3em] bg-transparent  my-1"
                type={showPassword?"password":"text"}
                placeholder="Password"
              />
              <div  onClick={handleShowPassword} className="cursor-pointer">
              {showPassword ?  <FiEye /> : 
             <RiEyeOffLine />}
              </div>
            </div>
            <div className="flex gap-4 my-4">
              <p className=" pl-3 w-[20px] h-[20px] border border-gray-300"></p>

              <p className="text-2xl">
                Remember Me
                <span className="text-2xl text-emerald-300 px-[5em]">
                  Forgot Passsword?
                </span>
              </p>
            </div>
            <button className=" text-2xl border rounded-full py-8 px-[10em]  bg-emerald-300 flex-column wrap text-white  gap-4 my-4">
              Sign In
            </button>
            <div className="flex justify-between items-center gap-3">
              <div className="bg-black h-[2px] flex-1 my-4" ></div>
              <p className="text-2xl ">OR</p>
              <div className=" flex-1 h-[2px]  bg-black"></div>
            </div >
            <div className="flex justify-center rounded-full items-center  border border-gray-300 py-8 px-[4em]  outline-none text-[blue] gap-5 my-4">
          <img src="src/assets/images/google-color-icon.png" width={50} />
       <button className="text-2xl">Log In With GooGle</button>
            </div>
          
            <div className="flex justify-between my-4">            <p className="text-2xl flex items-center ml-[6em]">
              Dont Have An Account Yet?
              <span className="text-emerald-300 gap-10">Sign Up Free</span>
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Logins;
