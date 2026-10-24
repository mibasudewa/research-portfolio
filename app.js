/**
 * ============================================================================
 * APP.JS
 * MULTI PAGE ACADEMIC PORTFOLIO & INTERACTIVE LABORATORY ENGINE
 * Author: M. Imansyah Basudewa, S.T., M.T.
 * Affiliation: Computer Engineering Graduate Researcher, Memorial University
 * ============================================================================
 */

const researchData = window.researchData || [];

/* ----------------------------------------------------------------------------
 * KATEX MATHEMATICAL RENDERING HELPER
 * ---------------------------------------------------------------------------- */
function renderMath(container = document.body) {
  if (!container) return;
  if (typeof renderMathInElement === "function") {
    try {
      renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn("KaTeX render note:", err);
    }
  }
}

function renderLatexString(latexStr, element, displayMode = false) {
  if (!element) return;
  if (typeof katex !== "undefined") {
    try {
      katex.render(latexStr, element, { displayMode, throwOnError: false });
      return;
    } catch (e) {
      console.warn("KaTeX direct render fallback:", e);
    }
  }
  element.textContent = latexStr;
}

/* ============================================================================
 * 1. SHARED NAVIGATION WITH DROPDOWNS FOR 01. RESEARCH, 03. LEARN, 04. ILLUSTRATION
 * ============================================================================ */
function initSharedNavigation() {
  const headerEl = document.getElementById("sharedSiteHeader");
  const currentPage = document.body.getAttribute("data-page") || "research";

  if (headerEl) {
    const isResearch = currentPage === "research" || currentPage === "research-pillars";
    const isPubs = currentPage === "publications";
    const isLearn = currentPage === "learn";
    const isIllus = currentPage === "illustrations";
    const isProfile = currentPage === "profile";

    headerEl.innerHTML = `
      <div class="nav-container">
        <a href="index.html" class="brand-identity">
          <span class="brand-name">M. IMANSYAH BASUDEWA, S.T., M.T.</span>
          <span class="brand-badge">QUANTUM &amp; COMM RESEARCH</span>
        </a>

        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-expanded="false">MENU</button>

        <nav class="main-nav" id="mainNav" aria-label="Main Navigation">
          <!-- 01. MAIN (FORMERLY RESEARCH) WITH DROPDOWN (INCLUDES YEARS OF PUBLICATIONS) -->
          <div class="nav-item-dropdown">
            <a href="index.html" class="nav-link ${isResearch ? "active" : ""}" aria-haspopup="true">
              <span class="nav-num">01.</span>MAIN <span class="dropdown-caret">▾</span>
            </a>
            <div class="learn-dropdown-menu" aria-label="Main Submenu">
              <div class="dropdown-header-label">Main Pages (Separate Views)</div>
              <a href="index.html" class="dropdown-link">
                <span>Main Portrait &amp; Academic Overview</span>
                <span>[Main]</span>
              </a>
              <a href="research-pillars.html" class="dropdown-link">
                <span>Seven Core Research Pillars &amp; Tree/Venn Map</span>
                <span>[7 Pillars]</span>
              </a>
              <div class="dropdown-header-label">Years of Publications (Research Index)</div>
              <a href="publications.html?year=All" class="dropdown-link" data-nav-year="All">
                <span>All Publication Years (2023 – 2026)</span>
                <span>[7 Papers]</span>
              </a>
              <a href="publications.html?year=2026" class="dropdown-link" data-nav-year="2026">
                <span>Year 2026: 2D Surface Codes &amp; Syndrome Decoding</span>
                <span>[2026]</span>
              </a>
              <a href="publications.html?year=2025" class="dropdown-link" data-nav-year="2025">
                <span>Year 2025: Triangle Hamming, Anonymous QKD &amp; PQC</span>
                <span>[2025]</span>
              </a>
              <a href="publications.html?year=2024" class="dropdown-link" data-nav-year="2024">
                <span>Year 2024: Coherent DWDM Optical &amp; Massive MIMO</span>
                <span>[2024]</span>
              </a>
              <a href="publications.html?year=2023" class="dropdown-link" data-nav-year="2023">
                <span>Year 2023: Algebraic Homology, Steane &amp; SU(2)</span>
                <span>[2023]</span>
              </a>
              <div class="dropdown-header-label">Direct Pillar View Switcher</div>
              <a href="research-pillars.html?pillar=pillar-1" class="dropdown-link">
                <span>01. Quantum Information Theory</span>
                <span>[S(ρ)]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-2" class="dropdown-link">
                <span>02. Error Correction &amp; Surface Codes</span>
                <span>[QEC]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-3" class="dropdown-link">
                <span>03. Quantum Cryptography &amp; QKD</span>
                <span>[BB84]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-4" class="dropdown-link">
                <span>04. Quantum Machine Learning</span>
                <span>[PQC]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-5" class="dropdown-link">
                <span>05. Group &amp; Topology Theory</span>
                <span>[SU(2)]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-6" class="dropdown-link">
                <span>06. Optical Communications</span>
                <span>[NLSE]</span>
              </a>
              <a href="research-pillars.html?pillar=pillar-7" class="dropdown-link">
                <span>07. Wireless Communications</span>
                <span>[MIMO]</span>
              </a>
            </div>
          </div>

          <!-- 02. PUBLICATIONS WITH YEARS DROPDOWN -->
          <div class="nav-item-dropdown">
            <a href="publications.html" class="nav-link ${isPubs ? "active" : ""}" aria-haspopup="true">
              <span class="nav-num">02.</span>PUBLICATIONS <span class="dropdown-caret">▾</span>
            </a>
            <div class="learn-dropdown-menu" aria-label="Publications Years Submenu">
              <div class="dropdown-header-label">Filter by Year of Publication</div>
              <a href="publications.html?year=All" class="dropdown-link" data-nav-year="All">
                <span>All Years (Complete IEEE Index)</span>
                <span>[All]</span>
              </a>
              <a href="publications.html?year=2026" class="dropdown-link" data-nav-year="2026">
                <span>2026 Publications &amp; Research Track</span>
                <span>[2026]</span>
              </a>
              <a href="publications.html?year=2025" class="dropdown-link" data-nav-year="2025">
                <span>2025 Publications &amp; Monographs</span>
                <span>[2025]</span>
              </a>
              <a href="publications.html?year=2024" class="dropdown-link" data-nav-year="2024">
                <span>2024 Telecommunications &amp; Optical Studies</span>
                <span>[2024]</span>
              </a>
              <a href="publications.html?year=2023" class="dropdown-link" data-nav-year="2023">
                <span>2023 Mathematical &amp; Topological Papers</span>
                <span>[2023]</span>
              </a>
            </div>
          </div>

          <!-- 03. LEARN WITH DROPDOWN (5 MENUS × 10 SUBTOPICS = 50 SUBTOPICS) -->
          <div class="nav-item-dropdown">
            <a href="learn.html" class="nav-link ${isLearn ? "active" : ""}" aria-haspopup="true">
              <span class="nav-num">03.</span>LEARN <span class="dropdown-caret">▾</span>
            </a>
            <div class="learn-dropdown-menu" aria-label="Learn Submenu">
              <div class="dropdown-header-label">5 Menus × 10 Subtopics (250+ Equations)</div>
              <a href="learn.html?mod=mod-ecc" class="dropdown-link" data-learn-mod="mod-ecc">
                <span>01. Error Correction Codes (Linear, Hamming, GF, Eigen)</span>
                <span>[10 Subtopics]</span>
              </a>
              <a href="learn.html?mod=mod-crypto" class="dropdown-link" data-learn-mod="mod-crypto">
                <span>02. Classical &amp; Quantum Cryptography (OTP, Shor, BB84)</span>
                <span>[10 Subtopics]</span>
              </a>
              <a href="learn.html?mod=mod-networks" class="dropdown-link" data-learn-mod="mod-networks">
                <span>03. Classical &amp; Quantum Networks (PLOB, Repeaters, HOM)</span>
                <span>[10 Subtopics]</span>
              </a>
              <a href="learn.html?mod=mod-routing" class="dropdown-link" data-learn-mod="mod-routing">
                <span>04. Classical &amp; Quantum Routing (Dijkstra, BSM, Butterfly)</span>
                <span>[10 Subtopics]</span>
              </a>
              <a href="learn.html?mod=mod-infotheory" class="dropdown-link" data-learn-mod="mod-infotheory">
                <span>05. Classical &amp; Quantum Info Theory (Shannon, Holevo, LSD)</span>
                <span>[10 Subtopics]</span>
              </a>
              <div class="dropdown-header-label">Research Notes &amp; Publishing Studio</div>
              <a href="learn.html?view=notes" class="dropdown-link" data-learn-view="notes">
                <span>Extended LaTeX Research Notes Archive</span>
                <span>[Notes]</span>
              </a>
              <a href="learn.html?view=studio" class="dropdown-link" data-learn-view="studio">
                <span>+ Write &amp; Publish New Post to Learn</span>
                <span>[Author Studio]</span>
              </a>
            </div>
          </div>

          <!-- 04. ILLUSTRATION WITH DROPDOWN LIST (5 LATEX TIKZ / QUANTIKZ FIGURES) -->
          <div class="nav-item-dropdown">
            <a href="illustrations.html" class="nav-link ${isIllus ? "active" : ""}" aria-haspopup="true">
              <span class="nav-num">04.</span>ILLUSTRATION <span class="dropdown-caret">▾</span>
            </a>
            <div class="learn-dropdown-menu" aria-label="Illustration Submenu">
              <div class="dropdown-header-label">LaTeX TikZ / Quantikz Vector &amp; GIF Figures (5 Pages)</div>
              <a href="illustrations.html?topic=crypto#crypto" class="dropdown-link" data-illus-nav="crypto">
                <span>(1) TikZ Figure: BB84 QKD &amp; Wavefunction Collapse</span>
                <span>[Fig 1.1]</span>
              </a>
              <a href="illustrations.html?topic=hamming#hamming" class="dropdown-link" data-illus-nav="hamming">
                <span>(2) TikZ-3D Figure: Hamming Cube (000 &amp; 111)</span>
                <span>[Fig 2.1]</span>
              </a>
              <a href="illustrations.html?topic=topology#topology" class="dropdown-link" data-illus-nav="topology">
                <span>(3) TikZ Figure: Fano 7-Steane &amp; IBM Heavy-Hex</span>
                <span>[Fig 3.1]</span>
              </a>
              <a href="illustrations.html?topic=circuit#circuit" class="dropdown-link" data-illus-nav="circuit">
                <span>(4) Quantikz Figure: 3-Qubit GHZ &amp; Syndrome Circuit</span>
                <span>[Fig 4.1]</span>
              </a>
              <a href="illustrations.html?topic=routing#routing" class="dropdown-link" data-illus-nav="routing">
                <span>(5) TikZ Figure: Classical OSPF vs. Quantum BSM Routing</span>
                <span>[Fig 5.1]</span>
              </a>
            </div>
          </div>

          <!-- 05. PROFILE -->
          <a href="profile.html" class="nav-link ${isProfile ? "active" : ""}">
            <span class="nav-num">05.</span>PROFILE
          </a>
        </nav>
      </div>
    `;
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Portrait Photo Upload & LocalStorage Persistence on Main Page
  const photoInput = document.getElementById("photoUploadInput");
  const photoImg = document.getElementById("researcherPhotoImg");
  const placeholderSvg = document.getElementById("portraitPlaceholderSvg");

  const savedPhoto = localStorage.getItem("mib_academic_portrait");
  if (savedPhoto && photoImg && placeholderSvg) {
    photoImg.src = savedPhoto;
    photoImg.style.display = "block";
    placeholderSvg.style.display = "none";
  }

  if (photoInput && photoImg && placeholderSvg) {
    photoInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target.result;
        photoImg.src = dataUrl;
        photoImg.style.display = "block";
        placeholderSvg.style.display = "none";
        try {
          localStorage.setItem("mib_academic_portrait", dataUrl);
        } catch (err) {
          console.warn("Portrait storage note:", err);
        }
      };
      reader.readAsDataURL(file);
    });
  }
}

/* ============================================================================
 * 2. DEDICATED RESEARCH PILLARS PAGE (`research-pillars.html`):
 *    7 CORE RESEARCH PILLARS + INTERACTIVE (a) TREE & (b) VENN PAGE VIEW SWITCHER
 * ============================================================================ */
let activePillarFilter = "pillar-1";

