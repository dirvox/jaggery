"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../server/baseurl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// ConfirmPopUp component (modal)
export const ConfirmPopUp = ({
  open,
  onClose,
  orderSummary,
  onConfirm,
  loading,
}) => {
  if (!open) return null;

  const {
    user,
    items,
    subtotal,
    couponCode,
    couponSaving,
    gstAmount,
    deliveryCharge,
    total,
  } = orderSummary;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-[95%] max-w-3xl bg-white rounded-2xl shadow-2xl p-4 md:p-8 m-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="close"
        >
          ✕
        </button>

        <h3 className="text-lg md:text-2xl font-bold text-yellow-700 mb-2">
          Confirm Your Order
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mb-4">
          Review items, delivery, taxes and total before placing your order.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-700">Delivery To</h4>
            <div className="text-sm text-gray-600 mt-2">
              <p className="font-medium">{user.name}</p>
              <p>{user.phone}</p>
              <p>
                {user.address.line1}, {user.address.city} -{" "}
                {user.address.pincode}
              </p>
              <p>{user.address.state}</p>
            </div>

            <h4 className="font-semibold text-gray-700 mt-4">Items</h4>
            <div className="space-y-3 mt-2">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={it.img || "/placeholder.png"}
                      alt={it.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-xs text-gray-500">
                        ₹{it.pricePerKg}/kg × {it.quantityKg} kg
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ₹{(it.pricePerKg * it.quantityKg).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">Price Summary</h4>
            <div className="mt-2 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Coupon ({couponCode || "—"})</span>
                <span className="text-green-600">
                  - ₹{couponSaving.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>GST (5%)</span>
                <span>₹{gstAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryCharge.toFixed(2)}</span>
              </div>

              <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>By confirming, you agree to our terms and privacy policy.</p>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                disabled={loading}
                className="flex-1 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 disabled:opacity-60"
              >
                {loading
                  ? "Placing order..."
                  : `Confirm & Pay ₹${total.toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
