import {Icon} from '@iconify/react';
import {useImperativeHandle, useRef, forwardRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Cart from './Cart';
import UserData from './UserData';

const ModalCart = forwardRef(function Modal({id}, ref) {
	const dialog = useRef();
	const [contentModal, setContentModal] = useState(<Cart checkout={goToCheckout} />);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	function goToCheckout() {
		setContentModal(<UserData back={back} />);
	}

	function closeModal() {
		dialog.current.close();
		setContentModal(<Cart checkout={goToCheckout} />);
	}

	function back() {
		setContentModal(<Cart checkout={goToCheckout} />);
	}

	return createPortal(
		<dialog
			ref={dialog}
			id={id}
			lt-md='h2/3 wfull my-30 p3 pt3 pb4'
			p='t4 b4 5'
			className='modal outline-none rounded-3xl border border-solid border-1 border-white:20 h-1/2 w-1/3'
		>
			<div className='flex flex-col hfull'>
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

				{contentModal}
			</div>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ModalCart;
