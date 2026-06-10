/* ===== Zafir Perfumes — script.js ===== */

const WHATSAPP_NUMBER = "5592000000000"; // <-- troque pelo número real (DDI+DDD+número)
const INSTAGRAM_URL = "https://instagram.com/zafirperfumes";

const accordColors = {
  cítrico: "#f6c445", citrico: "#f6c445",
  fresco: "#49b6a9",
  aromático: "#3f8f7a", aromatico: "#3f8f7a",
  frutado: "#ff4b2f",
  doce: "#d62f3b",
  gourmand: "#a45b34",
  baunilha: "#d8b56d",
  cremoso: "#d28bb8",
  floral: "#bf4d7c",
  rosa: "#b80d54",
  almíscar: "#b8b0bf", almiscar: "#b8b0bf", almiscarado: "#b8b0bf",
  amadeirado: "#7b4b2a",
  especiado: "#9f5233",
  "picante suave": "#a96345",
  couro: "#5c3627",
  oud: "#4d2a1d",
  âmbar: "#c17a32", ambar: "#c17a32",
  fumado: "#59514b",
  herbal: "#496d56",
  verde: "#165f24",
  tropical: "#e77f3f",
  atalcado: "#cfb8cf",
  lactônico: "#f0c6a8", lactonico: "#f0c6a8",
  animálico: "#6b3f2d", animalico: "#6b3f2d",
  lavanda: "#9b7bb8",
  "fresco especiado": "#4d9e8a",
  defumado: "#59514b",
  terroso: "#6b5544",
  "especiado quente": "#c04c22",
  "fresco": "#49b6a9"
};

