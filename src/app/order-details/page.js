"use client";


import OrderDetailMain from "@/components/orderDetails/OrderDetailMain";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderDetailsContent() {
  const search = useSearchParams();
  const slug = search.get("slug");

  return (

    <>
    <OrderDetailMain slug={slug} />
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
