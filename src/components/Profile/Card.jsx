import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import loadingPlaceHolder from "../../Assets/loading.gif";

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  });

  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const tempData = await fetch(
      `https://apiikarusnest.herokuapp.com/artists/${id}`
    );
    const tempoData = await tempData.json();
    setData(tempoData);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <img className="mx-auto" src={loadingPlaceHolder} alt="Loading..." />
      )}
      <div className="font-poppins flex flex-row ">
        <div className="h-full basis-4/5 ml-8 mr-14 ">
          <div className="shadow-lg bg-gray-300 flex pb-6 rounded-lg">
            <img
              className="px-6 pt-8 h-80 w-80 drop-shadow-xl"
              src={data.image}
              alt="profile"
            />
            <div className="pt-10">
              <div className="flex">
                <h3 className="text-3xl font-medium pr-3">
                  {data.displayName}
                </h3>
                {isLoading || (
                  <div className="flex max-w-30 flex-wrap ">
                    {data.expertise.map((expertise) => {
                      return (
                        <div
                          key={expertise.id}
                          className="rounded-2xl text-sm pt-0.5 pb-1 px-3 mr-3 mt-2 mb-1 cursor-pointer"
                          style={{ backgroundColor: `${expertise.color}` }}
                        >
                          {expertise.Expertise}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <h5 className="text-sm inline text-gray-700 pb-6 hover:text-blue-300 cursor-pointer">
                @{data.username}
              </h5>
              <p className="py-4 pr-6 text-gray-700 text-justify">
                {data.description}
              </p>
            </div>
          </div>
          <div className="mt-28">
            <h3 className="text-3xl">Asset Collection</h3>
            <CardGrid />
          </div>
          <div className="mt-28">
            <h3 className="text-3xl">Artist Reviews</h3>
            <Comments />
          </div>
        </div>

        <div className="pt-12 basis-1/5 mr-12">
          <button className="bg-red hover:bg-blue-500 rounded-lg text-white text-2xl text-bold w-full px-8 py-3">
            Hire {data.displayName}!
          </button>

          <div className="bg-gray-300 shadow-lg px-4 py-3 my-10 rounded-lg">
            <h4 className="border-b border-gray-900 text-gray-900 text-2xl">
              Toolset
            </h4>
            {isLoading || (
              <div className="text-gray-600 text-lg">
                {data.skills.map((skill) => {
                  return (
                    <div
                      k
                      ey={skill.id}
                      className="flex px-2 py-2 rounded-lg bg-gray-1000 my-2 w-11/12"
                    >
                      <img src={skill.icon} alt={skill.skill} />
                      <p className="pl-2">{skill.skill}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="bg-gray-300 shadow-lg px-4 py-3 my-10 rounded-lg">
            <h4 className="border-b border-gray-900 text-gray-900 text-2xl">
              Certifications
            </h4>
            {isLoading || (
              <div className="text-gray-600 text-lg">
                {data.certification.map((certification) => {
                  return (
                    <div
                      id={certification.id}
                      className="flex px-2 py-2 rounded-lg bg-gray-1000 my-2 w-11/12"
                    >
                      <a href={certification.certificateLink} className="pl-2">
                        {certification.certificateDisplay}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="bg-gray-300 shadow-lg px-4 py-3 my-10 rounded-lg">
            <h4 className="border-b border-gray-900 text-gray-900 text-2xl">
              Commissions
            </h4>
            <div className="text-gray-600 text-lg">
              <div className="flex px-2 py-2 rounded-lg bg-gray-1000 my-2 w-11/12">
                <p className="pl-2">Past Commissions</p>
              </div>
              <div className="flex px-2 py-2 rounded-lg bg-gray-1000 my-2 w-11/12">
                <p className="pl-2">Active Commissions</p>
              </div>
              <div className="flex px-2 py-2 rounded-lg bg-gray-1000 my-2 w-11/12">
                <p className="pl-2">Future Commissions</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-gray-300 shadow-lg px-4 py-3 my-10">
            <h4 className="border-b border-gray-900 text-gray-900 text-2xl">
              Tags
            </h4>
            <div className="text-gray-600 text-lg pt-2">
              <div className="flex justify-between">
                <div className="flex px-1 py-2 rounded-lg bg-gray-1000 mx-1">
                  <p className="px-2">3D</p>
                </div>
                <div className="flex px-1 py-2 rounded-lg bg-gray-1000 mx-1">
                  <p className="px-2">Blender</p>
                </div>
                <div className="flex px-1 py-2 rounded-lg bg-gray-1000 mx-1">
                  <p className="px-2">Art</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
