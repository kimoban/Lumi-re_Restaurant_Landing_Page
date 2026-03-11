import { useQuery } from "@tanstack/react-query";
import { Clock3, Sparkles, Wine } from "lucide-react";
import type { TastingExperience } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function formatCedis(amount: number) {
  return `₵${amount.toLocaleString("en-GH")}`;
}

export function ChefsTasting() {
  const { data, isLoading, error } = useQuery<TastingExperience>({
    queryKey: ["/api/tasting-experience"],
  });

  const scrollToReservation = () => {
    const section = document.getElementById("reserve");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <section
        id="tasting"
        className="py-24 md:py-32 px-6"
        data-testid="section-tasting"
      >
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden border-card-border bg-primary text-primary-foreground">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-16 space-y-6">
                <Skeleton className="h-5 w-32 bg-white/15" />
                <Skeleton className="h-12 w-72 bg-white/15" />
                <Skeleton className="h-20 w-full bg-white/10" />
                <Skeleton className="h-12 w-40 bg-white/15" />
              </div>
              <div className="p-8 md:p-12 lg:p-16 space-y-4 bg-black/10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-16 w-full bg-white/10" />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section
        id="tasting"
        className="py-24 md:py-32 px-6"
        data-testid="section-tasting"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load the tasting experience.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="tasting"
      className="py-24 md:py-32 px-6"
      data-testid="section-tasting"
    >
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden border-[hsl(var(--primary))] bg-primary text-primary-foreground shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary-foreground/80"
                    data-testid="text-tasting-kicker"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {data.title}
                  </span>
                  <div className="space-y-3">
                    <h2
                      className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
                      data-testid="text-tasting-name"
                    >
                      {data.experienceName}
                    </h2>
                    <p
                      className="max-w-2xl text-base md:text-lg leading-relaxed text-primary-foreground/80"
                      data-testid="text-tasting-subtitle"
                    >
                      {data.subtitle}
                    </p>
                  </div>
                </div>

                <p
                  className="max-w-2xl text-lg leading-relaxed text-primary-foreground/90"
                  data-testid="text-tasting-description"
                >
                  {data.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/65">Menu</p>
                    <p className="mt-2 font-display text-3xl font-light" data-testid="text-tasting-price">
                      {formatCedis(data.price)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/65">
                      <Clock3 className="h-3.5 w-3.5" />
                      Seating
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90" data-testid="text-tasting-service-window">
                      {data.serviceWindow}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/65">
                      <Wine className="h-3.5 w-3.5" />
                      Pairing
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90" data-testid="text-tasting-pairing">
                      {data.winePairingNote}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/15 bg-black/10 p-5">
                  <p className="text-sm md:text-base text-primary-foreground/85" data-testid="text-tasting-availability">
                    {data.availabilityNote}
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-6 text-base text-secondary-foreground"
                    onClick={scrollToReservation}
                    data-testid="button-tasting-reserve"
                  >
                    {data.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/10 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Courses</p>
                  <p className="mt-2 font-display text-2xl font-light">Tonight's progression</p>
                </div>
                <span className="text-sm text-primary-foreground/60">{data.courses.length} courses</span>
              </div>

              <div className="space-y-4">
                {data.courses.map((course, index) => (
                  <div
                    key={course.course}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    data-testid={`card-tasting-course-${index + 1}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-primary-foreground/75">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/55">
                        {course.course}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-light" data-testid={`text-tasting-course-title-${index + 1}`}>
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75" data-testid={`text-tasting-course-description-${index + 1}`}>
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}