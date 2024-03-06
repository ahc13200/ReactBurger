import CartItem from './CartItem';

export default function Cart({checkout}) {
	const products = [
		{
			id: 1,
			name: 'Burger Mixt',
			price: 300,
		},
		{
			id: 2,
			name: 'Fanta',
			price: 100,
		},
		{
			id: 3,
			name: 'Lays',
			price: 200,
		},
		{
			id: 4,
			name: 'Jamon Burger',
			price: 500,
		},
	];

	if (products.length === 0)
		return (
			<div className='flex justify-center hfull'>
				<h2 className='flex items-center'>No hay productos en su carro!!</h2>
			</div>
		);

	return (
		<>
			<div className='mt6 grid gap2 mb5'>
				{products.map((product) => {
					return (
						<div key={product.id}>
							<CartItem product={product} />
						</div>
					);
				})}
			</div>
			<div className='mt-auto flex items-center justify-between'>
				<span className='text-xl'>Total: $600</span>
				<div className='flex gap3'>
					<button
						onClick={checkout}
						className='border-none bg-gradient-to-r from-yellow-500 to-yellow-600 text-lg rounded-3xl p1 w30 cursor-pointer hover:(from-yellow-400 to-yellow-700) transition-all duration-300'
					>
						Checkout
					</button>
				</div>
			</div>
		</>
	);
}
