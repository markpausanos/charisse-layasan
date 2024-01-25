import Image from "next/image";

export default function ImageTextCard({ className }) {
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
			<div className="font-manjari">
				<h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">
					Hello World
				</h1>
			</div>
		</div>
	);
}
