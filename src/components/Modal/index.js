import React from "react";
import "./index.css"

function Modal({ onClose, currentProject }) {


    return (
        <>
            <div className="darkBG" onClick={onClose} />

            <div className="centered">
                <div className="modal">
                    
                    <div className="modalHeader">
                        <h5 className="heading">{currentProject.title}</h5>
                    </div>

                    <div className="modalContent">
                        <img
                            src={require(`../../assets/images/${currentProject.title}-screenshot.jpg`)}
                            alt="web app screenshot"
                            width="600"
                            className="modal-image">
                        </img>
                        <p><span className="span-bold">About: </span> {currentProject.bio}</p>
                        <p><span className="span-bold">Tech Stack: </span> {currentProject.techStack}</p>
                    </div>

                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button
                                className="closeBtn"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal;