import classes from "../styles/content.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const Project = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>

        
        <div onClick={handleShow}>
            {/* <a href={props.project.link}> */}
                  <div className={classes.imgDiv}>
                    <div className={classes.projectTitle}>{props.project.name}</div>
                    <img src={props.project.imgSrc} alt="project" />
                  </div>
                  <p>{props.project.shortDescription}</p>
                {/* </a>  */}
        </div>
        <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="text-center">
                        
                        <p >Price : <b></b></p>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>close</button>
                </Modal.Footer>
            </Modal>

      </div>
    )
}

export default Project;
