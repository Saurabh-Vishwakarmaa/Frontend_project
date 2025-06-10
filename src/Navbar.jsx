import React from "react";


function Navbar() {
  return (
    <div className="h-21 w-[100vw] bg-[ivory] absolute top-0 left-0 flex ">
        <div className="h-21 w-97 font-sans text-md flex justify-around items-center px-13 text-black " >
           <a  href = "#">Services</a>
           <a href = "#">Work</a>
           <a href = "#" className="text-black">About</a>
           

        </div>

        <div className="h-21 w-190  flex justify-around items-center px-50 text-2xl text-black font-bold">
          <div className="relative left-3 top-2 h-15 w-15 ">
            <img src="src/assets/logo.png" alt="" srcset="" />
          </div>
          
        <div className="relative left-[-85px]">
          Astratto
        </div>
          
        </div>
        <div className="h-21 w-97  flex justify-around items-center px-13">
    <a href="#">Careers</a>
    <a href="#">Contact Us</a>
        </div>

    </div>
  )
}

export default Navbar
