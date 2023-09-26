import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
// import "./about";
import "../styles/styles.css";
import bishop from "../assets/me.webp";

const Home = () => {
  return (
    <div>
      <Header />

      <div class="home-section section show" id="home">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="home-text">
              <p>Hello&#128578;</p>
              <h1>I'm Akin-Thomas Bishop Abimbola...</h1>
              <h2> FrontEnd Developer | Blockchain Developer</h2>
              {/* <a href="/about" class="mee link-item"> More About me</a> */}
              <Link className="mee" to="/about">
                More about me
              </Link>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src={bishop} alt="bishop pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
