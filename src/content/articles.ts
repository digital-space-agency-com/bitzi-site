import type { Section, Source } from "./types";

export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: Section[];
  sources: Source[];
  bitzi: string;
};

const NHS_FUSSY = {
  label: "NHS: Fussy eaters",
  url: "https://www.nhs.uk/baby/weaning-and-feeding/fussy-eaters/",
};
const AAP_PICKY = {
  label: "HealthyChildren.org (American Academy of Pediatrics): 10 Tips for Parents of Picky Eaters",
  url: "https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx",
};
const SATTER_DOR = {
  label: "Ellyn Satter Institute: Division of Responsibility in Feeding",
  url: "https://www.ellynsatterinstitute.org/how-to-feed/ellyn-satters-division-of-responsibility-in-feeding/",
};
const SATTER_PICKY = {
  label: "Ellyn Satter Institute: Picky eating",
  url: "https://www.ellynsatterinstitute.org/how-to-feed/preventing-solving-feeding-problems/picky-eating/",
};
const NHS_WHAT = {
  label: "NHS: What to feed young children",
  url: "https://www.nhs.uk/baby/weaning-and-feeding/what-to-feed-young-children/",
};

export const articles: Article[] = [
  {
    slug: "food-chaining",
    path: "/guides/food-chaining",
    title: "Food chaining: what it is and how to start",
    description:
      "Food chaining moves from foods a child accepts to close cousins, one small step at a time. A plain-English guide with NHS, AAP and Ellyn Satter sources.",
    h1: "Food chaining: what it is and how to start",
    lede: "Food chaining is a gentle way to widen a short list of accepted foods: start from something your child already eats and change one thing at a time.",
    sections: [
      {
        h: "The idea in one paragraph",
        p: [
          "Food chaining links a food your child already accepts to a similar food with a related taste, texture, shape or colour, then to another, one small step at a time. The method is usually credited to speech-language pathologist Cheri Fraker and colleagues, who described it in the book Food Chaining (2007). It is a feeding-therapy idea that parents also use at home.",
        ],
      },
      {
        h: "What the main sources say that points the same way",
        ul: [
          "The NHS advises gradually introducing other foods and going back to foods a child did not like before, because children's tastes change and it may take many attempts. It also suggests that changing how a food is served can help, for example cooked carrots refused but raw grated carrot enjoyed.",
          "HealthyChildren.org, from the American Academy of Pediatrics, says it can take 10 or more tastings before a toddler accepts a food, and suggests offering new foods in small amounts alongside foods the child likes.",
          "The Ellyn Satter Institute says it can take several neutral exposures before a child decides to try or eat a food, and recommends providing a variety of foods, some new and some familiar.",
        ],
      },
      {
        h: "A simple way to try it",
        p: ["These steps are our own plain-English summary, not a quotation from any one source."],
        ul: [
          "Pick one food your child reliably eats.",
          "Change one thing: a brand, a shape, a dip, a cooking method or a colour.",
          "Serve it alongside the usual food without comment. Do not ask for a bite.",
          "Leave it a few days, then try the next small step. Going back a step is fine.",
        ],
      },
      {
        h: "What chaining is not",
        p: [
          "It is not a way to get a child to eat more, and it is not a reason to pressure them. Whether to eat and how much stays with the child. If the list of accepted foods is very short, is shrinking, or you are worried about growth or health, talk to your health visitor or GP, who can refer you to a feeding specialist if needed.",
        ],
      },
    ],
    sources: [NHS_FUSSY, AAP_PICKY, SATTER_PICKY],
    bitzi:
      "Bitzi offers ideas for similar foods to try next, framed as small steps. It is a source of ideas, not a programme or a treatment.",
  },
  {
    slug: "responsive-feeding",
    path: "/guides/responsive-feeding",
    title: "Responsive feeding in plain words",
    description:
      "Responsive feeding means respecting your child's hunger and fullness. What the NHS, AAP and Ellyn Satter Institute advise for young children.",
    h1: "Responsive feeding in plain words",
    lede: "Responsive feeding means offering food warmly and predictably, then letting your child's hunger and fullness lead how much they eat.",
    sections: [
      {
        h: "What it looks like at the table",
        p: [
          "In plain terms, you set up the meal and your child responds to their own body. The advice below is paraphrased from the sources listed at the end of the page.",
        ],
        ul: [
          "Do not force, pressure or punish. The NHS says not to force a child to eat and, if food is rejected, to take it away without comment and try again another time. HealthyChildren.org says pressure can make children dislike foods they might otherwise like.",
          "Let appetite vary. The NHS suggests thinking about what a child eats over a week rather than at one meal. HealthyChildren.org notes that appetite slows after the rapid growth of infancy.",
          "Keep the table calm and screen-free. HealthyChildren.org suggests sharing family meals without TV or phones.",
          "Serve one meal for the family, including at least one food your child likes, and do not cook a second meal on demand.",
          "Avoid using food as a prize or bargaining tool. Both the NHS and HealthyChildren.org advise against it, because it can make the prize food more exciting and the other food more of a chore.",
          "Keep offering. Refusal today does not mean refusal for good.",
        ],
      },
      {
        h: "Why an empty plate is not the goal",
        p: [
          "Responsive feeding does not treat an empty plate as the goal. That is why Bitzi's celebration marks trying something new, sitting with the family or eating, and does not measure how much was eaten.",
        ],
      },
      {
        h: "When to get advice",
        p: [
          "Fussy eating is common and usually passes. If you are worried about your child's growth, energy or how few foods they accept, speak to your health visitor or GP.",
        ],
      },
    ],
    sources: [NHS_FUSSY, AAP_PICKY, SATTER_DOR],
    bitzi:
      "Bitzi is designed around this advice: a phone-down table, a plate guide that is a starting point and not a target, and a celebration that is about the effort.",
  },
  {
    slug: "division-of-responsibility",
    path: "/guides/division-of-responsibility",
    title: "The division of responsibility in feeding, explained",
    description:
      "Ellyn Satter's division of responsibility: the adult decides what, when and where, the child decides whether and how much. A short explainer with sources.",
    h1: "The division of responsibility in feeding",
    lede: "The parent chooses what, when and where. The child decides whether to eat and how much. That is the whole idea, and it is worth keeping simple.",
    sections: [
      {
        h: "The two jobs",
        p: [
          "According to the Ellyn Satter Institute, the Satter Division of Responsibility (sDOR) sets out the adult's role and the child's role in feeding.",
        ],
        ul: [
          "The adult chooses what is offered, sets regular times for meals and snacks, avoids food and drink handouts between them, and chooses where to eat together.",
          "The child decides whether to eat the food offered and how much of it.",
        ],
      },
      {
        h: "Why it matters for fussy eating",
        p: [
          "The Institute describes sDOR as a way out of power struggles at eating times, and says that if a child has been pressured in the past, negative eating behaviours may get more extreme for a while before they settle. It also describes cautious eating of new foods as a normal part of toddler development.",
        ],
      },
      {
        h: "What sDOR does not do",
        p: [
          "It does not set target amounts for a child. That is why Bitzi describes its plate photo as a rough guide to what you might offer and never as a number your child should reach. We do not present Bitzi as Satter-certified or endorsed by the Institute. We follow the approach in how the app talks about meals.",
        ],
      },
    ],
    sources: [SATTER_DOR, SATTER_PICKY, NHS_WHAT],
    bitzi:
      "You choose the plate. Your child chooses how much. Bitzi's guide and celebration are written to stay on the right side of that line.",
  },
];

export const guidesIndex = {
  path: "/guides",
  title: "Fussy eating guides: food chaining, responsive feeding",
  description:
    "Plain-English guides on food chaining, responsive feeding and the division of responsibility, each citing the NHS, the AAP or Ellyn Satter's own site.",
  h1: "Guides for fussy eating",
  lede: "Short, plain-English explainers. Each one links to the original source so you can read it yourself.",
};