function initResearchPillars() {
  const grid = document.getElementById("pillarsBentoGrid");
  const tabsBar = document.getElementById("pillarTabsBar");
  if (!grid || typeof researchPillars === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const requestedPillar = params.get("pillar");
  if (
    requestedPillar === "all" ||
    researchPillars.some((p) => p.id === requestedPillar)
  ) {
    activePillarFilter = requestedPillar;
  }

  function renderPillarTabsAndView() {
    if (tabsBar) {
      tabsBar.innerHTML =
        researchPillars
          .map(
            (p) => `
            <button
              class="curriculum-tab-btn ${activePillarFilter === p.id ? "active" : ""}"
              type="button"
              data-pillar-tab="${p.id}"
            >
              Pillar ${p.num}: ${p.title.split("&")[0].trim()}
            </button>
          `
          )
          .join("") +
        `
          <button
            class="curriculum-tab-btn ${activePillarFilter === "all" ? "active" : ""}"
            type="button"
            data-pillar-tab="all"
          >
            View All 7 Pillars Grid
          </button>
        `;

      tabsBar.querySelectorAll("[data-pillar-tab]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-pillar-tab");
          selectPillarView(target);
        });
      });
    }

    const visiblePillars =
      activePillarFilter === "all"
        ? researchPillars
        : researchPillars.filter((p) => p.id === activePillarFilter);

    grid.style.gridTemplateColumns =
      activePillarFilter === "all" ? "" : "1fr";

    grid.innerHTML = visiblePillars
      .map(
        (p) => `
        <article class="pillar-card highlighted-pillar" id="${p.id}" data-pillar-id="${p.id}">
          <div>
            <div class="pillar-top">
              <span class="pillar-index">${p.code}</span>
              <span class="academic-tag">${p.classification}</span>
            </div>
            <h3 class="pillar-title" style="font-size: 1.45rem;">${p.num}. ${p.title}</h3>
            <p style="font-size: 1.02rem; color: var(--text-body);">${p.abstract}</p>
          </div>
          <div>
            <div class="pillar-equation">
              <div class="pillar-eq-math" data-latex="${p.equation.replace(/"/g, "&quot;")}">
                $${p.equation}$
              </div>
              <span style="font-size: 0.78rem; color: var(--text-muted); white-space: nowrap;">[${p.eqLabel}]</span>
            </div>
            <div class="pillar-tags">
              ${p.projects.map((t) => `<span class="pillar-tag">${t}</span>`).join("")}
            </div>
            <div class="btn-row" style="margin-top: 1rem;">
              <a href="publications.html" class="ctrl-pill-btn">Inspect Related Publications →</a>
              <a href="learn.html" class="ctrl-pill-btn">Open Foundational Theory Module →</a>
              <a href="illustrations.html" class="ctrl-pill-btn burgundy">Launch Interactive Simulation →</a>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    grid.querySelectorAll(".pillar-eq-math").forEach((el) => {
      const raw = el.getAttribute("data-latex");
      if (raw) renderLatexString(raw, el, false);
    });

    const readout = document.getElementById("selectedPillarReadout");
    if (readout) {
      if (activePillarFilter === "all") {
        readout.textContent = "Showing All 7 Core Research Pillars";
      } else {
        const found = researchPillars.find((p) => p.id === activePillarFilter);
        if (found) {
          readout.textContent = `Active Pillar View: ${found.num}. ${found.title}`;
        }
      }
    }
  }

  window.selectPillarView = function selectPillarView(pillarId) {
    activePillarFilter = pillarId;
    const url = new URL(window.location.href);
    url.searchParams.set("pillar", pillarId);
    window.history.replaceState({}, "", url.toString());
    renderPillarTabsAndView();
  };

  renderPillarTabsAndView();
  initInteractiveTreeAndVenn();
}

function jumpToPillar(pillarId) {
  if (typeof window.selectPillarView === "function") {
    window.selectPillarView(pillarId);
  }
}

function initInteractiveTreeAndVenn() {
  const treeWrapper = document.getElementById("treeDiagramWrapper");
  const vennWrapper = document.getElementById("vennDiagramWrapper");
  const treeBtn = document.getElementById("showTreeDiagramBtn");
  const vennBtn = document.getElementById("showVennDiagramBtn");
  const caption = document.getElementById("taxonomyModeCaption");

  if (!treeWrapper || !vennWrapper) return;

  // (a) Build Interactive Hierarchical Tree SVG
  treeWrapper.innerHTML = `
    <svg class="taxonomy-svg" viewBox="0 0 980 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interactive Research Hierarchy Tree">
      <!-- Background Grid & Title -->
      <rect width="980" height="390" fill="#FAF9F5" />
      <text x="490" y="28" text-anchor="middle" font-family="Batang, Georgia, serif" font-size="14" font-weight="bold" fill="#111827">
        (a) HIERARCHICAL RESEARCH TAXONOMY TREE — CLICK ANY LEAF NODE (1 TO 7) TO NAVIGATE TO PILLAR
      </text>

      <!-- Root Node -->
      <rect x="315" y="45" width="350" height="44" fill="#1E3A8A" stroke="#111827" stroke-width="2" />
      <text x="490" y="65" text-anchor="middle" fill="#FFFFFF" font-family="Batang, serif" font-size="12.5" font-weight="bold">
        QUANTUM &amp; NEXT GEN COMMUNICATIONS RESEARCH
      </text>
      <text x="490" y="81" text-anchor="middle" fill="#DBEAFE" font-family="Times New Roman, serif" font-size="10.5">
        M. Imansyah Basudewa, S.T., M.T. (Memorial University)
      </text>

      <!-- Edges from Root to 3 Intermediate Branches -->
      <path d="M 490 89 L 490 112 M 175 112 L 805 112 M 175 112 L 175 135 M 490 112 L 490 135 M 805 112 L 805 135" stroke="#1E293B" stroke-width="2" fill="none" />

      <!-- Intermediate Branch 1: Mathematical Foundations -->
      <rect x="55" y="135" width="240" height="38" fill="#EFF6FF" stroke="#1E3A8A" stroke-width="1.8" />
      <text x="175" y="158" text-anchor="middle" fill="#1E3A8A" font-family="Batang, serif" font-size="12" font-weight="bold">
        I. Mathematical &amp; Topological Foundations
      </text>

      <!-- Intermediate Branch 2: Quantum Computing & Security -->
      <rect x="355" y="135" width="270" height="38" fill="#FFF1F2" stroke="#881337" stroke-width="1.8" />
      <text x="490" y="158" text-anchor="middle" fill="#881337" font-family="Batang, serif" font-size="12" font-weight="bold">
        II. Quantum Computation &amp; Cryptography
      </text>

      <!-- Intermediate Branch 3: Physical Layer Communications -->
      <rect x="685" y="135" width="240" height="38" fill="#ECFDF5" stroke="#065F46" stroke-width="1.8" />
      <text x="805" y="158" text-anchor="middle" fill="#065F46" font-family="Batang, serif" font-size="12" font-weight="bold">
        III. Optical &amp; Wireless Physical Layers
      </text>

      <!-- Connectors from Intermediate Branches to the 7 Clickable Pillar Leaves -->
      <!-- Branch I to Pillar 1 & Pillar 5 -->
      <path d="M 175 173 L 175 205 M 95 205 L 245 205 M 95 205 L 95 245 M 245 205 L 245 245" stroke="#1E3A8A" stroke-width="1.8" fill="none" />
      <!-- Branch II to Pillar 2, Pillar 3, Pillar 4 -->
      <path d="M 490 173 L 490 205 M 375 205 L 615 205 M 375 205 L 375 245 M 495 205 L 495 245 M 615 205 L 615 245" stroke="#881337" stroke-width="1.8" fill="none" />
      <!-- Branch III to Pillar 6 & Pillar 7 -->
      <path d="M 805 173 L 805 205 M 740 205 L 885 205 M 740 205 L 740 245 M 885 205 L 885 245" stroke="#065F46" stroke-width="1.8" fill="none" />

      <!-- LEAF 1: Pillar 1 (Quantum Info Theory) -->
      <g class="tree-branch-node" data-target-pillar="pillar-1">
        <rect x="25" y="245" width="130" height="92" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2" />
        <rect x="25" y="245" width="130" height="24" fill="#1E3A8A" />
        <text x="90" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 01</text>
        <text x="90" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Quantum Info</text>
        <text x="90" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Theory</text>
        <text x="90" y="324" text-anchor="middle" fill="#1E3A8A" font-family="monospace" font-size="9.5">S(ρ) = -Tr(ρ log ρ)</text>
      </g>

      <!-- LEAF 5: Pillar 5 (Group & Topology Theory) -->
      <g class="tree-branch-node" data-target-pillar="pillar-5">
        <rect x="175" y="245" width="130" height="92" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2" />
        <rect x="175" y="245" width="130" height="24" fill="#1E3A8A" />
        <text x="240" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 05</text>
        <text x="240" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Group &amp; Topology</text>
        <text x="240" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Theory</text>
        <text x="240" y="324" text-anchor="middle" fill="#1E3A8A" font-family="monospace" font-size="9.5">H_1(M; Z_2), SU(2)</text>
      </g>

      <!-- LEAF 2: Pillar 2 (Error Correction & FT) -->
      <g class="tree-branch-node" data-target-pillar="pillar-2">
        <rect x="315" y="245" width="115" height="92" fill="#FFFFFF" stroke="#881337" stroke-width="2" />
        <rect x="315" y="245" width="115" height="24" fill="#881337" />
        <text x="372" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 02</text>
        <text x="372" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Error Correction</text>
        <text x="372" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">&amp; Surface Codes</text>
        <text x="372" y="324" text-anchor="middle" fill="#881337" font-family="monospace" font-size="9.5">S_i |ψ⟩ = +|ψ⟩</text>
      </g>

      <!-- LEAF 3: Pillar 3 (Quantum Cryptography) -->
      <g class="tree-branch-node" data-target-pillar="pillar-3">
        <rect x="440" y="245" width="115" height="92" fill="#FFFFFF" stroke="#881337" stroke-width="2" />
        <rect x="440" y="245" width="115" height="24" fill="#881337" />
        <text x="497" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 03</text>
        <text x="497" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Quantum</text>
        <text x="497" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Cryptography</text>
        <text x="497" y="324" text-anchor="middle" fill="#881337" font-family="monospace" font-size="9.5">BB84, E91, GHZ</text>
      </g>

      <!-- LEAF 4: Pillar 4 (Quantum Machine Learning) -->
      <g class="tree-branch-node" data-target-pillar="pillar-4">
        <rect x="565" y="245" width="115" height="92" fill="#FFFFFF" stroke="#881337" stroke-width="2" />
        <rect x="565" y="245" width="115" height="24" fill="#881337" />
        <text x="622" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 04</text>
        <text x="622" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Quantum</text>
        <text x="622" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Machine Learning</text>
        <text x="622" y="324" text-anchor="middle" fill="#881337" font-family="monospace" font-size="9.5">PQC, QAOA, VQE</text>
      </g>

      <!-- LEAF 6: Pillar 6 (Optical Communications) -->
      <g class="tree-branch-node" data-target-pillar="pillar-6">
        <rect x="695" y="245" width="120" height="92" fill="#FFFFFF" stroke="#065F46" stroke-width="2" />
        <rect x="695" y="245" width="120" height="24" fill="#065F46" />
        <text x="755" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 06</text>
        <text x="755" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Optical</text>
        <text x="755" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Communications</text>
        <text x="755" y="324" text-anchor="middle" fill="#065F46" font-family="monospace" font-size="9.5">NLSE &amp; Photonic</text>
      </g>

      <!-- LEAF 7: Pillar 7 (Wireless Communications) -->
      <g class="tree-branch-node" data-target-pillar="pillar-7">
        <rect x="830" y="245" width="125" height="92" fill="#FFFFFF" stroke="#065F46" stroke-width="2" />
        <rect x="830" y="245" width="125" height="24" fill="#065F46" />
        <text x="892" y="261" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="10.5" font-weight="bold">PILLAR 07</text>
        <text x="892" y="285" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Wireless</text>
        <text x="892" y="301" text-anchor="middle" fill="#111827" font-family="Batang, serif" font-size="11.5" font-weight="bold">Communications</text>
        <text x="892" y="324" text-anchor="middle" fill="#065F46" font-family="monospace" font-size="9.5">MIMO &amp; Channel</text>
      </g>

      <text x="490" y="368" text-anchor="middle" fill="#52525B" font-family="Times New Roman, serif" font-size="12" font-style="italic">
        Tip: Click any of the 7 numbered leaf boxes above to scroll directly to that Research Pillar below.
      </text>
    </svg>
  `;

  // (b) Build Interactive 3-Circle Venn Diagram SVG
  vennWrapper.innerHTML = `
    <svg class="taxonomy-svg" viewBox="0 0 980 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interactive 7 Domain Venn Diagram">
      <rect width="980" height="430" fill="#FAF9F5" />
      <text x="490" y="28" text-anchor="middle" font-family="Batang, Georgia, serif" font-size="14" font-weight="bold" fill="#111827">
        (b) INTERACTIVE VENN DIAGRAM OF THE 7 RESEARCH PILLARS — CLICK ANY NODE TO JUMP TO PILLAR
      </text>

      <!-- Set Circle A: Quantum Mechanics & Computation (Top Left) -->
      <circle cx="395" cy="185" r="138" fill="rgba(30, 58, 138, 0.09)" stroke="#1E3A8A" stroke-width="2.2" />
      <text x="245" y="82" text-anchor="middle" fill="#1E3A8A" font-family="Batang, serif" font-size="13" font-weight="bold">
        SET A: QUANTUM SYSTEMS
      </text>

      <!-- Set Circle B: Algebraic Topology & Information Theory (Top Right) -->
      <circle cx="585" cy="185" r="138" fill="rgba(136, 19, 55, 0.09)" stroke="#881337" stroke-width="2.2" />
      <text x="735" y="82" text-anchor="middle" fill="#881337" font-family="Batang, serif" font-size="13" font-weight="bold">
        SET B: TOPOLOGY &amp; CODING THEORY
      </text>

      <!-- Set Circle C: Physical Layer Wave Communications (Bottom Center) -->
      <circle cx="490" cy="285" r="128" fill="rgba(6, 95, 70, 0.09)" stroke="#065F46" stroke-width="2.2" />
      <text x="490" y="422" text-anchor="middle" fill="#065F46" font-family="Batang, serif" font-size="13" font-weight="bold">
        SET C: OPTICAL &amp; WIRELESS COMMUNICATIONS
      </text>

      <!-- PILLAR 4: Pure Quantum Set A (Quantum Machine Learning) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-4">
        <rect x="275" y="130" width="128" height="44" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2" />
        <text x="339" y="149" text-anchor="middle" fill="#1E3A8A" font-family="Batang, serif" font-size="11" font-weight="bold">04. Quantum ML</text>
        <text x="339" y="164" text-anchor="middle" fill="#52525B" font-family="monospace" font-size="9.5">PQC &amp; QAOA</text>
      </g>

      <!-- PILLAR 5: Pure Set B (Group & Topology Theory) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-5">
        <rect x="578" y="130" width="136" height="44" rx="6" fill="#FFFFFF" stroke="#881337" stroke-width="2" />
        <text x="646" y="149" text-anchor="middle" fill="#881337" font-family="Batang, serif" font-size="11" font-weight="bold">05. Group &amp; Topology</text>
        <text x="646" y="164" text-anchor="middle" fill="#52525B" font-family="monospace" font-size="9.5">SU(2) &amp; Homology</text>
      </g>

      <!-- PILLAR 1: Intersection A ∩ B (Quantum Information Theory) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-1">
        <rect x="422" y="96" width="136" height="44" rx="6" fill="#EFF6FF" stroke="#1E3A8A" stroke-width="2.2" />
        <text x="490" y="115" text-anchor="middle" fill="#1E3A8A" font-family="Batang, serif" font-size="11" font-weight="bold">01. Quantum Info</text>
        <text x="490" y="130" text-anchor="middle" fill="#111827" font-family="monospace" font-size="9.5">Von Neumann S(ρ)</text>
      </g>

      <!-- PILLAR 2: Central Triple Intersection A ∩ B ∩ C (Error Correction & Surface/Hamming Codes) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-2">
        <rect x="415" y="192" width="150" height="50" rx="6" fill="#881337" stroke="#111827" stroke-width="2.5" />
        <text x="490" y="213" text-anchor="middle" fill="#FFFFFF" font-family="Batang, serif" font-size="11.5" font-weight="bold">02. Error Correction</text>
        <text x="490" y="230" text-anchor="middle" fill="#FFE4E6" font-family="monospace" font-size="9.5">Surface &amp; 7 Steane</text>
      </g>

      <!-- PILLAR 3: Intersection A ∩ C (Quantum Cryptography & Networks) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-3">
        <rect x="305" y="242" width="132" height="44" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2" />
        <text x="371" y="261" text-anchor="middle" fill="#1E3A8A" font-family="Batang, serif" font-size="11" font-weight="bold">03. Quantum Crypto</text>
        <text x="371" y="276" text-anchor="middle" fill="#52525B" font-family="monospace" font-size="9.5">QKD &amp; Routing</text>
      </g>

      <!-- PILLAR 7: Intersection B ∩ C (Wireless Communications & Coding) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-7">
        <rect x="545" y="242" width="132" height="44" rx="6" fill="#FFFFFF" stroke="#065F46" stroke-width="2" />
        <text x="611" y="261" text-anchor="middle" fill="#065F46" font-family="Batang, serif" font-size="11" font-weight="bold">07. Wireless Comm</text>
        <text x="611" y="276" text-anchor="middle" fill="#52525B" font-family="monospace" font-size="9.5">MIMO &amp; LDPC</text>
      </g>

      <!-- PILLAR 6: Set C (Optical Communications) -->
      <g class="venn-pillar-node" data-target-pillar="pillar-6">
        <rect x="424" y="330" width="132" height="44" rx="6" fill="#ECFDF5" stroke="#065F46" stroke-width="2" />
        <text x="490" y="349" text-anchor="middle" fill="#065F46" font-family="Batang, serif" font-size="11" font-weight="bold">06. Optical Comm</text>
        <text x="490" y="364" text-anchor="middle" fill="#111827" font-family="monospace" font-size="9.5">Photonic &amp; NLSE</text>
      </g>
    </svg>
  `;

  // Bind click events on all Tree and Venn nodes
  document.querySelectorAll("[data-target-pillar]").forEach((node) => {
    node.addEventListener("click", () => {
      const pid = node.getAttribute("data-target-pillar");
      jumpToPillar(pid);
    });
  });

  if (treeBtn && vennBtn) {
    treeBtn.addEventListener("click", () => {
      treeWrapper.style.display = "block";
      vennWrapper.style.display = "none";
      treeBtn.classList.add("active");
      vennBtn.classList.remove("active");
      if (caption) {
        caption.textContent =
          "VIEWING (a): HIERARCHICAL RESEARCH TREE | CLICK ANY BRANCH NODE (1 TO 7) TO JUMP TO PILLAR";
      }
    });

    vennBtn.addEventListener("click", () => {
      treeWrapper.style.display = "none";
      vennWrapper.style.display = "block";
      vennBtn.classList.add("active");
      treeBtn.classList.remove("active");
      if (caption) {
        caption.textContent =
          "VIEWING (b): SET THEORETIC VENN INTERSECTION | CLICK ANY REGION NODE (1 TO 7) TO JUMP TO PILLAR";
      }
    });
  }
}

/* ============================================================================
 * 3. PUBLICATIONS PAGE (`publications.html`) WITH YEAR & DOMAIN FILTERING
 * ============================================================================ */
function initPublicationsPage() {
  const tbody = document.getElementById("publicationsTableBody");
  if (!tbody) return;

  const filterBtns = document.querySelectorAll("[data-pub-filter]");
  const yearBtns = document.querySelectorAll("[data-pub-year]");
  const searchInput = document.getElementById("pubSearchInput");
  const countBadge = document.getElementById("pubCountBadge");
  const inspectSheet = document.getElementById("pubInspectionSheet");
  const inspectHeader = document.getElementById("pubInspectHeader");
  const inspectBody = document.getElementById("pubInspectBody");
  const closeInspectBtn = document.getElementById("closePubInspectBtn");

  const params = new URLSearchParams(window.location.search);
  let activeDomain = "All";
  let activeYear = params.get("year") || "All";
  let query = "";

  function syncYearButtons() {
    yearBtns.forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-pub-year") === activeYear);
    });
  }

  function renderTable() {
    syncYearButtons();
    const filtered = researchData.filter((item) => {
      const domMatch = activeDomain === "All" || item.domain === activeDomain;
      const yearMatch = activeYear === "All" || item.year === activeYear;
      const q = query.toLowerCase();
      const qMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.year.toLowerCase().includes(q) ||
        item.domain.toLowerCase().includes(q) ||
        item.mathFocus.toLowerCase().includes(q);
      return domMatch && yearMatch && qMatch;
    });

    if (countBadge) {
      const yrLabel = activeYear === "All" ? "ALL YEARS" : `YEAR ${activeYear}`;
      countBadge.textContent = `SHOWING ${filtered.length} OF ${researchData.length} ENTRIES (${yrLabel})`;
    }

    tbody.innerHTML = filtered
      .map(
        (pub) => `
        <tr>
          <td style="font-weight: 700; color: var(--accent-navy);">${pub.year}</td>
          <td>
            <div style="font-family: var(--font-batang); font-size: 1.08rem; font-weight: 700; color: var(--text-ink); margin-bottom: 0.2rem;">
              ${pub.title}
            </div>
            <div style="font-size: 0.84rem; color: var(--text-muted);">${pub.venue}</div>
          </td>
          <td>
            <span class="academic-tag ${pub.domain === "Quantum" ? "" : "burgundy"}">${pub.domain}</span>
          </td>
          <td style="font-size: 0.92rem;">${pub.mathFocus}</td>
          <td>
            <div class="control-btn-group">
              <button class="ctrl-pill-btn" type="button" data-pub-id="${pub.id}" data-pub-action="pdf">Abstract</button>
              <button class="ctrl-pill-btn" type="button" data-pub-id="${pub.id}" data-pub-action="latex">LaTeX</button>
              <button class="ctrl-pill-btn" type="button" data-pub-id="${pub.id}" data-pub-action="code">Code</button>
            </div>
          </td>
        </tr>
      `
      )
      .join("");

    renderMath(tbody);

    tbody.querySelectorAll("[data-pub-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-pub-id");
        const act = btn.getAttribute("data-pub-action");
        const found = researchData.find((p) => p.id === id);
        if (!found || !inspectSheet || !inspectBody) return;

        inspectSheet.style.display = "block";
        if (inspectHeader) {
          inspectHeader.textContent = `${found.year} | ${found.title}`;
        }

        if (act === "pdf") {
          inspectBody.innerHTML = `
            <h3 style="margin-bottom: 0.5rem;">${found.title}</h3>
            <p style="color: var(--text-muted);">${found.venue}</p>
            <div class="theorem-callout">
              <div class="theorem-title">Mathematical Focus</div>
              <p>${found.mathFocus}</p>
            </div>
            <p>${found.links.pdf}</p>
          `;
        } else if (act === "latex") {
          inspectBody.innerHTML = `
            <h3 style="margin-bottom: 0.5rem;">LaTeX Manuscript Snippet</h3>
            <pre style="padding: 1rem; background: var(--bg-code); border: 1px solid var(--border-strong); font-family: var(--font-mono); font-size: 0.85rem; overflow-x: auto;">${found.links.latex}</pre>
          `;
        } else {
          inspectBody.innerHTML = `
            <h3 style="margin-bottom: 0.5rem;">Simulation Kernel</h3>
            <pre style="padding: 1rem; background: var(--bg-code); border: 1px solid var(--border-strong); font-family: var(--font-mono); font-size: 0.85rem; overflow-x: auto;">${found.links.code}</pre>
          `;
        }

        renderMath(inspectBody);
        inspectSheet.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeDomain = btn.getAttribute("data-pub-filter");
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderTable();
    });
  });

  yearBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeYear = btn.getAttribute("data-pub-year");
      renderTable();
    });
  });

  document.querySelectorAll("[data-nav-year]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const yr = link.getAttribute("data-nav-year");
      if (yr && document.body.getAttribute("data-page") === "publications") {
        e.preventDefault();
        activeYear = yr;
        renderTable();
      }
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value || "";
      renderTable();
    });
  }

  if (closeInspectBtn && inspectSheet) {
    closeInspectBtn.addEventListener("click", () => {
      inspectSheet.style.display = "none";
    });
  }

  renderTable();
}

/* ============================================================================
 * 4. LEARN PAGE (`learn.html`): 5 MODULES WITH:
 *    - CORE DEFINITIONS, SIMPLE EQUATIONS & VARIABLE BREAKDOWN (Revision #1)
 *    - STORY BEHIND THE EQUATION SECTION (Revision #6)
 *    - SUBSECTIONS (a) THROUGH (i)
 * ============================================================================ */
function initLearnPage() {
  const tabsBar = document.getElementById("curriculumTabsBar");
  const moduleViewer = document.getElementById("curriculumModuleViewer");
  const notebookBtns = document.getElementById("notebookSelectorButtons");
  const articleReader = document.getElementById("blogArticleReader");

  if (tabsBar && moduleViewer && typeof learnCurriculumModules !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const requestedMod = params.get("mod");
    let activeModId =
      requestedMod && learnCurriculumModules.some((m) => m.id === requestedMod)
        ? requestedMod
        : learnCurriculumModules[0].id;

    const activeSubtopicIndexMap = {
      "mod-ecc": 0,
      "mod-crypto": 0,
      "mod-networks": 0,
      "mod-routing": 0,
      "mod-infotheory": 0
    };
    const showAllSubtopicsMap = {
      "mod-ecc": false,
      "mod-crypto": false,
      "mod-networks": false,
      "mod-routing": false,
      "mod-infotheory": false
    };

    function buildSingleSubtopicDetailHtml(sub) {
      return `
        <div class="subtopic-detail-stage" id="subtopic-stage-${sub.id}" style="margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.65rem;">
            <span class="academic-tag">SUBTOPIC ${sub.num} | 5 GOVERNING EQUATIONS + VARIABLE BREAKDOWN</span>
            <span class="academic-tag emerald">HIGH-SCHOOL + GRADUATE DUAL EXPLANATION</span>
          </div>
          <h4 style="font-family: var(--font-batang); font-size: 1.4rem; color: var(--text-ink); margin: 0 0 0.75rem 0;">
            ${sub.num} — ${sub.title}
          </h4>

          <!-- Formal Definition vs. High-School Explanation -->
          <div class="subtopic-dual-explainer">
            <div class="subtopic-box-formal">
              <div style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--accent-navy); text-transform: uppercase; margin-bottom: 0.35rem;">
                Formal Mathematical &amp; Physical Definition
              </div>
              <p style="margin-bottom: 0; font-size: 0.95rem;">${sub.formalDefinition}</p>
            </div>

            <div class="subtopic-box-hs">
              <div style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--accent-forest); text-transform: uppercase; margin-bottom: 0.35rem;">
                Intuitive Definition a High-School Student Can Understand
              </div>
              <p style="margin-bottom: 0; font-size: 0.95rem;">${sub.highSchoolExplanation}</p>
            </div>
          </div>

          <!-- Story Behind This Subtopic -->
          <div class="subtopic-box-story">
            <div style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--accent-burgundy); text-transform: uppercase; margin-bottom: 0.3rem;">
              Historical Story Behind the Concept &amp; Equations
            </div>
            <p style="margin-bottom: 0; font-size: 0.94rem;">${sub.story}</p>
          </div>

          <!-- Subtopic Timeline -->
          <div style="font-family: var(--font-batang); font-weight: 700; font-size: 1.02rem; color: var(--text-ink); margin-bottom: 0.4rem;">
            Chronological Timeline of ${sub.shortLabel}:
          </div>
          <div class="subtopic-timeline-strip">
            ${(sub.timeline || [])
              .map(
                (tm) => `
              <div class="subtopic-timeline-item">
                <div style="font-family: var(--font-mono); font-weight: 700; font-size: 0.85rem; color: var(--accent-burgundy); margin-bottom: 0.2rem;">
                  ${tm.year}
                </div>
                <div style="font-size: 0.88rem; color: var(--text-body);">${tm.event}</div>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- 5 Governing Equations with Variable Breakdowns -->
          <div style="font-family: var(--font-batang); font-weight: 700; font-size: 1.08rem; color: var(--accent-navy); margin: 0.5rem 0 0.75rem 0;">
            5 Core Mathematical Equations, Physical Meaning &amp; Variable-by-Variable Explanations:
          </div>
          <div class="subtopic-eq-list">
            ${(sub.equations || [])
              .map(
                (eq, eqIdx) => `
              <div class="subtopic-eq-card">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.4rem;">
                  <strong style="font-family: var(--font-batang); font-size: 1.02rem; color: var(--text-ink);">
                    Equation ${sub.num}.${eqIdx + 1}: ${eq.name}
                  </strong>
                  <span class="academic-tag ${eqIdx % 2 === 1 ? "burgundy" : ""}">EQ ${eqIdx + 1} OF ${sub.equations.length}</span>
                </div>
                <div class="equation-box" style="margin: 0.5rem 0;">
                  $$${eq.latex}$$
                </div>
                <p style="font-size: 0.93rem; margin-bottom: 0.4rem; color: var(--text-body);">
                  <strong>Explanation:</strong> ${eq.explanation}
                </p>
                <div style="font-family: var(--font-mono); font-size: 0.76rem; font-weight: 700; color: var(--accent-navy); margin-top: 0.45rem;">
                  VARIABLE-BY-VARIABLE BREAKDOWN:
                </div>
                <ul class="subtopic-eq-variables">
                  ${(eq.variables || []).map((v) => `<li>${v}</li>`).join("")}
                </ul>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    function renderCurriculum() {
      tabsBar.innerHTML = learnCurriculumModules
        .map(
          (m) => `
          <button
            class="curriculum-tab-btn ${m.id === activeModId ? "active" : ""}"
            type="button"
            data-mod-id="${m.id}"
          >
            ${m.shortTitle}
          </button>
        `
        )
        .join("");

      const mod =
        learnCurriculumModules.find((m) => m.id === activeModId) ||
        learnCurriculumModules[0];

      const subtopicsList =
        typeof window.learnSubmenuCatalog !== "undefined" &&
        Array.isArray(window.learnSubmenuCatalog[mod.id])
          ? window.learnSubmenuCatalog[mod.id]
          : [];

      const activeSubIdx = activeSubtopicIndexMap[mod.id] || 0;
      const showAllSubs = !!showAllSubtopicsMap[mod.id];

      const subtopicsExplorerHtml = subtopicsList.length
        ? `
        <div class="pedagogy-section-block" style="background: #F8FAFC; border-bottom: 2px solid var(--text-ink);">
          <div class="learn-subtopic-explorer" style="margin: 0;">
            <div class="subtopic-explorer-header">
              <div>
                <span class="academic-tag burgundy">10-SUBTOPIC INTERACTIVE SUBMENU (${subtopicsList.length} SUBTOPICS · ${subtopicsList.length * 5} EQUATIONS)</span>
                <h3 style="font-size: 1.38rem; margin: 0.4rem 0 0.15rem 0; color: var(--text-ink);">
                  Submenu Deep-Dive for ${mod.shortTitle} (High-School + Graduate Definitions, Stories, Timelines &amp; 5 Equations Each)
                </h3>
              </div>
              <button
                type="button"
                class="btn-booknote ${showAllSubs ? "primary" : ""}"
                id="toggleAllSubtopicsBtn"
              >
                ${showAllSubs ? "Switch to Single Subtopic Tab View" : "Expand All 10 Subtopics (50 Equations)"}
              </button>
            </div>

            <!-- 10 Subtopic Pill Buttons -->
            <div class="subtopic-pill-grid" role="tablist" aria-label="10 Subtopics for ${mod.shortTitle}">
              ${subtopicsList
                .map(
                  (st, idx) => `
                <button
                  type="button"
                  class="subtopic-pill-btn ${!showAllSubs && idx === activeSubIdx ? "active" : ""}"
                  data-subtopic-idx="${idx}"
                >
                  <span>${st.shortLabel}</span>
                </button>
              `
                )
                .join("")}
            </div>

            <!-- Active Subtopic (or All 10 Subtopics) Content -->
            <div id="subtopicActiveContentWrap">
              ${
                showAllSubs
                  ? subtopicsList.map((st) => buildSingleSubtopicDetailHtml(st)).join("")
                  : buildSingleSubtopicDetailHtml(subtopicsList[activeSubIdx] || subtopicsList[0])
              }
            </div>
          </div>
        </div>
      `
        : "";

      const supp =
        typeof learnFoundationalSupplements !== "undefined"
          ? learnFoundationalSupplements[mod.id]
          : null;

      const definitionsAndVarsHtml = supp
        ? `
        <!-- REVISION #1: CORE DEFINITIONS, SIMPLE EQUATIONS & EACH VARIABLE EXPLANATION -->
        <div class="pedagogy-section-block" style="background: #FCFBF9; border-bottom: 2px solid var(--border-strong);">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag">Foundational Definitions &amp; Variables</span>
            Core Definitions, Simple Governing Equations &amp; Variable-by-Variable Breakdown (${mod.shortTitle})
          </h3>

          <!-- 1. Formal Definitions Grid -->
          <div class="pioneers-grid" style="margin-bottom: 1.25rem;">
            ${supp.definitions
              .map(
                (d) => `
              <div class="pioneer-card" style="border-left: 4px solid var(--accent-navy);">
                <div class="pioneer-role">${d.domain}</div>
                <div class="pioneer-name" style="margin-bottom: 0.35rem;">${d.term}</div>
                <p style="font-size: 0.92rem; margin-bottom: 0; color: var(--text-body);">${d.definition}</p>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- 2. Simple Equations Side by Side -->
          <div class="comparative-grid" style="border: 1px solid var(--border-strong); margin-bottom: 1.25rem;">
            ${supp.simpleEquations
              .map(
                (eq, idx) => `
              <div class="comparative-col" style="padding: 1.25rem 1.5rem; background: #FFFFFF;">
                <span class="academic-tag ${idx === 1 ? "burgundy" : ""}" style="margin-bottom: 0.45rem;">
                  SIMPLE GOVERNING EQUATION 0${idx + 1} | ${eq.label}
                </span>
                <div class="equation-box" style="margin: 0.6rem 0;">
                  $$${eq.equation}$$
                </div>
                <p style="font-size: 0.93rem; margin-bottom: 0; color: var(--text-body);">${eq.summary}</p>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- 3. Each Variable Explanation Table -->
          <div style="overflow-x: auto;">
            <table class="var-breakdown-table">
              <thead>
                <tr>
                  <th style="width: 14%;">Symbol</th>
                  <th style="width: 24%;">Variable / Operator Name</th>
                  <th style="width: 42%;">Physical &amp; Mathematical Meaning</th>
                  <th style="width: 20%;">Domain / Units</th>
                </tr>
              </thead>
              <tbody>
                ${supp.variableBreakdowns
                  .map(
                    (v) => `
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-burgundy); font-size: 1rem;">${v.symbol}</td>
                    <td style="font-family: var(--font-batang); font-weight: 700; color: var(--text-ink);">${v.name}</td>
                    <td>${v.meaning}</td>
                    <td style="font-size: 0.86rem; color: var(--accent-navy);">${v.unitOrSpace}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      `
        : "";

      const storyBehindEquationHtml =
        supp && supp.storyBehindEquation
          ? `
        <!-- REVISION #6: STORY BEHIND THE EQUATION SECTION -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag burgundy">Story Behind the Equation</span>
            ${supp.storyBehindEquation.title}
          </h3>
          <div class="story-equation-banner">
            <div class="equation-box" style="background: #FFFFFF; margin-bottom: 1rem;">
              $$${supp.storyBehindEquation.equationLatex}$$
            </div>
            <div class="comparative-grid" style="border: none; gap: 1.5rem; margin-bottom: 1rem;">
              <div>
                <h4 style="font-size: 1.05rem; color: var(--accent-navy); margin-bottom: 0.4rem;">
                  1. The Historical Problem &amp; Obstacle
                </h4>
                <p style="font-size: 0.96rem; margin-bottom: 0;">
                  ${supp.storyBehindEquation.historicalContext}
                </p>
              </div>
              <div>
                <h4 style="font-size: 1.05rem; color: var(--accent-burgundy); margin-bottom: 0.4rem;">
                  2. The "Eureka" Breakthrough Moment
                </h4>
                <p style="font-size: 0.96rem; margin-bottom: 0;">
                  ${supp.storyBehindEquation.eurekaMoment}
                </p>
              </div>
            </div>
            <div class="theorem-callout emerald" style="margin-bottom: 0.75rem;">
              <div class="theorem-title">3. Enduring Scientific &amp; Engineering Legacy</div>
              <p style="margin-bottom: 0; font-size: 0.95rem;">${supp.storyBehindEquation.legacyAndImpact}</p>
            </div>
            <blockquote style="margin: 0; padding: 0.65rem 1rem; background: #FFFFFF; border-left: 3px solid var(--text-ink); font-style: italic; color: var(--text-ink); font-size: 0.95rem;">
              ${supp.storyBehindEquation.quote}
            </blockquote>
          </div>
        </div>
      `
          : "";

      moduleViewer.innerHTML = `
        <!-- Module Title Header -->
        <div style="padding: 1.75rem 2.25rem; border-bottom: 1px solid var(--border-light); background: #FCFBF9;">
          <span class="academic-tag">MODULE ${mod.num} | CLASSICAL &amp; QUANTUM COMPARATIVE MONOGRAPH</span>
          <h2 style="font-size: 1.7rem; margin: 0.5rem 0 0.35rem;">${mod.fullTitle}</h2>
          <p style="color: var(--text-muted); margin-bottom: 0;">${mod.summary}</p>
        </div>

        ${subtopicsExplorerHtml}

        ${definitionsAndVarsHtml}

        <!-- Side by Side Part A (Classical) & Part B (Quantum) strictly contained inside border -->
        <div class="comparative-grid">
          <div class="comparative-col">
            <span class="academic-tag" style="margin-bottom: 0.75rem;">PART A | CLASSICAL FORMULATION</span>
            <h3 style="font-size: 1.32rem; margin-bottom: 0.85rem;">${mod.classicalTitle}</h3>
            ${mod.classicalContent}
          </div>

          <div class="comparative-col">
            <span class="academic-tag burgundy" style="margin-bottom: 0.75rem;">PART B | QUANTUM FORMULATION</span>
            <h3 style="font-size: 1.32rem; margin-bottom: 0.85rem;">${mod.quantumTitle}</h3>
            ${mod.quantumContent}
          </div>
        </div>

        ${storyBehindEquationHtml}

        <!-- (a) TIMELINE OF FUNDAMENTAL THEORY & RECENT RESEARCH -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag">(a) Timeline</span>
            Fundamental Theory Milestones &amp; Recent Research (1927 to 2026)
          </h3>
          <div class="timeline-horizontal-grid">
            ${mod.timeline
              .map(
                (t) => `
              <div class="timeline-milestone-card">
                <div class="timeline-milestone-year">${t.year}</div>
                <div style="font-family: var(--font-batang); font-weight: 700; margin-bottom: 0.3rem; color: var(--text-ink);">
                  ${t.title}
                </div>
                <p style="font-size: 0.9rem; margin-bottom: 0; color: var(--text-body);">${t.desc}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- (b) CORE IDEA & OPEN RESEARCH QUESTIONS -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag burgundy">(b) Idea &amp; Research Questions</span>
            Core Conceptual Paradigm &amp; Open Graduate Research Problems
          </h3>
          <div class="theorem-callout">
            <div class="theorem-title">Foundational Idea of ${mod.shortTitle}</div>
            <p style="margin-bottom: 0;">${mod.ideasAndQuestions.coreIdea}</p>
          </div>
          <div class="theorem-callout burgundy">
            <div class="theorem-title">Open Research Questions Driving Current Investigations</div>
            <ol style="padding-left: 1.25rem; font-size: 0.98rem;">
              ${mod.ideasAndQuestions.questions.map((q) => `<li style="margin-bottom: 0.45rem;">${q}</li>`).join("")}
            </ol>
          </div>
        </div>

        <!-- (c) IMPORTANT PEOPLE & PIONEERS IN THE THEORY -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag">(c) Important Pioneers</span>
            Architects &amp; Key Researchers of the Field
          </h3>
          <div class="pioneers-grid">
            ${mod.pioneers
              .map(
                (p) => `
              <div class="pioneer-card">
                <div class="pioneer-name">${p.name}</div>
                <div class="pioneer-role">${p.role}</div>
                <p style="font-size: 0.9rem; margin-bottom: 0;">${p.contribution}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- (d) APPLICATIONS IN THEORY & FUTURE APPLICATIONS + (e) HOW THEY GOT THE IDEA & FUN FACTS -->
        <div class="comparative-grid">
          <div class="comparative-col">
            <h3 class="pedagogy-section-title">
              <span class="academic-tag emerald">(d) Applications</span>
              Current Engineering &amp; Future Horizons
            </h3>
            <div class="theorem-callout emerald">
              <div class="theorem-title">Current Theoretical &amp; Industrial Applications</div>
              <p style="margin-bottom: 0;">${mod.applications.current}</p>
            </div>
            <div class="theorem-callout">
              <div class="theorem-title">Future Next Generation Applications</div>
              <p style="margin-bottom: 0;">${mod.applications.future}</p>
            </div>
          </div>

          <div class="comparative-col">
            <h3 class="pedagogy-section-title">
              <span class="academic-tag burgundy">(e) Origin &amp; Fun Facts</span>
              How Pioneers Got the Idea
            </h3>
            <div class="theorem-callout amber">
              <div class="theorem-title">Historical Discovery &amp; Mathematical Fun Facts</div>
              <p style="margin-bottom: 0;">${mod.originAndFunFacts}</p>
            </div>
          </div>
        </div>

        <!-- (g) WORKED EXAMPLE WITH IMAGE / SVG ILLUSTRATION -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag">(g) Worked Technical Example</span>
            ${mod.technicalExample.title}
          </h3>
          <p>${mod.technicalExample.explanation}</p>
          <div class="example-diagram-frame">
            ${mod.technicalExample.diagramSvg}
          </div>
        </div>

        <!-- (h) INTUITIVE EXAMPLE FOR HIGH SCHOOL STUDENTS -->
        <div class="pedagogy-section-block" style="background: #FCFBF9;">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag emerald">(h) High School Student Guide</span>
            ${mod.highSchoolExample.title}
          </h3>
          <div class="theorem-callout emerald" style="margin-bottom: 0;">
            <div class="theorem-title">Step by Step Intuitive Analogy (No Advanced Calculus Required)</div>
            <p style="margin-bottom: 0; font-size: 1.02rem;">${mod.highSchoolExample.content}</p>
          </div>
        </div>

        <!-- (i) MINIMUM 15 BASIC CONCEPTS QUESTIONS & ANSWERS -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag burgundy">(i) 15 Core Concept Questions &amp; Answers</span>
            Comprehensive Review Bank (${mod.qaBank.length} Questions &amp; Answers)
          </h3>
          <div class="qa-bank-grid">
            ${mod.qaBank
              .map(
                (item) => `
              <div class="qa-card">
                <div class="qa-question">${item.q}</div>
                <p class="qa-answer">${item.a}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- (f) CITATIONS & STANDARD IEEE REFERENCES -->
        <div class="references-block">
          <h3 class="pedagogy-section-title" style="margin-bottom: 0.75rem;">
            <span class="academic-tag">(f) Citations &amp; References</span>
            Standard IEEE &amp; Textbook Bibliography (${mod.shortTitle})
          </h3>
          <ol class="references-list">
            ${mod.references.map((ref) => `<li>${ref}</li>`).join("")}
          </ol>
        </div>
      `;

      renderMath(moduleViewer);

      moduleViewer.querySelectorAll("[data-subtopic-idx]").forEach((pillBtn) => {
        pillBtn.addEventListener("click", () => {
          const idx = parseInt(pillBtn.getAttribute("data-subtopic-idx"), 10) || 0;
          activeSubtopicIndexMap[activeModId] = idx;
          showAllSubtopicsMap[activeModId] = false;
          renderCurriculum();
        });
      });

      const toggleAllBtn = document.getElementById("toggleAllSubtopicsBtn");
      if (toggleAllBtn) {
        toggleAllBtn.addEventListener("click", () => {
          showAllSubtopicsMap[activeModId] = !showAllSubtopicsMap[activeModId];
          renderCurriculum();
        });
      }

      tabsBar.querySelectorAll(".curriculum-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeModId = btn.getAttribute("data-mod-id");
          renderCurriculum();
        });
      });
    }

    // Allow header dropdown links on learn.html to switch module and view immediately without reload
    document.querySelectorAll("[data-learn-mod]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetMod = link.getAttribute("data-learn-mod");
        if (targetMod && document.body.getAttribute("data-page") === "learn") {
          e.preventDefault();
          activeModId = targetMod;
          switchLearnView("curriculum");
          renderCurriculum();
        }
      });
    });

    renderCurriculum();
  }

  // View Switcher between [View 1] Curriculum, [View 2] Research Notes Archive, and [View 3] Author Post Studio
  const curriculumSec = document.getElementById("curriculumSection");
  const notebookSec = document.getElementById("notebookSection");
  const studioSec = document.getElementById("postStudioSection");
  const btnCurr = document.getElementById("viewTheoryCurriculumBtn");
  const btnNotes = document.getElementById("viewNotebookArchiveBtn");
  const btnStudio = document.getElementById("viewPostStudioBtn");

  function switchLearnView(viewName) {
    if (!curriculumSec || !notebookSec || !studioSec) return;
    curriculumSec.style.display = viewName === "curriculum" ? "block" : "none";
    notebookSec.style.display = viewName === "notes" ? "block" : "none";
    studioSec.style.display = viewName === "studio" ? "block" : "none";

    if (btnCurr) btnCurr.classList.toggle("active", viewName === "curriculum");
    if (btnNotes) btnNotes.classList.toggle("active", viewName === "notes");
    if (btnStudio) btnStudio.classList.toggle("active", viewName === "studio");
  }

  if (btnCurr) btnCurr.addEventListener("click", () => switchLearnView("curriculum"));
  if (btnNotes) btnNotes.addEventListener("click", () => switchLearnView("notes"));
  if (btnStudio) btnStudio.addEventListener("click", () => switchLearnView("studio"));

  document.querySelectorAll("[data-learn-view]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const v = link.getAttribute("data-learn-view");
      if (v && document.body.getAttribute("data-page") === "learn") {
        e.preventDefault();
        switchLearnView(v);
      }
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const requestedView = urlParams.get("view");
  if (requestedView === "notes" || requestedView === "studio") {
    switchLearnView(requestedView);
  }

  // Research Notebook Articles + Custom Posts from Author Studio
  function getCombinedThinkingPosts() {
    let custom = [];
    try {
      const raw = localStorage.getItem("mib_custom_thinking_posts");
      if (raw) custom = JSON.parse(raw);
    } catch (err) {
      console.warn("Custom posts parse note:", err);
    }
    const base = typeof thinkingPosts !== "undefined" ? thinkingPosts : [];
    return [...custom, ...base];
  }

  let currentPostId =
    getCombinedThinkingPosts()[0] ? getCombinedThinkingPosts()[0].id : "";

  function renderNotebook() {
    if (!notebookBtns || !articleReader) return;
    const allPosts = getCombinedThinkingPosts();
    if (!allPosts.length) return;

    if (!allPosts.some((p) => p.id === currentPostId)) {
      currentPostId = allPosts[0].id;
    }

    notebookBtns.innerHTML = allPosts
      .map(
        (p, idx) => `
        <button
          class="ctrl-pill-btn ${p.id === currentPostId ? "active" : ""}"
          type="button"
          data-note-id="${p.id}"
        >
          Note 0${idx + 1}: ${p.category}
        </button>
      `
      )
      .join("");

    const post = allPosts.find((p) => p.id === currentPostId) || allPosts[0];

    articleReader.innerHTML = `
      <div style="margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
        <span class="academic-tag">${post.category} | ${post.date}</span>
        <h3 style="font-size: 1.65rem; margin: 0.6rem 0 0.35rem;">${post.title}</h3>
        <p style="font-style: italic; color: var(--text-muted); margin-bottom: 0;">${post.subtitle}</p>
      </div>
      <div>${post.contentHtml}</div>
    `;

    renderMath(articleReader);

    notebookBtns.querySelectorAll("[data-note-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentPostId = btn.getAttribute("data-note-id");
        renderNotebook();
      });
    });
  }

  renderNotebook();

  // Wire the Author Post Studio in learn.html
  const publishBtn = document.getElementById("publishPostNowBtn");
  const genCodeBtn = document.getElementById("generateDataJsCodeBtn");
  const clearCustomBtn = document.getElementById("clearCustomPostsBtn");
  const codeOutputWrapper = document.getElementById("generatedCodeOutputWrapper");
  const codePre = document.getElementById("generatedDataJsCodePre");

  function buildPostObjectFromStudio() {
    const title = (document.getElementById("postTitleInput")?.value || "").trim() ||
      "Untitled Research Note on Quantum & Communication Theory";
    const category = (document.getElementById("postCategoryInput")?.value || "").trim() ||
      "Basic Theory & Research";
    const date = (document.getElementById("postDateInput")?.value || "").trim() ||
      "OCTOBER 2026";
    const subtitle = (document.getElementById("postSubtitleInput")?.value || "").trim() ||
      "Research Monograph & Mathematical Derivation";
    const theoremTitle = (document.getElementById("postTheoremTitleInput")?.value || "").trim();
    const theoremBody = (document.getElementById("postTheoremBodyInput")?.value || "").trim();
    const bodyRaw = (document.getElementById("postBodyInput")?.value || "").trim() ||
      "<p>Enter your mathematical derivation and theoretical explanation here.</p>";

    const theoremHtml =
      theoremTitle || theoremBody
        ? `<div class="theorem-callout"><div class="theorem-title">${theoremTitle || "Theorem 1.1"}</div><p>${theoremBody}</p></div>`
        : "";

    const paragraphsHtml = bodyRaw.startsWith("<")
      ? bodyRaw
      : bodyRaw
          .split(/\n\s*\n/)
          .map((para) => `<p>${para.trim()}</p>`)
          .join("\n");

    return {
      id: "note-custom-" + Date.now(),
      date,
      category,
      title,
      subtitle,
      contentHtml: `${theoremHtml}\n${paragraphsHtml}`
    };
  }

  if (publishBtn) {
    publishBtn.addEventListener("click", () => {
      const newPost = buildPostObjectFromStudio();
      let existing = [];
      try {
        const raw = localStorage.getItem("mib_custom_thinking_posts");
        if (raw) existing = JSON.parse(raw);
      } catch (e) {
        existing = [];
      }
      existing.unshift(newPost);
      localStorage.setItem("mib_custom_thinking_posts", JSON.stringify(existing));
      currentPostId = newPost.id;
      renderNotebook();
      switchLearnView("notes");
    });
  }

  if (genCodeBtn && codeOutputWrapper && codePre) {
    genCodeBtn.addEventListener("click", () => {
      const newPost = buildPostObjectFromStudio();
      codeOutputWrapper.style.display = "block";
      codePre.textContent = JSON.stringify(newPost, null, 2) + ",";
    });
  }

  if (clearCustomBtn) {
    clearCustomBtn.addEventListener("click", () => {
      localStorage.removeItem("mib_custom_thinking_posts");
      renderNotebook();
    });
  }
}

