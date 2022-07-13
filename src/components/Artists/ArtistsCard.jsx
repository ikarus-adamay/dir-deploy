import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loadingPlaceHolder from "../../Assets/loading.gif";

const ArtistsCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const tempData = await fetch("https://apiikarusnest.herokuapp.com/artists");
    const tempoData = await tempData.json();
    console.log(tempoData);
    setData(tempoData);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <img className="mx-auto" src={loadingPlaceHolder} alt="Loading..." />
      )}

      <div className="flex flex-row flex-wrap mt-10 justify-center">
        {data.map((artist) => {
          return (
            <div
              key={artist.username}
              className="flex w-128 my-10 mx-4 p-3 bg-white rounded-2xl drop-shadow-lg hover:bg-grey-200 "
            >
              <div className="basis-1/4">
                <Link to={`/artists/${artist.username}`}>
                  <div className="h-36 w-36  ">
                    <img
                      src={artist.image}
                      className=" h-36 w-36  rounded-xl drop-shadow-xl"
                      alt="brr"
                    />
                  </div>
                </Link>
              </div>
              <div className="basis-3/4 pt-1 pl-5 ">
                <Link to={`/artists/${artist.username}`}>
                  <div className="text-gray-600 text-2xl font-semibold cursor-pointer">
                    {artist.displayName}
                  </div>
                  <div className="text-grey-500 text-lg">{`@${artist.username}`}</div>
                </Link>
                <div className="flex max-w-30 flex-wrap ">
                  {artist.expertise.map((expertise) => {
                    return (
                      <div
                        key={expertise.id}
                        className="rounded-2xl text-sm pt-0.5 pb-1 px-3 mr-3 mt-2 mb-1"
                        style={{ backgroundColor: `${expertise.color}` }}
                      >
                        {expertise.Expertise}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArtistsCard;
