import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Select from "./Select"
function Selects(){
    return(
        <div className="container mx-auto flex items-center">
            <Select num={<IoIosArrowBack />}/>
            <Select className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[80px] h-[80px] cursor-pointer  bg-emerald-300 group-hover:block  absolute" num="1"/>
            <Select num="2"/>
            <Select className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[80px] h-[80px] cursor-pointer  " num="3"/>
            <Select className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[80px] h-[80px] cursor-pointer  " num="4"/>
            <Select className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[80px] h-[80px] cursor-pointer  " num="5"/>
            <Select className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[50px] h-[50px] cursor-pointer" num={<IoIosArrowForward />}/>

        </div>
    )
}
export default Selects