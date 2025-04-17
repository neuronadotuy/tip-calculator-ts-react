import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";
import CloseIcon from '@mui/icons-material/Close';

type OrderContentsProps = {
	order: OrderItem[],
	removeItem: (id: MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem } : OrderContentsProps) => {
	return ( 
		<div>
			<h2 className="font-bold text-4xl">Consumo</h2>
			<div className="space-y-3 mt-5">
				{
          order && order.length === 0 ? (
						<p className="text-center">La orden esta vacia</p>
					) : (
						order.map(item => {
							return(
								<div key={item.id} className="flex justify-between border-t border-gray-300 p-2 last-of-type:border-b items-center">
									<div>
										<p className="">{item.name} - {formatCurrency(item.price)}</p>
										<p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
									</div>
									<button 
										className="bg-red-400 h-4 w-4 rounded-full text-white font-bold flex cursor-pointer" 
										onClick={() => removeItem(item.id)}
										>
											<CloseIcon style={{width: '100%', height: '100%'}}/>
										</button>
								</div>
								// <>
								// 	<p>{item.name}</p> - <p>{item.quantity}</p>
								// </>
							)
						})
					)
        }
			</div>
		</div>
	 );
}
 
export default OrderContents;