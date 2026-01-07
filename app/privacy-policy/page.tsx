import React from "react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#285430] p-12 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 text-white">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lime-100 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information at KSM Fruits.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 prose prose-green max-w-none">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-[#285430]">
              <Lock size={24} />
              <h2 className="text-2xl font-bold m-0 text-gray-900">
                Information Collection
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide directly to us when you place
              an order, contact us via WhatsApp, or subscribe to our newsletter.
              This may include your name, contact number, delivery address, and
              purchase preferences.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-[#285430]">
              <Eye size={24} />
              <h2 className="text-2xl font-bold m-0 text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to facilitate:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-600 list-none p-0">
              <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl">
                <span className="w-2 h-2 bg-[#FF7B00] rounded-full mt-2 shrink-0"></span>
                <span>Processing and delivering your orders accurately.</span>
              </li>
              <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl">
                <span className="w-2 h-2 bg-[#FF7B00] rounded-full mt-2 shrink-0"></span>
                <span>Communicating order updates via WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl">
                <span className="w-2 h-2 bg-[#FF7B00] rounded-full mt-2 shrink-0"></span>
                <span>
                  Improving our product selection based on your feedback.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl">
                <span className="w-2 h-2 bg-[#FF7B00] rounded-full mt-2 shrink-0"></span>
                <span>Sending occasional promotional offers.</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-[#285430]">
              <FileText size={24} />
              <h2 className="text-2xl font-bold m-0 text-gray-900">
                Data Protection
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to maintain the safety
              of your personal information. We do not sell, trade, or otherwise
              transfer your personally identifiable information to outside
              parties.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>Contact for privacy queries: Ksmfruits77@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
