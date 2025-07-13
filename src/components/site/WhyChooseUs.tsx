import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { UserCheck, Award, GraduationCap, Trophy } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';


export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We provide a unique learning experience that sets the foundation for your child&apos;s future success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 md:grid-rows-5 gap-4 md:h-[600px] lg:h-[500px]">

          {/* ISO-Certified Excellence Card */}
          <Card
            className={cn(
              "p-6 bg-[#FCD0D1] rounded-2xl flex flex-col justify-between  ",
              'md:col-span-2 md:row-span-4'
            )}
          >
            <div className='flex flex-col'>

              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl lg:text-3xl font-bold">Two Convineint Location </CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-muted-foreground text-sm lg:text-base">

              </CardDescription>
            </div>

          </Card>


          <Card
            className={cn(
              "p-6 bg-[#FBE8B3]  rounded-2xl flex flex-col justify-between ",
              'md:col-span-2 md:row-span-2 md:col-start-3'
            )}
          >
            
            <div className='flex flex-col'>
              
                    <CardHeader className="p-0">
                      <CardTitle className="font-headline text-xl lg:text-2xl font-bold">Expert Trainers</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-muted-foreground text-sm lg:text-base">
                      With over 15 years of combined experience, our trainers are dedicated to nurturing each child&apos;s potential.
                    </CardDescription>
                  </div>
                </Card>

                {/* Holistic Brain Development Card */}
                <Card
                  className={cn(
                    "p-6 bg-[#CDFAD2] rounded-2xl flex flex-col justify-between ",
                    'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3'
                  )}
                >
                  <div className='flex flex-col'>

                    <CardHeader className="p-0">
                      <CardTitle className="font-headline text-xl lg:text-2xl font-bold">Holistic Brain Development</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-muted-foreground text-sm lg:text-base">
                      We go beyond math, enhancing focus, memory, and confidence through our specialized curriculum.
                    </CardDescription>
                  </div>
                </Card>

                {/* Championship Prep Card */}
                <Card
                  className={cn(
                    "p-6 bg-[#080808]  rounded-2xl flex flex-col justify-between ",
                    'md:col-span-2 md:row-span-4 md:col-start-5 md:row-start-1'
                  )}
                >
                  <div className='flex flex-col'>

                    <CardHeader className="p-0">
                      <CardTitle className="font-headline text-white text-xl lg:text-2xl font-bold">Championship Prep</CardTitle>
                    </CardHeader>
                    <CardDescription className="mt-2 text-muted-foreground text-sm lg:text-base">
                      We coach for regional & national finger abacus exams, turning students into champions.
                    </CardDescription>
                  </div>

                </Card>
              </div>


            </div>
          </section>
          );
}