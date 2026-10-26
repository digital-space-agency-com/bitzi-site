import type { Locale } from "./types";
import { CONTACT_EMAIL } from "../site";

export const es: Locale = {
  lang: "es",
  hreflang: "es-ES",
  htmlLang: "es-ES",
  ogLocale: "es_ES",
  label: "Español",
  base: "/es",
  paths: { home: "/es/", faq: "/es/preguntas-frecuentes", privacy: "/es/privacidad" },
  ui: {
    skip: "Saltar al contenido",
    nav: { home: "Inicio", faq: "Preguntas frecuentes", privacy: "Privacidad" },
    notReleased: "Bitzi llegará pronto a la App Store y a Google Play.",
    footerTitle: "Bitzi",
    footerNote:
      "Bitzi no es consejo médico ni diagnostica problemas de alimentación. Si te preocupa el crecimiento o la alimentación de tu hijo, habla con su pediatra.",
    onlyEnglish: "Las guías y la comparativa de apps están por ahora solo en inglés.",
    languageLabel: "Idioma",
  },
  home: {
    title: "Bitzi: comer en paz con tu peque",
    description:
      "Bitzi es una app para madres y padres, de 1,5 a 7 años: una guía con foto del plato antes de comer sin pantallas y una celebración corta para enseñar a tu hijo.",
    h1: "Comer en paz, sin batallas",
    lede: "Una guía con foto del plato antes de la comida, una mesa sin móvil y una celebración corta por cada bocado valiente.",
    definitionH: "¿Qué es Bitzi?",
    definition:
      "Bitzi es una app móvil que usa el adulto, pensada para niños de 1,5 a 7 años, que te ayuda a servir un plato adecuado a su edad y a mantener la comida tranquila y sin pantallas. Haces una foto del plato para recibir una guía aproximada y amable y, al terminar, enseñas el móvil para una celebración corta de lo que haya sido el logro de hoy: probar algo, sentarse a la mesa o comer.",
    stepsH: "Cómo funciona",
    steps: [
      {
        h: "Revisa el plato",
        p: "Haz una foto del plato antes de servirlo. Bitzi reconoce verduras, proteína e hidratos y te da una idea aproximada de lo que encaja con su edad.",
      },
      {
        h: "Comed juntos, sin móvil",
        p: "Deja el móvil boca abajo y disfrutad de la comida. No hay pantallas en la mesa.",
      },
      {
        h: "Celebra el esfuerzo",
        p: "Después, enseña el móvil y deja que tu hijo pulse el botón grande para una celebración corta con un personaje simpático.",
      },
    ],
    principlesH: "Lo que pensamos de las comidas",
    principles: [
      {
        h: "Tú eliges qué se ofrece, tu hijo decide cuánto come",
        p: "Es la base de la división de responsabilidades de Ellyn Satter. La guía del plato es un punto de partida para lo que ofreces, nunca una meta que tu hijo deba alcanzar.",
      },
      {
        h: "Celebrar el intento, no la cantidad",
        p: "La celebración reconoce que pruebe algo nuevo, que se siente con la familia o que coma. Es un momento de cariño, no un premio ni una medida de cuánto se ha comido.",
      },
      {
        h: "Sin presión",
        p: "Los consejos del NHS y de la AAP coinciden en no obligar a los niños a comer. Bitzi no le pide al niño nada más que disfrutar de la celebración.",
      },
    ],
    limitsH: "Lo que Bitzi no es",
    limits: [
      "Bitzi no es consejo médico ni diagnostica problemas de alimentación.",
      "La foto del plato da una idea aproximada, no una medición.",
      "No es un recetario. Si buscas recetas, te servirá mejor una app de recetas.",
    ],
    faqH: "Preguntas habituales",
    faqCta: "Ver todas las preguntas",
  },
  faq: {
    title: "Preguntas frecuentes sobre Bitzi",
    description:
      "Respuestas sobre Bitzi: edades, qué hace y qué no hace la guía con foto del plato, la comida sin pantallas, la celebración y el consejo médico.",
    h1: "Preguntas frecuentes",
    intro: "Respuestas breves sobre lo que hace Bitzi hoy y lo que no hace.",
    items: [
      {
        q: "¿Qué es Bitzi?",
        a: "Bitzi es una app móvil que usa el adulto, para niños de 1,5 a 7 años. Te da una guía aproximada con foto del plato antes de comer, mantiene la comida sin pantallas y ofrece una celebración corta que tu hijo disfruta al terminar.",
      },
      {
        q: "¿Para qué edades es?",
        a: "De 1,5 a 7 años. Indicas el mes y el año de nacimiento de tu hijo para que la guía y los personajes se adapten a su edad.",
      },
      {
        q: "¿Bitzi le dice a mi hijo cuánto tiene que comer?",
        a: "No. La foto del plato te da una idea aproximada y amable de lo que encaja con su edad. Es una guía, no una norma: tú decides qué va en el plato y tu hijo decide cuánto come. Ese reparto viene de la división de responsabilidades de Ellyn Satter.",
      },
      {
        q: "¿Mi hijo usa el móvil durante la comida?",
        a: "No. El móvil lo maneja el adulto y durante la comida va boca abajo. Al terminar puedes enseñárselo para que pulse el botón grande y vea una celebración corta.",
      },
      {
        q: "¿Qué celebra la celebración?",
        a: "Lo que haya sido el logro de hoy: probar algo nuevo, sentarse a la mesa o comer. No mide cuánto se ha comido ni es un premio.",
      },
      {
        q: "¿Qué es el encadenamiento de alimentos?",
        a: "Consiste en pasar de un alimento que tu hijo ya acepta a otro muy parecido en sabor o textura, paso a paso. Bitzi ofrece ideas de alimentos para probar a continuación. La guía en inglés explica el método con fuentes del NHS, la AAP y la web de Ellyn Satter.",
      },
      {
        q: "¿Es consejo médico?",
        a: "No. Bitzi no diagnostica problemas de alimentación. Si te preocupa el crecimiento o la alimentación de tu hijo, habla con su pediatra.",
      },
      {
        q: "¿Ya está disponible?",
        a: "Todavía no. Llegará pronto a la App Store y a Google Play. Enlazaremos las fichas de las tiendas en esta página cuando salga.",
      },
      {
        q: "¿En qué idiomas está?",
        a: "Esta web está en inglés británico, español y alemán, y las fichas de las tiendas se preparan en los mismos idiomas. Los idiomas de la propia app se confirmarán en el lanzamiento.",
      },
    ],
  },
  privacy: {
    title: "Privacidad de Bitzi",
    description:
      "Cómo trata esta web tus datos y qué esperar de la política de privacidad de la app Bitzi, que se publicará con la primera versión.",
    h1: "Privacidad",
    updated: "Última actualización: 26 de octubre de 2026",
    sections: [
      {
        h: "Estado",
        p: [
          "La app Bitzi todavía no se ha publicado. Esta página cubre este sitio web. La política de privacidad de la app se publicará aquí, y se enlazará desde las fichas de las tiendas, antes de la primera versión.",
        ],
      },
      {
        h: "Este sitio web",
        ul: [
          "Este sitio web no instala cookies.",
          "No usa herramientas de analítica ni de publicidad.",
          "No hay formularios, cuentas ni suscripciones.",
          "El proveedor de alojamiento puede guardar registros estándar del servidor, como la dirección IP y la página solicitada, por seguridad y funcionamiento.",
        ],
      },
      {
        h: "La app",
        p: [
          "Bitzi pide el mes y el año de nacimiento de tu hijo para adaptar la guía y los personajes a su edad. La lista completa de lo que guarda la app, dónde se guarda y quién puede verlo se publicará en la política de privacidad de la app antes del lanzamiento.",
        ],
      },
      {
        h: "Niños",
        p: [
          "Bitzi lo usa una madre, un padre o una persona cuidadora, que sostiene el móvil. No es un servicio dirigido a que los niños lo usen solos.",
        ],
      },
      ...(CONTACT_EMAIL
        ? [{ h: "Contacto", p: [`Preguntas sobre privacidad: ${CONTACT_EMAIL}`] }]
        : []),
    ],
  },
};
