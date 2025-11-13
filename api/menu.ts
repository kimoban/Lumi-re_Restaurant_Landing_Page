export default async function handler(_req: any, res: any) {
  // Inline static data to avoid module resolution issues in serverless bundling
  const items = [
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

  res.status(200).json(items);
}
