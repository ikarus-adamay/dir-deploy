import React from "react";
import AssetCard from "./AssetCard";
import Artist from "./Artist";
import Tags from "./Tags";
import Description from "./Description";
import Makes from "./Makes";
import Similar from "./Similar";

const Card = () => {
  return (
    <>
      <div className="font-poppins">
        <div className="text-4xl text-grey-800 mt-20 ml-36 ">
          Kodak PIXPRO Camera
        </div>
        <div className="flex justify-between mt-7 mx-20">
          <div className="basis-8/12">
            <div className=" h-128 drop-shadow-xl">
              <AssetCard />
            </div>
            <div className="mt-10">
              <Artist />
            </div>
            <div className="mt-16">
              <Tags />
            </div>
            <div className="mt-16 drop-shadow-lg">
              <Description />
            </div>
          </div>
          <div className="basis-3/12 w-full ">
            <div>
              <Makes />
            </div>
            <div className="mt-24">
              <Similar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
