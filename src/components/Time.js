import React, { useState, useEffect } from "react";
import axios from "axios";

const Time = ({ location }) => {
  const [date, setdate] = useState();

  useEffect(() => {
    dateData();
  }, []);

  const dateData = async () => {
    const result = await axios(`http://worldtimeapi.org/api/ip`);
    setdate(result.data);
  };
  return (
    <div>
      {date && (
        <>
          <div>
            <p>
              Current timezone : {location.country_name}/{location.city}
            </p>
            <p>Day of the year : {date.day_of_year}</p>
            <p>Day of the week : {date.day_of_week}</p>
            <p>Week number : {date.week_number}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Time;
