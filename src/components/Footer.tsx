
import React from 'react';
import { Hotel } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
