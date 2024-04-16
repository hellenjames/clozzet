function Select({img, num}){
    return(
        <div>
            <div >
<img src={img} />
</div>
<div  className=" text-gray-400 border border-gray-700 rounded-full m-8 flex items-center justify-center text-4xl  w-[80px] h-[80px] cursor-pointer  mr-9">
    <p>{num}</p>
    
</div>
        </div>
    )
}
export default Select