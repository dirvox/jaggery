"use client";

import React, { useEffect, useState } from "react";
import baseUrl from "../server/baseurl";
import axios from "axios";
import { FaBox, FaUser, FaMoneyBill, FaClock } from "react-icons/fa";

const OrderData = ({ data }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/items/order-details/${data}`
        );

        setOrder(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching order:", err);
        setLoading(false);
      }
    }

    fetchOrder();
  }, [data]);

  if (loading)
    return (
      <div className="mt-4 p-4 border rounded shadow animate-pulse">
        <div className="h-5 bg-gray-300 rounded w-32 mb-3"></div>
        <div className="h-3 bg-gray-300 rounded w-52 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-40 mb-2"></div>
      </div>
    );

  if (!order) return <div className="mt-4 text-red-500">Order not found.</div>;

  return (
    <div className="mt-10 p-6 bg-white border rounded-2xl shadow-lg">
      <div className="mt-6 w-full flex flex-col items-center">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
          📦 Order Status
        </h3>

        {/* Cancelled Styling */}
        {order.status === "cancelled" ? (
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white text-xl shadow-md">
              ✖
            </div>
            <p className="mt-3 text-red-600 font-bold text-xl">
              Order Cancelled
            </p>
          </div>
        ) : (
          <div className="relative w-full max-w-3xl">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 w-full h-1 bg-gray-300"></div>

            {/* Steps Container */}
            <div className="relative flex justify-between w-full">
              {["confirmed", "packed", "shipped", "delivered"].map(
                (step, index) => {
                  // Step positions
                  const stepOrder = [
                    "confirmed",
                    "packed",
                    "shipped",
                    "delivered",
                  ];
                  const isCompleted =
                    stepOrder.indexOf(order.status) >= stepOrder.indexOf(step);

                  return (
                    <div key={step} className="flex flex-col items-center">
                      {/* Green progress overlay line */}
                      {isCompleted && index > 0 && (
                        <div
                          className="absolute z-0 top-6 h-1 bg-green-500 transition-all duration-500"
                          style={{
                            left: `calc(${(index - 1) * 33.33}% + 20px)`,
                            width: "33%",
                            zIndex: 2,
                          }}
                        ></div>
                      )}

                      {/* Circle */}
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center shadow-md border
                ${
                  isCompleted
                    ? "bg-green-500 border-green-500 text-white z-100"
                    : "bg-gray-100 border-gray-300 text-gray-400 z-100"
                }`}
                      >
                        {isCompleted ? "✔" : ""}
                      </div>

                    
                      <p
                        className={`mt-2 text-sm font-medium 
                ${isCompleted ? "text-green-700" : "text-gray-500"}`}
                      >
                        {step.charAt(0).toUpperCase() + step.slice(1)}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>

      {/* Header */}
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaBox className="text-blue-600" /> Order Details
      </h2>

      <p className="text-gray-600 mt-2">
        <strong>Order ID:</strong> {data}
      </p>

      {/* PRODUCT SECTION */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">🛒 Product Info</h3>

        <div className="mt-3 p-4 bg-blue-50 rounded-xl border">
          <p className="text-lg font-bold">{order.product?.name}</p>
          <p className="text-gray-700">Quantity: {order.quantityKg} KG</p>
          <p className="text-gray-700">
            Price/KG: ₹{order.product?.pricePerKg}
          </p>

          <p className="mt-2 text-green-700 font-semibold">
            Total: ₹{order.priceBreakup?.totalPrice}
          </p>
        </div>
      </div>

      {/* ORDER SECTION */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
          📄 Order Summary
        </h3>

        <div className="mt-3 p-4 bg-yellow-50 rounded-xl border">
          <p className="flex items-center gap-2">
            <FaMoneyBill className="text-green-600" />
            <strong>Payment:</strong> {order.paymentMethod}
          </p>

          <p className="flex items-center gap-2 mt-2">
            <FaClock className="text-orange-500" />
            <strong>Status:</strong>
            <span className="capitalize ml-1 font-semibold text-blue-700">
              {order.status}
            </span>
          </p>

          <p className="text-gray-600 mt-2">
            <strong>Placed on:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* USER SECTION */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
          👤 Customer Info
        </h3>

        <div className="mt-3 p-4 bg-green-50 rounded-xl border">
          <p className="flex items-center gap-2">
            <FaUser className="text-green-700" />
            <strong>Name:</strong> {order.user?.name}
          </p>

          <p className="mt-2 text-gray-700">
            <strong>Phone:</strong> {order.user?.phone}
          </p>

          <p className="mt-1 text-gray-700">
            <strong>Email:</strong> {order.user?.email}
          </p>

          <p className="mt-2 text-gray-700">
            <strong>Address:</strong>
            <br />
            {order.user?.address?.street}, {order.user?.address?.city},
            {order.user?.address?.state} - {order.user?.address?.pincode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderData;
