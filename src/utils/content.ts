import type { CollectionEntry } from "astro:content";

type TalkEntry = CollectionEntry<"talks">;
type ProjectEntry = CollectionEntry<"projects">;

export type AccentTone = "yellow" | "red" | "blue" | "ink";

function includesAny(haystack: string, needles: string[]) {
  return needles.some((needle) => haystack.includes(needle));
}

export function formatMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function isEpflTalk(talk: TalkEntry) {
  const venue = talk.data.venue?.toLowerCase() ?? "";
  const tags = talk.data.tags.map((tag) => tag.toLowerCase());

  return venue.includes("epfl") || tags.includes("epfl");
}

export function getTalkCategoryLabel(talk: TalkEntry) {
  if (!isEpflTalk(talk) && talk.data.category.toLowerCase() === "lecture notes") {
    return "Personal Notes";
  }

  return talk.data.category;
}

export function getTalkVenueLabel(talk: TalkEntry) {
  return isEpflTalk(talk) ? talk.data.venue : undefined;
}

export function formatSemesterOrMonth(date: Date, useSemester: boolean) {
  if (!useSemester) {
    return formatMonthYear(date);
  }

  const month = date.getMonth();
  const season = month <= 5 ? "Spring" : "Autumn";

  return `${season} ${date.getFullYear()}`;
}

export function getProjectAccentTone(project: ProjectEntry): AccentTone {
  const haystack = [project.data.title, ...project.data.tags].join(" ").toLowerCase();

  if (includesAny(haystack, ["game-ai", "expectimax", "heuristics", "algorithms", "python"])) {
    return "red";
  }

  if (
    includesAny(haystack, [
      "microcontrollers",
      "embedded",
      "avr",
      "uart",
      "eeprom",
      "robotics",
      "state-machines",
    ])
  ) {
    return "blue";
  }

  if (includesAny(haystack, ["geometry", "gtkmm", "fabrik", "c++", "oop", "game-architecture"])) {
    return "blue";
  }

  if (
    includesAny(haystack, [
      "programming-languages",
      "compiler",
      "lexer",
      "parser",
      "interpreter",
      "mathematics",
    ])
  ) {
    return "yellow";
  }

  return "ink";
}

export function getTalkAccentTone(talk: TalkEntry): AccentTone {
  const category = getTalkCategoryLabel(talk).toLowerCase();
  const haystack = [
    talk.id,
    talk.data.title,
    talk.data.summary,
    talk.data.venue ?? "",
    category,
    ...talk.data.tags,
  ]
    .join(" ")
    .toLowerCase();

  if (category.includes("talk")) {
    return "red";
  }

  if (
    includesAny(haystack, [
      "littérature",
      "litterature",
      "canon",
      "communication",
      "mondiaux",
      "philosophy",
      "music",
    ])
  ) {
    return "yellow";
  }

  if (category.includes("lecture notes") || category.includes("notes")) {
    return "blue";
  }

  return "ink";
}
