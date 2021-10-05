import classes from "../styles/content.module.css";
import classnames from "classnames";
import ContactForm from './form'
import projects from '../projects';
import Project from "./project";

const Content = (props) => {

  const handleTab = (e) => {
    let id = e.currentTarget.dataset.scroll;
    let element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.titleBar} id="menu-bar">
        <div
          data-scroll="about"
          onClick={handleTab}
          className={classnames(classes.title, classes.hideInMobile)}
        >
          About
        </div>
        <div data-scroll="skills" onClick={handleTab} className={classes.title}>
          Skills
        </div>
        <div
          data-scroll="projects"
          onClick={handleTab}
          className={classes.title}
        >
          Projects
        </div>
        {/* <div data-scroll="about" onClick={handleTab} className={classes.title}>
          Work
        </div> */}
        <div
          data-scroll="contact"
          onClick={handleTab}
          className={classes.title}
        >
          Contact
        </div>
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.about} id="about">
          <div>
            <h1 className={classnames(classes.underlineText)}>About Me</h1>
            <div>
              Meticulous web designer and developer with over 2 years of experience in
              blending the art of design with skills of programming to deliver an immersive and engaging user experience.
              I am passionate about my work and love to do all my work with 100% dedication.
              I like to work with multidisciplinary team of dedicated professionals,
              with great experience, and in an open corporate culture where everyone
              communicate equally with technical developers as well as business.
            </div>
          </div>
          <img src="/manalSolanki.jpeg" alt="Self" className={classes.selfImg} />
        </div>
        <div className={classes.skills} id="skills">
          <div>
            <h1 className={classnames(classes.underlineText)}>Skills</h1>
          </div>
          <div />
          <div>
            <h3>Programming Languages</h3>
            <p className="skills-description">HTML, CSS, Javascript, PHP, C#, NodeJS, React</p>
          </div>
          <div>
            <h3>Database</h3>
            <p className="skills-description">MYSQL, MongoDB</p>
          </div>
          <div>
            <h3>Adobe Designing Software</h3>
            <p className="skills-description">XD, Illustrator, Photoshop</p>
          </div>
          <div>
            <h3>Frameworks</h3>
            <p className="skills-description">
              ASP.NET, Express, Bootstrap
            </p>
          </div>
          <div>
            <h3>IDE and Tools</h3>
            <p className="skills-description">
              Eclipse, GitHub, MS Visual Studio Code, MS VisualStudio, PHP Storm
            </p>
          </div>
        </div>
        <div className={classes.services} id="Projects">
          <h1 className={classnames(classes.underlineText)}>Projects</h1>
      
            <div className={classes.projectContainer}>
              {projects.map(project => {
                return (<div className={classes.projectSection}>
                  <Project project={project}></Project>
                </div>)
              })}
            </div>

          
        </div>
        {/* <div classNameName={classes.work} id="work">
          <h1 className={classnames(classes.underlineText)}>Work</h1>
          Work
        </div> */}
        <ContactForm />
      </div>
    </>
  );
};

export default Content;
