import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Board mạch điều khiển nguồn điện",
    description: "Giải pháp kiểm soát nguồn điện trung tâm cho hệ thống khách sạn, giúp tiết kiệm chi phí và tối ưu vận hành.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Thẻ từ",
    description: "Thẻ từ cho phép khách hàng ra vào phòng thuận tiện và bảo mật, tương thích nhiều loại khoá hiện đại.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Khoá thông minh",
    description: "Khoá cửa thông minh cho khách sạn, hỗ trợ mở khoá bằng thẻ từ, mã số, điện thoại di động.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
];

const productLinks = [
  "/san-pham/board-dieu-khien-nguon-dien",
  "/san-pham/the-tu",
  "/san-pham/khoa-thong-minh"
];

const Product = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Hotel className="h-8 w-8 text-[#142684]" />
          <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-[#142684] transition-colors">Trang chủ</Link>
          <Link to="/san-pham" className="text-[#142684] font-medium">Sản phẩm</Link>
          <Link to="/tin-tuc" className="text-gray-600 hover:text-[#142684] transition-colors">Tin tức</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#142684] transition-colors">Liên hệ</Link>
        </nav>
      </div>
    </header>

    <section className="bg-gradient-to-r from-[#142684] to-[#1e3a8a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sản phẩm</h1>
          <p className="text-xl mb-8">
            Hệ thống thiết bị thông minh, nâng tầm quản lý khách sạn hiện đại
          </p>
        </div>
      </div>
    </section>

    {/* Product List */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Link key={product.id} to={productLinks[idx]} className="h-full flex flex-col">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col cursor-pointer group">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <Badge className="mb-3 bg-[#142684] w-fit">{product.name.split(" ")[0]}</Badge>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Product;
