import { FiEye } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";

function Signups() {
    const [showPassword, setshowPassword] = useState(true);
    function handleShowPassword() {
      setshowPassword((prev) => !prev);
    }
    
  return (
    <div className="flex flex-1 justify-between my-4 gap-3 ">
      <div className="flex flex-col justify-between mx-5">
        <h1 className="text-2xl font-bold">Create An Account</h1>
        <div className="flex gap-3">
          <input
            className="text-2xl border border-gray-300 rounded-full py-8 px-5 gap-5 flex-1 outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            className="text-2xl border border-gray-300 rounded-full py-8 px-5 gap-5 flex-1 outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div className="flex justify-between">
          <input
            className="text-2xl border border-gray-300 rounded-full py-8 px-[9em] flex-1 outline-none "
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="flex justify-between">
          <input
            className="text-2xl border border-gray-300 rounded-full py-8 px-[9em] flex-1 outline-none"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div
             
              className=" flex items-center border border-gray-300 rounded-full w-fit py-2  pr-4 mt-10 gap-3 justify-between"
            >
              <input
                className=" outline-none flex-1 text-2xl py-5 px-[9em] bg-transparent  my-1"
                type={showPassword?"password":"text"}
                placeholder="Password"
              />
              <div  onClick={handleShowPassword} className="cursor-pointer">
              {showPassword ?  <FiEye /> : 
             <RiEyeOffLine />}
              </div>
            </div>
        <div className="flex justify-between">
          <input
            className="text-2xl border border-gray-300 rounded-full py-8 px-[9em] flex-1 outline-none"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between">
          <button className="text-2xl border border-gray-300 rounded-full py-8 px-[9em] flex-1 text-white  bg-emerald-300 outline-none font-bold ">
            Create Account
          </button>
        </div>

        <div className="flex justify-between items-center gap-3">
          <div className="bg-black h-[2px] flex-1"></div>
          <p>OR</p>
          <div className="bg-black h-[2px] flex-1"></div>
        </div>

        <div className="flex justify-center rounded-full items-center  border border-gray-300 py-8 px-[4em]  outline-none text-[blue] gap-5">
          <img src="src/assets/images/google-color-icon.png" width={50} />
          <button className="text-2xl">Sign Up With Google</button>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center ml-[6em]">Already Have An Account? Log In</p>
        </div>
      </div>
      <div className="flex-1 justify-between">
        <img src="src/assets/images/signup.png" className="w-full" />
      </div>
    </div>
  );
}
export default Signups;
