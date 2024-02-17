export default function ItemHeader({children}) {
	return (
		<li className=' hover:text-yellow-400 hover:scale-125 hover:cursor-pointer transition duration-300 ease-in-out'>
			{children}
		</li>
	);
}
