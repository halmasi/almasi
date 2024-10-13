export function levelCalc(level: number): {
  levels: string;
  progressBarPercent: string;
} {
  let levels;
  let progressBarPercent;
  switch (true) {
    case level <= 20:
      levels = "Beginner";
      progressBarPercent =
        "absolute w-[105%] bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] via-[20%] to-[20%] aspect-square -z-10 rounded-full";
      break;
    case level <= 40:
      levels = "Advanced Beginner";
      progressBarPercent =
        "absolute w-[105%] bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] via-[40%] to-[40%] aspect-square -z-10 rounded-full";
      break;
    case level <= 60:
      levels = "Competent";
      progressBarPercent =
        "absolute w-[105%] bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] via-[60%] to-[60%] aspect-square -z-10 rounded-full";
      break;
    case level <= 80:
      levels = "Proficient";
      progressBarPercent =
        "absolute w-[105%] bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] via-[80%] to-[80%] aspect-square -z-10 rounded-full";
      break;
    default:
      levels = "Expert";
      progressBarPercent =
        "absolute w-[105%] bg-gradient-conic from-red-800 via-red-600 to-gray-300 from-[1%] via-[100%] to-[100%] aspect-square -z-10 rounded-full";
  }
  return { levels, progressBarPercent };
}

export function iconNameGenerator(title: string): string {
  return title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";
}
