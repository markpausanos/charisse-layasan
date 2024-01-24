import Section from "@/components/Section";
import Image from "next/image";

export default function Title() {
	return (
		<Section>
			<div className="relative h-[50vh] lg:w-1/2 lg:h-auto">
				<Image
					src="/title/title_image_0.jpg"
					fill
					objectFit="cover"
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 items-center"
				/>
			</div>

			<div className="flex flex-col text-center justify-center gap-3 lg:w-1/2">
				<h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
					Charisse Layasan
				</h1>
				<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					Virtual Assistant
				</h2>
				<h2 className="pt-5 text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
					Your success is my success
				</h2>
			</div>
		</Section>
	);
}
