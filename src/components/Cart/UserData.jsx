import {useContext, useEffect, useRef, useState} from 'react';
import Input from './InputsUser';
import {CartContext} from '../../store/useCartStore';
import {createFetch} from '../../hooks/useListFetch';

export default function UserData({back}) {
	const {state} = useContext(CartContext);
	const productsList = state.cart_products;
	const name = useRef();
	const email = useRef();
	const address = useRef();
	const [invoice, setInvoice] = useState(null);
	const [sendRequest, setSendRequest] = useState(false);

	useEffect(() => {
		async function createInvice() {
			if (sendRequest) {
				const status = await createFetch('invoice', invoice);
				if (status === 200) alert('Invoice was send');
				else alert('Error');
				setSendRequest(false);
			}
		}
		createInvice();
	}, [sendRequest, invoice]);

	function handleSaveInvoice() {
		setInvoice({
			user: {
				name: name.current.value,
				email: email.current.value,
				address: address.current.value,
			},
			order: productsList,
			total: state.total,
		});
		setSendRequest(true);
	}

	return (
		<>
			<div className='mt-5'>
				<div className='grid md:grid-cols-2 gap5'>
					<div className='grid gap3'>
						<Input label='Name' ref={name} />
					</div>
					<div className='grid gap3'>
						<Input label='Email' ref={email} />
					</div>
				</div>

				<div className='mt5 grid gap3 col-span-2'>
					<Input label='Address' textarea ref={address} />
				</div>
			</div>
			<div className='mt-auto flex items-center justify-between'>
				<span className='text-xl'>Total: ${state.total}</span>
				<div className='flex gap3'>
					<button
						onClick={back}
						className='bg-transparent border-none text-lg hover:bg-white:10 p1 rounded-3xl transition-all duration-300 text-yellow-400 w-30 cursor-pointer'
					>
						Back
					</button>
					<button
						onClick={handleSaveInvoice}
						className='border-none bg-gradient-to-r from-yellow-500 to-yellow-600 text-lg rounded-3xl w30 cursor-pointer hover:(from-yellow-400 to-yellow-700) transition-all duration-300'
					>
						Save
					</button>
				</div>
			</div>
		</>
	);
}
