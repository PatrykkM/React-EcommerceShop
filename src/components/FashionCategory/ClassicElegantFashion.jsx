import React from "react";
import ClassicElegantFashion from "../../img/FashionClassicElegant.jpg";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const ClassicElegantFashionSubpage = () => {
  return (
    <div className="  lg:w-2/4   ">
      <div className=" bg-LightBlack  mt-5  overflow-hidden flex  items-center  relative  ">
        <div className="overflow-hidden flex justify-center items-center  lg:h-72 photoChangeXS:h-84 photoChange:h-112 ">
          <img
            src={ClassicElegantFashion}
            className="opacity-90  h-full"
            alt="ClassicElegantPicture"
          />
        </div>
      </div>
      <Link to={"ClassicElegantFashion"}>
        <div
          className=" flex pt-3 justify-between font-bold border-b pb-1 text-sm border-LightBlack
              sm:text-base
              md:text-lg
              lg:text-xl lg:font-medium
              "
        >
          <div className="lg:pb-2">04</div>
        </div>
        <div
          className="flex font-extrabold justify-between pt-2 sm:text-lg
               md:text-xl
               lg:text-xl lg:font-normal lg:mt-2
               xl:text-2xl
               "
        >
          <div>Classic Elegant Style</div>
          <div className="flex  items-center ">
            Explore
            <div className="text-sm font-extrabold mb-px ml-2 sm:mb-0">
              <ImArrowUpRight2 />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClassicElegantFashionSubpage;
