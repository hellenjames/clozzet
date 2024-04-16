
import Collection from "./Collection"
import MensCollection from"../assets/images/mens.png"
import LuxuryWatches from"../assets/images/watches.png"
import DesignerHandbags from"../assets/images/hbags.png"
import LadiesCollection from"../assets/images/ladies.png"

function Collections(){
    return(
        <div className=" container mx-auto grid grid-row-3 grid-cols-2 my-10 gap-3">
            <Collection classes="bg-[#F0EFEF] row-start-1 row-end-3" image={MensCollection}title="Men's Collection" />
            <Collection classes="bg-[#E3F9FB]" image={LuxuryWatches}title="Luxury Watches"/>
            <Collection classes = "bg-[#FFF1F1]" image={DesignerHandbags}title="Designer Handbags"/>
            <Collection classes="bg-[#FEDBDB] row-start-2 row-end-4" image={LadiesCollection}title="Ladies Collection"/>
        </div>

    )
}
export default Collections