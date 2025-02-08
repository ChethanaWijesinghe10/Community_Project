
import { MainCarousel } from "@/components/hero";
import { FeaturedItems } from "@/components/featured";
import { Truck, TimerReset, FastForward } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import PrescriptionForm from "@/components/ui/PrescriptionForm";
import AboutPage from "@/components/ui/about";






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <MainCarousel />
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Featured Items</h1>
      <FeaturedItems/>
      <Divider />
      <AboutPage />
      
      
      
      
    </main>
  );
}



export function Divider() {
  return (
    <div>
      <div className="space-y-10 mt-20">
        {/* <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-xl font-semibold">
        <Truck className="mr-2 h-8 w-8" /> Delivery Facilities
        <Separator orientation="vertical" />
        <TimerReset className="mr-4 h-6 w-6" /> &nbsp; Daily 8.00 a.m. - 8.00 p.m.
        <Separator orientation="vertical" />
        <FastForward className="mr-2 h-6 w-6" /> &nbsp; Easy & Convinient
      </div>
    </div>
  )
  
}