const PERFUMES = [
  {
    id: "al-aroos",
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    origin: "Emirados Árabes",
    gender: "Feminino",
    image: "assets/al-aroosultra.png",
    price: 320,
    volume: "100ml",
    description: "Almíscar branco, baunilha e açafrão em uma aura doce, limpa e sensual.",
    longDescription: "Durrat Al Aroos é uma fragrância feminina luminosa e sedutora. Inspirada no perfil olfativo apresentado no Fragrantica, ela combina a limpeza macia do almíscar branco com nuances terrosas de nagarmotha, um coração quente de baunilha, cardamomo e açafrão, e uma base cremosa de madeira guaiac e cumarina. É doce sem perder elegância, confortável sem deixar de marcar presença.",
    notes: { top: ["Almíscar Branco", "Nagarmotha", "Cypriol"], mid: ["Baunilha", "Cardamomo", "Açafrão"], base: ["Madeira Guaiac", "Cumarina", "Acorde Cremoso"] },
    accords: [
      { name: "especiado quente", intensity: 96 },
      { name: "amadeirado", intensity: 90 },
      { name: "baunilha", intensity: 82 },
      { name: "almiscarado", intensity: 76 },
      { name: "atalcado", intensity: 70 },
      { name: "aromático", intensity: 64 },
      { name: "doce", intensity: 58 },
      { name: "terroso", intensity: 50 }
    ],
    fixation: 86,
    projection: 74,
    trail: "doce e limpo",
    mood: "feminino elegante",
    season: "noite e clima ameno",
    occasions: ["Noite", "Encontros", "Festas"]
  },
  {
    id: "attar-al-wesal",
    name: "Attar Al Wesal",
    brand: "Al Wataniah Khususi",
    origin: "Emirados Árabes",
    gender: "Masculino",
    image: "assets/attar-al-wesal.png",
    price: 269,
    volume: "100ml",
    description: "Oud, couro e especiarias em uma assinatura masculina intensa e imponente.",
    longDescription: "Attar Al Wesal tem presença de perfume árabe clássico: encorpado, quente e cheio de personalidade. A abertura especiada traz impacto imediato, enquanto o oud e as madeiras dão profundidade. O couro aparece como assinatura sofisticada, deixando um rastro escuro, marcante e elegante para quem gosta de fragrâncias masculinas poderosas.",
    notes: { top: ["Cardamomo", "Pimenta Negra", "Bergamota"], mid: ["Oud", "Rosa", "Cedro"], base: ["Couro", "Âmbar", "Patchouli"] },
    accords: [
      { name: "aromático", intensity: 96 },
      { name: "lavanda", intensity: 88 },
      { name: "baunilha", intensity: 82 },
      { name: "fresco especiado", intensity: 76 },
      { name: "verde", intensity: 70 },
      { name: "doce", intensity: 64 },
      { name: "frutado", intensity: 58 },
      { name: "amadeirado", intensity: 52 },
      { name: "cítrico", intensity: 46 },
      { name: "âmbar", intensity: 40 }
    ],
    fixation: 92,
    projection: 88,
    trail: "escuro e imponente",
    mood: "masculino poderoso",
    season: "noite e inverno",
    occasions: ["Noite", "Inverno", "Trabalho"]
  },
  {
    id: "bidaya-elliur",
    name: "Bidaya Elliur",
    brand: "Bidaya",
    origin: "Emirados Árabes",
    gender: "Masculino",
    image: "assets/bidayaultra.png",
    price: 329,
    volume: "100ml",
    description: "Frutado aromático com cítricos, ervas frescas, rosa e musk elegante.",
    longDescription: "Bidaya Elliur é vibrante, colorido e refinado. A construção segue o caminho frutado aromático: groselha preta, limão, citron, menta e laranja abrem com energia; damasco, manjericão, coentro e rosa trazem corpo; e a base com ambrette, cenoura e tâmaras deixa um acabamento macio, levemente doce e sofisticado. É fresco, diferente e muito versátil para Manaus.",
    notes: { top: ["Groselha Preta", "Citron", "Limão", "Menta", "Laranja"], mid: ["Damasco", "Manjericão", "Coentro", "Rosa de Maio"], base: ["Ambrette", "Cenoura", "Tâmaras", "Almíscar"] },
    accords: [
      { name: "frutado", intensity: 96 },
      { name: "aromático", intensity: 82 },
      { name: "doce", intensity: 80 },
      { name: "picante suave", intensity: 66 },
      { name: "floral", intensity: 65 },
      { name: "almiscarado", intensity: 62 },
      { name: "rosa", intensity: 50 },
      { name: "amadeirado", intensity: 46 },
      { name: "herbal", intensity: 44 },
      { name: "verde", intensity: 42 }
    ],
    fixation: 74,
    projection: 70,
    trail: "fresco e frutado",
    mood: "moderno versátil",
    season: "dia e calor",
    occasions: ["Dia", "Trabalho", "Verão"]
  },
  {
    id: "club-de-nuit",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    origin: "Emirados Árabes",
    gender: "Masculino",
    image: "assets/club-de-nuit.png",
    price: 349,
    volume: "105ml",
    description: "Cítrico, frutado, fumado e amadeirado — um clássico de performance.",
    longDescription: "Club de Nuit Intense Man é um dos nomes mais comentados da perfumaria masculina. Com base no perfil do Fragrantica, abre com limão, abacaxi, bergamota, groselha preta e maçã; ganha uma faceta elegante de bétula, jasmim e rosa; e fecha com âmbar gris, almíscar, patchouli e baunilha. O resultado é frutado, cítrico, fumado e extremamente marcante.",
    notes: { top: ["Limão", "Abacaxi", "Bergamota", "Groselha Preta", "Maçã"], mid: ["Bétula", "Jasmim", "Rosa"], base: ["Âmbar Gris", "Almíscar", "Patchouli", "Baunilha"] },
    accords: [
      { name: "cítrico", intensity: 96 },
      { name: "frutado", intensity: 88 },
      { name: "couro", intensity: 78 },
      { name: "defumado", intensity: 72 },
      { name: "amadeirado", intensity: 66 },
      { name: "aromático", intensity: 60 },
      { name: "doce", intensity: 52 },
      { name: "fresco", intensity: 46 },
      { name: "almiscarado", intensity: 40 }
    ],
    fixation: 95,
    projection: 92,
    trail: "potente e elegante",
    mood: "assinatura masculina",
    season: "eventos e noite",
    occasions: ["Noite", "Eventos", "Encontros"]
  },
  {
    id: "yara",
    name: "Yara",
    brand: "Lattafa",
    origin: "Emirados Árabes",
    gender: "Feminino",
    image: "assets/yara-rose.png",
    price: 269,
    volume: "100ml",
    description: "Gourmand tropical cremoso com baunilha, musk e sândalo macio.",
    longDescription: "Yara da Lattafa é doce, cremosa e imediatamente reconhecível. Segundo a pirâmide olfativa do Fragrantica, combina orquídea, heliotrópio e tangerina na saída; um coração gourmand com frutas tropicais; e uma base de baunilha, almíscar e sândalo. O resultado é jovem, confortável, feminino e viciante, com sensação levemente lactônica.",
    notes: { top: ["Orquídea", "Heliotrópio", "Tangerina"], mid: ["Acorde Gourmand", "Frutas Tropicais"], base: ["Baunilha", "Almíscar", "Sândalo"] },
    accords: [
      { name: "doce", intensity: 96 },
      { name: "baunilha", intensity: 90 },
      { name: "atalcado", intensity: 82 },
      { name: "tropical", intensity: 74 },
      { name: "frutado", intensity: 66 },
      { name: "almiscarado", intensity: 60 },
      { name: "floral", intensity: 52 },
      { name: "cítrico", intensity: 44 }
    ],
    fixation: 84,
    projection: 78,
    trail: "cremoso e doce",
    mood: "feminino moderno",
    season: "dia e encontros",
    occasions: ["Dia", "Noite", "Encontros"]
  }
];

