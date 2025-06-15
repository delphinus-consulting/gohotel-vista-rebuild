
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Hotel } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        "text-gray-600 hover:text-[#142684] transition-colors",
        isActive && "text-[#142684] font-medium"
      )}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Hotel className="h-8 w-8 text-[#142684]" />
          <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/#features" className="text-gray-600 hover:text-[#142684] transition-colors">Tính năng</Link>
          <NavLink to="/san-pham">Sản phẩm</NavLink>
          <Link to="/#benefits" className="text-gray-600 hover:text-[#142684] transition-colors">Lợi ích</Link>
          <Link to="/#pricing" className="text-gray-600 hover:text-[#142684] transition-colors">Bảng giá</Link>
          <NavLink to="/tin-tuc">Tin tức</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
        </nav>
        <Button className="bg-[#142684] hover:bg-[#0f1f6b] text-white">
          Dùng thử miễn phí
        </Button>
      </div>
    </header>
  );
};
