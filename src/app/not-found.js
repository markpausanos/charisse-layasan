import React from "react";

import PageNotFound from "@/screens/public/PageNotFound";

export const metadata = {
	title: "404 Page Not Found",
};

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<PageNotFound />
		</div>
	);
}
