"use client";
import React from "react";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/common/About";
import CtaSection from "@/components/home/CAT";
import FeaturedProductsSection from "@/components/home/Products";

export interface Product {
  id: string | number;
  name: string;
  image: string;
  inStock: boolean;
  description: string;
  price: number;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface StoreInfo {
  tagline: string;
  whatsapp: string;
}

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <FeaturedProductsSection />
      <CtaSection />
    </div>
  );
};

export default Homepage;
