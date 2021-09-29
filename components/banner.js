import classes from "../styles/index.module.css";
import Typed from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

const Banner = (props) => {
  const goToGit = () => {
    window.open("https://github.com/manalsolanki");
  };

  const goToLinked = () => {
    window.open("https://www.linkedin.com/in/manal-solanki-96491419b");
  };

  const downloadResume = () => {
		window.open('/ManalSolanki-WebDeveloper.pdf');
	};

  return (
    <div className={classes.banner}>
      <div className={classes.bannerOverlay} />
      <div className={classes.bannerText}>
        <p>Hello,</p>
        <p>
          I'm&ensp;
          <span className={classes.nameText}>Manal Solanki</span>
        </p>
        <p>
          A&ensp;
          <Typed
            strings={[
              "Web Developer",
              "Fullstack Developer",
              "UI/UX Designer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
            backDelay={2000}
          />
          .
        </p>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.iconDiv}>
          <a href="mailto:97manal@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className={classes.iconDiv} onClick={downloadResume}>
          <FaFilePdf />
        </div>
        <div className={classes.iconDiv} onClick={goToLinked}>
          <FaLinkedinIn />
        </div>
        <div className={classes.iconDiv} onClick={goToGit}>
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Banner;
