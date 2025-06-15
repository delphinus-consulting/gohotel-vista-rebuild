
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
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
                <label className="block text-sm font-medium mb-2">Số đi��n thoại</label>
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
  );
};

export default ContactSection;
