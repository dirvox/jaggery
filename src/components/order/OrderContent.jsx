"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../server/baseurl";

const OrderContent = ({ product }) => {
  console.log("product is", product);

  const products = [
    {
      _id: "1",
      name: "Jaggery Cubes",
      img: "/cube.jpeg",
      slug: "jaggerycubes",
      pricePerKg: 199,
      mrpPerKg: 299,
      description: "Delicious jaggery cubes perfect for tea and desserts.",
    },
    {
      _id: "2",
      name: "Jaggery Powder",
      img: "/powder.jpeg",
      slug: "jaggerypowder",
      pricePerKg: 209,
      mrpPerKg: 309,
      description:
        "Fine-grain organic jaggery powder ideal for tea, coffee, and sweets.",
    },
    {
      _id: "3",
      name: "Organic Jaggery Block",
      img: "/blocks.jpeg",
      slug: "jaggeryblocks",
      pricePerKg: 189,
      mrpPerKg: 289,
      description:
        "Pure, chemical-free jaggery blocks made from fresh sugarcane juice.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    quantityKg: 1,
    paymentMethod: "cod",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (product) {
      const found = products.find((p) => p.slug === product);
      setSelected(found || null);
    }
  }, [product]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[0-9]{10}$/.test(form.phone))
      return "Enter a valid 10-digit phone number.";
    if (!form.addressLine1.trim()) return "Please enter your address.";
    if (!form.city.trim()) return "Please enter your city.";
    if (!form.state.trim()) return "Please enter your state.";
    if (!/^[1-9][0-9]{5}$/.test(form.pincode))
      return "Enter a valid 6-digit pincode.";
    if (!selected) return "No product selected.";
    if (Number(form.quantityKg) <= 0) return "Quantity must be at least 1 kg.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const err = validateForm();
    if (err) {
      setErrorMsg(err);
      return;
    }

    const quantity = Number(form.quantityKg);
    const pricePerKg = selected.pricePerKg;
    const mrpPerKg = selected.mrpPerKg;
    const totalPrice = Number((pricePerKg * quantity).toFixed(2));
    const discount = Math.round(((mrpPerKg - pricePerKg) / mrpPerKg) * 100);

    const payload = {
      product: {
        id: selected._id,
        name: selected.name,
        pricePerKg,
        mrpPerKg,
      },
      quantityKg: quantity,
      priceBreakup: {
        totalPrice,
        discountPercent: discount,
      },
      user: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: {
          line1: form.addressLine1.trim(),
          city: form.city.trim(),
          state: form.state.trim(),
          pincode: form.pincode.trim(),
        },
      },
      paymentMethod: form.paymentMethod,
    };

    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/items/orders`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data && res.data.success) {
        setSuccessMsg("✅ Order placed successfully!");
      } else {
        setErrorMsg(res.data?.message || "❌ Failed to place order. Try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selected)
    return (
      <div className="p-10 text-center text-gray-600">Loading product...</div>
    );

  const discountPercent = Math.round(
    ((selected.mrpPerKg - selected.pricePerKg) / selected.mrpPerKg) * 100
  );

  return (
    <div className="w-full my-25 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto transition-all duration-300 hover:shadow-yellow-300/40">
      <div className="grid md:grid-cols-2">
        {/* ---------- PRODUCT DETAILS ---------- */}
        <div className="relative bg-gray-100 flex flex-col items-center justify-center p-5">
          <div className="relative w-full">
            <img
              src={selected.img}
              alt={selected.name}
              className="w-full h-72 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {discountPercent}% OFF
            </span>
          </div>
          <div className="mt-4 text-center space-y-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selected.name}
            </h2>
            <p className="text-sm text-gray-600">{selected.description}</p>
            <div className="flex justify-center gap-3 items-center mt-2">
              <p className="text-2xl font-bold text-yellow-600">
                ₹{selected.pricePerKg}/kg
              </p>
              <p className="line-through text-gray-400 text-sm">
                ₹{selected.mrpPerKg}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- ORDER FORM ---------- */}
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white flex flex-col justify-center space-y-3"
        >
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">
            🛒 Delivery Details
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name *"
              className="px-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (10 digits) *"
              className="px-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email (optional)"
            className="px-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-yellow-400 outline-none"
            type="email"
          />

          <input
            name="addressLine1"
            value={form.addressLine1}
            onChange={handleChange}
            placeholder="Address line 1 *"
            className="px-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
    

          <div className="grid grid-cols-3 gap-2">
             <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State *"
              className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City *"
              className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
           
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pincode *"
              className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Quantity (kg):</label>
            <input
              name="quantityKg"
              value={form.quantityKg}
              onChange={handleChange}
              type="number"
              min="1"
              className="w-24 px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <p className="ml-auto text-sm">
              <span className="font-semibold">Subtotal:</span>{" "}
              ₹{(selected.pricePerKg * form.quantityKg).toFixed(2)}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium">Payment:</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md w-44 focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI / Online</option>
            </select>
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
          {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            We’ll call you to confirm your delivery. By placing an order, you
            agree to our terms.
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderContent;
