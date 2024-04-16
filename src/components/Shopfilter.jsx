import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
function Shopfilter() {
    return (
      <div className="container mx-auto">
        <div className="flex items-center border border-green-300 rounded-full px-5 gap-3 mt-6 w-[80%] mx-auto justify-between py-1">
          <div className="flex items-center gap-4 w-[100%] border-r-2 border-r-gray-400">
            <IoSearch size={30} />
            <input
              className="text-[1.2rem] py-3 px-2 w-[100%]
            "
              type="text"
              placeholder="Search Products and Categories"
            />
          </div>
          <div className="flex items-center  px-[5em]">
            <select className="px-2 select outline-none">
              <option value="">Filter Category</option>
              <option value="">Bags</option>
              <option value="">Dresses</option>
              <option value="">Shoes</option>
            </select>
            <RiArrowDropDownLine size={60} />
          </div>
        </div>
      </div>
    );
  }
  export default Shopfilter;
  