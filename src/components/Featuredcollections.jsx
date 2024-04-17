import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Featuredcollection from "./Featuredcollection";
import LeatherJacket from "../assets/images/leather-jacket.png";
import Sweatshirt from "../assets/images/sweatshirts.png";
import Pallazotrouser from "../assets/images/pallazo.png";
import Denimjacket from "../assets/images/denim.png";


function Featuredcollections({cart,setCart}) {
  return (
    <div>
      <h2 className="text-center text-4xl mt-10 mb-10">Featured Collection</h2>
      <div className=" flex container mx-auto items-center">
        <IoIosArrowBack  className="text-gray-300 mx-4"size={150} />

        <Featuredcollection
          img={LeatherJacket}
          name="LeatherJacket"
          price="Ksh 2,250" cart={cart} setCart={setCart}
        />
        <Featuredcollection img={Sweatshirt} name="Sweatshirt" price="Ksh 2,000" cart={cart} setCart={setCart}/>
        <Featuredcollection
          img={Pallazotrouser}
          name="Pallazotrouser"
          price="Ksh 2,000" cart={cart} setCart={setCart}
        />
        <Featuredcollection
          img={Denimjacket}
          name="Denimjacket"
          price="Ksh 1,800" cart={cart} setCart={setCart}
        />
        <IoIosArrowForward className="text-gray-300 "size={150}/>

      </div>
    </div>
  );
}
export default Featuredcollections;
