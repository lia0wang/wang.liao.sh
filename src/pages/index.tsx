import dynamic from 'next/dynamic';
// import { differenceInYears } from 'date-fns';
import { Icon } from '@iconify/react';

import { Animate, Button, Pill } from '~/components';
import { EventType, NavigationItemType } from '~/types';
import { Layout } from '~/layouts';

import type { EventProps } from '~/components/Event.component';
import type { NavigationItem } from '~/types';

const Event = dynamic<EventProps>(
	() => import('~/components/Event.component').then(({ Event }) => Event),
	{
		ssr: false,
	},
);

const ACTIONS: Array<NavigationItem> = [
	// {
	// 	type: NavigationItemType.LINK,
	// 	href: '/projects',
	// 	icon: <Icon className="mr-3" icon="feather:box" />,
	// 	text: 'Project',
	// },
	// {
	// 	type: NavigationItemType.LINK,
	// 	href: '/blog',
	// 	icon: <Icon className="mr-3" icon="feather:feather" />,
	// 	text: 'Blog',
	// },
	{
		type: NavigationItemType.LINK,
		external: true,
		href: 'https://wang.liao.sh/resume/leon_liao_23m2.pdf',
		icon: <Icon className="mr-3" icon="feather:paperclip" />,
		text: 'Resume',
	},
	// {
	// 	type: NavigationItemType.LINK,
	// 	href: '/timeline',
	// 	icon: <Icon className="mr-3" icon="feather:clock" />,
	// 	text: 'Timeline',
	// },
];

export default function HomePage(): JSX.Element {
	const today = new Date();
	const birthday = new Date('2000-03-26');
	// const age = differenceInYears(today, birthday);
	const isBirthday =
		today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();

	const description = `wang@liao.sh`;
	const copyRight = `CC BY-NC-SA 4.0 © 2022-2023 LIAO, Wang`;
	return (
		<Layout.Default>
			{isBirthday && <Event event={EventType.BIRTHDAY} />}
			<div
				className="min-h-screen flex items-center justify-center py-12"
				style={{
					overflow: 'hidden',
					overflowX: 'hidden',
					height: '100%',
				}}>
				<div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
					<Animate
						as="h1"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						// list the font family here: https://tailwindcss.com/docs/font-family
						className="font-mono light:text-blue-500 dark:text-blue-400 text-5xl sm:text-3xl md:text-5xl lg:text-8xl tracking-tight font-extrabold">
						LIAO, Wang
						<br />
						<Pill.Standard className="font-mono mt-4 sm:text-0.5xl md:text-1xl lg:text-2xl dark:text-blue-400">
							Developer
						</Pill.Standard>
					</Animate>

					<Animate
						as="p"
						animation={{
							opacity: [0, 1],
							scale: [0.75, 1],
						}}
						className="font-mono light:text-black dark:text-white max-w-xs mt-4 sm:mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-m md:text-l md:max-w-2xl"
						transition={{
							delay: 0.5,
						}}>
						{description}
					</Animate>

					<div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
						{ACTIONS.map((action, index) => {
							if (action.type !== NavigationItemType.LINK) return null;

							return (
								<Animate
									animation={{
										y: [50, 0],
										opacity: [0, 1],
									}}
									className="w-full sm:w-auto"
									key={index}
									transition={{
										delay: 0.1 * (index + 2) + 0.5,
									}}>
									<Button.Outline href={action.href}>
										{action.icon}
										<span>{action.text}</span>
									</Button.Outline>
								</Animate>
							);
						})}
					</div>
					<footer
						className="font-mono light:text-black dark:text-white flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4"
						style={{
							position: 'absolute',
							bottom: '0',
							width: '100%',
							left: '0',
						}}>
						<Animate
							animation={{
								opacity: [0, 1],
								scale: [0.75, 1],
							}}
							className="font-mono light:text-black dark:text-white max-w-xs mt-4 sm:mt-4 md:mt-8 mx-auto text-base text-gray-400 sm:text-m md:text-l md:max-w-2xl"
							transition={{
								delay: 0.5,
							}}>
							<p
								style={{
									fontSize: '0.6rem',
								}}>
								{copyRight}
							</p>
						</Animate>
					</footer>
				</div>
			</div>
		</Layout.Default>
	);
}
