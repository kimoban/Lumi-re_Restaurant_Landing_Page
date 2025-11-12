import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu", async (_req, res) => {
    try {
      const menuItems = await storage.getMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  app.get("/api/event-details", async (_req, res) => {
    try {
      const eventDetails = await storage.getEventDetails();
      res.json(eventDetails);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event details" });
    }
  });

  app.get("/api/story", async (_req, res) => {
    try {
      const story = await storage.getStory();
      res.json(story);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch story" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
