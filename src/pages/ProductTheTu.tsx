
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProductTheTu = () => (
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
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Thẻ từ</h1>
        <p className="text-xl mb-3">Thẻ ra vào thông minh, bảo mật cho khách sạn hiện đại</p>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
            alt="Thẻ từ"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle>
              <Badge className="mb-3 bg-[#142684] w-fit">Thẻ</Badge>
              Thẻ từ khách sạn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Thẻ từ giúp khách hàng ra/vào phòng dễ dàng và an toàn, giới hạn truy cập chỉ cho người được cấp phép.
              Tương thích tốt với nhiều loại khoá thông minh và hệ thống kiểm soát hiện đại.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Bảo mật cao với mã hóa nhiều lớp</li>
              <li>Khách hàng tự chủ động ra vào phòng</li>
              <li>Khả năng tích hợp với các hệ thống khác (điều khiển điện, thang máy...)</li>
              <li>Dễ dàng cấp lại hoặc vô hiệu hoá thẻ khi cần</li>
            </ul>
            <Link to="/san-pham" className="text-[#142684] font-medium hover:underline">← Quay lại danh sách sản phẩm</Link>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default ProductTheTu;
