import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

const useOrder = () => {
	
	const [order, setOrder] = useState<OrderItem[]>([])

	const addItem = ( item: MenuItem) => {

		const newItem: OrderItem = {...item, quantity: 1}
		
		setOrder((prevOrder) => {
			const itemExists = prevOrder.some((orderItem) => orderItem.id === item.id);

			if (itemExists) {
				const updatedOrder = prevOrder.map((orderItem) => {
					if (orderItem.id === item.id) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					}
					return orderItem;
				});

				return updatedOrder;
			} else {
				return [...prevOrder, newItem];
			}
		});
	}


	const removeItem = (id: MenuItem['id']) => {
		setOrder(order.filter(item => item.id !== id))
	}

	return {
		addItem,
		removeItem,
		order
	};
}
 
export default useOrder;