/* ============================================================================
 * 5. ILLUSTRATIONS PAGE (`illustrations.html`):
 *    - WHITE GRID NOTEBOOK PAPER + HANDWRITING SKETCH ANIMATION ENGINE
 *    - BLOCK-BY-BLOCK ANIMATION DESCRIPTIONS & INTERACTIVE INSPECTOR
 *    - SEPARATE 5-TOPIC PAGE ROUTER (crypto, hamming, topology, circuit, routing)
 *    - WORKED MEASUREMENT EXAMPLES & 12-STEP TUTORIALS
 * ============================================================================ */

const sketchProgressMap = {
  crypto: 1.0,
  hamming: 1.0,
  topology: 1.0,
  circuit: 1.0,
  routing: 1.0
};

const activeBlockSelection = {
  crypto: "alice",
  hamming: "cw000",
  topology: "fano-center",
  circuit: "col1",
  routing: "bsm-box"
};

window.redrawAllIllustrationCanvases = function redrawAllIllustrationCanvases() {
  window.dispatchEvent(new Event("resize"));
};

function triggerHandwritingReplay(topicKey) {
  if (!(topicKey in sketchProgressMap)) return;
  sketchProgressMap[topicKey] = 0.04;
  function stepSketch() {
    sketchProgressMap[topicKey] = Math.min(1.0, sketchProgressMap[topicKey] + 0.028);
    window.redrawAllIllustrationCanvases();
    if (sketchProgressMap[topicKey] < 1.0) {
      requestAnimationFrame(stepSketch);
    }
  }
  requestAnimationFrame(stepSketch);
}

