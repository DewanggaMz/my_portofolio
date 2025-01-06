import About from "@/components/About"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { Marquees } from "@/components/Marquee"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Project"
import ScrollProgress from "@/components/ui/scroll-progress"
import ContactMe from "@/components/Contact"
import ContainerSection from "@/components/ContainerSection"
import Skills from "@/components/Skills"
import Lines from "@/components/Lines"
import { TooltipProvider } from "@/components/ui/tooltip"
import MobileNavbar from "@/components/MobileNavbar"

export default function Home() {
	return (
		<main className="relative bg-black-100 overflow-hidden">
			<TooltipProvider>
				<ScrollProgress className="top-0" />
				{/* <MobileNavbar /> */}
				<Navbar />
				<Hero />
				<ContainerSection>
					<About />
					<Lines />
					<Skills />
					<Projects />
					<Marquees />
				</ContainerSection>
				<ContactMe />
				<Footer />
			</TooltipProvider>
		</main>
	)
}
