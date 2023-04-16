import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
    return (
    <div className="footContainer">
        <div className="linksCont">
        <a
            className="footIcons"
            href="https://www.linkedin.com/in/claudio-parache-68b83869/"
            target="_blank"
            rel="noreferrer"
        >
            <AiFillLinkedin />
        </a>

        <a
            className="footIcons"
            href="https://github.com/claudiop1975"
            target="_blank"
            rel="noreferrer"
        >
            <AiFillGithub />
        </a>
        </div>

        <div className="credits">
        Proyecto individual      -      Claudio Parache       -   Henry -
        </div>
    </div>
    );
}