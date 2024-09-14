import Image from "next/image";
import React from "react";

interface Props {
	title: string;
	level: number;
	image: string;
}

export default function Skill({ title, level, image }: Props) {
	let levels;
	let progressBarPercent;
	switch (true) {
		case level <= 20:
			levels = "Novice";
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

	const bgUrl =
		title.replace(/\s/g, "").split(".").join("").toLowerCase() + ".png";

	return (
		<>
			<div
				className={`md:hidden skills-bg flex flex-row flex-grow border-2 rounded-lg w-full min-h-36 md:aspect-square justify-between bg-neutral-800`}
			>
				<Image
					src={"/icons/" + bgUrl}
					alt={title}
					width={100}
					height={0}
					className='object-cover w-1/3'
				></Image>
				<div className='w-full flex flex-col justify-between'>
					<h2 className='font-bold text-black text-xl text-center justify-start bg-white bg-opacity-50'>
						{title}
					</h2>
					<div className='w-full flex flex-col justify-end'>
						<p className='text-gray-800 text-center leading-tight pb-5 bg-white bg-opacity-50'>
							{levels}
						</p>
						<div className='w-full bg-gray-400 h-5 rounded-b-lg'>
							<div
								className={`${progressBarPercent} bg-red-700 h-5 ${
									level == 100 ? "rounded-b-lg" : undefined
								} `}
							></div>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{ "--image-url": `url(/icons/${bgUrl})` }}
				className={`hidden skills-bg md:flex flex-col flex-grow border-2 rounded-lg w-full min-h-36 md:aspect-square justify-between md:bg-[image:var(--image-url)] md:bg-cover`}
			>
				<h2 className='font-bold text-black text-xl text-center justify-start bg-white bg-opacity-50'>
					{title}
				</h2>
				<div className='w-full flex flex-col justify-end'>
					<p className='text-gray-800 text-center leading-tight pb-5 bg-white bg-opacity-50'>
						{levels}
					</p>
					<div className='w-full bg-gray-400 h-5 rounded-b-lg'>
						<div
							className={`${progressBarPercent} bg-red-700 h-5 ${
								level == 100 ? "rounded-b-lg" : "rounded-bl-lg"
							} `}
						></div>
					</div>
				</div>
			</div>
		</>
	);
}
