import "./offer.css";
import kurthsets from "../../assets/offer/kurthasets.svg";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function KurtaSets() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/kurthasets"); // This will navigate to the new page
  };

  return (
    <div className="box">
      <img src={kurthsets} alt="Kurta Sets" />
      <h3>Kurta Sets</h3>
      <p>Under 1099</p>
      <button className="button" onClick={handleNavigate}>
        SHOP NOW
      </button>
    </div>
  );
}
