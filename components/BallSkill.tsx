import IconCloud from "./ui/icon-cloud"

const slugs = [
	"typescript",
	"javascript",
	"react",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"postgresql",
	"firebase",
	"nginx",
	"jest",
	"docker",
	"git",
	"github",
	"visualstudiocode",
	"figma",
	"arduino",
	"raspberrypi",
	"python",
	"mongodb",
	"laragon",
	"mysql",
]

export function BallSkill() {
	return (
		<div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-10 pb-10 mx-auto ">
			<IconCloud iconSlugs={slugs} />
		</div>
	)
}
