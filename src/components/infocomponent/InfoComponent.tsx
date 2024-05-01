const InfoComponent = () =>{
  return (
    <>
    <div className='bg-white shadow-lg rounded-md h-72 p-4 flex flex-col '>
      <h2 className="text-base h-[10%]">Post may you like</h2>
      <ul className="flex flex-col  gap-5 justify-center  h-[90%]">
        <li className="flex  gap-2 justify-center self-start">
          <img src="../../../src/assets/img/blank-profile-picture.jpg" alt="" className="size-9 rounded-full" />
          <div>
            <h3 className="font-bold text-sm w-[125px] whitespace-nowrap overflow-hidden text-ellipsis">Travel the  world without leaving your house.</h3>
            <p className="text-xs text-gray-400">Adventure</p>
          </div>
        </li>
        <li className="flex  gap-2 justify-center self-start">
          <img src="../../../src/assets/img/blank-profile-picture.jpg" alt="" className="size-9 rounded-full" />
          <div>
            <h3 className="font-bold text-sm w-[125px] whitespace-nowrap overflow-hidden text-ellipsis">Travel the  world without leaving your house.</h3>
            <p className="text-xs text-gray-400">Adventure</p>
          </div>
        </li>
        <li className="flex  gap-2 justify-center self-start">
          <img src="../../../src/assets/img/blank-profile-picture.jpg" alt="" className="size-9 rounded-full" />
          <div>
            <h3 className="font-bold text-sm w-[125px] whitespace-nowrap overflow-hidden text-ellipsis">Travel the  world without leaving your house.</h3>
            <span className="text-xs text-gray-400">Adventure</span>
          </div>
        </li>
      </ul>

    </div>
    </>
  )
} 

export default InfoComponent;