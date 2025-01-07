import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="relative overflow-hidden">{children}</div>
}

export default Wrapper
