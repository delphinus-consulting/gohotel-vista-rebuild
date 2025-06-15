import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Hotel, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-[#142684]" />
            <span className="text-2xl font-bold text-[#142684]">gohotel.vn</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-[#142684] transition-colors">Trang chủ</Link>
            <Link to="/#features" className="text-gray-600 hover:text-[#142684] transition-colors">Tính năng</Link>
            <Link to="/#benefits" className="text-gray-600 hover:text-[#142684] transition-colors">Lợi ích</Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-[#142684] transition-colors">Giá cả</Link>
            <Link to="/contact" className="text-[#142684] font-semibold">Liên hệ</Link>
          </nav>
          <Button className="bg-[#142684] hover:bg-[#0f1f6b] text-white">
            Dùng thử miễn phí
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#142684] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Chúng tôi sẵn sàng hỗ trợ bạn tìm hiểu và triển khai giải pháp quản lý khách sạn tốt nhất
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Thông tin liên hệ
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#142684]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#142684] p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Địa chỉ văn phòng</h3>
                        <p className="text-gray-600">1180/9/10 Quang Trung, Gò Vấp, Hồ Chí Minh, Việt Nam</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#142684]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#142684] p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Hotline hỗ trợ</h3>
                        <p className="text-gray-600">0888.806.196</p>
                        <p className="text-sm text-gray-500">Hỗ trợ từ 8:00 - 22:00 hàng ngày</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#142684]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#142684] p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600">sales@gohotel.vn</p>
                        <p className="text-sm text-gray-500">Phản hồi trong vòng 24 giờ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Working Hours */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#142684]" />
                    Giờ làm việc
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Thứ 2 - Thứ 6:</span>
                      <span className="font-semibold">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thứ 7:</span>
                      <span className="font-semibold">8:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chủ nhật:</span>
                      <span className="text-gray-500">Nghỉ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-[#142684]" />
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <CardDescription className="text-center">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn sớm nhất
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Nhập họ và tên"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Tên khách sạn *</Label>
                    <Input 
                      id="company"
                      type="text" 
                      placeholder="Nhập tên khách sạn"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Nhập địa chỉ email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="Nhập số điện thoại"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="rooms">Số phòng khách sạn</Label>
                  <Input 
                    id="rooms"
                    type="number" 
                    placeholder="Ví dụ: 20"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Nội dung tin nhắn *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Mô tả chi tiết nhu cầu của bạn hoặc câu hỏi bạn muốn tư vấn..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-[#142684] hover:bg-[#0f1f6b] text-lg py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Gửi tin nhắn
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Bằng cách gửi form này, bạn đồng ý cho chúng tôi liên hệ và tư vấn về dịch vụ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="h-16 w-16 text-[#142684] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Đặt lịch demo trực tiếp
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Muốn xem trực tiếp cách gohotel.vn hoạt động? Đặt lịch demo 1-1 với chuyên gia của chúng tôi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#142684] hover:bg-[#0f1f6b]">
                Đặt lịch demo miễn phí
              </Button>
              <Button size="lg" variant="outline" className="border-[#142684] text-[#142684] hover:bg-[#142684] hover:text-white">
                Gọi ngay: 0888.806.196
              </Button>
            </div>
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
              <p className="text-gray-400 mb-4">
                Giải pháp quản lý khách sạn hàng đầu Việt Nam
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  1180/9/10 Quang Trung, Gò Vấp, TPHCM
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0888.806.196
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  sales@gohotel.vn
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/#features" className="hover:text-white">Quản lý đặt phòng</Link></li>
                <li><Link to="/#features" className="hover:text-white">Quản lý khách hàng</Link></li>
                <li><Link to="/#features" className="hover:text-white">Báo cáo thống kê</Link></li>
                <li><Link to="/#features" className="hover:text-white">Tích hợp OTA</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
                <li><Link to="/contact" className="hover:text-white">Liên hệ hỗ trợ</Link></li>
                <li><a href="#" className="hover:text-white">Đào tạo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                <li><Link to="/tin-tuc" className="hover:text-white">Tin tức</Link></li>
                <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 gohotel.vn. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
