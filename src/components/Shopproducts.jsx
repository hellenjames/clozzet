import Shopproduct from "./Shopproduct";
import BlueRageedJeans from "../assets/shop-images/ragged-jeans.png";
import LeatherJacket from "../assets/images/sweatshirts.png";
import SlimBanquetDress from "../assets/shop-images/slim-banquet-dress.png";
import BlueDenimJacket from "../assets/images/denim.png";
import BrownLeatherJacket from "../assets/images/leather-jacket.png";
import QuartzMensWatch from "../assets/shop-images/quartz-watch.png";
import WomenDenimJeans from "../assets/shop-images/denim-jeans.png";
import Brownhandbag from "../assets/shop-images/brown-handbag.png";
import UnisexGraphicTshirt from "../assets/shop-images/graphic-tshirts.png";
import BlackBomberJacket from "../assets/shop-images/bomber.png";
import PleatedpallazoPants from "../assets/images/pallazo.png";
import PureLeatherShoes from "../assets/shop-images/leather-shoes.png";
import PurpleSerpentipurse from "../assets/shop-images/serpenti-forever.png";
import UnisexAirforceSneakers from "../assets/shop-images/unisex.png";
import BlueCocktailDress from "../assets/shop-images/cocktail.png";
import OffShoulderCropTop from "../assets/shop-images/Off-The-Shoulder.png";
import AirsensePleatedPants from "../assets/shop-images/Airsense-pleated.png";
import ClassySmartWatch from "../assets/shop-images/smartwatch.png";
import BluePlatformHeels from "../assets/shop-images/ZOOSHI-COBALT.png";
import StripKnittedSweater from "../assets/shop-images/knitted-sweater.png";
function Shopproducts({cart,setCart}) {
  return (
    <div>
      <div className="flex-wrap container mx-auto ">
        <div className="flex">
          <Shopproduct
            img={BlueRageedJeans}
            name="BlueRageedJeans"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={LeatherJacket}
            name="LeatherJacket"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={SlimBanquetDress}
            name="SlimBanquetDress"
            price="Ksh 10,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={BlueDenimJacket}
            name="BlueDenimJacket"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
        </div>
        <div className="flex">
          <Shopproduct
            img={BrownLeatherJacket}
            name="BrownLeatherJacket"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={QuartzMensWatch}
            name="QuartzMensWatch"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={WomenDenimJeans}
            name="WomenDenimJeans"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={Brownhandbag}
            name="Brownhandbag"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
        </div>
        <div className="flex">
          <Shopproduct
            img={UnisexGraphicTshirt}
            name="UnisexGraphicTshirt"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={BlackBomberJacket}
            name="BlackBomberJacket"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={PleatedpallazoPants}
            name="PleatedpallazoPants"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={PureLeatherShoes}
            name="PureLeatherShoes"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
        </div>
        <div className=" flex">
          <Shopproduct
            img={PurpleSerpentipurse}
            name="PurpleSerpentipurse"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={UnisexAirforceSneakers}
            name="UnisexAirforceSneakers"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={BlueCocktailDress}
            name="BlueCocktailDress"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={OffShoulderCropTop}
            name="OffShoulderCropTop"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
        </div>
        <div className="flex">
          <Shopproduct
            img={AirsensePleatedPants}
            name="AirsensePleatedPants"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={ClassySmartWatch}
            name="ClassySmartWatch"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={BluePlatformHeels}
            name="BluePlatformHeels"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
          <Shopproduct
            img={StripKnittedSweater}
            name="StripKnittedSweater"
            price="Ksh 2,250"cart={cart} setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
}
export default Shopproducts;
