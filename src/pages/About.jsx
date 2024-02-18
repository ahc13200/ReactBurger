import {Icon} from '@iconify/react';

export default function About() {
	const classNameButton =
		'border-transparent text-xl p3 rounded-2xl bg-stone-300/10 hover:bg-stone-300/20 cursor-pointer';
	return (
		<div className='pt-32 mx-40'>
			<div className='grid grid-cols-2'>
				<div className='mt-15 text-2xl text-justify'>
					<h1>About us</h1>
					<p>
						Our story began with a simple idea: to reinvent the classic burger using technology and creativity as our
						main ingredients. Inspired by the versatility and power of ReactJS, one of the most innovative JavaScript
						libraries, we brought our unique concept to life. Thus, ReactBurger was born, where a passion for food meets
						technological innovation.
					</p>
					<p>
						At ReactBurger, we not only strive to offer you exceptional burgers, but we also care about providing you
						with a complete and memorable experience. From the moment you walk through our doors to the last bite of
						your burger, we are committed to providing you with outstanding service and a welcoming atmosphere that
						makes you feel right at home.
					</p>
					<div className='mt30'>
						<h1>Contact us</h1>
						<div className='grid grid-cols-3 gap-5'>
							<button className={classNameButton}>
								<div className='flex gap-4 justify-center'>
									<Icon icon='logos:telegram' height={30} />
									<p className='mt-auto mb-0'>@amandaHdez</p>
								</div>
							</button>
							<button className={classNameButton}>
								<div className='flex gap-4 justify-center'>
									<Icon icon='skill-icons:gmail-dark' height={30} />
									<p className='mt-auto mb-0'>ahc13200@gmail.com</p>
								</div>
							</button>
							<button className={classNameButton}>
								<div className='flex gap-4 justify-center'>
									<Icon icon='skill-icons:github-dark' height={30} />
									<p className='mt-auto mb-0'>ahc13200</p>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className='flex justify-end'>
					<img src='/Untitled-1.jpg' alt='' className='h-200 w-190 object-contain' />
				</div>
			</div>
		</div>
	);
}
