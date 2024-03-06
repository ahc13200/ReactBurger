import CardItem from './CardItem';

export default function Cart({checkout}) {
	return (
		<>
			<div className='mt6 grid gap2 mb5'>
				<CardItem name='Burger Mixt' price={300} />
				<CardItem name='Jamon Burger' price={400} />
				<CardItem name='Fanta' price={200} />
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
