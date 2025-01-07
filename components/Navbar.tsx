"use client"
import { cn } from "@/lib/utils"
import React, { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { navigation } from "@/data/data"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Button } from "./ui/button"

gsap.registerPlugin(ScrollToPlugin)

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

	const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault()
		gsap.to(window, {
			duration: 0.8,
			scrollTo: { y: id, offsetY: 60 },
			ease: "power2.out",
			immediateRender: true,
		})
	}

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
				"fixed top-0 left-0 justify-between items-center px-14 py-4 w-full z-50 will-change-scroll flex"
			)}
		>
			<Link href="/" className="font-bold text-xl">
				Dewangga
			</Link>
			<motion.ul className="gap-4 font-semibold text-sm hidden md:flex">
				{navigation.map((item) => (
					<motion.li
						key={item.name}
						initial={{
							transform: "scale(1)",
							color: "rgba(255, 255, 255, 1)",
						}}
						whileHover={{
							transform: "scale(1.1)",
							color: "#0ad664",
						}}
						transition={{ duration: 0.3 }}
					>
						<Link href={item.href} onClick={(e) => scrollTo(e, item.href)}>
							{item.name}
						</Link>
					</motion.li>
				))}
			</motion.ul>
			<Button className="block md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
					/>
				</svg>
			</Button>
		</motion.nav>
	)
}

export default Navbar
