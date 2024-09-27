import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
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
      <Avatar
        style={{ width: 100, height: 100, borderRadius: "50%" }}
        photoname="./asset/leul.jpg"
      />
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
// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//       ))}
//     </div>
//   );
// }
function SkillList() {
  return (
    <div className="skill-List">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}{" "}
      </span>
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
