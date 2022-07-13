import React, { useState } from "react";
import img from "../../Assets/abstract-1779380_960_720.webp";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineShareAlt,
} from "react-icons/ai";

const Artist = () => {
  const likeCounter = 50;
  const assetRating = 4.8;
  const assetPrice = 0.99;

  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div className="p-1 font-poppins rounded-lg bg-white drop-shadow-lg pb-5">
      <div className="grid grid-cols-8 grid-rows-1 gap-1 h-full">
        <div className="col-span-1">
          <img
            className="aspect-square rounded-full cursor-pointer mt-2"
            src={img}
            alt=""
          />
        </div>
        <div className="col-span-4 h-full pb-1">
          <div className="flex flex-col justify-end h-full  px-1">
            <p className="text-3xl font-medium text-grey-800 mt-2">
              Artist Name Here
            </p>
            <p className=" text-grey-600 ml-1 text-lg"> @username</p>
            <div
              className={` text-lg rounded-lg inline-block w-32 mt-4 justify-center cursor-pointer active:bg-grey-450 ${
                isFollowed
                  ? "bg-blue text-white font-bold p-0.5"
                  : "border-2 font-bold border-blue  text-blue hover:bg-grey-200 hover:border-blue-400 hover:text-blue-400 "
              }`}
            >
              <div
                className="text-center p-0.5 "
                onClick={() => setIsFollowed(!isFollowed)}
              >
                <p>{isFollowed ? "Following" : "+Follow"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 pt-2">
          <div class="grid grid-rows-3 grid-cols-2 grid-flow-row gap-0 w-full h-full">
            <div className="flex">
              <AiOutlineHeart
                className={`text-3xl pt-0.5 cursor-pointer ${
                  isLiked ? "hidden" : null
                }`}
                onClick={() => setIsLiked(!isLiked)}
              />
              <AiFillHeart
                className={`text-3xl pt-0.5 cursor-pointer text-blue ${
                  isLiked ? null : "hidden"
                }`}
                onClick={() => setIsLiked(!isLiked)}
              />
              <p className="text-2xl pt-0.5">{likeCounter}</p>
            </div>
            <div className="flex">
              <AiFillStar className="text-blue text-3xl pt-0.5" />
              <p className="text-2xl">{assetRating}</p>
            </div>
            <div className="flex">
              <p className="text-2xl">
                <span className="text-blue pl-2">$</span> {assetPrice}
              </p>
            </div>
            <div className="flex">
              <AiOutlineShareAlt className="text-blue text-2xl mt-1" />
              <p className="text-2xl ml-0.5">Share</p>
            </div>
            <div className="flex col-span-2">
              <div
                className={`border-2 border-blue bg-white hover:bg-grey-100 text-blue hover:text-blue-500 hover:border-blue-500  rounded-md content-center pt-0.5 justify-center flex w-[77%] cursor-pointer ${
                  isInCart ? "hidden" : null
                }`}
                onClick={() => setIsInCart(true)}
              >
                <p className="text-xl pt-1 font-bold ">Add to Cart</p>
              </div>
              <div
                className={`border-2 border-grey bg-blue rounded-md content-center pt-0.5 justify-center flex w-[77%] cursor-pointer ${
                  isInCart ? null : "hidden"
                }`}
                onClick={() => setIsInCart(false)}
              >
                <p className="text-xl pt-1 font-bold text-white">
                  Added to Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
