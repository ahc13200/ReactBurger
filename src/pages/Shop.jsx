import {useState} from 'react';

import TabButton from '../components/Shop/TabButton';
import TabContent from '../components/Shop/TabContent';

export default function Shop() {
	const [selectedItem, setSelectedItem] = useState('Drinks');

	function handleSelect(selectedButton) {
		setSelectedItem(selectedButton);
	}

	return (
		<div>
			<div className='mt-15 grid grid-cols-1 md:grid-cols-2'>
				<div className='hidden md:block'>
					<h2 className='text-3xl font-semibold'>{selectedItem}</h2>
				</div>
				<div className='flex justify-end'>
					<div
						style={{'grid-template-columns': 'repeat(4, minmax(0px, 1fr))'}}
						className='grid justify-around font-semibold text-md lg:text-xl bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl w-full md:w-3/4 h-13 lg:h-15 p0.3'
					>
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
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
				<TabContent selectedTopic={selectedItem} />
			</div>
		</div>
	);
}
