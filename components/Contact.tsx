import React from "react"
import ContainerLabelInput from "./fragments/ContainerLabelInput"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import ShinyButton from "./ui/shiny-button"
import { SocialBeam } from "./SocialBeam"
import { BorderBeam } from "./ui/border-beam"
import Wrapper from "./Wrapper"
import ContainerSection from "./ContainerSection"
import Particles from "./ui/particles"

const Contact = () => {
	return (
		<section id="contact" className="relative px-4 xl:px-0 py-24">
			<h2 className="text-3xl lg:text-5xl font-kanit font-bold text-center mb-10">
				Contact
			</h2>
			<div className="flex flex-col lg:items-center lg:flex-row relative bg-white/5 p-5 lg:p-10 backdrop-blur-md rounded-md gap-24 lg:gap-10">
				<div className="w-full lg:w-1/2">
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
							<Textarea id="Message" placeholder="Type your message here." />
						</ContainerLabelInput>
						<ShinyButton className="self-center">Send Message</ShinyButton>
					</form>
				</div>
				<div className="w-full lg:w-1/2 relative space-y-5 lg:space-y-0">
					<SocialBeam className="mx-auto px-4 pb-4 lg:px-0 lg:pb-0 lg:min-w-96 lg:min-h-80" />
					{/* <div className="w-full relative border lg:hidden">
						<div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
						<div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
						<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
						<div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
					</div> */}
				</div>
				<BorderBeam size={250} duration={12} delay={9} className="rounded-md" />
			</div>
		</section>
	)
}

const ContactMe = () => {
	return (
		<Wrapper>
			<ContainerSection>
				<Contact />
			</ContainerSection>
			<Particles
				className="absolute inset-0"
				quantity={200}
				ease={80}
				color={"ffffff"}
				refresh
			/>
		</Wrapper>
	)
}

export default ContactMe
