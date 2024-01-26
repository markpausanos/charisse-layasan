import Image from "next/image";

export default function ImageTextUnderCard({ className }) {
	return (
		<div
			className={`flex flex-col pt-[5vh] gap-10 items-center w-full min-h-[30vh] lg:items-start lg:gap-5 lg:px-[3vw] ${className}`}
		>
			<div className="relative min-h-[20vh] w-full lg:h-auto">
				<Image
					src="/title/title_image_0.jpg"
					fill
					alt="Charisse Layasan"
					className="rounded-md shadow-xl shadow-slate-500 relative object-cover"
				/>
			</div>
			<div className="w-full">
				<h1 className="font-manjari text-center text-3xl md:text-4xl lg:text-5xl xl:text-6x">
					Hello World
				</h1>
			</div>
		</div>
	);
}
