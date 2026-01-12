import React, { useState } from "react";
import "./MainProject.css"; // Import the CSS file

function MainProject() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function calculateBmi() {
    if (!height || !weight) {
      setErrorMsg("Please enter both height and weight");
      return;
    }

    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (isNaN(numericHeight) || isNaN(numericWeight) || numericHeight <= 0 || numericWeight <= 0) {
      setErrorMsg("Please enter valid numeric values for both height and weight");
      return;
    }

    const heightInMeters = numericHeight / 100;
    const bmiValue = (numericWeight / (heightInMeters * heightInMeters)).toFixed(2);

    setBMI(parseFloat(bmiValue)); // Convert back to number
    setErrorMsg("");
  }

  return (
    <div className="bmi-container">
      <div className="bmi-box">
        <h1>BMI Calculator</h1>
        <div className="input-group">
          <label>Height (CM):</label>
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="Enter height in cm"
          />
        </div>
        <div className="input-group">
          <label>Weight (KG):</label>
          <input
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="Enter weight in kg"
          />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>

        {errorMsg && <p className="error-message">{errorMsg}</p>}

        {bmi !== null && (
          <div className="bmi-result">
            <h2>Your BMI: {bmi}</h2>
            <p>
              {bmi < 18.5
                ? "Underweight 🥦"
                : bmi >= 18.5 && bmi < 24.9
                ? "Normal Weight ✅"
                : bmi >= 25 && bmi < 29.9
                ? "Overweight ⚠️"
                : "Obese ❌"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainProject;
