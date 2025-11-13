import { storage } from "../server/storage";

export default async function handler(_req: any, res: any) {
  try {
    const story = await storage.getStory();
    res.status(200).json(story);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch story" });
  }
}
