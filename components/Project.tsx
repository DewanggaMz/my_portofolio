"use client"
import React from "react"
import { HoverEffect } from "./ui/card-hover-effect"
import { projects } from "@/data/data"
import TextStroke from "./ui/TextStroke"

const Projects = () => {
	return (
		<section id="skils" className="relative px-4">
			<h2 className="text-5xl font-kanit font-bold text-center mb-10">
				Projects
			</h2>
			<TextStroke title="Projects" />
			<div className="">
				<HoverEffect items={projects} />
			</div>
		</section>
	)
}

export default Projects
