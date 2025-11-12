import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { MenuHighlights } from "@/components/menu-highlights";
import { AmbianceGallery } from "@/components/ambiance-gallery";
import { EventDetails } from "@/components/event-details";
import { PrintableMenu } from "@/components/printable-menu";
import { ReservationFooter } from "@/components/reservation-footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <MenuHighlights />
      <AmbianceGallery />
      <EventDetails />
      <PrintableMenu />
      <ReservationFooter />
    </div>
  );
}
