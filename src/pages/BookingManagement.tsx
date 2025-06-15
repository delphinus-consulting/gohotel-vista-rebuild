
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowLeft,
  Smartphone,
  Monitor,
  Globe,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const BookingManagement = () => {
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
            <Calendar className="h-8 w-8 text-[#142684]" />
            <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#142684] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quản lý đặt phòng
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Hệ thống quản lý đặt phòng thông minh, tự động hóa toàn bộ quy trình từ đặt phòng đến check-out
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
                <Globe className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Đặt phòng Online/Offline</CardTitle>
                <CardDescription>
                  Nhận đặt phòng từ website, điện thoại và tại quầy lễ tân một cách đồng bộ
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Check-in/Check-out tự động</CardTitle>
                <CardDescription>
                  Quy trình check-in/check-out nhanh chóng với mã QR và xác thực điện tử
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Thông báo tự động</CardTitle>
                <CardDescription>
                  Gửi SMS/Email xác nhận đặt phòng và nhắc nhở check-in tự động
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Dashboard thời gian thực</CardTitle>
                <CardDescription>
                  Theo dõi tình trạng phòng, lịch đặt phòng và doanh thu trên một màn hình
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Ứng dụng di động</CardTitle>
                <CardDescription>
                  Quản lý đặt phòng mọi lúc mọi nơi với ứng dụng di động chuyên dụng
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Quản lý nhóm khách</CardTitle>
                <CardDescription>
                  Xử lý đặt phòng nhóm, sự kiện và conference một cách hiệu quả
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
                  <h3 className="text-xl font-semibold mb-2">Giảm 80% thời gian xử lý</h3>
                  <p className="text-gray-600">Tự động hóa quy trình đặt phòng giúp tiết kiệm thời gian đáng kể</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tăng 40% độ chính xác</h3>
                  <p className="text-gray-600">Giảm thiểu sai sót trong quá trình đặt phòng và thanh toán</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nâng cao trải nghiệm khách hàng</h3>
                  <p className="text-gray-600">Quy trình nhanh chóng, chuyên nghiệp tạo ấn tượng tốt</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Thống kê hiệu quả</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Thời gian check-in trung bình</span>
                  <Badge className="bg-green-100 text-green-800">2 phút</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tỷ lệ hài lòng khách hàng</span>
                  <Badge className="bg-blue-100 text-blue-800">98%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Giảm sai sót đặt phòng</span>
                  <Badge className="bg-purple-100 text-purple-800">95%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tăng hiệu suất nhân viên</span>
                  <Badge className="bg-orange-100 text-orange-800">60%</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#142684] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng trải nghiệm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bắt đầu dùng thử miễn phí 30 ngày và trải nghiệm sự khác biệt
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Dùng thử miễn phí ngay
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BookingManagement;
