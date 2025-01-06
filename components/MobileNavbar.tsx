import { navigation } from "@/data/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

const MobileNavbar = () => {
	return (
		<nav
			className={cn(
				"fixed top-0 left-0 justify-between items-center px-14 py-4 w-full z-50 will-change-scroll flex md:hidden"
			)}
		>
			<Link href="/" className="font-bold text-xl">
				Dewangga
			</Link>
			<div>ksjkj</div>
		</nav>
	)
}

export default MobileNavbar
