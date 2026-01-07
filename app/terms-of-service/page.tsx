import React from "react";
import { Gavel, Truck, RotateCcw, CreditCard } from "lucide-react";
import { Metadata } from "next";

export const metagata: Metadata= {
  title : "Terms of Service",
  description : "Terms of Service"
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#285430] p-12 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 text-white">
            <Gavel size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lime-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By
            ordering from KSM Fruits, you agree to these terms.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 prose prose-green max-w-none">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-[#285430]">
              <Truck size={24} />
              <h2 className="text-2xl font-bold m-0 text-gray-900">
                Delivery & Ordering
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Orders placed through our website or WhatsApp will be fulfilled
              based on seasonal availability. While we strive for same-day
              delivery in Udupi and surrounding areas, delivery times may vary
              based on location and fruit availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#285430]">
                <CreditCard size={24} />
                <h3 className="text-xl font-bold m-0 text-gray-900">Pricing</h3>
              </div>
              <p className="text-gray-600">
                Fruit prices are subject to daily market fluctuations. The final
                price confirmed at the time of order through WhatsApp remains
                the binding price.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#285430]">
                <RotateCcw size={24} />
                <h3 className="text-xl font-bold m-0 text-gray-900">
                  Returns & Quality
                </h3>
              </div>
              <p className="text-gray-600">
                Since fruits are perishable items, we only accept returns if
                there is a quality issue reported at the time of delivery.
              </p>
            </div>
          </div>

          <div className="mb-12 bg-gray-50 p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-[#285430]">
              User Responsibilities
            </h2>
            <ul className="space-y-3 text-gray-600 list-disc pl-5">
              <li>
                Provide accurate delivery address and contact information.
              </li>
              <li>
                Be available or arrange for someone to receive the fresh fruits
                at the scheduled time.
              </li>
              <li>Inspect the quality of fruits upon arrival.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Modifications to Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              KSM Fruits reserves the right to modify or discontinue any product
              or service without prior notice. Price changes for future orders
              can occur daily reflecting market values.
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
          </div>
        </div>
      </div>
    </div>
  );
}
