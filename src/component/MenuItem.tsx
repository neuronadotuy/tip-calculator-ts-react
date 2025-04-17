import type { MenuItem } from '../types'

type MenuItemProps = {
	item: MenuItem,
	addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem }: MenuItemProps) => {
	return ( 
		<button
			className='border-1 border-teal-400 hover:bg-teal-100 w-full p-3 flex justify-between rounded-xs cursor-pointer'
			onClick={() => addItem(item)}
		>
			<p>{item.name}</p>
			<p className='font-bold'>${item.price}</p>
		</button>
	 );
}
 
export default MenuItem;