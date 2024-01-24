import Section from "@/components/Section";
import Image from "next/image";

export default function AboutMe() {
	return (
		<Section>
			<div className="flex flex-col gap-10 items-center lg:w-1/2">
				<div className="flex flex-col items-center gap-5">
					<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex-wrap">
						About Me
					</h1>
					<h1>Hello</h1>
				</div>
				<div className="w-full">
					<p className="text-justify text-sm md md:text-md xl:text-lg">
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
					objectFit="cover"
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 relative"
				/>
			</div>
		</Section>
	);
}