/* ---------- Theme ---------- */
const themeBtn = document.getElementById("themeBtn");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");
const logoImg = document.getElementById("logoImg");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (iconMoon && iconSun && logoImg) {
    if (theme === "light") {
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
      logoImg.src = "assets/logo-zafir-light.jpeg";
    } else {
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
      logoImg.src = "assets/logo-zafir-dark.jpeg";
    }
  }
  localStorage.setItem("zafir-theme", theme);
}
applyTheme(localStorage.getItem("zafir-theme") || "dark");
themeBtn?.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  applyTheme(cur === "light" ? "dark" : "light");
});

/* ---------- Navigation ---------- */
const pageHome = document.getElementById("page-home");
const pageSobre = document.getElementById("page-sobre");

function navTo(target) {
  if (target === "sobre") {
    pageHome.style.display = "none";
    pageSobre.style.display = "block";
  } else {
    pageHome.style.display = "block";
    pageSobre.style.display = "none";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(activateReveals);
}

document.querySelectorAll("[data-nav]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    navTo(el.dataset.nav);
    if (el.getAttribute("href") === "#catalogo") {
      setTimeout(() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }), 120);
    }
  });
});

/* ---------- Scroll reveal + cursor aura ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

function activateReveals() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}
activateReveals();

const cursorAura = document.getElementById("cursorAura");
window.addEventListener("pointermove", e => {
  if (!cursorAura || window.matchMedia("(max-width: 640px)").matches) return;
  cursorAura.style.left = `${e.clientX}px`;
  cursorAura.style.top = `${e.clientY}px`;
});

/* ---------- Grid + Filters + Search ---------- */
const grid = document.getElementById("grid");
const searchInput = document.getElementById("searchInput");
let activeFilter = "Todos";
let searchTerm = "";

function formatMoney(value) {
  return value.toFixed(2).replace(".", ",");
}

function getAccordColor(name) {
  const key = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return accordColors[name.toLowerCase()] || accordColors[key] || "#b8893a";
}

