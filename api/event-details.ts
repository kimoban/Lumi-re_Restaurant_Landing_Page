function parseJSONEnv<T>(key: string): T | undefined {
  const raw = process.env[key];
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export default async function handler(_req: any, res: any) {
  const envDetails = parseJSONEnv<any>("EVENT_DETAILS_JSON");
  if (envDetails) {
    return res.status(200).json(envDetails);
  }

  const details = {
    name: "Lumière",
    tagline: "Coastal Fine Dining, Reimagined",
    dates: "Now welcoming guests for the 2026 dining season",
    times: "Lunch: 12:30 PM, Dinner: 6:30 PM",
    location: {
      name: "Lumière Dining Room",
      address: "Cape Coast",
      city: "Ghana, West Africa",
      coordinates: { lat: 5.1053, lng: -1.2466 },
    },
    seatingInfo: "Limited to 24 guests per seating. Reservations required.",
    parkingInfo: "On-site guest parking available. Local taxi and ride services offer convenient access across Cape Coast.",
    contactEmail: "reservations@lumierecapecoast.com",
    contactPhone: "+233 20 555 1234",
  };

  res.status(200).json(details);
}
