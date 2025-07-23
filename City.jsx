
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function City() {
  const [enteredCity, setEnteredCity] = useState("");
  const [errorCity, setErrorCity] = useState(false);
  const navigate = useNavigate();

  const handleSubmitCity = useCallback(
    (e) => {
      e.preventDefault();
      if (enteredCity.trim() === "") {
        setErrorCity(true);
      } else {
        setErrorCity(false);
        navigate("/weather", { state: { userCity: enteredCity } });
      }
    },
    [enteredCity, navigate]
  );

  return (
    <div className="mainBox">
      <h2>SkyCast - Predict My Weather</h2>
      <form onSubmit={handleSubmitCity}>
        <input
          type="text"
          placeholder="Enter city name"
          value={enteredCity}
          onChange={(e) => setEnteredCity(e.target.value)}
        />
        <button type="submit">Check Weather</button>
      </form>
      {errorCity && <p className="error-text">City name is required!</p>}
    </div>
  );
}

export default City;
