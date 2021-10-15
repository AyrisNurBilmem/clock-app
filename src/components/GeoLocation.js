import React, { useState, useEffect } from "react";
import axios from "axios";
import Time from "./Time";
import Clock from "react-live-clock";

const GeoLocation = () => {
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
          <Clock
            format={"HH:mm"}
            ticking={true}
            timezone={`${location.country_name}`}
          />
          <div>
            <p>
              in {location.city}, {location.country_name}
            </p>
          </div>
          <button>More</button>
          <Time location={location} />
        </>
      )}
    </div>
  );
};

export default GeoLocation;
