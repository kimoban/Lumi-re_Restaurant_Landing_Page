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
    title: "A Limited-Time Experience",
    paragraphs: [
      "For two weeks only, Lumière transforms an intimate space in the heart of the Arts District into a celebration of culinary artistry. This exclusive pop-up brings together seasonal ingredients, innovative techniques, and a passion for creating unforgettable dining moments.",
      "Chef Elena Rousseau, formerly of Michelin-starred establishments across Europe, returns to her hometown to share a deeply personal menu that weaves together family traditions with modern sensibilities. Each dish tells a story, each flavor evokes a memory.",
      "With only 24 seats available per evening, Lumière offers an intimate atmosphere where every detail matters—from the hand-selected ceramics to the carefully curated wine pairings. This is dining as it should be: thoughtful, beautiful, and fleeting.",
    ],
  };

  res.status(200).json(story);
}
