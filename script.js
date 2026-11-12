/* =========================================================
   Zafir Perfumaria — script.js
   Para adicionar/editar perfumes, mexa só na lista PERFUMES.
   ========================================================= */

const WHATSAPP_NUMBER = "5592981420723";

/* Cor de cada acorde (usada nas bolinhas, filtros e barras) */
const ACCORD_COLORS = {
  citrico: "#f6c445",
  fresco: "#49b6a9",
  "fresco especiado": "#4d9e8a",
  aromatico: "#3f8f7a",
  frutado: "#ff4b2f",
  tropical: "#e77f3f",
  doce: "#d62f3b",
  gourmand: "#a45b34",
  baunilha: "#d8b56d",
  cremoso: "#d28bb8",
  floral: "#bf4d7c",
  rosa: "#b80d54",
  almiscarado: "#b8b0bf",
  atalcado: "#cfb8cf",
  amadeirado: "#9a5f35",
  musgo: "#5d6b3a",
  terroso: "#6b5544",
  especiado: "#9f5233",
  "especiado quente": "#c04c22",
  "picante suave": "#a96345",
  couro: "#5c3627",
  defumado: "#59514b",
  oud: "#4d2a1d",
  ambar: "#c17a32",
  herbal: "#496d56",
  verde: "#2f7a3d",
  lavanda: "#8f7bb0",
};

