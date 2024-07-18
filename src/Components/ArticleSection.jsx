import React from "react";
import drone1 from "../assets/Drones/drone1.png";
import drone2 from "../assets/Drones/drone2.jpg";
import drone4 from "../assets/Drones/drone4.jpg";
import drone6 from "../assets/Drones/drone6.jpg";




 export const ArticlesSection = () => {
  return (
    <div className="background">
      <section className="myclass">
        <div className="container">
          <div className="latest">
            <h2>LATEST ARTICLES</h2>
            <hr />
        </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone1} alt=""  />
                <hr />
                <p>How to automate surveillance drones</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone2} alt=""   /><br />
                <hr />
                <p>Robotics and Artificial Intelligence</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone4} alt=""   /><br />
                <hr />
                <p>Improve Lives through Robotics Prosthetics</p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img className="card-img-top" src={drone6} alt=""   /><br />
                <hr />
                <p>Power of Robotics in Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