/**
 * Draws a crisp White Graph-Grid Engineering Notebook background on any canvas,
 * complete with 22px minor graph lines, 110px major lines, left binding holes,
 * vertical burgundy notebook margin line, and handwritten header note.
 */
function drawWhiteGridNotebook(ctx, w, h, notebookTitle, handwrittenSubnote, sketchProg = 1.0) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, w, h);

  const gridSize = 22;
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.strokeStyle = x % (gridSize * 5) === 0 ? "rgba(30, 58, 138, 0.14)" : "rgba(30, 58, 138, 0.065)";
    ctx.stroke();
  }
  for (let y = 0; y <= h; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.strokeStyle = y % (gridSize * 5) === 0 ? "rgba(30, 58, 138, 0.14)" : "rgba(30, 58, 138, 0.065)";
    ctx.stroke();
  }

  // Left notebook margin red/burgundy double rule
  ctx.beginPath();
  ctx.moveTo(42, 0);
  ctx.lineTo(42, h);
  ctx.moveTo(45, 0);
  ctx.lineTo(45, h);
  ctx.strokeStyle = "rgba(136, 19, 55, 0.28)";
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Left spiral notebook punch holes
  [h * 0.2, h * 0.5, h * 0.8].forEach((hy) => {
    ctx.beginPath();
    ctx.arc(20, hy, 6.5, 0, Math.PI * 2);
    ctx.fillStyle = "#F3F1EC";
    ctx.fill();
    ctx.strokeStyle = "#C8C4B8";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  });

  // Handwritten notebook header annotation
  ctx.fillStyle = "#1E3A8A";
  ctx.font = "bold 16px 'Caveat', 'Gowun Batang', cursive, serif";
  ctx.textAlign = "left";
  ctx.fillText(`✎ ${notebookTitle}`, 56, 24);

  if (handwrittenSubnote) {
    ctx.fillStyle = "#881337";
    ctx.font = "bold 14.5px 'Caveat', 'Gowun Batang', cursive, serif";
    ctx.textAlign = "right";
    ctx.fillText(handwrittenSubnote, w - 18, 24);
  }

  // If currently replaying handwriting sketch, show live fountain pen nib indicator
  if (sketchProg < 0.995) {
    const penX = 65 + (w - 130) * sketchProg;
    const penY = 38 + Math.sin(sketchProg * Math.PI * 14) * 5;
    ctx.fillStyle = "#881337";
    ctx.font = "bold 15px 'Caveat', cursive, serif";
    ctx.textAlign = "center";
    ctx.fillText(`✒ Sketching notebook diagram (${Math.round(sketchProg * 100)}%)...`, penX, penY);
  }
}

/**
 * Draws a handwriting-style double-pass ink line that progressively reveals with sketchProg.
 */
function sketchLine(ctx, x1, y1, x2, y2, color = "#1E3A8A", width = 2, sketchProg = 1.0, dashed = false) {
  const ex = x1 + (x2 - x1) * sketchProg;
  const ey = y1 + (y2 - y1) * sketchProg;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  if (dashed) ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(ex, ey);
  ctx.stroke();

  // Second subtle organic handwriting pass
  if (!dashed && sketchProg > 0.25) {
    ctx.globalAlpha = 0.38;
    ctx.lineWidth = Math.max(1, width * 0.65);
    ctx.beginPath();
    ctx.moveTo(x1 + 0.8, y1 - 0.7);
    ctx.quadraticCurveTo((x1 + ex) * 0.5, (y1 + ey) * 0.5 + 1.4, ex - 0.6, ey + 0.7);
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Draws a handwriting-style box with slightly extended corner ticks like an engineering notebook sketch.
 */
function sketchBox(ctx, x, y, w, h, strokeColor = "#1E3A8A", fillColor = "#FFFFFF", lineWidth = 2, sketchProg = 1.0) {
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  const perim = 2 * (w + h);
  ctx.setLineDash([perim * sketchProg, perim]);
  ctx.strokeRect(x, y, w, h);
  ctx.setLineDash([]);
  // Subtle notebook corner over-ticks
  if (sketchProg > 0.85) {
    ctx.globalAlpha = 0.45;
    ctx.lineWidth = 1.1;
    ctx.strokeRect(x - 1.2, y - 1.2, w + 2.4, h + 2.4);
  }
  ctx.restore();
}

function initIllustrationsTopicRouterAndTutorials() {
  const sheets = document.querySelectorAll(".illus-topic-sheet");
  if (!sheets.length) return;

  const validTopics = ["crypto", "hamming", "topology", "circuit", "routing"];

  // 1. Render Block-by-Block Descriptions + Worked Examples + 12-Step Tutorials for all 5 Topics
  if (typeof illustrationTopicsData !== "undefined") {
    validTopics.forEach((topicKey) => {
      const data = illustrationTopicsData[topicKey];
      if (!data) return;

      // Render Block-by-Block Animation Descriptions (Revision #4)
      const blockContainer = document.getElementById(`blockDescriptions-${topicKey}`);
      if (blockContainer && Array.isArray(data.blockDescriptions)) {
        function renderBlockInspector() {
          const activeId = activeBlockSelection[topicKey] || data.blockDescriptions[0].blockId;
          const activeObj =
            data.blockDescriptions.find((b) => b.blockId === activeId) || data.blockDescriptions[0];

          blockContainer.innerHTML = `
            <div class="block-inspector-section">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <span class="academic-tag">INTERACTIVE ANIMATION BLOCK GUIDE</span>
                  <strong style="font-family: var(--font-batang); font-size: 1.05rem; margin-left: 0.5rem; color: var(--text-ink);">
                    Click Any Animation Block Card Below (or on the Notebook Canvas) to Inspect Its Role:
                  </strong>
                </div>
                <span class="academic-tag burgundy">SELECTED: ${activeObj.code} — ${activeObj.name}</span>
              </div>

              <!-- Active Block Detailed Readout Banner -->
              <div style="margin-top: 0.75rem; padding: 0.9rem 1.15rem; background: #FFFDF9; border: 1px solid var(--border-strong); border-left: 4px solid var(--accent-burgundy);">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.3rem;">
                  <strong style="font-family: var(--font-batang); font-size: 1.05rem; color: var(--accent-navy);">
                    ${activeObj.code}: ${activeObj.name} (${activeObj.role})
                  </strong>
                  <span style="font-size: 0.9rem; color: var(--accent-burgundy); font-weight: 600;">
                    Operator / Model: ${activeObj.mathModel}
                  </span>
                </div>
                <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-body);">
                  ${activeObj.description}
                </p>
              </div>

              <!-- Grid of All Blocks in This Animation -->
              <div class="block-inspector-grid">
                ${data.blockDescriptions
                  .map(
                    (b) => `
                  <div
                    class="block-inspector-card ${b.blockId === activeId ? "active-block" : ""}"
                    data-block-topic="${topicKey}"
                    data-block-id="${b.blockId}"
                  >
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.74rem; font-weight: 700; color: var(--accent-burgundy);">
                        ${b.code}
                      </span>
                      <span style="font-size: 0.74rem; color: var(--text-muted);">${b.role}</span>
                    </div>
                    <div style="font-family: var(--font-batang); font-weight: 700; font-size: 0.96rem; color: var(--text-ink); margin-bottom: 0.3rem;">
                      ${b.name}
                    </div>
                    <div style="font-size: 0.84rem; color: var(--accent-navy); margin-bottom: 0.3rem;">
                      ${b.mathModel}
                    </div>
                    <p style="font-size: 0.85rem; margin-bottom: 0; color: var(--text-body);">
                      ${b.description}
                    </p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `;

          renderMath(blockContainer);

          blockContainer.querySelectorAll("[data-block-id]").forEach((card) => {
            card.addEventListener("click", () => {
              const bid = card.getAttribute("data-block-id");
              activeBlockSelection[topicKey] = bid;
              renderBlockInspector();
              if (typeof window.onAnimationBlockSelected === "function") {
                window.onAnimationBlockSelected(topicKey, bid);
              }
              window.redrawAllIllustrationCanvases();
            });
          });
        }

        renderBlockInspector();
      }

      // Render Worked Measurement Example & 12-Step Tutorial
      const container = document.getElementById(`tutorialContainer-${topicKey}`);
      if (!container) return;

      const workedTitle =
        data.workedMeasurementExample?.title || data.workedMeasurementTitle || "Worked Measurement Example";
      const workedBodyHtml =
        data.workedMeasurementExample?.content || `<p>${data.workedMeasurementIntro || ""}</p>`;
      const stepsArray = data.steps || data.tutorialSteps || [];

      container.innerHTML = `
        <!-- WORKED MEASUREMENT / SYNDROME EXAMPLE -->
        <div class="pedagogy-section-block" style="background: #FCFBF9; border-top: 2px solid var(--border-strong);">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag burgundy">Worked Step-by-Step Measurement Example</span>
            ${workedTitle}
          </h3>
          <div>${workedBodyHtml}</div>
        </div>

        <!-- DETAILED 12-STEP LABORATORY TUTORIAL -->
        <div class="pedagogy-section-block">
          <h3 class="pedagogy-section-title">
            <span class="academic-tag emerald">Step by Step Interactive Tutorial (${stepsArray.length} Steps)</span>
            How to Operate &amp; Measure in ${data.title}
          </h3>
          <div class="tutorial-steps-grid">
            ${stepsArray
              .map((st, idx) => {
                const stepBadge = st.step || `STEP ${idx + 1 < 10 ? "0" + (idx + 1) : idx + 1}`;
                const stepHeading = st.title ? `<strong>${st.title}:</strong> ` : "";
                const stepDesc = st.desc || st;
                return `
                  <div class="tutorial-step-card">
                    <div class="tutorial-step-num">${stepBadge} OF ${stepsArray.length}</div>
                    <p style="font-size: 0.93rem; margin-bottom: 0; color: var(--text-body);">${stepHeading}${stepDesc}</p>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      `;

      renderMath(container);
    });
  }

  // Wire Replay Handwriting Sketch buttons
  document.querySelectorAll("[data-replay-sketch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tk = btn.getAttribute("data-replay-sketch");
      triggerHandwritingReplay(tk);
    });
  });

  // Determine initial topic from ?topic= or #hash
  const params = new URLSearchParams(window.location.search);
  const hashTopic = (window.location.hash || "").replace("#", "").replace("topic-", "");
  let activeTopic = params.get("topic") || (validTopics.includes(hashTopic) ? hashTopic : "crypto");
  if (!validTopics.includes(activeTopic)) {
    activeTopic = "crypto";
  }

  function switchIllustrationTopic(topicKey) {
    if (!validTopics.includes(topicKey)) topicKey = "crypto";
    activeTopic = topicKey;

    sheets.forEach((sheet) => {
      const isMatch = sheet.id === `topic-sheet-${topicKey}`;
      sheet.style.display = isMatch ? "block" : "none";
    });

    document.querySelectorAll("[data-illus-topic]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-illus-topic") === topicKey);
    });

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("topic", topicKey);
      window.history.replaceState({}, "", url.toString());
    } catch (err) {
      // Safe fallback when opened via file:// protocol
      window.location.hash = topicKey;
    }

    // Trigger handwriting sketch animation and immediate canvas resize/redraw
    triggerHandwritingReplay(topicKey);
    setTimeout(() => {
      window.redrawAllIllustrationCanvases();
    }, 25);
  }

  document.querySelectorAll("[data-illus-topic]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-illus-topic");
      switchIllustrationTopic(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-illus-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = link.getAttribute("data-illus-nav");
      if (target && document.body.getAttribute("data-page") === "illustrations") {
        e.preventDefault();
        switchIllustrationTopic(target);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const h = (window.location.hash || "").replace("#", "").replace("topic-", "");
    if (validTopics.includes(h) && h !== activeTopic) {
      switchIllustrationTopic(h);
    }
  });

  switchIllustrationTopic(activeTopic);
}

