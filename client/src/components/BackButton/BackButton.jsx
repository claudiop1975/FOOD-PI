import React from "react";
import  "./BackButton.css";

const BackButton = () => {
    return (
        <button className="B-button" onClick={() => window.history.back()}>Back</button>
    )
}
export default BackButton;