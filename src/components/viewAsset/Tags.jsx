import React from "react";
import tags from "./tagsData.json";

const Tags = () => {
  return (
    <div className="px-3 text-grey-700 font-poppins">
      <p className="text-3xl">Tags</p>
      <div className="p-1 flex flex-wrap">
        {tags.map((tag) => {
          return (
            <div className="bg-grey-300 rounded-xl px-7 m-2 drop-shadow-lg cursor-pointer">
              <p className="text-xl">{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
