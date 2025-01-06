"use client"
import React from "react"
import ShineBorder from "./ui/shine-border"
import Image from "next/image"
import HyperText from "./ui/hyper-text"
import { Separator } from "./ui/separator"
import TextStroke from "./ui/TextStroke"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
	const aboutRef = React.useRef<HTMLDivElement>(null)
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: aboutRef.current,
				markers: false,
				start: "top 80%",
				end: "top 60%",
				scrub: 2,
			},
		})

		tl.from(aboutRef.current, {
			opacity: 0,
			duration: 1,
		})

		tl.from("#about h2", {
			y: 70,
			scale: 0,
			opacity: 0,
			duration: 0.8,
		})

		tl.from("#about .me", {
			x: -80,
			scale: 0.5,
			opacity: 0,
			duration: 0.5,
		})

		tl.from("#about .content", {
			x: 80,
			opacity: 0,
			duration: 0.5,
		})
	})

	return (
		<section
			id="about"
			className="relative pt-28 pb-5 px-4 lg:px-10"
			ref={aboutRef}
		>
			<h2 className="text-3xl lg:text-5xl font-kanit font-bold text-center mb-10">
				About Me
			</h2>
			<TextStroke title="About Me" />
			<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start m-auto lg:gap-10">
				<div className=" w-full lg:w-1/3 me">
					<ShineBorder
						className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-4 mx-auto"
						color={["#0ad664", "#A07CFE", "#0ad664"]}
					>
						<Image
							width={400}
							height={725}
							className="filter grayscale transition-all duration-300 ease-in-out hover:grayscale-0 rounded-sm"
							quality={100}
							objectFit="cover"
							src={"/asset/about.jpeg"}
							alt="a"
						/>
					</ShineBorder>
				</div>

				<div className="w-full md:w-2/3 space-y-4 content">
					<HyperText className="text-3xl font-bold text-black dark:text-white hidden lg:block">
						Mohammad Dewangga AlmahfuZhillah
					</HyperText>
					<h2 className="text-2xl font-bold text-black dark:text-white block lg:hidden text-center">
						Mohammad Dewangga Almahfuzhillah
					</h2>
					<div className="flex h-5 items-center space-x-4 text-sm !mb-6 tracking-wider font-kanit justify-center lg:justify-start">
						<p>Fullstack Developer</p>
						<Separator orientation="vertical" />
						<div>Entrepreneur</div>
					</div>
					<p className="text-justify font-kanit tracking-wide lg:tracking-normal">
						Hi! I’m dewangga, a self-taught programmer with a passion for
						solving problems and building innovative solutions. My journey in
						programming started out of curiosity, and over the years, I’ve honed
						my skills through countless hours of practice, exploration, and
						hands-on projects.
						<br />
						<br />
						I specialize in web development and IoT systems, bridging the gap
						between software and hardware to create meaningful, impactful
						solutions. From writing clean, efficient code to designing systems
						that improve everyday life, I’m always eager to take on new
						challenges and grow as a developer.
						<br />
						<br />I believe that technology is a powerful tool for solving
						real-world problems, fostering connections, and improving lives.
						Every challenge presents an opportunity to learn, adapt, and refine
						my skills to deliver the best results.
						<br />
						<br />I am excited about the future of technology and look forward
						to leveraging my skills to create value and drive success in the
						projects I take on. I am committed to delivering results that align
						with business objectives while continuously evolving in this
						ever-changing field.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
