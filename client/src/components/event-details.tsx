import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Calendar, Clock, Users, Car, Phone, Mail } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { EventDetails as EventDetailsType } from "@shared/schema";

export function EventDetails() {
  const { data: eventDetails, isLoading, error } = useQuery<EventDetailsType>({
    queryKey: ["/api/event-details"],
  });

  if (isLoading) {
    return (
      <section
        id="details"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-details"
      >
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Skeleton className="h-[400px] lg:h-[500px] rounded-lg" />
            <Card className="p-8 md:p-12 space-y-8 border-card-border">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (error || !eventDetails) {
    return (
      <section
        id="details"
        className="py-24 md:py-32 px-6 bg-card"
        data-testid="section-details"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load event details.</p>
        </div>
      </section>
    );
  }
  return (
    <section
      id="details"
      className="py-24 md:py-32 px-6 bg-card"
      data-testid="section-details"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display text-4xl md:text-5xl font-light text-center mb-16 tracking-wide"
          data-testid="text-details-title"
        >
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-card-border">
            <iframe
              src="https://www.google.com/maps?q=Cape+Coast,+Ghana&z=13&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cape Coast Location"
              data-testid="map-location"
            />
          </div>

          <Card className="p-8 md:p-12 space-y-8 border-card-border" data-testid="card-details">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-1" data-testid="text-location-label">
                    Location
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-location-address">
                    {eventDetails.location.name}
                    <br />
                    {eventDetails.location.address}
                    <br />
                    {eventDetails.location.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-1" data-testid="text-dates-label">
                    Availability
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-dates-value">
                    {eventDetails.dates}
                    <br />
                    Reservations recommended for lunch and dinner service
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-1" data-testid="text-hours-label">
                    Seating Times
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-hours-value">
                    {eventDetails.times}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-1" data-testid="text-seating-label">
                    Capacity
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-seating-value">
                    {eventDetails.seatingInfo}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl mb-1" data-testid="text-parking-label">
                    Parking & Transit
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-parking-value">
                    {eventDetails.parkingInfo}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a
                    href={`tel:${eventDetails.contactPhone.replace(/[^0-9+]/g, '')}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-phone"
                  >
                    {eventDetails.contactPhone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a
                    href={`mailto:${eventDetails.contactEmail}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-email"
                  >
                    {eventDetails.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
