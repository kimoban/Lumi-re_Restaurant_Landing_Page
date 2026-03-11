function parseJSONEnv<T>(key: string): T | undefined {
  const raw = process.env[key];
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export default async function handler(_req: any, res: any) {
  const envStory = parseJSONEnv<any>("STORY_JSON");
  if (envStory) {
    return res.status(200).json(envStory);
  }

  const story = {
    title: "Rooted in Cape Coast",
    paragraphs: [
      "Lumière draws its identity from Cape Coast's shoreline, fishing harbours, and storied streets, translating familiar Ghanaian ingredients into a polished coastal dining experience. Each menu is shaped by what arrives fresh from the sea, the market, and nearby farms across the Central Region.",
      "The kitchen layers local character into every course, from sobolo-brightened shellfish to smoky pepper sauces, Ghana cocoa desserts, and seasonal produce prepared with a light, contemporary touch. The result is elegant without losing the warmth and generosity that define hospitality on the coast.",
      "Whether guests arrive from the castle district, the university quarter, or a weekend stay along the Atlantic, Lumière is designed to feel unmistakably Cape Coast: intimate, grounded, and memorable long after the last course.",
    ],
  };

  res.status(200).json(story);
}
