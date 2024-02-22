import {useNavigate} from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	function goToMenu() {
		navigate('/menu');
	}

	const images = [
		{image: '/OIG4.jpeg'},
		{image: '/imageRigth.jpeg'},
		{image: '/OIG2.er_9CnJYu8lLnV.jpeg'},
		{image: '/OIG3.jpeg'},
		{image: '/OIG3.jpeg'},
	];
	return (
		<>
			<div flex gap-30 w-full>
				<div lt-xl='wfull' w='3/5'>
					<div text-left>
						<h1 text='4xl' font='serif'>
							ReactBurger
						</h1>
						<p text='lg justify' font='semibold'>
							Welcome to ReactBurger, where innovation meets flavor! Step into our cozy eatery and embark on a culinary
							journey like no other. From our classic burgers to our most creative concoctions.
						</p>
					</div>

					<div flex gap5 mt10>
						<button className='text-lg p-3 w-40  bg-gradient-to-r from-yellow-500 to-yellow-600 border-none rounded-3xl transition-all duration-300 hover:(from-yellow-400 to-yellow-700) cursor-pointer'>
							Order now
						</button>
						<button
							onClick={goToMenu}
							className='bg-transparent w-40 rounded-3xl text-lg border-none text-yellow-400 hover:bg-stone-300/10 transition duration-300 ease-in-out cursor-pointer'
						>
							View Menu
						</button>
					</div>

					<div mt20 wfull>
						<div flex justify='between'>
							{images.map((item) => (
								<img
									key={0}
									src={item.image}
									lt-xl='h15 w15'
									className='h-40 w-40 rounded-2xl border border-solid border-1 border-white:20 hover:border-yellow-500 transition duration-300 ease-in-out'
								/>
							))}
						</div>
					</div>
				</div>
				<div className='w-1/3 invisible lg:visible flex justify-end'>
					<img src='/Untitled-1.jpg' alt='' className='h-full w-full object-contain' />
				</div>
			</div>
		</>
	);
}
