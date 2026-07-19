"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/components/providers/audio-provider";
import Link from "next/link";

const tattooServices = [
  {
    id: "handpoke",
    title: "HANDPOKE TATTOO BALI",
    subtitle: "Manual Precision",
    locationLabel: "NORTH KUTA",
    image: "/Handpoke.jpeg",
    description: "SEARCHING FOR A TRADITIONAL HANDPOKE TATTOO IN BALI? OUR HANDPOKE BY DOTLINETATTU FOCUS ON SPECIALIZE CUSTOM GEOMATRIC TRIBAL FUSION DESIGN, CREATED WITH PRECISION, INTENTIONAL APPROACH."
  },
  {
    id: "handtapping",
    title: "TRADITIONAL HAND TAPPING TATTOO",
    subtitle: "Traditional Bali Art",
    locationLabel: "BALI",
    image: "/Handtapping.jpeg",
    description: "EXPERIENCE TRADITIONAL HAND TAPPING TATTOO IN BALI, ROOTED IN ANCIENT TRIBAL TRADITIONS EACH PIECE IS CRAFTED WITH A RAW AND NATURAL APPROACH, CREATING AN AUTHENTIC AND MEANINGFUL SIGNATURE."
  },
  {
    id: "tattooing",
    title: "TATTOO MACHINE",
    subtitle: "Modern Ink",
    locationLabel: "NEAR CANGGU",
    image: "/Machine.jpeg",
    description: "LOOKING FOR A FINELINE TATTOO IN BALI? OUR MACHINE TATTOO SERVICE SPECIALIZES IN MINIMALIST AND ORNAMENTAL CUSTOM DESIGN DELIVERING CLEAN, PRECISE, AND DETAILED RESULTS TAILORED TO YOUR STYLE."
  },
  {
    id: "piercing",
    title: "PIERCING",
    subtitle: "Professional Studio",
    locationLabel: "BALI STUDIO",
    image: "/professional-piercing.jpeg",
    description: "Complete your body art journey at the safest and most trusted piercing studio in Bali. We use medical-grade jewelry and strict sterilization protocols, making us the top recommendation for locals and tourists in the North Kuta area."
  }
];

