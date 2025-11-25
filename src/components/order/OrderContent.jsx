"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../server/baseurl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ConfirmPopUp } from "./ConfirmPopUp";

// Main OrderContent component (includes suggestions, coupon, modal trigger)
const OrderContent = ({ product }) => {
  const router = useRouter();

  const products = [
    {
      _id: "1",
      name: "Jaggery Cubes",
      img: "/cube2.png",
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
      description: "Pure jaggery blocks made from fresh sugarcane juice.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [initialSelectedId, setInitialSelectedId] = useState(null);
  const [items, setItems] = useState([]); // cart items {product, quantity}
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponSaving, setCouponSaving] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(49);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (product) {
      const found = products.find((p) => p.slug === product);
      setSelected(found || null);
      if (found) {
        setInitialSelectedId(found._id);
        // default add selected product to cart with 1kg
        setItems([
          {
            id: found._id,
            name: found.name,
            pricePerKg: found.pricePerKg,
            mrpPerKg: found.mrpPerKg,
            quantityKg: 1,
            img: found.img,
          },
        ]);
      }
    }
  }, [product]);

  // suggestions are other products than the main selected
  const suggestions = products.filter((p) => p.slug !== product);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 10) setForm((f) => ({ ...f, phone: cleaned }));
      return;
    }
    setForm((f) => ({ ...f, [name]: value }));
  };

  const addSuggestion = (prod) => {
    const existing = items.find((it) => it.id === prod._id);
    if (existing) {
      // increase qty by 1
      setItems((prev) =>
        prev.map((it) =>
          it.id === prod._id ? { ...it, quantityKg: it.quantityKg + 1 } : it
        )
      );
      toast.success("Updated quantity in cart");
      return;
    }
    setItems((prev) => [
      ...prev,
      {
        id: prod._id,
        name: prod.name,
        pricePerKg: prod.pricePerKg,
        mrpPerKg: prod.mrpPerKg,
        quantityKg: 1,
        img: prod.img,
      },
    ]);
    toast.success("Added to cart");
  };

  const changeQty = (prodId, delta) => {
    setItems((prev) =>
      prev
        .map((it) =>
          it.id === prodId
            ? { ...it, quantityKg: Math.max(1, it.quantityKg + delta) }
            : it
        )
        .filter((it) => it.quantityKg > 0)
    );
  };

  const removeItem = (prodId) => {
    // Prevent removing the main product if it's the only item in cart
    if (prodId === initialSelectedId && items.length === 1) {
      toast.error(
        "Cannot remove the product selected from home. Add another product first."
      );
      return;
    }
    setItems((prev) => prev.filter((it) => it.id !== prodId));
    toast.success("Removed from cart");
  };

  // coupon simple rules: WELCOME -> 10% off up to ₹100; SAVE50 -> flat ₹50 off on subtotal>=500
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return toast.error("Enter coupon code");

    let saving = 0;
    const subtotal = items.reduce(
      (s, it) => s + it.pricePerKg * it.quantityKg,
      0
    );

    if (code === "WELCOME") {
      saving = Math.min((subtotal * 10) / 100, 100);
    } else if (code === "SAVE50") {
      if (subtotal >= 500) saving = 50;
      else {
        toast.error("SAVE50 works on orders ₹500+");
        return;
      }
    } else {
      toast.error("Invalid coupon");
      return;
    }

    setAppliedCoupon({ code, saving });
    setCouponSaving(saving);
    toast.success(`Coupon ${code} applied — saved ₹${saving.toFixed(2)}`);
  };

  const computeSummary = () => {
    const subtotal = items.reduce(
      (s, it) => s + it.pricePerKg * it.quantityKg,
      0
    );
    const couponSavingLocal = appliedCoupon ? appliedCoupon.saving : 0;
    const taxable = Math.max(0, subtotal - couponSavingLocal);
    const gstAmount = (taxable * 5) / 100; // 18% as requested
    const delivery = subtotal >= 1000 ? 0 : deliveryCharge;
    const finalAmount = taxable + gstAmount + delivery;

    return {
      user: {
        name: form.name || "",
        phone: form.phone || "",
        email: form.email || "",
        address: {
          line1: form.addressLine1 || "",
          line2: form.addressLine2 || "",
          city: form.city || "",
          state: form.state || "",
          pincode: form.pincode || "",
        },
      },
      items,
      subtotal,
      couponCode: appliedCoupon ? appliedCoupon.code : null,
      couponSaving: couponSavingLocal,
      gstAmount,
      deliveryCharge: delivery,
      total: finalAmount,
    };
  };

  const openConfirmModal = () => {
    // basic validation before open
    if (!form.name.trim()) return toast.error("Enter name");
    if (!/^\d{10}$/.test(form.phone))
      return toast.error("Enter valid 10-digit phone");
    if (!form.addressLine1.trim()) return toast.error("Enter address line 1");
    if (!form.city.trim()) return toast.error("Enter city");
    if (!form.state.trim()) return toast.error("Enter state");
    if (!/^\d{6}$/.test(form.pincode))
      return toast.error("Enter valid 6-digit pincode");
    if (items.length === 0) return toast.error("Cart is empty");

    setOpenConfirm(true);
  };

  const placeOrder = async () => {
    setLoading(true);
    setErrorMsg("");

    const summary = computeSummary();

    const payload = {
      items: summary.items.map((it) => ({
        id: it.id,
        name: it.name,
        pricePerKg: it.pricePerKg,
        mrpPerKg: it.mrpPerKg,
        quantityKg: it.quantityKg,
        subtotal: Number((it.pricePerKg * it.quantityKg).toFixed(2)),
      })),
      priceBreakup: {
        subtotal: Number(summary.subtotal.toFixed(2)),
        discountPercent: appliedCoupon
          ? Math.round((appliedCoupon.saving / summary.subtotal) * 100)
          : 0,
        discountAmount: Number(summary.couponSaving.toFixed(2)),
        gstPercent: 5,
        gstAmount: Number(summary.gstAmount.toFixed(2)),
        deliveryCharges: Number(summary.deliveryCharge.toFixed(2)),
        finalAmount: Number(summary.total.toFixed(2)),
      },
      user: summary.user,
      paymentMethod: "cod",
      notes: "",
    };

    try {
      const res = await axios.post(`${baseUrl}/api/items/orders`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data && res.data.success) {
        toast.success("Order placed successfully!");
        setOpenConfirm(false);
        router.push("/thankyou");
      } else {
        setErrorMsg(res.data?.message || "Failed to place order");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!selected)
    return (
      <div className="p-6 text-center text-gray-600">Loading product...</div>
    );

  const summary = computeSummary();

  return (
    <div className="w-full my-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Product preview */}
        <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-4 items-center">
          <img
            src={selected.img}
            alt={selected.name}
            className="w-full max-w-sm h-64 object-cover rounded-xl shadow-md"
          />
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{selected.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{selected.description}</p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <div className="text-2xl font-bold text-yellow-600">
                ₹{selected.pricePerKg}/kg
              </div>
              <div className="line-through text-gray-400">
                ₹{selected.mrpPerKg}
              </div>
            </div>
          </div>

          <div className="w-full mt-3">
            <h4 className="font-semibold">Suggestions for you</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 w-full">
              {suggestions.map((sugg) => (
                <div
                  key={sugg._id}
                  className="border rounded-lg p-3 flex   md:flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={sugg.img}
                      alt={sugg.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <div className="font-medium">{sugg.name}</div>
                      <div className="text-xs text-gray-500">
                        ₹{sugg.pricePerKg}/kg
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => addSuggestion(sugg)}
                      className="flex-1 py-2 rounded-full bg-yellow-500 px-5 text-black font-semibold hover:bg-yellow-600"
                    >
                      Add
                    </button>
                    {/* <button
                      onClick={() => toast("View more coming soon")}
                      className="px-3 py-2 rounded-full border"
                    >
                      View
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form & Cart */}
        <div className="p-3 md:p-6">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">
            🛒 Delivery & Order
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleFormChange}
                placeholder="Full name *"
                className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone (10 digits) *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleFormChange}
                placeholder="Phone (10 digits) *"
                className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="text-sm font-medium">Email (optional)</label>
            <input
              name="email"
              value={form.email}
              onChange={handleFormChange}
              placeholder="Email (optional)"
              className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              type="email"
            />
          </div>

          <div className="mt-3">
            <label className="text-sm font-medium">Address Line 1 *</label>
            <input
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleFormChange}
              placeholder="Address line 1 *"
              className="px-3 py-2 border rounded-md w-full outline-none mt-1"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div>
              <label className="text-sm font-medium">State *</label>
              <input
                name="state"
                value={form.state}
                onChange={handleFormChange}
                placeholder="State *"
                className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">City *</label>
              <input
                name="city"
                value={form.city}
                onChange={handleFormChange}
                placeholder="City *"
                className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Pincode *</label>
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleFormChange}
                placeholder="Pincode *"
                className="px-3 py-2 border rounded-md w-full outline-none mt-1"
              />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold">Your Cart</h4>
            <div className="mt-2 space-y-2">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center gap-3 border rounded-lg p-3"
                >
                  <div>
                    <img
                      src={it.img}
                      alt={it.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{it.name}</div>
                      <div className="text-xs text-gray-500">
                        ₹{it.pricePerKg}/kg
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQty(it.id, -1)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <div className="px-3">{it.quantityKg} kg</div>
                    <button
                      onClick={() => changeQty(it.id, 1)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4 font-semibold">
                    ₹{(it.pricePerKg * it.quantityKg).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(it.id)}
                    className="ml-3 text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 items-center">
              <input
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="px-3 py-2 border rounded"
              />
              <button
                onClick={applyCoupon}
                className="py-2 rounded bg-green-600 text-white"
              >
                Apply Coupon
              </button>
            </div>

            <div className="mt-4 p-3 border rounded-lg bg-gray-50">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Coupon</span>
                <span className="text-green-600">
                  - ₹{summary.couponSaving.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>GST (5%)</span>
                <span>₹{summary.gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Delivery</span>
                <span>₹{summary.deliveryCharge.toFixed(2)}</span>
              </div>

              <div className="border-t mt-3 pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{summary.total.toFixed(2)}</span>
              </div>

              {errorMsg && (
                <div className="text-red-600 text-sm mt-2">{errorMsg}</div>
              )}

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setItems([
                      {
                        id: selected._id,
                        name: selected.name,
                        pricePerKg: selected.pricePerKg,
                        mrpPerKg: selected.mrpPerKg,
                        quantityKg: 1,
                        img: selected.img,
                      },
                    ]);
                    setAppliedCoupon(null);
                    setCoupon("");
                  }}
                  className="py-2 rounded-full border"
                >
                  Reset
                </button>
                <button
                  onClick={openConfirmModal}
                  className="py-2 rounded-full bg-yellow-500 text-black font-semibold"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm popup */}
      <ConfirmPopUp
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        orderSummary={summary}
        loading={loading}
        onConfirm={placeOrder}
      />
    </div>
  );
};

export default OrderContent;
