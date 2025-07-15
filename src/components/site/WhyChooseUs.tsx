import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import badge from "../../../public/badge1.svg"
import location from "../../../public/location1.svg"
import certificate from "../../../public/certificate.svg"
import { cn } from "@/lib/utils";
import { Plus } from 'lucide-react';
import { NumberTicker } from "@/components/magicui/number-ticker";

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={100}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
  );
}

export default function WhyChooseUs() {
  const avatarSrc = 'https://pagedone.io/asset/uploads/1704275541.png';

  return (
    <section id="why-choose-us" className="w-full  py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
          Discover what makes us the <span className=' font-bold' >best abacus center in Shivamogga</span> with ISO certification and proven track record.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 md:grid-rows-5 gap-4 md:h-[600px] lg:h-[500px]">

          {/* Location Card */}
          <Card
            className={cn(
              "p-6 bg-[#FCD0D1] rounded-3xl flex md:flex-col gap-2 justify-between  ",
              'md:col-span-2 md:row-span-4'
            )}
          >
          

              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl lg:text-4xl font-bold">Two Convineint Location </CardTitle>
              </CardHeader>
             
            
            <Image src={location} width={80} height={80} className='md:w-full md:h-full md:overflow-hidden' alt="Location SVG" />
          </Card>

 {/* Students Card */}
          <Card
            className={cn(
              "p-4 bg-[#DFF15E]  rounded-3xl flex flex-col gap-4 ",
              'md:col-span-2 md:row-span-2 md:col-start-3'
            )}
          >

            <div className="flex flex-row  gap-2 justify-start items-center ">

              <div className="flex  -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 border-2 border-white rounded-full overflow-hidden">
                    <Image
                      src={avatarSrc}
                      alt="Stacked rounded avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
              <NumberTicker
                value={100}
                className=" font-extrabold text-4xl text-black dark:text-white"
              /> <span className="text-4xl font-extrabold text-black dark:text-white" >+</span>
            </div>




            <CardHeader className="p-0">
              <CardTitle className="font-headline text-3xl lg:text-4xl font-bold">Students Trained</CardTitle>
            </CardHeader>


          </Card>

          {/* Teachers Card */}
          <Card
            className={cn(
              "p-6 bg-[#B2A0F0] rounded-3xl flex flex-col justify-center  ",
              'md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3'
            )}
          >
            <div className='flex items-start md:flex-col lg:flex-row  '>


              <Image src={badge} width={80} height={80} className=' md:w-[100] md:h-[100]   lg:w-[150] lg:h-[150]' alt="SVG Badge" />
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl lg:text-4xl font-bold">Professional </CardTitle>
                <CardTitle className="font-headline text-3xl lg:text-4xl font-bold flex gap-2 "> {"   "}   Teachers </CardTitle>
              </CardHeader>
            </div>
          </Card>

          {/* ISO Certified Card */}
          <Card
            className={cn(
              "p-6 bg-[#080808]  rounded-3xl flex md:flex-col justify-between ",
              'md:col-span-2 md:row-span-4 md:col-start-5 md:row-start-1'
            )}
          >
            

              <CardHeader className="p-0 md:text-center  md:order-2  ">
                <CardTitle className="font-headline text-white text-3xl  font-bold">ISO Certified Academy</CardTitle>
              </CardHeader>
             
            
            <Image src={certificate} width={80} height={80} className='md:w-full md:h-full md:order-1 md:overflow-hidden' alt="Location SVG" />
          </Card>
        </div>


      </div>
    </section>
  );
}