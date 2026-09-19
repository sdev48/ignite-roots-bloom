import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/schoolData";

export function Hero() {
  return <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden pt-20 sm:min-h-[820px] lg:min-h-[92vh]">
    <img src={images.heroImage} alt="Students walking through a welcoming school campus" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
    <div className="hero-overlay absolute inset-0" />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8 sm:pb-28 lg:px-10 lg:pb-24"><div className="max-w-3xl animate-rise"><div className="mb-6 inline-flex items-center gap-2 border border-primary-foreground/25 bg-primary/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur"><MapPin className="size-4 text-gold" /> Kamtaul, Bihar</div><h1 className="font-display text-5xl leading-[1.02] font-semibold text-primary-foreground sm:text-6xl lg:text-8xl">Singapore<br />International School</h1><p className="mt-6 font-display text-xl text-gold sm:text-2xl">Shaping Minds. Building Futures.</p><p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">Providing a nurturing environment where students learn, grow, discover their potential, and prepare for a successful future.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="gold" size="xl"><a href="#about">Explore Our School <ArrowRight /></a></Button><Button asChild variant="heroOutline" size="xl"><a href="#contact">Admission Enquiry</a></Button></div></div></div>
    <a href="#about" className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/65 lg:flex">Discover <ArrowDown className="size-4 animate-bounce" /></a>
  </section>;
}
