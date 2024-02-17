import CardMenu from '../components/Menu/CardMenu';

export default function Menu() {
	return (
		<div className='mx-40 pt-32'>
			<div className='mt-15 grid grid-cols-1 md:grid-cols-5 gap-7 break-words'>
				<CardMenu name='Burger Mixt' price={300} image='/OIG4.jpeg' />
				<CardMenu name='McDonalds' price={1000} image='/OIG3.jpeg' />
				<CardMenu name='Combo Mixt' price={1500} image='/OIG2.er_9CnJYu8lLnV.jpeg' />
				<CardMenu name='Big Burger' price={850} image='/OIG2.jpeg' />
				<CardMenu name='Jamon Burger' price={500} image='/imageRigth.jpeg' />
				<CardMenu name='Jamon Burger' price={500} image='/imageRigth.jpeg' />
			</div>
		</div>
	);
}
