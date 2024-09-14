import React from "react";
import Skill from "./SkillCard";

export default function Skills() {
	const skills = [
		{ title: "JavaScript", level: 80 },
		{ title: "NodeJs", level: 80 },
		{ title: "ReactJs", level: 80 },
		{ title: "NextJs", level: 80 },
		{ title: "Express.js", level: 80 },
		{ title: "REST APIs", level: 80 },
		{ title: "Git", level: 80 },
		{ title: "Linux", level: 100 },
		{ title: "mongoDB", level: 40 },
		{ title: "python", level: 40 },
		{ title: "Tailwind CSS", level: 80 },
		{ title: "HTML", level: 60 },
		{ title: "CSS", level: 60 },
		{ title: "SQL", level: 40 },
		{ title: "Adobe Photoshop", level: 100 },
		{ title: "Adobe Illustrator", level: 40 },
	];

	return (
		<>
			<h2 className='text-2xl md:text-center border-b-2'>
				<strong>Skills</strong>
			</h2>

			<div className='self-center container grid md:grid-cols-3 lg:grid-cols-4 gap-5 pb-5 place-items-center'>
				{skills.map((skill) => (
					<>
						<Skill key={skill.title} title={skill.title} level={skill.level} />
					</>
				))}
			</div>
		</>
	);
}
