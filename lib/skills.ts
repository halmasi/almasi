export function levelCalc(level: number): {
  levels: string;
} {
  let levels;
  switch (true) {
    case level <= 20:
      levels = "Beginner";
      break;
    case level <= 40:
      levels = "Advanced Beginner";
      break;
    case level <= 60:
      levels = "Competent";
      break;
    case level <= 80:
      levels = "Proficient";
      break;
    default:
      levels = "Expert";
  }
  return { levels };
}

export function iconNameGenerator(title: string): string {
  return title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";
}
