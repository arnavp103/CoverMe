import Link from "next/link";
import { Button } from "../Button";
import Image from "next/image";
export default function Footer() {
	const sitedirectory = [
		{
			title: "About",
			links: [
				{
					name: "About Us",
					link: "#",
				},
				{
					name: "Contact Us",
					link: "#",
				},
				{
					name: "FAQ",
					link: "#",
				},
			],
		},
		{
			title: "Legal",
			links: [
				{
					name: "Privacy Policy",
					link: "#",
				},
				{
					name: "Terms of Service",
					link: "#",
				},
				{
					name: "Cookie Policy",
					link: "#",
				},
			],
		},
		{
			title: "Social",
			links: [
				{
					name: "Facebook",
					link: "#",
				},
				{
					name: "X (Twitter)",
					link: "#",
				},
				{
					name: "Instagram",
					link: "#",
				},
			],
		},
		{
			title: "Support",
			links: [
				{
					name: "Help Center",
					link: "#",
				},
				{
					name: "Report a Bug",
					link: "#",
				},
				{
					name: "Suggest a Feature",
					link: "#",
				},
			],
		},
	];
	return (
		<footer className="absolute grid w-full grid-rows-6 border-2 bg-white px-6 py-5 md:h-96 md:grid-cols-6 md:grid-rows-1 md:gap-16 md:px-16">
			<div className="flex h-full flex-col justify-between">
				<div>
					<div className="flex">
						<Image
							src="/CoverMe.png"
							alt="CoverMe logo"
							width="30"
							height="30"
							className="mr-2 justify-center"
						/>
						<h1 className="text-xl font-semibold">CoverMe</h1>
					</div>
					<hr className="my-4" />
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
				<br className="my-4" />
				<div>
					<p className=" text-gray-600 ">
						Want to keep up with the latest updates and disruptions
						in the hiring industry?
					</p>
					<Button className="mt-4 w-full">Subscribe</Button>
				</div>

				<p className="text-gray-400">
					&copy; 2023 CoverMe. All rights reserved.
				</p>
			</div>
			<br />
			{sitedirectory.map(({ title, links }) => (
				<section key={title}>
					<h1 className="font-bold">{title}</h1>
					<br />
					<ul className="space-y-2">
						{links.map(({ name, link }) => (
							<li key={name}>
								<Link href={link}>{name}</Link>
							</li>
						))}
					</ul>
				</section>
			))}
		</footer>
	);
}
