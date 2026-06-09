/* ===== Zafir Perfumes — script.js ===== */

const WHATSAPP_NUMBER = "5592000000000"; // <-- troque pelo número real (DDI+DDD+número)
const INSTAGRAM_URL = "https://instagram.com/zafirperfumes";

const PERFUMES = [
  {
    id: "al-aroos",
    name: "Durrat Al Aroos",
    brand: "Al Wataniah",
    origin: "Emirados Árabes",
    gender: "Feminino",
    image: "assets/al-aroos.png",
    price: 320,
    volume: "100ml",
    description: "Floral oriental envolvente, com toque de mel e baunilha cremosa.",
    longDescription:
      "Durrat Al Aroos é uma celebração da feminilidade árabe. Um perfume floral oriental que abre com frescor cítrico, evolui para um coração floral aveludado e descansa numa base doce e sensual de baunilha, âmbar e almíscar. Perfeito para mulheres que desejam marcar presença com elegância.",
    notes: { top: ["Bergamota","Pera","Açafrão"], mid: ["Rosa","Jasmim","Mel"], base: ["Baunilha","Âmbar","Almíscar"] },
    accords: [
      { name: "Doce", intensity: 90 },
      { name: "Floral", intensity: 80 },
      { name: "Baunilha", intensity: 75 },
      { name: "Âmbar", intensity: 65 },
      { name: "Almíscar", intensity: 55 },
    ],
    fixation: 85, projection: 75,
    occasions: ["Noite","Encontros","Festas"],
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
    description: "Amadeirado especiado intenso, com couro e oud nobre.",
    longDescription:
      "Attar Al Wesal é uma fragrância masculina poderosa que evoca a força do deserto. Especiarias quentes, oud profundo e couro marcante constroem um perfume de assinatura, ideal para o homem que não passa despercebido.",
    notes: { top: ["Cardamomo","Pimenta Negra","Bergamota"], mid: ["Oud","Rosa","Cedro"], base: ["Couro","Âmbar","Patchouli"] },
    accords: [
      { name: "Amadeirado", intensity: 95 },
      { name: "Especiado", intensity: 85 },
      { name: "Couro", intensity: 75 },
      { name: "Oud", intensity: 80 },
      { name: "Âmbar", intensity: 60 },
    ],
    fixation: 92, projection: 88,
    occasions: ["Noite","Inverno","Trabalho"],
  },
  {
    id: "bidaya-elliur",
    name: "Bidaya Elliur",
    brand: "Bidaya",
    origin: "Emirados Árabes",
    gender: "Masculino",
    image: "assets/bidaya-elliur.png",
    price: 329,
    volume: "100ml",
    description: "Cítrico aromático fresco, vibrante e versátil para o dia.",
    longDescription:
      "Bidaya Elliur é um aromático cítrico cheio de energia. Toques de laranja siciliana e limão se misturam a ervas frescas e uma base amadeirada limpa. Perfeito para o dia a dia, trabalho e clima quente.",
    notes: { top: ["Laranja","Limão Siciliano","Bergamota"], mid: ["Alecrim","Lavanda","Gengibre"], base: ["Cedro","Almíscar Branco","Vetiver"] },
    accords: [
      { name: "Cítrico", intensity: 95 },
      { name: "Fresco", intensity: 88 },
      { name: "Aromático", intensity: 70 },
      { name: "Amadeirado", intensity: 55 },
    ],
    fixation: 60, projection: 65,
    occasions: ["Dia","Trabalho","Verão"],
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
    description: "Lendário amadeirado frutal — clássico de assinatura.",
    longDescription:
      "Club de Nuit Intense Man é um ícone mundial. Frutal, amadeirado e fumado, abre com abacaxi e maçã preta, evolui para jasmim e bétula, e fecha em uma base profunda de âmbar e almíscar. Ótima performance e presença marcante.",
    notes: { top: ["Abacaxi","Maçã Preta","Limão"], mid: ["Bétula","Jasmim","Rosa"], base: ["Âmbar","Almíscar","Patchouli"] },
    accords: [
      { name: "Amadeirado", intensity: 90 },
      { name: "Frutal", intensity: 80 },
      { name: "Fumado", intensity: 70 },
      { name: "Âmbar", intensity: 75 },
    ],
    fixation: 95, projection: 92,
    occasions: ["Noite","Eventos","Encontros"],
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
    description: "Gourmand doce e cremoso, marcante e jovem.",
    longDescription:
      "Yara da Lattafa é um perfume gourmand viciante. Doce, leitoso e cremoso, traz notas de orquídea, baunilha e sândalo numa composição moderna e sedutora. Um dos preferidos do público feminino.",
    notes: { top: ["Orquídea","Frutas Doces"], mid: ["Heliotrópio","Caramelo"], base: ["Baunilha","Sândalo","Almíscar"] },
    accords: [
      { name: "Doce", intensity: 95 },
      { name: "Gourmand", intensity: 88 },
      { name: "Baunilha", intensity: 80 },
      { name: "Cremoso", intensity: 75 },
      { name: "Floral", intensity: 50 },
    ],
    fixation: 82, projection: 78,
    occasions: ["Dia","Noite","Encontros"],
  },
];

