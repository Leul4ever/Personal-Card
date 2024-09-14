import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const Me = [
  {
    photoname: "./asset/le.jpg",
    name: "Leul Abera ",
    aboutMe:
      "I'm a Software Engineer and Full Stack Web Developer. In my free timeenjoy playing chess, singing, and playing the piano.",
    HTML: "HTMl",
    CSS: "Css",
    JS: "Js",
    web: "web Desing",
    git: "git and GitHub",
    React: "React",
    servelte: "servelt",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Leul Abera "
          aboutMe="I'm a Software Engineer and Full Stack Web Developer. In my free timeenjoy playing chess, singing, and playing the piano"
        />
        <SkillList
          HTML="HTMl"
          CSS="Css"
          JS="Js"
          web="web Desing"
          git="git and GitHub"
          React="React"
          serviette="servelt"
        />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="./asset/le.jpg" />;
}
function Intro(props) {
  return (
    <div>
      <h1 className=""> {props.name} </h1>
      <p>
        I'm a Software Engineer and Full Stack Web Developer. In my free time, I
        enjoy playing chess, singing, and playing the piano.
      </p>
    </div>
  );
}
function SkillList(props) {
  return (
    <ul className="skill-list">
      <li id="html" className="skill">
        {props.HTML} 👍
      </li>
      <li id="js" className="skill">
        {props.JS}❤️
      </li>
      <li id="web" className="skill">
        {props.web} 👌
      </li>
      <li id="git" className="skill">
        {props.git} 👍
      </li>
      <li id="react" className="skill">
        {props.React} 👍
      </li>
      <li id="se" className="skill">
        {props.SkillList}😒
      </li>
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
