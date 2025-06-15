
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gift } from "lucide-react";

const PricingSection = () => {
  return (
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
  );
};

export default PricingSection;
