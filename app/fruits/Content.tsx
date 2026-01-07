"use client"; // Required for Next.js App Router

import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  Grid3x3,
  List,
  ShoppingCart,
  Tag,
  TrendingUp,
  Sparkles,
  X,
  LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  addToCart,
  allProducts,
  categories,
  popularProducts,
  seasonalSpecials,
  todaysOffers,
} from "@/data/demo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Product } from "../page";

// --- Type Definitions ---

interface ProductType {
  id: string | number;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: number;
  unit: string;
  inStock: boolean;
  category?: string;
  isOffer?: boolean;
  discount?: number;
  isPopular?: boolean;
  isSeasonal?: boolean;
}

interface CategoryType {
  id: string | number;
  name: string;
}

type SortByType = "popular" | "price-low" | "price-high" | "name";
type ViewModeType = "grid" | "list";

// --- Sub-components ---

interface ProductCardProps {
  product: ProductType;
  isListView?: boolean;
  onAddToCart: (product: ProductType) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isListView = false,
  onAddToCart,
}) => (
  <div
    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
      isListView ? "flex flex-row" : ""
    }`}
  >
    <div
      className={`relative overflow-hidden ${
        isListView ? "w-48 h-48" : "h-56"
      }`}
    >
      <Image
        height={400}
        width={400}
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {product.inStock ? (
        <span className="absolute top-4 right-4 bg-[#285430] text-white px-3 py-1 rounded-full text-sm font-semibold">
          In Stock
        </span>
      ) : (
        <span className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Out of Stock
        </span>
      )}
      {product.isOffer && (
        <span className="absolute top-4 left-4 bg-[#FF7B00] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.discount}% OFF
        </span>
      )}
    </div>

    <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-[#285430] bg-[#285430]/10 px-2 py-1 rounded">
          {
            (categories as CategoryType[]).find(
              (c) => c.id === product.category
            )?.name
          }
        </span>
        {product.isPopular && (
          <span className="text-xs font-semibold text-[#FF7B00] bg-[#FF7B00]/10 px-2 py-1 rounded">
            Popular
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-[#FF7B00]">
            ₹{product.price}
          </span>
          <span className="text-gray-600 ml-1">/ {product.unit}</span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="bg-[#285430] flex items-center cursor-pointer hover:bg-[#1f4024] text-white text-sm rounded-full px-4 py-2 transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add
        </button>
      </div>
    </div>
  </div>
);

interface SpecialSectionProps {
  title: string;
  icon: LucideIcon;
  products: ProductType[];
  color: string;
  onAddToCart: (product: ProductType) => void;
}

const SpecialSection: React.FC<SpecialSectionProps> = ({
  title,
  icon: Icon,
  products,
  color,
  onAddToCart,
}) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.slice(0, 4).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  </div>
);

// --- Main Component ---

const OurFruits: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | number>(
    "all"
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortByType>("popular");
  const [viewMode, setViewMode] = useState<ViewModeType>("grid");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product as Product);
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = useMemo(() => {
    let products: ProductType[] = [...(allProducts as Product[])];

    if (searchQuery) {
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    const getNumericPrice = (priceStr: string) => {
      const match = priceStr.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
    };

    products = products.filter((p) => {
      const price = getNumericPrice(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (showInStockOnly) {
      products = products.filter((p) => p.inStock);
    }

    switch (sortBy) {
      case "price-low":
        products.sort(
          (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
        );
        break;
      case "price-high":
        products.sort(
          (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
        );
        break;
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "popular":
        products.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      default:
        break;
    }

    return products;
  }, [searchQuery, selectedCategory, priceRange, showInStockOnly, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-16">
          {(todaysOffers as unknown as ProductType[]).length > 0 && (
            <SpecialSection
              title="Today's Special Offers"
              icon={Tag}
              products={todaysOffers as unknown as ProductType[]}
              color="#FF7B00"
              onAddToCart={handleAddToCart}
            />
          )}

          {(seasonalSpecials as unknown as ProductType[]).length > 0 && (
            <SpecialSection
              title="Seasonal Specials"
              icon={Sparkles}
              products={seasonalSpecials as unknown as ProductType[]}
              color="#FBCB0A"
              onAddToCart={handleAddToCart}
            />
          )}

          {(popularProducts as unknown as ProductType[]).length > 0 && (
            <SpecialSection
              title="Most Popular"
              icon={TrendingUp}
              products={popularProducts as unknown as ProductType[]}
              color="#285430"
              onAddToCart={handleAddToCart}
            />
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search fruits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 w-full rounded-lg border border-gray-300 focus:outline-[#285430]"
              />
            </div>

            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as SortByType)}
            >
              <SelectTrigger className="w-full lg:w-48 h-12 rounded-lg border-gray-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 bg-gray-100 rounded-lg p-1.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`${
                  viewMode === "grid" ? "bg-white shadow-sm" : ""
                } rounded-lg flex items-center justify-center h-10 w-10 transition-all`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`${
                  viewMode === "list" ? "bg-white shadow-sm" : ""
                } rounded-lg flex items-center justify-center h-10 w-10 transition-all`}
              >
                <List size={20} />
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-12 px-4 flex items-center border rounded-lg transition-all ${
                showFilters
                  ? "bg-[#285430] text-white border-[#285430]"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              <SlidersHorizontal size={20} className="mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-sm font-semibold mb-3 block">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(categories as CategoryType[]).map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                          selectedCategory === cat.id
                            ? "bg-[#285430] text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </label>
                    <div className="px-2 pt-2">
                      <Slider
                        value={priceRange}
                        onValueChange={(value) =>
                          setPriceRange([value[0], value[1]])
                        }
                        min={0}
                        max={600}
                        step={10}
                        className="mb-2"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>₹0</span>
                      <span>₹600</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Availability
                    </label>
                    <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <Switch
                        checked={showInStockOnly}
                        onCheckedChange={setShowInStockOnly}
                      />
                      <span className="text-sm text-gray-700">
                        Show in stock only
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                        setPriceRange([0, 600]);
                        setShowInStockOnly(false);
                      }}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold flex items-center h-12"
                    >
                      <X size={16} className="mr-1" />
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">
                {selectedCategory === "all"
                  ? "All Fruits"
                  : `${selectedCategory} Fruits`}
              </h2>
              <p className="text-gray-500 text-sm">
                {filteredProducts.length} items found
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                No fruits found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you&apos;re
                looking for.
              </p>
            </div>
          ) : (
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isListView={viewMode === "list"}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurFruits;
