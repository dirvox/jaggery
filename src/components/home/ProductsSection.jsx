"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../server/baseurl"; // make sure this exports your API base

const ProductsSection = () => {
  const products = [
    {
      _id: "1",
      name: "Organic Jaggery Block",
      img: "/blocks.jpeg",
      pricePerKg: 179,
      mrpPerKg: 289,
      description: "Pure, chemical-free jaggery blocks from fresh sugarcane juice.",
    },
    {
      _id: "2",
      name: "Jaggery Powder",
      img: "/powder.jpeg",
      pricePerKg: 209,
      mrpPerKg: 309,
      description: "Fine-grain organic jaggery powder ideal for tea and sweets.",
    },
    {
      _id: "3",
      name: "Jaggery Cubes",
      img: "/cube.jpeg",
      pricePerKg: 199,
      mrpPerKg: 299,
      description: "Delicious jaggery cubes perfect for tea and desserts.",
    },
  ];

  // Modal + form state
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // selected product
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
    paymentMethod: "cod", // cod = Cash on Delivery
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  const openModal = (product) => {
    setSelected(product);
    setForm((f) => ({ ...f, quantityKg: 1 })); // reset qty
    setErrorMsg("");
    setSuccessMsg("");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[0-9]{10}$/.test(form.phone)) return "Enter a valid 10-digit phone number.";
    if (!form.addressLine1.trim()) return "Please enter your address.";
    if (!form.city.trim()) return "Please enter your city.";
    if (!form.state.trim()) return "Please enter your state.";
    if (!/^[1-9][0-9]{5}$/.test(form.pincode)) return "Enter a valid 6-digit pincode.";
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
          line2: form.addressLine2.trim(),
          city: form.city.trim(),
          state: form.state.trim(),
          pincode: form.pincode.trim(),
        },
      },
      paymentMethod: form.paymentMethod,
      notes: "", // optional
    };

    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/items/orders`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      // expecting { success: true, orderId: '...' } or similar
      if (res.data && res.data.success) {
        setSuccessMsg("Order placed successfully! Order ID: " + res.data.orderId);
        // optionally reset form or close modal after small delay
        setTimeout(() => {
          closeModal();
        }, 1800);
      } else {
        setErrorMsg(res.data?.message || "Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="products" className="bg-[#FAF8F5] py-20 px-5">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-8">
        Our Products
      </h2>

      <div className="max-w-6xl mx-auto">
        <div
          className="
            flex sm:grid sm:grid-cols-2 lg:grid-cols-3 
            gap-6 
            overflow-x-auto sm:overflow-visible 
            pb-4
            scroll-smooth 
          "
        >
          {products.map((item) => {
            const discount = Math.round(
              ((item.mrpPerKg - item.pricePerKg) / item.mrpPerKg) * 100
            );

            return (
              <div
                key={item._id}
                className="min-w-[85%] sm:min-w-0 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 duration-300"
              >
                <div className="relative w-full h-64">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 text-center">
                  <h5 className="text-[#C19A6B] font-semibold text-xl mb-2">{item.name}</h5>
                  <p className="text-gray-500 text-sm mb-3">{item.description}</p>

                  <div className="flex justify-center items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-[#1C1C1C]">₹{item.pricePerKg} <span className="text-sm">/kg</span></span>
                    <span className="text-gray-400 line-through text-sm">₹{item.mrpPerKg}/kg</span>
                    <span className="text-green-600 text-sm font-semibold">({discount}% OFF)</span>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => openModal(item)}
                      className="bg-[#FFBF00] text-[#1C1C1C] px-6 py-2 rounded-full font-semibold hover:bg-[#e6ac00] transition-all"
                    >
                      Buy Now
                    </button>
                    <button
                      className="mt-0 px-4 py-2 rounded-full font-medium text-white bg-[#C19A6B] hover:bg-[#A97C50] transition-all"
                      onClick={() =>
                        alert(
                          `Quick info:\nProduct: ${item.name}\nPrice: ₹${item.pricePerKg}/kg\nMRP: ₹${item.mrpPerKg}/kg`
                        )
                      }
                    >
                      Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========== Modal ========== */}
      {isOpen && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">Order: {selected.name}</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img src={selected.img} alt={selected.name} className="w-full h-44 object-cover rounded-lg" />
                  <div className="mt-3 p-3 rounded-md bg-gray-50">
                    <div className="text-sm text-gray-600">Price</div>
                    <div className="text-xl font-bold">₹{selected.pricePerKg}/kg</div>
                    <div className="text-sm text-gray-500 line-through">₹{selected.mrpPerKg}/kg</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name *"
                      className="px-3 py-2 border rounded-md w-full"
                      required
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone (10 digits) *"
                      className="px-3 py-2 border rounded-md w-full"
                      required
                    />
                  </div>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    className="px-3 py-2 border rounded-md w-full"
                    type="email"
                  />

                  <input
                    name="addressLine1"
                    value={form.addressLine1}
                    onChange={handleChange}
                    placeholder="Address line 1 *"
                    className="px-3 py-2 border rounded-md w-full"
                    required
                  />
                  <input
                    name="addressLine2"
                    value={form.addressLine2}
                    onChange={handleChange}
                    placeholder="Address line 2 (optional)"
                    className="px-3 py-2 border rounded-md w-full"
                  />

                  <div className="grid grid-cols-3 gap-2">
                    <input name="city" value={form.city} onChange={handleChange} placeholder="City *" className="px-3 py-2 border rounded-md" required />
                    <input name="state" value={form.state} onChange={handleChange} placeholder="State *" className="px-3 py-2 border rounded-md" required />
                    <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode *" className="px-3 py-2 border rounded-md" required />
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm">Quantity (kg):</label>
                    <input
                      name="quantityKg"
                      value={form.quantityKg}
                      onChange={handleChange}
                      type="number"
                      min="1"
                      className="w-28 px-3 py-2 border rounded-md"
                    />
                    <div className="ml-auto text-right text-sm">
                      <div>Subtotal: <span className="font-semibold">₹{(selected.pricePerKg * Number(form.quantityKg || 1)).toFixed(2)}</span></div>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <label className="text-sm">Payment:</label>
                    <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className="px-3 py-2 border rounded-md">
                      <option value="cod">Cash on Delivery</option>
                      <option value="upi">UPI / Online</option>
                    </select>
                  </div>

                  {errorMsg && <div className="text-red-600 text-sm">{errorMsg}</div>}
                  {successMsg && <div className="text-green-600 text-sm">{successMsg}</div>}

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-[#FFBF00] text-black px-4 py-2 rounded-full font-semibold hover:bg-[#e6ac00] transition"
                    >
                      {loading ? "Placing order..." : "Place Order"}
                    </button>
                    <button
                      type="button"
                      onClick={() => { closeModal(); }}
                      className="px-4 py-2 rounded-full border border-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                We will call you on the phone number provided to confirm delivery time. By placing the order you agree to our terms.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