export default function HomeClient() {
  const { isPlaying } = useAudio();
  // Right-side accordion active tab (5s auto-advance)
  const [activeTab, setActiveTab] = useState(0);
  // Left-side image index (3s auto-advance)
  const [imageIndex, setImageIndex] = useState(0);

  // Auto-advance the accordion tabs every 5 seconds
  useEffect(() => {
    const tabTimer = setInterval(() => {
      setActiveTab((current) => (current + 1) % tattooServices.length);
    }, 5000);
    return () => clearInterval(tabTimer);
  }, []);

  // Auto-advance the left image preview every 3 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((current) => (current + 1) % tattooServices.length);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-gingerbread selection:text-white overflow-hidden font-graduated">
      
      {/* Background Glow - Gingerbread dominant accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,var(--gingerbread)_0%,transparent_70%)] opacity-25 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-svh lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-20">
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center mt-12 md:mt-0">
          <p className="text-gingerbread font-medium tracking-widest uppercase mb-4 md:mb-6 block animate-in slide-in-from-bottom duration-700 text-[10px] md:text-xs">
            Authentic traditional tattoo studio in bali
          </p>
          
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.9] md:leading-none font-graduated mb-6 md:mb-8 animate-in slide-in-from-bottom duration-1000 delay-150 text-gingerbread">
            THE BEST TATTOO EXPERIENCE IN BALI
          </h1>
          
          <div className="max-w-[92%] md:max-w-3xl mb-10 md:mb-12 animate-in fade-in duration-1000 delay-300">
            <div className="border border-gingerbread/25 bg-white/5 backdrop-blur-sm px-5 py-4 md:px-8 md:py-6 text-gingerbread/90 shadow-[0_0_0_1px_rgba(216,104,58,0.12)]">
              <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] leading-7 font-medium">
                Dotlinetattu handpoke and hand tapping tattoo in Bali.
              </p>
              <p className="mt-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.24em] leading-7">
                Authentic tattoo studio specializing in geometric tribal fusion.
              </p>
              <div className="mt-4 space-y-2 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] leading-7 text-gingerbread/80">
                <p>Looking for a handpoke tattoo in Bali or traditional hand tapping tattoo?</p>
                <p>Dotlinetattu creates custom geometric tribal fusion designs using precise manual techniques and refined detail.</p>
                <p>Based in Bali, we create clean, detailed tattoos designed to flow naturally with your body.</p>
                <p className="pt-1 font-semibold text-gingerbread">Book your session and create your signature in Bali.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20 px-4 sm:px-0">
            <Link href="https://wa.me/6281234567890" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-gingerbread hover:bg-gingerbread-hover text-white px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg transition-all duration-200" 
                size="lg"
                aria-label="Book Your Premium Tattoo Consultation at Dotlinetattu"
              >
                BOOK YOUR SESSION HERE
              </Button>
            </Link>
            
            <Link className="w-full sm:w-auto" href="https://www.instagram.com/dotlinetattu" target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full sm:w-auto border-white/20 px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg hover:bg-white hover:text-black transition-all duration-200" 
                size="lg" 
                variant="outline"
                aria-label="View Our Portfolio of Tattoo Designs and Work"
              >
                VIEW PORTFOLIO
              </Button>
            </Link>
          </div>
        </div>

        {!isPlaying && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-0 animate-pulse opacity-50 pointer-events-none text-center w-full">
            <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">Tap anywhere to play audio</p>
          </div>
        )}
      </section>

      {/* Local SEO & Service Showcase Section */}
      <section className="py-16 lg:py-24 bg-black/40 border-y border-white/5 overflow-hidden relative z-10 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            <div className="w-full lg:w-5/12 relative group order-2 lg:order-1">
              <div className="relative aspect-square md:aspect-4/5 w-full overflow-hidden border border-white/10 rounded-sm lg:rounded-none">
                <div 
                  className="relative w-full h-full"
                  role="region"
                  aria-label={`Service showcase: ${tattooServices[imageIndex].title}`}
                  aria-live="polite"
                >
                  {tattooServices.map((service, index) => (
                    <img
                      key={service.id}
                      src={service.image}
                      alt={`${service.title} Tattoo - Premium Traditional and Modern Ink at Dotlinetattu Bali Studio`}
                      aria-hidden={imageIndex !== index}
                      className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out ${imageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-3 md:space-y-4">
                <span className="text-(--gingerbread) font-medium tracking-widest text-[10px] uppercase">Local Expertise</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-graduated leading-tight text-(--gingerbread)">
                  THE BEST TATTOO EXPERIENCE IN BALI
                </h2>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                <span className="text-white font-medium uppercase tracking-[0.2em]">THE BEST HANDPOKE TATTOO IN BALI AND TRADITIONAL HAND-TAPPING BALI EXPERIENCE.</span>
                <br />
                <span className="block mt-2">TRADITIONAL HANDPOKE TATTOO IN BALI AND HAND-TAPPING BASED IN CANGGU, BALI. PROUDLY WELCOMES CLIENTS AROUND BALI AND ACROSS THE GLOBE.</span>
              </p>

              <div className="flex flex-col gap-3" role="tablist" aria-label="Tattoo service selection tabs">
                {tattooServices.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gingerbread/50 ${
                      activeTab === index
                        ? 'border-gingerbread bg-gingerbread/15 text-gingerbread shadow-[0_0_0_1px_rgba(216,104,58,0.45)]'
                        : 'border-white/10 text-white hover:border-gingerbread hover:text-gingerbread hover:bg-white/5'
                    }`}
                    aria-label={`${service.title} service tab${activeTab === index ? ', active' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-lg font-graduated tracking-[0.15em] uppercase">{service.title}</span>
                      <span className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeTab === index ? 'bg-gingerbread' : 'bg-white/20'}`} />
                    </div>
                    {activeTab === index && <p className="text-xs text-gingerbread mt-3 leading-relaxed">{service.description}</p>}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}