import {useImperativeHandle} from 'react';
import {useRef} from 'react';
import {forwardRef} from 'react';
import {createPortal} from 'react-dom';

const ModalCart = forwardRef(function Modal({name}, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog id='modal' ref={dialog}>
			<h2>{name}</h2>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ModalCart;
