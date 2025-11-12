import { z } from "zod";

export const menuItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.enum(["appetizer", "entree", "dessert"]),
  imageUrl: z.string(),
});

export const eventDetailsSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  dates: z.string(),
  times: z.string(),
  location: z.object({
    name: z.string(),
    address: z.string(),
    city: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  }),
  seatingInfo: z.string(),
  parkingInfo: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
});

export const storySchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()),
});

export type MenuItem = z.infer<typeof menuItemSchema>;
export type EventDetails = z.infer<typeof eventDetailsSchema>;
export type Story = z.infer<typeof storySchema>;
