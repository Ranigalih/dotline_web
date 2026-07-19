import Image from "next/image";

export const metadata = {
  title: "About Dotline Tattoo Bali | Traditional Tattoo Studio",
  description: "Learn about Dotline Tattoo Bali, a premier tattoo studio. Specializing in traditional Balinese handpoke, handtapping, and custom machine tattoos.",
  alternates: {
    canonical: "https://dotlinetattuhandpokebali.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden bg-black text-white">
      
      {/* Efek Cahaya Burn Ginger - Menggunakan token global yang aman */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        
        {/* SEO Header & Philosophy */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-4xl md:text-6xl font-graduated mb-8 leading-tight">
            ABOUT <span className="text-gingerbread">Dotlinetattu</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
            "THE AUTHENTIC TRADITIONAL HANDPOKE TATTOO IN BALI AND HAND TAPPING BALI TATTOO STUDIO, SPECIALIZE ON CUSTOM GEOMATRIC TRIBAL FUSION."
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              LOCATED IN THE HEART ARTISTIC HEART OF BALI, DOTLINETATTU IS THE AUTHENTIC BALI TATTOO STUDIO SPECIALIZING IN HANDPOKE TATTOO, HAND TAPPING AND MACHINE TATTOO TECHNIQUES.
            </p>
            <p>
              WE FOCUS ON GEOMATRIC TRIBAL FUSION DESIGNS, COMBINING TRADITIONAL INFLUENCE WITH MODERN STRUCTURE AND PRECISION.
            </p>
            <p>
              OUR STUDIO WELCOMES CLIENTS FROM CANGGU, UBUD, ULUWATU, DENPASAR, AND AROUND THE WORLD, OFFERING A CLEAN, PRIVATE, AND FOCUSED TATTOO EXPERIENCE IN BALI.
            </p>
            <p>
              OUR WORK IS INSPIRED BY INDONESIAN TRIBAL PATTERNS, ANCIENT ORNAMENTS AND GEOMATRIC BALANCE.
            </p>
            <p>
              EACH DESIGN IS CAREFULLY DEVELOPED INTO A CUSTOM PIECE, ADAPTED TO THE BODY WITH ATTENTION TO FLOW, SYMMETRY AND DETAIL.
            </p>
            <p>
              THE RESULT IS A DISTINCTIVE FUSION OF TRADITIONAL ELEMENTS AND MODERN TATTOO AESTHETICS.
            </p>
          </div>
        </div>

        {/* SEO Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-y border-white/10 py-16 text-justify">
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">TRADITIONAL TATTOO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              WE OFFER TRADITIONAL HANDPOKE AND HAND TAPPING TATTOO IN BALI, HANDPOKE IDEAL FOR GEOMATRIC AND FINE LINE DESIGNS, THIS METHOD PROVIDES A MORE CONTROLLED AND REFINED RESULT, HAND TAPPING IDEAL TO CREATES BOLD, RAW, AND NATURALLY TEXTURED DESIGN, FOR TRIBAL AND LARGE SCALE COMPOSITIONS.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">MODERN TATTOO MACHINE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              WE ALSO PROVIDE MACHINE TATTOO SERVICES IN BALI, SPECIALIZING IN FINE LINE, ORNAMENTAL, AND CUSTOM GEOMATRIC DESIGNS. USING HIGH QUALITY EQUIPMENT, WE DELIVER CLEAN, SHARP, AND LONG LASTING RESULT.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">PIERCING STUDIO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We also provide professional <strong>Body Piercing services</strong>. Operating with strict hygiene standards and premium medical-grade jewelry, ensuring a safe and comfortable piercing experience in Bali.
            </p>
          </div>
        </div>

        {/* Artist & Collaborator Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Silver Jerry */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Pembungkus luar menggunakan relative agar Next.js Image fill berfungsi normal */}
            <div className="w-full md:w-1/2 aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative group">
              <Image 
                src="/jerry.jpeg" 
                alt="Silver Jerry - Lead Tattoo Artist in Bali" 
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Lead Tattoo Artist</span>
              <h3 className="text-4xl font-graduated">SILVER JERRY</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                THE CREATIVE FORCE BEHIND DOTLINETATTU HANDPOKE TATTOO BALI-BASED. HE SPECIALIZES IN CUSTOM DESIGN, TRANSFORMING ANCIENT INDONESIAN TRIBAL PATTERNS INTO CONTEMPORARY GEOMATRIC TRIBAL FUSION TATTOOS WITH PRECISE AND DETAILED EXECUTION.
              </p>
              <a href="https://www.instagram.com/dotlinetattu?igsh=dmYxejk0cXN6c2d3" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gingerbread hover:text-white transition-colors text-sm font-medium tracking-widest uppercase pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Follow Work
              </a>
            </div>
          </div>

          {/* RA.VA.NA */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Music & Art Collaborator</span>
              <h3 className="text-4xl font-graduated">RA.VA.NA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Through an electronic music approach rooted in traditional nuances, his presence adds a new layer to our video process. It is a meeting of two practices, uniting rhythm, atmosphere, and energy where sound and ink lines coexist simultaneously.
              </p>
              <a href="https://www.instagram.com/ra.va.na?igsh=MWd3N2JjanJiOWcwaw== " target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gingerbread hover:text-white transition-colors text-sm font-medium tracking-widest uppercase pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Discover Music
              </a>
            </div>
            <div className="w-full md:w-1/2 aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative group order-1 md:order-2">
              <Image 
                src="/ravana.jpeg" 
                alt="RA.VA.NA - Music Collaborator Dotlinetattu" 
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}