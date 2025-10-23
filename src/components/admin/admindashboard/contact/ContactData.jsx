"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "@/components/server/baseurl";

const ContactData = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/items/contact`);
        setContact(res.data.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    getContact();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">Contact List</h2>

      {contact.length === 0 ? (
        <p>No contact found.</p>
      ) : (
        <div className="overflow-auto scrollbar-hide max-h-[80vh]">
          <div className="inline-block min-w-full">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-4 py-2 border-b whitespace-nowrap">User Name</th>
                  <th className="px-4 py-2 border-b whitespace-nowrap">Phone</th>
                  <th className="px-4 py-2 border-b whitespace-nowrap">Email</th>
                  <th className="px-4 py-2 border-b whitespace-nowrap">Subject</th>
                  <th className="px-4 py-2 border-b whitespace-nowrap">Message</th>
                  <th className="px-4 py-2 border-b whitespace-nowrap">Created At</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((item) => (
                  <tr key={item._id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border-b whitespace-nowrap">{item.name}</td>
                    <td className="px-4 py-2 border-b whitespace-nowrap">{item.phone}</td>
                    <td className="px-4 py-2 border-b whitespace-nowrap">{item.email}</td>
                    <td className="px-4 py-2 border-b whitespace-nowrap">{item.subject}</td>
                    <td className="px-4 py-2 border-b whitespace-nowrap">{item.message}</td>
                    <td className="px-4 py-2 border-b whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactData;
