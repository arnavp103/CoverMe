import { FC } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import WorkInput from "@/components/WorkInput";
const Page: FC = async ({}) => {
	const session = await getServerSession(authOptions);

	return (
		<div className="z-10 flex h-full w-3/5 flex-col justify-center gap-8">
			<h1 className="font-serif text-2xl">
				Welcome back {`${session?.user?.name}`}
			</h1>
			<div className="flex flex-col items-center justify-center ">
				<p className="m-4">
					In order for our users to have a superior experience, the
					system can be personalized to your needs with additional
					information about you. In order to opt-in these benefits
					please paste in some professional information about
					yourself, such as copy-pasting in your resumé or CV.
				</p>
				<WorkInput />
			</div>
		</div>
	);
};

export default Page;
