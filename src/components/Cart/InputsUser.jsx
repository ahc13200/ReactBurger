import {forwardRef} from 'react';

const Input = forwardRef(function Input({label, textarea}, ref) {
	const className = 'rounded-lg outline-none border-none hover:bg-white:25 text-lg p1.5';
	return (
		<>
			<div className='grid gap3'>
				<label className='text-lg font-sans'>{label}</label>
				{textarea ? (
					<textarea type='text' rows={4} className={className} ref={ref} required />
				) : (
					<input type='text' className={className} ref={ref} required />
				)}
			</div>
		</>
	);
});

export default Input;
