import React from "react";

interface Props {
  title: string;
  level: string;
}

export default function Skill({ title, level }: Props) {
  return (
    <>
      <p>
        {title}, level: {level}
      </p>
    </>
  );
}