/*
  Campos de cada perfume:
  - field: cor do "azulejo" atrás da foto
  - accords: do mais forte para o mais fraco (intensity só define o tamanho da barra; o número não aparece no site)
  - fixation / projection: de 0 a 100 (aparece como "Alta", "Muito alta"...)
*/
const PERFUMES = [
  {
    id: "hawas-black",
    name: "Hawas Black",
    brand: "Rasasi",
    gender: "Masculino",
    image: "assets/img/hawas-black-v2.jpg",
    field: "#262626",
    price: 399,
    volume: "100ml",
    soldOut: false,
    description: "Amadeirado e cítrico, sério e elegante. Presença forte sem exagero.",
    longDescription:
      "Para quem quer passar uma imagem séria, elegante e confiante. A saída de abacaxi, toranja e bergamota traz frescor, e o fundo de musgo de carvalho e madeiras segura o perfume por horas. É o cheiro de quem está bem-vestido e não precisa chamar atenção para ser notado.",
    notes: {
      top: ["Bergamota", "Abacaxi", "Toranja"],
      mid: ["Patchouli", "Cedro", "Jasmim"],
      base: ["Musgo de carvalho", "Âmbar", "Notas amadeiradas"],
    },
    accords: [
      { name: "amadeirado", intensity: 95 },
      { name: "cítrico", intensity: 88 },
      { name: "musgo", intensity: 82 },
      { name: "terroso", intensity: 75 },
    ],
    fixation: 95,
    projection: 92,
    trail: "Imponente e marcante",
    mood: "Masculino sofisticado",
    season: "Dia a dia e trabalho",
    occasions: ["Trabalho", "Eventos", "Noite", "Encontros"],
  },
  {
    id: "hawas-kobra",
    name: "Hawas Kobra",
    brand: "Rasasi",
    gender: "Masculino",
    image: "assets/img/hawas-kobra-v2.jpg",
    field: "#22323d",
    price: 469,
    volume: "100ml",
    soldOut: false,
    description: "Cítrico e especiado, com sensação de banho tomado e caro.",
    longDescription:
      "Fresco, limpo e muito agradável. Gengibre, bergamota e tangerina abrem com energia, o chá verde e o néroli deixam tudo mais sofisticado, e o fundo de almíscar e âmbar mantém a presença sem pesar. Agrada fácil e vai muito bem no calor.",
    notes: {
      top: ["Gengibre", "Bergamota", "Tangerina"],
      mid: ["Chá verde", "Canela", "Néroli"],
      base: ["Almíscar", "Notas amadeiradas", "Âmbar"],
    },
    accords: [
      { name: "cítrico", intensity: 98 },
      { name: "fresco especiado", intensity: 92 },
      { name: "fresco", intensity: 88 },
      { name: "almiscarado", intensity: 80 },
    ],
    fixation: 98,
    projection: 95,
    trail: "Limpo e fresco",
    mood: "Leve e tranquilo",
    season: "Dia a dia e calor",
    occasions: ["Calor", "Trabalho", "Eventos"],
  },
  {
    id: "9pm-rebel",
    name: "9pm Rebel",
    brand: "Afnan",
    gender: "Masculino",
    image: "assets/img/9pm-rebel-v2.jpg",
    field: "#7a1a14",
    price: 429,
    volume: "100ml",
    soldOut: false,
    description: "Abacaxi suculento, doce e levemente defumado. Jovem e cheio de presença.",
    longDescription:
      "O abacaxi é o protagonista: suculento, como fruta recém-cortada. Maçã verde e mandarina deixam a saída ainda mais viva, e o fundo de caramelo, baunilha e madeira seca traz um toque defumado que deixa o perfume diferente e marcante.",
    notes: {
      top: ["Abacaxi", "Maçã verde", "Mandarina"],
      mid: ["Musgo de carvalho", "Cedro", "Baunilha"],
      base: ["Madeira seca", "Âmbar cinzento", "Caramelo", "Almíscar"],
    },
    accords: [
      { name: "frutado", intensity: 94 },
      { name: "doce", intensity: 90 },
      { name: "amadeirado", intensity: 80 },
      { name: "tropical", intensity: 75 },
    ],
    fixation: 92,
    projection: 90,
    trail: "Sedutor e atraente",
    mood: "Jovem e ousado",
    season: "Noite e encontros",
    occasions: ["Noite", "Festas", "Encontros"],
  },
  {
    id: "club-de-nuit",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    gender: "Masculino",
    image: "assets/img/club-de-nuit.webp",
    field: "#202020",
    price: 359,
    volume: "105ml",
    soldOut: false,
    description: "Cítrico, frutado e defumado. Um clássico de fixação e projeção.",
    longDescription:
      "Um dos masculinos mais admirados do mundo. Abre com limão, abacaxi e groselha preta, cheio de energia, e logo ganha o lado defumado da bétula, que é a sua marca. O fundo de âmbar gris, almíscar e baunilha deixa um rastro elegante por muitas horas.",
    notes: {
      top: ["Limão", "Abacaxi", "Bergamota", "Groselha preta", "Maçã"],
      mid: ["Bétula", "Jasmim", "Rosa"],
      base: ["Âmbar gris", "Almíscar", "Patchouli", "Baunilha"],
    },
    accords: [
      { name: "cítrico", intensity: 96 },
      { name: "frutado", intensity: 88 },
      { name: "couro", intensity: 78 },
      { name: "defumado", intensity: 72 },
      { name: "amadeirado", intensity: 66 },
      { name: "aromático", intensity: 60 },
      { name: "doce", intensity: 52 },
      { name: "fresco", intensity: 46 },
    ],
    fixation: 95,
    projection: 92,
    trail: "Potente e elegante",
    mood: "Assinatura masculina",
    season: "Eventos e noite",
    occasions: ["Noite", "Eventos", "Encontros"],
  },
  {
    id: "yara",
    name: "Yara",
    brand: "Lattafa",
    gender: "Feminino",
    image: "assets/img/yara.webp",
    field: "#e2b4bb",
    price: 299,
    volume: "100ml",
    soldOut: false,
    description: "Doce e cremosa: baunilha, frutas tropicais e almíscar macio.",
    longDescription:
      "Doce, cremosa e reconhecível de longe. Orquídea, heliotrópio e tangerina abrem com delicadeza, o coração gourmand traz frutas tropicais, e a base de baunilha, almíscar e sândalo deixa a pele macia e perfumada.",
    notes: {
      top: ["Orquídea", "Heliotrópio", "Tangerina"],
      mid: ["Acorde gourmand", "Frutas tropicais"],
      base: ["Baunilha", "Almíscar", "Sândalo"],
    },
    accords: [
      { name: "doce", intensity: 96 },
      { name: "baunilha", intensity: 90 },
      { name: "atalcado", intensity: 82 },
      { name: "tropical", intensity: 74 },
      { name: "frutado", intensity: 66 },
      { name: "almiscarado", intensity: 60 },
      { name: "floral", intensity: 52 },
      { name: "cítrico", intensity: 44 },
    ],
    fixation: 84,
    projection: 78,
    trail: "Cremoso e doce",
    mood: "Feminino moderno",
    season: "Dia e encontros",
    occasions: ["Dia", "Noite", "Encontros"],
  },
  {
    id: "sabah-al-ward",
    name: "Sabah Al Ward",
    brand: "Al Wataniah",
    gender: "Feminino",
    image: "assets/img/sabah-al-ward-v2.jpg",
    field: "#5a1838",
    price: 279,
    volume: "100ml",
    soldOut: false,
    description: "Floral e adocicado, com flor de laranjeira, cacau e baunilha.",
    longDescription:
      "Uma homenagem à feminilidade. Flor de laranjeira e jasmim aparecem sobre um fundo quente de baunilha, fava tonka e um toque de cacau, com a pimenta rosa dando brilho na saída. Romântico, envolvente e fácil de usar em qualquer ocasião.",
    notes: {
      top: ["Pimenta rosa", "Mandarina"],
      mid: ["Flor de laranjeira", "Jasmim", "Cacau"],
      base: ["Baunilha", "Fava tonka", "Patchouli"],
    },
    accords: [
      { name: "floral", intensity: 92 },
      { name: "baunilha", intensity: 85 },
      { name: "doce", intensity: 80 },
      { name: "cítrico", intensity: 72 },
    ],
    fixation: 90,
    projection: 82,
    trail: "Envolvente e romântico",
    mood: "Feminino encantador",
    season: "Qualquer ocasião",
    occasions: ["Dia", "Noite", "Encontros"],
  },
  {
    id: "durrat-al-aroos",
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    gender: "Feminino",
    image: "assets/img/durrat-al-aroos.webp",
    field: "#7a5a3c",
    price: 279,
    volume: "85ml",
    soldOut: false,
    description: "Almíscar branco, baunilha e açafrão numa aura doce, limpa e sensual.",
    longDescription:
      "Delicado e envolvente. A sensação limpa do almíscar branco encontra especiarias suaves, como cardamomo e açafrão, e um toque cremoso de baunilha. O fundo de madeira guaiac deixa tudo mais quente e elegante.",
    notes: {
      top: ["Almíscar branco", "Nagarmotha"],
      mid: ["Baunilha", "Cardamomo", "Açafrão"],
      base: ["Madeira guaiac", "Cumarina"],
    },
    accords: [
      { name: "especiado quente", intensity: 96 },
      { name: "amadeirado", intensity: 90 },
      { name: "baunilha", intensity: 82 },
      { name: "almiscarado", intensity: 76 },
      { name: "atalcado", intensity: 70 },
      { name: "aromático", intensity: 64 },
      { name: "doce", intensity: 58 },
    ],
    fixation: 86,
    projection: 74,
    trail: "Doce e limpo",
    mood: "Feminino elegante",
    season: "Noite e clima ameno",
    occasions: ["Noite", "Encontros", "Festas"],
  },
  {
    id: "sabah-body-splash",
    name: "Sabah Al Ward Body Splash",
    brand: "Al Wataniah",
    gender: "Feminino",
    image: "assets/img/sabah-body-splash.jpg",
    field: "#3d1226",
    price: 179,
    volume: "250ml",
    soldOut: false,
    description: "A versão leve do Sabah Al Ward, em frasco de 250ml para o corpo todo.",
    longDescription:
      "Toda a assinatura do Sabah Al Ward numa versão mais leve e refrescante para o dia a dia. Ótimo para borrifar no corpo depois do banho: perfuma de forma suave e dura bem para um body splash.",
    notes: {
      top: ["Pimenta rosa", "Mandarina"],
      mid: ["Flor de laranjeira", "Jasmim", "Cacau"],
      base: ["Baunilha", "Fava tonka", "Patchouli"],
    },
    accords: [
      { name: "floral", intensity: 90 },
      { name: "baunilha", intensity: 85 },
      { name: "doce", intensity: 78 },
      { name: "fresco", intensity: 75 },
    ],
    fixation: 75,
    projection: 70,
    trail: "Suave e envolvente",
    mood: "Feminino leve",
    season: "Dia a dia e pós-banho",
    occasions: ["Dia", "Trabalho", "Lazer"],
  },
  {
    id: "attar-al-wesal",
    name: "Attar Al Wesal",
    brand: "Al Wataniah Khususi",
    gender: "Masculino",
    image: "assets/img/attar-al-wesal-v2.jpg",
    field: "#2b2116",
    price: 269,
    volume: "100ml",
    soldOut: true,
    description: "Lavanda, hortelã e bergamota sobre baunilha negra e âmbar.",
    longDescription:
      "Intenso, envolvente e surpreendentemente versátil. A saída une hortelã, lavanda e bergamota num frescor aromático, o coração de canela e sálvia aquece, e a baunilha negra com âmbar e patchouli deixa um rastro escuro e imponente.",
    notes: {
      top: ["Hortelã", "Lavanda", "Bergamota"],
      mid: ["Canela", "Sálvia esclareia", "Cominho"],
      base: ["Baunilha negra", "Âmbar", "Patchouli"],
    },
    accords: [
      { name: "aromático", intensity: 96 },
      { name: "lavanda", intensity: 88 },
      { name: "baunilha", intensity: 82 },
      { name: "fresco especiado", intensity: 76 },
      { name: "verde", intensity: 70 },
      { name: "doce", intensity: 64 },
      { name: "amadeirado", intensity: 52 },
      { name: "âmbar", intensity: 40 },
    ],
    fixation: 92,
    projection: 88,
    trail: "Escuro e imponente",
    mood: "Masculino poderoso",
    season: "Noite e clima ameno",
    occasions: ["Noite", "Trabalho", "Eventos"],
  },
  {
    id: "bidaya-elliur",
    name: "Bidaya Elliur",
    brand: "Bidaya",
    gender: "Masculino",
    image: "assets/img/bidaya-elliur.jpg",
    field: "#1d4430",
    price: 329,
    volume: "100ml",
    soldOut: true,
    description: "Frutado e aromático: cítricos, ervas frescas e um toque de rosa.",
    longDescription:
      "Vibrante e cheio de personalidade. A saída é uma explosão de frutas e cítricos, com energia desde o primeiro borrifo. Depois vêm nuances de manjericão, coentro e rosa, que dão sofisticação sem perder o frescor, e uma base macia e levemente adocicada. Muito versátil para o calor de Manaus.",
    notes: {
      top: ["Groselha preta", "Cidra", "Limão", "Menta", "Laranja"],
      mid: ["Damasco", "Manjericão", "Coentro", "Rosa de maio"],
      base: ["Ambrette", "Cenoura", "Tâmaras", "Figo"],
    },
    accords: [
      { name: "frutado", intensity: 96 },
      { name: "aromático", intensity: 82 },
      { name: "doce", intensity: 80 },
      { name: "picante suave", intensity: 66 },
      { name: "floral", intensity: 65 },
      { name: "almiscarado", intensity: 62 },
      { name: "rosa", intensity: 50 },
      { name: "verde", intensity: 42 },
    ],
    fixation: 74,
    projection: 70,
    trail: "Fresco e frutado",
    mood: "Moderno e versátil",
    season: "Dia e calor",
    occasions: ["Dia", "Trabalho", "Calor"],
  },
];

