import React, { useEffect, useState } from "react";
import axios from "axios";
import GeoLocation from "./GeoLocation";

const ClockPage = () => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const setData = (data) => {
    setQuotes({
      quote: data.quote,
      author: data.author,
    });
  };

  const fetchData = async () => {
    const result = await axios(
      "http://quotes.stormconsultancy.co.uk/random.json"
    );
    setData(result.data);
  };

  return (
    <div>
      <div>
        {quotes && (
          <>
            <div>
              <h1>{quotes.quote}</h1>
              <p>{quotes.author}</p>
            </div>
          </>
        )}

        <div>
          <GeoLocation />
        </div>
      </div>
    </div>
  );
};

export default ClockPage;
