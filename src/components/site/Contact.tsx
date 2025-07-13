'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, FileText } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Enquiry Sent!',
      description: "Thank you for reaching out. We'll get back to you soon to secure your admission slot.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enquiry & Admission Form
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Fill out the form below to secure your admission slot.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold">Our Branches</h3>
                    <p className="text-muted-foreground">**Gandhinagar:** 2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
                    <p className="text-muted-foreground">**Devraj Aras Badavane:** Somina Koppa, Shivamogga</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-2">
                        <Link href="https://maps.google.com" target='_blank'>Get Directions on Google Maps</Link>
                    </Button>
                    </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">96634 44851</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@creativeabacus.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Hours</h3>
                  <p className="text-muted-foreground">Mon–Sat: 10 AM–6 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-lg sm:p-8">
              <CardContent className="p-0">
                 <div className="flex items-center gap-4 border border-dashed p-4 rounded-lg mb-6">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                        <h4 className="font-semibold">Required Documents:</h4>
                        <p className="text-sm text-muted-foreground">Recent Photo, Aadhar Card, Birth Certificate</p>
                    </div>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Parent or Guardian Name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message, child's name, and age..." {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Submit Enquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
