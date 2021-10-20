import React, { useState, useEffect } from "react";
import axios from "axios";
import Time from "./Time";
import Clock from "react-live-clock";
import * as BsIcons from "react-icons/bs";
import "./css/clockpage.css";

const GeoLocation = ({ buttonPress, toggleButton }) => {
  const [location, setLocation] = useState();

  useEffect(() => {
    locationData();
  }, []);
  const locationData = async () => {
    const result = await axios(
      "https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803"
    );
    setLocation(result.data);
  };

  return (
    <div>
      {location && (
        <>
          <div className="clock-div">
            <Clock
              className="clock"
              format={"HH:mm"}
              ticking={true}
              timezone={`${location.country_name}`}
            />
            <p>BST</p>
          </div>
          <div className="small-location-button-div ">
            <p>
              <strong>
                in {location.city}, {location.country_name}
              </strong>
            </p>
            <button onClick={toggleButton}>
              {buttonPress === true ? "LESS" : "MORE"}
              <BsIcons.BsFillArrowDownCircleFill size="24" />
            </button>
          </div>

          {buttonPress === true ? <Time location={location} /> : <></>}
        </>
      )}
    </div>
  );
};

export default GeoLocation;
