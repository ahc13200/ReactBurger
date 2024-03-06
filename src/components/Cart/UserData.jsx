export default function UserData({back}) {
	return (
		<>
			<div className='mt-5'>
				<div className='grid md:grid-cols-2 gap5'>
					<div className='grid gap3'>
						<label className='text-lg'>Name</label>
						<input type='text' className='rounded-lg outline-none border-none hover:bg-white:25 text-lg p1.5' />
					</div>
					<div className='grid gap3'>
						<label className='text-lg'>Email</label>
						<input type='email' className='rounded-lg outline-none border-none hover:bg-white:25 text-lg p1.5' />
					</div>
				</div>

				<div className='mt5 grid gap3 col-span-2'>
					<label className='text-lg'>Address</label>
					<textarea
						type='text'
						rows={4}
						className='rounded-lg outline-none border-none hover:bg-white:25 text-lg p1.5'
					/>
				</div>
			</div>
			<div className='mt-auto flex items-center justify-between'>
				<span className='text-xl'>Total: $600</span>
				<div className='flex gap3'>
					<button
						onClick={back}
						className='bg-transparent border-none text-lg hover:bg-white:10 p1 rounded-3xl transition-all duration-300 text-yellow-400 w-30 cursor-pointer'
					>
						Back
					</button>
					<button className='border-none bg-gradient-to-r from-yellow-500 to-yellow-600 text-lg rounded-3xl w30 cursor-pointer hover:(from-yellow-400 to-yellow-700) transition-all duration-300'>
						Save
					</button>
				</div>
			</div>
		</>
	);
}