/* ---------- utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const money = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const accordColor = (name) => ACCORD_COLORS[norm(name)] || "#b8893a";

function textOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#17130f" : "#ffffff";
}
function level(v) {
  if (v >= 93) return "Muito alta";
  if (v >= 85) return "Alta";
  if (v >= 75) return "Boa";
  return "Moderada";
}
function waUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

/* ---------- tema ---------- */
const root = document.documentElement;
const themeBtn = $("#themeBtn");
const logoImg = $("#logoImg");
const themeMeta = $('meta[name="theme-color"]');

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const light = theme === "light";
  logoImg.src = light ? "assets/img/logo-light.jpg" : "assets/img/logo-dark.jpg";
  themeBtn.setAttribute("aria-label", light ? "Mudar para tema escuro" : "Mudar para tema claro");
  themeMeta?.setAttribute("content", light ? "#f4f1ec" : "#100e0c");
  try { localStorage.setItem("zafir-theme", theme); } catch (e) {}
}
applyTheme(root.getAttribute("data-theme") || "dark");
themeBtn.addEventListener("click", () => applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light"));

/* ---------- links do WhatsApp ---------- */
const WA_DEFAULT = "Olá, Zafir! Quero saber mais sobre os perfumes.";
$$("[data-wa]").forEach((a) => (a.href = waUrl(WA_DEFAULT)));
$$("[data-wa-product]").forEach((a) => (a.href = waUrl(`Olá, Zafir! Quero pedir o perfume ${a.dataset.waProduct}.`)));

/* ---------- barra: some ao descer, volta ao subir ---------- */
const nav = $("#nav");
let lastY = window.scrollY;
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 8);
      nav.classList.toggle("is-hidden", y > 420 && y > lastY + 4);
      if (y < lastY - 4) nav.classList.remove("is-hidden");
      lastY = y;
      ticking = false;
    });
  },
  { passive: true },
);
nav.addEventListener("focusin", () => nav.classList.remove("is-hidden"));

/* ---------- revelações ao rolar ----------
   Um grupo ([data-r-group]) entra inteiro, com as partes em sequência
   (título, texto, foto...). Elementos soltos entram sozinhos. */
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add("in");
      if (el.hasAttribute("data-r-group")) $$("[data-r]", el).forEach((c) => c.classList.add("in"));
      revealer.unobserve(el);
    });
  },
  { rootMargin: "0px 0px -10% 0px", threshold: 0 },
);
$$("[data-r-group]").forEach((g) => {
  $$("[data-r]", g).forEach((el, i) => el.style.setProperty("--d", i));
  revealer.observe(g);
});
$$("[data-r], .mark").forEach((el) => {
  if (!el.closest("[data-r-group]") && !el.closest(".hero")) revealer.observe(el);
});

/* ---------- hero: entrada ---------- */
const hero = $(".hero");
requestAnimationFrame(() => requestAnimationFrame(() => {
  hero.classList.add("ready");
  $$("[data-r]", hero).forEach((el) => el.classList.add("in"));
}));

/* ---------- baralho de cards no topo ----------
   Passa sozinho a cada DECK_MS; pausa com o mouse em cima, fora da tela
   ou com a aba escondida. Dá para arrastar com o dedo e usar as setas. */
const DECK_MS = 3600;
const deck = $("#deck");
const deckCards = $("#deckCards");
const deckFill = $("#deckFill");
const deckList = PERFUMES.filter((p) => !p.soldOut);
let dIndex = 0;

deckCards.innerHTML = deckList
  .map(
    (p, i) => `
    <button type="button" class="dcard" data-open="${p.id}" data-pos="${i === 0 ? 0 : "back"}"
      style="--field:${p.field};--on-field:${textOn(p.field)}"
      aria-label="${esc(p.name)}, ${esc(p.brand)}, R$ ${money(p.price)}. Ver detalhes">
      <span class="dcard-img"><img src="${p.image}" alt="" width="900" height="900" ${i > 2 ? 'loading="lazy"' : ""} decoding="async" /></span>
      <span class="dcard-info"><span class="dcard-name">${esc(p.name)}</span><span class="dcard-meta">${esc(p.brand)} · R$ ${money(p.price)}</span></span>
    </button>`,
  )
  .join("");
const dCards = $$(".dcard", deckCards);

function layoutDeck() {
  const n = dCards.length;
  dCards.forEach((c, i) => {
    const pos = (i - dIndex + n) % n;
    c.dataset.pos = pos < 3 ? String(pos) : pos === n - 1 ? "out" : "back";
    c.tabIndex = pos === 0 ? 0 : -1;
    c.setAttribute("aria-hidden", pos === 0 ? "false" : "true");
  });
  $("#deckCount").textContent = `${dIndex + 1} de ${n}`;
  deckFill.classList.remove("run");
  void deckFill.offsetWidth;
  deckFill.style.setProperty("--dur", `${DECK_MS}ms`);
  deckFill.classList.add("run");
}
function stepDeck(d) {
  dIndex = (dIndex + d + dCards.length) % dCards.length;
  layoutDeck();
}
deckFill.addEventListener("animationend", () => stepDeck(1));
$("#deckNext").addEventListener("click", () => stepDeck(1));
$("#deckPrev").addEventListener("click", () => stepDeck(-1));

