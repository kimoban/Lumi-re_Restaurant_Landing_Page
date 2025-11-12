import { useQuery } from "@tanstack/react-query";
import type { Story } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export function StorySection() {
  const { data: story, isLoading, error } = useQuery<Story>({
    queryKey: ["/api/story"],
  });

  if (isLoading) {
    return (
      <section
        id="story"
        className="py-24 md:py-32 px-6"
        data-testid="section-story"
      >
        <div className="max-w-3xl mx-auto">
          <Skeleton className="h-12 w-96 mx-auto mb-16" />
          <div className="space-y-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !story) {
    return (
      <section
        id="story"
        className="py-24 md:py-32 px-6"
        data-testid="section-story"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load story content.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="story"
      className="py-24 md:py-32 px-6"
      data-testid="section-story"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display text-4xl md:text-5xl font-light text-center mb-16 tracking-wide"
          data-testid="text-story-title"
        >
          {story.title}
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          {story.paragraphs.map((paragraph, index) => (
            <p key={index} data-testid={`text-story-paragraph-${index + 1}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
