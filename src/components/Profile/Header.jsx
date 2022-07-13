import React from "react";
import Card from "./Card";
import hero from "../../Assets/hero-img.png";
const Header = () => {
  return (
    <div className="font-poppins">
      <div className="h-48" style={{ backgroundImage: `url(${hero})` }}></div>
      <div className="max-w-8xl -mt-36 mx-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        <div className="px-3 py-3 sm:px-0">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Header;
