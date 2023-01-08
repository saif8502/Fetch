import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [stateData, setStateData] = useState([]);
  const [occupationData, setOccupationData] = useState([]);

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch");
        }
        return response.json();
      })
      .then((jsonData) => {
        setStateData(jsonData.states);
        setOccupationData(jsonData.occupations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  function handleChange(event) {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password, occupation, state } = user;
    if (!name || !email || !password || !occupation || !state) {
      alert("Please complete the entire form.");
      return;
    } else {
      alert("Thank you for submitting the form!");
    }

    let response = await fetch(
      "https://frontend-take-home.fetchrewards.com/form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      }
    );
    let json = await response.json();
    setUser(json);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--input"
          type="text"
          maxLength="30"
          placeholder="Full Name"
          onChange={handleChange}
          name="name"
          value={user.name}
        />

        <input
          className="form--input"
          type="email"
          placeholder="E-mail address"
          onChange={handleChange}
          name="email"
          value={user.email}
        />

        <input
          className="form--input"
          type="password"
          minLength="8"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={user.password}
        />

        <div className="form-state-container">
          <label htmlFor="state" className="form-label-states">
            Select your state
          </label>

          <select
            id="state"
            className="form-select m-23px-11px"
            value={user.state}
            onChange={handleChange}
            name="state"
          >
            <option value="">---</option>
            {stateData.map((item) => (
              <option key={item.abbreviation} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-occupation-container">
          <label htmlFor="occupation">Select your occupation</label>

          <select
            id="occupation"
            className="form-select m-23px-11px"
            value={user.occupation}
            onChange={handleChange}
            name="occupation"
          >
            <option value="">---</option>
            {occupationData.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className="form--submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;