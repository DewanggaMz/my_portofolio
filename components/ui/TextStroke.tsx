"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const TextStroke = ({ title }: { title: string }) => {
	const { scrollY } = useScroll()
	const x = useTransform(scrollY, [0, 2400], [-100, 300])
	return (
		<motion.h2
			style={{ x }}
			className="absolute z-[-1] text-[100px] top-[-30px] left-[-190px] lg:text-[200px] lg:top-[-130px] lg:left-[-100px] font-kanit font-bold text-center text-red-400 text-stroke select-none"
		>
			{title}
		</motion.h2>
	)
}

export default TextStroke
