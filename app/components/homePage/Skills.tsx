import React from "react";
import Skill from "./SkillCard";

export default function Skills() {
  const skills = [
    { id: 0, title: "JavaScript", level: 80 },
    { id: 1, title: "NodeJs", level: 80 },
    { id: 2, title: "ReactJs", level: 80 },
    { id: 3, title: "NextJs", level: 80 },
    { id: 4, title: "Express.js", level: 80 },
    { id: 5, title: "REST APIs", level: 80 },
    { id: 6, title: "Git", level: 80 },
    { id: 7, title: "Linux", level: 100 },
    { id: 8, title: "mongoDB", level: 40 },
    { id: 9, title: "python", level: 40 },
    { id: 10, title: "Tailwind CSS", level: 80 },
    { id: 11, title: "HTML", level: 60 },
    { id: 12, title: "CSS", level: 60 },
    { id: 13, title: "SQL", level: 40 },
    { id: 14, title: "Adobe Photoshop", level: 100 },
    { id: 15, title: "Adobe Illustrator", level: 40 },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-center border-b-2">
        <strong>Skills</strong>
      </h2>

      <div className="self-center container grid md:grid-cols-3 lg:grid-cols-4 gap-5 pb-5 place-items-center">
        {skills.map((skill) => (
          <Skill key={skill.id} title={skill.title} level={skill.level} />
        ))}
      </div>
    </>
  );
}
