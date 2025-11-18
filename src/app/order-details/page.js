"use client";
import { useSearchParams } from "next/navigation";

export default function OrderDetailsPage() {
  const search = useSearchParams();
  const slug = search.get("slug");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">📦 Order Details</h1>

      <p className="mt-4">
        <strong>Order ID: </strong> {slug}
      </p>
    </div>
  );
}