/* --- (1) CRYPTOGRAPHY ILLUSTRATION (BB84 QKD & EAVESDROPPING) --- */
function initCryptoIllustration() {
  const canvas = document.getElementById("cryptoCanvas");
  if (!canvas) return;

  const staticBtn = document.getElementById("cryptoStaticBtn");
  const dynamicBtn = document.getElementById("cryptoDynamicBtn");
  const stepBtn = document.getElementById("cryptoStepBtn");
  const eveBtn = document.getElementById("cryptoToggleEveBtn");
  const randBtn = document.getElementById("cryptoRandomizeBasesBtn");
  const modeBadge = document.getElementById("cryptoModeBadge");
  const telemetry = document.getElementById("cryptoTelemetryBox");

  let isDynamic = false; // Starts in Static Mode (Paused)!
  let eveActive = false;
  let slots = [];
  let photons = [];

  function generateProtocolSlots() {
    slots = [];
    const fixedAliceBits = [1, 0, 1, 1, 0, 0];
    const fixedAliceBases = ["+", "×", "+", "×", "+", "×"];
    const fixedBobBases = ["+", "×", "×", "×", "+", "+"];

    for (let i = 0; i < 6; i++) {
      const aliceBit = fixedAliceBits[i] !== undefined ? fixedAliceBits[i] : Math.round(Math.random());
      const aliceBasis = fixedAliceBases[i] || "+";
      const bobBasis = fixedBobBases[i] || "+";
      const eveBasis = i % 2 === 0 ? "×" : "+";

      let bobBit = aliceBit;
      if (eveActive) {
        const eveMeasured = eveBasis === aliceBasis ? aliceBit : (i + 1) % 2;
        bobBit = bobBasis === eveBasis ? eveMeasured : (aliceBit + 1) % 2;
      } else {
        bobBit = bobBasis === aliceBasis ? aliceBit : (i + 1) % 2;
      }

      slots.push({
        idx: i,
        aliceBit,
        aliceBasis,
        eveBasis,
        bobBasis,
        bobBit,
        sifted: aliceBasis === bobBasis,
        error: aliceBasis === bobBasis && aliceBit !== bobBit
      });
    }

    // Place photons at evenly spaced positions across the link so Static Mode shows them clearly!
    photons = slots.map((s, i) => ({
      slotIdx: i,
      progress: 0.12 + i * 0.15,
      aliceBasis: s.aliceBasis,
      aliceBit: s.aliceBit,
      disturbed: eveActive && s.aliceBasis !== s.eveBasis
    }));

    updateCryptoTelemetry();
    drawCryptoFrame();
  }

  function randomizeSlots() {
    slots.forEach((s) => {
      s.aliceBit = Math.random() < 0.5 ? 0 : 1;
      s.aliceBasis = Math.random() < 0.5 ? "+" : "×";
      s.bobBasis = Math.random() < 0.5 ? "+" : "×";
      s.eveBasis = Math.random() < 0.5 ? "+" : "×";
      s.sifted = s.aliceBasis === s.bobBasis;
      if (eveActive) {
        const eveM = s.eveBasis === s.aliceBasis ? s.aliceBit : Math.random() < 0.5 ? 0 : 1;
        s.bobBit = s.bobBasis === s.eveBasis ? eveM : Math.random() < 0.5 ? 0 : 1;
      } else {
        s.bobBit = s.bobBasis === s.aliceBasis ? s.aliceBit : Math.random() < 0.5 ? 0 : 1;
      }
      s.error = s.sifted && s.aliceBit !== s.bobBit;
    });
    photons.forEach((p, i) => {
      p.aliceBasis = slots[i].aliceBasis;
      p.aliceBit = slots[i].aliceBit;
      p.disturbed = eveActive && slots[i].aliceBasis !== slots[i].eveBasis;
    });
    updateCryptoTelemetry();
    drawCryptoFrame();
  }

  function updateCryptoTelemetry() {
    if (!telemetry) return;
    const siftedSlots = slots.filter((s) => s.sifted);
    const errors = siftedSlots.filter((s) => s.error).length;
    const modeStr = isDynamic ? "DYNAMIC PROPAGATION" : "STATIC EQUILIBRIUM";
    const status = eveActive
      ? `<strong style="color: var(--accent-burgundy);">[${modeStr}] EAVESDROPPER ACTIVE:</strong> Sifted Matches: ${siftedSlots.length}/6 | Bit Errors: ${errors} | Theoretical QBER $e_{\\text{bit}} = 25\\% > 11\\%$ (Key Aborted!)`
      : `<strong style="color: var(--accent-navy);">[${modeStr}] CHANNEL SECURE:</strong> Sifted Matches: ${siftedSlots.length}/6 | Bit Errors: 0 | QBER $e_{\\text{bit}} = 0.0\\% < 11\\%$ (Unconditional Secrecy)`;
    telemetry.innerHTML = status;
    renderMath(telemetry);
  }

  function setMotionMode(dynamic) {
    isDynamic = dynamic;
    if (staticBtn) staticBtn.classList.toggle("active", !dynamic);
    if (dynamicBtn) dynamicBtn.classList.toggle("active", dynamic);
    if (modeBadge) {
      modeBadge.textContent = dynamic ? "MODE: DYNAMIC (ANIMATING)" : "MODE: STATIC (PAUSED)";
    }
    updateCryptoTelemetry();
  }

  if (staticBtn) staticBtn.addEventListener("click", () => setMotionMode(false));
  if (dynamicBtn) dynamicBtn.addEventListener("click", () => setMotionMode(true));
  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      setMotionMode(false);
      photons.forEach((p) => {
        p.progress = (p.progress + 0.15) % 1.0;
      });
      drawCryptoFrame();
    });
  }

  if (eveBtn) {
    eveBtn.addEventListener("click", () => {
      eveActive = !eveActive;
      eveBtn.classList.toggle("burgundy", eveActive);
      eveBtn.classList.toggle("active", eveActive);
      eveBtn.textContent = eveActive
        ? "Eve Eavesdropper: ON (25% QBER)"
        : "Eve Eavesdropper: OFF (Secure)";
      generateProtocolSlots();
    });
  }
  if (randBtn) randBtn.addEventListener("click", randomizeSlots);

  function drawCryptoFrame() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width || 680;
    const h = rect.height || 440;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sp = sketchProgressMap.crypto ?? 1.0;
    const selBlock = activeBlockSelection.crypto || "alice";

    drawWhiteGridNotebook(
      ctx,
      w,
      h,
      "Notebook Sheet 01: BB84 Polarization QKD & Intercept-Resend Audit",
      "R ≥ 1 - 2 h₂(e_bit)",
      sp
    );

    const aliceX = Math.max(105, w * 0.16);
    const eveX = w * 0.52;
    const bobX = w * 0.87;
    const channelY = h * 0.34;

    // Handwritten optical fiber link
    sketchLine(ctx, aliceX, channelY, bobX, channelY, eveActive ? "#881337" : "#1E3A8A", 2.2, sp, true);

    function drawStation(x, y, title, sub, blockCode, borderColor, bg, isHighlighted) {
      sketchBox(
        ctx,
        x - 54,
        y - 34,
        108,
        68,
        isHighlighted ? "#881337" : borderColor,
        isHighlighted ? "#FFFBEB" : bg,
        isHighlighted ? 3 : 2,
        sp
      );
      ctx.fillStyle = "#881337";
      ctx.font = "bold 9.5px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(blockCode, x, y - 18);

      ctx.fillStyle = "#111827";
      ctx.font = "bold 12px 'Batang', serif";
      ctx.fillText(title, x, y - 2);
      ctx.fillStyle = "#52525B";
      ctx.font = "bold 13.5px 'Caveat', 'Times New Roman', cursive, serif";
      ctx.fillText(sub, x, y + 17);
    }

    drawStation(
      aliceX,
      channelY,
      "ALICE (Tx)",
      "Prepares |ψ⟩ ∈ {+,×}",
      "BLOCK 01",
      "#1E3A8A",
      "#EFF6FF",
      selBlock === "alice"
    );
    drawStation(
      eveX,
      channelY,
      eveActive ? "EVE (ACTIVE)" : "FIBER LINK",
      eveActive ? "Collapses ψ!" : "Unperturbed U=I",
      eveActive ? "BLOCK 03" : "BLOCK 02",
      eveActive ? "#881337" : "#1E3A8A",
      eveActive ? "#FFF1F2" : "#FFFFFF",
      selBlock === "eve" || selBlock === "channel"
    );
    drawStation(
      bobX,
      channelY,
      "BOB (Rx)",
      "PBS Detector +/×",
      "BLOCK 04",
      "#1E3A8A",
      "#EFF6FF",
      selBlock === "bob"
    );

    photons.forEach((p) => {
      if (isDynamic) {
        p.progress = (p.progress + 0.005) % 1.0;
      }
      if (p.progress > sp) return;
      const px = aliceX + 58 + (bobX - aliceX - 116) * p.progress;
      const py = channelY + (isDynamic ? Math.sin(p.progress * Math.PI * 6) * 8 : 0);

      // Handwritten wavepacket envelope
      ctx.beginPath();
      ctx.arc(px, py, 12.5, 0, Math.PI * 2 * sp);
      const isCompromised = eveActive && p.progress > 0.48 && p.disturbed;
      ctx.fillStyle = isCompromised ? "#881337" : "#1E3A8A";
      ctx.fill();
      ctx.strokeStyle = "#111827";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(`${p.aliceBit}${p.aliceBasis}`, px, py + 3.5);
    });

    // Draw Sifted Key Ledger Table (BLOCK 05)
    const tableTop = h * 0.59;
    const colW = (w - 155) / 6;
    ctx.fillStyle = "#111827";
    ctx.font = "bold 11.5px 'Batang', serif";
    ctx.textAlign = "left";
    ctx.fillText("BLOCK 05 Ledger:", 54, tableTop - 8);
    ctx.fillText("Alice Bit:", 54, tableTop + 18);
    ctx.fillText("Alice Basis:", 54, tableTop + 40);
    ctx.fillText("Bob Basis:", 54, tableTop + 62);
    ctx.fillText("Sifted Key:", 54, tableTop + 84);

    slots.forEach((s, idx) => {
      const cx = 155 + idx * colW + colW * 0.35;
      const fillBg = s.sifted ? (s.error ? "#FFF1F2" : "#EFF6FF") : "#FAF9F5";
      const strokeCol = s.sifted ? (s.error ? "#881337" : "#1E3A8A") : "#C8C4B8";
      sketchBox(ctx, cx - 22, tableTop, 44, 95, strokeCol, fillBg, selBlock === "ledger" ? 2.2 : 1.3, sp);

      ctx.fillStyle = "#111827";
      ctx.font = "bold 12px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(String(s.aliceBit), cx, tableTop + 18);
      ctx.fillText(s.aliceBasis, cx, tableTop + 40);
      ctx.fillText(s.bobBasis, cx, tableTop + 62);
      ctx.fillStyle = s.sifted ? (s.error ? "#881337" : "#065F46") : "#71717A";
      ctx.font = "bold 11px 'JetBrains Mono', monospace";
      ctx.fillText(s.sifted ? (s.error ? "ERR" : String(s.bobBit)) : "drop", cx, tableTop + 84);
    });
  }

  function loopCrypto() {
    if (isDynamic) drawCryptoFrame();
    requestAnimationFrame(loopCrypto);
  }

  window.addEventListener("resize", drawCryptoFrame);
  generateProtocolSlots();
  requestAnimationFrame(loopCrypto);
}

/* --- (2) CLASSICAL ERROR CORRECTION: 3D BOX HAMMING DISTANCE CUBE (000 AND 111) --- */
function initHammingCubeIllustration() {
  const canvas = document.getElementById("hammingCubeCanvas");
  if (!canvas) return;

  const staticBtn = document.getElementById("cubeStaticBtn");
  const dynamicBtn = document.getElementById("cubeDynamicBtn");
  const stepBtn = document.getElementById("cubeStepAngleBtn");
  const modeBadge = document.getElementById("cubeModeBadge");
  const telemetry = document.getElementById("hammingCubeTelemetry");

  let isDynamic = false; // Starts in Static Mode (Fixed Cube)!
  let sentCodeword = [0, 0, 0];
  let currentWord = [0, 0, 0];
  let rotAngle = 0.56;
  let projectedVertices = [];

  const cubeVertices = [
    { bits: [0, 0, 0], label: "000" },
    { bits: [1, 0, 0], label: "100" },
    { bits: [0, 1, 0], label: "010" },
    { bits: [0, 0, 1], label: "001" },
    { bits: [1, 1, 0], label: "110" },
    { bits: [1, 0, 1], label: "101" },
    { bits: [0, 1, 1], label: "011" },
    { bits: [1, 1, 1], label: "111" }
  ];

  function hammingDist(a, b) {
    return (a[0] !== b[0] ? 1 : 0) + (a[1] !== b[1] ? 1 : 0) + (a[2] !== b[2] ? 1 : 0);
  }

  function updateCubeTelemetry() {
    if (!telemetry) return;
    const rStr = currentWord.join("");
    const cStr = sentCodeword.join("");
    const d000 = hammingDist(currentWord, [0, 0, 0]);
    const d111 = hammingDist(currentWord, [1, 1, 1]);
    const s1 = (currentWord[0] + currentWord[1]) % 2;
    const s2 = (currentWord[1] + currentWord[2]) % 2;
    const decoded = d000 < d111 ? "000" : "111";
    const success = decoded === cStr;

    telemetry.innerHTML = `
      <strong>Sent $\\mathbf{c} = ${cStr}$ | Received $\\mathbf{r} = ${rStr}$ | Syndrome $\\mathbf{s} = \\mathbf{r}H^T = (${s1}, ${s2})$:</strong><br/>
      Hamming Distances: $d_H(\\mathbf{r}, 000) = ${d000}$, $d_H(\\mathbf{r}, 111) = ${d111}$ |
      Decoded: <strong style="color:${
        success ? "var(--accent-navy)" : "var(--accent-burgundy)"
      };">$\\hat{\\mathbf{c}} = ${decoded}$ (${
      success ? "Decoded Inside Radius t=1 Sphere" : "Weight 2+ Error Crossed Sphere Boundary!"
    })</strong>
    `;
    renderMath(telemetry);
  }

  function setCubeMotion(dynamic) {
    isDynamic = dynamic;
    if (staticBtn) staticBtn.classList.toggle("active", !dynamic);
    if (dynamicBtn) dynamicBtn.classList.toggle("active", dynamic);
    if (modeBadge) {
      modeBadge.textContent = dynamic ? "MODE: DYNAMIC (ROTATING 3D)" : "MODE: STATIC (NOTEBOOK SKETCH)";
    }
    drawCubeFrame();
  }

  if (staticBtn) staticBtn.addEventListener("click", () => setCubeMotion(false));
  if (dynamicBtn) dynamicBtn.addEventListener("click", () => setCubeMotion(true));
  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      setCubeMotion(false);
      rotAngle += (15 * Math.PI) / 180;
      drawCubeFrame();
    });
  }

  document.querySelectorAll("[data-cube-word]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wStr = btn.getAttribute("data-cube-word");
      sentCodeword = wStr === "111" ? [1, 1, 1] : [0, 0, 0];
      currentWord = [...sentCodeword];
      document.querySelectorAll("[data-cube-word]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateCubeTelemetry();
      drawCubeFrame();
    });
  });

  document.querySelectorAll("[data-cube-flip]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-cube-flip"), 10);
      currentWord[idx] = currentWord[idx] === 0 ? 1 : 0;
      btn.classList.toggle("active");
      updateCubeTelemetry();
      drawCubeFrame();
    });
  });

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    projectedVertices.forEach((pv) => {
      if (Math.hypot(pv.x - mx, pv.y - my) < 24) {
        currentWord = [...pv.bits];
        updateCubeTelemetry();
        drawCubeFrame();
      }
    });
  });

  function drawCubeFrame() {
    if (isDynamic) rotAngle += 0.006;
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width || 680;
    const h = rect.height || 440;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sp = sketchProgressMap.hamming ?? 1.0;

    drawWhiteGridNotebook(
      ctx,
      w,
      h,
      "Notebook Sheet 02: 3D Boolean Hypercube {0,1}³ & Disjoint Hamming Spheres",
      "d_min(000, 111) = 3,  s = r Hᵀ (mod 2)",
      sp
    );

    const cx = w * 0.44;
    const cy = h * 0.55;
    const scale = Math.min(w, h) * 0.27;

    projectedVertices = cubeVertices.map((v) => {
      const x = v.bits[0] * 2 - 1;
      const y = v.bits[1] * 2 - 1;
      const z = v.bits[2] * 2 - 1;

      const cosY = Math.cos(rotAngle);
      const sinY = Math.sin(rotAngle);
      const rx = x * cosY - z * sinY;
      const rz = x * sinY + z * cosY;

      const tilt = 0.42;
      const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);

      return {
        ...v,
        x: cx + rx * scale,
        y: cy - ry * scale * 0.85
      };
    });

    for (let i = 0; i < projectedVertices.length; i++) {
      for (let j = i + 1; j < projectedVertices.length; j++) {
        const a = projectedVertices[i];
        const b = projectedVertices[j];
        if (hammingDist(a.bits, b.bits) === 1) {
          const near000 =
            hammingDist(a.bits, [0, 0, 0]) <= 1 && hammingDist(b.bits, [0, 0, 0]) <= 1;
          const near111 =
            hammingDist(a.bits, [1, 1, 1]) <= 1 && hammingDist(b.bits, [1, 1, 1]) <= 1;

          const edgeCol = near000
            ? "#1E3A8A"
            : near111
            ? "#881337"
            : "#94A3B8";
          sketchLine(ctx, a.x, a.y, b.x, b.y, edgeCol, near000 || near111 ? 2.5 : 1.5, sp, !near000 && !near111);
        }
      }
    }

    projectedVertices.forEach((pv) => {
      const is000 = pv.label === "000";
      const is111 = pv.label === "111";
      const isCurrent = pv.label === currentWord.join("");
      const d0 = hammingDist(pv.bits, [0, 0, 0]);

      if (isCurrent) {
        ctx.beginPath();
        ctx.arc(pv.x, pv.y, 24, 0, Math.PI * 2 * sp);
        ctx.fillStyle = "rgba(30, 58, 138, 0.16)";
        ctx.fill();
        ctx.strokeStyle = "#881337";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.beginPath();
      ctx.arc(pv.x, pv.y, is000 || is111 ? 18 : 14.5, 0, Math.PI * 2 * sp);
      ctx.fillStyle = is000
        ? "#1E3A8A"
        : is111
        ? "#881337"
        : d0 === 1
        ? "#DBEAFE"
        : "#FFE4E6";
      ctx.strokeStyle = isCurrent ? "#111827" : "#334155";
      ctx.lineWidth = isCurrent ? 3 : 1.6;
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = is000 || is111 ? "#FFFFFF" : "#111827";
      ctx.font = "bold 11px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(pv.label, pv.x, pv.y + 3.5);
    });

    // Right-hand Notebook Margin Box (BLOCK 05 Syndrome Calculation Card)
    const cardX = w * 0.72;
    const cardY = h * 0.22;
    const cardW = Math.max(175, w * 0.25);
    sketchBox(ctx, cardX, cardY, cardW, 210, "#1E3A8A", "#FFFDF9", 1.8, sp);
    const s1 = (currentWord[0] + currentWord[1]) % 2;
    const s2 = (currentWord[1] + currentWord[2]) % 2;
    const d0 = hammingDist(currentWord, [0, 0, 0]);
    const d1 = hammingDist(currentWord, [1, 1, 1]);

    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 14px 'Caveat', 'Gowun Batang', cursive, serif";
    ctx.textAlign = "left";
    ctx.fillText("✎ BLOCK 05: Syndrome Notes", cardX + 12, cardY + 22);
    ctx.fillStyle = "#111827";
    ctx.font = "11.5px 'JetBrains Mono', monospace";
    ctx.fillText(`Sent c     = ${sentCodeword.join("")}`, cardX + 12, cardY + 48);
    ctx.fillText(`Received r = ${currentWord.join("")}`, cardX + 12, cardY + 68);
    ctx.fillText(`s = r·Hᵀ   = (${s1}, ${s2})`, cardX + 12, cardY + 90);
    ctx.fillText(`d_H(r,000) = ${d0} hops`, cardX + 12, cardY + 116);
    ctx.fillText(`d_H(r,111) = ${d1} hops`, cardX + 12, cardY + 136);
    ctx.fillStyle = d0 < d1 ? "#1E3A8A" : "#881337";
    ctx.font = "bold 12px 'JetBrains Mono', monospace";
    ctx.fillText(`Decoded ĉ  = ${d0 < d1 ? "000" : "111"}`, cardX + 12, cardY + 165);
    ctx.fillStyle = "#52525B";
    ctx.font = "italic 11px 'Times New Roman', serif";
    ctx.fillText("(Click any cube vertex!)", cardX + 12, cardY + 192);
  }

  function loopCube() {
    if (isDynamic) drawCubeFrame();
    requestAnimationFrame(loopCube);
  }

  window.addEventListener("resize", drawCubeFrame);
  updateCubeTelemetry();
  drawCubeFrame();
  requestAnimationFrame(loopCube);
}

