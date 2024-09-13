import React from "react";
import "../../Styles/Sport.css";

const Sport = ({ data }) => {
  return (
    <div
      className="Sport-cards"
      style={{
        backgroundImage: `url(${data.backImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sport-content">
        <img src={data.icon} alt="" />
        <h4 style={{fontWeight:"800"}}>{data.name}</h4>
      </div>
    </div>
  );
};

export default Sport;