const pause = { hover: false, view: false, tab: false };
const syncPause = () => deck.classList.toggle("paused", pause.hover || pause.view || pause.tab);
deck.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { pause.hover = true; syncPause(); } });
deck.addEventListener("pointerleave", () => { pause.hover = false; syncPause(); });
deck.addEventListener("focusin", () => { pause.hover = true; syncPause(); });
deck.addEventListener("focusout", () => { pause.hover = false; syncPause(); });
document.addEventListener("visibilitychange", () => { pause.tab = document.hidden; syncPause(); });
new IntersectionObserver(([e]) => { pause.view = !e.isIntersecting; syncPause(); }).observe(deck);
deck.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") stepDeck(1);
  if (e.key === "ArrowLeft") stepDeck(-1);
});

/* arrastar para os lados troca o card */
let swipeX = null;
let swiped = false;
deckCards.addEventListener("pointerdown", (e) => { swipeX = e.clientX; swiped = false; });
deckCards.addEventListener("pointerup", (e) => {
  if (swipeX === null) return;
  const dx = e.clientX - swipeX;
  swipeX = null;
  if (Math.abs(dx) > 40) { swiped = true; stepDeck(dx < 0 ? 1 : -1); }
});
deckCards.addEventListener("click", (e) => {
  if (swiped) { e.stopPropagation(); e.preventDefault(); swiped = false; }
}, true);

layoutDeck();
setTimeout(() => deck.classList.add("spread"), 900);

/* ---------- WhatsApp flutuante: aparece depois do topo ---------- */
/* ---------- WhatsApp flutuante: some no topo e no rodapé ---------- */
const waFloat = $("#waFloat");
const waHide = { hero: true, foot: false };
const syncWa = () => waFloat.classList.toggle("is-on", !waHide.hero && !waHide.foot);
new IntersectionObserver(([e]) => { waHide.hero = e.isIntersecting; syncWa(); }, { rootMargin: "-40% 0px 0px 0px" }).observe(hero);
new IntersectionObserver(([e]) => { waHide.foot = e.isIntersecting; syncWa(); }).observe($(".foot-last"));

/* ---------- catálogo ---------- */
const grid = $("#grid");
const countEl = $("#catCount");
const searchInput = $("#searchInput");
const state = { accord: "", gender: "", term: "" };

PERFUMES.sort((a, b) => Number(a.soldOut) - Number(b.soldOut));

function matches(p) {
  if (state.gender && p.gender !== state.gender) return false;
  if (state.accord && !p.accords.some((a) => norm(a.name).includes(state.accord))) return false;
  if (state.term) {
    const hay = norm([p.name, p.brand, p.gender, ...p.accords.map((a) => a.name)].join(" "));
    if (!hay.includes(norm(state.term.trim()))) return false;
  }
  return true;
}

function cardHTML(p, i) {
  const accords = p.accords
    .slice(0, 3)
    .map((a) => `<span style="--c:${accordColor(a.name)}">${esc(a.name)}</span>`)
    .join("");
  const price = p.soldOut
    ? `<p class="card-price">Esgotado</p><p class="card-inst">Avisamos quando chegar</p>`
    : `<p class="card-price">R$ ${money(p.price)}</p><p class="card-inst">ou 12x de R$ ${money(p.price / 12)} + taxa</p>`;
  return `
    <button type="button" class="card enter${p.soldOut ? " is-soldout" : ""}" data-open="${p.id}" style="--i:${i}">
      <span class="tile" style="--field:${p.field}">
        <img src="${p.image}" alt="${esc(p.name)}, ${esc(p.brand)}" width="900" height="900" loading="lazy" decoding="async" />
        ${p.soldOut ? `<span class="tag">Esgotado</span>` : ""}
      </span>
      <span class="card-body">
        <span class="item-name">${esc(p.name)}</span>
        <span class="card-meta">${esc(p.brand)} · ${p.gender} · ${p.volume}</span>
        <span class="card-accords">${accords}</span>
        ${price.replace(/<p /g, "<span ").replace(/<\/p>/g, "</span>")}
        <span class="card-more">${p.soldOut ? "Quero ser avisado" : "Ver notas e parcelas"}</span>
      </span>
    </button>`;
}

function describeFilter(n) {
  const word = n === 1 ? "perfume" : "perfumes";
  const accordName = $(`.chip[data-accord="${state.accord}"]`)?.textContent.toLowerCase();
  const parts = [`${n} ${word}`];
  if (state.gender) parts.push(state.gender === "Masculino" ? "masculinos" : "femininos");
  if (state.accord) parts.push(`com acorde ${accordName}`);
  return n === PERFUMES.length && !state.term ? `${n} fragrâncias` : parts.join(" ");
}

function render() {
  const list = PERFUMES.filter(matches);
  countEl.textContent = describeFilter(list.length);
  if (!list.length) {
    grid.innerHTML = `<p class="empty">Nenhum perfume com esse filtro. <button type="button" id="clearFilters">Ver todos</button></p>`;
    $("#clearFilters").addEventListener("click", resetFilters);
    return;
  }
  grid.innerHTML = list.map(cardHTML).join("");
}

function setAccord(value) {
  state.accord = value;
  $$("#accordChips .chip").forEach((c) => {
    const on = c.dataset.accord === value;
    c.classList.toggle("is-on", on);
    c.setAttribute("aria-pressed", on);
  });
  render();
}
function setGender(value) {
  state.gender = value;
  const btns = $$("#genderSeg .seg-btn");
  btns.forEach((b, i) => {
    const on = b.dataset.gender === value;
    b.classList.toggle("is-on", on);
    b.setAttribute("aria-pressed", on);
    if (on) $("#genderSeg").style.setProperty("--seg-i", i);
  });
  render();
}
function resetFilters() {
  searchInput.value = "";
  state.term = "";
  state.gender = "";
  setGender("");
  setAccord("");
}

$("#accordChips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) setAccord(chip.dataset.accord);
});
$("#genderSeg").addEventListener("click", (e) => {
  const b = e.target.closest(".seg-btn");
  if (b) setGender(b.dataset.gender);
});
let searchTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.term = searchInput.value;
    render();
  }, 120);
});

render();

/* ---------- pirâmide olfativa: ícones das notas ----------
   Cada nota tem um desenho (tipo) e uma cor. Nota nova? Adicione em NOTE_ART
   com o nome sem acento e em minúsculas. Sem cadastro, o site escolhe pelo nome. */
