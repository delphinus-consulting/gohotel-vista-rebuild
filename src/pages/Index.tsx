import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, Users, Calendar, CreditCard, BarChart3, Shield, Clock, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Gift } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hệ thống quản lý khách sạn với đầy đủ tính năng cần thiết
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Quản lý đặt phòng</CardTitle>
                <CardDescription>
                  Quản lý đặt phòng online/offline, check-in/check-out tự động
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Quản lý khách hàng</CardTitle>
                <CardDescription>
                  Lưu trữ thông tin khách hàng, lịch sử lưu trú và chương trình khách hàng thân thiết
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Quản lý thanh toán</CardTitle>
                <CardDescription>
                  Tích hợp nhiều hình thức thanh toán, xuất hóa đơn điện tử
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Báo cáo thống kê</CardTitle>
                <CardDescription>
                  Báo cáo doanh thu, tỷ lệ lấp đầy phòng, phân tích xu hướng
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Bảo mật cao</CardTitle>
                <CardDescription>
                  Mã hóa dữ liệu, sao lưu tự động, đảm bảo an toàn thông tin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#142684] mb-4" />
                <CardTitle>Vận hành 24/7</CardTitle>
                <CardDescription>
                  Hệ thống hoạt động liên tục, hỗ trợ kỹ thuật 24/7
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tại sao chọn gohotel.vn?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tăng doanh thu 30%</h3>
                    <p className="text-gray-600">Tối ưu hóa giá phòng theo thời gian thực, giảm phòng trống</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tiết kiệm 50% thời gian</h3>
                    <p className="text-gray-600">Tự động hóa quy trình vận hành, giảm công việc thủ công</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nâng cao trải nghiệm khách hàng</h3>
                    <p className="text-gray-600">Check-in/out nhanh chóng, dịch vụ cá nhân hóa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quản lý đa chi nhánh</h3>
                    <p className="text-gray-600">Tập trung hóa quản lý nhiều khách sạn từ một hệ thống</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="text-center">
                <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Được tin tưởng bởi</h3>
                <p className="text-4xl font-bold text-[#142684] mb-2">500+</p>
                <p className="text-gray-600 mb-6">Khách sạn trên toàn quốc</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 fill-current text-yellow-500" />)}
                </div>
                <p className="text-sm text-gray-600">4.9/5 sao từ khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bảng giá linh hoạt
            </h2>
            <p className="text-xl text-gray-600">
              Chọn gói phù hợp với quy mô khách sạn của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="relative border-2 border-green-500">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                Miễn phí
              </Badge>
              <CardHeader className="text-center">
                <Gift className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-2xl">Dùng thử miễn phí</CardTitle>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  15 ngày
                </div>
                <CardDescription>Trải nghiệm đầy đủ tính năng</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tất cả tính năng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Không giới hạn phòng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hỗ trợ 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Không cần thẻ tín dụng
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600">
                  Bắt đầu dùng thử
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gói Cơ bản</CardTitle>
                <div className="text-4xl font-bold text-[#142684] mb-2">
                  500K<span className="text-lg font-normal">/tháng</span>
                </div>
                <CardDescription>Phù hợp cho khách sạn nhỏ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tối đa 20 phòng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quản lý đặt phòng cơ bản
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Báo cáo cơ bản
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hỗ trợ email
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#142684] hover:bg-[#0f1f6b]">
                  Chọn gói này
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-[#142684]">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#142684]">
                Phổ biến nhất
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gói Chuyên nghiệp</CardTitle>
                <div className="text-4xl font-bold text-[#142684] mb-2">
                  1.2M<span className="text-lg font-normal">/tháng</span>
                </div>
                <CardDescription>Phù hợp cho khách sạn vừa</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tối đa 100 phòng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tất cả tính năng cơ bản
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tích hợp OTA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hỗ trợ điện thoại
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Báo cáo chi tiết
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#142684] hover:bg-[#0f1f6b]">
                  Chọn gói này
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gói Doanh nghiệp</CardTitle>
                <div className="text-4xl font-bold text-[#142684] mb-2">
                  Liên hệ
                </div>
                <CardDescription>Cho chuỗi khách sạn lớn</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Không giới hạn phòng
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quản lý đa chi nhánh
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tích hợp ERP
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Hỗ trợ 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tùy chỉnh theo yêu cầu
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#142684] hover:bg-[#0f1f6b]">
                  Liên hệ tư vấn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#142684] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sẵn sàng bắt đầu?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Hãy để gohotel.vn giúp bạn chuyển đổi số và tối ưu hóa vận hành khách sạn
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <span className="text-lg">0888.806.196</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <span className="text-lg">sales@gohotel.vn</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6" />
                  <span className="text-lg">1180/9/10 Quang Trung, Gò Vấp, TPHCM</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Đăng ký dùng thử miễn phí
                </CardTitle>
                <CardDescription className="text-center">
                  30 ngày dùng thử, không cần thẻ tín dụng
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tên khách sạn</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142684]" placeholder="Nhập tên khách sạn" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Họ tên</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142684]" placeholder="Nhập họ tên" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142684]" placeholder="Nhập email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#142684]" placeholder="Nhập số điện thoại" />
                </div>
                <Button className="w-full bg-[#142684] hover:bg-[#0f1f6b] text-lg py-3">
                  Bắt đầu dùng thử miễn phí
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hotel className="h-8 w-8 text-[#142684]" />
                <span className="text-2xl font-bold">gohotel.vn</span>
              </div>
              <p className="text-gray-400">
                Giải pháp quản lý khách sạn hàng đầu Việt Nam
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Quản lý đặt phòng</a></li>
                <li><a href="#" className="hover:text-white">Quản lý khách hàng</a></li>
                <li><a href="#" className="hover:text-white">Báo cáo thống kê</a></li>
                <li><a href="#" className="hover:text-white">Tích hợp OTA</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-white">Liên hệ hỗ trợ</a></li>
                <li><a href="#" className="hover:text-white">Đào tạo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white">Tin tức</a></li>
                <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 gohotel.vn. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;