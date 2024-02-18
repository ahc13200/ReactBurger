import {useState} from 'react';
import TabButton from '../components/Shop/TabButton';

export default function Shop() {
	const [selectedItem, setSelectedItem] = useState('Drinks');

	function handleSelect(selectedButton) {
		setSelectedItem(selectedButton);
	}

	return (
		<div className='pt-32 mx-40'>
			<div className='mt-15 grid grid-cols-2'>
				<div>
					<h2 className='text-3xl font-semibold'>{selectedItem}</h2>
				</div>
				<div className='flex justify-end'>
					<div className='flex justify-around font-semibold text-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl w-3/4 h-17 p0.3'>
						<TabButton isSelected={selectedItem === 'Drinks'} onSelect={() => handleSelect('Drinks')}>
							Drinks
						</TabButton>
						<TabButton isSelected={selectedItem === 'Coockies'} onSelect={() => handleSelect('Coockies')}>
							Coockies
						</TabButton>
						<TabButton isSelected={selectedItem === 'Chocolates'} onSelect={() => handleSelect('Chocolates')}>
							Chocolates
						</TabButton>
						<TabButton isSelected={selectedItem === 'Chips'} onSelect={() => handleSelect('Chips')}>
							Chips
						</TabButton>
					</div>
				</div>
			</div>
		</div>
	);
}
