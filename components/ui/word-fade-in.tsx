"use client"

import { motion, Variants } from "framer-motion"

import { cn } from "@/lib/utils"

interface WordFadeInProps {
	words: string
	className?: string
	delay?: number
	variants?: Variants
}

export default function WordFadeIn({
	words,
	delay = 0.15,
	variants = {
		hidden: { opacity: 0 },
		visible: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: i * delay },
		}),
	},
	className,
}: WordFadeInProps) {
	const _words = words.split(" ")

	return (
		<motion.h1
			variants={variants}
			initial="hidden"
			animate="visible"
			className={cn(
				"font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl xl:text-7xl md:leading-[5rem] xl:leading-[1.2em]",
				className
			)}
		>
			{_words.map((word, i) => (
				<motion.span
					key={word}
					variants={variants}
					custom={i}
					className={i === _words.length - 1 ? "text-green-100" : ""}
				>
					{word}{" "}
				</motion.span>
			))}
		</motion.h1>
	)
}
