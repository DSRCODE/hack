import React from "react";
import "../../Styles/Sport.css";
import { useNavigate } from "react-router-dom";

const Sport = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
    
      <div
        className="Sport-cards"
         data-aos="fade-up"
        style={{
          backgroundImage: `url(${data.backImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={()=>navigate("/sportDet")} 
      >
        <div className="sport-content" >
          
          <img src={data.icon} alt="" />
          <h4>{data.name}</h4>
        </div>
      </div>
    </>
  );
};

export default Sport;
