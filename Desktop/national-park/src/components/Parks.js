import React from "react";
import { useEffect } from "react";
import parkImg from "../images/pexels-rudolf-jakkel-418831.jpg";
export default function Parks() {
  const [parks, setParks] = React.useState([]);
  useEffect(() => {
    fetch(
      "https://developer.nps.gov/api/v1/parks?limit=500&api_key=FPVaqQB0EJME3YLubFVuJXm6IvF9zFXgFDvLu83d"
    )
      .then((res) => res.json())
      .then((data) =>
        setParks(() => {
          return data.data;
        })
      );
  }, []);

  // const [currentPark, setCurrentPark] = React.useState({});
  // useEffect(() => {
  //   setCurrentPark(() => {
  //     parks.find((o) => o.fullName === parkData.fullName);
  //   });
  // }, [parkData]);
  // console.log(currentPark + "This is the current park");
  // console.log(parks[1]);

  const [parkData, setParkData] = React.useState({
    fullName: "",
  });
  const select = function (event) {
    const { name, value } = event.target;

    setParkData(() => {
      return {
        [name]: value,
      };
    });
  };
  // const [currPark, setCurrentPark] = React.useState({});
  // React.useEffect(() => {
  //   if (parkData.fullName !== undefined && parkData.fullName !== null) {
  //     setCurrentPark(parks.find((p) => p.fullName === parkData.fullName));
  //   }
  // }, [parkData.fullName]);

  // const parkInfo = <p>{currPark.description}</p>;
  const currPark = parkData.fullName
    ? parks.find((p) => p.fullName === parkData.fullName)
    : "";

  const options = parks.map((park) => (
    <option
      value={park.fullName}
      decscription={park.description}
      className="option"
      key={park.fullName}
    >
      {park.fullName}
    </option>
  ));
  console.log(currPark);
  return (
    <div className="parks-container">
      <h2 className="parks-title">Start Exploring!</h2>
      <form className=".form">
        <label htmlFor="parkData">Select a park from the list:</label>
        <select
          name="fullName"
          description={parkData.description}
          value={parkData.fullName}
          onChange={select}
        >
          {options}
        </select>
      </form>
      <div className="natl-park-container">
        <h3>{parkData.fullName}</h3>
        <p className="parks-desc">
          {currPark.description ? currPark.description : ""}
        </p>
        <img
          alt="natl-park"
          src={currPark.images ? currPark.images[0].url : parkImg}
          className="natl-park-img"
        />
        <a className="parks-link" href={currPark.url ? currPark.url : ""}>
          More Information
        </a>
      </div>
    </div>
  );
}
