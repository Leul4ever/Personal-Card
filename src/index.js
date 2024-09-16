import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const Me = [
  {
    photoname: "./asset/le.jpg",
    name: "Leul Abera ",
    aboutMe:
      "I'm a Software Engineer and Full Stack Web Developer. In my free timeenjoy playing chess, singing, and playing the piano.",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photoname="./asset/fun.jpg" />
      <div className="data">
        <Intro
          name="Leul Abera "
          aboutMe="I'm a Software Engineer and Full Stack Web Developer. In my free timeenjoy playing chess, singing, and playing the piano"
        />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img className="avatar" src={props.photoname} />;
}
function Intro(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p>
        I'm a Software Engineer and Full Stack Web Developer. In my free time, I
        enjoy playing chess, singing, and playing the piano.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div>
      <Skill skill="React" emoji="👍" color="blue" />
      <Skill skill="HTML and CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="👌" color="yellow" />
      <Skill skill="Svelte" emoji="😒" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji} </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
