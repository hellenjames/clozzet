import { BiSolidRightArrow } from "react-icons/bi";

function Collection({image,title, classes}){
    return(
<div  className={` flex-wrap flex items-end   ${classes}`} >
    <div className=" leading-8 ml-8">
<p className="text-2xl">Casual Collection</p>
<p className="text-3xl font-bold">{title}</p>
<p className="text-2xl font-bold flex items-center gap-5">Shop Now <BiSolidRightArrow /></p>


</div>
<div className="h-[100%]">
    <img src={image} className="h-[100%]" />
</div>

</div>

    )
}
export default Collection