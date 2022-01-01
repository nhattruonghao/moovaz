import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import BreadCrumb from "../../Components/BreadCrumb";
import Content from "../../Components/Content";
import FromToState from "../../Components/FromToState";
import ModalMoveDate from "../../Components/ModalMoveDate";

function Home() {
  return (
    <div className="main">
      <Header />
      <BreadCrumb />
      <FromToState />
      <Content />
      <Footer />
      <ModalMoveDate />
    </div>
  );
}

export default Home;
