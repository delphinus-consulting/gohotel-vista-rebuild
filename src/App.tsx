
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import TinTuc from "./pages/TinTuc";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductBoard from "./pages/ProductBoard";
import ProductTheTu from "./pages/ProductTheTu";
import ProductKhoa from "./pages/ProductKhoa";
import { SupportBubble } from "@/components/layout/SupportBubble";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/san-pham/board-dieu-khien-nguon-dien" element={<ProductBoard />} />
          <Route path="/san-pham/the-tu" element={<ProductTheTu />} />
          <Route path="/san-pham/khoa-thong-minh" element={<ProductKhoa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/tin-tuc/:slug" element={<ArticleDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SupportBubble />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
