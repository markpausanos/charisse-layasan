import ImageTextUnderCard from "@/components/ImageTextUnderCard";
import Section from "@/components/Section";

export default function ToolsIUse() {
	return (
		<Section className="lg:px-[10vw] xl:px-[10vw]">
			<div id="Tools" className="flex flex-col gap-10 w-full">
				<div className="font-belleza text-center flex-wrap font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					<h1>Some Tools I Use</h1>
				</div>
				<div className="flex flex-col w-full gap-16 lg:flex-row">
					<div className="flex flex-wrap flex-col lg:flex-row lg:w-3/4">
						<ImageTextUnderCard className={"lg:w-1/3"} />
						<ImageTextUnderCard className={"lg:w-1/3"} />
						<ImageTextUnderCard className={"lg:w-1/3"} />
						<ImageTextUnderCard className={"lg:w-1/3"} />
						<ImageTextUnderCard className={"lg:w-1/3"} />
						<ImageTextUnderCard className={"lg:w-1/3"} />
					</div>
					<div className="flex items-center lg:w-1/4 lg:my-[10vh]">
						<h1 className="font-manjari text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
							WILLING TO LEARN OTHER TOOLS YOU NEED FOR YOUR BUSINESS
						</h1>
					</div>
				</div>
			</div>
		</Section>
	);
}
