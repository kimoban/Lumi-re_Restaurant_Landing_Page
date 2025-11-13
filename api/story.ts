export default async function handler(_req: any, res: any) {
  try {
    const { storage } = await import("../server/storage.ts");
    try {
      const story = await storage.getStory();
      res.status(200).json(story);
    } catch (inner) {
      res.status(500).json({ error: "Failed to fetch story", detail: String(inner) });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to load storage module", detail: String(err) });
  }
}