const NOTE_ART = {
  bergamota: ["citrus", "#b9c94a"], toranja: ["citrus", "#f07a5f"], tangerina: ["citrus", "#f28b30"],
  mandarina: ["citrus", "#f39c35"], limao: ["citrus", "#f4d03f"], cidra: ["citrus", "#e6d24a"], laranja: ["citrus", "#f5a623"],
  abacaxi: ["pineapple", "#f2b632"], "frutas tropicais": ["fruit", "#ff9f43"], "maca verde": ["fruit", "#8cc152"],
  maca: ["fruit", "#d64541"], damasco: ["fruit", "#f6a04d"], figo: ["fig", "#7d3c64"], "groselha preta": ["berries", "#3e2a4f"],
  jasmim: ["flower", "#fbf6e9"], neroli: ["flower", "#fbf3dc"], "flor de laranjeira": ["flower", "#fdf6e3"],
  rosa: ["flower", "#e0567f"], "rosa de maio": ["flower", "#ea7aa0"], orquidea: ["flower", "#d58fd0"], heliotropio: ["flower", "#a98fd6"],
  lavanda: ["lavender", "#9b8ec7"],
  patchouli: ["leaf", "#6b5a3a"], "musgo de carvalho": ["leaf", "#74843f"], "cha verde": ["leaf", "#7aa35a"], hortela: ["leaf", "#4fae5c"],
  menta: ["leaf", "#3fae7f"], manjericao: ["leaf", "#4e9a4a"], "salvia esclareia": ["leaf", "#9aae8a"],
  cedro: ["wood", "#b07a4a"], "notas amadeiradas": ["wood", "#9a6a40"], "madeira seca": ["wood", "#8b6b4a"],
  sandalo: ["wood", "#c99a68"], "madeira guaiac": ["wood", "#7a5233"], betula: ["smoke", "#8a8580"],
  ambar: ["drop", "#e09b35"], "ambar cinzento": ["drop", "#bdb29a"], "ambar gris": ["drop", "#c8bda5"],
  almiscar: ["musk", "#c9bcd8"], "almiscar branco": ["musk", "#ddd6e4"],
  caramelo: ["candy", "#c97b2e"], "acorde gourmand": ["candy", "#b5713f"],
  baunilha: ["pod", "#5a3a22"], "baunilha negra": ["pod", "#2e2018"],
  canela: ["stick", "#a0522d"], gengibre: ["root", "#d9a75c"], cenoura: ["root", "#f08a24"], nagarmotha: ["root", "#7a5a40"],
  "pimenta rosa": ["pepper", "#e4717a"], cardamomo: ["seeds", "#9bbf6a"], acafrao: ["seeds", "#d9442f"],
  cominho: ["seeds", "#b08a4a"], coentro: ["seeds", "#c4ad72"], ambrette: ["seeds", "#c2a77a"],
  cacau: ["bean", "#6b3e26"], "fava tonka": ["bean", "#4a2f1f"], cumarina: ["bean", "#c9a46a"], tamaras: ["bean", "#7b3f1d"],
};

