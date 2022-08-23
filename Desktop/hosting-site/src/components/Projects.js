import time from "../images/time-signatures.png";
import board from "../images/woodshop.png";
import acronym from "../images/acronym-finder-screenshot.png";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="project">
        <div className="project-info">
          <h3>time signature</h3>
          <p>
            A game that tests a musician's ability to identify the meter of
            various music.
          </p>
        </div>
        <img className="project-img" alt="time-signature-site" src={time} />
      </div>
      <div className="project">
        <div className="project-info">
          <h3>woodshop</h3>
          <p>A sample website for an artisan woodshop.</p>
        </div>
        <img className="project-img" alt="cutting-board-site" src={board} />
      </div>
      <div className="project">
        <div className="project-info">
          <h3>acronyms</h3>
          <p>
            An application that allows the user to retrieve parenthetical
            acronyms from large sections of text, utilizing Regex.
          </p>
        </div>
        <img alt="acronym-site" className="project-img" src={acronym} />
      </div>
    </div>
  );
}
