import React from "react";
import RetroFashion from "../../img/FashionRetro.jpg";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const RetroFashionSubpage = () => {
  return (
    <div className="  lg:w-4/5   lg:pr-5">
      <div className=" bg-LightBlack  mt-5  overflow-hidden flex  items-center  relative  ">
        <div className="overflow-hidden  flex justify-center items-center  lg:h-72 photoChangeXS:h-84 photoChange:h-112">
          <img src={RetroFashion} className="opacity-90  " alt="RetroPicture" />
        </div>
      </div>
      <Link to={"/RetroFashion"}>
        <div
          className=" flex pt-3 justify-between font-bold border-b pb-1 text-sm border-LightBlack
              sm:text-base
              md:text-lg
              lg:text-xl lg:font-medium
              "
        >
          <div className="lg:pb-2">03</div>
        </div>
        <div
          className="flex font-extrabold justify-between pt-2 sm:text-lg
               md:text-xl
               lg:text-xl lg:font-normal lg:mt-2
               xl:text-2xl
               "
        >
          <div>Retro Style</div>
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

export default RetroFashionSubpage;
