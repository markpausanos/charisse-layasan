export default function Section({ children, className }) {
	return (
		<div
			className={`snap-start snap-always py-[7vh] px-16 flex flex-col justify-evenly gap-10 md:px-40 lg:px-42 lg:flex-row lg:h-[85vh] lg:py-[15vh] lg:min-h-[100vh] xl:px-60 xl:gap-20 ${className}`}
		>
			{children}
		</div>
	);
}
