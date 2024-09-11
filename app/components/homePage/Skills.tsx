import React from "react";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    { id: 1, title: "photoshop", level: "professional" },
    { id: 2, title: "photoshop", level: "professional" },
    { id: 3, title: "photoshop", level: "professional" },
    { id: 4, title: "photoshop", level: "professional" },
    { id: 5, title: "photoshop", level: "professional" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-center border-b-2">
        <strong>Skills</strong>
      </h2>

      <div className="container">
        {skills.map((skill) => (
          <Skill key={skill.id} title={skill.title} level={skill.level} />
        ))}
      </div>
    </>
  );
}
