import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'lia0wang.com';
	const description = "official website of LIAO, Wang";

	return {
		title,
		description,
		canonical: `https://lia0wang.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'lia0wang',
			url: `https://lia0wang.com/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://lia0wang.com/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@lia0wang',
			site: '@lia0wang',
		},
		...props,
	};
}
