export default function BarItem({children, icon}) {
	return (
		<div className='hfull px-4 transition-all duration-200 flex justify-center items-center pt1'>
			<div className='flex flex-col justify-center items-center'>
				<span lt-sm='text-2xl' className="text-2xl inline-flex">
					{icon}
				</span>
				<span  font='bold' lt-sm='text-xs' className='whitespace-nowrap mt1 text-sm'>
					{children}
				</span>
			</div>
		</div>
	);
}
