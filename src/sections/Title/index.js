import Section from "@/components/Section";
import Image from "next/image";

export default function Title() {
	return (
		<Section className="lg:px-[5vw] xl:px-[5vw]">
			<div id="Home" className="relative h-[50vh] lg:w-1/2 lg:h-auto">
				<Image
					src="/title/title_image_0.jpg"
					fill
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 items-center object-cover"
				/>
			</div>

			<div className="flex flex-col text-center justify-center gap-3 lg:w-1/2">
				<h1 className="font-belleza font-bold text-nowrap text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
					Charisse Layasan
				</h1>
				<h2 className="font-manjari text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					Virtual Assistant
				</h2>
				<h2 className="font-manjari pt-5 text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
					Your success is my success
				</h2>
			</div>
		</Section>
	);
}
