"use client"
import React, { useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Lines = () => {
	const refEl = useRef<SVGPathElement>(null)

	useEffect(() => {
		if (refEl.current) {
			const pathLength = refEl.current?.getTotalLength()
			console.log(pathLength)
			gsap.fromTo(
				refEl.current,
				{ strokeDasharray: `${pathLength}`, strokeDashoffset: `${pathLength}` },
				{
					strokeDashoffset: "0",
					scrollTrigger: {
						trigger: refEl.current,
						start: "top center",
						end: "bottom center",
						scrub: 1,
					},
				}
			)
		}
	}, [])

	return (
		<div className="relative px-6">
			<svg
				className="max-w-[872px] max-h-[1200px] w-full h-full  mx-auto"
				viewBox="0 0 870 1011"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M431.543 1C431.543 1 445 209.489 420.5 269.997C396 330.505 64.3189 350.109 9.38988 243.936C-45.5392 137.763 944.648 158.27 863.238 269.997C781.828 381.724 147.195 345.629 9.38988 428.219C-90.9261 488.34 863.238 602.002 863.238 488.34C863.239 374.677 9.38988 553.684 9.38988 669.281C9.38988 784.879 863.238 569.166 863.238 724.5C863.238 840.716 431.543 644.612 431.543 808.442C431.543 888.045 431.543 1011 431.543 1011"
					stroke="#ffffff20"
					stroke-width="2"
				/>
				<path
					ref={refEl}
					d="M431.543 1C431.543 1 445 209.489 420.5 269.997C396 330.505 64.3189 350.109 9.38988 243.936C-45.5392 137.763 944.648 158.27 863.238 269.997C781.828 381.724 147.195 345.629 9.38988 428.219C-90.9261 488.34 863.238 602.002 863.238 488.34C863.239 374.677 9.38988 553.684 9.38988 669.281C9.38988 784.879 863.238 569.166 863.238 724.5C863.238 840.716 431.543 644.612 431.543 808.442C431.543 888.045 431.543 1011 431.543 1011"
					stroke="#0ad664"
					stroke-width="5"
				/>
				<ellipse cx="433" cy="11" rx="47" ry="11" fill="#0ad664" />
			</svg>
		</div>
	)
}

export default Lines
