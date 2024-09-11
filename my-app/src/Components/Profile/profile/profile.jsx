/* 
my profile
orders
wishlist
return/exchange
rewards
*/
import profile from "../../Profile/images/profile.svg";
import "./profile.css";
import { useState } from "react";

export default function Profile() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <button
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="profilebtn" src={profile} alt="" />
      </button>
      {isHovered && (
        <div className="tooltip">
          <ul>
            <br />
            <li>My Profile</li>
            <br />
            <br />
            <li>Orders</li>
            <br />
            <br />
            <li>Wishlist</li>
            <br />
            <br />
            <li>Return/Exchange</li>
            <br />
            <br />
            <li>Rewards</li>
            <br />
            <br />
          </ul>
        </div>
      )}
    </div>
  );
}
