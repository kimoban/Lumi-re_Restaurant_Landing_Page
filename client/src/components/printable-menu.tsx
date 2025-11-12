import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import type { MenuItem } from "@shared/schema";
import scallopsImg from "@assets/generated_images/Seared_scallops_signature_dish_22aa565e.png";
import steakImg from "@assets/generated_images/Wagyu_steak_signature_dish_cf081c50.png";
import dessertImg from "@assets/generated_images/Chocolate_dessert_signature_dish_713c45e1.png";
import oystersImg from "@assets/generated_images/Oysters_appetizer_dish_c78a41ea.png";
import pastaImg from "@assets/generated_images/Pasta_carbonara_signature_dish_f547b1a1.png";
import octopusImg from "@assets/generated_images/Grilled_octopus_signature_dish_7290cf5f.png";

const imageMap: Record<string, string> = {
  "1": scallopsImg,
  "2": oystersImg,
  "3": octopusImg,
  "4": steakImg,
  "5": pastaImg,
  "6": dessertImg,
};

export function PrintableMenu() {
  const printRef = useRef<HTMLDivElement>(null);
  const { data: menuItems, isLoading, error } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const handlePrint = () => {
    if (!menuItems || isLoading) {
      return;
    }
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const appetizers = menuItems?.filter((item) => item.category === "appetizer") || [];
  const entrees = menuItems?.filter((item) => item.category === "entree") || [];
  const desserts = menuItems?.filter((item) => item.category === "dessert") || [];

  return (
    <>
      <section className="py-24 md:py-32 px-6" data-testid="section-printable-menu">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-6 tracking-wide"
            data-testid="text-print-menu-title"
          >
            Take Our Menu Home
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Download or print our complete menu with beautiful food photography
          </p>
          <Button
            size="lg"
            onClick={handlePrint}
            className="gap-2"
            disabled={isLoading || !!error || !menuItems}
            data-testid="button-print-menu"
          >
            <Download className="w-5 h-5" />
            {isLoading ? "Loading Menu..." : error ? "Menu Unavailable" : "Download Menu"}
          </Button>
        </div>
      </section>

      <div ref={printRef} className="print-only">
        <style>{`
          @media print {
            /* Hide everything except print content */
            body * {
              visibility: hidden;
            }
            .print-only, .print-only * {
              visibility: visible;
            }
            .print-only {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white;
              padding: 2rem;
            }
            
            /* Hide non-print sections - use visibility instead of display */
            nav,
            header,
            [data-testid="section-hero"],
            [data-testid="section-story"],
            [data-testid="section-menu"],
            [data-testid="section-ambiance"],
            [data-testid="section-details"],
            [data-testid="section-printable-menu"],
            [data-testid="section-footer"] {
              visibility: hidden !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            
            /* Page settings */
            @page {
              margin: 1.5cm;
              size: A4;
            }
            
            /* Optimize text for print */
            body {
              font-size: 12pt;
              line-height: 1.5;
              color: black;
            }
            
            /* Prevent page breaks inside elements */
            h1, h2, h3 {
              page-break-after: avoid;
            }
            
            img {
              max-width: 100%;
              page-break-inside: avoid;
            }
          }
          
          /* Hide print-only content on screen */
          .print-only {
            display: none;
          }
          
          @media print {
            .print-only {
              display: block;
            }
          }
        `}</style>

        <div className="max-w-4xl mx-auto font-body">
          <div className="text-center mb-12 border-b-2 border-black pb-8">
            <h1 className="font-display text-5xl font-light mb-2 text-black">
              Lumière
            </h1>
            <p className="text-lg text-gray-700">An Intimate Culinary Journey</p>
            <p className="text-sm text-gray-600 mt-2">
              February 14-28, 2025 • Downtown Arts District
            </p>
          </div>

          {menuItems && (
            <div className="space-y-12">
              {appetizers.length > 0 && (
                <div>
                  <h2 className="font-display text-3xl font-light mb-6 text-black border-b border-gray-300 pb-2">
                    Appetizers
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {appetizers.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <img
                          src={imageMap[item.id] || item.imageUrl}
                          alt={item.name}
                          className="w-full aspect-square object-cover rounded mb-2"
                        />
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-display text-xl text-black">
                            {item.name}
                          </h3>
                          <span className="text-gray-700">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {entrees.length > 0 && (
                <div>
                  <h2 className="font-display text-3xl font-light mb-6 text-black border-b border-gray-300 pb-2">
                    Entrées
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {entrees.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <img
                          src={imageMap[item.id] || item.imageUrl}
                          alt={item.name}
                          className="w-full aspect-square object-cover rounded mb-2"
                        />
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-display text-xl text-black">
                            {item.name}
                          </h3>
                          <span className="text-gray-700">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {desserts.length > 0 && (
                <div>
                  <h2 className="font-display text-3xl font-light mb-6 text-black border-b border-gray-300 pb-2">
                    Desserts
                  </h2>
                  <div className="grid grid-cols-1 gap-6 max-w-md">
                    {desserts.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <img
                          src={imageMap[item.id] || item.imageUrl}
                          alt={item.name}
                          className="w-full aspect-square object-cover rounded mb-2"
                        />
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-display text-xl text-black">
                            {item.name}
                          </h3>
                          <span className="text-gray-700">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 pt-8 border-t-2 border-black text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>The Gallery Warehouse</strong> • 425 Arts District Boulevard
              • Downtown, CA 90013
            </p>
            <p className="mb-2">
              Reservations: (213) 555-1234 • reservations@lumierepopup.com
            </p>
            <p>Limited seating available • Reservations required</p>
          </div>
        </div>
      </div>
    </>
  );
}
