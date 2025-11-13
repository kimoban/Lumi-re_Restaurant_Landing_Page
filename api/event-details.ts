export default async function handler(_req: any, res: any) {
  try {
    const { storage } = await import("../server/storage");
    try {
      const details = await storage.getEventDetails();
      res.status(200).json(details);
    } catch (inner) {
      res.status(500).json({ error: "Failed to fetch event details", detail: String(inner) });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to load storage module", detail: String(err) });
  }
}
