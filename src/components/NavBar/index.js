import ThemeButton from "../ThemeButton";

import Link from "next/link";

function NavBarLink({ children, id }) {
	return (
		<Link href={id}>
			<h1 className="font-manjari cursor-pointer text-sm md:text-md lg:text-lg xl:text-xl font-bold hover:text-slate-500 transition duration-300 ease-in-out">
				{children}
			</h1>
		</Link>
	);
}

export default function NavBar() {
	return (
		<div className="w-screen z-10 opacity-100 bg-white dark:bg-black lg:fixed">
			<div className="px-5 py-5 flex flex-col justify-between items-center gap-5 md:px-10 md:flex-row lg:px-15">
				<div>
					<a href="/">
						<h1 className="font-belleza text-2xl mx-2 font-bold">
							Charisse Layasan
						</h1>
					</a>
				</div>
				<div className="flex justify-center items-center gap-5 flex-wrap lg:gap-10 lg:justify-between">
					<NavBarLink id="#Home">Home</NavBarLink>
					<NavBarLink id="#About">About Me</NavBarLink>
					<NavBarLink id="#Why">My Why</NavBarLink>
					<NavBarLink id="#Offerings">Services</NavBarLink>

					<ThemeButton />
				</div>
			</div>
		</div>
	);
}
