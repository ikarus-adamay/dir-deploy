import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Profile/Header";

const Profile = ({ match }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
};

export default Profile;
