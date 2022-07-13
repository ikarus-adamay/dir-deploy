import React from "react";
// import img from "../../Assets/assetplaceholder.jpg";

const AssetCard = () => {
  return (
    <div className="h-full w-full  rounded-lg">
      <div class="sketchfab-embed-wrapper w-full h-full  rounded-lg">
        <iframe
          className="h-full w-full rounded-lg"
          title="Adidas Brown"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/90020d542a2042338160b81ab416313f/embed?autostart=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
        ></iframe>
      </div>
    </div>
  );
};

export default AssetCard;
