function parseJSONEnv<T>(key: string): T | undefined {
  const raw = process.env[key];
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

const USD_TO_GHS = 15.5;

function toCedis(usdPrice: number) {
  return Math.round((usdPrice * USD_TO_GHS) / 5) * 5;
}

export default async function handler(_req: any, res: any) {
  // Allow override via MENU_ITEMS_JSON env (expects JSON array of MenuItem)
  const envItems = parseJSONEnv<any[]>("MENU_ITEMS_JSON");
  if (envItems && Array.isArray(envItems) && envItems.length > 0) {
    return res.status(200).json(envItems);
  }

  // Default inline static data
  const items = [
    {
      id: "1",
      name: "Sekondi Sea Scallops",
      description: "Seared scallops, coconut-citrus butter, grilled kontomire oil",
      price: toCedis(26),
      category: "appetizer",
      imageUrl: "/assets/generated_images/Seared_scallops_signature_dish_22aa565e.png",
    },
    {
      id: "2",
      name: "Atlantic Oysters on Ice",
      description: "Chilled oysters, sobolo mignonette, lime, sea salt",
      price: toCedis(22),
      category: "appetizer",
      imageUrl: "/assets/generated_images/Oysters_appetizer_dish_c78a41ea.png",
    },
    {
      id: "3",
      name: "Charred Octopus Suya",
      description: "Wood-grilled octopus, smoked suya spice, sweet potato, herb sauce",
      price: toCedis(30),
      category: "appetizer",
      imageUrl: "/assets/generated_images/Grilled_octopus_signature_dish_7290cf5f.png",
    },
    {
      id: "4",
      name: "Coastal Jollof Lobster",
      description: "Butter-poached lobster, smoky jollof rice, charred peppers, herb jus",
      price: toCedis(48),
      category: "entree",
      imageUrl: "/assets/generated_images/Wagyu_steak_signature_dish_cf081c50.png",
    },
    {
      id: "5",
      name: "Fanti Catch with Banku Crumble",
      description: "Market fish, pepper relish, banku crisp, garden herbs",
      price: toCedis(34),
      category: "entree",
      imageUrl: "/assets/generated_images/Pasta_carbonara_signature_dish_f547b1a1.png",
    },
    {
      id: "6",
      name: "Cocoa Souffle",
      description: "Ghana cocoa souffle, salted caramel, roasted pineapple cream",
      price: toCedis(16),
      category: "dessert",
      imageUrl: "/assets/generated_images/Chocolate_dessert_signature_dish_713c45e1.png",
    },
  ];

  res.status(200).json(items);
}
