"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderDetailsContent() {
  const search = useSearchParams();
  const slug = search.get("slug");

  return (

    <>
    <Navbar/>
     <div className="p-4">
      <h1 className="text-xl font-bold">📦 Order Details</h1>

      <p className="mt-4">
        <strong>Order ID: </strong> {slug}
      </p>
    </div>
    <Footer/>
    </>
   
  );
}

export default function OrderDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderDetailsContent />
    </Suspense>
  );
}
