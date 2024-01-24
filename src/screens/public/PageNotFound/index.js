import "tailwindcss/tailwind.css";

const PageNotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-6xl font-bold">404</h1>
			<p className="text-2xl">Page not found</p>
		</div>
	);
};

export default PageNotFound;
