import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Heart,
  BookmarkPlus,
  Eye
} from "lucide-react";
import { Header } from '@/components/layout/Header';

// Sample article data - in a real app this would come from a database
const articles = {
  "ai-chatbot-247": {
    id: "ai-chatbot-247",
    title: "Ra mắt tính năng AI Chatbot tự động hỗ trợ khách hàng 24/7",
    content: `
      <p class="mb-4">Trong bối cảnh ngành khách sạn ngày càng cạnh tranh, việc cung cấp dịch vụ chăm sóc khách hàng tốt nhất là yếu tố quyết định sự thành công. Hiểu được điều này, chúng tôi tự hào giới thiệu tính năng AI Chatbot mới nhất - một giải pháp thông minh giúp khách sạn tương tác với khách hàng mọi lúc, mọi nơi.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Tại sao cần AI Chatbot?</h2>
      <p class="mb-4">Khách hàng ngày nay mong đợi được phục vụ ngay lập tức, bất kể thời gian nào trong ngày. Việc duy trì đội ngũ hỗ trợ 24/7 không chỉ tốn kém mà còn khó quản lý. AI Chatbot của chúng tôi giải quyết vấn đề này một cách hiệu quả:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Phản hồi tức thì các câu hỏi thường gặp</li>
        <li class="mb-2">Hỗ trợ đặt phòng và kiểm tra tình trạng phòng</li>
        <li class="mb-2">Cung cấp thông tin về dịch vụ và tiện ích</li>
        <li class="mb-2">Xử lý khiếu nại và yêu cầu đặc biệt</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Các tính năng nổi bật</h2>
      <p class="mb-4">AI Chatbot được trang bị công nghệ xử lý ngôn ngữ tự nhiên tiên tiến, có khả năng:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Hiểu tiếng Việt tự nhiên:</strong> Chatbot có thể hiểu và phản hồi bằng tiếng Việt một cách tự nhiên</li>
        <li class="mb-2"><strong>Học từ dữ liệu:</strong> Hệ thống học hỏi từ các cuộc hội thoại để cải thiện độ chính xác</li>
        <li class="mb-2"><strong>Tích hợp đa kênh:</strong> Hoạt động trên website, Facebook Messenger, Zalo</li>
        <li class="mb-2"><strong>Báo cáo chi tiết:</strong> Cung cấp thống kê về hiệu suất và sự hài lòng của khách hàng</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Kết quả đạt được</h2>
      <p class="mb-4">Các khách sạn đã triển khai AI Chatbot của chúng tôi đã ghi nhận những cải thiện đáng kể:</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div class="text-sm text-gray-600">Tăng tỷ lệ đặt phòng</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">60%</div>
            <div class="text-sm text-gray-600">Giảm thời gian phản hồi</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div class="text-sm text-gray-600">Độ hài lòng khách hàng</div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Cách thức triển khai</h2>
      <p class="mb-4">Việc tích hợp AI Chatbot vào hệ thống quản lý khách sạn của bạn được thực hiện đơn giản qua 3 bước:</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">Cấu hình thông tin cơ bản về khách sạn và dịch vụ</li>
        <li class="mb-2">Huấn luyện chatbot với dữ liệu câu hỏi thường gặp</li>
        <li class="mb-2">Kích hoạt và theo dõi hiệu suất qua dashboard</li>
      </ol>

      <p class="mb-4">Với sự hỗ trợ của đội ngũ kỹ thuật chuyên nghiệp, quá trình setup chỉ mất 1-2 ngày làm việc.</p>
    `,
    excerpt: "Công nghệ trí tuệ nhân tạo giúp khách sạn tương tác với khách hàng mọi lúc, tăng tỷ lệ đặt phòng lên 40%",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "15/06/2025",
    readTime: "5 phút đọc",
    category: "Công nghệ",
    author: "Nguyễn Minh Anh",
    views: 1245
  },
  "xu-huong-du-lich-2025": {
    id: "xu-huong-du-lich-2025",
    title: "Xu hướng du lịch 2025: Khách sạn boutique và trải nghiệm cá nhân hóa",
    content: `
      <p class="mb-4">Năm 2025 đánh dấu sự chuyển mình mạnh mẽ trong ngành du lịch với những xu hướng mới đang định hình lại cách khách hàng lựa chọn và trải nghiệm dịch vụ khách sạn. Từ sự gia tăng của khách sạn boutique đến nhu cầu cá nhân hóa trải nghiệm, ngành này đang chứng kiến những thay đổi căn bản.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Sự trỗi dậy của khách sạn boutique</h2>
      <p class="mb-4">Khách sạn boutique không còn là khái niệm xa lạ, nhưng năm 2025 chứng kiến sự bùng nổ thực sự của mô hình này. Khách du lịch hiện đại không chỉ tìm kiếm một nơi nghỉ ngơi mà là những trải nghiệm độc đáo và đáng nhớ.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Đặc điểm nổi bật của khách sạn boutique:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Thiết kế độc đáo, phản ánh văn hóa địa phương</li>
        <li class="mb-2">Quy mô nhỏ (20-100 phòng) để đảm bảo dịch vụ cá nhân hóa</li>
        <li class="mb-2">Tập trung vào câu chuyện thương hiệu và trải nghiệm</li>
        <li class="mb-2">Kết hợp với các nghệ sĩ và thương hiệu địa phương</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Cá nhân hóa trải nghiệm khách hàng</h2>
      <p class="mb-4">Công nghệ và dữ liệu đang cho phép khách sạn cung cấp trải nghiệm được cá nhân hóa ở mức độ chưa từng có. Từ việc ghi nhớ sở thích cá nhân đến dự đoán nhu cầu, khách sạn thông minh đang tạo ra những kỷ niệm khó quên.</p>
      
      <div class="bg-green-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-3">Ví dụ về cá nhân hóa:</h3>
        <ul class="list-disc pl-6">
          <li class="mb-2">Điều chỉnh nhiệt độ phòng tự động theo sở thích</li>
          <li class="mb-2">Gợi ý hoạt động dựa trên lịch sử đặt phòng</li>
          <li class="mb-2">Menu ăn uống được tùy chỉnh theo khẩu vị</li>
          <li class="mb-2">Dịch vụ spa và wellness cá nhân hóa</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Công nghệ thay đổi trải nghiệm</h2>
      <p class="mb-4">Công nghệ không chỉ là công cụ hỗ trợ mà đang trở thành một phần không thể thiếu trong trải nghiệm khách hàng:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Mobile Check-in/Check-out:</strong> Giảm thời gian chờ đợi, tăng tiện lợi</li>
        <li class="mb-2"><strong>Smart Room Controls:</strong> Điều khiển phòng qua ứng dụng di động</li>
        <li class="mb-2"><strong>AI Concierge:</strong> Hỗ trợ 24/7 qua chatbot thông minh</li>
        <li class="mb-2"><strong>Virtual Reality:</strong> Xem trước phòng và tiện ích</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Tác động đến quản lý khách sạn</h2>
      <p class="mb-4">Những xu hướng này đòi hỏi khách sạn phải thay đổi cách thức quản lý và vận hành:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-blue-600">Đầu tư vào nhân sự</h3>
          <p class="text-sm">Đào tạo đội ngũ để cung cấp dịch vụ cá nhân hóa và hiểu biết về công nghệ</p>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-green-600">Nâng cấp hệ thống</h3>
          <p class="text-sm">Đầu tư vào PMS hiện đại để thu thập và phân tích dữ liệu khách hàng</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Lời khuyên cho khách sạn</h2>
      <p class="mb-4">Để thành công trong bối cảnh mới này, khách sạn nên:</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">Tập trung vào việc xây dựng câu chuyện thương hiệu độc đáo</li>
        <li class="mb-2">Đầu tư vào công nghệ để thu thập và phân tích dữ liệu khách hàng</li>
        <li class="mb-2">Đào tạo nhân viên về kỹ năng dịch vụ cá nhân hóa</li>
        <li class="mb-2">Hợp tác với các doanh nghiệp địa phương để tạo trải nghiệm đa dạng</li>
        <li class="mb-2">Liên tục theo dõi và điều chỉnh dịch vụ dựa trên phản hồi khách hàng</li>
      </ol>

      <p class="mb-4">Xu hướng du lịch 2025 đem lại cả cơ hội và thách thức. Những khách sạn biết nắm bắt và thích ứng kịp thời sẽ tạo được lợi thế cạnh tranh bền vững trong thị trường ngày càng khốc liệt.</p>
    `,
    excerpt: "Phân tích về sự thay đổi trong hành vi du lịch và cách khách sạn có thể thích ứng",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "12/06/2025",
    readTime: "7 phút đọc",
    category: "Xu hướng",
    author: "Nguyễn Minh Anh",
    views: 892
  },
  "toi-uu-gia-phong": {
    id: "toi-uu-gia-phong",
    title: "Cách tối ưu hóa giá phòng theo mùa để tăng doanh thu",
    content: `
      <p class="mb-4">Revenue management hay quản lý doanh thu là một trong những yếu tố quyết định thành công của khách sạn. Việc tối ưu hóa giá phòng theo mùa không chỉ giúp tăng doanh thu mà còn cải thiện tỷ lệ lấp đầy và sự hài lòng của khách hàng.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Hiểu về Dynamic Pricing</h2>
      <p class="mb-4">Dynamic pricing là chiến lược định giá linh hoạt dựa trên nhiều yếu tố như cung cầu, thời điểm, sự kiện và hành vi khách hàng. Đây là công cụ mạnh mẽ giúp khách sạn tối đa hóa doanh thu.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-3">Các yếu tố ảnh hưởng đến giá phòng:</h3>
        <ul class="list-disc pl-6">
          <li class="mb-2">Mùa du lịch (cao điểm, thấp điểm)</li>
          <li class="mb-2">Ngày trong tuần (cuối tuần vs ngày thường)</li>
          <li class="mb-2">Sự kiện địa phương và lễ hội</li>
          <li class="mb-2">Tình hình cạnh tranh</li>
          <li class="mb-2">Tỷ lệ lấp đầy hiện tại</li>
          <li class="mb-2">Thời gian đặt phòng trước</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Phân tích mùa du lịch</h2>
      <p class="mb-4">Việc hiểu rõ chu kỳ mùa du lịch của địa phương là bước đầu tiên để xây dựng chiến lược pricing hiệu quả:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-green-600">Mùa cao điểm</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Tăng giá 20-50% so với giá cơ bản</li>
            <li>Áp dụng chính sách hủy chặt chẽ hơn</li>
            <li>Tăng thời gian lưu trú tối thiểu</li>
            <li>Tập trung vào khách hàng có khả năng chi trả cao</li>
          </ul>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-orange-600">Mùa thấp điểm</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Giảm giá 10-30% để kích thích cầu</li>
            <li>Chính sách hủy linh hoạt hơn</li>
            <li>Gói combo với dịch vụ ăn uống/spa</li>
            <li>Chương trình khuyến mãi dài hạn</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Chiến lược định giá theo segment khách hàng</h2>
      <p class="mb-4">Khách hàng khác nhau có mức độ nhạy cảm với giá khác nhau. Việc phân đoạn và áp dụng chiến lược pricing phù hợp là chìa khóa thành công:</p>
      
      <div class="space-y-4 mb-6">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="font-semibold text-blue-600">Khách doanh nhân</h3>
          <p class="text-sm">Ít nhạy cảm với giá, ưu tiên tiện lợi và dịch vụ chất lượng</p>
        </div>
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="font-semibold text-green-600">Khách du lịch nghỉ dưỡng</h3>
          <p class="text-sm">Nhạy cảm với giá hơn, quan tâm đến giá trị và trải nghiệm</p>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="font-semibold text-purple-600">Khách nhóm</h3>
          <p class="text-sm">Rất nhạy cảm với giá, cần chính sách giảm giá số lượng</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Công cụ và phần mềm hỗ trợ</h2>
      <p class="mb-4">Để thực hiện revenue management hiệu quả, khách sạn cần trang bị các công cụ phù hợp:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Revenue Management System (RMS):</strong> Tự động điều chỉnh giá dựa trên thuật toán</li>
        <li class="mb-2"><strong>Competitor Rate Intelligence:</strong> Theo dõi giá cạnh tranh thời gian thực</li>
        <li class="mb-2"><strong>Demand Forecasting:</strong> Dự báo nhu cầu dựa trên dữ liệu lịch sử</li>
        <li class="mb-2"><strong>Channel Management:</strong> Quản lý giá đồng bộ trên các kênh phân phối</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">KPIs quan trọng cần theo dõi</h2>
      <p class="mb-4">Để đánh giá hiệu quả chiến lược pricing, khách sạn cần theo dõi các chỉ số:</p>
      
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-blue-600 mb-2">ADR</div>
          <div class="text-sm">Average Daily Rate</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-green-600 mb-2">RevPAR</div>
          <div class="text-sm">Revenue per Available Room</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-purple-600 mb-2">TRevPAR</div>
          <div class="text-sm">Total Revenue per Available Room</div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Những lỗi thường gặp</h2>
      <p class="mb-4">Trong quá trình thực hiện revenue management, nhiều khách sạn mắc phải những sai lầm sau:</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">Chỉ tập trung vào tỷ lệ lấp đầy mà bỏ qua ADR</li>
        <li class="mb-2">Thay đổi giá quá thường xuyên gây khó chịu cho khách</li>
        <li class="mb-2">Không có chiến lược giá rõ ràng cho từng kênh phân phối</li>
        <li class="mb-2">Bỏ qua phân tích competitor và market trends</li>
        <li class="mb-2">Không đầu tư vào training cho đội ngũ reservation</li>
      </ol>

      <h2 class="text-2xl font-bold mb-4 mt-8">Kế hoạch triển khai</h2>
      <p class="mb-4">Để bắt đầu với revenue management, khách sạn có thể thực hiện theo các bước:</p>
      
      <div class="space-y-3 mb-6">
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
          <div>
            <h3 class="font-semibold">Phân tích dữ liệu lịch sử</h3>
            <p class="text-sm text-gray-600">Thu thập và phân tích dữ liệu 2-3 năm gần nhất</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
          <div>
            <h3 class="font-semibold">Xây dựng pricing strategy</h3>
            <p class="text-sm text-gray-600">Định nghĩa các rate categories và pricing rules</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
          <div>
            <h3 class="font-semibold">Triển khai công cụ</h3>
            <p class="text-sm text-gray-600">Đầu tư vào PMS và RMS phù hợp</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
          <div>
            <h3 class="font-semibold">Đào tạo nhân sự</h3>
            <p class="text-sm text-gray-600">Training team về revenue management concepts</p>
          </div>
        </div>
      </div>

      <p class="mb-4">Revenue management là một quá trình liên tục cần được điều chỉnh và tối ưu hóa thường xuyên. Với chiến lược đúng đắn và công cụ phù hợp, khách sạn có thể tăng doanh thu đáng kể mà vẫn duy trì sự hài lòng của khách hàng.</p>
    `,
    excerpt: "Hướng dẫn chi tiết về revenue management và dynamic pricing cho khách sạn",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "10/06/2025",
    readTime: "6 phút đọc",
    category: "Kinh doanh",
    author: "Trần Văn Khoa",
    views: 654
  },
  "bao-mat-du-lieu": {
    id: "bao-mat-du-lieu",
    title: "Bảo mật dữ liệu khách hàng: Những điều cần biết năm 2025",
    content: `
      <p class="mb-4">Trong thời đại số hóa, bảo mật dữ liệu khách hàng không chỉ là yêu cầu pháp lý mà còn là yếu tố quyết định uy tín và sự tồn tại của khách sạn. Năm 2025 đánh dấu những thay đổi quan trọng trong quy định bảo vệ dữ liệu cá nhân mà mọi doanh nghiệp cần nắm rõ.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Tại sao bảo mật dữ liệu quan trọng?</h2>
      <p class="mb-4">Khách sạn thu thập rất nhiều thông tin nhạy cảm từ khách hàng:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Thông tin cá nhân (tên, địa chỉ, số điện thoại)</li>
        <li class="mb-2">Thông tin tài chính (số thẻ tín dụng, thông tin thanh toán)</li>
        <li class="mb-2">Dữ liệu hành vi (lịch sử đặt phòng, sở thích)</li>
        <li class="mb-2">Thông tin nhạy cảm khác (hộ chiếu, visa)</li>
      </ul>

      <div class="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-3 text-red-800">Hậu quả của vi phạm bảo mật:</h3>
        <ul class="list-disc pl-6 text-red-700">
          <li class="mb-2">Phạt tiền lên đến 4% doanh thu hàng năm</li>
          <li class="mb-2">Mất lòng tin của khách hàng</li>
          <li class="mb-2">Thiệt hại về uy tín thương hiệu</li>
          <li class="mb-2">Chi phí khắc phục sự cố</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Quy định pháp lý mới năm 2025</h2>
      <p class="mb-4">Việt Nam đã ban hành Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân với những yêu cầu cụ thể:</p>
      
      <div class="space-y-4 mb-6">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="font-semibold text-blue-600">Nguyên tắc thu thập dữ liệu</h3>
          <p class="text-sm">Chỉ thu thập dữ liệu cần thiết, có sự đồng ý của chủ thể dữ liệu</p>
        </div>
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="font-semibold text-green-600">Quyền của khách hàng</h3>
          <p class="text-sm">Quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân</p>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="font-semibold text-purple-600">Thông báo vi phạm</h3>
          <p class="text-sm">Phải báo cáo sự cố trong vòng 72 giờ</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Các biện pháp bảo mật cần thiết</h2>
      <p class="mb-4">Khách sạn cần triển khai các biện pháp bảo mật đa lớp:</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">1. Bảo mật kỹ thuật</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Mã hóa dữ liệu:</strong> Encrypt dữ liệu khi lưu trữ và truyền tải</li>
        <li class="mb-2"><strong>Xác thực đa yếu tố (2FA):</strong> Cho tất cả tài khoản quản trị</li>
        <li class="mb-2"><strong>Tường lửa và IDS:</strong> Giám sát và chặn các truy cập bất thường</li>
        <li class="mb-2"><strong>Backup định kỳ:</strong> Sao lưu dữ liệu với mã hóa</li>
        <li class="mb-2"><strong>Cập nhật bảo mật:</strong> Patch hệ thống thường xuyên</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. Bảo mật quản lý</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Phân quyền truy cập:</strong> Nguyên tắc "least privilege"</li>
        <li class="mb-2"><strong>Đào tạo nhân viên:</strong> Nâng cao nhận thức về bảo mật</li>
        <li class="mb-2"><strong>Chính sách bảo mật:</strong> Quy trình xử lý dữ liệu rõ ràng</li>
        <li class="mb-2"><strong>Audit định kỳ:</strong> Kiểm tra và đánh giá bảo mật</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Compliance checklist</h2>
      <p class="mb-4">Để đảm bảo tuân thủ quy định, khách sạn cần hoàn thành các yêu cầu sau:</p>
      
      <div class="space-y-3 mb-6">
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Đăng ký hoạt động xử lý dữ liệu cá nhân</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Xây dựng chính sách bảo vệ dữ liệu cá nhân</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Thiết lập quy trình xử lý yêu cầu của khách hàng</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Triển khai biện pháp bảo mật kỹ thuật</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Đào tạo nhân viên về bảo vệ dữ liệu</span>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-3" disabled>
          <span class="text-sm">Thiết lập quy trình báo cáo sự cố</span>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Công nghệ hỗ trợ bảo mật</h2>
      <p class="mb-4">Các giải pháp công nghệ hiện đại giúp tăng cường bảo mật:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-blue-600">AI Security</h3>
          <p class="text-sm">Phát hiện anomaly và các mối đe dọa bảo mật tự động</p>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-green-600">Zero Trust Architecture</h3>
          <p class="text-sm">Xác thực mọi truy cập, không tin tưởng mặc định</p>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-purple-600">Blockchain</h3>
          <p class="text-sm">Đảm bảo tính toàn vẹn và không thể thay đổi của dữ liệu</p>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-orange-600">Privacy by Design</h3>
          <p class="text-sm">Tích hợp bảo mật từ khâu thiết kế hệ thống</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Kế hoạch ứng phó sự cố</h2>
      <p class="mb-4">Mọi khách sạn cần có kế hoạch ứng phó sự cố bảo mật:</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Phát hiện sự cố:</strong> Hệ thống monitoring 24/7</li>
        <li class="mb-2"><strong>Đánh giá tác động:</strong> Xác định mức độ nghiêm trọng</li>
        <li class="mb-2"><strong>Ngăn chặn:</strong> Cô lập hệ thống bị ảnh hưởng</li>
        <li class="mb-2"><strong>Thông báo:</strong> Báo cáo cơ quan chức năng và khách hàng</li>
        <li class="mb-2"><strong>Khắc phục:</strong> Sửa chữa lỗ hổng bảo mật</li>
        <li class="mb-2"><strong>Phục hồi:</strong> Khôi phục hoạt động bình thường</li>
        <li class="mb-2"><strong>Đánh giá:</strong> Rút kinh nghiệm và cải thiện</li>
      </ol>

      <h2 class="text-2xl font-bold mb-4 mt-8">Chi phí đầu tư bảo mật</h2>
      <p class="mb-4">Đầu tư vào bảo mật dữ liệu là khoản chi phí cần thiết:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-6">
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-2">2-5%</div>
            <div class="text-sm">% doanh thu IT nên đầu tư cho bảo mật</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600 mb-2">1:10</div>
            <div class="text-sm">Tỷ lệ chi phí phòng ngừa vs khắc phục</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-purple-600 mb-2">ROI+</div>
            <div class="text-sm">Bảo vệ uy tín thương hiệu</div>
          </div>
        </div>
      </div>

      <p class="mb-4">Bảo mật dữ liệu không chỉ là yêu cầu pháp lý mà còn là lợi thế cạnh tranh. Khách hàng ngày càng quan tâm đến việc thông tin cá nhân được bảo vệ như thế nào. Những khách sạn đầu tư đúng đắn vào bảo mật sẽ xây dựng được lòng tin và uy tín lâu dài.</p>
    `,
    excerpt: "Các quy định mới về bảo vệ dữ liệu cá nhân và cách tuân thủ",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "08/06/2025",
    readTime: "4 phút đọc",
    category: "Bảo mật",
    author: "Lê Thị Hương",
    views: 423
  },
  "tich-hop-pms": {
    id: "tich-hop-pms",
    title: "Tích hợp hệ thống PMS với các kênh đặt phòng trực tuyến",
    content: `
      <p class="mb-4">Trong thời đại của nền kinh tế số, việc có mặt trên nhiều kênh đặt phòng trực tuyến (OTA) không còn là lựa chọn mà là điều bắt buộc đối với mọi khách sạn. Tuy nhiên, quản lý inventory và giá phòng trên nhiều kênh khác nhau có thể trở thành ác mộng nếu không có hệ thống tích hợp hiệu quả.</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">Tầm quan trọng của Channel Integration</h2>
      <p class="mb-4">Tích hợp PMS (Property Management System) với các kênh OTA mang lại nhiều lợi ích:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>Đồng bộ inventory:</strong> Tránh tình trạng over-booking hay under-selling</li>
        <li class="mb-2"><strong>Quản lý giá tự động:</strong> Cập nhật giá đồng thời trên tất cả kênh</li>
        <li class="mb-2"><strong>Tiết kiệm thời gian:</strong> Giảm 70% thời gian quản lý manual</li>
        <li class="mb-2"><strong>Tăng visibility:</strong> Mở rộng độ phủ trên thị trường</li>
        <li class="mb-2"><strong>Tối ưu doanh thu:</strong> Tận dụng tối đa mọi cơ hội bán phòng</li>
      </ul>

      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 class="text-lg font-semibold mb-3">Thống kê thị trường OTA Việt Nam 2025:</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600 mb-2">65%</div>
            <div class="text-sm">Khách đặt phòng qua OTA</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600 mb-2">40%</div>
            <div class="text-sm">Tăng trưởng booking mobile</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-purple-600 mb-2">25+</div>
            <div class="text-sm">Kênh phân phối phổ biến</div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Các kênh OTA chính tại Việt Nam</h2>
      <p class="mb-4">Để tối đa hóa doanh thu, khách sạn nên có mặt trên các kênh chính:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-blue-600">Quốc tế</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Booking.com (thị phần lớn nhất)</li>
            <li>Agoda (mạnh tại Đông Nam Á)</li>
            <li>Expedia Group (Expedia, Hotels.com)</li>
            <li>Airbnb (segment ngắn hạn)</li>
          </ul>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2 text-green-600">Nội địa</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Traveloka (phát triển mạnh)</li>
            <li>Mytour.vn</li>
            <li>Ivivu.com</li>
            <li>Vntrip.vn</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Quy trình tích hợp từng bước</h2>
      <p class="mb-4">Việc tích hợp PMS với OTA cần được thực hiện có hệ thống:</p>
      
      <div class="space-y-4 mb-6">
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
          <div>
            <h3 class="font-semibold">Đánh giá hệ thống hiện tại</h3>
            <p class="text-sm text-gray-600">Kiểm tra khả năng API của PMS, xác định nhu cầu integration</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
          <div>
            <h3 class="font-semibold">Lựa chọn Channel Manager</h3>
            <p class="text-sm text-gray-600">Chọn công cụ trung gian kết nối PMS với các OTA</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
          <div>
            <h3 class="font-semibold">Thiết lập kết nối</h3>
            <p class="text-sm text-gray-600">Cấu hình API, mapping room types và rate plans</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
          <div>
            <h3 class="font-semibold">Testing và Go-live</h3>
            <p class="text-sm text-gray-600">Test đồng bộ dữ liệu và chính thức kích hoạt</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Các thách thức thường gặp</h2>
      <p class="mb-4">Trong quá trình tích hợp, khách sạn thường gặp phải những khó khăn:</p>
      
      <div class="space-y-4 mb-6">
        <div class="border-l-4 border-red-500 pl-4">
          <h3 class="font-semibold text-red-600">Rate Parity Issues</h3>
          <p class="text-sm">Khó duy trì giá đồng nhất trên các kênh do policies khác nhau</p>
        </div>
        <div class="border-l-4 border-orange-500 pl-4">
          <h3 class="font-semibold text-orange-600">Inventory Mismatches</h3>
          <p class="text-sm">Lag time trong đồng bộ dẫn đến sai lệch số phòng</p>
        </div>
        <div class="border-l-4 border-yellow-500 pl-4">
          <h3 class="font-semibold text-yellow-600">Commission Management</h3>
          <p class="text-sm">Phức tạp trong việc theo dõi và reconcile commission</p>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="font-semibold text-purple-600">Technical Challenges</h3>
          <p class="text-sm">API limitations, downtime, và data format conflicts</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Best Practices cho Channel Management</h2>
      <p class="mb-4">Để tối ưu hiệu quả kênh phân phối:</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">1. Pricing Strategy</h3>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Maintain rate parity để tránh conflicts với OTA</li>
        <li class="mb-2">Sử dụng dynamic pricing based on demand</li>
        <li class="mb-2">Đặt base rate trên website thấp hơn OTA 5-10%</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. Inventory Management</h3>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Đặt stop-sell rules để tránh over-booking</li>
        <li class="mb-2">Allocate inventory theo performance của từng kênh</li>
        <li class="mb-2">Monitor availability lag time</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. Content Optimization</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Standardize room descriptions và amenities</li>
        <li class="mb-2">Optimize photos cho từng kênh</li>
        <li class="mb-2">Update content thường xuyên</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Công cụ Channel Manager phổ biến</h2>
      <p class="mb-4">Một số giải pháp channel management được ưa chuộng:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2">SiteMinder</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Kết nối 400+ kênh booking</li>
            <li>Real-time synchronization</li>
            <li>Advanced reporting tools</li>
          </ul>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2">Cloudbeds</h3>
          <ul class="text-sm list-disc pl-4">
            <li>All-in-one PMS + Channel Manager</li>
            <li>Built-in booking engine</li>
            <li>Revenue management tools</li>
          </ul>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2">RateGain</h3>
          <ul class="text-sm list-disc pl-4">
            <li>AI-powered pricing</li>
            <li>Competition analysis</li>
            <li>Multi-property management</li>
          </ul>
        </div>
        <div class="border rounded-lg p-4">
          <h3 class="font-semibold mb-2">MyHotelOnline</h3>
          <ul class="text-sm list-disc pl-4">
            <li>Focus thị trường Việt Nam</li>
            <li>Local OTA connections</li>
            <li>Vietnamese support</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">ROI và Performance Metrics</h2>
      <p class="mb-4">Để đánh giá hiệu quả channel strategy:</p>
      
      <div class="grid md:grid-cols-4 gap-4 mb-6">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-lg font-bold text-blue-600 mb-2">ADR</div>
          <div class="text-sm">Average Daily Rate per channel</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-lg font-bold text-green-600 mb-2">Conversion</div>
          <div class="text-sm">Booking conversion rate</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-lg font-bold text-purple-600 mb-2">TRevPAR</div>
          <div class="text-sm">Total Revenue per Available Room</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-lg font-bold text-orange-600 mb-2">NRevPAR</div>
          <div class="text-sm">Net Revenue after commissions</div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-4 mt-8">Future Trends</h2>
      <p class="mb-4">Xu hướng phát triển của channel distribution:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2"><strong>AI-powered pricing:</strong> Tự động tối ưu giá theo real-time demand</li>
        <li class="mb-2"><strong>Voice booking:</strong> Tích hợp với trợ lý ảo (Alexa, Google)</li>
        <li class="mb-2"><strong>Social commerce:</strong> Booking trực tiếp qua social platforms</li>
        <li class="mb-2"><strong>Blockchain:</strong> Transparency trong commission và settlement</li>
        <li class="mb-2"><strong>Direct booking focus:</strong> Giảm dependency vào OTA</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">Lời khuyên triển khai</h2>
      <p class="mb-4">Để thành công với channel integration:</p>
      
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2">Bắt đầu với 2-3 kênh chính trước khi mở rộng</li>
        <li class="mb-2">Đầu tư vào training team về channel management</li>
        <li class="mb-2">Monitor performance daily trong giai đoạn đầu</li>
        <li class="mb-2">Xây dựng relationships với OTA account managers</li>
        <li class="mb-2">Có backup plan khi hệ thống gặp sự cố</li>
        <li class="mb-2">Thường xuyên review và optimize channel mix</li>
      </ol>

      <p class="mb-4">Tích hợp PMS với các kênh OTA là bước đi chiến lược giúp khách sạn tăng độ phủ thị trường và tối ưu doanh thu. Với sự chuẩn bị kỹ lưỡng và công cụ phù hợp, khách sạn có thể khai thác tối đa tiềm năng của thời đại số.</p>
    `,
    excerpt: "Hướng dẫn kết nối với Booking.com, Agoda, Expedia để tăng độ phủ",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "05/06/2025",
    readTime: "8 phút đọc",
    category: "Hướng dẫn",
    author: "Phạm Đức Thành",
    views: 789
  }
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
          <Link to="/tin-tuc" className="text-blue-600 hover:underline">
            ← Quay lại trang tin tức
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = Object.values(articles)
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link to="/tin-tuc" className="hover:text-blue-600">Tin tức</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/tin-tuc" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại tin tức
            </Link>
            
            <Badge className="mb-4 bg-[#142684]">{article.category}</Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {article.views} lượt xem
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Yêu thích
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Lưu bài viết
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Chia sẻ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Bài viết liên quan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 left-3 bg-[#142684]">
                        {relatedArticle.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        <Link 
                          to={`/tin-tuc/${relatedArticle.id}`} 
                          className="hover:text-blue-600"
                        >
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {relatedArticle.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-8 w-8 text-[#142684]" />
                <span className="text-2xl font-bold">gohotel.vn</span>
              </div>
              <p className="text-gray-400 mb-4">
                Giải pháp quản lý khách sạn thông minh và hiện đại
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quản lý đặt phòng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quản lý khách hàng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Báo cáo thống kê</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tích hợp thanh toán</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tin tức</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cập nhật sản phẩm</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sự kiện</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Khuyến mãi</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 gohotel.vn. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
