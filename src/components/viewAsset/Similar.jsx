import React, { useState, useEffect } from "react";
import asset from "../../Assets/img2.png";
import user from "../../Assets/User1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import data from "./similarData.json";

const Similar = () => {
  const [similarLength, setSimilarLength] = useState(7);
  let remainingLength = data.length - similarLength;
  const [isSimilarRemaining, setIsSimilarRemaining] = useState(true);
  useEffect(() => {
    if (remainingLength <= 0) {
      setIsSimilarRemaining(false);
    }
  }, [similarLength]);
  return (
    <div>
      <div>
        {data.slice(0, similarLength).map((similar) => {
          return (
            <div
              key={similar.id}
              className="flex p-2 my-2 text-gray-800 rounded-lg bg-grey-200 drop-shadow-lg"
            >
              <div className="bg-grey-500 rounded-lg h-40 w-36">
                <img className="h-40 mt-3 ml-4" src={asset} alt="" />
              </div>
              <div className="flex flex-col p-2 w-[50%]">
                <p className="text-2xl font-bold ml-1">{similar.assetTitle}</p>
                <div className="flex">
                  <img className="h-6 mt-0.5" src={user} alt="user" />
                  <p className="ml-1 text-lg">@{similar.artist}</p>
                </div>
                <div className="flex mt-10 justify-between">
                  <div className="flex text-blue">
                    <AiOutlineHeart className="text-3xl" />
                    <p className="text-2xl">{similar.likeCounter}</p>
                  </div>
                  <div className="flex text-blue">
                    <BsCurrencyDollar className="text-3xl" />
                    <p className="text-2xl">{similar.cost}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isSimilarRemaining && (
        <div className="flex justify-center">
          <div
            onClick={() => setSimilarLength(similarLength + 3)}
            className="bg-blue rounded-lg text-center mt-5 px-4 py-1 text-white text-lg cursor-pointer hover:bg-blue-600"
          >
            Load More
          </div>
        </div>
      )}
    </div>
  );
};

export default Similar;
