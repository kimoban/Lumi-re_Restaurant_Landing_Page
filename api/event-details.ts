export default async function handler(_req: any, res: any) {
  const details = {
    name: "Lumière",
    tagline: "An Intimate Culinary Journey",
    dates: "February 14-28, 2025",
    times: "First Seating: 6:00 PM, Second Seating: 8:30 PM",
    location: {
      name: "The Gallery Warehouse",
      address: "425 Arts District Boulevard",
      city: "Downtown, CA 90013",
      coordinates: { lat: -37.817209, lng: 144.953736 },
    },
    seatingInfo: "Limited to 24 guests per seating. Reservations required.",
    parkingInfo: "Valet available on-site. Metro accessible via Arts District station.",
    contactEmail: "reservations@lumierepopup.com",
    contactPhone: "(213) 555-1234",
  };

  res.status(200).json(details);
}
