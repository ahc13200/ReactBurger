import {useContext, useEffect, useRef, useState} from 'react';
import Input from './InputsUser';
import {CartContext} from '../../store/useCartStore';
import {createFetch} from '../../hooks/useListFetch';
import toast from 'react-hot-toast';

export default function UserData({back, close}) {
	const className = 'md:m20 rounded-3xl z-300 bg-[#333] text-white p2';
	const style = {borderRadius: '30px', background: '#333', color: '#fff'};

	const {state, deleteStorage} = useContext(CartContext);
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
				if (status === 200) {
					toast.success('Order created successfully!!', {
						style: style,
						className: className,
						duration: 3000,
					});
				} else
					toast.error('An error occurred while creating the order!!', {
						duration: 4000,
						className: className,
						style: style,
					});
				setSendRequest(false);
			}
		}
		createInvice();
	}, [sendRequest, invoice]);

	function handleSaveInvoice() {
		const enteredName = name.current.value;
		const enteredEmail = email.current.value;
		const enteredAddress = address.current.value;

		if (enteredName.trim() === '' || enteredEmail.trim() === '')
			toast.error('You should not leave any field empty.', {
				duration: 3000,
				className: className,
				style: style,
			});
		else {
			setInvoice({
				user: {
					name: enteredName,
					email: enteredEmail,
					address: enteredAddress,
				},
				order: productsList,
				total: state.total,
			});

			setSendRequest(true);
			deleteStorage();
			setTimeout(() => {
				close();
			}, 900);
		}
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
				<span lt-md='text-[1.1rem]' className='text-xl'>
					Total: ${state.total}
				</span>
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
