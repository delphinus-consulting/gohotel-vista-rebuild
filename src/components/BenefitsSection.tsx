
import React from 'react';
import { CheckCircle, Star } from "lucide-react";

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;
