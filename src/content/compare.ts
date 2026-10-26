export type AppRow = { name: string; kind: string; good: string; limits: string };

export const compare = {
  path: "/apps-for-fussy-eaters",
  title: "Apps for fussy eaters: an honest comparison (2026)",
  description:
    "What different kinds of apps for fussy eaters do, who each suits, and where Bitzi fits. Written by Bitzi, with its limits stated plainly.",
  h1: "Apps for fussy eaters: an honest comparison",
  lede: "There are good apps for feeding young children, but they do different jobs. This page says what each kind is for, including where Bitzi is the wrong choice.",
  disclosure:
    "Disclosure: this page is written by the makers of Bitzi. Descriptions of other apps are based on their public store listings as seen in October 2026 and may be out of date, so check each listing for current features and prices. We have not run head-to-head tests, and Bitzi is not released yet, so there are no independent reviews of it.",
  howToChooseH: "How to choose",
  howToChoose: [
    "If you need recipes and a weekly plan, pick a recipe or meal-planning app. Bitzi is not a recipe library.",
    "If your baby is starting solids, pick an app built for that stage. Bitzi is for ages 18 months to 7 years.",
    "If your child has a very limited range of foods, is losing foods, or you are worried about growth, speak to your health visitor or GP first. No app replaces that.",
    "If the hardest part is the table itself, and you want a screen-free meal with a short celebration at the end, Bitzi is built for that gap.",
  ],
  rows: [
    {
      name: "Recipe and meal-planning apps (for example My Fussy Eater, Annabel Karmel, Feeding Littles, Little Lunches)",
      kind: "Recipes and meal plans",
      good: "Ideas for what to cook, shopping and planning support.",
      limits: "They help with what to cook rather than what happens at the table.",
    },
    {
      name: "Solid Starts",
      kind: "Starting solids and baby-led weaning",
      good: "Detailed first-food guidance for babies.",
      limits: "Aimed at the starting-solids stage rather than older toddlers and preschoolers.",
    },
    {
      name: "EatPal",
      kind: "Planner built around food chaining, US-focused",
      good: "Structured support for children with a very limited range of foods.",
      limits: "Designed for more significant feeding difficulties; check availability for your country.",
    },
    {
      name: "Game-style apps (for example Playful Eats, Time To Eat)",
      kind: "Games to make food more interesting",
      good: "Playful engagement with food for the child.",
      limits: "We have not tested these in depth. Check whether they put a screen in front of the child at the meal.",
    },
    {
      name: "VitaBaby",
      kind: "Nutrition and growth logging for babies and toddlers",
      good: "Logging for parents who want to record and track.",
      limits: "A tracking tool; Bitzi deliberately does not count or track intake.",
    },
    {
      name: "Bitzi",
      kind: "Plate photo guide, screen-free meal, short celebration for ages 18 months to 7",
      good: "A rough guide to what suits a child's age before you serve, a phone-down table, ideas for food chaining and quick meals, and a celebration that marks effort.",
      limits: "Not a recipe library, not medical advice, not a measurement of what your child ate. Not yet released.",
    },
  ] as AppRow[],
  closing:
    "Want the background? Read our guides to food chaining, responsive feeding and the division of responsibility, each of which links to the NHS, the AAP or Ellyn Satter's own site.",
};
