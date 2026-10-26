import type { Locale } from "./types";
import { CONTACT_EMAIL } from "../site";

export const en: Locale = {
  lang: "en",
  hreflang: "en-GB",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  label: "English",
  base: "",
  paths: { home: "/", faq: "/faq", privacy: "/privacy" },
  ui: {
    skip: "Skip to content",
    nav: {
      home: "Home",
      faq: "FAQ",
      privacy: "Privacy",
      compare: "Apps for fussy eaters",
      guides: "Guides",
    },
    notReleased: "Bitzi is coming soon to the App Store and Google Play.",
    footerTitle: "Bitzi",
    footerNote:
      "Bitzi is not medical advice and does not diagnose feeding problems. If you are worried about your child's growth or eating, talk to your health visitor or GP.",
    languageLabel: "Language",
  },
  home: {
    title: "Bitzi: calmer mealtimes for fussy eaters",
    description:
      "Bitzi is a parent-held app for ages 18 months to 7: a plate photo guide before a screen-free meal, then a short celebration to show your child.",
    h1: "Calmer mealtimes with a fussy eater",
    lede: "A plate photo guide before the meal, a phone-down table, and a short celebration for every brave bite.",
    definitionH: "What is Bitzi?",
    definition:
      "Bitzi is a parent-held mobile app for children aged 18 months to 7 years that helps you serve a plate that suits their age and keep the meal calm and screen-free. You take a photo of the plate for a rough, friendly guide, then at the end of the meal you hold up the phone for a short celebration of whatever today's win was: trying something, sitting at the table or eating.",
    scenes: {
      dotsLabel: "Scenes",
      labels: { hero: "Welcome", meet: "Meet the Bitzis", plate: "Plate check", table: "Screen-free table", chaining: "Food chaining", celebration: "Celebration", closing: "Get Bitzi" },
      heroPrimary: "See how it works",
      heroSecondary: "Read the FAQ",
      meet: {
        h: "Meet the Bitzis",
        p: "Five friendly food characters keep your child company at the table. They never ask for anything. They just turn up and cheer.",
        cast: [
          { id: "pip", name: "Pip", bio: "Climbs up to the table and takes a good look at everything on the plate.", role: "The Looker", story: "Pip is a tiny pea pod who is curious about everything, and a little cautious too. Before anyone eats, Pip walks along the edge of the plate and has a good look. Looking counts. Some days that is all that happens, and Pip is proud of it anyway." },
          { id: "tomo", name: "Tomo", bio: "Waves hello to every food before sitting down.", role: "The Greeter", story: "Tomo is round, red and very polite. Every food gets a wave and a hello, even the ones Tomo is not sure about yet. Saying hello is the first step, and Tomo reminds everyone there is no hurry to get to the second." },
          { id: "bram", name: "Bram", bio: "Tries one tiny bite, then takes a break. Small steps are fine.", role: "The Nibbler", story: "Bram is a small broccoli with a big heart. One tiny bite, then a rest, then maybe another. Bram has learned that a small step is still a step, and that nobody at the table is counting." },
          { id: "pearl", name: "Pearl", bio: "Sits down with the whole family and chats while the others try things.", role: "The Chatterbox", story: "Pearl loves a full table. She sits with the whole family, tells her stories and asks about everyone's day. While she chats, the plates get explored without anyone making a fuss about it." },
          { id: "dot", name: "Dot", bio: "Waves goodbye to the plate when the meal is over, whatever happened.", role: "The Goodbye Wave", story: "Dot is a little pasta shell who closes every meal. However the meal went, Dot waves goodbye to the plate and says well done for sitting together. That is the moment the celebration begins." },
        ],
      },
      plate: {
        h: "Check the plate",
        p: "Take a photo of the plate before you serve it. Bitzi spots the veg, protein and carbs and gives a rough, friendly idea of what suits a child of their age. A guide, not a rule: you choose what goes on the plate, your child chooses how much to eat.",
      },
      table: {
        h: "A screen-free table",
        p: "Put the phone face down and enjoy the meal together. No screens at the table, for anyone.",
      },
      chaining: {
        h: "One small step at a time",
        p: "Child only eats a few foods? Bitzi suggests ideas for similar foods to try next, moving from a favourite to a close cousin with a similar taste or texture.",
        chips: ["A food they know", "A close cousin", "The next small step"],
      },
      celebration: {
        h: "Celebrate the effort",
        p: "At the end of the meal, hold up the phone and let your child tap the big button for a short celebration with a friendly character. It marks whatever today's win was: trying something, sitting at the table or eating.",
      },
      closing: {
        h: "Make the next mealtime a little easier",
        p: "Bitzi is coming soon to the App Store and Google Play.",
      },
    },
    principlesH: "What we believe about mealtimes",
    principles: [
      {
        h: "You choose the food, your child chooses how much",
        p: "This is the heart of Ellyn Satter's division of responsibility. Bitzi's plate guide is a starting point for what you offer, never a target your child has to hit.",
      },
      {
        h: "Celebrate trying, not quantity",
        p: "The celebration marks trying something new, sitting with the family or eating. It is a moment of warmth, not a prize and not a measure of how much was eaten.",
      },
      {
        h: "No pressure",
        p: "NHS and AAP advice both say not to force a child to eat. Bitzi never asks the child to do anything except enjoy the celebration.",
      },
    ],
    limitsH: "What Bitzi is not",
    limits: [
      "Bitzi is not medical advice and does not diagnose feeding problems.",
      "The plate photo gives a rough idea, not a measurement.",
      "It is not a recipe library. If recipes are what you need, a recipe app will serve you better; see our comparison.",
    ],
    faqH: "Questions parents ask",
    faqCta: "Read the full FAQ",
    moreH: "Guides and comparison",
    more: [
      { label: "Apps for fussy eaters: an honest comparison", path: "/apps-for-fussy-eaters" },
      { label: "Food chaining: what it is and how to start", path: "/guides/food-chaining" },
      { label: "Responsive feeding in plain words", path: "/guides/responsive-feeding" },
      { label: "The division of responsibility in feeding", path: "/guides/division-of-responsibility" },
    ],
  },
  faq: {
    title: "Bitzi FAQ: ages, plate photo guide, celebration",
    description:
      "Answers about Bitzi: which ages it suits, what the plate photo guide does and does not do, the screen-free meal, the celebration and medical advice.",
    h1: "Frequently asked questions",
    intro: "Short answers about what Bitzi does today and what it does not do.",
    items: [
      {
        q: "What is Bitzi?",
        a: "Bitzi is a parent-held mobile app for children aged 18 months to 7 years. It gives you a rough plate photo guide before a meal, keeps the meal screen-free, and offers a short celebration your child can enjoy afterwards.",
      },
      {
        q: "Which ages is Bitzi for?",
        a: "Ages 18 months to 7 years. You enter your child's birth month and year so the guide and the characters fit their age.",
      },
      {
        q: "Does Bitzi tell my child how much to eat?",
        a: "No. The plate photo gives you a rough, friendly idea of what suits a child of their age. It is a guide, not a rule: you decide what goes on the plate and your child decides how much to eat. That split comes from Ellyn Satter's division of responsibility in feeding.",
      },
      {
        q: "Does my child use the phone during the meal?",
        a: "No. The parent holds the phone. During the meal it goes face down. At the end, you can hold it up so your child can tap the big button for a short celebration.",
      },
      {
        q: "What does the celebration celebrate?",
        a: "Whatever today's win was: trying something new, sitting at the table or eating. It does not measure how much was eaten and it is not a prize.",
      },
      {
        q: "What is food chaining?",
        a: "Food chaining means moving from a food your child already accepts to a close cousin with a similar taste or texture, one small step at a time. Bitzi offers ideas for next foods to try. Our food chaining guide explains the method and links to NHS, AAP and Ellyn Satter's own site.",
      },
      {
        q: "Is Bitzi medical advice?",
        a: "No. Bitzi does not diagnose feeding problems. If you are worried about your child's growth or eating, talk to your health visitor or GP.",
      },
      {
        q: "Is Bitzi available yet?",
        a: "Not yet. It is coming soon to the App Store and Google Play. This page will link to the store listings at launch.",
      },
      {
        q: "Which languages are available?",
        a: "This website is in UK English, Spanish and German, and the store listings are being prepared in the same languages. The languages inside the app itself will be confirmed at launch.",
      },
      {
        q: "What data does Bitzi collect?",
        a: "The privacy page lists what this website collects today. The section covering the app will be published with the first release.",
      },
    ],
  },
  privacy: {
    title: "Bitzi privacy",
    description:
      "How the Bitzi website handles your data, and what to expect from the privacy policy for the Bitzi app, which is published with the first release.",
    h1: "Privacy",
    updated: "Last updated 26 October 2026",
    sections: [
      {
        h: "Status",
        p: [
          "Bitzi the app has not been released yet. This page covers this website. The privacy policy for the app will be published here, and linked from the store listings, before the first release.",
        ],
      },
      {
        h: "This website",
        ul: [
          "No cookies are set by this website.",
          "No analytics or advertising tools are installed.",
          "There are no forms, accounts or sign-ups.",
          "The hosting provider may keep standard server logs, such as IP address and requested page, for security and operations.",
        ],
      },
      {
        h: "The app",
        p: [
          "Bitzi asks for your child's birth month and year so that the guide and characters fit their age. The full list of what the app stores, where it is stored and who can see it will be published in the app privacy policy before release.",
        ],
      },
      {
        h: "Children",
        p: [
          "Bitzi is used by a parent or carer, who holds the phone. It is not a service directed to children to use on their own.",
        ],
      },
      ...(CONTACT_EMAIL
        ? [{ h: "Contact", p: [`Questions about privacy: ${CONTACT_EMAIL}`] }]
        : []),
    ],
  },
};
