import { PortfolioGallery } from "@/components/ui/portfolio-gallery";

// Metadata ini dibaca oleh Google saat merayapi halaman /portfolio
export const metadata = {
  title: "Work Examples & Portfolio | Dotlinetattu Studio in Bali",
  description: "Explore our gallery of traditional handpoke, handtapping and custom machine tattoos by Silver Jerry at Dotlinetattu in Bali.",
  alternates: {
    canonical: "https://dotlinetattuhandpokebali.com/portfolio", // <-- Tambahan baris kanonis untuk kestabilan Google Search Console
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden bg-black text-white">
      
      {/* === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas
        FIX: Mengubah --color-gingerbread menjadi --gingerbread sesuai konfigurasi global
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        {/* SEO Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* REVISI KLIEN: Penggunaan kata "Work Example" */}
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Work Examples
          </span>
          <h1 className="text-5xl md:text-7xl font-graduated mb-6">
            <span className="text-gingerbread">PORTFOLIO</span>
          </h1>
          
          {/* === REVISI KLIEN: SEO LOKASI === 
            Menyisipkan Bali sebagai fokus utama, dan menargetkan Canggu, Ubud, Uluwatu, Denpasar
          */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            TATTOO PORTFOLIO BALI GEOMATRIC TRIBAL FUSION
            <br />
            <span className="block mt-3">EXPLORE OUR PORTFOLIO OF HANDPOKE TATTOO IN BALI, FEATURING CUSTOM GEOMATRIC TRIBAL FUSION DESIGNS. INSPIRED BY INDONESIAN TRIBAL PATTERNS AND STRUCTURED THROUGH MODERN GEOMATRY, EACH TATTOO IS CAREFULLY DESIGNED TO FIT THE BODY WITH PRECISION AND BALANCE. OUR WORK INCLUDES HANDPOKE, HAND TAPPING, MACHINE TATTOO TECHNIQUES, DELIVERING CLEAN, DETAILED, AND DISTINCTIVE RESULTS.</span>
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-gingerbread hover:bg-gingerbread-hover text-white px-7 py-3.5 text-sm md:text-base tracking-[0.2em] uppercase font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gingerbread/50"
          >
            BOOK YOUR TATTOO SESSION IN BALI
          </a>
        </div>

        {/* Memanggil Client Component */}
        <PortfolioGallery />

      </div>
    </div>
  );
}