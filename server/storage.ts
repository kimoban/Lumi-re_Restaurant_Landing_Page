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
      name: "Seared Scallops",
      description: "Hokkaido scallops, beurre blanc, microgreens",
      price: 28,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Seared_scallops_signature_dish_22aa565e.png",
    },
    {
      id: "2",
      name: "Oysters on Ice",
      description: "Fresh Atlantic oysters, mignonette, lemon",
      price: 24,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Oysters_appetizer_dish_c78a41ea.png",
    },
    {
      id: "3",
      name: "Grilled Octopus",
      description: "Mediterranean octopus, purple potato, chimichurri",
      price: 32,
      category: "appetizer",
      imageUrl: "/assets/generated_images/Grilled_octopus_signature_dish_7290cf5f.png",
    },
    {
      id: "4",
      name: "Wagyu Ribeye",
      description: "A5 Japanese wagyu, seasonal vegetables, red wine reduction",
      price: 85,
      category: "entree",
      imageUrl: "/assets/generated_images/Wagyu_steak_signature_dish_cf081c50.png",
    },
    {
      id: "5",
      name: "Handmade Carbonara",
      description: "Fresh pasta, pancetta, farm egg, aged parmesan",
      price: 36,
      category: "entree",
      imageUrl: "/assets/generated_images/Pasta_carbonara_signature_dish_f547b1a1.png",
    },
    {
      id: "6",
      name: "Chocolate Soufflé",
      description: "Dark chocolate, gold leaf, raspberry coulis",
      price: 18,
      category: "dessert",
      imageUrl: "/assets/generated_images/Chocolate_dessert_signature_dish_713c45e1.png",
    },
  ];

  private eventDetails: EventDetails = {
    name: "Lumière",
    tagline: "An Intimate Culinary Journey",
    dates: "February 14-28, 2025",
    times: "First Seating: 6:00 PM, Second Seating: 8:30 PM",
    location: {
      name: "The Gallery Warehouse",
      address: "425 Arts District Boulevard",
      city: "Downtown, CA 90013",
      coordinates: {
        lat: -37.817209,
        lng: 144.953736,
      },
    },
    seatingInfo: "Limited to 24 guests per seating. Reservations required.",
    parkingInfo: "Valet available on-site. Metro accessible via Arts District station.",
    contactEmail: "reservations@lumierepopup.com",
    contactPhone: "(213) 555-1234",
  };

  private story: Story = {
    title: "A Limited-Time Experience",
    paragraphs: [
      "For two weeks only, Lumière transforms an intimate space in the heart of the Arts District into a celebration of culinary artistry. This exclusive pop-up brings together seasonal ingredients, innovative techniques, and a passion for creating unforgettable dining moments.",
      "Chef Elena Rousseau, formerly of Michelin-starred establishments across Europe, returns to her hometown to share a deeply personal menu that weaves together family traditions with modern sensibilities. Each dish tells a story, each flavor evokes a memory.",
      "With only 24 seats available per evening, Lumière offers an intimate atmosphere where every detail matters—from the hand-selected ceramics to the carefully curated wine pairings. This is dining as it should be: thoughtful, beautiful, and fleeting.",
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
