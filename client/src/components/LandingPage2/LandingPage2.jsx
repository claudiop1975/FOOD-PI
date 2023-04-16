import HomeButton from "./HomeButton/HomeButton.jsx";
// import ReactPlayer from "react-player";
import "./LandingPage2.css";

//*As of Chrome 66, videos must be muted in order to play automatically. Some players, like Facebook, cannot be unmuted until the user interacts with the video, so you may want to enable controls to allow users to unmute videos themselves. Please set muted={true}.


const LandingPage2 = ()=>{
    return (
        
        <div className="landingPage2__container">
        <video controls loop={true} autoPlay={true} muted={false} src ="video.mp4" width="100%" height="100%">
        </video>
            {/* <audio controls autoPlay="true" loop= "true">
                <source src="audio.mp3" />
            </audio> */}

            <HomeButton/>
    </div>



    //* <div className="landingPage2__container">
    //*     <ReactPlayer 
    //*     url={"video.mp4"}
    //*     controls
    //*     playing={true}
    //*     loop={true}
    //*     width="640" 
    //*     height="250"
    //*     />
    //*     <HomeButton/>
    //* </div>
    );
}
export default LandingPage2;