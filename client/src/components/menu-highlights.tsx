import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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

export function MenuHighlights() {
  const { data: menuItems, isLoading, error } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  if (isLoading) {
    return (
      <section
        id="menu"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-menu"
      >
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-6 w-[500px] mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-0 border-card-border">
                <Skeleton className="aspect-square w-full" />
                <div className="p-6 space-y-2">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !menuItems) {
    return (
      <section
        id="menu"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-menu"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load menu items.</p>
        </div>
      </section>
    );
  }
  return (
    <section
      id="menu"
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-menu"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display text-4xl md:text-5xl font-light text-center mb-6 tracking-wide"
          data-testid="text-menu-title"
        >
          Signature Dishes
        </h2>
        <p
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
          data-testid="text-menu-subtitle"
        >
          A curated selection of our most celebrated creations, showcasing seasonal ingredients and innovative techniques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover-elevate group p-0 border-card-border"
              data-testid={`card-dish-${item.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={imageMap[item.id] || item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-dish-${item.id}`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className="font-display text-2xl font-light tracking-wide"
                    data-testid={`text-dish-name-${item.id}`}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="font-body text-lg text-muted-foreground"
                    data-testid={`text-dish-price-${item.id}`}
                  >
                    ${item.price}
                  </span>
                </div>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`text-dish-description-${item.id}`}
                >
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
