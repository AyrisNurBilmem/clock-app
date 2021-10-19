import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/clockpage.css";

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
            <div className="quotes-div">
              <p>"{quotes.quote}"</p>
              <p>
                <strong>{quotes.author}</strong>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClockPage;
