import github from "../icons/icons8-github-90.png";
import facebook from "../icons/icons8-facebook-90.png";
import instagram from "../icons/icons8-instagram-90.png";
import linkedIn from "../icons/icons8-linkedin-90.png";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h3>contact</h3>
      <div class="contact-form">
        <form>
          <label className="name" for="name">
            name
          </label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label className="subject" for="subject">
            subject
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="your message.."
          ></textarea>

          <input className="submit-btn" type="submit" value="submit" />
        </form>
      </div>
      <footer>
        <ul>
          <li>
            <a href="#" />
            <img className="icon" src={github} alt="github-icon" />
          </li>
          <li>
            <a href="#" />
            <img className="icon" src={instagram} alt="insta-icon" />
          </li>
          <li>
            <a href="#" />
            <img className="icon" src={facebook} alt="facebook-icon" />
          </li>
          <li>
            <a href="#" />
            <img className="icon" src={linkedIn} alt="linkedIn-icon" />
          </li>
        </ul>
      </footer>
    </div>
  );
}
