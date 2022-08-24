import time from "../images/time-signatures.jpg";
import board from "../images/wood-background.jpg";
import park from "../images/pexels-rudolf-jakkel-418831.jpg";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="project" onClick="location.href='https://eliassymons.github.io/time-signatures';">
        <div className="project-info">
          <h3>time signatures</h3>
          <p>
            A game that tests a musician's ability to identify the meter of
            various music.
          </p>
        </div>
        <img className="project-img" alt="time-signature-site" src={time} />
      </div>
      <div className="project" onClick="location.href='https://eliassymons.github.io/cutting-board-site';">
        <div className="project-info">
          <h3>woodshop</h3>
          <p>A sample website for an artisan woodshop.</p>
        </div>
        <img className="project-img" alt="cutting-board-site" src={board} />
      </div>
      <div className="project" onClick="location.href='https://eliassymons.github.io/national-parks';">
        <div className="project-info">
          <h3>national parks</h3>
          <p>
            An application that allows the user to retrieve basic information and images for all national parks and historic sites located in the US.
          </p>
        </div>
        <img alt="natl-park-site" className="project-img" src={park} />
      </div>
    </div>
  );
}
