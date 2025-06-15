
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProductKhoa = () => (
  <div className="min-h-screen bg-white">
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-[#142684]">Trang chủ</Link>
          <Link to="/san-pham" className="text-[#142684] font-medium">Sản phẩm</Link>
          <Link to="/tin-tuc" className="text-gray-600 hover:text-[#142684]">Tin tức</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#142684]">Liên hệ</Link>
        </nav>
      </div>
    </header>

    <section className="bg-gradient-to-r from-[#142684] to-[#1e3a8a] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Khoá thông minh</h1>
        <p className="text-xl mb-3">Khoá cửa an toàn, nhiều tính năng tiện ích cho khách sạn</p>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
            alt="Khoá thông minh"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle>
              <Badge className="mb-3 bg-[#142684] w-fit">Khoá</Badge>
              Khoá thông minh khách sạn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Khoá cửa điện tử hiện đại hỗ trợ mở khoá bằng thẻ từ, mã số, điện thoại di động.
              Dễ dàng quản lý, hạn chế thất thoát chìa khoá, nâng cao trải nghiệm và an toàn cho khách.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Mở khoá qua thẻ, mã PIN hoặc Bluetooth</li>
              <li>Phù hợp nhiều loại cửa (gỗ, inox,...) và thiết kế hiện đại</li>
              <li>Lưu lại lịch sử ra vào phòng</li>
              <li>Tích hợp với hệ thống phòng và quản trị khách sạn</li>
            </ul>
            <Link to="/san-pham" className="text-[#142684] font-medium hover:underline">← Quay lại danh sách sản phẩm</Link>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default ProductKhoa;
