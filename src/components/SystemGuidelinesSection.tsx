
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Database, Zap } from "lucide-react";

const SystemGuidelinesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hướng dẫn hệ thống
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các thông số kỹ thuật và yêu cầu hệ thống cho gohotel.vn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Settings className="h-12 w-12 text-[#142684] mb-4" />
              <CardTitle>Yêu cầu hệ thống</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Phiên bản:</span>
                  <span className="font-semibold">[VERSION_PLACEHOLDER]</span>
                </li>
                <li className="flex justify-between">
                  <span>Độ tuổi hệ thống:</span>
                  <span className="font-semibold">[AGE_PLACEHOLDER] năm</span>
                </li>
                <li className="flex justify-between">
                  <span>RAM tối thiểu:</span>
                  <span className="font-semibold">[RAM_PLACEHOLDER] GB</span>
                </li>
                <li className="flex justify-between">
                  <span>Dung lượng:</span>
                  <span className="font-semibold">[STORAGE_PLACEHOLDER] GB</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Database className="h-12 w-12 text-[#142684] mb-4" />
              <CardTitle>Cơ sở dữ liệu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Loại CSDL:</span>
                  <span className="font-semibold">[DATABASE_TYPE_PLACEHOLDER]</span>
                </li>
                <li className="flex justify-between">
                  <span>Phiên bản:</span>
                  <span className="font-semibold">[DB_VERSION_PLACEHOLDER]</span>
                </li>
                <li className="flex justify-between">
                  <span>Sao lưu:</span>
                  <span className="font-semibold">[BACKUP_FREQUENCY_PLACEHOLDER]</span>
                </li>
                <li className="flex justify-between">
                  <span>Mã hóa:</span>
                  <span className="font-semibold">[ENCRYPTION_PLACEHOLDER]</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-[#142684] mb-4" />
              <CardTitle>Hiệu suất</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Thời gian phản hồi:</span>
                  <span className="font-semibold">[RESPONSE_TIME_PLACEHOLDER]ms</span>
                </li>
                <li className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="font-semibold">[UPTIME_PLACEHOLDER]%</span>
                </li>
                <li className="flex justify-between">
                  <span>Đồng thời:</span>
                  <span className="font-semibold">[CONCURRENT_USERS_PLACEHOLDER] người dùng</span>
                </li>
                <li className="flex justify-between">
                  <span>Máy chủ:</span>
                  <span className="font-semibold">[SERVER_LOCATION_PLACEHOLDER]</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-6">Lưu ý quan trọng</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#142684]">Yêu cầu môi trường:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Hệ điều hành: [OS_REQUIREMENT_PLACEHOLDER]</li>
                <li>• Trình duyệt: [BROWSER_REQUIREMENT_PLACEHOLDER]</li>
                <li>• Kết nối internet: [INTERNET_REQUIREMENT_PLACEHOLDER]</li>
                <li>• Độ phân giải màn hình: [RESOLUTION_PLACEHOLDER]</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#142684]">Bảo mật & Tuân thủ:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Chứng chỉ bảo mật: [SECURITY_CERT_PLACEHOLDER]</li>
                <li>• Tuân thủ: [COMPLIANCE_PLACEHOLDER]</li>
                <li>• Mã hóa dữ liệu: [DATA_ENCRYPTION_PLACEHOLDER]</li>
                <li>• Kiểm tra bảo mật: [SECURITY_AUDIT_PLACEHOLDER]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemGuidelinesSection;
