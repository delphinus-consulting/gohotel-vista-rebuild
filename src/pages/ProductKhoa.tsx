
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
            <h4 className="text-xl font-semibold mt-8 mb-4">An toàn và Tiện lợi</h4>
            <p className="text-gray-700 mb-4">
              Khoá thông minh không chỉ mang lại vẻ ngoài hiện đại cho khách sạn mà còn nâng cao đáng kể mức độ an toàn. 
              Với tính năng ghi lại lịch sử truy cập, ban quản lý có thể dễ dàng kiểm tra ai đã ra vào phòng và vào thời điểm nào.
            </p>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
              alt="An toàn và Tiện lợi"
              className="w-full h-64 object-cover rounded-lg my-4"
            />
            <p className="text-gray-700 mb-4">
              Trong trường hợp mất thẻ, khoá có thể được vô hiệu hoá từ xa và một thẻ mới có thể được cấp ngay lập tức, 
              loại bỏ hoàn toàn rủi ro so với chìa khoá cơ truyền thống.
            </p>
            <Link to="/san-pham" className="text-[#142684] font-medium hover:underline mt-6 inline-block">← Quay lại danh sách sản phẩm</Link>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default ProductKhoa;
