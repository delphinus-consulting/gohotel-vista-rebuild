
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ProductBoard = () => (
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
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Board mạch điều khiển nguồn điện</h1>
        <p className="text-xl mb-3">Giải pháp kiểm soát nguồn điện trung tâm hiện đại cho khách sạn</p>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            alt="Board mạch điều khiển nguồn điện"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle>
              <Badge className="mb-3 bg-[#142684] w-fit">Board</Badge>
              Board mạch điều khiển nguồn điện
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Thiết bị giúp kiểm soát và quản lý nguồn điện trung tâm cho hệ thống khách sạn. 
              Tích hợp kết nối thông minh với các thiết bị khác như thẻ từ, khóa thông minh 
              để tiết kiệm chi phí, tối ưu hoá hoạt động và đảm bảo an toàn điện.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Tự động ngắt nguồn phòng khi khách trả phòng</li>
              <li>Hỗ trợ cài đặt lịch & giám sát tiêu thụ điện</li>
              <li>Dễ dàng kết nối các thiết bị thông minh khác</li>
              <li>Tối ưu hoá chi phí vận hành và bảo trì</li>
            </ul>
            <Link to="/san-pham" className="text-[#142684] font-medium hover:underline">← Quay lại danh sách sản phẩm</Link>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default ProductBoard;
