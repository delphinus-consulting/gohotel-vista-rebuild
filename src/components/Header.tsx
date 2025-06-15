
import React from 'react';
import { Button } from "@/components/ui/button";
import { Hotel } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Hotel className="h-8 w-8 text-[#142684]" />
          <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-[#142684] transition-colors">Tính năng</a>
          <a href="#benefits" className="text-gray-600 hover:text-[#142684] transition-colors">Lợi ích</a>
          <a href="#pricing" className="text-gray-600 hover:text-[#142684] transition-colors">Giá cả</a>
          <a href="/contact" className="text-gray-600 hover:text-[#142684] transition-colors">Liên hệ</a>
        </nav>
        <Button className="bg-[#142684] hover:bg-[#0f1f6b] text-white">
          Dùng thử miễn phí
        </Button>
      </div>
    </header>
  );
};

export default Header;
