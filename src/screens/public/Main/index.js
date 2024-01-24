import NavBar from "@/components/NavBar";
import AboutMe from "@/sections/AboutMe";
import Title from "@/sections/Title";
import React from "react";

export default function Main() {
	return (
		<div>
			<NavBar />

			<div className="snap-mandatory snap-y">
				<div className="snap-center">
					<Title />
				</div>
				<div className="snap-center">
					<AboutMe />
				</div>
			</div>
		</div>
	);
}