/* --- (3) TOPOLOGY: 7-STEANE / HAMMING, IBM HEAVY HEX, SU(2) UNITARY & SURFACE --- */
function initTopologyIllustration() {
  const canvas = document.getElementById("topologyCanvas");
  if (!canvas) return;

  const staticBtn = document.getElementById("topoStaticBtn");
  const dynamicBtn = document.getElementById("topoDynamicBtn");
  const stepBtn = document.getElementById("topoStepBtn");
  const modeBadge = document.getElementById("topoModeBadge");
  const telemetry = document.getElementById("topologyTelemetry");

  let isDynamic = false; // Starts in Static Mode (Paused)!
  let activeMode = "steane";
  let selectedNodeIdx = 6;
  let animPhase = 0.6;
  let interactiveNodes = [];

  const steanePlaquettes = [
    { name: "S1", qubits: [0, 3, 4, 6] },
    { name: "S2", qubits: [1, 3, 5, 6] },
    { name: "S3", qubits: [2, 4, 5, 6] }
  ];

  function updateTopologyTelemetry() {
    if (!telemetry) return;
    if (activeMode === "steane") {
      const s1 = steanePlaquettes[0].qubits.includes(selectedNodeIdx) ? 1 : 0;
      const s2 = steanePlaquettes[1].qubits.includes(selectedNodeIdx) ? 1 : 0;
      const s3 = steanePlaquettes[2].qubits.includes(selectedNodeIdx) ? 1 : 0;
      telemetry.innerHTML = `
        <strong>$[[7,1,3]]$ Steane &amp; $[7,4,3]$ Hamming Fano Plane:</strong> Fault on Qubit $q_{${
          selectedNodeIdx + 1
        }}$ | Stabilizer Syndrome $\\mathbf{s} = H \\mathbf{e}^T = (${s1}, ${s2}, ${s3})$ uniquely identifies $q_{${
        selectedNodeIdx + 1
      }}$.
      `;
    } else if (activeMode === "ibm") {
      telemetry.innerHTML = `
        <strong>IBM Heavy Hex Superconducting Topology:</strong> Selected Node #${
          selectedNodeIdx + 1
        } | Degree 2 bridge flag qubits and degree 3 vertex qubits minimize cross resonance frequency collisions.
      `;
    } else if (activeMode === "unitary") {
      telemetry.innerHTML = `
        <strong>$SU(2) \\cong S^3$ Unitary Group Topology:</strong> Phase parameter $t = ${animPhase.toFixed(
          2
        )}\\text{ rad}$ | One parameter unitary orbit $U(t) = \\exp(-i t \\hat{n}\\cdot\\vec{\\sigma}/2)$.
      `;
    } else {
      telemetry.innerHTML = `
        <strong>2D Planar Surface Code Lattice:</strong> Selected Data Qubit $D_{${selectedNodeIdx}}$ | Weight 4 commuting star ($A_v = X^{\\otimes 4}$) and plaquette ($B_p = Z^{\\otimes 4}$) checks.
      `;
    }
    renderMath(telemetry);
  }

  function setTopoMotion(dynamic) {
    isDynamic = dynamic;
    if (staticBtn) staticBtn.classList.toggle("active", !dynamic);
    if (dynamicBtn) dynamicBtn.classList.toggle("active", dynamic);
    if (modeBadge) {
      modeBadge.textContent = dynamic ? "MODE: DYNAMIC (ANIMATING)" : "MODE: STATIC (PAUSED)";
    }
    drawTopologyFrame();
  }

  if (staticBtn) staticBtn.addEventListener("click", () => setTopoMotion(false));
  if (dynamicBtn) dynamicBtn.addEventListener("click", () => setTopoMotion(true));
  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      setTopoMotion(false);
      animPhase += 0.35;
      updateTopologyTelemetry();
      drawTopologyFrame();
    });
  }

  document.querySelectorAll("[data-topo-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeMode = btn.getAttribute("data-topo-mode");
      document.querySelectorAll("[data-topo-mode]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedNodeIdx = 0;
      updateTopologyTelemetry();
      drawTopologyFrame();
    });
  });

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    interactiveNodes.forEach((n, idx) => {
      if (Math.hypot(n.x - mx, n.y - my) < 22) {
        selectedNodeIdx = idx;
        updateTopologyTelemetry();
        drawTopologyFrame();
      }
    });
  });

  function drawTopologyFrame() {
    if (isDynamic) animPhase += 0.02;
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width || 680;
    const h = rect.height || 440;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sp = sketchProgressMap.topology ?? 1.0;

    drawWhiteGridNotebook(
      ctx,
      w,
      h,
      `Notebook Sheet 03: Topological Manifold [${activeMode.toUpperCase()}]`,
      "[[7,1,3]] Steane · IBM Heavy-Hex · SU(2)",
      sp
    );

    const cx = w * 0.45;
    const cy = h * 0.56;
    interactiveNodes = [];

    if (activeMode === "steane") {
      const R = Math.min(w, h) * 0.35;
      const p0 = { x: cx, y: cy - R };
      const p1 = { x: cx - R * 0.95, y: cy + R * 0.72 };
      const p2 = { x: cx + R * 0.95, y: cy + R * 0.72 };
      const p3 = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
      const p4 = { x: (p0.x + p2.x) / 2, y: (p0.y + p2.y) / 2 };
      const p5 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
      const p6 = { x: cx, y: cy + R * 0.18 };

      interactiveNodes = [p0, p1, p2, p3, p4, p5, p6];

      const inR = Math.hypot(p5.x - p6.x, p5.y - p6.y);
      ctx.beginPath();
      ctx.arc(p6.x, p6.y, inR, 0, Math.PI * 2 * sp);
      ctx.strokeStyle = "#881337";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      const lines = [
        [p0, p1],
        [p1, p2],
        [p2, p0],
        [p0, p5],
        [p1, p4],
        [p2, p3]
      ];
      lines.forEach(([a, b]) => {
        sketchLine(ctx, a.x, a.y, b.x, b.y, "#1E3A8A", 2.2, sp, false);
      });

      interactiveNodes.forEach((pt, idx) => {
        const isFault = idx === selectedNodeIdx;
        const pulseR = isFault && isDynamic ? 22 + Math.sin(animPhase * 4) * 4 : 22;
        if (isFault) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulseR, 0, Math.PI * 2 * sp);
          ctx.fillStyle = "rgba(136, 19, 55, 0.22)";
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isFault ? 17 : 14.5, 0, Math.PI * 2 * sp);
        ctx.fillStyle = isFault ? "#881337" : "#1E3A8A";
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(`q${idx + 1}`, pt.x, pt.y + 4);
      });

      // Right-hand Notebook Stabilizer Plaquette Card
      const cardX = w * 0.73;
      const cardY = h * 0.22;
      const cardW = Math.max(170, w * 0.24);
      sketchBox(ctx, cardX, cardY, cardW, 200, "#881337", "#FFFDF9", 1.8, sp);
      const s1 = steanePlaquettes[0].qubits.includes(selectedNodeIdx) ? 1 : 0;
      const s2 = steanePlaquettes[1].qubits.includes(selectedNodeIdx) ? 1 : 0;
      const s3 = steanePlaquettes[2].qubits.includes(selectedNodeIdx) ? 1 : 0;
      ctx.fillStyle = "#881337";
      ctx.font = "bold 14px 'Caveat', cursive, serif";
      ctx.textAlign = "left";
      ctx.fillText("✎ Fano Plaquette Readout", cardX + 12, cardY + 22);
      ctx.fillStyle = "#111827";
      ctx.font = "11.5px 'JetBrains Mono', monospace";
      ctx.fillText(`Selected Qubit : q${selectedNodeIdx + 1}`, cardX + 12, cardY + 48);
      ctx.fillText(`S₁={q1,q4,q5,q7}: ${s1 ? "-1 (s₁=1)" : "+1 (s₁=0)"}`, cardX + 12, cardY + 74);
      ctx.fillText(`S₂={q2,q4,q6,q7}: ${s2 ? "-1 (s₂=1)" : "+1 (s₂=0)"}`, cardX + 12, cardY + 98);
      ctx.fillText(`S₃={q3,q5,q6,q7}: ${s3 ? "-1 (s₃=1)" : "+1 (s₃=0)"}`, cardX + 12, cardY + 122);
      ctx.fillStyle = "#1E3A8A";
      ctx.font = "bold 12px 'JetBrains Mono', monospace";
      ctx.fillText(`Syndrome s = (${s1},${s2},${s3})`, cardX + 12, cardY + 154);
      ctx.fillStyle = "#52525B";
      ctx.font = "italic 11px 'Times New Roman', serif";
      ctx.fillText("(Click any q1..q7 on Fano plane)", cardX + 12, cardY + 182);
    } else if (activeMode === "ibm") {
      const hexR = Math.min(w, h) * 0.25;
      const centers = [
        { x: cx - hexR * 0.88, y: cy },
        { x: cx + hexR * 0.88, y: cy }
      ];

      centers.forEach((c, hIdx) => {
        const corners = [];
        for (let k = 0; k < 6; k++) {
          const ang = Math.PI / 6 + (k * Math.PI) / 3;
          corners.push({
            x: c.x + Math.cos(ang) * hexR,
            y: c.y + Math.sin(ang) * hexR
          });
        }
        for (let k = 0; k < 6; k++) {
          const a = corners[k];
          const b = corners[(k + 1) % 6];
          sketchLine(ctx, a.x, a.y, b.x, b.y, "#1E3A8A", 2.1, sp, false);

          interactiveNodes.push({
            x: (a.x + b.x) / 2,
            y: (a.y + b.y) / 2,
            isBridge: true
          });
          interactiveNodes.push({ x: a.x, y: a.y, isBridge: false });
        }
        ctx.fillStyle = "#52525B";
        ctx.font = "bold 11.5px 'Batang', serif";
        ctx.textAlign = "center";
        ctx.fillText(`HEAVY HEX CELL ${hIdx + 1}`, c.x, c.y + 4);
      });

      interactiveNodes.forEach((n, idx) => {
        const isSel = idx === selectedNodeIdx;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.isBridge ? 8.5 : 11.5, 0, Math.PI * 2 * sp);
        ctx.fillStyle = isSel ? "#881337" : n.isBridge ? "#DBEAFE" : "#1E3A8A";
        ctx.strokeStyle = "#111827";
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
      });
    } else if (activeMode === "unitary") {
      const R = Math.min(w, h) * 0.34;
      for (let k = 0; k < 7; k++) {
        const tilt = (k / 7) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          R * (0.45 + 0.55 * Math.abs(Math.cos(tilt + animPhase * 0.4))),
          R * 0.38,
          tilt,
          0,
          Math.PI * 2 * sp
        );
        ctx.strokeStyle = k % 2 === 0 ? "rgba(30, 58, 138, 0.65)" : "rgba(136, 19, 55, 0.65)";
        ctx.lineWidth = 1.9;
        ctx.stroke();
      }

      const ux = cx + Math.cos(animPhase * 1.5) * R * 0.75;
      const uy = cy + Math.sin(animPhase * 1.5) * R * 0.38;
      ctx.beginPath();
      ctx.arc(ux, uy, 10.5, 0, Math.PI * 2 * sp);
      ctx.fillStyle = "#881337";
      ctx.fill();
      ctx.fillStyle = "#111827";
      ctx.font = "bold 12.5px 'Batang', serif";
      ctx.fillText("U(t) ∈ SU(2) ≅ S³", ux + 14, uy + 4);
    } else {
      const gridStep = 74;
      for (let r = -1; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
          const px = cx + c * gridStep;
          const py = cy + r * gridStep;
          sketchBox(
            ctx,
            px - gridStep / 2,
            py - gridStep / 2,
            gridStep,
            gridStep,
            "#94A3B8",
            "rgba(239, 246, 255, 0.35)",
            1.4,
            sp
          );
          interactiveNodes.push({ x: px, y: py });
        }
      }
      interactiveNodes.forEach((n, idx) => {
        const isSel = idx === selectedNodeIdx;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 14.5, 0, Math.PI * 2 * sp);
        ctx.fillStyle = isSel ? "#881337" : "#1E3A8A";
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(`D${idx}`, n.x, n.y + 3.5);
      });
    }
  }

  function loopTopo() {
    if (isDynamic) drawTopologyFrame();
    requestAnimationFrame(loopTopo);
  }

  window.addEventListener("resize", drawTopologyFrame);
  updateTopologyTelemetry();
  drawTopologyFrame();
  requestAnimationFrame(loopTopo);
}

/* --- (4) INTERACTIVE QUANTUM CIRCUIT SIMULATOR --- */
function initQuantumCircuitIllustration() {
  const canvas = document.getElementById("quantumCircuitCanvas");
  if (!canvas) return;

  const staticBtn = document.getElementById("circuitStaticBtn");
  const dynamicBtn = document.getElementById("circuitDynamicBtn");
  const stepBtn = document.getElementById("circuitStepLayerBtn");
  const modeBadge = document.getElementById("circuitModeBadge");
  const telemetry = document.getElementById("circuitTelemetry");

  let isDynamic = false; // Starts in Static Mode (Manual Layer Step)!
  let activeStepCol = 0; // 0, 1, 2, 3
  let scanX = 140;
  let gateBoxes = [];

  let gridGates = [
    ["H", "C", "I", "M"],
    ["I", "X", "C", "M"],
    ["I", "I", "X", "M"]
  ];
  let activePreset = "ghz";

  const presets = {
    ghz: {
      gates: [
        ["H", "C", "I", "M"],
        ["I", "X", "C", "M"],
        ["I", "I", "X", "M"]
      ],
      probs: [0.5, 0, 0, 0, 0, 0, 0, 0.5],
      desc: `<strong>3 Qubit GHZ Circuit:</strong> $|\\psi_{\\text{out}}\\rangle = \\text{CNOT}_{1,2}\\text{CNOT}_{0,1}(H \\otimes I \\otimes I)|000\\rangle = \\frac{1}{\\sqrt{2}}(|000\\rangle + |111\\rangle)$ | $P(000)=50\\%, P(111)=50\\%$`
    },
    bell: {
      gates: [
        ["H", "C", "I", "M"],
        ["I", "X", "I", "M"],
        ["I", "I", "I", "M"]
      ],
      probs: [0.5, 0, 0, 0, 0, 0, 0.5, 0],
      desc: `<strong>Bell State $|\\Phi^+\\rangle$ Circuit:</strong> $|\\psi_{\\text{out}}\\rangle = \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle) \\otimes |0\\rangle$ | $P(000)=50\\%, P(110)=50\\%$`
    },
    bitflip: {
      gates: [
        ["H", "C", "C", "M"],
        ["I", "X", "I", "M"],
        ["I", "I", "X", "M"]
      ],
      probs: [0.5, 0, 0, 0, 0, 0, 0, 0.5],
      desc: `<strong>3 Qubit Repetition Code Encoding:</strong> Encodes $\\alpha|0\\rangle + \\beta|1\\rangle \\mapsto \\alpha|000\\rangle + \\beta|111\\rangle$ across 3 physical qubits.`
    },
    superposition: {
      gates: [
        ["H", "Z", "I", "M"],
        ["H", "I", "S", "M"],
        ["H", "X", "I", "M"]
      ],
      probs: [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125],
      desc: `<strong>Uniform Hadamard Superposition $H^{\\otimes 3}$:</strong> Creates an equal superposition over all $2^3 = 8$ basis states ($P(x) = 12.5\\%$ each).`
    }
  };

  function updateCircuitReadout() {
    if (!telemetry) return;
    const colGates = `${gridGates[0][activeStepCol]} ⊗ ${gridGates[1][activeStepCol]} ⊗ ${gridGates[2][activeStepCol]}`;
    telemetry.innerHTML = `
      <strong>Active Layer Column ${activeStepCol + 1} Operator:</strong> $U_{${
      activeStepCol + 1
    }} = \\text{${colGates}}$<br/>
      ${presets[activePreset] ? presets[activePreset].desc : ""}
    `;
    renderMath(telemetry);
  }

  function setCircuitMotion(dynamic) {
    isDynamic = dynamic;
    if (staticBtn) staticBtn.classList.toggle("active", !dynamic);
    if (dynamicBtn) dynamicBtn.classList.toggle("active", dynamic);
    if (modeBadge) {
      modeBadge.textContent = dynamic
        ? "MODE: DYNAMIC (SWEEPING U(t))"
        : `MODE: STATIC (LAYER COL ${activeStepCol + 1})`;
    }
    drawCircuitFrame();
  }

  if (staticBtn) staticBtn.addEventListener("click", () => setCircuitMotion(false));
  if (dynamicBtn) dynamicBtn.addEventListener("click", () => setCircuitMotion(true));
  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      activeStepCol = (activeStepCol + 1) % 4;
      setCircuitMotion(false);
      updateCircuitReadout();
    });
  }

  document.querySelectorAll("[data-circuit-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activePreset = btn.getAttribute("data-circuit-preset");
      if (presets[activePreset]) {
        gridGates = presets[activePreset].gates.map((row) => [...row]);
      }
      document
        .querySelectorAll("[data-circuit-preset]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateCircuitReadout();
      drawCircuitFrame();
    });
  });

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const cycle = ["I", "H", "X", "Z", "S"];
    gateBoxes.forEach((b) => {
      if (mx >= b.x - 20 && mx <= b.x + 20 && my >= b.y - 20 && my <= b.y + 20 && b.col < 3) {
        const cur = gridGates[b.row][b.col];
        const next = cycle[(cycle.indexOf(cur) + 1) % cycle.length];
        gridGates[b.row][b.col] = next;
        activeStepCol = b.col;
        updateCircuitReadout();
        drawCircuitFrame();
      }
    });
  });

  function drawCircuitFrame() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width || 680;
    const h = rect.height || 440;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sp = sketchProgressMap.circuit ?? 1.0;

    drawWhiteGridNotebook(
      ctx,
      w,
      h,
      "Notebook Sheet 04: 3-Qubit Quantum Circuit & Unitary Wavefront Composer",
      "|ψ_out⟩ = U₄ U₃ U₂ U₁ |000⟩",
      sp
    );

    const wireY = [h * 0.27, h * 0.54, h * 0.81];
    const startX = 104;
    const endX = w * 0.68;
    const colX = [
      startX + (endX - startX) * 0.18,
      startX + (endX - startX) * 0.44,
      startX + (endX - startX) * 0.7,
      startX + (endX - startX) * 0.92
    ];

    if (isDynamic) {
      scanX += 1.8;
      if (scanX > endX) scanX = startX;
    } else {
      scanX = colX[activeStepCol];
    }

    // Highlight active unitary wavefront column
    ctx.fillStyle = "rgba(136, 19, 55, 0.08)";
    ctx.fillRect(scanX - 26, 38, 52, h - 62);
    sketchLine(ctx, scanX, 38, scanX, h - 24, "#881337", 2, sp, true);

    wireY.forEach((y, rIdx) => {
      ctx.fillStyle = "#111827";
      ctx.font = "bold 12.5px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`q${rIdx} |0⟩`, 52, y + 4);

      sketchLine(ctx, startX, y, endX, y, "#1E293B", 2, sp, false);
    });

    for (let c = 0; c < 4; c++) {
      ctx.fillStyle = "#52525B";
      ctx.font = "bold 10px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText(`BLOCK 0${c + 2}`, colX[c], 52);

      let ctrlRow = -1;
      let targRow = -1;
      for (let r = 0; r < 3; r++) {
        if (gridGates[r][c] === "C") ctrlRow = r;
        if (gridGates[r][c] === "X" && ctrlRow !== -1) targRow = r;
      }
      if (ctrlRow !== -1 && targRow !== -1) {
        sketchLine(ctx, colX[c], wireY[ctrlRow], colX[c], wireY[targRow], "#1E3A8A", 2.6, sp, false);
      }
    }

    gateBoxes = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        const g = gridGates[r][c];
        const gx = colX[c];
        const gy = wireY[r];
        gateBoxes.push({ row: r, col: c, x: gx, y: gy });

        if (g === "I") {
          ctx.beginPath();
          ctx.arc(gx, gy, 5.5, 0, Math.PI * 2 * sp);
          ctx.fillStyle = "#94A3B8";
          ctx.fill();
        } else if (g === "C") {
          ctx.beginPath();
          ctx.arc(gx, gy, 8.5, 0, Math.PI * 2 * sp);
          ctx.fillStyle = "#1E3A8A";
          ctx.fill();
        } else {
          const boxBg = g === "H" ? "#1E3A8A" : g === "M" ? "#FFFDF9" : "#881337";
          sketchBox(ctx, gx - 19, gy - 19, 38, 38, "#111827", boxBg, 1.8, sp);

          ctx.fillStyle = g === "M" ? "#111827" : "#FFFFFF";
          ctx.font = "bold 13px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillText(g, gx, gy + 4.5);
        }
      }
    }

    // Right-hand Born-Rule Output Probability Histogram on the Notebook
    const histX = w * 0.72;
    const histY = 58;
    const histW = Math.max(165, w * 0.25);
    const histH = h - 84;
    sketchBox(ctx, histX, histY, histW, histH, "#1E3A8A", "#FFFDF9", 1.8, sp);
    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 14px 'Caveat', cursive, serif";
    ctx.textAlign = "left";
    ctx.fillText("✎ Born Rule P(|x₀x₁x₂⟩)", histX + 10, histY + 20);

    const basisLabels = ["000", "001", "010", "011", "100", "101", "110", "111"];
    const pArr = presets[activePreset]?.probs || [0.5, 0, 0, 0, 0, 0, 0, 0.5];
    basisLabels.forEach((lbl, idx) => {
      const by = histY + 42 + idx * ((histH - 54) / 8);
      const prob = pArr[idx] * sp;
      ctx.fillStyle = "#111827";
      ctx.font = "10.5px 'JetBrains Mono', monospace";
      ctx.fillText(`|${lbl}⟩`, histX + 10, by + 10);

      const maxBar = histW - 88;
      ctx.fillStyle = "#E2E8F0";
      ctx.fillRect(histX + 48, by, maxBar, 12);
      ctx.fillStyle = idx === 0 || idx === 7 ? "#1E3A8A" : "#881337";
      ctx.fillRect(histX + 48, by, maxBar * prob, 12);

      ctx.fillStyle = "#52525B";
      ctx.fillText(`${Math.round(pArr[idx] * 100)}%`, histX + 52 + maxBar, by + 10);
    });
  }

  function loopCircuit() {
    if (isDynamic) drawCircuitFrame();
    requestAnimationFrame(loopCircuit);
  }

  window.addEventListener("resize", drawCircuitFrame);
  updateCircuitReadout();
  drawCircuitFrame();
  requestAnimationFrame(loopCircuit);
}

