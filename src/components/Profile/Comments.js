import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import user from "../../Assets/User1.png";
const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const tempData = await fetch(
      `https://apiikarusnest.herokuapp.com/artists/${id}`
    );
    const tempoData = await tempData.json();
    setData(tempoData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();

  return (
    <div className="font-poppins">
      {isLoading || (
        <>
          {data.comments.map((comment) => {
            return (
              <div key={comment.id} className="flex flex-row pt-5 border-b">
                <div className="basis-1/12">
                  <img src={user} alt="user" className="mr-4"></img>
                </div>
                <div className="d-flex align-items-center basis-11/12 -mt-2">
                  <h5 className="text-xl">{comment.author}</h5>
                  <div className="flex flex-row">
                    <StarRatings
                      starRatedColor="#1a77bf"
                      rating={comment.rating}
                      starDimension="20px"
                      starSpacing="3px"
                    />
                  </div>

                  <p>{comment.comment}</p>
                  <div className="flex">
                    <a href className="text-blue pr-3">
                      Like
                    </a>
                    <span className="text-black">&#183;</span>
                    <a href className="text-blue px-3">
                      Reply
                    </a>
                    <span className="text-black">&#183;</span>
                    <p className="text-blue pl-3">23h</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Comments;
