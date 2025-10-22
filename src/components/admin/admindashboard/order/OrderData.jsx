"use client";

import React, { useEffect, useState } from "react";
import baseUrl from "@/components/server/baseurl";
import axios from "axios";

const OrderData = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/items/orders`);
        setOrders(res.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Orders List</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-auto scrollbar-hide max-h-[80vh]">
          <div className="inline-block min-w-full">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-4 py-2 border-b">Order ID</th>
                  <th className="px-4 py-2 border-b">Product Name</th>
                  <th className="px-4 py-2 border-b">Quantity (Kg)</th>
                  <th className="px-4 py-2 border-b">Price Per Kg</th>
                  <th className="px-4 py-2 border-b">MRP Per Kg</th>
                  <th className="px-4 py-2 border-b">Total Price</th>
                  <th className="px-4 py-2 border-b">Discount %</th>
                  <th className="px-4 py-2 border-b">User Name</th>
                  <th className="px-4 py-2 border-b">Phone</th>
                  <th className="px-4 py-2 border-b">Email</th>
                  <th className="px-4 py-2 border-b">Address</th>
                  <th className="px-4 py-2 border-b">Payment Method</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Notes</th>
                  <th className="px-4 py-2 border-b">Created At</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{order._id}</td>
                    <td className="px-4 py-2 border-b">{order.product.name}</td>
                    <td className="px-4 py-2 border-b">{order.quantityKg}</td>
                    <td className="px-4 py-2 border-b">₹{order.product.pricePerKg}</td>
                    <td className="px-4 py-2 border-b">₹{order.product.mrpPerKg}</td>
                    <td className="px-4 py-2 border-b">₹{order.priceBreakup.totalPrice}</td>
                    <td className="px-4 py-2 border-b">{order.priceBreakup.discountPercent}%</td>
                    <td className="px-4 py-2 border-b">{order.user.name}</td>
                    <td className="px-4 py-2 border-b">{order.user.phone}</td>
                    <td className="px-4 py-2 border-b">{order.user.email}</td>
                    <td className="px-4 py-2 border-b">
                      {order.user.address.line1}, {order.user.address.line2}, {order.user.address.city}, {order.user.address.state} - {order.user.address.pincode}
                    </td>
                    <td className="px-4 py-2 border-b">{order.paymentMethod}</td>
                    <td className="px-4 py-2 border-b">{order.status}</td>
                    <td className="px-4 py-2 border-b">{order.notes || "N/A"}</td>
                    <td className="px-4 py-2 border-b">{new Date(order.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderData;
