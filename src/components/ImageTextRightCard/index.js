import Image from "next/image";

export default function ImageTextRightCard({ className }) {
	return (
		<div
			className={`flex flex-col pt-[5vh] gap-10 items-center w-full min-h-[30vh] lg:flex-row lg:items-start lg:gap-5 ${className}`}
		>
			<div className="relative min-h-[20vh] w-full lg:w-1/2 lg:h-auto">
				<Image
					src="/title/title_image_0.jpg"
					fill
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 relative object-cover"
				/>
			</div>
			<div>
				<h1 className="font-manjari text-3xl md:text-4xl lg:text-5xl xl:text-6x">
					Hello World
				</h1>
			</div>
		</div>
	);
}
