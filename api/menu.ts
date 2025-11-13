export default async function handler(_req: any, res: any) {
  try {
    const { storage } = await import("../server/storage");
    try {
      const items = await storage.getMenuItems();
      res.status(200).json(items);
    } catch (inner) {
      res.status(500).json({ error: "Failed to fetch menu items", detail: String(inner) });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to load storage module", detail: String(err) });
  }
}
