'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
	const router = useRouter();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<div>
			<h1 className='text-4xl font-bold text-center'>Payment Successfull</h1>
			<p className="text-center">Your payment has been successfully processed. Thank you for your payment.</p>
			<p className="text-center">Transaction ID: {searchParams.at(1)}</p>
			<p className="text-center">Redirecting to home page...</p>
		</div>
	);
}