function renderGrid() {
  const term = searchTerm.trim().toLowerCase();
  const list = PERFUMES.filter(p => {
    const matchesFilter = activeFilter === "Todos" || p.gender === activeFilter;
    const matchesSearch = !term || [p.name, p.brand, p.description, p.gender, ...p.accords.map(a => a.name)].join(" ").toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  grid.classList.remove("stagger");
  void grid.offsetWidth;
  grid.classList.add("stagger");

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">Nenhum perfume encontrado. Tente outro nome, marca ou acorde.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const inst = formatMoney((p.price * 1.2) / 12);
    const topAccords = p.accords.slice(0, 3).map(a => `<span class="accord-pill" style="background:${getAccordColor(a.name)}">${a.name}</span>`).join("");
    return `
    <button class="card magnetic" data-id="${p.id}">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="badge badge-gender ${p.gender}">${p.gender}</span>
        <span class="badge badge-origin">✦ ${p.origin.split(" ")[0]}</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="card-meta">${p.brand} • ${p.volume}</div>
        <p class="card-desc">${p.description}</p>
        <div class="card-accords">${topAccords}</div>
        <div class="fixation-label">Fixação</div>
        <div class="bar"><div style="width:${p.fixation}%"></div></div>
        <div class="card-price">
          <div>
            <div class="price-big">R$ ${p.price}</div>
            <div class="price-inst">ou 12x de R$ ${inst}</div>
            <div class="price-note">*com acréscimo da maquininha</div>
          </div>
          <span class="card-cta">Ver detalhes →</span>
        </div>
      </div>
    </button>`;
  }).join("");

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("pointermove", e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

document.querySelectorAll("#filters .filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#filters .filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

searchInput?.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderGrid();
});

renderGrid();

/* ---------- Modal ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openModal(id) {
  const p = PERFUMES.find(x => x.id === id);
  if (!p) return;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no perfume ${p.name}.`)}`;
  const installments = [1, 2, 3, 4, 6, 10, 12].map(n => {
    const factor = n === 1 ? 1 : 1 + 0.0299 * (n - 1);
    const v = formatMoney(p.price * factor / n);
    return `<div class="inst-cell"><span class="n">${n}x</span><span class="v">R$ ${v}</span></div>`;
  }).join("");

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img"><img src="${p.image}" alt="${p.name}" /></div>
      <div class="modal-body">
        <div class="modal-kicker">
          <span>${p.gender}</span><span>${p.origin}</span><span>${p.volume}</span>
        </div>
        <h2>${p.name}</h2>
        <div class="modal-meta">${p.brand} • Curadoria Zafir</div>
        <p class="modal-desc">${p.longDescription}</p>

        <div class="section-label">Principais acordes</div>
        ${p.accords.map(a => `
          <div class="accord-row">
            <div class="top"><span>${a.name}</span><span style="color:var(--muted)">${a.intensity}%</span></div>
            <div class="fragrantica-bar" style="width:${a.intensity}%; background:${getAccordColor(a.name)}">${a.name}</div>
          </div>`).join("")}

        <div class="section-label">Pirâmide olfativa</div>
        <div class="notes-grid">
          <div><div class="note-col-title">Topo</div>${p.notes.top.map(n => `<span class="note">${n}</span>`).join("")}</div>
          <div><div class="note-col-title">Coração</div>${p.notes.mid.map(n => `<span class="note">${n}</span>`).join("")}</div>
          <div><div class="note-col-title">Fundo</div>${p.notes.base.map(n => `<span class="note">${n}</span>`).join("")}</div>
        </div>

        <div class="personality">
          <div><span>Rastro</span><strong>${p.trail}</strong></div>
          <div><span>Estilo</span><strong>${p.mood}</strong></div>
          <div><span>Melhor uso</span><strong>${p.season}</strong></div>
        </div>

        <div class="stats">
          <div>
            <div class="stat-head"><span>Fixação</span><span>${p.fixation}%</span></div>
            <div class="bar"><div style="width:${p.fixation}%"></div></div>
          </div>
          <div>
            <div class="stat-head"><span>Projeção</span><span>${p.projection}%</span></div>
            <div class="bar"><div style="width:${p.projection}%"></div></div>
          </div>
        </div>

        <div class="occasions">${p.occasions.map(o => `<span class="occasion">${o}</span>`).join("")}</div>

        <div class="buy-row">
          <div>
            <div class="price-big">R$ ${p.price}</div>
            <div class="label">MELHOR PREÇO DE MANAUS</div>
          </div>
          <a class="buy-btn" target="_blank" rel="noreferrer" href="${waLink}">Comprar</a>
        </div>

        <div class="installments">
          <div class="installments-title">Simulação de Parcelas</div>
          <div class="installments-grid">${installments}</div>
          <div class="inst-note">Aceitamos cartão em até 12x. A partir de 2x há acréscimo da maquininha, com taxa repassada pela operadora.</div>
        </div>
      </div>
    </div>`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- Magnetic hover ---------- */
document.addEventListener("pointermove", e => {
  document.querySelectorAll(".magnetic:hover").forEach(el => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});
document.addEventListener("pointerout", e => {
  const target = e.target.closest?.(".magnetic");
  if (target) target.style.transform = "";
});

/* ---------- Footer / WhatsApp ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("igLink").href = INSTAGRAM_URL;
document.getElementById("waFloat").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá Zafir! Quero saber mais sobre os perfumes.")}`;