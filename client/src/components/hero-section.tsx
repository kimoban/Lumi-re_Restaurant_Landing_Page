import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Moody_bistro_hero_background_01582527.png";

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide"
          data-testid="text-hero-title"
        >
          Lumière
        </h1>
        <p
          className="font-body text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide"
          data-testid="text-hero-subtitle"
        >
          An Intimate Culinary Journey
        </p>
        <p
          className="font-body text-lg md:text-xl text-white/80 mb-12 font-light"
          data-testid="text-hero-dates"
        >
          February 14-28, 2025 • Downtown Arts District
        </p>
        <Button
          size="lg"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-6 text-base"
          data-testid="button-reserve-hero"
          onClick={() => {
            const element = document.getElementById("reserve");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Reserve Your Seat
        </Button>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
