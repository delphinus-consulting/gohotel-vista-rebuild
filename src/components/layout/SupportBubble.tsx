
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Headset, MessageCircle, MessageSquare, Phone } from "lucide-react";

export function SupportBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="rounded-full w-14 h-14 bg-[#142684] hover:bg-[#0f1f6b] shadow-lg animate-pulse"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 mr-2">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Hỗ trợ trực tuyến</h4>
              <p className="text-sm text-muted-foreground">
                Chọn kênh liên hệ phù hợp với bạn.
              </p>
            </div>
            <div className="grid gap-2">
              <Button asChild variant="outline" className="justify-start">
                <a href="tel:0888806196">
                  <Phone className="mr-2 h-4 w-4" />
                  Hotline: 0888.806.196
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <a
                  href="https://zalo.me/0888806196"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat qua Zalo
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-start">
                <a href="/contact">
                  <Headset className="mr-2 h-4 w-4" />
                  Hỗ trợ OTA & khác
                </a>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
