import { useEffect, useMemo, useState } from 'react';
import { formatCurrency } from '../helpers/index';
import { OrderItem } from '../types';

type OrderTotalsProps = {
	order: OrderItem[]
}

const OrderTotal = ({ order } : OrderTotalsProps) => {

	const subtotalAmount = useMemo(() => {
		return order.reduce((total, item) => total + (item.quantity * item.price), 0)
	}, [order])


	return (
		<>
			<div className="space-y-3">
				<h2 className="font-bold text-2xl">Total y Propina: XX</h2>
				<p>Subtotal a Pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>
				<p>Propina: <span className="font-bold">{formatCurrency(0)}</span></p>
				<p className='font-bold'>Total a Pagar: <span className="font-bold">{formatCurrency(0)}</span></p>
			</div>
			<button></button>
		</>
	);
}
 
export default OrderTotal;