"use client"
import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollProgressProps {
	className?: string
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
	const { scrollYProgress } = useScroll()

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 100,
		restDelta: 0.001,
	})

	return (
		<motion.div
			className={cn(
				"fixed inset-x-0 top-0 z-[1000] h-[2px] origin-left bg-gradient-to-r from-[#ffffff] via-[#28cdff] to-[#0ad664]",
				className
			)}
			style={{
				scaleX,
			}}
		/>
	)
}
