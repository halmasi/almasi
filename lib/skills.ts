export function levelCalc(level: number): {
  levels: string;
  progressBarPercent: string;
} {
  let levels;
  let progressBarPercent;
  switch (true) {
    case level <= 20:
      levels = "Beginner";
      progressBarPercent = "via-[20%] to-[20%]";
      break;
    case level <= 40:
      levels = "Advanced Beginner";
      progressBarPercent = "via-[40%] to-[40%]";
      break;
    case level <= 60:
      levels = "Competent";
      progressBarPercent = "via-[60%] to-[60%]";
      break;
    case level <= 80:
      levels = "Proficient";
      progressBarPercent = "via-[80%] to-[80%]";
      break;
    default:
      levels = "Expert";
      progressBarPercent = "via-[100%] to-[100%]";
  }
  return { levels, progressBarPercent };
}

export function iconNameGenerator(title: string): string {
  return title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";
}
