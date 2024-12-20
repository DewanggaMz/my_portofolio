import React from "react"

const Footer = () => {
	return (
		<footer className="w-full h-44 flex items-center justify-center bg-[#101e3b] border-t border-green-100 mt-10">
			<p className="text-sm font-semibold text-green-100">
				© {new Date().getFullYear()} Dewangga. All rights reserved.
			</p>
		</footer>
	)
}

export default Footer
