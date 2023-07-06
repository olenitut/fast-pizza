// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm font-semibold uppercase text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm font-semibold uppercase text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 bg-stone-200 py-5 px-6">
        <p className="font-md">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((el) => (
          <OrderItem item={el} key={el.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium to-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium to-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export const loader = async ({ params }) => {
  const order = await getOrder(params.id);
  return order;
};

export default Order;
