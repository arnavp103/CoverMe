export default function Footer() {
	return (
		<div className="absolute w-full py-5 text-center">
			<p className="text-gray-500">
				A project by{" "}
				<a
					className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
					href="https://github.com/arnavp103"
					target="_blank"
					rel="noopener noreferrer"
				>
					Arnav Priyadarshi
				</a>
				,{" "}
				<a
					className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
					href="https://github.com/fanericcw"
					target="_blank"
					rel="noopener noreferrer"
				>
					Eric Fan
				</a>
				, and{" "}
				<a
					className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
					href="https://github.com/isLenk"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lance Talban
				</a>
			</p>
		</div>
	);
}
