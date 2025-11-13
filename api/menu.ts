import { storage } from "../server/storage";

export default async function handler(_req: any, res: any) {
  try {
    const items = await storage.getMenuItems();
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
}
