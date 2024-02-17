import react from "react";
import styles from './Landingpage.css';
import Vector from "../../assets/Vector.png";
import email from "../../assets/email.png";
import letstalk from "../../assets/letstalk.png";
import person from "../../assets/person.png";

function Landingpage () {
    return(
        <div className="law">
      <div className="App">
        <div className="igstudio">
          <div className="logo">
            <div className="logo1">
            <img src={Vector} alt="logo"/>
            </div>
            <div className="logotext">IGSTUDIO</div>
          </div>
          <div className="components">
            <div className="Home">Home</div>
            <div className="Attorneys">Attorneys</div>
            <div className=" Practice-Areas"> Practice Areas</div>
            <div className="About-Us">About</div>
          </div>
          <button className="contact-us">Contact Us</button>
          <div className="main">
            <div className="first">You don’t have to </div>
            <div className="second">Fight them Alone.</div>
          </div>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </div>
          <div className="email">
            <div className="emailicon">
            <img src={email} alt="email"/>
            </div>
            <div className="emailtext">Enter your eamil address</div>
            <div className="letstalk">
      
            <img src={letstalk } alt="letstalk "/>
            </div>
          </div>
          <div className="photo">
          <div className="yellow"></div>
            <div className="image">
            <img src={person } alt="person"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="introduction">
        <div className="text">Let’s Introduce Ourself</div>
        <div className="text2">
          <div className="criminal">Criminal Lawyer</div>
          <div className="paragraph">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </div>
        </div>
      </div>
    </div>
    )
}

export default Landingpage;