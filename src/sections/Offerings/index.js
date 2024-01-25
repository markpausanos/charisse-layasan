import ImageTextCard from "@/components/ImageTextCard";
import Section from "@/components/Section";

export default function Offerings() {
	return (
		<Section className="lg:px-[10vw] xl:px-[10vw]">
			<div id="Offerings" className="flex flex-col gap-10 w-full">
				<div className="font-belleza text-center flex-wrap font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					<h1>Services I Offer</h1>
				</div>
				<div className="flex flex-wrap flex-col lg:flex-row">
					<ImageTextCard className={"lg:w-1/3"} />
					<ImageTextCard className={"lg:w-1/3"} />
					<ImageTextCard className={"lg:w-1/3"} />
					<ImageTextCard className={"lg:w-1/3"} />
					<ImageTextCard className={"lg:w-1/3"} />
					<ImageTextCard className={"lg:w-1/3"} />
				</div>
			</div>
		</Section>
	);
}