function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v) => Math.max(0, Math.min(255, Math.round(v * f)));
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => ch(v).toString(16).padStart(2, "0")).join("")}`;
}

const ICONS = {
  citrus: (c) => `<circle cx="24" cy="24" r="18" fill="${c}"/><circle cx="24" cy="24" r="14.5" fill="#fff"/><circle cx="24" cy="24" r="14.5" fill="${c}" opacity=".7"/><g stroke="#fff" stroke-width="1.6">${[0, 45, 90, 135].map((a) => `<line x1="24" y1="10" x2="24" y2="38" transform="rotate(${a} 24 24)"/>`).join("")}</g><circle cx="24" cy="24" r="2.6" fill="#fff"/>`,
  fruit: (c, d) => `<path d="M24 15c-3-3-13-3-14 7-1 9 5 18 10 18 2 0 3-1 4-1s2 1 4 1c5 0 11-9 10-18-1-10-11-10-14-7z" fill="${c}" stroke="${d}" stroke-width=".8"/><path d="M24 15c0-4 2-7 5-9" stroke="#6b4a2a" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M27 10c3-3 8-3 9 0-3 2-7 2-9 0z" fill="#5f9e3e"/><ellipse cx="17" cy="23" rx="2.5" ry="4.5" fill="#fff" opacity=".4"/>`,
  fig: (c, d) => `<path d="M24 9c2 0 3 3 6 7 4 5 8 9 8 15a14 14 0 0 1-28 0c0-6 4-10 8-15 3-4 4-7 6-7z" fill="${c}" stroke="${d}" stroke-width=".8"/><path d="M24 9V4" stroke="#5f7d3a" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="18" cy="29" rx="2.5" ry="5" fill="#fff" opacity=".3"/>`,
  berries: (c) => `<path d="M24 5c0 6-3 10-7 13M24 5c1 6 4 9 8 12" stroke="#4d7a35" stroke-width="2" fill="none" stroke-linecap="round"/>${[[16, 25], [31, 25], [23, 33], [24, 20], [32, 35], [15, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="${c}"/><circle cx="${x - 2}" cy="${y - 2}" r="1.6" fill="#fff" opacity=".55"/>`).join("")}`,
  pepper: (c, d) => [[17, 18], [28, 16], [22, 26], [33, 26], [15, 31], [27, 35], [36, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.2" fill="${c}" stroke="${d}" stroke-width=".8"/><circle cx="${x - 1.6}" cy="${y - 1.6}" r="1.3" fill="#fff" opacity=".6"/>`).join(""),
  pineapple: (c, d) => `<path d="M24 19 17 6l6 8 1-11 1 11 6-8z" fill="#5c9a3c"/><ellipse cx="24" cy="32" rx="11" ry="13" fill="${c}" stroke="${d}" stroke-width=".8"/>${[[19, 25], [27, 25], [23, 31], [31, 31], [16, 31], [19, 37], [27, 37]].map(([x, y]) => `<path d="M${x} ${y - 2.5}l2.5 2.5-2.5 2.5-2.5-2.5z" fill="${d}" opacity=".55"/>`).join("")}`,
  flower: (c, d) => `<g fill="${c}" stroke="${d}" stroke-width=".9">${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="24" cy="13" rx="6.6" ry="10" transform="rotate(${a} 24 24)"/>`).join("")}</g><circle cx="24" cy="24" r="5" fill="#f2c14e" stroke="#c99a2e" stroke-width=".8"/>`,
  lavender: (c, d) => `<path d="M24 44V8" stroke="#6d8f4e" stroke-width="2" stroke-linecap="round"/>${[10, 15, 20, 25, 30].map((y, i) => `<ellipse cx="${i % 2 ? 28 : 20}" cy="${y}" rx="3.2" ry="4.6" fill="${c}" stroke="${d}" stroke-width=".7" transform="rotate(${i % 2 ? 25 : -25} ${i % 2 ? 28 : 20} ${y})"/>`).join("")}<ellipse cx="24" cy="7" rx="2.6" ry="4" fill="${c}"/>`,
  leaf: (c, d) => `<path d="M9 39C9 21 21 9 40 8c0 19-12 31-31 31z" fill="${c}" stroke="${d}" stroke-width=".8"/><path d="M11 37 35 13M19 29h-6M25 23h-7M25 23v-7M19 29v-6" stroke="#fff" stroke-opacity=".5" stroke-width="1.5" fill="none" stroke-linecap="round"/>`,
  wood: (c, d) => `<circle cx="24" cy="24" r="18" fill="${d}"/><circle cx="24" cy="24" r="15" fill="${c}"/><g fill="none" stroke="${d}" stroke-width="1.4" opacity=".75"><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="7"/><circle cx="24" cy="24" r="3"/></g>`,
  smoke: (c) => `<g fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round"><path d="M14 42c-4-6 4-9 0-15s4-9 0-15"/><path d="M24 42c-4-6 4-9 0-15s4-9 0-15" opacity=".75"/><path d="M34 42c-4-6 4-9 0-15s4-9 0-15" opacity=".5"/></g>`,
  drop: (c, d) => `<path d="M24 5c6 10 14 16 14 25a14 14 0 0 1-28 0c0-9 8-15 14-25z" fill="${c}" stroke="${d}" stroke-width=".8"/><path d="M24 14l6 10-6 10-6-10z" fill="#fff" opacity=".22"/><ellipse cx="18" cy="31" rx="3" ry="5" fill="#fff" opacity=".4"/>`,
  musk: (c) => `<circle cx="24" cy="24" r="19" fill="${c}" opacity=".3"/><circle cx="24" cy="24" r="13.5" fill="${c}" opacity=".55"/><circle cx="24" cy="24" r="8" fill="${c}"/><circle cx="21" cy="21" r="2.4" fill="#fff" opacity=".7"/>`,
  candy: (c, d) => `<path d="M14 24 4 15v18zM34 24l10-9v18z" fill="${d}"/><ellipse cx="24" cy="24" rx="12" ry="9" fill="${c}"/><path d="M17 20c4-3 10-3 14 0" stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  pod: (c) => `<g fill="none" stroke="${c}" stroke-linecap="round"><path d="M8 40C17 31 27 19 38 7" stroke-width="5"/><path d="M15 43C24 34 33 23 42 12" stroke-width="4.2" opacity=".8"/></g><g fill="#f4e6b8"><circle cx="15" cy="12" r="4.5"/><circle cx="10" cy="17" r="4"/><circle cx="20" cy="17" r="4"/></g><circle cx="15" cy="16" r="2.4" fill="#e3b94c"/>`,
  stick: (c, d) => `<g transform="rotate(-35 24 24)"><rect x="6" y="15" width="36" height="9" rx="4.5" fill="${c}"/><rect x="6" y="15" width="36" height="3.5" rx="1.7" fill="${d}" opacity=".6"/><rect x="9" y="26" width="32" height="8" rx="4" fill="${c}"/><rect x="9" y="26" width="32" height="3" rx="1.5" fill="${d}" opacity=".6"/></g>`,
  root: (c, d) => `<path d="M31 14 13 40c-1 2 1 3 3 2l20-23z" fill="${c}" stroke="${d}" stroke-width=".8"/><path d="M20 30l4 2M17 35l3 1M25 24l4 2" stroke="${d}" stroke-width="1.4" stroke-linecap="round"/><path d="M33 16c0-6 2-9 5-11M34 17c3-4 7-5 10-4M33 16c-3-4-3-8-1-11" stroke="#5c9a3c" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  seeds: (c, d) => [[15, 16, 20], [27, 13, -30], [36, 20, 50], [19, 27, -60], [30, 27, 10], [14, 37, 40], [25, 37, -20], [36, 34, 70]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="3.2" ry="5" fill="${c}" stroke="${d}" stroke-width=".8" transform="rotate(${r} ${x} ${y})"/>`).join(""),
  bean: (c, d) => `<g stroke="${d}" stroke-width=".9"><ellipse cx="18" cy="25" rx="8" ry="13" fill="${c}" transform="rotate(-20 18 25)"/><ellipse cx="31" cy="24" rx="8" ry="13" fill="${c}" transform="rotate(20 31 24)"/></g><path d="M16 14c4 7 4 15 0 22M33 13c-4 7-4 15 0 22" stroke="${d}" stroke-width="1.6" fill="none" opacity=".7"/>`,
};

function noteArt(name) {
  const k = norm(name);
  if (NOTE_ART[k]) return NOTE_ART[k];
  if (k.includes("madeira") || k.includes("amadeirad")) return ["wood", "#9a6a40"];
  if (k.includes("almiscar") || k.includes("musk")) return ["musk", "#c9bcd8"];
  if (k.includes("ambar")) return ["drop", "#e09b35"];
  if (k.includes("rosa") || k.includes("flor")) return ["flower", "#e0567f"];
  return ["drop", "#c9a46a"];
}

function noteIcon(name) {
  const [type, color] = noteArt(name);
  return `<svg viewBox="0 0 48 48" aria-hidden="true">${ICONS[type](color, shade(color, 0.72))}</svg>`;
}

function pyramidHTML(p) {
  let i = 0;
  const tier = (title, list) => `
    <div class="tier">
      <h4>${title}</h4>
      <ul class="notes">
        ${list.map((n) => `<li class="note" style="--i:${i++}"><span class="note-ic">${noteIcon(n)}</span>${esc(n)}</li>`).join("")}
      </ul>
    </div>`;
  return `<div class="pyramid">
    ${tier("Notas de saída", p.notes.top)}
    ${tier("Notas de coração", p.notes.mid)}
    ${tier("Notas de fundo", p.notes.base)}
  </div>`;
}

/* ---------- detalhes do perfume (modal) ---------- */
const modal = $("#modal");
const modalCard = $(".modal-card", modal);
const modalBody = $("#modalBody");
let lastFocus = null;

function modalHTML(p) {
  const top = Math.max(...p.accords.map((a) => a.intensity));
  const accords = p.accords
    .map((a, i) => {
      const c = accordColor(a.name);
      const w = Math.max(34, Math.round((a.intensity / top) * 100));
      const label = a.name.charAt(0).toUpperCase() + a.name.slice(1);
      return `<div class="accord" style="--c:${c};--t:${textOn(c)};--w:${w}%;--i:${i}">${esc(label)}</div>`;
    })
    .join("");

  const inst = Array.from({ length: 12 }, (_, i) => i + 1)
    .map((n) => `<div><b>${n}x</b><span>R$ ${money(p.price / n)}</span></div>`)
    .join("");

  const buy = p.soldOut
    ? `<div class="m-buy">
        <p class="m-price">Esgotado<small>Deixe seu contato e avisamos assim que chegar.</small></p>
        <a class="btn btn-gold" target="_blank" rel="noopener" href="${waUrl(`Olá, Zafir! Quero ser avisado quando o ${p.name} chegar.`)}">Avise-me quando chegar</a>
      </div>`
    : `<div class="m-buy">
        <p class="m-price">R$ ${money(p.price)}<small>À vista no Pix ou em até 12x de R$ ${money(p.price / 12)} no cartão, com a taxa da maquininha.</small></p>
        <a class="btn btn-gold" target="_blank" rel="noopener" href="${waUrl(`Olá, Zafir! Quero pedir o perfume ${p.name} (R$ ${money(p.price)}).`)}">Pedir pelo WhatsApp</a>
      </div>`;

  return `
    <div class="m-grid">
      <div class="m-media" style="--field:${p.field}"><img src="${p.image}" alt="${esc(p.name)}, ${esc(p.brand)}" /></div>
      <div class="m-body">
        <div class="m-head">
          <p class="m-meta">${esc(p.brand)} · ${p.gender} · ${p.volume}</p>
          <h2 class="m-title" id="mTitle">${esc(p.name)}</h2>
        </div>
        ${buy}
        <p class="m-desc">${esc(p.longDescription)}</p>

        <div>
          <h3 class="m-h">Principais acordes</h3>
          <div class="accords">${accords}</div>
        </div>

        <div>
          <h3 class="m-h">Pirâmide olfativa</h3>
          ${pyramidHTML(p)}
        </div>

        <dl class="facts">
          <div><dt>Rastro</dt><dd>${esc(p.trail)}</dd></div>
          <div><dt>Estilo</dt><dd>${esc(p.mood)}</dd></div>
          <div><dt>Melhor uso</dt><dd>${esc(p.season)}</dd></div>
        </dl>

        <div class="meters">
          <div>
            <div class="meter-top"><span>Fixação</span><span>${level(p.fixation)}</span></div>
            <div class="meter"><i style="--v:${p.fixation / 100}"></i></div>
          </div>
          <div>
            <div class="meter-top"><span>Projeção</span><span>${level(p.projection)}</span></div>
            <div class="meter"><i style="--v:${p.projection / 100}"></i></div>
          </div>
        </div>

        <div>
          <h3 class="m-h">Combina com</h3>
          <div class="occ">${p.occasions.map((o) => `<span>${esc(o)}</span>`).join("")}</div>
        </div>

        ${
          p.soldOut
            ? ""
            : `<div>
                <h3 class="m-h">Parcelas no cartão</h3>
                <div class="inst">${inst}</div>
                <p class="inst-note">Valores sem juros da loja. No cartão entra a taxa da maquininha, que a operadora define na hora do pagamento.</p>
              </div>`
        }
      </div>
    </div>`;
}

function openModal(id) {
  const p = PERFUMES.find((x) => x.id === id);
  if (!p) return;
  lastFocus = document.activeElement;
  modalBody.innerHTML = modalHTML(p);
  modalCard.scrollTop = 0;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => modalCard.focus({ preventScroll: true }), 50);
}
function closeModal() {
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastFocus?.focus?.({ preventScroll: true });
}

document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open]");
  if (opener) {
    e.preventDefault();
    openModal(opener.dataset.open);
    return;
  }
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab" && modal.classList.contains("open")) {
    const f = $$("a[href], button, [tabindex='0']", modalCard);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* arrastar a folha para baixo fecha (celular) */
let dragStart = null;
modalCard.addEventListener("touchstart", (e) => {
  dragStart = modalCard.scrollTop <= 0 ? e.touches[0].clientY : null;
}, { passive: true });
modalCard.addEventListener("touchmove", (e) => {
  if (dragStart === null || window.innerWidth >= 900) return;
  const dy = e.touches[0].clientY - dragStart;
  if (dy > 0) {
    modalCard.style.transition = "none";
    modalCard.style.transform = `translateY(${dy}px)`;
  }
}, { passive: true });
modalCard.addEventListener("touchend", (e) => {
  if (dragStart === null) return;
  const dy = e.changedTouches[0].clientY - dragStart;
  modalCard.style.transition = "";
  modalCard.style.transform = "";
  dragStart = null;
  if (dy > 110) closeModal();
});

/* ---------- teste: descubra o seu perfume ----------
   Cada resposta soma pontos para os perfumes que combinam.
   Para mudar perguntas ou opções, edite UNIVERSES, MOMENTS e STEPS. */
const UNIVERSES = [
  { id: "citrico", label: "Cítricos e frutas tropicais", keys: ["citrico", "frutado", "tropical"], colors: ["#f6c445", "#ff4b2f"] },
  { id: "verde", label: "Chá, ervas e folhas verdes", keys: ["fresco", "aromatico", "verde", "herbal", "lavanda", "musgo"], colors: ["#49b6a9", "#2f7a3d"] },
  { id: "floral", label: "Flores de verdade", keys: ["floral", "rosa"], colors: ["#bf4d7c", "#e0567f"] },
  { id: "doce", label: "Doce de sobremesa", keys: ["doce", "baunilha", "gourmand", "atalcado"], colors: ["#d62f3b", "#d8b56d"] },
  { id: "madeira", label: "Madeira e âmbar", keys: ["amadeirado", "ambar", "terroso", "almiscarado"], colors: ["#9a5f35", "#c17a32"] },
  { id: "especiarias", label: "Especiarias e fumaça", keys: ["especiado", "defumado", "couro", "picante"], colors: ["#c04c22", "#59514b"] },
];
const MOMENTS = {
  dia: { label: "no dia a dia", tags: ["dia", "calor", "lazer", "pos-banho"] },
  trabalho: { label: "no trabalho", tags: ["trabalho"] },
  noite: { label: "à noite", tags: ["noite", "encontros"] },
  festa: { label: "em festas", tags: ["festas", "eventos"] },
};
const STEPS = [
  {
    key: "universes", max: 3, hint: "Escolha até 3",
    q: (n) => (n ? `${n}, que cheiros te puxam primeiro?` : "Que cheiros te puxam primeiro?"),
    opts: UNIVERSES.map((u) => ({ v: u.id, label: u.label, colors: u.colors })),
  },
  {
    key: "style", max: 1, q: () => "Que estilo você procura?",
    opts: [{ v: "Masculino", label: "Masculino" }, { v: "Feminino", label: "Feminino" }, { v: "", label: "Tanto faz" }],
  },
  {
    key: "moment", max: 2, hint: "Escolha até 2", q: () => "Quando você mais vai usar?",
    opts: [
      { v: "dia", label: "No dia a dia e no calor" },
      { v: "trabalho", label: "No trabalho" },
      { v: "noite", label: "À noite e em encontros" },
      { v: "festa", label: "Em festas e eventos" },
    ],
  },
  {
    key: "power", max: 1, q: () => "Como ele deve ficar na pele?",
    opts: [
      { v: "suave", label: "Suave, só pra quem chega perto" },
      { v: "medio", label: "Equilibrado" },
      { v: "forte", label: "Marcante, que todo mundo nota" },
    ],
  },
  {
    key: "budget", max: 1, q: () => "Quanto você quer investir?",
    opts: [{ v: 300, label: "Até R$ 300" }, { v: 400, label: "Até R$ 400" }, { v: 9999, label: "O preço não importa" }],
  },
];

const quiz = $("#descubra");
const qIntro = $("#qIntro");
const qFlow = $("#qFlow");
const qStage = $("#qStage");
const qResult = $("#qResult");
const qNext = $("#qNext");
const qBack = $("#qBack");
const qMedia = $("#qMedia");
const qMediaImg = $("#qMediaImg");
let qStep = 0;
let qName = "";
let answers = {};

function resetAnswers() {
  answers = Object.fromEntries(STEPS.map((s) => [s.key, []]));
}
resetAnswers();

function renderStep(dir = 1) {
  const s = STEPS[qStep];
  const chosen = answers[s.key];
  $("#qFill").parentElement.style.setProperty("--p", (qStep + 1) / STEPS.length);
  $("#qFill").style.setProperty("--p", (qStep + 1) / STEPS.length);
  $("#qCount").textContent = `Etapa ${qStep + 1} de ${STEPS.length}`;
  qStage.innerHTML = `
    <div class="q-step enter${dir < 0 ? " back" : ""}">
      <h3 tabindex="-1">${esc(s.q(qName))}</h3>
      ${s.hint ? `<p class="q-hint">${s.hint}</p>` : ""}
      <div class="q-opts" role="group" aria-label="${esc(s.q(qName))}">
        ${s.opts
          .map(
            (o, i) => `
          <button type="button" class="q-opt" data-v="${o.v}" aria-pressed="${chosen.includes(o.v)}" style="--i:${i}">
            ${o.colors ? `<span class="dots" aria-hidden="true">${o.colors.map((c) => `<i style="--c:${c}"></i>`).join("")}</span>` : ""}
            ${esc(o.label)}
          </button>`,
          )
          .join("")}
      </div>
    </div>`;
  qNext.disabled = chosen.length === 0;
  qNext.textContent = qStep === STEPS.length - 1 ? "Ver resultado" : "Próximo";
  $("h3", qStage).focus({ preventScroll: true });
}

qStage.addEventListener("click", (e) => {
  const btn = e.target.closest(".q-opt");
  if (!btn) return;
  const s = STEPS[qStep];
  const raw = s.opts.find((o) => String(o.v) === btn.dataset.v).v;
  let list = answers[s.key];
  if (s.max === 1) {
    list = [raw];
  } else if (list.includes(raw)) {
    list = list.filter((v) => v !== raw);
  } else {
    list = [...list, raw].slice(-s.max);
  }
  answers[s.key] = list;
  $$(".q-opt", qStage).forEach((b) => b.setAttribute("aria-pressed", list.some((v) => String(v) === b.dataset.v)));
  qNext.disabled = list.length === 0;
  if (s.max === 1) setTimeout(() => goNext(), 320); // escolha única avança sozinha
});

function goNext() {
  if (answers[STEPS[qStep].key].length === 0) return;
  if (qStep < STEPS.length - 1) {
    qStep++;
    renderStep(1);
  } else {
    showResult();
  }
}
qNext.addEventListener("click", goNext);
qBack.addEventListener("click", () => {
  if (qStep === 0) {
    quiz.classList.remove("started");
    qFlow.hidden = true;
    qIntro.hidden = false;
    return;
  }
  qStep--;
  renderStep(-1);
});

qIntro.addEventListener("submit", (e) => {
  e.preventDefault();
  qName = $("#qName").value.trim().split(" ")[0];
  qName = qName ? qName.charAt(0).toUpperCase() + qName.slice(1) : "";
  qStep = 0;
  resetAnswers();
  qIntro.hidden = true;
  qResult.hidden = true;
  qFlow.hidden = false;
  quiz.classList.add("started");
  quiz.classList.remove("done");
  renderStep(1);
  if (quiz.getBoundingClientRect().top < 0) quiz.scrollIntoView({ behavior: "smooth" });
});

function scorePerfume(p) {
  let s = 0;
  const why = [];
  UNIVERSES.filter((u) => answers.universes.includes(u.id)).forEach((u) => {
    let best = 0;
    p.accords.forEach((a, j) => {
      const k = norm(a.name);
      if (u.keys.some((key) => k.includes(key))) best = Math.max(best, (a.intensity / 100) * (j < 3 ? 1 : 0.6));
    });
    if (best > 0) {
      s += best * 4;
      why.push(u.label.toLowerCase());
    }
  });
  const style = answers.style[0];
  if (style && p.gender !== style) s -= 100;
  const hay = norm(`${p.occasions.join(" ")} ${p.season}`);
  answers.moment.forEach((m) => {
    if (MOMENTS[m].tags.some((t) => hay.includes(t))) s += 1.5;
  });
  const target = { suave: 72, medio: 84, forte: 94 }[answers.power[0]];
  s += 2 - Math.abs(p.projection - target) / 8;
  if (p.price > answers.budget[0]) s -= 3;
  if (p.soldOut) s -= 50;
  return { p, s, why };
}

function showResult() {
  const ranked = PERFUMES.map(scorePerfume).sort((a, b) => b.s - a.s);
  let picks = ranked.filter((r) => r.s > -40).slice(0, 3);
  if (!picks.length) picks = ranked.filter((r) => !r.p.soldOut).slice(0, 3);

  const moments = answers.moment.map((m) => MOMENTS[m].label);
  const tastes = UNIVERSES.filter((u) => answers.universes.includes(u.id)).map((u) => u.label.toLowerCase());
  const summary = [tastes.join(", "), moments.join(" e ")].filter(Boolean).join(", para usar ");

  qResult.innerHTML = `
    <div class="qr-head">
      <h3 tabindex="-1">${qName ? `${esc(qName)}, estes são os seus` : "Estes são os seus"}</h3>
      <p>Você gosta de ${esc(summary)}.</p>
    </div>
    <div class="qr-list">
      ${picks
        .map(({ p, why }, i) => {
          const reason = why.length
            ? `Tem ${why.slice(0, 2).join(" e ")}, do jeito que você pediu.`
            : esc(p.description);
          const msg = `Olá, Zafir! Fiz o teste no site e o perfume indicado foi o ${p.name} (R$ ${money(p.price)}). Quero saber mais.${qName ? `\nNome: ${qName}` : ""}`;
          return `
          <article class="qr-item${i === 0 ? " best" : ""}" style="--i:${i}">
            <span class="tile" style="--field:${p.field}"><img src="${p.image}" alt="${esc(p.name)}" width="900" height="900" loading="lazy" /></span>
            <div class="qr-body">
              ${i === 0 ? `<span class="qr-badge">Sua melhor combinação</span>` : ""}
              <h4 class="qr-name">${esc(p.name)}</h4>
              <p class="qr-meta">${esc(p.brand)} · ${p.gender} · R$ ${money(p.price)} ou 12x no cartão</p>
              <p class="qr-why">${reason}</p>
              <div class="qr-actions">
                <button type="button" class="btn btn-paper btn-sm" data-open="${p.id}">Ver detalhes</button>
                <a class="btn btn-ink btn-sm" href="${waUrl(msg)}" target="_blank" rel="noopener">Pedir no WhatsApp</a>
              </div>
            </div>
          </article>`;
        })
        .join("")}
    </div>
    <button type="button" class="qr-redo" id="qRedo">Refazer o teste</button>`;

  qFlow.hidden = true;
  qResult.hidden = false;
  quiz.classList.add("done");

  // a foto ao lado vira o perfume campeão
  const best = picks[0].p;
  qMedia.classList.add("swap");
  setTimeout(() => {
    qMediaImg.src = best.image;
    qMediaImg.alt = best.name;
    qMedia.style.setProperty("--field", best.field);
    qMediaImg.onload = () => qMedia.classList.remove("swap");
  }, 350);

  $("h3", qResult).focus({ preventScroll: true });
  if (quiz.getBoundingClientRect().top < 0) quiz.scrollIntoView({ behavior: "smooth" });
  $("#qRedo").addEventListener("click", () => {
    qResult.hidden = true;
    qIntro.hidden = false;
    quiz.classList.remove("started", "done");
    $("#qName").focus();
  });
}

/* ---------- rodapé ---------- */
$("#year").textContent = new Date().getFullYear();
