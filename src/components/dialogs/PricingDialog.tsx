
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  company_name: z.string().min(1, { message: "Tên khách sạn không được để trống" }),
  name: z.string().min(1, { message: "Họ tên không được để trống" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().min(1, { message: "Số điện thoại không được để trống" }),
});

interface PricingDialogProps {
  children: React.ReactNode;
  packageType: string;
  title: string;
}

export const PricingDialog = ({ children, packageType, title }: PricingDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await supabase
      .from('contacts')
      .insert({
        company_name: values.company_name,
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: `Quan tâm đến ${packageType}`,
      });

    if (error) {
      toast({
        title: "Có lỗi xảy ra!",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Thành công!",
        description: "Yêu cầu của bạn đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm.",
      });
      form.reset();
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên khách sạn</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên khách sạn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập họ tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Nhập email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Nhập số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-[#142684] hover:bg-[#0f1f6b] text-lg py-3">
              Gửi yêu cầu
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
