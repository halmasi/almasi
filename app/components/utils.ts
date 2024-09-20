export function levelCalc(level: number): {
	levels: string;
	progressBarPercent: string;
} {
	let levels;
	let progressBarPercent;
	switch (true) {
		case level <= 20:
			levels = "Beginner";
			progressBarPercent = "w-[20%]";
			break;
		case level <= 40:
			levels = "Advanced Beginner";
			progressBarPercent = "w-[40%]";
			break;
		case level <= 60:
			levels = "Competent";
			progressBarPercent = "w-[60%]";
			break;
		case level <= 80:
			levels = "Proficient";
			progressBarPercent = "w-[80%]";
			break;
		default:
			levels = "Expert";
			progressBarPercent = "w-[100%]";
	}
	return { levels, progressBarPercent };
}

export function iconNameGenerator(title: string): string {
	const result =
		title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";
	return result;
}
