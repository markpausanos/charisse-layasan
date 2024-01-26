import NavBar from "@/components/NavBar";
import AboutMe from "@/sections/AboutMe";
import MyWhy from "@/sections/MyWhy";
import Offerings from "@/sections/Offerings";
import Title from "@/sections/Title";
import ToolsIUse from "@/sections/ToolsIUse";
import React from "react";

export default function Main() {
	return (
		<div className="h-screen w-screen lg:overflow-y-scroll lg:scroll-smooth lg:snap-mandatory lg:snap-y">
			<NavBar />
			<Title />
			<AboutMe />
			<MyWhy />
			<Offerings />
			<ToolsIUse />
		</div>
	);
}
