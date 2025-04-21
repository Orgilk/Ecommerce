"use client";

import { useState, useEffect, useRef } from "react";
import FashionCarousel from "@/components/products/product-corosal";
import { AppleCardsCarouselDemo } from "@/app/product/component/apple-card-corosal";
import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll-component/page";
import ProductGridComponent from "@/components/sale-product-grid/page";
import Heading from "@/components/title/page";
import Intercom from "@intercom/messenger-js-sdk";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      // setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current) {
        // setShowFilters(false);
      } else {
        // setShowFilters(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, priceRange, selectedSizes]);

  return (
    <div className="mx-auto w-[98vw] px-4 sm:px-6 lg:px-8">
      {/* Fashion Carousel Section */}
      <div className="mt-6">
        <Heading text="" />
        <div className="w-full overflow-hidden">
          <FashionCarousel />
        </div>
      </div>

      {/* inyt*/}
      <div className="mt-10 sm:mt-20">
        <Heading text="Шинээр нэмэгдсэн" />
        <div className="w-full overflow-hidden">
          <AppleCardsCarouselDemo />
        </div>
      </div>

      <div className="mt-10 sm:mt-20">
        <Heading text="Манай бараанууд " />
        <div className="w-full">
          <ProductGridComponent />
        </div>
      </div>

      <div className="mt-12 sm:mt-20 hidden md:block">
        <Heading text="Хурдан шуурхай хүргэлт, Таны гарт!" />
        <div className="hidden md:block">{/* <Earthcomponent /> */}</div>
      </div>
      <div className="mt-10 sm:mt-20 w-full overflow-hidden">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}

export default MainComponent;
