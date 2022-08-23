import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p>
        The United States is home to more than 400 National Parks. This website
        is dedicated to providing information and resources about each park.
      </p>
      <Link to="/parks" className="link">
        click here to start exploring!
      </Link>
    </div>
  );
}
