import ThemeButton from "../ThemeButton";

function NavBarLink({ children }) {
	return (
		<h1 className="cursor-pointer text-sm md:text-md lg:text-lg xl:text-xl font-bold hover:text-slate-500 transition duration-300 ease-in-out">
			{children}
		</h1>
	);
}

export default function NavBar() {
	return (
		<div className="fixed w-screen z-10 opacity-100  bg-white">
			<div className="px-5 py-5 flex flex-col justify-between items-center gap-5 md:px-10 md:flex-row lg:px-15">
				<div>
					<a href="/">
						<h1 className="text-2xl mx-2 font-bold">Charisse Layasan</h1>
					</a>
				</div>
				<div className="flex justify-between items-center gap-10">
					<NavBarLink>Navbar</NavBarLink>
					<NavBarLink>Navbar</NavBarLink>
					<NavBarLink>Navbar</NavBarLink>
					<NavBarLink>Navbar</NavBarLink>
					<NavBarLink>Navbar</NavBarLink>

					<ThemeButton />
				</div>
			</div>
		</div>
	);
}
