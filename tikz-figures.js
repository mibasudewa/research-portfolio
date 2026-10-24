/* ==========================================================================
 * TIKZ-FIGURES.JS — Modular LaTeX TikZ / Quantikz Vector & Animated GIF-Style
 * Figure Illustrations for 04. ILLUSTRATION Laboratory
 * ========================================================================== */

window.tikzFiguresCatalog = {
  /* ------------------------------------------------------------------------
   * TOPIC 1: QUANTUM CRYPTOGRAPHY (BB84 & E91 TIKZ FIGURE)
   * ------------------------------------------------------------------------ */
  crypto: {
    figNum: "Figure 1.1",
    title: "LaTeX TikZ Vector Figure: BB84 Conjugate-Basis Protocol & Intercept-Resend Wavefunction Collapse",
    caption:
      "TikZ schematic of the Bennett-Brassard (1984) Quantum Key Distribution channel. Top track: Unperturbed quantum transmission where matching conjugate bases ($b_A = b_B$) yield deterministic key bits ($e_{\\text{bit}} = 0\\%$). Bottom track: Eve's projective measurement in mismatched basis $b_E \\neq b_A$ collapses $|\\psi_A\\rangle$ into an equal superposition, inducing an unmistakable $\\text{QBER} = 25\\%$ anomaly during public sifting.",
    packages: "\\usepackage{tikz, quantikz, amsmath, amssymb}\\usetikzlibrary{arrows.meta, positioning, calc, decorations.pathmorphing, backgrounds}",
    svgMarkup: `
      <svg class="tikz-vector-svg tikz-gif-active" viewBox="0 0 980 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LaTeX TikZ diagram of BB84 Quantum Key Distribution">
        <defs>
          <marker id="tikz-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#111827"/>
          </marker>
          <marker id="tikz-arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#1d4ed8"/>
          </marker>
          <marker id="tikz-arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#b91c1c"/>
          </marker>
          <marker id="tikz-arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#047857"/>
          </marker>
        </defs>

        <!-- Background TikZ coordinate frame -->
        <rect x="12" y="12" width="956" height="446" rx="4" fill="#ffffff" stroke="#111827" stroke-width="1.2"/>
        <text x="28" y="36" font-family="'EB Garamond', 'Times New Roman', serif" font-size="14" font-style="italic" fill="#374151">
          \\begin{tikzpicture}[scale=1.0, &gt;=Stealth, every node/.style={font=\\small}] — BB84 Conjugate Coding &amp; Wavefunction Collapse
        </text>

        <!-- ======================== TRACK A: HONEST CHANNEL (QBER = 0%) ======================== -->
        <rect x="28" y="50" width="924" height="168" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="42" y="72" font-family="'EB Garamond', Georgia, serif" font-weight="bold" font-size="15" fill="#0f172a">
          (a) Unperturbed Quantum Channel ($\\mathcal{E} = \\text{id}_2$): Matching Basis $b_A = b_B \\implies P(\\text{error}) = 0$
        </text>

        <!-- Alice Source Node -->
        <rect x="44" y="88" width="165" height="110" rx="3" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.6"/>
        <text x="126" y="110" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="15" fill="#1e3a8a">Alice (Tx Source)</text>
        <text x="126" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#1e293b">Bit: x_A ∈ {0, 1}</text>
        <text x="126" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#1d4ed8">Basis: b_A ∈ {⊕_Z, ⊗_X}</text>
        <line x1="60" y1="158" x2="192" y2="158" stroke="#93c5fd" stroke-width="1"/>
        <text x="126" y="176" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13.5" fill="#0f172a">
          |ψ_A⟩ ∈ {|0⟩, |1⟩, |+⟩, |−⟩}
        </text>

        <!-- Optical Fiber Quantum Channel Wave -->
        <line x1="209" y1="143" x2="695" y2="143" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#tikz-arrow-blue)"/>
        <path class="tikz-photon-wave" d="M 245 143 Q 257 125, 269 143 T 293 143 T 317 143 T 341 143 T 365 143 T 389 143 T 413 143 T 437 143 T 461 143 T 485 143 T 509 143 T 533 143 T 557 143 T 581 143 T 605 143 T 629 143 T 653 143" fill="none" stroke="#0284c7" stroke-width="2"/>
        <!-- Travelling Photon Pulse -->
        <circle class="tikz-pulse-node" cx="340" cy="143" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <circle class="tikz-pulse-node-delayed" cx="540" cy="143" r="6" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>

        <!-- Polarization Basis Badges Above Fiber -->
        <g transform="translate(305, 84)">
          <rect x="0" y="0" width="128" height="36" rx="3" fill="#ffffff" stroke="#111827" stroke-width="1"/>
          <circle cx="20" cy="18" r="11" fill="none" stroke="#1d4ed8" stroke-width="1.3"/>
          <line x1="20" y1="7" x2="20" y2="29" stroke="#1d4ed8" stroke-width="1.3"/>
          <line x1="9" y1="18" x2="31" y2="18" stroke="#1d4ed8" stroke-width="1.3"/>
          <text x="78" y="16" text-anchor="middle" font-family="'EB Garamond', serif" font-size="12" font-weight="bold" fill="#111827">Z-Basis (⊕)</text>
          <text x="78" y="30" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#374151">{|0⟩, |1⟩}</text>
        </g>

        <g transform="translate(465, 84)">
          <rect x="0" y="0" width="138" height="36" rx="3" fill="#ffffff" stroke="#111827" stroke-width="1"/>
          <circle cx="20" cy="18" r="11" fill="none" stroke="#7c3aed" stroke-width="1.3"/>
          <line x1="12" y1="10" x2="28" y2="26" stroke="#7c3aed" stroke-width="1.3"/>
          <line x1="28" y1="10" x2="12" y2="26" stroke="#7c3aed" stroke-width="1.3"/>
          <text x="82" y="16" text-anchor="middle" font-family="'EB Garamond', serif" font-size="12" font-weight="bold" fill="#111827">X-Basis (⊗)</text>
          <text x="82" y="30" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#374151">{|+⟩, |−⟩}</text>
        </g>

        <text x="452" y="168" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13.5" fill="#1e3a8a">
          Single-Photon Polarization State |ψ_A⟩ Propagates Coherently (No Cloning Allowed: U|ψ⟩|0⟩ ≠ |ψ⟩|ψ⟩)
        </text>
        <text x="452" y="190" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#047857">
          If b_B = b_A: ⟨ψ_A|Π_{x_A}|ψ_A⟩ = 1.00  |  If b_B ≠ b_A: |⟨e_i^{(Z)}|f_j^{(X)}⟩|² = 1/2 (Discarded in Sifting)
        </text>

        <!-- Bob Receiver Node (Top) -->
        <rect x="700" y="88" width="234" height="110" rx="3" fill="#ecfdf5" stroke="#047857" stroke-width="1.6"/>
        <text x="817" y="110" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="15" fill="#065f46">Bob (Rx Analyzer)</text>
        <text x="817" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#064e3b">Measures in b_B ∈ {⊕_Z, ⊗_X}</text>
        <text x="817" y="149" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#047857">Sifted (b_A = b_B): x_B = x_A</text>
        <line x1="718" y1="158" x2="916" y2="158" stroke="#6ee7b7" stroke-width="1"/>
        <text x="817" y="177" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="12" fill="#047857">
          QBER = 0.0% &lt; 11.0% (SECURE)
        </text>

        <!-- ======================== TRACK B: INTERCEPT-RESEND ATTACK (QBER = 25%) ======================== -->
        <rect x="28" y="232" width="924" height="210" rx="4" fill="#fff1f2" stroke="#fda4af" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="42" y="254" font-family="'EB Garamond', Georgia, serif" font-weight="bold" font-size="15" fill="#881337">
          (b) Intercept-Resend Attack by Eavesdropper Eve: Mismatched Basis $b_E \\neq b_A$ Collapses State &amp; Injects $25\\%$ QBER
        </text>

        <!-- Alice Node (Bottom) -->
        <rect x="44" y="274" width="150" height="112" rx="3" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="119" y="298" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14.5" fill="#1e3a8a">Alice Prepares</text>
        <text x="119" y="320" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" fill="#1e293b">x_A = 0, b_A = ⊕_Z</text>
        <text x="119" y="344" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="16" fill="#1d4ed8">|ψ_A⟩ = |0⟩</text>
        <text x="119" y="368" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#475569">Pure Z-Eigenstate</text>

        <!-- Arrow Alice -> Eve -->
        <line x1="194" y1="330" x2="342" y2="330" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#tikz-arrow-blue)"/>
        <path class="tikz-photon-wave" d="M 210 330 Q 220 315, 230 330 T 250 330 T 270 330 T 290 330 T 310 330 T 330 330" fill="none" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="268" y="308" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13" fill="#1e3a8a">|0⟩ = (|+⟩ + |−⟩)/√2</text>

        <!-- Eve Intercept Box -->
        <rect class="tikz-eve-box" x="348" y="268" width="250" height="124" rx="4" fill="#ffe4e6" stroke="#b91c1c" stroke-width="2"/>
        <text x="473" y="290" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="15" fill="#991b1b">
          Eve (Adversary Measurement M_E)
        </text>
        <text x="473" y="310" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7f1d1d">
          Guesses Wrong Basis: b_E = ⊗_X (Prob 1/2)
        </text>
        <!-- Meter Dial inside Eve -->
        <rect x="433" y="318" width="80" height="36" rx="3" fill="#ffffff" stroke="#991b1b" stroke-width="1.4"/>
        <path d="M 445 346 A 28 28 0 0 1 501 346" fill="none" stroke="#991b1b" stroke-width="1.3"/>
        <line x1="473" y1="346" x2="491" y2="325" stroke="#b91c1c" stroke-width="1.8"/>
        <text x="473" y="374" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#b91c1c">
          Collapses |0⟩ → |+⟩ or |−⟩!
        </text>

        <!-- Arrow Eve -> Bob -->
        <line x1="598" y1="330" x2="734" y2="330" stroke="#b91c1c" stroke-width="1.8" stroke-dasharray="6,4" marker-end="url(#tikz-arrow-red)"/>
        <circle class="tikz-pulse-node-red" cx="666" cy="330" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/>
        <text x="666" y="308" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13" fill="#991b1b">
          Resends |±⟩ = (|0⟩ ± |1⟩)/√2
        </text>
        <text x="666" y="352" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#b91c1c">
          State Irreversibly Altered
        </text>

        <!-- Bob Node (Bottom) -->
        <rect x="740" y="268" width="194" height="124" rx="3" fill="#ffffff" stroke="#b91c1c" stroke-width="1.6"/>
        <text x="837" y="290" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14.5" fill="#991b1b">
          Bob Measures b_B = ⊕_Z
        </text>
        <text x="837" y="312" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#1e293b">
          P(x_B = 0 | |±⟩) = 1/2
        </text>
        <text x="837" y="330" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#b91c1c">
          P(x_B = 1 | |±⟩) = 1/2 (ERROR!)
        </text>
        <line x1="756" y1="342" x2="918" y2="342" stroke="#fca5a5" stroke-width="1"/>
        <text x="837" y="362" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#b91c1c">
          e_bit = (1/2)(0) + (1/2)(1/2) = 25%
        </text>
        <text x="837" y="380" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#881337">
          25% &gt; 11% → ABORT KEY!
        </text>

        <!-- Bottom mathematical summary bar -->
        <text x="490" y="426" text-anchor="middle" font-family="'EB Garamond', Georgia, serif" font-size="14" fill="#111827">
          Theorem (Shor–Preskill 2000): Asymptotic Secret Key Rate  R = max(0, 1 − 2 h₂(e_bit)) &gt; 0  iff  e_bit &lt; 11.0028%.  Under Eve's attack, P_undetected(k) = (3/4)^k.
        </text>
      </svg>
    `,
    latexCode: `\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{tikz, amsmath, amssymb}
\\usetikzlibrary{arrows.meta, positioning, calc, decorations.pathmorphing}

\\begin{document}
\\begin{tikzpicture}[
    >=Stealth,
    node distance=2.6cm,
    station/.style={draw=blue!75!black, fill=blue!5, thick, rounded corners=2pt, minimum width=3.2cm, minimum height=1.8cm, align=center},
    adversary/.style={draw=red!75!black, fill=red!8, very thick, rounded corners=2pt, minimum width=3.6cm, minimum height=1.8cm, align=center},
    receiver/.style={draw=teal!75!black, fill=teal!6, thick, rounded corners=2pt, minimum width=3.4cm, minimum height=1.8cm, align=center},
    photon/.style={decorate, decoration={snake, amplitude=2.2pt, segment length=10pt}, thick, blue!70!black}
]
  % Track (a): Honest BB84 Channel
  \\node[station] (Alice1) {\\textbf{Alice (Tx)}\\\\$x_A \\in \\{0,1\\},\\; b_A \\in \\{\\oplus_Z, \\otimes_X\\}$\\\\$|\\psi_A\\rangle \\in \\{|0\\rangle,|1\\rangle,|+\\rangle,|-\\rangle\\}$};
  \\node[receiver, right=6.2cm of Alice1] (Bob1) {\\textbf{Bob (Rx)}\\\\Measures $b_B = b_A$\\\\$\\text{QBER} = 0\\% < 11.0\\%$};
  \\draw[photon, ->] (Alice1) -- node[above=6pt] {Single Photon $|\\psi_A\\rangle$ (No-Cloning: $U|\\psi\\rangle|0\\rangle \\neq |\\psi\\rangle|\\psi\\rangle$)} (Bob1);

  % Track (b): Intercept-Resend by Eve
  \\node[station, below=2.3cm of Alice1] (Alice2) {\\textbf{Alice Prepares}\\\\$b_A = \\oplus_Z,\\; |\\psi_A\\rangle = |0\\rangle$};
  \\node[adversary, right=1.8cm of Alice2] (Eve) {\\textbf{Eve Measures $b_E = \\otimes_X$}\\\\Collapses $|0\\rangle \\to |\\pm\\rangle$\\\\with prob $1/2$};
  \\node[receiver, draw=red!75!black, fill=red!4, right=1.8cm of Eve] (Bob2) {\\textbf{Bob Measures $b_B = \\oplus_Z$}\\\\$P(x_B \\neq x_A) = \\frac{1}{2}\\cdot 0 + \\frac{1}{2}\\cdot\\frac{1}{2} = 25\\%$\\\\\\textbf{Abort Protocol!}};

  \\draw[photon, ->] (Alice2) -- node[above=4pt] {$|0\\rangle$} (Eve);
  \\draw[thick, dashed, red!75!black, ->] (Eve) -- node[above=4pt] {$|\\pm\\rangle = \\frac{|0\\rangle\\pm|1\\rangle}{\\sqrt{2}}$} (Bob2);
\\end{tikzpicture}
\\end{document}`
  },

  /* ------------------------------------------------------------------------
   * TOPIC 2: CLASSICAL CODING THEORY (3D HAMMING CUBE TIKZ-3DPLOT FIGURE)
   * ------------------------------------------------------------------------ */
  hamming: {
    figNum: "Figure 2.1",
    title: "LaTeX TikZ-3DPlot Vector Figure: Binary Hypercube $\\mathbb{F}_2^3$, Repetition Codewords $(000), (111)$ & $d_H = 3$ Voronoi Spheres",
    caption:
      "Isometric 3D projection of the binary vector space $\\mathbb{F}_2^3$ rendered in LaTeX TikZ style. Valid codewords $\\mathbf{c}_0 = (000)$ (blue) and $\\mathbf{c}_1 = (111)$ (emerald) are separated by minimum Hamming distance $d_{\\min} = 3$ edges, partitioning the 8 vertices into two disjoint radius-$t=1$ Hamming spheres $B_1(000)$ and $B_1(111)$ for guaranteed single-bit-flip recovery.",
    packages: "\\usepackage{tikz, tikz-3dplot, amsmath, amssymb}\\usetikzlibrary{arrows.meta, calc, backgrounds, positioning}",
    svgMarkup: `
      <svg class="tikz-vector-svg tikz-gif-active" viewBox="0 0 980 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LaTeX TikZ 3D Hamming Cube F_2^3">
        <defs>
          <marker id="tikz-arr-blk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#111827"/>
          </marker>
          <marker id="tikz-arr-blue2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#1d4ed8"/>
          </marker>
          <marker id="tikz-arr-green2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#047857"/>
          </marker>
          <marker id="tikz-arr-red2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#dc2626"/>
          </marker>
        </defs>

        <rect x="12" y="12" width="956" height="446" rx="4" fill="#ffffff" stroke="#111827" stroke-width="1.2"/>
        <text x="28" y="36" font-family="'EB Garamond', 'Times New Roman', serif" font-size="14" font-style="italic" fill="#374151">
          \\tdplotsetmaincoords{70}{115} \\begin{tikzpicture}[tdplot_main_coords] — Binary Metric Space (\\mathbb{F}_2^3, d_H) &amp; Voronoi Decoding Balls
        </text>

        <!-- Disjoint Hamming Ball Shaded Regions -->
        <ellipse cx="225" cy="295" rx="158" ry="118" transform="rotate(-18 225 295)" fill="#dbeafe" fill-opacity="0.42" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="6,4"/>
        <text x="98" y="188" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#1e40af">
          Voronoi Sphere B₁(000)
        </text>
        <text x="98" y="206" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#1e3a8a">
          {y ∈ F₂³ : d_H(y, 000) ≤ 1}
        </text>

        <ellipse cx="445" cy="175" rx="158" ry="118" transform="rotate(-18 445 175)" fill="#d1fae5" fill-opacity="0.42" stroke="#059669" stroke-width="1.4" stroke-dasharray="6,4"/>
        <text x="485" y="74" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#065f46">
          Voronoi Sphere B₁(111)
        </text>
        <text x="485" y="92" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#047857">
          {y ∈ F₂³ : d_H(y, 111) ≤ 1}
        </text>

        <!-- ======================== 3D CUBE EDGES (12 EDGES) ======================== -->
        <!--
          Coordinates of the 8 vertices in 2D isometric projection:
          v000 = (150, 355)  [Front-Bottom-Left, Codeword c0]
          v100 = (330, 355)  [Front-Bottom-Right, B1(000)]
          v010 = (240, 275)  [Back-Bottom-Left, B1(000)]
          v001 = (150, 185)  [Front-Top-Left, B1(000)]
          v110 = (420, 275)  [Back-Bottom-Right, B1(111)]
          v101 = (330, 185)  [Front-Top-Right, B1(111)]
          v011 = (240, 105)  [Back-Top-Left, B1(111)]
          v111 = (420, 105)  [Back-Top-Right, Codeword c1]
        -->

        <!-- Back / interior edges -->
        <line x1="150" y1="355" x2="240" y2="275" stroke="#2563eb" stroke-width="2.2"/>
        <line x1="240" y1="275" x2="420" y2="275" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5,4"/>
        <line x1="240" y1="275" x2="240" y2="105" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5,4"/>

        <!-- Front & outer edges -->
        <line x1="150" y1="355" x2="330" y2="355" stroke="#2563eb" stroke-width="2.4"/>
        <line x1="150" y1="355" x2="150" y2="185" stroke="#2563eb" stroke-width="2.4"/>

        <line x1="330" y1="355" x2="420" y2="275" stroke="#64748b" stroke-width="1.8"/>
        <line x1="330" y1="355" x2="330" y2="185" stroke="#64748b" stroke-width="1.8"/>
        <line x1="150" y1="185" x2="330" y2="185" stroke="#64748b" stroke-width="1.8"/>
        <line x1="150" y1="185" x2="240" y2="105" stroke="#64748b" stroke-width="1.8"/>

        <!-- Edges incident to c1 = (111) -->
        <line x1="420" y1="275" x2="420" y2="105" stroke="#059669" stroke-width="2.4"/>
        <line x1="330" y1="185" x2="420" y2="105" stroke="#059669" stroke-width="2.4"/>
        <line x1="240" y1="105" x2="420" y2="105" stroke="#059669" stroke-width="2.4"/>

        <!-- Highlighted d_min = 3 Path: (000) -> (100) -> (101) -> (111) -->
        <path class="tikz-animated-path" d="M 150 355 L 330 355 L 330 185 L 420 105" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8,5"/>

        <!-- Nearest-Neighbor Decoding Arrows back to (000) -->
        <path d="M 305 342 Q 240 328, 174 346" fill="none" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#tikz-arr-blue2)"/>
        <path d="M 164 208 Q 178 270, 162 332" fill="none" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#tikz-arr-blue2)"/>

        <!-- Nearest-Neighbor Decoding Arrows back to (111) -->
        <path d="M 346 170 Q 375 135, 402 118" fill="none" stroke="#047857" stroke-width="1.6" marker-end="url(#tikz-arr-green2)"/>
        <path d="M 265 105 Q 330 92, 396 102" fill="none" stroke="#047857" stroke-width="1.6" marker-end="url(#tikz-arr-green2)"/>

        <!-- ======================== 8 CUBE VERTICES ======================== -->
        <!-- c0 = (000) -->
        <circle class="tikz-codeword-node" cx="150" cy="355" r="16" fill="#1d4ed8" stroke="#111827" stroke-width="2"/>
        <text x="150" y="359" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">000</text>
        <text x="150" y="392" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#1e3a8a">c₀ = (0,0,0) [Logical 0]</text>

        <!-- Weight-1 neighbours of (000) -->
        <circle cx="330" cy="355" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
        <text x="330" y="359" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e3a8a">100</text>
        <text x="330" y="382" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#1d4ed8">e₁: d_H=1 → 000</text>

        <circle cx="240" cy="275" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
        <text x="240" y="279" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e3a8a">010</text>
        <text x="240" y="254" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#1d4ed8">e₂: d_H=1</text>

        <circle cx="150" cy="185" r="13" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
        <text x="150" y="189" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e3a8a">001</text>
        <text x="102" y="189" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#1d4ed8">e₃: d_H=1</text>

        <!-- Weight-2 vertices (distance 1 from 111) -->
        <circle cx="420" cy="275" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="420" y="279" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#065f46">110</text>
        <text x="476" y="279" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#047857">d_H(111)=1</text>

        <circle cx="330" cy="185" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="330" y="189" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#065f46">101</text>

        <circle cx="240" cy="105" r="13" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="240" y="109" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#065f46">011</text>

        <!-- c1 = (111) -->
        <circle class="tikz-codeword-node" cx="420" cy="105" r="16" fill="#059669" stroke="#111827" stroke-width="2"/>
        <text x="420" y="109" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">111</text>
        <text x="420" y="75" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#065f46">c₁ = (1,1,1) [Logical 1]</text>

        <!-- ======================== RIGHT PANEL: TIKZ ALGEBRAIC TABLEAU ======================== -->
        <rect x="575" y="56" width="375" height="365" rx="4" fill="#f8fafc" stroke="#111827" stroke-width="1.2"/>
        <text x="762" y="82" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="16" fill="#0f172a">
          Linear Code Algebraic Tableau [n=3, k=1, d=3]₂
        </text>
        <line x1="592" y1="92" x2="932" y2="92" stroke="#cbd5e1" stroke-width="1"/>

        <text x="595" y="118" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#1e3a8a">
          1. Generator &amp; Parity-Check Matrices over F₂:
        </text>
        <text x="605" y="142" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#111827">
          G = [1  1  1],     H = [1  1  0 ;  1  0  1]
        </text>
        <text x="605" y="162" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#047857">
          Orthogonality:  G · Hᵀ = [1⊕1, 1⊕1] = [0, 0] (mod 2)
        </text>

        <text x="595" y="194" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#1e3a8a">
          2. Hamming Sphere-Packing Bound (Exact Perfect Code!):
        </text>
        <text x="605" y="218" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#111827">
          |B₁(c)| = C(3,0) + C(3,1) = 1 + 3 = 4 vertices
        </text>
        <text x="605" y="238" font-family="'JetBrains Mono', monospace" font-size="11.5" fill="#1d4ed8">
          2^k · |B₁(c)| = 2¹ × 4 = 8 = 2³ = |F₂³|  (100% Tight!)
        </text>

        <text x="595" y="270" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#881337">
          3. Syndrome Lookup Table s = H yᵀ (mod 2):
        </text>
        <rect x="600" y="280" width="325" height="92" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="612" y="300" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="#0f172a">
          Syndrome s = (s₁, s₂)  |  Coset Leader e*  |  Action
        </text>
        <line x1="600" y1="306" x2="925" y2="306" stroke="#cbd5e1" stroke-width="1"/>
        <text x="612" y="322" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#047857">
          s = (0, 0)             |  e* = (0, 0, 0)   |  No Error
        </text>
        <text x="612" y="338" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#1d4ed8">
          s = (1, 1)             |  e* = (1, 0, 0)   |  Flip Bit 1
        </text>
        <text x="612" y="354" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#1d4ed8">
          s = (1, 0)             |  e* = (0, 1, 0)   |  Flip Bit 2
        </text>
        <text x="612" y="368" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#1d4ed8">
          s = (0, 1)             |  e* = (0, 0, 1)   |  Flip Bit 3
        </text>

        <text x="595" y="398" font-family="'EB Garamond', serif" font-style="italic" font-size="13.5" fill="#111827">
          Red dashed path shows minimum weight d_min = 3 transition (000 → 100 → 101 → 111); radius t = ⌊(3−1)/2⌋ = 1.
        </text>
      </svg>
    `,
    latexCode: `\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{tikz, tikz-3dplot, amsmath, amssymb}
\\usetikzlibrary{arrows.meta, calc, backgrounds}

\\begin{document}
\\tdplotsetmaincoords{70}{115}
\\begin{tikzpicture}[tdplot_main_coords, scale=3.2, >=Stealth]
  % Define 8 vertices of F_2^3
  \\coordinate (v000) at (0,0,0);
  \\coordinate (v100) at (1,0,0);
  \\coordinate (v010) at (0,1,0);
  \\coordinate (v001) at (0,0,1);
  \\coordinate (v110) at (1,1,0);
  \\coordinate (v101) at (1,0,1);
  \\coordinate (v011) at (0,1,1);
  \\coordinate (v111) at (1,1,1);

  % Cube edges
  \\draw[thick, blue!75!black] (v000) -- (v100) (v000) -- (v010) (v000) -- (v001);
  \\draw[dashed, gray] (v100) -- (v110) (v010) -- (v110) (v010) -- (v011) (v001) -- (v011) (v001) -- (v101) (v100) -- (v101);
  \\draw[thick, teal!75!black] (v110) -- (v111) (v101) -- (v111) (v011) -- (v111);

  % Highlight d_H = 3 path
  \\draw[very thick, red!80!black, dashed, ->] (v000) -- (v100) -- (v101) -- (v111);

  % Codeword nodes
  \\node[circle, fill=blue!80!black, text=white, inner sep=2.5pt, font=\\bfseries\\scriptsize] at (v000) {000};
  \\node[circle, fill=teal!80!black, text=white, inner sep=2.5pt, font=\\bfseries\\scriptsize] at (v111) {111};
\\end{tikzpicture}
\\end{document}`
  },

  /* ------------------------------------------------------------------------
   * TOPIC 3: TOPOLOGY, FANO PLANE [[7,1,3]] STEANE & IBM HEAVY-HEX
   * ------------------------------------------------------------------------ */
  topology: {
    figNum: "Figure 3.1",
    title: "LaTeX TikZ Vector Figure: Projective Fano Plane $\\text{PG}(2,2)$ $[[7,1,3]]$ Steane Code & IBM Heavy-Hex $SU(2^n)$ Lattice",
    caption:
      "Dual LaTeX TikZ figure comparing (a) the 7-point, 7-line projective Fano plane $\\text{PG}(2,2)$ defining the self-dual $[[7,1,3]]$ Steane CSS code ($H_X = H_Z$, weight-4 plaquettes $S_1, S_2, S_3$) and (b) IBM Quantum's degree-2/3 Heavy-Hex superconducting topology engineered to suppress ZZ crosstalk and frequency collisions during $SU(4)$ CNOT/ECR syndrome extraction.",
    packages: "\\usepackage{tikz, amsmath, amssymb}\\usetikzlibrary{arrows.meta, calc, shapes.geometric, positioning}",
    svgMarkup: `
      <svg class="tikz-vector-svg tikz-gif-active" viewBox="0 0 980 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LaTeX TikZ Fano Plane Steane Code and IBM Heavy Hex Topology">
        <rect x="12" y="12" width="956" height="446" rx="4" fill="#ffffff" stroke="#111827" stroke-width="1.2"/>
        <text x="28" y="36" font-family="'EB Garamond', 'Times New Roman', serif" font-size="14" font-style="italic" fill="#374151">
          \\begin{tikzpicture}[scale=1.0] — Projective Geometry PG(2,2) [[7,1,3]] Steane Code vs. IBM Heavy-Hex Lattice
        </text>

        <!-- ======================== LEFT PANEL: FANO PLANE [[7,1,3]] STEANE CODE ======================== -->
        <rect x="26" y="48" width="450" height="392" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
        <text x="251" y="72" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="15.5" fill="#0f172a">
          (a) Fano Plane PG(2,2): [[7, 1, 3]] Steane CSS Code
        </text>

        <!-- Coloured Plaquette Quadrilaterals (S1, S2, S3) -->
        <!-- Top apex q3=(251, 106), Left-bottom q5=(111, 336), Right-bottom q6=(391, 336)
             Midpoints: q1=(181, 221) [left], q2=(321, 221) [right], q4=(251, 336) [bottom], Center q7=(251, 259) -->
        <!-- Plaquette S1 = {1,3,5,7} -->
        <polygon points="251,106 181,221 111,336 251,259" fill="#dbeafe" fill-opacity="0.55" stroke="none"/>
        <!-- Plaquette S2 = {2,3,6,7} -->
        <polygon points="251,106 321,221 391,336 251,259" fill="#d1fae5" fill-opacity="0.55" stroke="none"/>
        <!-- Plaquette S3 = {4,5,6,7} -->
        <polygon points="111,336 251,336 391,336 251,259" fill="#fef3c7" fill-opacity="0.65" stroke="none"/>

        <!-- Incircle of Fano Plane (7th projective line {1, 2, 4}) -->
        <circle class="tikz-fano-circle" cx="251" cy="259" r="77" fill="none" stroke="#b91c1c" stroke-width="2" stroke-dasharray="6,3"/>

        <!-- 3 Outer Triangle Lines & 3 Medians -->
        <polygon points="251,106 111,336 391,336" fill="none" stroke="#111827" stroke-width="2.2"/>
        <line x1="251" y1="106" x2="251" y2="336" stroke="#111827" stroke-width="1.8"/>
        <line x1="111" y1="336" x2="321" y2="221" stroke="#111827" stroke-width="1.8"/>
        <line x1="391" y1="336" x2="181" y2="221" stroke="#111827" stroke-width="1.8"/>

        <!-- Stabilizer Labels inside Plaquettes -->
        <text x="180" y="268" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e40af">S₁(1,3,5,7)</text>
        <text x="322" y="268" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#065f46">S₂(2,3,6,7)</text>
        <text x="251" y="318" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#92400e">S₃(4,5,6,7)</text>

        <!-- 7 Qubit Vertices of Steane Code -->
        <!-- q3 (011) top -->
        <circle cx="251" cy="106" r="15" fill="#1d4ed8" stroke="#111827" stroke-width="1.8"/>
        <text x="251" y="110" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₃</text>
        <text x="295" y="108" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#1e3a8a">(011)</text>

        <!-- q1 (001) mid-left -->
        <circle cx="181" cy="221" r="15" fill="#1d4ed8" stroke="#111827" stroke-width="1.8"/>
        <text x="181" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₁</text>
        <text x="135" y="220" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#1e3a8a">(001)</text>

        <!-- q2 (010) mid-right -->
        <circle cx="321" cy="221" r="15" fill="#059669" stroke="#111827" stroke-width="1.8"/>
        <text x="321" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₂</text>
        <text x="345" y="220" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#065f46">(010)</text>

        <!-- q5 (101) bottom-left -->
        <circle cx="111" cy="336" r="15" fill="#1d4ed8" stroke="#111827" stroke-width="1.8"/>
        <text x="111" y="340" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₅</text>
        <text x="64" y="342" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#1e3a8a">(101)</text>

        <!-- q4 (100) bottom-mid -->
        <circle cx="251" cy="336" r="15" fill="#d97706" stroke="#111827" stroke-width="1.8"/>
        <text x="251" y="340" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₄</text>
        <text x="251" y="366" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#92400e">(100)</text>

        <!-- q6 (110) bottom-right -->
        <circle cx="391" cy="336" r="15" fill="#059669" stroke="#111827" stroke-width="1.8"/>
        <text x="391" y="340" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₆</text>
        <text x="415" y="342" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#065f46">(110)</text>

        <!-- q7 (111) center -->
        <circle class="tikz-codeword-node" cx="251" cy="259" r="16" fill="#dc2626" stroke="#111827" stroke-width="2"/>
        <text x="251" y="263" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11.5" fill="#ffffff">q₇</text>

        <text x="251" y="394" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#111827">
          6 Generators: S₁..S₃ (X⊗⁴), S₄..S₆ (Z⊗⁴) | H_X H_Zᵀ = 0 (mod 2)
        </text>
        <text x="251" y="416" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13.5" fill="#374151">
          Center q₇=(111) belongs to all 3 plaquettes → unique syndrome s=(1,1,1)ᵀ.
        </text>

        <!-- ======================== RIGHT PANEL: IBM HEAVY-HEX LATTICE ======================== -->
        <rect x="494" y="48" width="460" height="392" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
        <text x="724" y="72" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="15.5" fill="#0f172a">
          (b) IBM Quantum Heavy-Hex Unit Cell &amp; SU(2ⁿ) Couplers
        </text>

        <!-- Heavy-Hex Hexagon Unit Cell (12-node heavy hexagon with corner degree-3 and edge degree-2 flag qubits) -->
        <!--
          6 Corner Data Qubits (Blue circles):
          C1=(654, 118), C2=(794, 118), C3=(864, 228), C4=(794, 338), C5=(654, 338), C6=(584, 228)
          6 Edge Flag/Bridge Qubits (Amber squares):
          M12=(724, 118), M23=(829, 173), M34=(829, 283), M45=(724, 338), M56=(619, 283), M61=(619, 173)
          Center Syndrome Ancilla (Crimson diamond) connected via flag couplers:
          ANC=(724, 228)
        -->
        <polygon points="654,118 794,118 864,228 794,338 654,338 584,228" fill="#eff6ff" fill-opacity="0.45" stroke="#1e293b" stroke-width="2.4"/>

        <!-- Internal Flag-to-Syndrome Couplers -->
        <line class="tikz-animated-path" x1="619" y1="173" x2="724" y2="228" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
        <line class="tikz-animated-path" x1="829" y1="173" x2="724" y2="228" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
        <line class="tikz-animated-path" x1="619" y1="283" x2="724" y2="228" stroke="#059669" stroke-width="2" stroke-dasharray="5,4"/>
        <line class="tikz-animated-path" x1="829" y1="283" x2="724" y2="228" stroke="#059669" stroke-width="2" stroke-dasharray="5,4"/>

        <!-- Exterior Heavy-Hex Spokes (showing degree <= 3) -->
        <line x1="654" y1="118" x2="620" y2="85" stroke="#64748b" stroke-width="2"/>
        <line x1="794" y1="118" x2="828" y2="85" stroke="#64748b" stroke-width="2"/>
        <line x1="864" y1="228" x2="912" y2="228" stroke="#64748b" stroke-width="2"/>
        <line x1="584" y1="228" x2="536" y2="228" stroke="#64748b" stroke-width="2"/>
        <line x1="654" y1="338" x2="620" y2="371" stroke="#64748b" stroke-width="2"/>
        <line x1="794" y1="338" x2="828" y2="371" stroke="#64748b" stroke-width="2"/>

        <!-- 6 Corner Data Qubits (Degree 3) -->
        <g fill="#1d4ed8" stroke="#111827" stroke-width="1.6">
          <circle cx="654" cy="118" r="13"/>
          <circle cx="794" cy="118" r="13"/>
          <circle cx="864" cy="228" r="13"/>
          <circle cx="794" cy="338" r="13"/>
          <circle cx="654" cy="338" r="13"/>
          <circle cx="584" cy="228" r="13"/>
        </g>
        <g font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#ffffff" text-anchor="middle">
          <text x="654" y="122">D₁</text>
          <text x="794" y="122">D₂</text>
          <text x="864" y="232">D₃</text>
          <text x="794" y="342">D₄</text>
          <text x="654" y="342">D₅</text>
          <text x="584" y="232">D₆</text>
        </g>

        <!-- 6 Edge Flag/Bridge Qubits (Degree 2) -->
        <g fill="#f59e0b" stroke="#111827" stroke-width="1.5">
          <rect x="713" y="107" width="22" height="22" rx="3"/>
          <rect x="818" y="162" width="22" height="22" rx="3"/>
          <rect x="818" y="272" width="22" height="22" rx="3"/>
          <rect x="713" y="327" width="22" height="22" rx="3"/>
          <rect x="608" y="272" width="22" height="22" rx="3"/>
          <rect x="608" y="162" width="22" height="22" rx="3"/>
        </g>
        <g font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="9.5" fill="#111827" text-anchor="middle">
          <text x="724" y="122">F₁</text>
          <text x="829" y="177">F₂</text>
          <text x="829" y="287">F₃</text>
          <text x="724" y="342">F₄</text>
          <text x="619" y="287">F₅</text>
          <text x="619" y="177">F₆</text>
        </g>

        <!-- Central Syndrome Ancilla Qubit -->
        <circle class="tikz-codeword-node" cx="724" cy="228" r="16" fill="#dc2626" stroke="#111827" stroke-width="1.8"/>
        <text x="724" y="232" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#ffffff">ANC</text>

        <!-- Legend & Lie Algebra Note -->
        <text x="724" y="394" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.8" fill="#111827">
          Max Degree Δ ≤ 3 (vs. Δ=4 Square Grid) | U_CR = exp(−i θ Z⊗X / 2) ∈ SU(4)
        </text>
        <text x="724" y="416" text-anchor="middle" font-family="'EB Garamond', serif" font-style="italic" font-size="13.5" fill="#374151">
          Flag qubits F_i catch weight-2 hook errors during syndrome extraction.
        </text>
      </svg>
    `,
    latexCode: `\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{tikz, amsmath, amssymb}

\\begin{document}
\\begin{tikzpicture}[scale=1.1, every node/.style={font=\\small}]
  % (a) Fano Plane [[7,1,3]] Steane Code
  \\coordinate (q3) at (0, 2.2);
  \\coordinate (q5) at (-2.0, -1.2);
  \\coordinate (q6) at (2.0, -1.2);
  \\coordinate (q1) at (-1.0, 0.5);
  \\coordinate (q2) at (1.0, 0.5);
  \\coordinate (q4) at (0, -1.2);
  \\coordinate (q7) at (0, -0.07);

  \\draw[thick, red!75!black, dashed] (q7) circle (1.13cm);
  \\draw[very thick] (q3) -- (q5) -- (q6) -- cycle;
  \\draw[thick] (q3) -- (q4) (q5) -- (q2) (q6) -- (q1);

  \\foreach \\p/\\lbl in {q1/1, q2/2, q3/3, q4/4, q5/5, q6/6, q7/7}
    \\node[circle, fill=blue!75!black, text=white, inner sep=2pt, font=\\bfseries\\scriptsize] at (\\p) {$q_{\\lbl}$};
\\end{tikzpicture}
\\end{document}`
  },

  /* ------------------------------------------------------------------------
   * TOPIC 4: QUANTUM CIRCUIT & STABILIZER SYNDROME EXTRACTION (QUANTIKZ)
   * ------------------------------------------------------------------------ */
  circuit: {
    figNum: "Figure 4.1",
    title: "LaTeX Quantikz Vector Figure: 3-Qubit GHZ Entanglement & Non-Destructive Stabilizer Syndrome Extraction",
    caption:
      "Publication-grade LaTeX Quantikz diagram of a 3-data-qubit + 2-ancilla-qubit fault-tolerant circuit. Stage I prepares the multipartite GHZ/repetition state $|\\psi\\rangle = \\alpha|000\\rangle + \\beta|111\\rangle$. Stage II injects a channel bit-flip error $X_1$. Stage III extracts parity syndromes $S_1 = Z_0 Z_1 I_2$ and $S_2 = I_0 Z_1 Z_2$ into ancillas $a_1, a_2$ without collapsing $\\alpha, \\beta$, triggering classical feed-forward recovery $X_1$.",
    packages: "\\usepackage{tikz, quantikz, amsmath, amssymb}",
    svgMarkup: `
      <svg class="tikz-vector-svg tikz-gif-active" viewBox="0 0 980 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LaTeX Quantikz Quantum Circuit and Stabilizer Syndrome Measurement">
        <rect x="12" y="12" width="956" height="446" rx="4" fill="#ffffff" stroke="#111827" stroke-width="1.2"/>
        <text x="28" y="36" font-family="'EB Garamond', 'Times New Roman', serif" font-size="14" font-style="italic" fill="#374151">
          \\begin{quantikz}[row sep=0.45cm, column sep=0.55cm] — Coherent GHZ Encoding, Noise Injection &amp; Ancilla Syndrome Extraction
        </text>

        <!-- Stage Barrier Headers -->
        <text x="235" y="66" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#1e3a8a">Stage I: Encoder U_enc</text>
        <text x="385" y="66" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#b91c1c">Stage II: Noise E</text>
        <text x="585" y="66" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#065f46">Stage III: Syndrome S₁, S₂</text>
        <text x="845" y="66" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#1d4ed8">Stage IV: Recovery</text>

        <!-- Vertical Barrier Dashed Lines -->
        <line x1="330" y1="54" x2="330" y2="386" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,4"/>
        <line x1="440" y1="54" x2="440" y2="386" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,4"/>
        <line x1="745" y1="54" x2="745" y2="386" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="5,4"/>

        <!-- ======================== 5 HORIZONTAL QUANTUM WIRES ======================== -->
        <!-- Wire y-coordinates: q0=105, q1=165, q2=225, a1=300, a2=360 -->
        <g stroke="#111827" stroke-width="1.6">
          <line x1="125" y1="105" x2="915" y2="105"/>
          <line x1="125" y1="165" x2="915" y2="165"/>
          <line x1="125" y1="225" x2="915" y2="225"/>
          <line x1="125" y1="300" x2="720" y2="300"/>
          <line x1="125" y1="360" x2="720" y2="360"/>
        </g>

        <!-- Animated wavefront cursor sweeping across circuit -->
        <line class="tikz-circuit-sweep" x1="200" y1="75" x2="200" y2="380" stroke="#0284c7" stroke-width="2.5" stroke-opacity="0.45"/>

        <!-- Left Ket Labels -->
        <g font-family="'EB Garamond', Georgia, serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="end">
          <text x="115" y="110">|q₀⟩ = |ψ⟩</text>
          <text x="115" y="170">|q₁⟩ = |0⟩</text>
          <text x="115" y="230">|q₂⟩ = |0⟩</text>
          <text x="115" y="305" fill="#065f46">|a₁⟩ = |0⟩</text>
          <text x="115" y="365" fill="#065f46">|a₂⟩ = |0⟩</text>
        </g>

        <!-- STAGE I: Hadamard H on q0 (x=175), CNOT(q0->q1) at x=235, CNOT(q0->q2) at x=285 -->
        <rect x="155" y="85" width="40" height="40" fill="#eff6ff" stroke="#111827" stroke-width="1.6"/>
        <text x="175" y="111" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="18" fill="#1e3a8a">H</text>

        <!-- CNOT q0 -> q1 -->
        <line x1="235" y1="105" x2="235" y2="177" stroke="#111827" stroke-width="1.8"/>
        <circle cx="235" cy="105" r="5.5" fill="#111827"/>
        <circle cx="235" cy="165" r="12" fill="#ffffff" stroke="#111827" stroke-width="1.8"/>
        <line x1="223" y1="165" x2="247" y2="165" stroke="#111827" stroke-width="1.6"/>
        <line x1="235" y1="153" x2="235" y2="177" stroke="#111827" stroke-width="1.6"/>

        <!-- CNOT q0 -> q2 -->
        <line x1="285" y1="105" x2="285" y2="237" stroke="#111827" stroke-width="1.8"/>
        <circle cx="285" cy="105" r="5.5" fill="#111827"/>
        <circle cx="285" cy="225" r="12" fill="#ffffff" stroke="#111827" stroke-width="1.8"/>
        <line x1="273" y1="225" x2="297" y2="225" stroke="#111827" stroke-width="1.6"/>
        <line x1="285" y1="213" x2="285" y2="237" stroke="#111827" stroke-width="1.6"/>

        <!-- STAGE II: Bit-Flip Error X_1 on q1 at x=385 -->
        <rect class="tikz-eve-box" x="363" y="143" width="44" height="44" rx="3" fill="#ffe4e6" stroke="#b91c1c" stroke-width="2"/>
        <text x="385" y="171" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="17" fill="#b91c1c">X₁</text>
        <text x="385" y="134" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#b91c1c">Bit-Flip Error</text>

        <!-- STAGE III: Syndrome Extraction S1 = Z0 Z1 (into a1) and S2 = Z1 Z2 (into a2) -->
        <!-- CNOT q0 -> a1 (x=485) -->
        <line x1="485" y1="105" x2="485" y2="312" stroke="#047857" stroke-width="1.8"/>
        <circle cx="485" cy="105" r="5.5" fill="#047857"/>
        <circle cx="485" cy="300" r="12" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <line x1="473" y1="300" x2="497" y2="300" stroke="#047857" stroke-width="1.6"/>
        <line x1="485" y1="288" x2="485" y2="312" stroke="#047857" stroke-width="1.6"/>

        <!-- CNOT q1 -> a1 (x=540) -->
        <line x1="540" y1="165" x2="540" y2="312" stroke="#047857" stroke-width="1.8"/>
        <circle cx="540" cy="165" r="5.5" fill="#047857"/>
        <circle cx="540" cy="300" r="12" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <line x1="528" y1="300" x2="552" y2="300" stroke="#047857" stroke-width="1.6"/>
        <line x1="540" y1="288" x2="540" y2="312" stroke="#047857" stroke-width="1.6"/>

        <!-- CNOT q1 -> a2 (x=595) -->
        <line x1="595" y1="165" x2="595" y2="372" stroke="#047857" stroke-width="1.8"/>
        <circle cx="595" cy="165" r="5.5" fill="#047857"/>
        <circle cx="595" cy="360" r="12" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <line x1="583" y1="360" x2="607" y2="360" stroke="#047857" stroke-width="1.6"/>
        <line x1="595" y1="348" x2="595" y2="372" stroke="#047857" stroke-width="1.6"/>

        <!-- CNOT q2 -> a2 (x=650) -->
        <line x1="650" y1="225" x2="650" y2="372" stroke="#047857" stroke-width="1.8"/>
        <circle cx="650" cy="225" r="5.5" fill="#047857"/>
        <circle cx="650" cy="360" r="12" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <line x1="638" y1="360" x2="662" y2="360" stroke="#047857" stroke-width="1.6"/>
        <line x1="650" y1="348" x2="650" y2="372" stroke="#047857" stroke-width="1.6"/>

        <!-- Ancilla Meters M_Z at x=700 -->
        <g transform="translate(682, 280)">
          <rect x="0" y="0" width="44" height="38" rx="2" fill="#ffffff" stroke="#111827" stroke-width="1.6"/>
          <path d="M 6 30 A 16 16 0 0 1 38 30" fill="none" stroke="#111827" stroke-width="1.3"/>
          <line x1="22" y1="30" x2="33" y2="12" stroke="#b91c1c" stroke-width="1.7"/>
        </g>
        <g transform="translate(682, 340)">
          <rect x="0" y="0" width="44" height="38" rx="2" fill="#ffffff" stroke="#111827" stroke-width="1.6"/>
          <path d="M 6 30 A 16 16 0 0 1 38 30" fill="none" stroke="#111827" stroke-width="1.3"/>
          <line x1="22" y1="30" x2="33" y2="12" stroke="#b91c1c" stroke-width="1.7"/>
        </g>

        <!-- Double Classical Feed-Forward Wires from Ancilla Meters to Recovery Gate X1 (x=820) -->
        <line x1="726" y1="297" x2="818" y2="297" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="726" y1="301" x2="822" y2="301" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="726" y1="357" x2="818" y2="357" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="726" y1="361" x2="822" y2="361" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="818" y1="359" x2="818" y2="187" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="822" y1="359" x2="822" y2="187" stroke="#1d4ed8" stroke-width="1.4"/>

        <text x="772" y="290" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#b91c1c">s₁ = 1</text>
        <text x="772" y="350" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#b91c1c">s₂ = 1</text>

        <!-- STAGE IV: Recovery Gate X_1^(s1 s2) on q1 at x=820 -->
        <rect x="796" y="143" width="48" height="44" rx="3" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
        <text x="820" y="170" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="16" fill="#1e3a8a">X₁</text>
        <text x="820" y="133" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#1d4ed8">s=(1,1) → Fix q₁</text>

        <!-- Right Output State Brace -->
        <text x="895" y="168" font-family="'EB Garamond', serif" font-weight="bold" font-size="15.5" fill="#047857">
          (|000⟩+|111⟩)/√2
        </text>
        <text x="895" y="188" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#065f46">
          Fidelity F = 1.00
        </text>

        <!-- Bottom Stabilizer Equation Summary -->
        <text x="490" y="426" text-anchor="middle" font-family="'EB Garamond', Georgia, serif" font-size="14.5" fill="#111827">
          Stabilizer Commutation:  S₁ = Z₀ Z₁ I₂,  S₂ = I₀ Z₁ Z₂.  Since {X₁, Z₁} = 0, error X₁ flips both syndromes to (s₁, s₂) = (1, 1) without measuring α or β!
        </text>
      </svg>
    `,
    latexCode: `\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{tikz}
\\usetikzlibrary{quantikz}

\\begin{document}
\\begin{quantikz}[row sep=0.45cm, column sep=0.5cm]
  \\lstick{$|q_0\\rangle = |0\\rangle$} & \\gate{H} & \\ctrl{1} & \\ctrl{2} \\slice{Noise} & \\qw & \\ctrl{3} & \\qw & \\qw & \\qw \\slice{Recovery} & \\qw & \\rstick[wires=3]{$\\frac{|000\\rangle+|111\\rangle}{\\sqrt{2}}$} \\\\
  \\lstick{$|q_1\\rangle = |0\\rangle$} & \\qw      & \\targ{}  & \\qw      & \\gate[style={fill=red!15}]{X_1} & \\qw & \\ctrl{2} & \\ctrl{3} & \\qw & \\gate[style={fill=blue!15}]{X_1} & \\qw \\\\
  \\lstick{$|q_2\\rangle = |0\\rangle$} & \\qw      & \\qw      & \\targ{}  & \\qw & \\qw & \\qw & \\qw & \\ctrl{2} & \\qw & \\qw \\\\
  \\lstick{$|a_1\\rangle = |0\\rangle$} & \\qw      & \\qw      & \\qw      & \\qw & \\targ{} & \\targ{} & \\qw & \\qw & \\meter{s_1=1} \\vcwire{-2} \\\\
  \\lstick{$|a_2\\rangle = |0\\rangle$} & \\qw      & \\qw      & \\qw      & \\qw & \\qw & \\qw & \\targ{} & \\targ{} & \\meter{s_2=1} \\vcwire{-3}
\\end{quantikz}
\\end{document}`
  },

  /* ------------------------------------------------------------------------
   * TOPIC 5: CLASSICAL ROUTING vs. QUANTUM BSM ENTANGLEMENT ROUTING (TIKZ)
   * ------------------------------------------------------------------------ */
  routing: {
    figNum: "Figure 5.1",
    title: "LaTeX TikZ Vector Figure: Classical Store-and-Forward OSPF vs. Quantum Bell-State Measurement (BSM) Entanglement Swapping",
    caption:
      "Comparative LaTeX TikZ network architecture diagram. Top: Classical Dijkstra/OSPF packet switching copies and buffers deterministic payloads at intermediate routers $R_1, R_2$ ($w_{\\text{path}} = \\sum w_i$). Bottom: Quantum Repeater routing establishes elementary Bell links $|\\Phi^+\\rangle$, performs joint CNOT+$H$ Bell-State Measurements (BSM) at $R_1, R_2$, and feeds forward 2 classical syndrome bits $(m_1, m_2)$ for Pauli frame recovery $X_B^{m_1} Z_B^{m_2}$.",
    packages: "\\usepackage{tikz, amsmath, amssymb}\\usetikzlibrary{arrows.meta, positioning, calc, decorations.pathmorphing, shapes.geometric}",
    svgMarkup: `
      <svg class="tikz-vector-svg tikz-gif-active" viewBox="0 0 980 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LaTeX TikZ Classical OSPF Routing vs Quantum BSM Entanglement Swapping">
        <defs>
          <marker id="tikz-arr-r1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#1d4ed8"/>
          </marker>
          <marker id="tikz-arr-r2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#047857"/>
          </marker>
          <marker id="tikz-arr-r3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
            <path d="M 0 1.2 L 9 5 L 0 8.8 L 2.2 5 z" fill="#b45309"/>
          </marker>
        </defs>

        <rect x="12" y="12" width="956" height="446" rx="4" fill="#ffffff" stroke="#111827" stroke-width="1.2"/>
        <text x="28" y="36" font-family="'EB Garamond', 'Times New Roman', serif" font-size="14" font-style="italic" fill="#374151">
          \\begin{tikzpicture}[&gt;=Stealth, scale=1.0] — Classical Dijkstra Store-and-Forward vs. Quantum BSM Entanglement Swapping
        </text>

        <!-- ======================== TOP PANEL: CLASSICAL DIJKSTRA ROUTING ======================== -->
        <rect x="26" y="48" width="928" height="162" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <text x="42" y="70" font-family="'EB Garamond', serif" font-weight="bold" font-size="15" fill="#0f172a">
          (a) Classical Packet Switching (Dijkstra Shortest Path): Store-and-Forward Buffer Copying  P* = arg min ∑ w(u,v) = 7 ms
        </text>

        <!-- Alternate higher-cost upper detour -->
        <path d="M 110 132 Q 490 60, 860 132" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
        <text x="490" y="88" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#64748b">
          Upper Detour: w(S, R₃) + w(R₃, D) = 6 + 6 = 12 ms (Pruned by Dijkstra)
        </text>

        <!-- Shortest Path Links: S -> R1 -> R2 -> D -->
        <line x1="145" y1="142" x2="345" y2="142" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#tikz-arr-r1)"/>
        <line x1="425" y1="142" x2="615" y2="142" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#tikz-arr-r1)"/>
        <line x1="695" y1="142" x2="825" y2="142" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#tikz-arr-r1)"/>

        <!-- Travelling Packet Boxes -->
        <rect class="tikz-pulse-node" x="225" y="132" width="36" height="18" rx="2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2"/>
        <rect class="tikz-pulse-node-delayed" x="505" y="132" width="36" height="18" rx="2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2"/>

        <text x="245" y="124" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e40af">w₁ = 2 ms</text>
        <text x="520" y="124" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e40af">w₂ = 2 ms</text>
        <text x="760" y="124" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#1e40af">w₃ = 3 ms</text>

        <!-- Nodes S, R1, R2, D -->
        <rect x="55" y="114" width="90" height="56" rx="4" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="100" y="138" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#1e3a8a">Source S</text>
        <text x="100" y="156" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10.5" fill="#1e293b">d[S] = 0</text>

        <rect x="348" y="114" width="78" height="56" rx="4" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="387" y="136" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#1e3a8a">Router R₁</text>
        <text x="387" y="152" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#047857">Copy RAM</text>
        <text x="387" y="165" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" fill="#475569">d[R₁]=2</text>

        <rect x="618" y="114" width="78" height="56" rx="4" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="657" y="136" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#1e3a8a">Router R₂</text>
        <text x="657" y="152" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#047857">Copy RAM</text>
        <text x="657" y="165" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9.5" fill="#475569">d[R₂]=4</text>

        <rect x="828" y="114" width="105" height="56" rx="4" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <text x="880" y="138" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#065f46">Dest D</text>
        <text x="880" y="156" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#047857">d*[D] = 7 ms</text>

        <text x="490" y="196" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#334155">
          Classical routers read, amplify, and duplicate bits in SRAM queues (impossible for unknown quantum states due to No-Cloning!).
        </text>

        <!-- ======================== BOTTOM PANEL: QUANTUM BSM ENTANGLEMENT ROUTING ======================== -->
        <rect x="26" y="222" width="928" height="220" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
        <text x="42" y="244" font-family="'EB Garamond', serif" font-weight="bold" font-size="15" fill="#064e3b">
          (b) Quantum Entanglement Routing: Elementary Bell Pairs |Φ⁺⟩ + Joint Repeater BSM (CNOT + H) + Classical Pauli Frame Feed-Forward
        </text>

        <!-- Step 3 Overarching End-to-End Teleported Entanglement Arc -->
        <path class="tikz-animated-path" d="M 105 298 Q 490 218, 875 298" fill="none" stroke="#047857" stroke-width="2.8" stroke-dasharray="9,5"/>
        <rect x="335" y="248" width="310" height="24" rx="3" fill="#ecfdf5" stroke="#059669" stroke-width="1.2"/>
        <text x="490" y="264" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14" fill="#065f46">
          Step 3: Swapped End-to-End Bell State |Φ⁺⟩_{AB} (w_AB = w₁ · w₂)
        </text>

        <!-- Alice Node A -->
        <rect x="46" y="298" width="130" height="78" rx="4" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="111" y="320" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14.5" fill="#1e3a8a">Alice (Node A)</text>
        <circle cx="111" cy="346" r="12" fill="#1d4ed8"/>
        <text x="111" y="350" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#ffffff">q_A</text>

        <!-- Elementary Link 1 Wave: q_A <-> q_R1 -->
        <path class="tikz-photon-wave" d="M 176 337 Q 192 320, 208 337 T 240 337 T 272 337 T 304 337 T 336 337 T 368 337" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="272" y="314" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#1e40af">
          Step 1a: |Φ⁺⟩_{A, R₁} (F₁)
        </text>

        <!-- Central Quantum Repeater Node R (Performing Joint BSM on R1, R2) -->
        <rect x="370" y="284" width="240" height="104" rx="5" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
        <text x="490" y="304" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14.5" fill="#92400e">
          Step 2: Quantum Repeater BSM
        </text>
        <!-- Qubits R1 and R2 inside Repeater -->
        <circle cx="412" cy="340" r="12" fill="#2563eb"/>
        <text x="412" y="344" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10" fill="#ffffff">R₁</text>

        <circle cx="568" cy="340" r="12" fill="#059669"/>
        <text x="568" y="344" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10" fill="#ffffff">R₂</text>

        <!-- Internal BSM Box: CNOT + H + M_Z -->
        <rect x="434" y="316" width="112" height="46" rx="3" fill="#ffffff" stroke="#b45309" stroke-width="1.4"/>
        <text x="490" y="335" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#92400e">CNOT₁₂ → H₁</text>
        <text x="490" y="352" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#b45309">M_Z → (m₁, m₂)</text>
        <text x="490" y="378" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#78350f">
          Projects onto {|Φ±⟩, |Ψ±⟩}
        </text>

        <!-- Elementary Link 2 Wave: q_R2 <-> q_B -->
        <path class="tikz-photon-wave" d="M 610 337 Q 626 320, 642 337 T 674 337 T 706 337 T 738 337 T 770 337 T 802 337" fill="none" stroke="#059669" stroke-width="2"/>
        <text x="706" y="314" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="13.5" fill="#065f46">
          Step 1b: |Φ⁺⟩_{R₂, B} (F₂)
        </text>

        <!-- Bob Node B -->
        <rect x="804" y="298" width="134" height="78" rx="4" fill="#ecfdf5" stroke="#047857" stroke-width="1.8"/>
        <text x="871" y="320" text-anchor="middle" font-family="'EB Garamond', serif" font-weight="bold" font-size="14.5" fill="#065f46">Bob (Node B)</text>
        <circle cx="842" cy="346" r="12" fill="#059669"/>
        <text x="842" y="350" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#ffffff">q_B</text>
        <rect x="864" y="330" width="64" height="32" rx="3" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
        <text x="896" y="350" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10.5" fill="#1e3a8a">X^{m₁}Z^{m₂}</text>

        <!-- Classical Feed-Forward Arrow from Repeater BSM to Bob's Pauli Gate -->
        <path d="M 490 388 L 490 416 L 896 416 L 896 364" fill="none" stroke="#b45309" stroke-width="1.8" stroke-dasharray="6,3" marker-end="url(#tikz-arr-r3)"/>
        <text x="690" y="410" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#92400e">
          Classical Feed-Forward Channel: 2 Syndrome Bits (m₁, m₂) ∈ {00, 01, 10, 11}
        </text>
      </svg>
    `,
    latexCode: `\\documentclass[tikz,border=10pt]{standalone}
\\usepackage{tikz, amsmath, amssymb}
\\usetikzlibrary{arrows.meta, positioning, decorations.pathmorphing}

\\begin{document}
\\begin{tikzpicture}[
    >=Stealth,
    qnode/.style={draw=blue!75!black, fill=blue!5, thick, rounded corners=2pt, minimum width=2.4cm, minimum height=1.3cm, align=center},
    repnode/.style={draw=orange!80!black, fill=orange!8, very thick, rounded corners=2pt, minimum width=3.8cm, minimum height=1.5cm, align=center},
    ebit/.style={decorate, decoration={snake, amplitude=2pt, segment length=9pt}, thick, teal!75!black}
]
  \\node[qnode] (A) {\\textbf{Alice ($A$)}\\\\Qubit $q_A$};
  \\node[repnode, right=3.2cm of A] (R) {\\textbf{Quantum Repeater $R$}\\\\BSM($R_1, R_2$): CNOT $\\to H$\\\\Outcome $(m_1, m_2) \\in \\{0,1\\}^2$};
  \\node[qnode, draw=teal!75!black, fill=teal!5, right=3.2cm of R] (B) {\\textbf{Bob ($B$)}\\\\Applies $X_B^{m_1} Z_B^{m_2}$};

  \\draw[ebit] (A) -- node[above=5pt] {$|\\Phi^+\\rangle_{A R_1}$} (R);
  \\draw[ebit] (R) -- node[above=5pt] {$|\\Phi^+\\rangle_{R_2 B}$} (B);
  \\draw[very thick, dashed, teal!80!black, <->] (A.north) to[bend left=28] node[above] {Swapped End-to-End Bell State $|\\Phi^+\\rangle_{AB}$} (B.north);
  \\draw[thick, dashed, orange!85!black, ->] (R.south) -- ++(0,-0.6) -| node[pos=0.25, below] {Classical 2-Bit Feed-Forward $(m_1, m_2)$} (B.south);
\\end{tikzpicture}
\\end{document}`
  }
};
