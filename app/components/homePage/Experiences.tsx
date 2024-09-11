import React from "react";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  const experiencesText = [
    {
      id: 1,
      title: "Event one",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumin nisi commodo, aliquet velit ac, dapibus elit.",
    },
    {
      id: 2,
      title: "Event two",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumin nisi commodo, aliquet velit ac, dapibus elit.",
    },
    {
      id: 3,
      title: "Event three",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumin nisi commodo, aliquet velit ac, dapibus elit.",
    },
    {
      id: 4,
      title: "Event four",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumin nisi commodo, aliquet velit ac, dapibus elit.",
    },
  ];

  return (
    <div className="relative border-b-2">
      <h2 className="text-2xl md:text-center border-b-2">
        <strong>Experiences</strong>
      </h2>
      <span className="-z-10 absolute border-red-900 left-[29px] h-[calc(100%-33px)] border md:left-1/2"></span>
      {experiencesText.map((item) => (
        <ExperienceCard key={item.id} id={item.id} title={item.title}>
          {item.text}
        </ExperienceCard>
      ))}
    </div>
  );
}
