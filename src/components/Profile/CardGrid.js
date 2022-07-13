import React, { useState, useEffect } from "react";
import { FaHeart, FaDollarSign, FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "../Explore/Filter Components/styles.css";
import "../Explore/Card/tooltip.css";
import { useParams } from "react-router-dom";

const CardGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  let usersPerPage = 8;
  let elementsVisited = pageNumber * usersPerPage;

  useEffect(() => {
    fetchData();
    // setPageCount(Math.ceil(data.assets.length / usersPerPage));
  }, []);
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
    isLoading || setPageCount(Math.ceil(data.assets.length / usersPerPage));
  }, [isLoading]);

  //   ({isLoading || (setPageCount(Math.ceil(data.assets.length / usersPerPage));
  //   console.log(pageCount)})
  // }, [isLoading]);

  let formattedData = [];
  isLoading ||
    (formattedData = data.assets
      .slice(elementsVisited, elementsVisited + usersPerPage)
      .map((asset) => {
        return (
          <div
            key={asset.id}
            className="h-full w-72 bg-white shadow-sm font-poppins rounded-lg m-2 drop-shadow-lg"
          >
            <div className="h-64 w-64 relative cursor-pointer ml-4">
              <div className="absolute inset-0 transform hover:scale-110 transition duration-1000">
                <img
                  className=" h-full w-full rounded-lg mt-4"
                  src={asset.image}
                  alt="product"
                />
              </div>
            </div>
            <div className="px-5 mt-7">
              <h5 className="text-sm font-normal tracking-tight text-gray-500">
                {asset.author}
              </h5>
              <h3 className="text-xl font-medium tracking-tight text-black">
                {asset.name}
              </h3>
              <div className="flex justify-between items-center my-1">
                <div className="grid items-center pl-2 py-2">
                  <div className="flex items-center ">
                    <a href className="group">
                      <FaHeart className="text-gray-600 hover:text-red" />
                      <span class="absolute z-50 hidden p-3 py-2 -mt-16 -ml-6 text-center bg-gray-100 rounded tooltip-text group-hover:block transition ease-out delay-1000">
                        Add to Wishlist
                      </span>
                    </a>
                    <span className="text-gray-600 text-xl font-semibold mr-2 px-2.5 py-0.5">
                      {asset.likes}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow" />
                    <span className="text-gray-600 text-xl font-semibold mr-2 px-2.5 py-0.5">
                      {asset.ratingAvg}
                    </span>
                  </div>
                </div>
                <div className="flex items-center pt-6">
                  <FaDollarSign className="text-[#018049] h-6" />
                  <span className="text-gray-600 text-3xl font-semibold pl-2">
                    {asset.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      }));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {isLoading || (
        <>
          <div className="container my-12 mx-1 px-2">
            <div className="flex flex-wrap -mx-1 lg:-mx-5">{formattedData}</div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
              "flex flex-row justify-end mr-32 paginationbtns"
            }
            previousLinkClassName={"underline"}
            nextLinkClassName={"underline"}
            activeClassName={"paginationActive"}
          />
        </>
      )}
    </>
  );
};

export default CardGrid;
