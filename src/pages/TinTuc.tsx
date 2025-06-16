
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp, 
  Hotel, 
  Users,
  BarChart3,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from '@/components/layout/Header';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TinTuc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const articlesPerPage = 6;

  const featuredNews = {
    id: "ai-chatbot-247",
    title: "Ra mắt tính năng AI Chatbot tự động hỗ trợ khách hàng 24/7",
    excerpt: "Công nghệ trí tuệ nhân tạo giúp khách sạn tương tác với khách hàng mọi lúc, tăng tỷ lệ đặt phòng lên 40%",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "15/06/2025",
    readTime: "5 phút đọc",
    category: "Công nghệ"
  };

  const allArticles = [
    {
      id: "xu-huong-du-lich-2025",
      title: "Xu hướng du lịch 2025: Khách sạn boutique và trải nghiệm cá nhân hóa",
      excerpt: "Phân tích về sự thay đổi trong hành vi du lịch và cách khách sạn có thể thích ứng",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "12/06/2025",
      readTime: "7 phút đọc",
      category: "Xu hướng",
      author: "Nguyễn Minh Anh"
    },
    {
      id: "toi-uu-gia-phong",
      title: "Cách tối ưu hóa giá phòng theo mùa để tăng doanh thu",
      excerpt: "Hướng dẫn chi tiết về revenue management và dynamic pricing cho khách sạn",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "10/06/2025",
      readTime: "6 phút đọc",
      category: "Kinh doanh",
      author: "Trần Văn Khoa"
    },
    {
      id: "bao-mat-du-lieu",
      title: "Bảo mật dữ liệu khách hàng: Những điều cần biết năm 2025",
      excerpt: "Các quy định mới về bảo vệ dữ liệu cá nhân và cách tuân thủ",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "08/06/2025",
      readTime: "4 phút đọc",
      category: "Bảo mật",
      author: "Lê Thị Hương"
    },
    {
      id: "tich-hop-pms",
      title: "Tích hợp hệ thống PMS với các kênh đặt phòng trực tuyến",
      excerpt: "Hướng dẫn kết nối với Booking.com, Agoda, Expedia để tăng độ phủ",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "05/06/2025",
      readTime: "8 phút đọc",
      category: "Hướng dẫn",
      author: "Phạm Đức Thành"
    },
    // Additional articles for pagination demo
    {
      id: "chatbot-ai-trends",
      title: "Tương lai của AI trong ngành khách sạn: Từ chatbot đến robot phục vụ",
      excerpt: "Khám phá những ứng dụng AI tiên tiến đang thay đổi trải nghiệm khách hàng",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "03/06/2025",
      readTime: "6 phút đọc",
      category: "Công nghệ",
      author: "Nguyễn Minh Anh"
    },
    {
      id: "sustainable-hotel",
      title: "Xu hướng khách sạn xanh và phát triển bền vững",
      excerpt: "Làm thế nào để xây dựng một khách sạn thân thiện với môi trường",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "01/06/2025",
      readTime: "5 phút đọc",
      category: "Xu hướng",
      author: "Lê Thị Hương"
    },
    {
      id: "mobile-checkin",
      title: "Mobile Check-in: Tối ưu trải nghiệm khách hàng thời đại số",
      excerpt: "Hướng dẫn triển khai hệ thống check-in di động hiệu quả",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "28/05/2025",
      readTime: "7 phút đọc",
      category: "Hướng dẫn",
      author: "Trần Văn Khoa"
    },
    {
      id: "revenue-optimization",
      title: "10 chiến lược tối ưu doanh thu cho khách sạn vừa và nhỏ",
      excerpt: "Những phương pháp đã được chứng minh để tăng RevPAR và ADR",
      image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "25/05/2025",
      readTime: "9 phút đọc",
      category: "Kinh doanh",
      author: "Phạm Đức Thành"
    }
  ];

  const categories = [
    { name: "Tất cả", count: allArticles.length + 1, active: selectedCategory === "Tất cả" },
    { name: "Công nghệ", count: allArticles.filter(a => a.category === "Công nghệ").length + 1 },
    { name: "Xu hướng", count: allArticles.filter(a => a.category === "Xu hướng").length },
    { name: "Kinh doanh", count: allArticles.filter(a => a.category === "Kinh doanh").length },
    { name: "Hướng dẫn", count: allArticles.filter(a => a.category === "Hướng dẫn").length },
    { name: "Bảo mật", count: allArticles.filter(a => a.category === "Bảo mật").length }
  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "Tất cả" 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#142684] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin tức & Cập nhật
            </h1>
            <p className="text-xl mb-8">
              Những thông tin mới nhất về công nghệ quản lý khách sạn và xu hướng ngành
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#142684]">
                  {featuredNews.category}
                </Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {featuredNews.date}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {featuredNews.readTime}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <Button asChild className="bg-[#142684] hover:bg-[#0f1f6b]">
                  <Link to={`/tin-tuc/${featuredNews.id}`}>
                    Đọc tiếp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories and Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div>
              <h3 className="text-xl font-bold mb-6">Danh mục</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-[#142684] text-white' 
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Thống kê</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Lượt xem</span>
                    </div>
                    <span className="font-semibold">15.2K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">Độc giả</span>
                    </div>
                    <span className="font-semibold">8.7K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm">Đánh giá</span>
                    </div>
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "Tất cả" ? "Bài viết mới nhất" : `Bài viết ${selectedCategory}`}
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Mới nhất</option>
                  <option>Phổ biến nhất</option>
                  <option>Nhiều lượt xem</option>
                </select>
              </div>

              {currentArticles.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {currentArticles.map((article) => (
                      <Card key={article.id} className="hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-3 left-3 bg-[#142684]">
                            {article.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {article.date}
                            <Clock className="h-4 w-4 ml-3 mr-1" />
                            {article.readTime}
                          </div>
                          <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                            <Link 
                              to={`/tin-tuc/${article.id}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              {article.author}
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/tin-tuc/${article.id}`}>
                                Đọc tiếp
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination className="justify-center">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) setCurrentPage(currentPage - 1);
                            }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                        
                        {[...Array(totalPages)].map((_, i) => (
                          <PaginationItem key={i + 1}>
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(i + 1);
                              }}
                              isActive={currentPage === i + 1}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                            }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Không có bài viết nào trong danh mục này.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleCategoryChange("Tất cả")}
                  >
                    Xem tất cả bài viết
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#142684]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Đăng ký nhận tin mới nhất
            </h2>
            <p className="text-blue-100 mb-8">
              Nhận thông báo về các bài viết mới, cập nhật tính năng và xu hướng ngành khách sạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6">
                Đăng ký
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
              <div className="flex items-center space-x-2 mb-6">
                <Hotel className="h-8 w-8 text-[#142684]" />
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

export default TinTuc;
