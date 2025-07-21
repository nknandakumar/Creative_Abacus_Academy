"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import {
	Mail,
	MapPin,
	Phone,
	Clock,
	FileText,
	ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useState } from "react";

const formSchema = z.object({
	childName: z
		.string()
		.min(2, { message: "Child's name must be at least 2 characters." }),
	childAge: z.string().refine(
		(val) => {
			const num = parseFloat(val);
			return !isNaN(num) && num >= 3.5;
		},
		{ message: "Child's age must be 3.5 years or above." }
	),
	parentName: z
		.string()
		.min(2, { message: "Parent's name must be at least 2 characters." }),
	parentPhone: z
		.string()
		.min(10, { message: "Please enter a valid 10-digit phone number." }),
	message: z.string().optional(),
});

export default function Contact() {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			childName: "",
			childAge: "",
			parentName: "",
			parentPhone: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true);
		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
					name: values.parentName,
					message: `Child Name: ${values.childName}\nChild Age: ${
						values.childAge
					}\nParent Name: ${values.parentName}\nParent Phone: ${
						values.parentPhone
					}\nAdditional Message: ${values.message || ""}`,
				}),
			});
			const result = await response.json();
			if (result.success) {
				toast({
					title: "Enquiry Sent!",
					description:
						"Thank you for reaching out. We'll get back to you soon.",
					className: "bg-blue-600 text-white rounded-lg font-bold",
				});
				form.reset();
			} else {
				toast({
					title: "Submission Failed",
					description:
						result.message || "Something went wrong. Please try again.",
					variant: "destructive",
					className: "bg-blue-600 text-white rounded-lg font-bold",
				});
			}
		} catch (error) {
			toast({
				title: "Submission Failed",
				description: "Something went wrong. Please try again.",
				variant: "destructive",
				className: "bg-blue-600 text-white rounded-lg font-bold",
			});
		}
		setLoading(false);
	}

	return (
		<section
			id="contact"
			className="w-full bg-secondary py-12 md:py-24 lg:py-32"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<BlurFade delay={0.1} inView>
						<h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Ready for Your Child to Become a Mental Math Champion?
						</h2>
					</BlurFade>
					<BlurFade delay={0.2} inView>
						<p className="mt-4 text-muted-foreground md:text-xl">
							<span className="font-bold">
								Contact the best abacus center in Shivamogga
							</span>{" "}
							today and Enquiry
						</p>
					</BlurFade>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
					<div className="space-y-8 lg:col-span-2">
						<BlurFade delay={0.3} inView>
							{" "}
							<Card className="p-6 rounded-3xl">
								<h3 className="text-xl font-headline font-bold mb-4">
									Contact Information
								</h3>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<Phone className="h-5 w-5 text-accent mt-1" />
										<div>
											<p className="font-headline font-semibold">
												Phone/WhatsApp
											</p>
											<p className="text-sm text-muted-foreground">
												96634 44851
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<Mail className="h-5 w-5 text-accent mt-1" />
										<div>
											<p className="font-headline font-semibold">Email</p>
											<p className="text-sm text-muted-foreground">
												creativeabacusacademy@gmail.com
											</p>
										</div>
									</div>
								</div>
							</Card>
						</BlurFade>
						<BlurFade delay={0.4} inView>
							{" "}
							<Card className="p-6  rounded-3xl">
								<div className="flex items-start gap-4">
									<MapPin className="h-6 w-6 text-accent mt-1" />
									<div>
										<p className="font-headline font-semibold">
											Gandhinagar Branch
										</p>
										<p className="text-sm text-muted-foreground">
											2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream,
											Shimoga
										</p>
									</div>
								</div>
								<Button
									asChild
									variant="outline"
									className="w-full bg-accent rounded-full hover:underline text-primary-foreground font-headline mt-4"
								>
									<a
										href="https://maps.app.goo.gl/uR9yT8RJGrdAPCVu7"
										target="_blank"
										rel="noopener noreferrer"
									>
										Get Directions <ExternalLink className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</Card>
						</BlurFade>

						<BlurFade delay={0.4} inView>
							<Card className="p-6 rounded-3xl">
								<div className="flex items-start gap-4">
									<MapPin className="h-6 w-6 text-accent mt-1" />
									<div>
										<p className="font-headline font-semibold">
											SominaKoppa Branch
										</p>
										<p className="text-sm text-muted-foreground">
											Devraj Aras Badavane, Somina Koppa, Shivamogga
										</p>
									</div>
								</div>
								<Button
									asChild
									variant="outline"
									className="w-full bg-accent rounded-full hover:underline text-primary-foreground font-headline mt-4"
								>
									<a
										href="https://maps.app.goo.gl/uvabzkhwgQRY9jkAA"
										target="_blank"
										rel="noopener noreferrer"
									>
										Get Directions <ExternalLink className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</Card>
						</BlurFade>
					</div>

					<div className="lg:col-span-3">
						<BlurFade delay={0.3} inView>
							<Card className="p-6 rounded-3xl sm:p-8">
								<h3 className="text-2xl font-bold mb-2">
									Enquiry & Admission Form
								</h3>

								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-6"
									>
										<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
											<FormField
												control={form.control}
												name="childName"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Child's Name *</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter child's full name"
																{...field}
															/>
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
															<Input
																placeholder="Age (3.5 years and above)"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="parentName"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Parent's Name *</FormLabel>
														<FormControl>
															<Input
																placeholder="Enter parent's full name"
																{...field}
															/>
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
															<Input
																placeholder="Enter phone number"
																{...field}
															/>
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
														<Textarea
															placeholder="Any questions or special requirements?"
															{...field}
															rows={4}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<Button
											type="submit"
											size="lg"
											className="w-full rounded-full font-headline bg-accent text-accent-foreground hover:bg-accent/90 relative"
											disabled={loading}
										>
											{loading ? (
												<span className="flex items-center justify-center">
													<svg
														className="animate-spin h-5 w-5 mr-2 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
														></path>
													</svg>
													Submitting...
												</span>
											) : (
												"Submit Enquiry"
											)}
										</Button>
									</form>
								</Form>
							</Card>
						</BlurFade>
						<BlurFade delay={0.5} inView>
							<Card className="p-6 rounded-3xl sm:p-8 mt-8">
								<h3 className="text-2xl  font-bold mb-2">
									Required Documents for Admission
								</h3>
								<ul className="list-disc pl-5 space-y-2 marker:text-accent marker:marker-large text-muted-foreground">
									<li>Recent Passport-sized Photograph of the child</li>
									<li>Copy of the Child's Aadhar Card</li>
									<li>Copy of the Child's Birth Certificate</li>
								</ul>
							</Card>
						</BlurFade>
					</div>
				</div>
			</div>
		</section>
	);
}
