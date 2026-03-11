import { type MenuItem, type EventDetails, type Story } from "../shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  getEventDetails(): Promise<EventDetails>;
  getStory(): Promise<Story>;
}

export class MemStorage implements IStorage {
  private menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Sekondi Sea Scallops",
      description: "Seared scallops, coconut-citrus butter, grilled kontomire oil",
      price: 26,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Seared_scallops_signature_dish_22aa565e.png",
    },
    {
      id: "2",
      name: "Atlantic Oysters on Ice",
      description: "Chilled oysters, sobolo mignonette, lime, sea salt",
      price: 22,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Oysters_appetizer_dish_c78a41ea.png",
    },
    {
      id: "3",
      name: "Charred Octopus Suya",
      description: "Wood-grilled octopus, smoked suya spice, sweet potato, herb sauce",
      price: 30,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Grilled_octopus_signature_dish_7290cf5f.png",
    },
    {
      id: "4",
      name: "Coastal Jollof Lobster",
      description: "Butter-poached lobster, smoky jollof rice, charred peppers, herb jus",
      price: 48,
      category: "entree",
      imageUrl: "/assets/generated_images/Wagyu_steak_signature_dish_cf081c50.png",
    },
    {
      id: "5",
      name: "Fanti Catch with Banku Crumble",
      description: "Market fish, pepper relish, banku crisp, garden herbs",
      price: 34,
      category: "entree",
      imageUrl: "/assets/generated_images/Pasta_carbonara_signature_dish_f547b1a1.png",
    },
    {
      id: "6",
      name: "Cocoa Souffle",
      description: "Ghana cocoa souffle, salted caramel, roasted pineapple cream",
      price: 16,
      category: "dessert",
      imageUrl: "/assets/generated_images/Chocolate_dessert_signature_dish_713c45e1.png",
    },
  ];

  private eventDetails: EventDetails = {
    name: "Lumière",
    tagline: "Coastal Fine Dining, Reimagined",
    dates: "Now welcoming guests for the 2026 dining season",
    times: "Lunch: 12:30 PM, Dinner: 6:30 PM",
    location: {
      name: "Lumière Dining Room",
      address: "Cape Coast",
      city: "Ghana, West Africa",
      coordinates: {
        lat: 5.1053,
        lng: -1.2466,
      },
    },
    seatingInfo: "Limited to 24 guests per seating. Reservations required.",
    parkingInfo: "On-site guest parking available. Local taxi and ride services offer convenient access across Cape Coast.",
    contactEmail: "reservations@lumierecapecoast.com",
    contactPhone: "+233 20 555 1234",
  };

  private story: Story = {
    title: "Rooted in Cape Coast",
    paragraphs: [
      "Lumière draws its identity from Cape Coast's shoreline, fishing harbours, and storied streets, translating familiar Ghanaian ingredients into a polished coastal dining experience. Each menu is shaped by what arrives fresh from the sea, the market, and nearby farms across the Central Region.",
      "The kitchen layers local character into every course, from sobolo-brightened shellfish to smoky pepper sauces, Ghana cocoa desserts, and seasonal produce prepared with a light, contemporary touch. The result is elegant without losing the warmth and generosity that define hospitality on the coast.",
      "Whether guests arrive from the castle district, the university quarter, or a weekend stay along the Atlantic, Lumière is designed to feel unmistakably Cape Coast: intimate, grounded, and memorable long after the last course.",
    ],
  };

  async getMenuItems(): Promise<MenuItem[]> {
    return this.menuItems;
  }

  async getEventDetails(): Promise<EventDetails> {
    return this.eventDetails;
  }

  async getStory(): Promise<Story> {
    return this.story;
  }
}

export const storage = new MemStorage();
