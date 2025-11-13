import { storage } from "../server/storage";

export default async function handler(_req: any, res: any) {
  try {
    const details = await storage.getEventDetails();
    res.status(200).json(details);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch event details" });
  }
}
