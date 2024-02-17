import {useNavigate} from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	function goToMenu() {
		navigate('/menu');
	}

	const classNameCard =
		'h-40 w-40 rounded-2xl border border-solid border-1 hover:border-orange-500 hover:scale-125 transition duration-300 ease-in-out';

	return (
		<>
			<div className='mx-40 grid grid-flow-col grid-cols-2 gap-30 pt-32'>
				<div className='mt-15'>
					<div className='text-left'>
						<h1 className='font-serif uppercase text-5xl'>the ultimate burger haven</h1>
						<p className='text-xl font-semibold'>
							Welcome to ReactBurger, where innovation meets flavor! Step into our cozy eatery and embark on a culinary
							journey like no other. From our classic burgers to our most creative concoctions, we are dedicated to
							tantalizing your taste buds with fresh ingredients and irresistible flavors.
						</p>
					</div>

					<div className='flex gap-20'>
						<button className='text-lg p-4 w-50 mt-10 bg-orange-500 border-orange-400 rounded-xl hover:text-yellow-400 hover:scale-105 transition duration-300 ease-in-out'>
							Order now
						</button>
						<button
							onClick={goToMenu}
							className='text-lg bg-transparent border-none mt-10 text-yellow-400 hover:text-orange-400/90 hover:scale-125 transition duration-300 ease-in-out'
						>
							View Menu
						</button>
					</div>

					<div className='mt-40'>
						<div className='flex gap-10'>
							<img src='/OIG4.jpeg' alt='' className={classNameCard} />
							<img src='/imageRigth.jpeg' alt='' className={classNameCard} />
							<img src='/OIG2.er_9CnJYu8lLnV.jpeg' alt='' className={classNameCard} />
							<img src='/OIG3.jpeg' alt='' className={classNameCard} />
							<img src='/OIG2.jpeg' alt='' className={classNameCard} />
						</div>
					</div>
				</div>
				<div className='flex justify-end'>
					<img src='/Untitled-1.jpg' alt='' className='h-210 w-200 object-contain' />
				</div>
			</div>
		</>
	);
}
