import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import type { SocialProof } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SocialProofSection() {
  const { data, isLoading, error } = useQuery<SocialProof>({
    queryKey: ["/api/social-proof"],
  });

  if (isLoading) {
    return (
      <section
        id="reviews"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-social-proof"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Skeleton className="h-5 w-40 mx-auto" />
            <Skeleton className="h-12 w-80 mx-auto" />
            <Skeleton className="h-6 w-[36rem] max-w-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="p-8 border-card-border">
                <Skeleton className="h-24 w-full mb-8" />
                <Skeleton className="h-4 w-32" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section
        id="reviews"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-social-proof"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load guest reviews.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reviews"
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-social-proof"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.35em] text-muted-foreground"
            data-testid="text-social-proof-kicker"
          >
            {data.title}
          </p>
          <h2
            className="mt-4 font-display text-4xl md:text-5xl font-light tracking-wide"
            data-testid="text-social-proof-title"
          >
            The room people talk about after dinner
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
            data-testid="text-social-proof-subtitle"
          >
            {data.subtitle}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-border bg-background px-6 py-5 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Guest signal</p>
          <p className="mt-3 text-lg text-foreground/80" data-testid="text-social-proof-summary">
            {data.reviewSummary}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {data.testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.guestName}
              className="flex h-full flex-col justify-between border-card-border bg-background p-8"
              data-testid={`card-testimonial-${index + 1}`}
            >
              <div>
                <Quote className="h-8 w-8 text-primary/70" />
                <p
                  className="mt-6 text-lg leading-relaxed text-foreground/85"
                  data-testid={`text-testimonial-quote-${index + 1}`}
                >
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-5">
                <p className="font-medium text-foreground" data-testid={`text-testimonial-name-${index + 1}`}>
                  {testimonial.guestName}
                </p>
                <p className="mt-1 text-sm text-muted-foreground" data-testid={`text-testimonial-context-${index + 1}`}>
                  {testimonial.guestContext}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
          <p className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">Featured in</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {data.pressMentions.map((mention, index) => (
              <div
                key={mention}
                className="rounded-2xl border border-border bg-card px-4 py-5 font-display text-lg font-light tracking-wide text-foreground/80"
                data-testid={`text-press-mention-${index + 1}`}
              >
                {mention}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}