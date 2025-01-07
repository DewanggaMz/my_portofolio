import React from "react"
import { BallSkill } from "./BallSkill"
import { RainbowButton } from "./ui/rainbow-button"
import AnimatedShinyText from "./ui/animated-shiny-text"
import { BorderBeam } from "./ui/border-beam"
import Ripple from "./ui/ripple"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import {
	boardDevelopment,
	proggramingLanguages,
	skills,
	tectStack,
} from "@/data/data"

const Skils = () => {
	return (
		<section id="skills" className="relative px-6 xl:px-0 pt-5 pb-20">
			<h2 className="text-3xl lg:text-5xl font-kanit font-bold text-center mb-10">
				Skils
			</h2>
			<BallSkill />
			<Ripple />
			<div className="w-full min-h-80 flex flex-col items-center relative bg-white/5 p-5 lg:p-10 backdrop-blur-md rounded-md gap-10 lg:gap-10">
				{skills.map((skill) => (
					<div className="flex flex-col items-center" key={skill.title}>
						<AnimatedShinyText className="inline-flex items-center justify-center py-1 transition ease-out">
							<span className="capitalize">{skill.title}</span>
						</AnimatedShinyText>
						<div className="flex flex-wrap justify-center gap-2">
							{skill.stack.map((stack) => (
								<Tooltip key={stack.title}>
									<TooltipTrigger asChild>
										<Image
											src={stack.image}
											alt={stack.title}
											className="w-14 h-14 md:w-16 md:h-16 hover:scale-125 transition duration-300 ease-out"
											width={100}
											height={100}
										/>
									</TooltipTrigger>
									<TooltipContent>
										<p className="capitalize">{stack.title}</p>
									</TooltipContent>
								</Tooltip>
							))}
						</div>
					</div>
				))}

				<BorderBeam size={250} duration={12} delay={9} className="rounded-md" />
			</div>
			{/* <RainbowButton>Show more</RainbowButton> */}
		</section>
	)
}

export default Skils
