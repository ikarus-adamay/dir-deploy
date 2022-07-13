import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ArtistHeader from "../components/Artists/ArtistHeader";
import ArtistsCard from "../components/Artists/ArtistsCard";

const Artists = () => {
  return (
    <>
      <Navbar />
      <ArtistHeader />
      <ArtistsCard />
      <Footer />
    </>
  );
};

export default Artists;
