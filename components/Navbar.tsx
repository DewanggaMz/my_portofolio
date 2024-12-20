"use client"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true)
			} else {
				setScrolling(false)
			}
		}
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<motion.nav
			initial={{
				backgroundColor: "rgba(255, 255, 255, 0)",
				backdropFilter: "blur(0px)",
			}}
			animate={{
				backgroundColor: scrolling
					? "rgba(255, 255, 255, 0.05)"
					: "rgba(255, 255, 255, 0)",
				backdropFilter: scrolling ? "blur(10px)" : "blur(0px)",
			}}
			transition={{ duration: 0.3 }}
			className={cn(
				"fixed top-0 left-0 flex justify-between px-14 py-4 w-full z-50 will-change-scroll"
			)}
		>
			<span>Dewangga</span>
			<motion.ul className="flex gap-4 font-medium text-sm">
				<li>
					<Link href="#Home" className="text-green-100">
						Home
					</Link>
				</li>
				<li>
					<Link href="#About">About</Link>
				</li>
				<li>
					<Link href="#Skils">Skils</Link>
				</li>
				<li>
					<Link href="#Projects">Projects</Link>
				</li>
				<li>
					<Link href="#Contact">Contact</Link>
				</li>
			</motion.ul>
		</motion.nav>
	)
}

export default Navbar
