
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowLeft,
  Database,
  Gift,
  MessageCircle,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const CustomerManagement = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-[#142684]" />
            <span className="text-lg font-semibold text-[#142684]">Quay lại</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-[#142684]" />
            <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#142684] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quản lý khách hàng
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Xây dựng mối quan hệ lâu dài với khách hàng thông qua hệ thống CRM chuyên nghiệp
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Cơ sở dữ liệu khách hàng</CardTitle>
                <CardDescription>
                  Lưu trữ thông tin chi tiết về khách hàng, lịch sử lưu trú và sở thích cá nhân
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Chương trình khách hàng thân thiết</CardTitle>
                <CardDescription>
                  Tạo và quản lý các chương trình tích điểm, ưu đãi dành cho khách hàng VIP
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Giao tiếp đa kênh</CardTitle>
                <CardDescription>
                  Liên lạc với khách hàng qua email, SMS, và các kênh mạng xã hội
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Phân tích hành vi khách hàng</CardTitle>
                <CardDescription>
                  Hiểu rõ xu hướng và thói quen của khách hàng để cải thiện dịch vụ
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Gift className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Marketing tự động</CardTitle>
                <CardDescription>
                  Gửi ưu đãi và khuyến mại phù hợp với từng nhóm khách hàng
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Quản lý phản hồi</CardTitle>
                <CardDescription>
                  Thu thập và xử lý đánh giá, góp ý từ khách hàng một cách hiệu quả
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lợi ích khi sử dụng</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tăng 50% khách hàng quay lại</h3>
                  <p className="text-gray-600">Chương trình khách hàng thân thiết hiệu quả</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cải thiện 40% dịch vụ</h3>
                  <p className="text-gray-600">Dựa trên phản hồi và phân tích hành vi khách hàng</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tăng 35% doanh thu</h3>
                  <p className="text-gray-600">Thông qua marketing và chăm sóc khách hàng tốt hơn</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Thành tựu đạt được</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Tỷ lệ khách hàng quay lại</span>
                  <Badge className="bg-green-100 text-green-800">75%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Điểm hài lòng trung bình</span>
                  <Badge className="bg-blue-100 text-blue-800">4.8/5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thời gian phản hồi</span>
                  <Badge className="bg-purple-100 text-purple-800">< 2h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tăng trưởng khách hàng VIP</span>
                  <Badge className="bg-orange-100 text-orange-800">120%</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#142684] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Xây dựng mối quan hệ bền vững</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bắt đầu quản lý khách hàng chuyên nghiệp ngay hôm nay
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Dùng thử miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CustomerManagement;
