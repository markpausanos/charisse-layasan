export default function Section({ children }) {
	return (
		<div className="px-16 py-[15vh] flex flex-col justify-evenly gap-10 md:px-40 lg:px-42 lg:flex-row lg:h-[85vh] lg:min-h-[100vh] xl:px-60 xl:gap-20">
			{children}
		</div>
	);
}
