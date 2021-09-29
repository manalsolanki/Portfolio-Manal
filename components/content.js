import classes from "../styles/content.module.css";
import classnames from "classnames";
import ContactForm from './form'

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
          {/* <div className={classes.serviceContainer}>
            <div className={classes.serviceCard}>
              <img
                src="/laptop.png"
                alt="Laptop"
                className={classes.serviceIcon}
              />
              <h3>Web Development</h3>
              <p>
                Create websites from designs provided in PSD format or even
                design attractive and catchy website from client requirements.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="/mobile.png"
                alt="mobile"
                className={classes.serviceIcon}
              />
              <h3>Responsive</h3>
              <p>
                More than a half of the user traffic comes from smart phones and
                sites must be developed by keeping large audience in mind.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="backend.png"
                alt="backend"
                className={classes.serviceIcon}
              />
              <h3>Backend Development</h3>
              <p>
                Backend in technologies such as NodeJS, Python (Django), Java
                (Spring, hibernate) with security concerns and optimum data
                extraction.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="database.png"
                alt="database"
                className={classes.serviceIcon}
              />
              <h3>Databases</h3>
              <p>
                Worked with few kind of databases as Relational Database (MySql,
                Postgres) and NoSQL database (MongoDb).
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img src="/more.png" alt="more" className={classes.serviceIcon} />
              <h3>Others</h3>
              <p>
                Also worked on complementary things as PWAs, Service Workers,
                GraphQL and Real Time applications (firebase and socket).
              </p>
            </div>
          </div> */}
        </div>
        {/* <div className={classes.work} id="work">
          <h1 className={classnames(classes.underlineText)}>Work</h1>
          Work
        </div> */}
        <ContactForm  />
      </div>
    </>
  );
};

export default Content;
