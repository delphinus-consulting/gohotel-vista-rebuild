
import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, CreditCard, BarChart3, Shield, Clock } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
