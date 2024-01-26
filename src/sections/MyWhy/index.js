import Section from "@/components/Section";
import Image from "next/image";

export default function MyWhy() {
	return (
		<Section>
			<div id="Why" className="flex flex-col gap-10 justify-center lg:w-1/2">
				<div className="flex flex-col items-center gap-5 lg:items-start">
					<h1 className="font-belleza flex-wrap font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
						My Why
					</h1>
				</div>
				<div className="w-full">
					<p className="font-manjari text-xl text-center md:text-justify lg:text-2xl xl:text-3xl">
						I want to provide tailored and high-quality services to business
						owners and entrepreneurs while cultivating a genuine
						person-to-person connection so we can achieve the
						organization&apos;s goals. Their success is my success.
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
