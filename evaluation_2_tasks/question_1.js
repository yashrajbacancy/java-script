// 1. JS: Order Processing Pipeline (Promise + async/await + event loop
// awareness)
// Description
// You are given an array of order IDs.
// You must process orders in the following way:
// 1. Fetch order details for all order IDs /orders/{id} (this must happen in
// parallel)
// 2. After all orders are fetched, for each order:
// call /payments/{orderId} to get payment status
// 3. Build a final summary object containing:
// total orders
// total paid orders
// total unpaid orders
// Constraints:
// Fetching orders must be parallel.
// Payment checks must run after all orders are fetched.
// Use async / await
// Use Promise.all for parallel execution
// Do not use callbacks
// Handle partial failures (if one payment API fails, continue others)
// Return a summary object

async function processOrders(orderIds) {
  const orderResults = await Promise.allSettled(
    orderIds.map((id) => fetch(`/orders/${id}`).then((res) => res.json())),
  );

  const successfulOrders = orderResults
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const paymentResults = await Promise.allSettled(
    successfulOrders.map((order) =>
      fetch(`/payments/${order.id}`).then((res) => res.json()),
    ),
  );

  let totalPaidOrders = 0;
  let totalUnpaidOrders = 0;

  paymentResults.forEach((result) => {
    if (result.status === "fulfilled") {
      if (result.value.paymentStatus === "paid") {
        totalPaidOrders++;
      } else {
        totalUnpaidOrders++;
      }
    } else {
      totalUnpaidOrders++;
    }
  });

  return {
    totalOrders: orderIds.length,
    totalPaidOrders,
    totalUnpaidOrders,
  };
}
