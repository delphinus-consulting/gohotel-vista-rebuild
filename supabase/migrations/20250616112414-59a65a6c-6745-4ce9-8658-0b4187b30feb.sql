
-- Drop the existing contacts table and recreate it with proper RLS policies
DROP TABLE IF EXISTS public.contacts;

-- Create a new contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  room_count INT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert new contacts (for public contact forms)
CREATE POLICY "Anyone can insert new contacts" 
ON public.contacts 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Create a policy that allows authenticated users to view all contacts (for admin purposes)
CREATE POLICY "Authenticated users can view all contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated 
USING (true);
