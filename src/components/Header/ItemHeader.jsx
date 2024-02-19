export default function ItemHeader({children}) {
	return (
		<li className=' rounded-xl p-3 hover:text-yellow-400 hover:bg-stone-300/20 hover:cursor-pointer transition-all duration-400'>
			{children}
		</li>
	);
}
