import {useState} from 'react';

import TabButton from '../components/Shop/TabButton';
import TabContent from '../components/Shop/TabContent';

export default function Shop() {
	const [selectedItem, setSelectedItem] = useState(2);

	function handleSelect(selectedButton) {
		setSelectedItem(selectedButton);
	}

	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 mt7'>
				<div className='hidden md:block'>
					<h2 className='text-3xl font-semibold'></h2>
				</div>
				<div className='flex justify-end'>
					<div
						style={{'gridTemplateColumns': 'repeat(4, minmax(0px, 1fr))'}}
						className='grid justify-around font-semibold text-md lg:text-xl bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl w-full md:w-3/4 h-13 lg:h-15 p0.3'
					>
						<TabButton isSelected={selectedItem === 2} onSelect={() => handleSelect(2)}>
							Drinks
						</TabButton>
						<TabButton isSelected={selectedItem === 3} onSelect={() => handleSelect(3)}>
							Coockies
						</TabButton>
						<TabButton isSelected={selectedItem === 4} onSelect={() => handleSelect(4)}>
							Chocolates
						</TabButton>
						<TabButton isSelected={selectedItem === 5} onSelect={() => handleSelect(5)}>
							Chips
						</TabButton>
					</div>
				</div>
			</div>
			<div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
				<TabContent selectedTopic={selectedItem} />
			</div>
		</div>
	);
}
