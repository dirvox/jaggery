"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Analytics", path: "/analytics" },
    { name: "Crypto", path: "/crypto" },
    { name: "Helpdesk", path: "/helpdesk" },
    { name: "Monitoring", path: "/monitoring" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow-md">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="ml-3 text-xl font-semibold text-gray-700">Admin Panel</h1>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 lg:static inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 bg-gray-900 text-white transition-transform duration-300`}
      >
        <div className="p-6 font-bold text-lg border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                router.push(item.path);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700 transition"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
