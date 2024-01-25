import Section from "@/components/Section";
import Image from "next/image";

export default function AboutMe() {
	return (
		<Section>
			<div id="About" className="flex flex-col gap-10 justify-center lg:w-1/2">
				<div className="flex flex-col items-center gap-5 lg:items-start">
					<h1 className="font-belleza flex-wrap font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
						About Me
					</h1>
				</div>
				<div className="w-full">
					<p className="font-manjari text-justify text-xl md:text-xl lg:text-2xl xl:text-3xl">
						I&apos;m that type of kid in school you want to be in a group with
						because having me in your team makes the group a sure success. And
						yes, I was almost always the leader. If you count that as
						experience, then I have over five years of experience in effective
						planning, organizing, managing resources, and communicating. Plus my
						written and verbal communication are excellent. I think it&apos;s
						about time I charge for doing things I&apos;m good at, don&apos;t
						you think so?
					</p>
				</div>
			</div>
			<div className="relative h-[50vh] lg:w-1/2 lg:h-auto">
				<Image
					src="/title/title_image_0.jpg"
					fill
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 relative object-cover"
				/>
			</div>
		</Section>
	);
}
