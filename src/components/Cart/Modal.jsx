import {useImperativeHandle} from 'react';
import {useRef} from 'react';
import {forwardRef} from 'react';
import {createPortal} from 'react-dom';

const ModalCart = forwardRef(function Modal(ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.showModal();
			},
		};
	});

	return createPortal(
		<dialog id='modal' ref={dialog}>
			<h2>Amanda</h2>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ModalCart;
