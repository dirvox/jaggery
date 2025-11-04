"use client";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import baseUrl from "@/components/server/baseurl";

export default function EmailContent() {
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("Order Khatauli Gud - Pure, Traditional Jaggery");
  const [message, setMessage] = useState("Order the best Khatauli Gud from our site. Visit https://khatauligud.com to buy now!");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    try {
      setStatus("");
      setLoading(true);
      const payload = {
        recipientList: emails,
        subject,
        message,
        senderName: "Khatauli Gud Team",
      };
      const { data } = await axios.post(`${baseUrl}/api/email/send`, payload);
      setStatus("✅ Emails sent successfully!");
    } catch (err) {
      setStatus("❌ Failed: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white via-green-50 to-green-100 border border-green-200"
    >
      <h2 className="text-2xl font-semibold text-green-800 mb-2 text-center">
        📧 Send Promotional Emails
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Easily send your marketing or announcement emails to multiple recipients.
      </p>

      {/* Recipients */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Recipients (comma, semicolon, or newline separated)
      </label>
      <textarea
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
        rows={5}
        placeholder="email1@gmail.com, email2@domain.com..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none resize-none bg-white mb-5"
      />

      {/* Subject */}
      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none bg-white mb-5"
      />

      {/* Message */}
      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        placeholder="Write your message..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none resize-none bg-white mb-6"
      />

      {/* Button */}
      <button
        onClick={handleSend}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
          loading
            ? "bg-green-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg"
        }`}
      >
        <Send className="w-5 h-5" />
        {loading ? "Sending..." : "Send Emails"}
      </button>

      {/* Status Message */}
      {status && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-5 p-3 rounded-lg text-center text-sm font-medium ${
            status.startsWith("✅")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </motion.div>
      )}
    </motion.div>
  );
}
