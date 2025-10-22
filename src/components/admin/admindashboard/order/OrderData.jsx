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
        console.log("Orders fetched:", res.data.data);
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
        <ul className="space-y-2">
          {orders.map((order) => (
            <li
              key={order._id}
              className="border rounded-md p-3 shadow-sm bg-white"
            >
              <p><strong>ID:</strong> {order._id}</p>
              <p><strong>User:</strong> {order.userName || "N/A"}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount || 0}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderData;
