import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  size: String;
  color: String;
}

export default function GradientButton({ children, size, color }: Props) {
  return (
    <div
      className={`card-wrapper ${size} self-center text-black bg-gradient-to-bl ${color}`}
    >
      <button className="card-content flex items-center justify-center text-xs">
        <div className=" text-center">{children}</div>
      </button>
    </div>
  );
}
