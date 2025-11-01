import { Order } from "@/components/order/Order";
import React from "react";

export async function generateStaticParams() {
  // ✅ Define all slugs you want to pre-render
  return [
    { slug: "jaggerycubes" },
    { slug: "jaggerypowder" },
    { slug: "jaggeryblocks" },
  ];
}

const Page = ({ params }) => {
  // ✅ Destructure slug properly
  const { slug } = params;

  console.log("slug:", slug);

  return (
    <div><Order slug={slug}/> </div>
  );
};

export default Page;
