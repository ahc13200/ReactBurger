import {useNavigate} from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	function goToMenu() {
		navigate('/menu');
	}

	const classNameCard =
		'h-40 w-40 rounded-2xl border border-solid border-1 hover:border-yellow-500 hover:scale-120 transition duration-300 ease-in-out';

	return (
		<>
			<div className='mx-40 grid grid-cols-2 pt-32'>
				<div className='mt-15'>
					<div className='text-left'>
						<h1 className='font-serif uppercase text-5xl'>the ultimate burger haven</h1>
						<p className='text-2xl font-semibold text-justify'>
							Welcome to ReactBurger, where innovation meets flavor! Step into our cozy eatery and embark on a culinary
							journey like no other. From our classic burgers to our most creative concoctions, we are dedicated to
							tantalizing your taste buds with fresh ingredients and irresistible flavors.
						</p>
					</div>

					<div className='flex gap-5'>
						<button className='text-xl p-4 w-50 mt-10 bg-gradient-to-r from-yellow-500 to-yellow-600 border-none rounded-3xl hover:scale-110 transition duration-300 ease-in-out'>
							Order now
						</button>
						<button
							onClick={goToMenu}
							className='bg-transparent w-40 rounded-3xl text-xl border-none mt-10 text-yellow-400 hover:bg-stone-300/10 transition duration-300 ease-in-out cursor-pointer'
						>
							View Menu
						</button>
					</div>

					<div className='mt-40'>
						<div className='flex gap-8'>
							<img src='/OIG4.jpeg' alt='' className={classNameCard} />
							<img src='/imageRigth.jpeg' alt='' className={classNameCard} />
							<img src='/OIG2.er_9CnJYu8lLnV.jpeg' alt='' className={classNameCard} />
							<img src='/OIG3.jpeg' alt='' className={classNameCard} />
							<img src='/OIG2.jpeg' alt='' className={classNameCard} />
						</div>
					</div>
				</div>
				<div className='flex justify-end'>
					<img src='/Untitled-1.jpg' alt='' className='h-200 w-190 object-contain' />
				</div>
			</div>
		</>
	);
}
