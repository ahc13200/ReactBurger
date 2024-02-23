import {Icon} from '@iconify/react';
import {useImperativeHandle, useRef, forwardRef} from 'react';
import {createPortal} from 'react-dom';
import CardItem from './CardItem';

const ModalCart = forwardRef(function Modal({id}, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	function closeModal() {
		dialog.current.close();
	}

	return createPortal(
		<dialog
			ref={dialog}
			id={id}
			lt-md='h2/3 w2/3 my-30 p6 pt0'
			p='t4 b3 5'
			className='modal flex-col rounded-3xl border border-solid border-1 border-white:20 h-1/2 w-1/3'
		>
			<header>
				<div className='flex justify-between items-center'>
					<span font='bold' text='2xl yellow-400'>
						My Cart
					</span>
					<div onClick={closeModal}>
						<Icon
							icon='ion:close'
							className='flex justify-center text-xl items-center rounded-full p3 bg-white:10 hover:text-yellow-400 cursor-pointer'
						/>
					</div>
				</div>
			</header>

			<div className='mt5 grid gap2 mb5'>
				<CardItem name='Burger Mixt' price={300} />
				<CardItem name='Jamon Burger' price={400} />
				<CardItem name='Fanta' price={200} />
			</div>

			<div className='mt-auto flex items-center justify-between'>
				<span className='text-2xl'>Total: $600</span>
				<div className='flex gap3'>
					<button
						onClick={closeModal}
						lt-md='hidden'
						className='bg-transparent border-none text-lg hover:bg-white:10 p1 rounded-3xl transition-all duration-300 text-yellow-400 w-30 cursor-pointer'
					>
						Close
					</button>
					<button className='border-none bg-gradient-to-r from-yellow-500 to-yellow-600 text-lg rounded-3xl w30 cursor-pointer hover:(from-yellow-400 to-yellow-700) transition-all duration-300'>
						Checkout
					</button>
				</div>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ModalCart;
