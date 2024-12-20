"use client"

import React, { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./ui/animated-beam"
import { Icons } from "@/data/icons"
import Link from "next/link"
import { socials } from "@/data/data"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode; href?: string }
>(({ className, children, href }, ref) => {
	return (
		<Link href={`${href}`} target="_blank">
			<div
				ref={ref}
				className={cn(
					"flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
					className
				)}
			>
				{children}
			</div>
		</Link>
	)
})

Circle.displayName = "Circle"

export function SocialBeam({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null)
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const div3Ref = useRef<HTMLDivElement>(null)
	const div4Ref = useRef<HTMLDivElement>(null)
	const div6Ref = useRef<HTMLDivElement>(null)

	const refList = [div1Ref, div2Ref, div3Ref, div4Ref, div6Ref]
	const icon: { [key: string]: JSX.Element } = {
		github: <Icons.github />,
		gmail: <Icons.gmail />,
		discord: <Icons.discord />,
		instagram: <Icons.instagram />,
	}

	return (
		<TooltipProvider>
			<div
				className={cn(
					"relative flex w-full lg:w-1/2 items-center justify-center overflow-hidden rounded-lg  ",
					className
				)}
				ref={containerRef}
			>
				<div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
					<div className="flex flex-col justify-center gap-8">
						{socials.map((social, i) => (
							<Tooltip key={i}>
								<TooltipTrigger className="z-10">
									<Circle ref={refList[i]} href={social.href}>
										{icon[social.icon]}
									</Circle>
								</TooltipTrigger>
								<TooltipContent>{social.name}</TooltipContent>
							</Tooltip>
						))}
					</div>
					<div className="flex flex-col justify-center">
						<Tooltip>
							<TooltipTrigger className="z-10">
								<Circle ref={div6Ref} className="size-16" href="/">
									<Icons.user />
								</Circle>
							</TooltipTrigger>
							<TooltipContent>Dewangga</TooltipContent>
						</Tooltip>
					</div>
				</div>
				{socials.map((social, i) => (
					<AnimatedBeam
						containerRef={containerRef}
						fromRef={refList[i]}
						toRef={div6Ref}
						startYOffset={-4}
					/>
				))}
			</div>
		</TooltipProvider>
	)
}
