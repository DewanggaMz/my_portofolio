import About from "@/components/About"
import { SocialBeam } from "@/components/SocialBeam"
import Footer from "@/components/Footer"
import ContainerLabelInput from "@/components/fragments/ContainerLabelInput"
import Hero from "@/components/Hero"
import { Marquees } from "@/components/Marquee"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Project"
import { BorderBeam } from "@/components/ui/border-beam"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Particles from "@/components/ui/particles"
import ScrollProgress from "@/components/ui/scroll-progress"
import ShinyButton from "@/components/ui/shiny-button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
	return (
		<main className="relative bg-black-100">
			<ScrollProgress className="top-0" />
			<Navbar />
			<Hero />
			<div className="relative overflow-hidden">
				<div className="max-w-7xl w-full mx-auto">
					<About />
					<Projects />
					<Marquees />
				</div>
			</div>
			<div className="relative overflow-hidden">
				<div className="max-w-7xl w-full mx-auto">
					<section className="relative px-4 xl:px-0 py-24">
						<h2 className="text-5xl font-kanit font-bold text-center mb-10">
							Contact
						</h2>
						<div className="flex flex-col lg:items-center lg:flex-row relative bg-white/5 p-5 lg:p-10 backdrop-blur-md rounded-md gap-24 lg:gap-10">
							<div className="w-full lg:w-1/2">
								{/* <h3 className="text-3xl font-bold mb-5">Message Me</h3> */}
								<form action="" className="flex flex-col space-y-4">
									<div className="flex gap-4">
										<ContainerLabelInput>
											<Label htmlFor="firstname">FirstName *</Label>
											<Input id="firstname" placeholder="FirstName" />
										</ContainerLabelInput>
										<ContainerLabelInput>
											<Label htmlFor="lastname">LastName</Label>
											<Input id="lastname" placeholder="LastName" />
										</ContainerLabelInput>
									</div>
									<ContainerLabelInput>
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="Email" />
									</ContainerLabelInput>
									<ContainerLabelInput>
										<Label htmlFor="Message">Message</Label>
										<Textarea
											id="Message"
											placeholder="Type your message here."
										/>
									</ContainerLabelInput>
									<ShinyButton className="self-center">
										Send Message
									</ShinyButton>
								</form>
							</div>
							<div className="w-full lg:w-1/2 relative space-y-5 lg:space-y-0">
								<SocialBeam className="mx-auto lg:min-w-96 lg:min-h-80" />
								<div className="w-full relative border lg:hidden">
									<div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
									<div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
									<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
									<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
								</div>
							</div>
							<BorderBeam
								size={250}
								duration={12}
								delay={9}
								className="rounded-md"
							/>
						</div>
					</section>
				</div>
				<Particles
					className="absolute inset-0"
					quantity={200}
					ease={80}
					color={"ffffff"}
					refresh
				/>
			</div>
			<Footer />
		</main>
	)
}
