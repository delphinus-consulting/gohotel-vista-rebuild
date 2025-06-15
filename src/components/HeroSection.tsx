
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#142684] to-[#1e3a8a] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Phần mềm quản lý khách sạn
          <span className="block text-yellow-400">Thông minh & Hiện đại</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Giải pháp quản lý khách sạn toàn diện giúp tối ưu hóa vận hành, 
          tăng doanh thu và nâng cao trải nghiệm khách hàng
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Dùng thử miễn phí 30 ngày
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-950">
            Xem demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
