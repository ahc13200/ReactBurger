export default function ItemHeader({children, isMobile}) {
	let classNameItem =
		'flex justify-center items-center rounded-xl p3 hover:text-yellow-400 hover:bg-stone-300/20 hover:cursor-pointer transition-all duration-400';

	if (isMobile) classNameItem = 'flex justify-center items-center rounded-full p3 bg-white:10 hover:text-yellow-400';

	return <li className={classNameItem}>{children}</li>;
}
