import NavBar from "@/components/NavBar";
import AboutMe from "@/sections/AboutMe";
import Title from "@/sections/Title";
import React from "react";

export default function Main() {
	return (
		<div className="h-screen w-screen lg:overflow-y-scroll lg:scroll-smooth lg:snap-mandatory lg:snap-y">
			<NavBar />
			<Title />
			<AboutMe />
		</div>
	);
}
