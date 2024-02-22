export default function TabButton({children, onSelect, isSelected}) {
	return (
		<label
			className={
				isSelected
					? ' bg-stone-800 px4 py2 text-center rounded-3xl flex justify-center items-center transition duration-400 ease-in-out'
					: 'flex justify-center items-center '
			}
			onClick={onSelect}
		>
			{children}
		</label>
	);
}
