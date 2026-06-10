/* ===== Zafir Perfumes — script.js ===== */

const WHATSAPP_NUMBER = "5592000000000"; // <-- troque pelo número real (DDI+DDD+número)
const INSTAGRAM_URL = "https://www.instagram.com/zafir.perfumaria/";

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
    description: "Almíscar branco, baunilha e açafrão numa aura doce, limpa e sensual.",
    longDescription: "Durrat Al Aroos é delicado, feminino e irresistivelmente envolvente. A fragrância combina a sensação limpa e sofisticada do almíscar branco com especiarias suaves e um toque cremoso de baunilha que traz conforto e elegância. Sua evolução revela facetas quentes e refinadas que deixam a composição mais rica e marcante, sem perder a suavidade. O resultado é um perfume que transmite feminilidade, charme e sofisticação, ideal para quem aprecia fragrâncias doces na medida certa e com excelente presença.",
    notes: { top: ["Almíscar Branco", "Nagarmotha", ], mid: ["Baunilha", "Cardamomo", "Açafrão"], base: ["Madeira Guaiac", "Cumarina", ] },
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
    trail: "Doce e Limpo",
    mood: "Feminino Elegante",
    season: "Noite e Clima ameno",
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
    description: "Pera, lavanda e cítricos sobre uma base cremosa de baunilha, âmbar e madeiras elegantes..",
    longDescription: "Attar Al Wesal é intenso, envolvente e surpreendentemente versátil. A abertura combina pera, lavanda, hortelã, bergamota e limão, criando um contraste vibrante entre frescor aromático e dulçor frutado. No coração, canela, sálvia e cominho adicionam profundidade e um toque especiado que traz personalidade à composição. A base de baunilha negra, âmbar, cedro e patchouli entrega cremosidade, calor e um acabamento amadeirado sofisticado. O resultado é uma fragrância marcante, moderna e extremamente agradável, com excelente desempenho e presença. Ideal para noites, encontros e ocasiões especiais, mantendo elegância e fácil agradabilidade do início ao fim.",
    notes: { top: ["Hortelã", "Lavanda", "Bergamota"], mid: ["Canela", "Sálvia Esclaréia", "Cominho"], base: ["Casa de Baunilha Negra", "Âmbar", "Patchouli"] },
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
    trail: "Escuro e Imponente",
    mood: "Masculino Poderoso",
    season: "Noite e Inverno",
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
    longDescription: "Bidaya Elliur é vibrante, elegante e cheio de personalidade. Sua abertura traz uma explosão refrescante de frutas e cítricos que transmite energia e leveza desde os primeiros instantes. Com o passar do tempo, a fragrância ganha nuances aromáticas e florais que adicionam sofisticação sem perder a sensação de frescor. A base levemente adocicada cria um acabamento macio e confortável, tornando o perfume extremamente versátil para o clima quente de Manaus. É uma fragrância moderna, diferente e fácil de gostar, perfeita para quem busca frescor com identidade própria.",
    notes: { top: ["Groselha Preta", "CiDRA", "Limão", "Menta", "Laranja"], mid: ["Damasco", "Manjericão", "Coentro", "Rosa de Maio"], base: ["Ambrette", "Cenoura", "Tâmaras", "Figo"] },
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
    trail: "Fresco e Frutado",
    mood: "Moderno Versátil",
    season: "Dia e Calor",
    occasions: ["Dia", "Trabalho", "Verão"]
  },
  {
    id: "club-de-nuit",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    origin: "Emirados Árabes",
    gender: "Masculino",
    image: "assets/clubtop.webp",
    price: 349,
    volume: "105ml",
    description: "Cítrico, frutado, fumado e amadeirado. Um clássico de performance.",
    longDescription: "Club de Nuit Intense Man é uma fragrância marcante que conquistou espaço entre os perfumes masculinos mais admirados do mundo. A abertura cítrica e frutada chama atenção pela energia e pelo frescor, enquanto o coração adiciona elegância e profundidade à composição. Com o passar das horas, surgem nuances amadeiradas, levemente esfumaçadas e envolventes, criando uma assinatura intensa e memorável. É um perfume de presença forte, excelente desempenho e grande versatilidade, perfeito para quem gosta de deixar sua marca por onde passa.",
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
    trail: "Potente e Elegante",
    mood: "Assinatura Masculina",
    season: "Eventos e Noite",
    occasions: ["Noite", "Eventos", "Encontros"]
  },
  {
    id: "yara",
    name: "Yara",
    brand: "Lattafa",
    origin: "Emirados Árabes",
    gender: "Feminino",
    image: "assets/yara-rose.png",
    price: 289,
    volume: "100ml",
    description: "Gourmand tropical cremoso com baunilha, musk e sândalo macio.",
    longDescription: "Yara da Lattafa é doce, cremosa e imediatamente reconhecível. Ela combina orquídea, heliotrópio e tangerina na abertura, seguida por um coração gourmand com frutas tropicais e uma base de baunilha, almíscar e sândalo. O resultado é jovem, confortável, feminino e completamente viciante, com uma sensação levemente lactônica na pele.",
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
const pageContatos = document.getElementById("page-contatos");

function navTo(target) {
  pageHome.style.display = "none";
  pageSobre.style.display = "none";
  pageContatos.style.display = "none";
  if (target === "sobre") {
    pageSobre.style.display = "block";
  } else if (target === "contatos") {
    pageContatos.style.display = "block";
  } else {
    pageHome.style.display = "block";
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
  const installments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => {
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
          <div class="notes-col notes-top"><div class="note-col-title">🌿 Topo</div>${p.notes.top.map(n => `<span class="note note-top">${n}</span>`).join("")}</div>
          <div class="notes-col notes-mid"><div class="note-col-title">🌸 Coração</div>${p.notes.mid.map(n => `<span class="note note-mid">${n}</span>`).join("")}</div>
          <div class="notes-col notes-base"><div class="note-col-title">🪵 Fundo</div>${p.notes.base.map(n => `<span class="note note-base">${n}</span>`).join("")}</div>
        </div>

        <div class="personality">
          <div class="pers-rastro"><span>💨 Rastro</span><strong>${p.trail.replace(/^\w/, c => c.toUpperCase())}</strong></div>
          <div class="pers-estilo"><span>✦ Estilo</span><strong>${p.mood}</strong></div>
          <div class="pers-uso"><span>🕐 Melhor uso</span><strong>${p.season}</strong></div>
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

/* ---------- Footer / WhatsApp / Contatos ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
const waMsg = encodeURIComponent("Olá Zafir Perfumaria! Quero saber mais sobre os perfumes.");
document.getElementById("waFloat").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
const waContact = document.getElementById("waContact");
if (waContact) waContact.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;