/* --- (5) CLASSICAL ROUTING VS. BELL STATE MEASUREMENTS (BSM) IN QUANTUM ROUTING --- */
function initRoutingBsmIllustration() {
  const canvas = document.getElementById("routingBsmCanvas");
  if (!canvas) return;

  const staticBtn = document.getElementById("routingStaticBtn");
  const dynamicBtn = document.getElementById("routingDynamicBtn");
  const stepBtn = document.getElementById("routingStepBtn");
  const hopsBtn = document.getElementById("routingToggleHopsBtn");
  const modeBadge = document.getElementById("routingModeBadge");
  const telemetry = document.getElementById("routingTelemetry");

  let isDynamic = false;
  let bsmOutcome = "00"; // "00" | "10" | "01" | "11"
  let twoRepeaters = false;
  let routingPhase = 0.55; // 0..1

  const bsmMap = {
    "00": {
      bellState: "|Φ⁺⟩ = (|00⟩ + |11⟩)/√2",
      pauliGate: "I_B (Identity)",
      RemoteStateBefore: "|Φ⁺⟩_{AB}",
      color: "#1E3A8A"
    },
    "10": {
      bellState: "|Φ⁻⟩ = (|00⟩ - |11⟩)/√2",
      pauliGate: "Z_B (Phase Flip)",
      RemoteStateBefore: "|Φ⁻⟩_{AB}",
      color: "#881337"
    },
    "01": {
      bellState: "|Ψ⁺⟩ = (|01⟩ + |10⟩)/√2",
      pauliGate: "X_B (Bit Flip)",
      RemoteStateBefore: "|Ψ⁺⟩_{AB}",
      color: "#065F46"
    },
    "11": {
      bellState: "|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2",
      pauliGate: "Z_B X_B (Bit + Phase Flip)",
      RemoteStateBefore: "|Ψ⁻⟩_{AB}",
      color: "#881337"
    }
  };

  function updateRoutingTelemetry() {
    if (!telemetry) return;
    const info = bsmMap[bsmOutcome] || bsmMap["00"];
    const w0 = 0.94;
    const hops = twoRepeaters ? 3 : 2;
    const wEnd = Math.pow(w0, hops);
    const fEnd = ((1 + 3 * wEnd) / 4).toFixed(3);
    telemetry.innerHTML = `
      <strong>Classical Dijkstra Path Cost:</strong> $D_{\\text{classical}} = 4 + 3 + 5 = 12\\text{ ms}$ (Store-and-Forward Copy) &nbsp;|&nbsp;
      <strong>Quantum Repeater BSM Outcome $(m_1, m_2) = (${bsmOutcome[0]}, ${bsmOutcome[1]})$:</strong> Projected onto $${info.bellState}$, Classical Feedforward sends $(${bsmOutcome[0]}, ${bsmOutcome[1]}) \\to \\text{Bob}$, Bob applies $\\mathbf{${info.pauliGate}}$ $\\implies$ End-to-End Fidelity $F_{\\text{e2e}} = ${fEnd}$ (${hops} elementary links, $w_0 = 0.94$).
    `;
    renderMath(telemetry);
  }

  function setRoutingMotion(dynamic) {
    isDynamic = dynamic;
    if (staticBtn) staticBtn.classList.toggle("active", !dynamic);
    if (dynamicBtn) dynamicBtn.classList.toggle("active", dynamic);
    if (modeBadge) {
      modeBadge.textContent = dynamic
        ? "MODE: DYNAMIC (ROUTING & BSM SWAPPING)"
        : "MODE: STATIC (NOTEBOOK SKETCH)";
    }
    drawRoutingFrame();
  }

  if (staticBtn) staticBtn.addEventListener("click", () => setRoutingMotion(false));
  if (dynamicBtn) dynamicBtn.addEventListener("click", () => setRoutingMotion(true));
  if (stepBtn) {
    stepBtn.addEventListener("click", () => {
      setRoutingMotion(false);
      routingPhase = (routingPhase + 0.22) % 1.0;
      drawRoutingFrame();
    });
  }

  document.querySelectorAll("[data-bsm-outcome]").forEach((btn) => {
    btn.addEventListener("click", () => {
      bsmOutcome = btn.getAttribute("data-bsm-outcome") || "00";
      document.querySelectorAll("[data-bsm-outcome]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateRoutingTelemetry();
      drawRoutingFrame();
    });
  });

  if (hopsBtn) {
    hopsBtn.addEventListener("click", () => {
      twoRepeaters = !twoRepeaters;
      hopsBtn.textContent = twoRepeaters
        ? "Chain: 2 Repeaters (3 Hops)"
        : "Chain: 1 Repeater (2 Hops)";
      hopsBtn.classList.toggle("active", twoRepeaters);
      updateRoutingTelemetry();
      drawRoutingFrame();
    });
  }

  function drawRoutingFrame() {
    if (isDynamic) routingPhase = (routingPhase + 0.005) % 1.0;
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width || 680;
    const h = rect.height || 440;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sp = sketchProgressMap.routing ?? 1.0;
    const info = bsmMap[bsmOutcome] || bsmMap["00"];

    drawWhiteGridNotebook(
      ctx,
      w,
      h,
      "Notebook Sheet 05: Classical Dijkstra Routing vs. Quantum Bell State Measurement (BSM)",
      "|Φ⁺⟩_{AR₁}|Φ⁺⟩_{R₂B} → Z^{m₁}X^{m₂}|Φ⁺⟩_{AB}",
      sp
    );

    const leftX = Math.max(105, w * 0.14);
    const midX = w * 0.5;
    const rightX = w * 0.86;

    // =========================================================================
    // TRACK A (TOP): CLASSICAL SHORTEST-PATH PACKET ROUTING (DIJKSTRA / OSPF)
    // =========================================================================
    const topY = h * 0.25;
    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 12px 'Batang', serif";
    ctx.textAlign = "left";
    ctx.fillText(
      "TRACK A (CLASSICAL): Store-and-Forward Shortest Path (Dijkstra Cost D = c₁ + c₂ = 4ms + 3ms = 7ms)",
      56,
      topY - 42
    );

    const r1X = w * 0.38;
    const r2X = w * 0.64;

    sketchLine(ctx, leftX, topY, r1X, topY, "#1E3A8A", 2.2, sp, false);
    sketchLine(ctx, r1X, topY, r2X, topY, "#1E3A8A", 2.2, sp, false);
    sketchLine(ctx, r2X, topY, rightX, topY, "#1E3A8A", 2.2, sp, false);

    // Classical Routers
    [
      { x: leftX, lbl: "SOURCE A", sub: "IP Packet Tx" },
      { x: r1X, lbl: "ROUTER R₁", sub: "Buffer & Copy" },
      { x: r2X, lbl: "ROUTER R₂", sub: "Dijkstra Next" },
      { x: rightX, lbl: "DEST B", sub: "Packet Rx" }
    ].forEach((nd) => {
      sketchBox(ctx, nd.x - 42, topY - 22, 84, 44, "#1E3A8A", "#EFF6FF", 1.8, sp);
      ctx.fillStyle = "#111827";
      ctx.font = "bold 10.5px 'Batang', serif";
      ctx.textAlign = "center";
      ctx.fillText(nd.lbl, nd.x, topY - 4);
      ctx.fillStyle = "#52525B";
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillText(nd.sub, nd.x, topY + 12);
    });

    // Moving Classical Packet on Track A
    const pktX = leftX + (rightX - leftX) * routingPhase * sp;
    sketchBox(ctx, pktX - 18, topY - 34, 36, 16, "#881337", "#FFF1F2", 1.5, sp);
    ctx.fillStyle = "#881337";
    ctx.font = "bold 9px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("10110", pktX, topY - 23);

    // Divider line between Classical Track A and Quantum BSM Track B
    sketchLine(ctx, 52, h * 0.42, w - 20, h * 0.42, "#C8C4B8", 1.2, sp, true);

    // =========================================================================
    // TRACK B (BOTTOM): QUANTUM ENTANGLEMENT ROUTING & BELL STATE MEASUREMENT (BSM)
    // =========================================================================
    const botY = h * 0.67;
    ctx.fillStyle = "#881337";
    ctx.font = "bold 12px 'Batang', serif";
    ctx.textAlign = "left";
    ctx.fillText(
      `TRACK B (QUANTUM BSM): Entanglement Swapping via Joint Bell State Measurement on (R₁, R₂) → Outcome (${bsmOutcome})`,
      56,
      h * 0.48
    );

    // Elementary Entangled Bell Link Waves (A — R1 and R2 — B)
    ctx.save();
    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = leftX + 46; x <= midX - 68; x += 4) {
      const wy = botY + Math.sin((x + routingPhase * 120) * 0.09) * 7;
      if (x === leftX + 46) ctx.moveTo(x, wy);
      else ctx.lineTo(x, wy);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let x = midX + 68; x <= rightX - 46; x += 4) {
      const wy = botY + Math.sin((x - routingPhase * 120) * 0.09) * 7;
      if (x === midX + 68) ctx.moveTo(x, wy);
      else ctx.lineTo(x, wy);
    }
    ctx.stroke();
    ctx.restore();

    // Alice Node (Left)
    sketchBox(ctx, leftX - 46, botY - 30, 92, 60, "#1E3A8A", "#EFF6FF", 2, sp);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 11.5px 'Batang', serif";
    ctx.textAlign = "center";
    ctx.fillText("ALICE (A)", leftX, botY - 8);
    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 10.5px 'JetBrains Mono', monospace";
    ctx.fillText("Holds Qubit A", leftX, botY + 12);

    // Central Quantum Repeater BSM Box (BLOCK 03)
    sketchBox(ctx, midX - 68, botY - 38, 136, 76, "#881337", "#FFF1F2", 2.4, sp);
    ctx.fillStyle = "#881337";
    ctx.font = "bold 10px 'JetBrains Mono', monospace";
    ctx.fillText("BLOCK 03: REPEATER BSM", midX, botY - 20);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 11px 'Batang', serif";
    ctx.fillText("CNOT(R₁,R₂) + H(R₁)", midX, botY - 3);
    ctx.fillStyle = info.color;
    ctx.font = "bold 11px 'JetBrains Mono', monospace";
    ctx.fillText(`M_Z = (${bsmOutcome[0]}, ${bsmOutcome[1]})`, midX, botY + 15);
    ctx.fillText(info.bellState.split("=")[0].trim(), midX, botY + 30);

    // Classical 2-Bit Feedforward Arc from Repeater BSM to Bob (BLOCK 04)
    ctx.save();
    ctx.strokeStyle = "#065F46";
    ctx.lineWidth = 1.8;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(midX + 40, botY - 38);
    ctx.quadraticCurveTo((midX + rightX) * 0.5, botY - 92, rightX, botY - 32);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "#065F46";
    ctx.font = "bold 13px 'Caveat', cursive, serif";
    ctx.textAlign = "center";
    ctx.fillText(
      `✎ Classical 2-Bit Feedforward (m₁,m₂) = (${bsmOutcome})`,
      (midX + rightX) * 0.52,
      botY - 64
    );

    // Bob Node with Pauli Correction Gate (Right, BLOCK 05)
    sketchBox(ctx, rightX - 52, botY - 30, 104, 60, "#065F46", "#ECFDF5", 2, sp);
    ctx.fillStyle = "#111827";
    ctx.font = "bold 11.5px 'Batang', serif";
    ctx.fillText("BOB (B)", rightX, botY - 10);
    ctx.fillStyle = "#065F46";
    ctx.font = "bold 10.5px 'JetBrains Mono', monospace";
    ctx.fillText(`Applies ${info.pauliGate.split(" ")[0]}`, rightX, botY + 8);
    ctx.fillText("→ |Φ⁺⟩_{AB}", rightX, botY + 23);

    // Bottom Long-Range Heralded Entanglement Arc A <===> B
    ctx.save();
    ctx.strokeStyle = "#881337";
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(leftX, botY + 30);
    ctx.quadraticCurveTo(midX, botY + 95, rightX, botY + 30);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "#881337";
    ctx.font = "bold 14.5px 'Caveat', cursive, serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "✎ End-to-End Swapped Entanglement |Φ⁺⟩_{AB} Established (Even Though Photons A & B Never Met!)",
      midX,
      h - 14
    );
  }

  function loopRouting() {
    if (isDynamic) drawRoutingFrame();
    requestAnimationFrame(loopRouting);
  }

  window.addEventListener("resize", drawRoutingFrame);
  updateRoutingTelemetry();
  drawRoutingFrame();
  requestAnimationFrame(loopRouting);
}

// Synchronize Canvas State When User Clicks a Block Description Card
window.onAnimationBlockSelected = function onAnimationBlockSelected(topicKey, blockId) {
  if (topicKey === "crypto") {
    const eveBtn = document.getElementById("cryptoToggleEveBtn");
    if (blockId === "eve" && eveBtn && !eveBtn.classList.contains("active")) {
      eveBtn.click();
    }
  } else if (topicKey === "hamming") {
    if (blockId === "cw000") {
      document.querySelector('[data-cube-word="000"]')?.click();
    } else if (blockId === "cw111") {
      document.querySelector('[data-cube-word="111"]')?.click();
    }
  } else if (topicKey === "topology") {
    if (blockId === "heavy-hex") {
      document.querySelector('[data-topo-mode="ibm"]')?.click();
    } else if (blockId === "su2-manifold") {
      document.querySelector('[data-topo-mode="unitary"]')?.click();
    } else {
      document.querySelector('[data-topo-mode="steane"]')?.click();
    }
  }
};

/* ============================================================================
 * 6. PROFILE PAGE (`profile.html`)
 * ============================================================================ */
function initProfilePage() {
  if (typeof profileData === "undefined") return;
  const bioContainer = document.getElementById("profileBiographyContainer");
  const eduList = document.getElementById("educationTimelineList");
  const expList = document.getElementById("experienceTimelineList");
  const cvBtn = document.getElementById("downloadCvBtn");

  if (bioContainer) {
    bioContainer.innerHTML = profileData.biography.map((p) => `<p>${p}</p>`).join("");
  }

  if (eduList) {
    eduList.innerHTML = profileData.education
      .map(
        (ed) => `
        <div class="theorem-callout ${ed.highlight ? "burgundy" : ""}" style="margin-top: 0;">
          <div class="theorem-title">${ed.period}</div>
          <div style="font-family: var(--font-batang); font-size: 1.12rem; font-weight: 700; color: var(--text-ink);">
            ${ed.degree}
          </div>
          <div style="font-weight: 600; color: var(--accent-navy); margin-bottom: 0.3rem;">${ed.institution}</div>
          <p style="margin-bottom: 0; font-size: 0.94rem;">${ed.focus}</p>
        </div>
      `
      )
      .join("");
  }

  if (expList) {
    expList.innerHTML = profileData.experience
      .map(
        (ex) => `
        <div class="theorem-callout" style="margin-top: 0;">
          <div class="theorem-title">${ex.period}</div>
          <div style="font-family: var(--font-batang); font-size: 1.12rem; font-weight: 700; color: var(--text-ink);">
            ${ex.role}
          </div>
          <div style="font-weight: 600; color: var(--accent-navy); margin-bottom: 0.3rem;">${ex.organization}</div>
          <p style="margin-bottom: 0; font-size: 0.94rem;">${ex.description}</p>
        </div>
      `
      )
      .join("");
  }

  if (cvBtn) {
    cvBtn.addEventListener("click", () => window.print());
  }
}

/* ============================================================================
 * 7. FLOATING SCHRÖDINGER'S CAT ASSISTANT (MULTI PAGE BOOKNOTE EDITION)
 * ============================================================================ */