/* ---------- Theme ---------- */
const themeBtn = document.getElementById("themeBtn");
const iconMoon = document.getElementById("iconMoon");
const iconSun  = document.getElementById("iconSun");
const logoImg  = document.getElementById("logoImg");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "light") {
    iconMoon.style.display = "none"; iconSun.style.display = "block";
    logoImg.src = "assets/logo-zafir-light.jpeg";
  } else {
    iconMoon.style.display = "block"; iconSun.style.display = "none";
    logoImg.src = "assets/logo-zafir-dark.jpeg";
  }
  localStorage.setItem("zafir-theme", theme);
}
applyTheme(localStorage.getItem("zafir-theme") || "dark");
themeBtn.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme");
  applyTheme(cur === "light" ? "dark" : "light");
});

/* ---------- Navigation (Home / Sobre) ---------- */
const pageHome = document.getElementById("page-home");
const pageSobre = document.getElementById("page-sobre");
function navTo(target) {
  if (target === "sobre") { pageHome.style.display = "none"; pageSobre.style.display = "block"; }
  else { pageHome.style.display = "block"; pageSobre.style.display = "none"; }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-nav]").forEach(el => {
  el.addEventListener("click", e => { e.preventDefault(); navTo(el.dataset.nav); });
});

/* ---------- Grid + Filters ---------- */
const grid = document.getElementById("grid");
let activeFilter = "Todos";

function renderGrid() {
  const list = PERFUMES.filter(p => activeFilter === "Todos" || p.gender === activeFilter);
  grid.classList.remove("stagger"); void grid.offsetWidth; grid.classList.add("stagger");
  grid.innerHTML = list.map(p => {
    const inst = ((p.price * 1.2) / 12).toFixed(2).replace(".", ",");
    return `
    <button class="card" data-id="${p.id}">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="badge badge-gender ${p.gender}">${p.gender}</span>
        <span class="badge badge-origin">✦ ${p.origin.split(" ")[0]}</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="card-meta">${p.brand} • ${p.volume}</div>
        <p class="card-desc">${p.description}</p>
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

renderGrid();

/* ---------- Modal ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openModal(id) {
  const p = PERFUMES.find(x => x.id === id);
  if (!p) return;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no perfume ${p.name}.`)}`;
  const installments = [1,2,3,4,6,10,12].map(n => {
    const factor = n === 1 ? 1 : 1 + 0.0299 * (n - 1);
    const v = (p.price * factor / n).toFixed(2).replace(".", ",");
    return `<div class="inst-cell"><span class="n">${n}x</span><span class="v">R$ ${v}</span></div>`;
  }).join("");

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img"><img src="${p.image}" alt="${p.name}" /></div>
      <div class="modal-body">
        <h2>${p.name}</h2>
        <div class="modal-meta">${p.brand} • ${p.origin} • ${p.volume}</div>
        <p class="modal-desc">${p.longDescription}</p>

        <div class="section-label">Acordes Principais</div>
        ${p.accords.map(a => `
          <div class="accord-row">
            <div class="top"><span>${a.name}</span><span style="color:var(--muted)">${a.intensity}%</span></div>
            <div class="bar"><div style="width:${a.intensity}%"></div></div>
          </div>`).join("")}

        <div class="section-label">Pirâmide Olfativa</div>
        <div class="notes-grid">
          <div>
            <div class="note-col-title">Topo</div>
            ${p.notes.top.map(n => `<span class="note">${n}</span>`).join("")}
          </div>
          <div>
            <div class="note-col-title">Coração</div>
            ${p.notes.mid.map(n => `<span class="note">${n}</span>`).join("")}
          </div>
          <div>
            <div class="note-col-title">Fundo</div>
            ${p.notes.base.map(n => `<span class="note">${n}</span>`).join("")}
          </div>
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

        <div class="occasions">
          ${p.occasions.map(o => `<span class="occasion">${o}</span>`).join("")}
        </div>

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
          <div class="inst-note">Aceitamos cartão em até 12x. A partir de 2x há acréscimo da maquininha (taxa repassada da operadora).</div>
        </div>
      </div>
    </div>`;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- Footer / WhatsApp ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("igLink").href = INSTAGRAM_URL;
document.getElementById("waFloat").href =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá Zafir! Quero saber mais sobre os perfumes.")}`;
