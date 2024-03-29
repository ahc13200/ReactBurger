import {useNavigate} from 'react-router-dom';
import ModalCart from '../components/Cart/Modal';
import {useRef} from 'react';

export default function Home() {
	const navigate = useNavigate();

	function goToMenu() {
		navigate('/menu');
	}

	const modal = useRef();

	function handleOpenCart() {
		modal.current.open();
	}

	const images = [
		{id: 0, image: 'menu/OIG4.jpeg'},
		{id: 1, image: 'menu/imageRigth.jpeg'},
		{id: 2, image: 'menu/OIG2.er_9CnJYu8lLnV.jpeg'},
		{id: 3, image: 'menu/OIG3.jpeg'},
		{id: 4, image: 'menu/OIG2.jpeg'},
	];
	return (
		<>
			<ModalCart ref={modal} id='cart' />
			<div flex gap-20 w-full>
				<div lt-xl='wfull' w='3/5'>
					<div text-left>
						<h1 text='4xl' font='serif'>
							ReactBurger
						</h1>
						<p text='md:md xl:lg justify' font='semibold'>
							Welcome to ReactBurger, where innovation meets flavor! Step into our cozy eatery and embark on a culinary
							journey like no other. From our classic burgers to our most creative concoctions.
						</p>
					</div>

					<div flex gap5 mt10>
						<button
							onClick={handleOpenCart}
							lt-md='p2 text-[1rem] w35'
							className='text-lg p-3 w-40  bg-gradient-to-r from-yellow-500 to-yellow-600 border-none rounded-3xl transition-all duration-300 hover:(from-yellow-400 to-yellow-700) cursor-pointer'
						>
							Order now
						</button>
						<button
							lt-md='text-[1rem] w35'
							onClick={goToMenu}
							className='bg-transparent w-40 rounded-3xl text-lg border-none text-yellow-400 hover:bg-stone-300/10 transition duration-300 ease-in-out cursor-pointer'
						>
							View Menu
						</button>
					</div>

					<div lt-md:mt20 mt35 wfull>
						<div flex justify='between'>
							{images.map((item) => (
								<img
									key={item.id}
									src={item.image}
									lt-xl='h17 w17'
									className='h-40 w-40 rounded-2xl border border-solid border-1 border-white:20 hover:border-yellow-500 transition duration-300 ease-in-out'
								/>
							))}
						</div>
					</div>
				</div>
				<div lt-xl='hidden' className='w-1/3 flex justify-end'>
					<img src='/hambur.png' alt='' className='h-150 w-full object-contain' />
				</div>
			</div>
		</>
	);
}
