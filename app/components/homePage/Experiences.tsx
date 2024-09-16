import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  const experiencesText = [
    {
      id: 1,
      title: "Self Employed - Freelancer",
      time: "2010 - 2016",
      text: "Working part time as a hobby, when I was a highschool student. I tried to entertain my self and make some money as a freelancer, mustly making flash (action script) projects and wordpress websites.",
    },
    {
      id: 2,
      title: "Print Designer at Negareh",
      time: "2016 - 2017",
      text: "Before getting into unirevsity, I was fasinated by the print world and wanted to do print designing, so I was hired in Negareh Advertisement group located in Hammedan/Iran and designed different works for a year.",
    },
    {
      id: 3,
      title: "Self Employed - Freelancer",
      time: "2017 - 2019",
      text: "Working and studying at the same time is hard, but for me studying CS (softwere engineering) and working as a freelancer / web developer was enjoyable.",
    },
    {
      id: 4,
      title: "... CO",
      time: "2019 - 2023",
      text: "I wanted step to up my web development skills and experiences so I joined ... co And I learned a lot during that. I achieved different things such as being part of a team, getting help and helping teammates, using tools such as version control system (git) and etc.",
    },
  ];

  return (
    <>
      <div className="relative">
        <h2 className="text-2xl md:text-center border-b-2">
          <strong>Experiences</strong>
        </h2>

        <span className="-z-10 absolute border-red-900 left-[29px] h-[calc(100%-33px)] border md:left-1/2"></span>

        {experiencesText.map((item) => (
          <ExperienceCard
            key={item.id}
            id={item.id}
            title={item.title}
            time={item.time}
          >
            {item.text}
          </ExperienceCard>
        ))}
      </div>
      <h2 className="text-2xl md:text-center text-red-900 border-b-2">
        <strong>.</strong>
        <br />
        <strong>.</strong>
        <br />
        <strong>.</strong>
        <br />
        <strong>The journey goes on</strong>
      </h2>
    </>
  );
}
