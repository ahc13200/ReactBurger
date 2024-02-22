export default function BarItem({children, icon}) {
	return (
		<div hfull px-4 transition-all duration-200 flex justify-center items-center lt-sm:py2>
			<div flex flex-col justify-center items-center>
				<span lt-sm='text-2xl' text-2xl inline-flex>
					{icon}
				</span>
				<span text-sm font='bold' mt1 lt-sm='text-xs' class='whitespace-nowrap'>
					{children}
				</span>
			</div>
		</div>
	);
}
