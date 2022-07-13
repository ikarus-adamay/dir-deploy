import React from "react";
import Filterbar from "./Filterbar";
import CardGrid from "./Card/CardGrid";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/5">
          <Filterbar />
        </div>
        <div className="basis-4/5">
          <CardGrid />
        </div>
      </div>
    </>
  );
};

export default MainPage;
