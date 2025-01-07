"use client"
import React from "react"
import AnimatedGridPattern from "./ui/animated-grid-pattern"
import { Spotlight } from "./ui/spotlight"
import { cn } from "@/lib/utils"
import BlurIn from "./ui/blur-in"
import WordFadeIn from "./ui/word-fade-in"
import { RainbowButton } from "./ui/rainbow-button"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Icons } from "@/data/icons"

const Hero = () => {
	return (
		<div className="relative overflow-hidden bg-black-100 max-h-screen">
			<AnimatePresence>
				<section id="home" className="max-w-7xl w-full mx-auto">
					<AnimatedGridPattern
						width={36}
						height={36}
						numSquares={50}
						maxOpacity={0.1}
						duration={3}
						className={cn(
							"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
							"md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
							"xl:[mask-image:radial-gradient(1100px_circle_at_center,white,transparent)]",
							"inset-x-0 inset-y-[-30%] h-[200%] "
						)}
					/>
					<Spotlight
						className="-top-50 left-0 md:left-60 md:-top-20"
						fill="#0ad664"
					/>
					<Spotlight
						className="-top-40 left-30 md:left-10 md:-top-50 lg:w-[70%]"
						fill="blue"
						opacity="0.22"
					/>
					<div className="flex items-center justify-center min-h-screen px-4">
						<div className="lg:max-w-[60vw] text-center flex justify-center items-center flex-col gap-2">
							<BlurIn
								word="Hi, I'm Dewangga"
								className="text-sm font-semibold uppercase font-kanit dark:text-green-100"
							/>
							<BlurIn
								word="Welcome to my portofolio"
								className="text-sm font-semibold uppercase font-kanit dark:text-green-100"
							/>
							<div className="md:max-w-[78%] xl:max-w-[68%] flex flex-col">
								<WordFadeIn words="Developing for the web optimizing for the world" />
							</div>
							<motion.div
								initial={{ opacity: 0, y: 0 }}
								animate={{ opacity: 1, y: 10 }}
								transition={{ duration: 1.3, delay: 1.3 }}
							>
								<Link href={"https://github.com/DewanggaMz"} target="_blank">
									<RainbowButton>
										<Icons.github fill="#fff" className="h-5 w-5 mr-3" />
										Github
									</RainbowButton>
								</Link>
							</motion.div>
						</div>
					</div>
				</section>
			</AnimatePresence>
		</div>
	)
}

export default Hero
