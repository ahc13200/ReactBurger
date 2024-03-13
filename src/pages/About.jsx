import {Icon} from '@iconify/react';

export default function About() {
	const contacts = [
		{id: 0, icon: <Icon icon='logos:telegram' height={30} />, contact: 'amandaHdez', link: 'https://t.me/amandaHdez'},
		{
			id: 1,
			icon: <Icon icon='skill-icons:gmail-dark' height={30} />,
			contact: 'ahc13200@gmail.com',
			link: 'mailto:ahc13200@gmail.com',
		},
		{
			id: 2,
			icon: <Icon icon='skill-icons:github-dark' height={30} />,
			contact: 'ReactBurger',
			link: 'https://github.com/ahc13200/ReactBurger',
		},
	];
	const classNameButton =
		'no-underline text-white border-transparent text-lg p3 rounded-2xl bg-stone-300/10 hover:bg-stone-300/20 cursor-pointer transition-all duration-300';
	return (
		<div>
			<div flex lt-xl='gap0' gap-30 w-full>
				<div lt-xl='wfull' w='3/5' text-lg>
					<h1>About us</h1>
					<p>
						Our story began with a simple idea: to reinvent the classic burger using technology and creativity as our
						main ingredients. Inspired by the versatility and power of ReactJS, one of the most innovative JavaScript
						libraries, we brought our unique concept to life.
					</p>
					<p lt-xl='hidden'>
						At ReactBurger, we not only strive to offer you exceptional burgers, but we also care about providing you
						with a complete and memorable experience. From the moment you walk through our doors to the last bite of
						your burger, we are committed to providing you with outstanding service and a welcoming atmosphere that
						makes you feel right at home.
					</p>
					<div className='mt30'>
						<h1>Contact us</h1>
						<div className='grid grid-cols-3 gap-5'>
							{contacts.map((item) => {
								return (
									<a href={item.link} key={item.id} className={classNameButton}>
										<div className='flex gap-4 justify-center'>
											{item.icon}
											<p lt-md='hidden' className='mt-auto mb-0'>
												{item.contact}
											</p>
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</div>
				<div lt-xl='hidden' className='w-1/3 flex justify-end'>
					<img src='/hambur.png' alt='' className='h-150 w-full object-contain' />
				</div>
			</div>
		</div>
	);
}
