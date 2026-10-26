import type { Locale } from "./types";
import { CONTACT_EMAIL } from "../site";

export const de: Locale = {
  lang: "de",
  hreflang: "de-DE",
  htmlLang: "de-DE",
  ogLocale: "de_DE",
  label: "Deutsch",
  base: "/de",
  paths: { home: "/de/", faq: "/de/haeufige-fragen", privacy: "/de/datenschutz" },
  ui: {
    skip: "Zum Inhalt springen",
    nav: { home: "Start", faq: "Häufige Fragen", privacy: "Datenschutz" },
    notReleased: "Bitzi kommt bald in den App Store und zu Google Play.",
    footerTitle: "Bitzi",
    footerNote:
      "Bitzi ist keine medizinische Beratung und stellt keine Diagnosen. Wenn du dir Sorgen um Wachstum oder Essverhalten deines Kindes machst, sprich mit dem Kinderarzt.",
    onlyEnglish:
      "Die Ratgeber und der App-Vergleich gibt es bisher nur auf Englisch.",
    languageLabel: "Sprache",
  },
  home: {
    title: "Bitzi: entspannt essen mit Kleinkind",
    description:
      "Bitzi ist eine App für Eltern, für Kinder von 1,5 bis 7 Jahren: ein Teller-Check per Foto vor dem Essen ohne Bildschirm und eine kurze Feier für dein Kind.",
    h1: "Entspannt essen mit Kleinkind",
    lede: "Ein Teller-Check per Foto vor dem Essen, ein Tisch ohne Handy und eine kurze Feier für jeden mutigen Bissen.",
    definitionH: "Was ist Bitzi?",
    definition:
      "Bitzi ist eine mobile App für Erwachsene, die Kinder von 1,5 bis 7 Jahren begleiten, und hilft dir, einen altersgerechten Teller zu servieren und das Essen ruhig und bildschirmfrei zu halten. Du fotografierst den Teller für eine grobe, freundliche Orientierung und hältst am Ende der Mahlzeit das Handy hin für eine kurze Feier dessen, was heute der Erfolg war: etwas probieren, am Tisch sitzen oder essen.",
    scenes: {
      dotsLabel: "Szenen",
      labels: { hero: "Willkommen", meet: "Die Bitzis", plate: "Teller-Check", table: "Tisch ohne Bildschirm", chaining: "Food Chaining", celebration: "Feier", closing: "Bitzi holen" },
      heroPrimary: "So funktioniert es",
      heroSecondary: "Häufige Fragen",
      meet: {
        h: "Triff die Bitzis",
        p: "Fünf freundliche Essensfiguren leisten deinem Kind am Tisch Gesellschaft. Sie verlangen nie etwas. Sie sind einfach da und feuern an.",
        cast: [
          { id: "pip", name: "Pip", bio: "Klettert an den Tisch und schaut sich in Ruhe alles auf dem Teller an." },
          { id: "tomo", name: "Tomo", bio: "Winkt jedem Essen zu, bevor es sich hinsetzt." },
          { id: "bram", name: "Bram", bio: "Probiert einen winzigen Bissen und macht dann Pause. Kleine Schritte sind okay." },
          { id: "pearl", name: "Pearl", bio: "Setzt sich zur ganzen Familie und plaudert, während die anderen probieren." },
          { id: "dot", name: "Dot", bio: "Winkt dem Teller zum Abschied, wenn die Mahlzeit vorbei ist, egal was passiert ist." },
        ],
      },
      plate: {
        h: "Teller prüfen",
        p: "Mach vor dem Servieren ein Foto vom Teller. Bitzi erkennt Gemüse, Eiweiß und Sättigungsbeilage und gibt dir eine grobe, freundliche Orientierung, was zum Alter passt. Ein Anhaltspunkt, keine Vorschrift: Du entscheidest, was auf den Teller kommt, dein Kind entscheidet, wie viel es isst.",
      },
      table: {
        h: "Ein Tisch ohne Bildschirm",
        p: "Leg das Handy mit dem Display nach unten und genießt die Mahlzeit gemeinsam. Keine Bildschirme am Tisch, für niemanden.",
      },
      chaining: {
        h: "Ein kleiner Schritt nach dem anderen",
        p: "Dein Kind isst nur wenige Lebensmittel? Bitzi schlägt ähnliche Lebensmittel zum Ausprobieren vor, von einem Liebling zu einem nahen Verwandten mit ähnlichem Geschmack oder ähnlicher Konsistenz.",
        chips: ["Ein vertrautes Lebensmittel", "Ein naher Verwandter", "Der nächste kleine Schritt"],
      },
      celebration: {
        h: "Den Versuch feiern",
        p: "Nach dem Essen hältst du das Handy hin, und dein Kind tippt auf den großen Knopf für eine kurze Feier mit einer freundlichen Figur. Sie würdigt, was heute der Erfolg war: etwas probieren, am Tisch sitzen oder essen.",
      },
      closing: {
        h: "Mach die nächste Mahlzeit ein bisschen leichter",
        p: "Bitzi kommt bald in den App Store und zu Google Play.",
      },
    },
    principlesH: "Was uns bei Mahlzeiten wichtig ist",
    principles: [
      {
        h: "Du wählst das Essen, dein Kind entscheidet, wie viel",
        p: "Das ist der Kern der Verantwortungsteilung nach Ellyn Satter. Der Teller-Check ist ein Ausgangspunkt für das, was du anbietest, nie ein Ziel, das dein Kind erreichen muss.",
      },
      {
        h: "Probieren feiern, nicht Mengen",
        p: "Die Feier würdigt, dass dein Kind etwas Neues probiert, mit der Familie am Tisch sitzt oder isst. Sie ist ein Moment der Freude, kein Preis und kein Maß dafür, wie viel gegessen wurde.",
      },
      {
        h: "Kein Druck",
        p: "Die Ratschläge von NHS und AAP stimmen darin überein, Kinder nicht zum Essen zu zwingen. Bitzi verlangt vom Kind nichts außer der Freude an der Feier.",
      },
    ],
    limitsH: "Was Bitzi nicht ist",
    limits: [
      "Bitzi ist keine medizinische Beratung und stellt keine Diagnosen.",
      "Das Tellerfoto gibt eine grobe Orientierung, keine Messung.",
      "Bitzi ist keine Rezeptsammlung. Wenn du Rezepte suchst, ist eine Rezept-App die bessere Wahl.",
    ],
    faqH: "Fragen von Eltern",
    faqCta: "Alle Fragen ansehen",
  },
  faq: {
    title: "Häufige Fragen zu Bitzi",
    description:
      "Antworten zu Bitzi: für welches Alter, was der Teller-Check per Foto kann und nicht kann, Essen ohne Bildschirm, die Feier und medizinische Beratung.",
    h1: "Häufige Fragen",
    intro: "Kurze Antworten darauf, was Bitzi heute kann und was nicht.",
    items: [
      {
        q: "Was ist Bitzi?",
        a: "Bitzi ist eine mobile App für Erwachsene, die Kinder von 1,5 bis 7 Jahren begleiten. Sie gibt dir vor dem Essen eine grobe Orientierung per Tellerfoto, hält die Mahlzeit bildschirmfrei und bietet danach eine kurze Feier, die dein Kind genießen kann.",
      },
      {
        q: "Für welches Alter ist Bitzi?",
        a: "Für Kinder von 1,5 bis 7 Jahren. Du gibst Geburtsmonat und Geburtsjahr deines Kindes an, damit Orientierung und Figuren zum Alter passen.",
      },
      {
        q: "Sagt Bitzi meinem Kind, wie viel es essen muss?",
        a: "Nein. Das Tellerfoto gibt dir eine grobe, freundliche Orientierung, was zum Alter passt. Es ist ein Anhaltspunkt, keine Vorschrift: Du entscheidest, was auf den Teller kommt, dein Kind entscheidet, wie viel es isst. Diese Aufteilung stammt aus der Verantwortungsteilung nach Ellyn Satter.",
      },
      {
        q: "Benutzt mein Kind das Handy beim Essen?",
        a: "Nein. Das Handy hält der Erwachsene und es liegt beim Essen mit dem Display nach unten. Am Ende kannst du es hinhalten, damit dein Kind auf den großen Knopf tippt und eine kurze Feier sieht.",
      },
      {
        q: "Was wird bei der Feier gefeiert?",
        a: "Was heute der Erfolg war: etwas Neues probieren, am Tisch sitzen oder essen. Die Feier misst nicht, wie viel gegessen wurde, und ist kein Preis.",
      },
      {
        q: "Was ist Food Chaining?",
        a: "Beim Food Chaining geht man von einem Lebensmittel, das dein Kind schon akzeptiert, Schritt für Schritt zu einem ähnlichen mit verwandtem Geschmack oder ähnlicher Konsistenz. Bitzi bietet Ideen für das nächste Lebensmittel zum Ausprobieren. Der englische Ratgeber erklärt die Methode mit Quellen von NHS, AAP und der Website von Ellyn Satter.",
      },
      {
        q: "Ist Bitzi medizinische Beratung?",
        a: "Nein. Bitzi stellt keine Diagnosen. Wenn du dir Sorgen um Wachstum oder Essverhalten deines Kindes machst, sprich mit dem Kinderarzt.",
      },
      {
        q: "Gibt es Bitzi schon?",
        a: "Noch nicht. Bitzi kommt bald in den App Store und zu Google Play. Zum Start verlinken wir die Store-Seiten hier.",
      },
      {
        q: "In welchen Sprachen gibt es Bitzi?",
        a: "Diese Website gibt es auf britischem Englisch, Spanisch und Deutsch, und die Store-Seiten werden in denselben Sprachen vorbereitet. Die Sprachen in der App selbst bestätigen wir zum Start.",
      },
    ],
  },
  privacy: {
    title: "Datenschutz bei Bitzi",
    description:
      "Wie diese Website mit deinen Daten umgeht und was dich in der Datenschutzerklärung der Bitzi-App erwartet, die mit der ersten Version erscheint.",
    h1: "Datenschutz",
    updated: "Zuletzt aktualisiert: 26. Oktober 2026",
    sections: [
      {
        h: "Stand",
        p: [
          "Die Bitzi-App ist noch nicht veröffentlicht. Diese Seite betrifft diese Website. Die Datenschutzerklärung der App erscheint vor der ersten Version hier und wird von den Store-Seiten aus verlinkt.",
        ],
      },
      {
        h: "Diese Website",
        ul: [
          "Diese Website setzt keine Cookies.",
          "Es sind keine Analyse- oder Werbewerkzeuge eingebunden.",
          "Es gibt keine Formulare, Konten oder Anmeldungen.",
          "Der Hosting-Anbieter kann übliche Server-Protokolle speichern, etwa IP-Adresse und abgerufene Seite, für Sicherheit und Betrieb.",
        ],
      },
      {
        h: "Die App",
        p: [
          "Bitzi fragt nach Geburtsmonat und Geburtsjahr deines Kindes, damit Orientierung und Figuren zum Alter passen. Welche Daten die App speichert, wo sie gespeichert werden und wer sie sehen kann, steht vor dem Start in der Datenschutzerklärung der App.",
        ],
      },
      {
        h: "Kinder",
        p: [
          "Bitzi wird von einem Elternteil oder einer Betreuungsperson genutzt, die das Handy hält. Es ist kein Angebot, das Kinder allein nutzen sollen.",
        ],
      },
      ...(CONTACT_EMAIL
        ? [{ h: "Kontakt", p: [`Fragen zum Datenschutz: ${CONTACT_EMAIL}`] }]
        : []),
    ],
  },
};
