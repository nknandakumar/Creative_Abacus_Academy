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
import { Mail, MapPin, Phone, Clock, FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  childName: z.string().min(2, { message: "Child's name must be at least 2 characters." }),
  childAge: z.string().min(1, { message: "Please enter a valid age." }),
  parentPhone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: '',
      childAge: '',
      parentPhone: '',
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
          Ready for Your Child to Become a Mental Math Champion?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
         <span className='font-bold' >Contact the best abacus center in Shivamogga</span> today and Enquiry
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-5 ">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <Card className="p-4 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone/WhatsApp</p>
                      <p className="text-sm text-muted-foreground">96634 44851</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@creativeabacus.com</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">School Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Sat: 10 AM–6 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="space-y-6">
                <Card className="p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Gandhinagar Branch</p>
                      <p className="text-sm text-muted-foreground">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4">
                     <a href="https://maps.app.goo.gl/r6fJ9FkPZ3tJ3S9M9" target="_blank" rel="noopener noreferrer">
                        Get Directions <ExternalLink className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
                </Card>
                 <Card className="p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Devraj Aras Badavane Branch</p>
                      <p className="text-sm text-muted-foreground">Somina Koppa, Shivamogga</p>
                    </div>
                  </div>
                   <Button asChild variant="outline" className="w-full mt-4">
                     <a href="https://maps.app.goo.gl/vN38R8r5w6J5WqC76" target="_blank" rel="noopener noreferrer">
                        Get Directions <ExternalLink className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-lg sm:p-8">
              <h3 className="text-2xl font-bold mb-2">Enquiry & Admission Form</h3>
              <p className="text-sm text-muted-foreground mb-6">Required Documents: Recent Photo, Aadhar Card, Birth Certificate</p>
              <CardContent className="p-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="childName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child's Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter child's full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="childAge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child's Age *</FormLabel>
                            <FormControl>
                              <Input placeholder="Age (5-14 years)" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="parentPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent's Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter phone number" {...field} />
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
                              <Input placeholder="Enter email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any questions or special requirements?" {...field} rows={4} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Submit Enquiry & Secure Admission Slot
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
