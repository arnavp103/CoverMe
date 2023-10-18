import { NextRequest, NextResponse } from "next/server";
import { JobDetails } from "@/app/jobs/page";

// get the things we need from the user for what jobs we should be searching for
export interface JobSearch {}

export async function POST(req: NextRequest) {
	const body: JobSearch = await req.json();
}

interface AdzunaJobListing {
	id: string;

	longitude: number;
	salary_is_predicted: string;
	description: string;
	redirect_url: string;
	category: {
		label: string;
		tag: string;
	};
	adref: string;
	company: { display_name: string };
	title: string;
	location: {
		area: Array<string>;
		display_name: string;
	};
}

export async function GET(req: NextRequest, res: NextResponse) {
	const response: Array<AdzunaJobListing> = {
		count: 305473,
		mean: 89893.26,
		results: [
			{
				longitude: -73.26151,
				salary_is_predicted: "0",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				redirect_url:
					"https://www.adzuna.ca/land/ad/4370205393?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=B3BB899314FE6F25E06CD6211B94E8AA4BA7C292",
				category: {
					label: "Accounting & Finance Jobs",
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
				},
				created: "2023-10-13T20:13:53Z",
				latitude: 45.49767,
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM3MDIwNTM5MyIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.6HKBpUATKerVTSv81Cra18cGlLU2wDckaoLEN3j0Dag",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				title: "French Bilingual Tax Professional \u2013 Canada Remote",
				id: "4370205393",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Mont\u00e9r\u00e9gie",
						"Rouville",
						"Saint-Mathias-sur-Richelieu",
					],
					display_name: "Saint-Mathias-sur-Richelieu, Rouville",
				},
			},
			{
				created: "2023-10-13T08:07:19Z",
				title: "Work From Home Tax Expert \u2013 Canada",
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM2OTMzMzM1MSIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.fH8gBYxu7bww-iqIgB88q3UTu2JlswL_fSAGLiCBG2k",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				latitude: 45.53468,
				location: {
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Montr\u00e9al",
						"Outremont",
					],
					display_name: "Outremont, Montr\u00e9al",
					__CLASS__: "Adzuna::API::Response::Location",
				},
				id: "4369333351",
				salary_is_predicted: "0",
				longitude: -73.59355,
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				category: {
					label: "Accounting & Finance Jobs",
					__CLASS__: "Adzuna::API::Response::Category",
					tag: "accounting-finance-jobs",
				},
				redirect_url:
					"https://www.adzuna.ca/land/ad/4369333351?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=1726DFBFCBF7960DA7E7815911FD9E18BB2693E8",
			},
			{
				created: "2023-10-13T20:13:53Z",
				latitude: 46.11585,
				company: {
					__CLASS__: "Adzuna::API::Response::Company",
					display_name: "Intuit",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM3MDIwNTI5MyIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.pXZOTRRttUhRJ2HIHROp7p6miV2LnigqFZvJrL4F_74",
				title: "French Bilingual Accountant \u2013 Canada Remote",
				location: {
					display_name: "Saint-Georges, Beauce-Sartigan",
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Chaudi\u00e8re - Appalaches",
						"Beauce-Sartigan",
						"Saint-Georges",
					],
					__CLASS__: "Adzuna::API::Response::Location",
				},
				id: "4370205293",
				longitude: -70.67281,
				salary_is_predicted: "0",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				category: {
					label: "Accounting & Finance Jobs",
					__CLASS__: "Adzuna::API::Response::Category",
					tag: "accounting-finance-jobs",
				},
				redirect_url:
					"https://www.adzuna.ca/land/ad/4370205293?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=BA88A688A094F0AB5C6363AF90BDC06C420E4B25",
			},
			{
				latitude: 45.45744,
				title: "Work From Home Tax Professional \u2013 Canada",
				company: {
					__CLASS__: "Adzuna::API::Response::Company",
					display_name: "Intuit",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDMyNjE3NTU4OSIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.D-5EXm3znVYmFVqsKFYN3qUdjJFnl8LPF8b0MY7aILM",
				id: "4326175589",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					display_name: "Verdun, Montr\u00e9al",
					area: ["Canada", "Qu\u00e9bec", "Montr\u00e9al", "Verdun"],
				},
				created: "2023-09-21T16:11:32Z",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				redirect_url:
					"https://www.adzuna.ca/land/ad/4326175589?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=2B4A06FEDA64C26E9EFA9AB86A1708179A1067BE",
				category: {
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
					label: "Accounting & Finance Jobs",
				},
				longitude: -73.5697,
				salary_is_predicted: "0",
			},
			{
				created: "2023-10-13T20:13:53Z",
				id: "4370205349",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Montr\u00e9al",
						"Outremont",
					],
					display_name: "Outremont, Montr\u00e9al",
				},
				title: "French Bilingual Tax Advisor",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM3MDIwNTM0OSIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.Ns8Qr9qUxPOuUwllQOQlxu-vYaiR6VnH6xt9tBxyKyA",
				latitude: 45.53468,
				salary_is_predicted: "0",
				longitude: -73.59355,
				__CLASS__: "Adzuna::API::Response::Job",
				category: {
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
					label: "Accounting & Finance Jobs",
				},
				redirect_url:
					"https://www.adzuna.ca/land/ad/4370205349?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=0B81864935BAF842C40B40C0EB8E1F02BE21076B",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
			},
			{
				longitude: -66.06062,
				salary_is_predicted: "0",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				redirect_url:
					"https://www.adzuna.ca/land/ad/4370205625?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=3C447F759B7EA5EDCEDA562524F57345D45F4B74",
				category: {
					label: "Accounting & Finance Jobs",
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
				},
				created: "2023-10-13T20:13:55Z",
				latitude: 45.28161,
				title: "French Bilingual Tax Advisor",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJzIjoieWcyRW15OXI3aEdQUWJndDN2N3l1USIsImkiOiI0MzcwMjA1NjI1In0.YJpphCEcDvoUO3-VLch0genpY4ke8L6enD-vxIzeu8U",
				location: {
					display_name: "Saint John, Saint John region",
					area: [
						"Canada",
						"New Brunswick",
						"Saint John region",
						"Saint John",
					],
					__CLASS__: "Adzuna::API::Response::Location",
				},
				id: "4370205625",
			},
			{
				longitude: -75.69497,
				salary_is_predicted: "0",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				category: {
					label: "Accounting & Finance Jobs",
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
				},
				__CLASS__: "Adzuna::API::Response::Job",
				redirect_url:
					"https://www.adzuna.ca/land/ad/4316014805?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=05AD5E34605B9740D6FA7287DBDADAF16D04F629",
				created: "2023-09-15T16:41:10Z",
				latitude: 45.3931,
				title: "Remote Tax Advisor \u2013 Canada",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJzIjoieWcyRW15OXI3aEdQUWJndDN2N3l1USIsImkiOiI0MzE2MDE0ODA1In0.K9pnt5SGMi-1hYc0dc0EISKX55tKJcRwJpE0Vi5tiEQ",
				id: "4316014805",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					display_name: "Carleton University, Ottawa",
					area: [
						"Canada",
						"Ontario",
						"Ottawa region",
						"Ottawa",
						"Carleton University",
					],
				},
			},
			{
				created: "2023-09-15T16:41:10Z",
				company: {
					__CLASS__: "Adzuna::API::Response::Company",
					display_name: "Intuit",
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDMxNjAxNDgzOSIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.ez9bhAq9Aht2-v1P2FyBC3baItRMjEoUfrYFXzCTuCQ",
				title: "Tax Professional \u2013 Canada Remote",
				latitude: 45.48726,
				id: "4316014839",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Montr\u00e9al",
						"Pierrefonds",
					],
					display_name: "Pierrefonds, Montr\u00e9al",
				},
				salary_is_predicted: "0",
				longitude: -73.84908,
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				__CLASS__: "Adzuna::API::Response::Job",
				category: {
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
					label: "Accounting & Finance Jobs",
				},
				redirect_url:
					"https://www.adzuna.ca/land/ad/4316014839?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=92FB9D9245C6DA360861EFE4ECFD2C558DC20CEA",
			},
			{
				created: "2023-10-13T20:13:54Z",
				location: {
					area: [
						"Canada",
						"Qu\u00e9bec",
						"Abitibi - T\u00e9miscamingue",
						"Vall\u00e9e-de-l'Or",
						"Val-d'Or",
					],
					display_name: "Val-d'Or, Vall\u00e9e-de-l'Or",
					__CLASS__: "Adzuna::API::Response::Location",
				},
				id: "4370205502",
				title: "French Bilingual Accountant \u2013 Canada Remote",
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM3MDIwNTUwMiIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.-Ph3518SvDWzQUpy3dSTsrG762MIH7uPBUI2QtEL3LA",
				company: {
					__CLASS__: "Adzuna::API::Response::Company",
					display_name: "Intuit",
				},
				latitude: 48.09821,
				salary_is_predicted: "0",
				longitude: -77.78611,
				category: {
					__CLASS__: "Adzuna::API::Response::Category",
					tag: "accounting-finance-jobs",
					label: "Accounting & Finance Jobs",
				},
				__CLASS__: "Adzuna::API::Response::Job",
				redirect_url:
					"https://www.adzuna.ca/land/ad/4370205502?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=1303CCF07704AAA24F85E8783CB3595A005B5864",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
			},
			{
				salary_is_predicted: "0",
				longitude: -119.44309,
				__CLASS__: "Adzuna::API::Response::Job",
				category: {
					label: "Accounting & Finance Jobs",
					tag: "accounting-finance-jobs",
					__CLASS__: "Adzuna::API::Response::Category",
				},
				redirect_url:
					"https://www.adzuna.ca/land/ad/4326175533?se=yg2Emy9r7hGPQbgt3v7yuQ&utm_medium=api&utm_source=a9e8411e&v=29A514E22680AD17AD9585789E9870B58204944B",
				description:
					"Overview Ready for a new seasonal opportunity with the 1 tax software company in Canada? If you have experience as a tax professional, are highly motivated and have excellent communication skills, we need you to help our customers complete their taxes using Intuit TurboTax products. You will advance our goal of \u201cPowering Prosperity Around the World\u201d by providing expert guidance and support to our customers. You will also play an important role in our effort to enhance our brand by delighting ou\u2026",
				created: "2023-09-21T16:11:31Z",
				id: "4326175533",
				location: {
					__CLASS__: "Adzuna::API::Response::Location",
					display_name: "Kelowna, Central Okanagan",
					area: [
						"Canada",
						"British Columbia",
						"Central Okanagan",
						"Kelowna",
					],
				},
				adref: "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDMyNjE3NTUzMyIsInMiOiJ5ZzJFbXk5cjdoR1BRYmd0M3Y3eXVRIn0.fFkCHDfjvQY2vH1qEsUcedp1gqc34gD8fHeiMelgFjY",
				company: {
					display_name: "Intuit",
					__CLASS__: "Adzuna::API::Response::Company",
				},
				title: "Tax Expert - Work From Home - Canada",
				latitude: 49.88258,
			},
		],
		__CLASS__: "Adzuna::API::Response::JobSearchResults",
	}.results;

	const formattedResults: Array<JobDetails> = response.map(
		({ id, title, company, location, redirect_url }) => ({
			id,
			title,
			company: company.display_name,
			location: location.display_name,
			link: redirect_url,
		}),
	);

	return formattedResults;
}