function initSchrodingerWidget() {
  const container = document.getElementById("schrodingerWidgetContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="schrodinger-popover" id="schrodingerPopover" role="dialog" aria-label="Schrödinger's Guide">
      <div class="cat-popover-header">
        <span>Schrödinger's Guide $\\frac{1}{\\sqrt{2}}(|\\text{Awake}\\rangle + |\\text{Asleep}\\rangle)$</span>
        <button class="ctrl-pill-btn" id="closeCatBtn" type="button">✕</button>
      </div>
      <div class="cat-popover-body">
        <div id="catResponseBox" style="padding: 0.75rem; background: var(--bg-subtle); border-left: 3px solid var(--accent-navy);">
          Select a page shortcut, collapse my quantum state, or search for any Classical/Quantum concept!
        </div>
        <div class="control-btn-group">
          <a href="learn.html" class="ctrl-pill-btn">03. Learn Theory</a>
          <a href="illustrations.html" class="ctrl-pill-btn">04. Illustrations</a>
          <button class="ctrl-pill-btn burgundy active" type="button" id="collapseCatBtn">Collapse Wavefunction!</button>
        </div>
        <input
          type="text"
          id="catSearchInput"
          placeholder="Search Cryptography, Hamming, Steane, Circuit..."
          style="width: 100%; padding: 0.45rem 0.7rem; border: 1px solid var(--border-strong);"
        />
      </div>
    </div>

    <button class="schrodinger-trigger-btn" id="schrodingerTriggerBtn" type="button">
      <svg width="38" height="38" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon id="catLeftEar" points="22,42 18,16 42,30" fill="#1E3A8A" stroke="#111827" stroke-width="2"/>
        <polygon id="catRightEar" points="78,42 82,16 58,30" fill="#881337" stroke="#111827" stroke-width="2"/>
        <circle id="catFaceCircle" cx="50" cy="52" r="28" fill="#FAF9F5" stroke="#111827" stroke-width="2.5"/>
        <circle cx="39" cy="49" r="4" fill="#1E3A8A"/>
        <path d="M 56 49 Q 61 54 66 49" fill="none" stroke="#881337" stroke-width="2.5"/>
        <path d="M 44 60 Q 47 63 50 60 Q 53 63 56 60" fill="none" stroke="#111827" stroke-width="2"/>
      </svg>
      <div style="text-align: left;">
        <div style="font-family: var(--font-batang); font-size: 0.8rem; font-weight: 700; color: #FFFFFF;">SCHRÖDINGER'S GUIDE</div>
        <div id="catSubState" style="font-size: 0.72rem; color: #E0F2FE;">|Awake⟩ + |Asleep⟩</div>
      </div>
    </button>
  `;

  const trigger = document.getElementById("schrodingerTriggerBtn");
  const popover = document.getElementById("schrodingerPopover");
  const closeBtn = document.getElementById("closeCatBtn");
  const collapseBtn = document.getElementById("collapseCatBtn");
  const responseBox = document.getElementById("catResponseBox");
  const subState = document.getElementById("catSubState");
  const searchInput = document.getElementById("catSearchInput");

  trigger.addEventListener("click", () => {
    popover.classList.toggle("open");
    renderMath(popover);
  });
  if (closeBtn) closeBtn.addEventListener("click", () => popover.classList.remove("open"));

  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      const awake = Math.random() < 0.5;
      if (awake) {
        subState.textContent = "Collapsed: 100% |Awake⟩";
        responseBox.innerHTML = `<strong>Projective Measurement:</strong> Collapsed into $|\\text{Awake}\\rangle$ (Academic Navy) with $P = 0.50$!`;
      } else {
        subState.textContent = "Collapsed: 100% |Asleep⟩";
        responseBox.innerHTML = `<strong>Projective Measurement:</strong> Collapsed into $|\\text{Asleep}\\rangle$ (Scholarly Burgundy) with $P = 0.50$!`;
      }
      renderMath(responseBox);
    });
  }

  if (searchInput && typeof quantumGlossary !== "undefined") {
    searchInput.addEventListener("input", (e) => {
      const q = (e.target.value || "").toLowerCase().trim();
      if (!q) return;
      const hit = quantumGlossary.find(
        (g) =>
          g.key.includes(q) ||
          g.title.toLowerCase().includes(q) ||
          g.explanation.toLowerCase().includes(q)
      );
      if (hit) {
        responseBox.innerHTML = `
          <strong>${hit.title}:</strong> ${hit.explanation}<br/>
          <a href="${hit.pageTarget}" style="font-weight:700;">Open ${hit.pageTarget} →</a>
        `;
        renderMath(responseBox);
      }
    });
  }
}

/* ============================================================================
 * 8. CUTE CAT BACKGROUND ICONS (WHITE-GREY, ORANGE TABBY & CALICO CATS
 *    WITH VARIOUS EXPRESSIONS: HAPPY ^ω^, CURIOUS o.o, SLEEPY -ω-, WINKING ;3,
 *    STARRY ✧ω✧, ALERT ^•ﻌ•^, JOYFUL >ω<)
 * ============================================================================ */
function initCuteCatsBackground() {
  if (document.getElementById("cuteCatsBgLayer")) return;

  const layer = document.createElement("div");
  layer.id = "cuteCatsBgLayer";
  layer.className = "cute-cats-bg-layer";
  layer.setAttribute("aria-hidden", "true");

  const catIcons = [
    // 1. White-Grey Cat — Happy Smile (^ω^)
    {
      style: "top: 90px; left: 16px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22,48 16,16 44,32" fill="#CBD5E1" stroke="#334155" stroke-width="2.2"/>
          <polygon points="25,44 20,22 40,33" fill="#FDA4AF"/>
          <polygon points="88,48 94,16 66,32" fill="#94A3B8" stroke="#334155" stroke-width="2.2"/>
          <polygon points="85,44 90,22 70,33" fill="#FDA4AF"/>
          <circle cx="55" cy="58" r="32" fill="#F8FAFC" stroke="#334155" stroke-width="2.2"/>
          <!-- Grey forehead patch -->
          <path d="M 32 36 Q 55 52 78 36 Q 68 26 55 26 Q 42 26 32 36 Z" fill="#94A3B8"/>
          <!-- Happy ^ ^ eyes -->
          <path d="M 36 55 Q 42 47 48 55" fill="none" stroke="#1E293B" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M 62 55 Q 68 47 74 55" fill="none" stroke="#1E293B" stroke-width="2.6" stroke-linecap="round"/>
          <!-- Pink cheeks -->
          <ellipse cx="33" cy="63" rx="5" ry="3" fill="#FDA4AF" opacity="0.75"/>
          <ellipse cx="77" cy="63" rx="5" ry="3" fill="#FDA4AF" opacity="0.75"/>
          <!-- ω mouth -->
          <polygon points="55,61 52,58 58,58" fill="#F43F5E"/>
          <path d="M 47 64 Q 51 69 55 64 Q 59 69 63 64" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round"/>
          <!-- Whiskers -->
          <line x1="14" y1="56" x2="27" y2="59" stroke="#475569" stroke-width="1.6"/>
          <line x1="14" y1="64" x2="27" y2="64" stroke="#475569" stroke-width="1.6"/>
          <line x1="83" y1="59" x2="96" y2="56" stroke="#475569" stroke-width="1.6"/>
          <line x1="83" y1="64" x2="96" y2="64" stroke="#475569" stroke-width="1.6"/>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">White-Grey |Happy ^ω^⟩</text>
        </svg>
      `
    },
    // 2. Orange Tabby Cat — Curious Awake (o.o)
    {
      style: "top: 105px; right: 18px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22,48 16,16 44,32" fill="#FB923C" stroke="#7C2D12" stroke-width="2.2"/>
          <polygon points="25,44 20,22 40,33" fill="#FDE68A"/>
          <polygon points="88,48 94,16 66,32" fill="#F97316" stroke="#7C2D12" stroke-width="2.2"/>
          <polygon points="85,44 90,22 70,33" fill="#FDE68A"/>
          <circle cx="55" cy="58" r="32" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2.2"/>
          <!-- Orange tabby forehead stripes -->
          <path d="M 48 28 L 48 40 M 55 27 L 55 42 M 62 28 L 62 40" stroke="#EA580C" stroke-width="3" stroke-linecap="round"/>
          <!-- Curious round sparkling eyes -->
          <circle cx="42" cy="54" r="5.5" fill="#7C2D12"/>
          <circle cx="40" cy="52" r="2" fill="#FFFFFF"/>
          <circle cx="68" cy="54" r="5.5" fill="#7C2D12"/>
          <circle cx="66" cy="52" r="2" fill="#FFFFFF"/>
          <polygon points="55,62 52,59 58,59" fill="#EA580C"/>
          <path d="M 48 66 Q 51.5 70 55 66 Q 58.5 70 62 66" fill="none" stroke="#7C2D12" stroke-width="2.2" stroke-linecap="round"/>
          <line x1="14" y1="57" x2="27" y2="60" stroke="#9A3412" stroke-width="1.6"/>
          <line x1="83" y1="60" x2="96" y2="57" stroke="#9A3412" stroke-width="1.6"/>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">Orange Cat |Curious o.o⟩</text>
        </svg>
      `
    },
    // 3. Calico Cat — Sleepy Peaceful (-ω-)
    {
      style: "top: 38%; left: 14px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <!-- Left ear orange, right ear dark charcoal -->
          <polygon points="22,48 16,16 44,32" fill="#F97316" stroke="#1E293B" stroke-width="2.2"/>
          <polygon points="88,48 94,16 66,32" fill="#334155" stroke="#1E293B" stroke-width="2.2"/>
          <circle cx="55" cy="58" r="32" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.2"/>
          <!-- Calico patches: orange left patch + dark brown/black right patch -->
          <path d="M 24 48 Q 38 56 44 34 Q 30 32 24 48 Z" fill="#FB923C"/>
          <path d="M 86 48 Q 70 56 66 34 Q 80 32 86 48 Z" fill="#334155"/>
          <!-- Sleepy closed eyes (- ω -) -->
          <path d="M 36 55 Q 42 60 48 55" fill="none" stroke="#1E293B" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M 62 55 Q 68 60 74 55" fill="none" stroke="#1E293B" stroke-width="2.4" stroke-linecap="round"/>
          <ellipse cx="33" cy="63" rx="4.5" ry="2.8" fill="#FDA4AF" opacity="0.75"/>
          <ellipse cx="77" cy="63" rx="4.5" ry="2.8" fill="#FDA4AF" opacity="0.75"/>
          <path d="M 48 65 Q 51.5 69 55 65 Q 58.5 69 62 65" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round"/>
          <text x="88" y="26" font-family="monospace" font-weight="bold" font-size="11" fill="#1E3A8A">zZz</text>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">Calico Cat |Sleepy -ω-⟩</text>
        </svg>
      `
    },
    // 4. White-Grey Cat — Playful Winking (;3)
    {
      style: "top: 40%; right: 16px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22,48 16,16 44,32" fill="#94A3B8" stroke="#334155" stroke-width="2.2"/>
          <polygon points="88,48 94,16 66,32" fill="#CBD5E1" stroke="#334155" stroke-width="2.2"/>
          <circle cx="55" cy="58" r="32" fill="#F8FAFC" stroke="#334155" stroke-width="2.2"/>
          <path d="M 60 28 Q 75 45 86 48 Q 80 30 60 28 Z" fill="#94A3B8"/>
          <!-- Left eye open, right eye winking -->
          <circle cx="42" cy="54" r="5" fill="#1E293B"/>
          <circle cx="40.5" cy="52.5" r="1.8" fill="#FFFFFF"/>
          <path d="M 62 54 L 74 51 M 62 54 L 74 57" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 47 65 Q 51 70 55 65 Q 59 70 63 65" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round"/>
          <!-- Tiny pink tongue blep -->
          <path d="M 53 67 Q 55 73 57 67" fill="#F43F5E"/>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">White-Grey |Wink ;3⟩</text>
        </svg>
      `
    },
    // 5. Orange Tabby Cat — Starry-Eyed Eureka (✧ω✧)
    {
      style: "bottom: 165px; left: 16px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22,48 16,16 44,32" fill="#F97316" stroke="#7C2D12" stroke-width="2.2"/>
          <polygon points="88,48 94,16 66,32" fill="#FB923C" stroke="#7C2D12" stroke-width="2.2"/>
          <circle cx="55" cy="58" r="32" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2.2"/>
          <path d="M 48 28 L 48 39 M 55 27 L 55 41 M 62 28 L 62 39" stroke="#EA580C" stroke-width="2.8" stroke-linecap="round"/>
          <!-- Starry eyes ✧ ✧ -->
          <polygon points="42,46 44,52 50,54 44,56 42,62 40,56 34,54 40,52" fill="#D97706"/>
          <polygon points="68,46 70,52 76,54 70,56 68,62 66,56 60,54 66,52" fill="#D97706"/>
          <path d="M 47 66 Q 51 71 55 66 Q 59 71 63 66" fill="none" stroke="#7C2D12" stroke-width="2.2" stroke-linecap="round"/>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">Orange Cat |Eureka ✧ω✧⟩</text>
        </svg>
      `
    },
    // 6. Calico Cat — Joyful Purr (>ω<)
    {
      style: "bottom: 135px; right: 18px;",
      svg: `
        <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22,48 16,16 44,32" fill="#334155" stroke="#1E293B" stroke-width="2.2"/>
          <polygon points="88,48 94,16 66,32" fill="#EA580C" stroke="#1E293B" stroke-width="2.2"/>
          <circle cx="55" cy="58" r="32" fill="#FFFBEB" stroke="#1E293B" stroke-width="2.2"/>
          <!-- Calico tri-color spots -->
          <circle cx="35" cy="40" r="9" fill="#FB923C" opacity="0.85"/>
          <circle cx="74" cy="42" r="9" fill="#334155" opacity="0.85"/>
          <!-- > < joyful eyes -->
          <path d="M 36 50 L 46 54 L 36 58" fill="none" stroke="#1E293B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 74 50 L 64 54 L 74 58" fill="none" stroke="#1E293B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 47 65 Q 51 70 55 65 Q 59 70 63 65" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round"/>
          <text x="55" y="102" text-anchor="middle" class="cat-badge-caption">Calico Cat |Bell Pair &gt;ω&lt;⟩</text>
        </svg>
      `
    }
  ];

  layer.innerHTML = catIcons
    .map(
      (item) => `
      <div class="bg-cat-watermark" style="${item.style}">
        ${item.svg}
      </div>
    `
    )
    .join("");

  document.body.appendChild(layer);
}

/* ============================================================================
 * 9. LATEX TIKZ / QUANTIKZ VECTOR & ANIMATED GIF-STYLE FIGURE ENGINE
 *    FOR 04. ILLUSTRATION (`illustrations.html`)
 * ============================================================================ */
function initTikzFigureIllustrations() {
  if (typeof window.tikzFiguresCatalog === "undefined") return;

  const topicMap = [
    { key: "crypto", sheetId: "topic-sheet-crypto", canvasId: "cryptoCanvas" },
    { key: "hamming", sheetId: "topic-sheet-hamming", canvasId: "hammingCubeCanvas" },
    { key: "topology", sheetId: "topic-sheet-topology", canvasId: "topologyCanvas" },
    { key: "circuit", sheetId: "topic-sheet-circuit", canvasId: "quantumCircuitCanvas" },
    { key: "routing", sheetId: "topic-sheet-routing", canvasId: "routingCanvas" }
  ];

  topicMap.forEach(({ key, sheetId, canvasId }) => {
    const sheet = document.getElementById(sheetId);
    const figData = window.tikzFiguresCatalog[key];
    if (!sheet || !figData) return;

    const stage = sheet.querySelector(".wide-canvas-stage");
    const canvasEl = document.getElementById(canvasId);
    if (!stage) return;

    // Hide the old dynamic canvas by default (keep it in DOM so existing listeners don't error)
    if (canvasEl) {
      canvasEl.style.display = "none";
    }
    const oldBadge = stage.querySelector(".mode-badge-overlay");
    if (oldBadge) {
      oldBadge.style.display = "none";
    }
    stage.style.height = "auto";
    stage.style.minHeight = "0";

    const tikzContainer = document.createElement("div");
    tikzContainer.className = "tikz-figure-showcase";
    tikzContainer.id = `tikz-showcase-${key}`;

    tikzContainer.innerHTML = `
      <div class="tikz-toolbar">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="academic-tag burgundy">${figData.figNum} | LATEX TIKZ / QUANTIKZ VECTOR FIGURE</span>
          <strong style="font-family: var(--font-batang); font-size: 1rem; color: var(--text-ink);">
            ${figData.title}
          </strong>
        </div>
        <div class="control-btn-group">
          <button type="button" class="ctrl-pill-btn active" data-tikz-mode="gif" data-tikz-key="${key}">
            Animated Vector GIF Pulse Mode
          </button>
          <button type="button" class="ctrl-pill-btn" data-tikz-mode="static" data-tikz-key="${key}">
            Static Print TikZ Figure (PDF Style)
          </button>
          <button type="button" class="ctrl-pill-btn burgundy" data-tikz-code-toggle="${key}">
            View / Copy LaTeX \\begin{tikzpicture} Code
          </button>
          <button type="button" class="ctrl-pill-btn" data-tikz-canvas-toggle="${key}">
            Toggle Interactive Sandbox Canvas
          </button>
        </div>
      </div>

      <div class="tikz-svg-holder" id="tikz-svg-holder-${key}">
        ${figData.svgMarkup}
      </div>

      <div class="tikz-caption-box">
        <strong>${figData.figNum} (LaTeX TikZ / Quantikz Vector Illustration):</strong> ${figData.caption}
      </div>

      <div class="tikz-latex-drawer" id="tikz-code-drawer-${key}" style="display: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; border-bottom: 1px solid #334155; padding-bottom: 0.4rem;">
          <span style="color: #93C5FD; font-weight: 700;">LaTeX Preamble: ${figData.packages}</span>
          <button type="button" class="ctrl-pill-btn" data-tikz-copy="${key}" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;">
            Copy LaTeX TikZ Code
          </button>
        </div>
        <pre style="margin: 0; white-space: pre-wrap;">${figData.latexCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      </div>
    `;

    stage.insertBefore(tikzContainer, stage.firstChild);

    // Wire mode buttons (Animated Vector GIF Pulse vs Static Print TikZ)
    tikzContainer.querySelectorAll(`[data-tikz-key="${key}"]`).forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.getAttribute("data-tikz-mode");
        const svgEl = tikzContainer.querySelector(".tikz-vector-svg");
        if (svgEl) {
          svgEl.classList.toggle("tikz-gif-active", mode === "gif");
        }
        tikzContainer
          .querySelectorAll(`[data-tikz-key="${key}"]`)
          .forEach((b) => b.classList.toggle("active", b === btn));
      });
    });

    // Wire LaTeX source code drawer toggle
    const codeToggleBtn = tikzContainer.querySelector(`[data-tikz-code-toggle="${key}"]`);
    const codeDrawer = document.getElementById(`tikz-code-drawer-${key}`);
    if (codeToggleBtn && codeDrawer) {
      codeToggleBtn.addEventListener("click", () => {
        const isHidden = codeDrawer.style.display === "none";
        codeDrawer.style.display = isHidden ? "block" : "none";
        codeToggleBtn.classList.toggle("active", isHidden);
      });
    }

    // Wire Copy LaTeX button
    const copyBtn = tikzContainer.querySelector(`[data-tikz-copy="${key}"]`);
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(figData.latexCode);
          copyBtn.textContent = "Copied LaTeX TikZ!";
          setTimeout(() => {
            copyBtn.textContent = "Copy LaTeX TikZ Code";
          }, 1800);
        }
      });
    }

    // Wire Interactive Canvas toggle in case user wants to compare TikZ figure & interactive canvas
    const canvasToggleBtn = tikzContainer.querySelector(`[data-tikz-canvas-toggle="${key}"]`);
    if (canvasToggleBtn && canvasEl) {
      canvasToggleBtn.addEventListener("click", () => {
        const showCanvas = canvasEl.style.display === "none";
        canvasEl.style.display = showCanvas ? "block" : "none";
        if (showCanvas) {
          canvasEl.style.height = "460px";
          canvasEl.style.marginTop = "1rem";
          canvasEl.style.borderTop = "2px solid #1E3A8A";
          window.redrawAllIllustrationCanvases();
        }
        canvasToggleBtn.classList.toggle("active", showCanvas);
      });
    }

    renderMath(tikzContainer);
  });
}

/* ============================================================================
 * APPLICATION BOOTSTRAP ACROSS ALL 6 PAGES
 * ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initSharedNavigation();
  initCuteCatsBackground();
  initResearchPillars();
  initPublicationsPage();
  initLearnPage();
  initCryptoIllustration();
  initHammingCubeIllustration();
  initTopologyIllustration();
  initQuantumCircuitIllustration();
  initRoutingBsmIllustration();
  initTikzFigureIllustrations();
  initIllustrationsTopicRouterAndTutorials();
  initProfilePage();
  initSchrodingerWidget();

  renderMath(document.body);
  window.addEventListener("load", () => renderMath(document.body));
});
