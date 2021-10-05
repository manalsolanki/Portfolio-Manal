import { useState } from "react";
import classnames from "classnames";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaFilePdf,
} from "react-icons/fa";
import classes from "../styles/content.module.css";
import axios from "axios";

const API_URL = process.env.API_URL;
const APP_SECRET = process.env.APP_SECRET;

const ContactForm = props => {
  const [message, setMessage] = useState({ error: false, text: "" });
  const goToGit = () => {
    window.open("https://github.com/manalsolanki");
  };

  const goToLinked = () => {
    window.open("https://www.linkedin.com/in/manal-solanki-96491419b/");
  };

  const downloadResume = () => {
    window.open("/ManalSolanki-WebDeveloper.pdf");
  };

  
  const submitQuery = (e) => {
    e.preventDefault();
    e.persist()
    let target = e.currentTarget
    let name = e.currentTarget.username.value;
    let email = e.currentTarget.email.value;
    let message = e.currentTarget.message.value;
    if (name && email && message) {
      axios
        .post(
          `${API_URL}/mails/submit_query`,
          { name, email, message },
          {
            headers: {
              APP_TOKEN: APP_SECRET,
            },
          }
        )
        .then((response) => {
          setMessage({ error: false, text: "Message sent succesfully." });
          target && target.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return(
<div className={classes.contact} id="contact">
          <h1 className={classes.centerUnderLine}>
            Let's develop something creative
          </h1>
          <p>
            Please feel free to reach out to me. Thanks.
            {/* I'm a freelance developer along with working as a Fullstack
            developer and always eager to work on new and creative ideas. I work
            in a structural and professional manner by following best practices
            and standards. Besides development, also interested in Data Science
            work and looking for opportunity to deep dive into these fields. */}
          </p>
          <div className={classes.contactForm}>
            <div>
              {/* <form onSubmit={submitQuery}>
                <input
                  required
                  name="username"
                  type="text"
                  placeholder="Name"
                />
                <input required name="email" type="email" placeholder="Email" />
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  rows={5}
                />
                {message.text && (
                  <p
                    className={classnames(classes.success, {
                      [classes.error]: message.error,
                    })}
                  >
                    {message.text}
                  </p>
                )}
                <button className="d-flex" type="submit">
                  SEND MESSAGE&emsp;
                  <FaTelegramPlane style={{ fontSize: "1.3rem" }} />
                </button>
              </form> */}
            </div>
            <div>
              <h4>Reach me</h4>
              <p>Email: 97manal@gmail.com</p>
              <p>Contact: +437-776-9678</p>
              <div className="d-flex">
                <a
                  href="mailto:97manal@gmail.com"
                  className={classes.socialIcons}
                >
                  <FaEnvelope style={{color:"black"}} />
                </a>
                <div className={classes.socialIcons} onClick={downloadResume}>
                  <FaFilePdf />
                </div>
                <div className={classes.socialIcons} onClick={goToLinked}>
                  <FaLinkedinIn />
                </div>
                <div className={classes.socialIcons} onClick={goToGit}>
                  <FaGithub />
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
  )
}

export default ContactForm