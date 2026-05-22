export type BookCategory = {
  label: string;
  ai: string;
};

export type BookSourceRow = {
  label: string;
  value: string;
  note: string;
};

export type BookNote = {
  id: string;
  title: string;
  tabLabel: string;
  author: string;
  year: string;
  cover: string;
  meta: string;
  presence: string[];
  summary: string;
  categories: BookCategory[];
  stats: {
    note: string;
    mentions: string;
    platforms: string;
    score: string;
  };
  sourceRows: BookSourceRow[];
};

export const literatureBooks: BookNote[] = [
  {
    id: "l-etranger",
    title: "L'Étranger",
    tabLabel: "L'Étranger",
    author: "Albert Camus",
    year: "1942",
    cover: "/notes/literature/books/l-etranger.jpg",
    meta: "Milieu du XXᵉ siècle · Roman / Absurde · ≈ 120 pages",
    presence: ["TOP 10 général (#1)","TOP 5 courts (#1)","TOP 5 pour commencer (#2)"],
    summary: "Roman fondateur de l'absurde camusien. Meursault, employé de bureau à Alger, assiste à l'enterrement de sa mère avec une indifférence troublante, tue un homme « à cause du soleil » sur une plage, puis accepte sa condamnation à mort sans révolte. La phrase est courte, blanche, dépouillée — exemple paradigmatique de ce que Barthes appellera l'« écriture du degré zéro ». Camus y dit la conscience moderne face à un monde déserté de transcendance, et fixe pour le siècle la voix d'un narrateur sans appartenance. Court, lapidaire, fondamental : nul autre titre n'apparaît dans les TOP 10 des quatre plateformes étudiées, ni n'est cité aussi souvent par les IA, toutes catégories confondues.",
    categories: [
      { label: "Général", ai: "ChatGPT, Gemini" },
      { label: "Mécanique narrative", ai: "Gemini" },
      { label: "Perfection stylistique", ai: "Gemini" },
      { label: "Profondeur psychologique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Transparence philosophique", ai: "ChatGPT, Gemini" },
      { label: "Courts", ai: "Claude, ChatGPT, Gemini" },
      { label: "Contemporain", ai: "ChatGPT" },
    ],
    stats: {
      note: "8,27/10",
      mentions: "13 / 24",
      platforms: "4 / 4",
      score: "0,785",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,2 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,3 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,0 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "les-miserables",
    title: "Les Misérables",
    tabLabel: "Misérables",
    author: "Victor Hugo",
    year: "1862",
    cover: "/notes/literature/books/les-miserables.jpg",
    meta: "XIXᵉ siècle · Roman / Fresque historique et sociale · ≈ 1 800 pages",
    presence: ["TOP 10 général (#2)"],
    summary: "Fresque humaniste monumentale. Jean Valjean, ancien forçat poursuivi par l'inspecteur Javert, traverse cinquante ans d'histoire française entre Waterloo et les barricades de 1832 — passant par Fantine, Cosette, Marius, Gavroche, le maquis et la conversion morale. Hugo y déploie une cosmogonie où la rédemption, la pauvreté, l'amour et la révolution s'entrelacent ; le souffle épique se dispute à la digression philosophique. Œuvre que tout lecteur francophone croit connaître par fragments et qu'il faut affronter en intégralité. Numéro un de la plateforme Babelio (≈ 4,6/5), présente dans les TOP 10 des quatre plateformes.",
    categories: [
      { label: "Général", ai: "Claude, ChatGPT, Gemini" },
      { label: "Mécanique narrative", ai: "ChatGPT" },
      { label: "Contemporain", ai: "ChatGPT" },
    ],
    stats: {
      note: "8,80/10",
      mentions: "5 / 24",
      platforms: "4 / 4",
      score: "0,709",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,8 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,6 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,2 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "a-la-recherche-du-temps-perdu",
    title: "À la recherche du temps perdu",
    tabLabel: "Proust",
    author: "Marcel Proust",
    year: "1927",
    cover: "/notes/literature/books/du-cote-de-chez-swann.jpg",
    meta: "Tournant du XXᵉ siècle (1913-1927) · Roman-fleuve / Mémoire et style · ≈ 3 000 pages (7 volumes)",
    presence: ["TOP 10 général (#3)"],
    summary: "Cathédrale littéraire en sept volumes. À travers le récit d'un narrateur qui tente de retrouver le temps perdu — par la madeleine trempée dans le thé, par les pavés mal joints, par la mémoire involontaire — Proust construit une métaphysique du temps et de l'art. La phrase, longue, architecturale, ramifiée, épouse le mouvement même de la conscience. C'est le sommet absolu de la prose française moderne. Dans la présente étude, c'est l'œuvre la plus citée par l'ensemble des IA : présente dans presque toutes les catégories analytiques (général, style, psychologie, mécanique narrative, philosophie), pour un total de 15 mentions IA — record du corpus.",
    categories: [
      { label: "Général", ai: "Claude, ChatGPT, Gemini" },
      { label: "Mécanique narrative", ai: "Claude, ChatGPT, Gemini" },
      { label: "Perfection stylistique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Profondeur psychologique", ai: "Claude, ChatGPT" },
      { label: "Transparence philosophique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Contemporain", ai: "ChatGPT" },
    ],
    stats: {
      note: "8,73/10",
      mentions: "15 / 24",
      platforms: "2 / 4",
      score: "0,706",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,8 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,4/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "le-comte-de-monte-cristo",
    title: "Le Comte de Monte-Cristo",
    tabLabel: "Monte-Cristo",
    author: "Alexandre Dumas",
    year: "1844",
    cover: "/notes/literature/books/le-comte-de-monte-cristo.jpg",
    meta: "XIXᵉ siècle (1844) · Roman / Aventure et vengeance · ≈ 1 500 pages",
    presence: ["TOP 10 général (#4)","TOP 5 pour commencer (#1)"],
    summary: "Roman d'aventures et de vengeance le plus addictif de la littérature française. Edmond Dantès, jeune marin honnête, est victime d'une dénonciation calomnieuse le jour de ses fiançailles. Quatorze ans plus tard, il s'évade du château d'If, redécouvre un trésor caché, et entreprend une vengeance méthodique contre ceux qui l'ont brisé — sous l'identité du Comte de Monte-Cristo. Construction romanesque parfaite, suspense haletant, sens du chapitre-cliffhanger : tout est ici pré-feuilletonesque. C'est le best-seller absolu du corpus : présent dans les TOP 10 des quatre plateformes, en tête sur trois d'entre elles (Babelio, Goodreads, Reddit).",
    categories: [

    ],
    stats: {
      note: "8,87/10",
      mentions: "0 / 24",
      platforms: "4 / 4",
      score: "0,649",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,8 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,6 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "voyage-au-bout-de-la-nuit",
    title: "Voyage au bout de la nuit",
    tabLabel: "Voyage",
    author: "Louis-Ferdinand Céline",
    year: "1932",
    cover: "/notes/literature/books/voyage-au-bout-de-la-nuit.jpg",
    meta: "Entre-deux-guerres (1932) · Roman / Picaresque noir · ≈ 500 pages",
    presence: ["TOP 10 général (#5)"],
    summary: "Détonation linguistique. Bardamu traverse la Première Guerre mondiale, l'Afrique coloniale, l'Amérique fordienne, puis revient médecin à Clichy face à la misère humaine. Céline invente une langue parlée littéraire d'une violence inouïe — argot, ponctuation hachée, rythme oral, fureur lyrique — qui changera la prose française. Cynisme, pitié, dégoût, fraternité : tout y est tordu, tendu, à la limite du tolérable. Œuvre essentielle pour les IA (cité 9 fois sur 24, dans la psychologie, le style et la mécanique narrative), présent dans les TOP 10 de SensCritique et Reddit, plus rarement cité par le grand public en raison du sulfureux de l'auteur.",
    categories: [
      { label: "Général", ai: "Claude" },
      { label: "Mécanique narrative", ai: "Claude, ChatGPT" },
      { label: "Perfection stylistique", ai: "Claude, Gemini" },
      { label: "Profondeur psychologique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Contemporain", ai: "ChatGPT" },
    ],
    stats: {
      note: "8,67/10",
      mentions: "9 / 24",
      platforms: "2 / 4",
      score: "0,627",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,6 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,4/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "le-petit-prince",
    title: "Le Petit Prince",
    tabLabel: "Petit Prince",
    author: "Antoine de Saint-Exupéry",
    year: "1943",
    cover: "/notes/literature/books/le-petit-prince.jpg",
    meta: "Milieu du XXᵉ siècle (1943) · Conte philosophique / Jeunesse-Adulte · ≈ 100 pages",
    presence: ["TOP 10 général (#6)","TOP 5 courts (#2)","TOP 5 pour commencer (#3)"],
    summary: "Conte philosophique universel. Un aviateur tombé en panne dans le désert du Sahara rencontre un petit prince venu de l'astéroïde B 612, qui lui raconte sa rose, son renard, ses planètes, et la stupidité des grandes personnes. Saint-Exupéry y condense en quelques pages tendres l'essentiel de sa philosophie aristocratique de l'engagement, de l'amitié et de la responsabilité. Œuvre la plus traduite après la Bible. Présent dans les TOP 10 de SensCritique, Babelio et Goodreads (absent seulement du TOP 10 Reddit, traditionnellement plus orienté vers les œuvres « sérieuses »).",
    categories: [
      { label: "Courts", ai: "Gemini" },
    ],
    stats: {
      note: "8,83/10",
      mentions: "1 / 24",
      platforms: "3 / 4",
      score: "0,597",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,7 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,6 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "madame-bovary",
    title: "Madame Bovary",
    tabLabel: "Bovary",
    author: "Gustave Flaubert",
    year: "1857",
    cover: "/notes/literature/books/madame-bovary.jpg",
    meta: "XIXᵉ siècle (1857) · Roman / Réalisme · ≈ 450 pages",
    presence: ["TOP 10 général (#7)"],
    summary: "Acte de naissance du roman moderne. Emma Bovary, jeune épouse d'un officier de santé médiocre dans une petite ville normande, s'invente une vie romantique pour échapper à l'ennui, multiplie les amants, accumule les dettes, et finit par s'empoisonner à l'arsenic. Flaubert y forge le style indirect libre, la phrase chantournée comme un orfèvre, et la conviction que « bien écrire le médiocre » est l'épreuve suprême. Procès retentissant pour outrage aux bonnes mœurs en 1857. Œuvre la plus consensuelle des IA pour les catégories général/mécanique narrative/style/psychologie : 14 mentions IA, sommet de la critique technique.",
    categories: [
      { label: "Général", ai: "Claude, ChatGPT, Gemini" },
      { label: "Mécanique narrative", ai: "Claude, ChatGPT, Gemini" },
      { label: "Perfection stylistique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Profondeur psychologique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Transparence philosophique", ai: "ChatGPT" },
      { label: "Contemporain", ai: "ChatGPT" },
    ],
    stats: {
      note: "7,43/10",
      mentions: "14 / 24",
      platforms: "1 / 4",
      score: "0,572",
    },
    sourceRows: [
      { label: "SensCritique", value: "7,3/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "3,8/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "3,7/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "cyrano-de-bergerac",
    title: "Cyrano de Bergerac",
    tabLabel: "Cyrano",
    author: "Edmond Rostand",
    year: "1897",
    cover: "/notes/literature/books/cyrano-de-bergerac.jpeg",
    meta: "Fin du XIXᵉ siècle (1897) · Pièce / Comédie héroïque en vers · ≈ 240 pages",
    presence: ["TOP 10 général (#8)","TOP 5 pour commencer (#4)"],
    summary: "Comédie héroïque en alexandrins qui défie son temps. Cyrano, mousquetaire au nez démesuré, poète, bretteur et libre-penseur, aime Roxane mais n'ose le lui avouer et prête son verbe au beau Christian pour la séduire. Quinze ans plus tard, il meurt en révélant l'imposture. Verve, panache, tirade du nez, ballade-en-bottes : Rostand boucle à la fin du XIXᵉ siècle l'héritage du théâtre en vers avec une virtuosité inégalée. C'est l'œuvre la mieux notée de tout le corpus (≈ 8,93/10 en moyenne), présente dans les TOP 10 de Babelio et Goodreads.",
    categories: [

    ],
    stats: {
      note: "8,93/10",
      mentions: "0 / 24",
      platforms: "2 / 4",
      score: "0,527",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,8/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "4,6 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,4 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "au-revoir-la-haut",
    title: "Au revoir là-haut",
    tabLabel: "Au revoir",
    author: "Pierre Lemaitre",
    year: "2013",
    cover: "/notes/literature/books/au-revoir-la-haut.jpg",
    meta: "XXIᵉ siècle (2013) · Roman / Sortie de guerre, Goncourt 2013 · ≈ 620 pages",
    presence: ["TOP 10 général (#9)","TOP 5 contemporain (#1)"],
    summary: "Prix Goncourt 2013, sortie de la Grande Guerre. Albert Maillard et Édouard Péricourt, deux poilus survivants de novembre 1918, montent à la sortie de la guerre une vaste escroquerie aux monuments aux morts — pour se venger d'une société qui les a sacrifiés puis méprisés. Lemaitre y conjugue le roman picaresque, la fresque historique et l'enquête morale dans une langue généreuse, populaire, mélangée à des fulgurances d'écrivain. Présent dans les TOP 10 de Babelio et Goodreads, exemple contemporain de roman littéraire à succès massif. C'est l'œuvre francophone post-2000 la mieux classée du corpus.",
    categories: [
      { label: "Contemporain", ai: "Gemini" },
    ],
    stats: {
      note: "8,60/10",
      mentions: "1 / 24",
      platforms: "2 / 4",
      score: "0,524",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,2/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "4,5 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "la-promesse-de-l-aube",
    title: "La Promesse de l'aube",
    tabLabel: "Promesse",
    author: "Romain Gary",
    year: "1960",
    cover: "/notes/literature/books/la-promesse-de-l-aube.jpg",
    meta: "Milieu du XXᵉ siècle (1960) · Récit autobiographique · ≈ 400 pages",
    presence: ["TOP 10 général (#10)","TOP 5 contemporain (#2)","TOP 5 pour commencer (#5)"],
    summary: "Hommage poignant à une mère exceptionnelle. Romain Gary raconte sa formation par sa mère Mina, juive russe et folle d'amour pour son fils unique, persuadée qu'il deviendra ambassadeur de France, écrivain célèbre, héros. Promesse improbable que Gary tiendra — pilote de la France libre, Goncourt deux fois (sous deux noms), diplomate. Tendresse, humour juif, pathétique maîtrisé, sens du portrait : Gary tient l'équilibre du grand récit personnel sans pathos. Présent dans les TOP 10 Babelio et Goodreads, plébiscité comme une des entrées les plus émouvantes du XXᵉ siècle.",
    categories: [

    ],
    stats: {
      note: "8,73/10",
      mentions: "0 / 24",
      platforms: "2 / 4",
      score: "0,518",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,4/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "4,5 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,4 ★/5", note: "Présent dans le TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "la-horde-du-contrevent",
    title: "La Horde du contrevent",
    tabLabel: "Horde",
    author: "Alain Damasio",
    year: "2004",
    cover: "/notes/literature/books/la-horde-du-contrevent.webp",
    meta: "XXIᵉ siècle (2004) · Roman / Science-fiction littéraire · ≈ 720 pages",
    presence: ["TOP 5 contemporain (#3)"],
    summary: "OVNI littéraire de la science-fiction française contemporaine. Une « horde » de vingt-trois personnages, formée depuis l'enfance et organisée en convoi, marche pendant des décennies face au vent vers l'amont d'un monde où l'air est devenu courant violent et constant. Damasio invente une langue propre — souffle, halètement, ponctuation typographique, polyphonie — qui mime physiquement la marche contre le vent. Roman-fleuve d'une exigence rare, plébiscité par la communauté SF francophone. Présent dans le TOP 10 SensCritique, exemple unique d'œuvre contemporaine de genre arrivée dans le canon « littéraire » du corpus.",
    categories: [
      { label: "Contemporain", ai: "Gemini" },
    ],
    stats: {
      note: "8,40/10",
      mentions: "1 / 24",
      platforms: "1 / 4",
      score: "0,453",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,0 ★/10", note: "Présent dans le TOP 10 SC" },
      { label: "Babelio", value: "4,3/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "changer-l-eau-des-fleurs",
    title: "Changer l'eau des fleurs",
    tabLabel: "Fleurs",
    author: "Valérie Perrin",
    year: "2018",
    cover: "/notes/literature/books/changer-l-eau-des-fleurs.jpg",
    meta: "XXIᵉ siècle (2018) · Roman / Drame contemporain · ≈ 670 pages",
    presence: ["TOP 5 contemporain (#4)"],
    summary: "Phénomène d'édition français des années 2010. Violette Toussaint, gardienne d'un cimetière de Bourgogne, accueille les vivants comme les morts ; un policier vient enquêter sur les cendres d'une femme qui devaient être dispersées sur la tombe d'un inconnu — la révélation va défaire le passé secret de Violette. Composition en strates et flash-backs, sentimentalisme assumé mais maîtrisé, sens de la consolation. Phénoménal succès Babelio (≈ 4,4/5) et Goodreads, qui en fait le titre francophone le plus lu de la décennie 2010. Présent dans le TOP 10 Babelio.",
    categories: [

    ],
    stats: {
      note: "8,23/10",
      mentions: "0 / 24",
      platforms: "1 / 4",
      score: "0,433",
    },
    sourceRows: [
      { label: "SensCritique", value: "7,3/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "4,4 ★/5", note: "Présent dans le TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "memoires-d-hadrien",
    title: "Mémoires d'Hadrien",
    tabLabel: "Hadrien",
    author: "Marguerite Yourcenar",
    year: "1951",
    cover: "/notes/literature/books/memoires-d-hadrien.jpg",
    meta: "Milieu du XXᵉ siècle (1951) · Roman historique / Méditation philosophique · ≈ 350 pages",
    presence: ["TOP 5 contemporain (#5)"],
    summary: "Méditation philosophique sous forme de testament. L'empereur Hadrien, vieillissant et malade, adresse à son successeur Marc Aurèle une longue lettre où il retrace sa vie, ses guerres, ses politiques, ses amours (Antinoüs), et où il médite sur le pouvoir, la mort et la sagesse stoïcienne. Yourcenar publie en 1951 ce roman qui lui aura demandé vingt-cinq ans d'écriture ; elle deviendra en 1980 la première femme élue à l'Académie française. Prose ciselée, latine, presque épigraphique. Citée par les trois IA dans la catégorie contemporain — exemple de la grande prose française du second XXᵉ siècle.",
    categories: [
      { label: "Perfection stylistique", ai: "ChatGPT" },
      { label: "Transparence philosophique", ai: "Claude" },
      { label: "Contemporain", ai: "Claude" },
    ],
    stats: {
      note: "8,60/10",
      mentions: "3 / 24",
      platforms: "0 / 4",
      score: "0,424",
    },
    sourceRows: [
      { label: "SensCritique", value: "8,4/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "4,4/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "4,3/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
  {
    id: "candide",
    title: "Candide",
    tabLabel: "Candide",
    author: "Voltaire",
    year: "1759",
    cover: "/notes/literature/books/candide.jpg",
    meta: "XVIIIᵉ siècle (1759) · Conte philosophique · ≈ 150 pages",
    presence: ["TOP 5 courts (#3)"],
    summary: "Bréviaire de l'esprit français. Candide, jeune homme « le plus simple » élevé dans un château allemand, est chassé pour avoir embrassé Cunégonde, traverse Lisbonne en plein tremblement de terre, la guerre, l'Eldorado, l'esclavage colonial, l'Inquisition portugaise — sous la conduite du faux optimiste Pangloss. À la fin, désabusé, il se rallie au célèbre « il faut cultiver notre jardin ». Vif, mordant, court, drôle : la satire philosophique parfaite, et l'arme la plus efficace des Lumières contre le leibnizianisme. Plébiscité par les trois IA dans la catégorie philosophie/Lumières.",
    categories: [
      { label: "Général", ai: "Gemini" },
      { label: "Transparence philosophique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Courts", ai: "Claude, ChatGPT, Gemini" },
    ],
    stats: {
      note: "7,63/10",
      mentions: "7 / 24",
      platforms: "1 / 4",
      score: "0,493",
    },
    sourceRows: [
      { label: "SensCritique", value: "7,5/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "3,9/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "3,8/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "la-nausee",
    title: "La Nausée",
    tabLabel: "Nausée",
    author: "Jean-Paul Sartre",
    year: "1938",
    cover: "/notes/literature/books/la-nausee.jpg",
    meta: "Avant-guerre (1938) · Roman / Existentialisme · ≈ 250 pages",
    presence: ["TOP 5 courts (#4)"],
    summary: "Premier roman de Sartre, manifeste de l'existentialisme à venir. Antoine Roquentin, historien solitaire en exil à Bouville, sent monter en lui une « nausée » indéfinissable — la conscience nue de l'existence comme contingence, « être-de-trop », opacité du réel. La célèbre scène du marronnier dans le jardin public donne la formule : l'existence précède l'essence. Court, dense, accessible, fondamental. Présent dans le TOP 10 Reddit (canon académique des grandes œuvres françaises post-1900), assez peu cité par les IA mais reconnu par Claude dans la catégorie philosophie.",
    categories: [
      { label: "Transparence philosophique", ai: "Claude" },
    ],
    stats: {
      note: "7,77/10",
      mentions: "1 / 24",
      platforms: "1 / 4",
      score: "0,424",
    },
    sourceRows: [
      { label: "SensCritique", value: "7,7/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "3,9/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "3,9/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "★", note: "Présent dans le TOP 10 communautaire Reddit" },
    ],
  },
  {
    id: "la-princesse-de-cleves",
    title: "La Princesse de Clèves",
    tabLabel: "Clèves",
    author: "Madame de La Fayette",
    year: "1678",
    cover: "/notes/literature/books/la-princesse-de-cleves.jpg",
    meta: "Grand Siècle (1678) · Roman / Premier roman psychologique français · ≈ 220 pages",
    presence: ["TOP 5 courts (#5)"],
    summary: "Premier roman psychologique de la littérature française. La princesse de Clèves, mariée par convenance, s'éprend en secret du duc de Nemours mais refuse l'adultère ; elle avoue son trouble à son époux — geste inouï dans la société de cour — qui en meurt de chagrin. À sa propre mort, elle choisit la retraite. Œuvre courte (Mme de La Fayette publie anonymement), d'une concision géométrique, qui invente la profondeur du personnage moderne. Plébiscitée par les trois IA en psychologie et présence dans la catégorie courts.",
    categories: [
      { label: "Général", ai: "Claude, ChatGPT" },
      { label: "Mécanique narrative", ai: "ChatGPT" },
      { label: "Perfection stylistique", ai: "Claude" },
      { label: "Profondeur psychologique", ai: "Claude, ChatGPT, Gemini" },
      { label: "Courts", ai: "ChatGPT, Gemini" },
    ],
    stats: {
      note: "6,60/10",
      mentions: "9 / 24",
      platforms: "0 / 4",
      score: "0,409",
    },
    sourceRows: [
      { label: "SensCritique", value: "6,4/10", note: "Hors TOP 10 SC" },
      { label: "Babelio", value: "3,3/5", note: "Hors TOP 10 Babelio" },
      { label: "Goodreads", value: "3,4/5", note: "Hors TOP 10 Goodreads" },
      { label: "Reddit", value: "—", note: "Hors TOP 10 Reddit" },
    ],
  },
];
