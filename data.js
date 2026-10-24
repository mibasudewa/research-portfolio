/**
 * ============================================================================
 * DATA.JS
 * CENTRALIZED ACADEMIC & PEDAGOGICAL CONTENT REPOSITORY
 * Author: M. Imansyah Basudewa, S.T., M.T.
 * Affiliation: Computer Engineering Graduate Researcher, Memorial University
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. THE 7 CORE RESEARCH PILLARS (WITH IDs FOR TREE & VENN DIAGRAM NAVIGATION)
 * ---------------------------------------------------------------------------- */
const researchPillars = [
  {
    id: "pillar-1",
    num: 1,
    code: "DOMAIN 01 | QIT",
    shortLabel: "1. Quantum Info Theory",
    classification: "FOUNDATIONAL QUANTUM",
    vennGroup: "Quantum & Info Theory",
    title: "Quantum Information Theory",
    abstract:
      "Characterization of Von Neumann entropy, quantum channel capacities, coherent information, and multipartite entanglement measures across noisy quantum memory and communication channels.",
    equation: "S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho) = -\\sum_{i} \\lambda_i \\log_2 \\lambda_i",
    eqLabel: "Von Neumann Entropy",
    projects: [
      "Quantum Channel Capacity Bounds",
      "Entanglement Distillation Metrics",
      "Degradable Pauli Channels"
    ]
  },
  {
    id: "pillar-2",
    num: 2,
    code: "DOMAIN 02 | QEC",
    shortLabel: "2. Error Correction (QEC)",
    classification: "FAULT TOLERANCE",
    vennGroup: "Central Intersection (Quantum + Topology + Coding)",
    title: "Error Correction & Fault Tolerant Computation",
    abstract:
      "Topological surface codes, stabilizer formalism, minimum weight perfect matching syndrome decoding, and low overhead triangle Hamming and Steane codes for fault tolerant logical gates.",
    equation: "S_i |\\psi\\rangle = +1|\\psi\\rangle, \\quad \\mathcal{S} = \\langle Z^{\\otimes 4}, X^{\\otimes 4} \\rangle",
    eqLabel: "Stabilizer Codeword Condition",
    projects: [
      "2D Rotated Surface Codes",
      "Triangle Hamming & 7 Steane Decoding",
      "Fault Tolerant Syndrome Extraction"
    ]
  },
  {
    id: "pillar-3",
    num: 3,
    code: "DOMAIN 03 | QCRYPTO",
    shortLabel: "3. Quantum Cryptography",
    classification: "SECURE NETWORKS",
    vennGroup: "Quantum & Communications Intersection",
    title: "Quantum Cryptography",
    abstract:
      "Device independent and prepare and measure Quantum Key Distribution (QKD), anonymous quantum network routing protocols, and information theoretic security bounds against coherent eavesdropping.",
    equation: "R \\ge I(A:B) - \\chi(B:E) = 1 - 2h_2(e_{\\text{bit}})",
    eqLabel: "Devetak Winter Secret Key Rate",
    projects: [
      "Anonymous Quantum Routing",
      "Game Theoretic Entanglement Distribution",
      "Finite Key QKD Security Bounds"
    ]
  },
  {
    id: "pillar-4",
    num: 4,
    code: "DOMAIN 04 | QML",
    shortLabel: "4. Quantum Machine Learning",
    classification: "VARIATIONAL ALGORITHMS",
    vennGroup: "Quantum Computation",
    title: "Quantum Machine Learning",
    abstract:
      "Parametrized Quantum Circuits (PQC), barren plateau mitigation in variational quantum algorithms (QAOA and VQE), and Hilbert space quantum kernel methods for combinatorial decoding.",
    equation: "U(\\boldsymbol{\\theta}) = \\prod_{\\ell=1}^{L} \\exp\\!\\left(-i \\frac{\\theta_\\ell}{2} P_\\ell\\right) W_\\ell, \\quad K(x,x') = |\\langle \\phi(x)|\\phi(x')\\rangle|^2",
    eqLabel: "PQC Ansatz & Quantum Kernel",
    projects: [
      "QAOA Routing Optimization",
      "Variational Syndrome Decoders",
      "Quantum Kernel Expressibility"
    ]
  },
  {
    id: "pillar-5",
    num: 5,
    code: "DOMAIN 05 | TOPOLOGY",
    shortLabel: "5. Group & Topology Theory",
    classification: "MATHEMATICAL PHYSICS",
    vennGroup: "Algebraic Topology & Group Theory",
    title: "Group and Topology Theory",
    abstract:
      "N qubit Pauli group operator algebras, non Abelian anyonic braiding statistics, unitary Lie group manifolds SU(2), and cellular chain complexes in homological algebra over orientable toric and planar surfaces.",
    equation: "\\partial_2 \\circ \\partial_1 = 0, \\quad H_1(\\mathcal{M}; \\mathbb{Z}_2) = \\ker(\\partial_1) / \\text{im}(\\partial_2)",
    eqLabel: "First Homology Group",
    projects: [
      "Homological Code Constructions",
      "Clifford Hierarchy Normalizers",
      "Unitary Group Topology SU(2)"
    ]
  },
  {
    id: "pillar-6",
    num: 6,
    code: "DOMAIN 06 | OPTICAL",
    shortLabel: "6. Optical Communications",
    classification: "PHOTONIC LAYER",
    vennGroup: "Physical Layer Communications",
    title: "Optical Communications",
    abstract:
      "Photonic quantum classical coexistence links, coherent optical QAM transmission, nonlinear Schrödinger fiber propagation modeling, and homodyne quantum receiver architectures.",
    equation: "\\frac{\\partial A}{\\partial z} + \\frac{\\alpha}{2}A + i\\frac{\\beta_2}{2}\\frac{\\partial^2 A}{\\partial t^2} = i\\gamma |A|^2 A",
    eqLabel: "Nonlinear Schrödinger Equation",
    projects: [
      "CV QKD over DWDM Fiber",
      "Coherent DSP Phase Recovery",
      "Single Photon Loss Modeling"
    ]
  },
  {
    id: "pillar-7",
    num: 7,
    code: "DOMAIN 07 | WIRELESS",
    shortLabel: "7. Wireless Communications",
    classification: "PHY & NETWORK INFO THEORY",
    vennGroup: "Physical Layer & Coding Theory",
    title: "Wireless Communications",
    abstract:
      "Massive MIMO spatial beamforming, multi user network information theory, LDPC and Polar channel coding, and doubly dispersive OFDM signal processing for next generation radio architectures.",
    equation: "C = \\log_2 \\det\\!\\left(I_{N_r} + \\frac{\\text{SNR}}{N_t} H H^\\dagger\\right) \\; \\text{[bits/s/Hz]}",
    eqLabel: "Telatar Ergodic MIMO Capacity",
    projects: [
      "Hybrid Precoding in mmWave MIMO",
      "LDPC and Quantum Stabilizer Duality",
      "OFDM Subcarrier Allocation"
    ]
  }
];

/* ----------------------------------------------------------------------------
 * 2. LEARN MENU: 5 COMPREHENSIVE MODULES WITH SUBSECTIONS (a) THROUGH (i)
 *    Each module includes:
 *    - Part A (Classical) & Part B (Quantum) extended prose
 *    - (a) Timeline of Fundamental Theory & Recent Research
 *    - (b) Core Idea & Open Research Questions
 *    - (c) Important Pioneers in the Theory
 *    - (d) Applications in Theory & Future Applications
 *    - (e) How Pioneers Got the Idea & Fun Facts
 *    - (f) Citations & References
 *    - (g) Worked Example with SVG Diagram Illustration
 *    - (h) Intuitive Example for High School Students
 *    - (i) 15 Basic Concept Questions & Answers (Q&A)
 * ---------------------------------------------------------------------------- */
const learnCurriculumModules = [
  /* ==========================================================================
   * MODULE 01: CLASSICAL & QUANTUM ERROR CORRECTION CODES
   * ========================================================================== */
  {
    id: "mod-ecc",
    num: "01",
    shortTitle: "01. Error Correction Codes",
    fullTitle: "Basic Theory in Classical and Quantum Error Correction Codes",
    summary:
      "From Boolean Hamming distance spheres and linear parity check matrices to the No Cloning Theorem, Steane [[7,1,3]], IBM Heavy Hex, and 2D topological surface stabilizer codes.",
    classicalTitle: "Part A: Classical Error Correction Theory",
    classicalContent: `
      <p>
        In classical digital communications over a noisy channel such as the Binary Symmetric Channel (BSC) with bit flip probability $p$, reliability is achieved by introducing structured algebraic redundancy. An $[n, k, d_{\\min}]$ binary linear block code $\\mathcal{C} \\subset \\mathbb{F}_2^n$ maps a $k$ bit message vector $\\mathbf{u} \\in \\mathbb{F}_2^k$ into an $n$ bit codeword $\\mathbf{c} = \\mathbf{u} G \\pmod 2$, where $G \\in \\mathbb{F}_2^{k \\times n}$ is the generator matrix.
      </p>
      <p>
        Every linear code possesses a dual nullspace defined by its $(n-k) \\times n$ parity check matrix $H$, satisfying the orthogonality identity $G H^T = \\mathbf{0} \\pmod 2$. When a corrupted vector $\\mathbf{r} = \\mathbf{c} \\oplus \\mathbf{e}$ arrives at the receiver, the decoder computes the $(n-k)$ bit syndrome $\\mathbf{s} = \\mathbf{r} H^T = \\mathbf{e} H^T \\pmod 2$, which depends strictly on the error pattern $\\mathbf{e}$ and not on the transmitted message $\\mathbf{c}$.
      </p>
      <div class="equation-box">
        $$G H^T = \\mathbf{0} \\pmod 2, \\qquad t = \\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor, \\qquad \\sum_{i=0}^{t} \\binom{n}{i} \\le 2^{n-k}$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Theorem 1.1: Hamming Distance &amp; Sphere Packing Bound</div>
        <p>
          The Hamming distance $d_H(\\mathbf{x}, \\mathbf{y}) = \\text{wt}(\\mathbf{x} \\oplus \\mathbf{y})$ counts differing coordinates on the Boolean hypercube $\\{0,1\\}^n$. Disjoint Hamming spheres of radius $t = \\lfloor(d_{\\min}-1)/2\\rfloor$ centered at each of the $2^k$ valid codewords pack inside $\\mathbb{F}_2^n$. The $[3,1,3]$ repetition code ($000$ and $111$) and the $[7,4,3]$ Hamming code are <strong>perfect codes</strong> that achieve exact equality in the Hamming bound.
        </p>
      </div>
    `,
    quantumTitle: "Part B: Quantum Error Correction (QEC) Theory",
    quantumContent: `
      <p>
        Extending error correction to quantum mechanics confronted physicists with three severe obstacles: (1) <strong>The No Cloning Theorem</strong> forbids duplicating an unknown quantum state $|\\psi\\rangle \\not\\mapsto |\\psi\\rangle^{\\otimes 3}$; (2) <strong>Continuous Errors</strong> occur in both amplitude $(\\theta)$ and phase $(\\phi)$; and (3) <strong>Measurement Collapse</strong> destroys coherent superpositions if data qubits are observed directly.
      </p>
      <p>
        Peter Shor (1995), Andrew Steane (1996), and Daniel Gottesman (1997) resolved all three obstacles via the <strong>Stabilizer Formalism</strong>. By encoding $k$ logical qubits into a $2^k$ dimensional subspace $\\mathcal{C}_{\\mathcal{S}}$ fixed by an Abelian subgroup $\\mathcal{S} = \\langle g_1, \\dots, g_{n-k} \\rangle \\subset \\mathcal{P}_n$ of the $n$ qubit Pauli group, ancilla syndrome circuits project continuous environmental noise onto discrete Pauli errors $E \\in \\{I, X, Z, Y\\}^{\\otimes n}$ without reading the logical state.
      </p>
      <div class="equation-box">
        $$S_i |\\psi_L\\rangle = +1|\\psi_L\\rangle, \\qquad H_{\\text{CSS}} = \\begin{pmatrix} H_X & \\mathbf{0} \\\\ \\mathbf{0} & H_Z \\end{pmatrix}, \\qquad H_X H_Z^T = \\mathbf{0} \\pmod 2$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 1.2: Knill Laflamme &amp; CSS Stabilizer Condition</div>
        <p>
          A stabilizer code with generators $\\mathcal{S}$ and normalizer (centralizer) $\\mathcal{N}(\\mathcal{S})$ has distance $d$ equal to the minimum weight of any operator in $\\mathcal{N}(\\mathcal{S}) \\setminus \\mathcal{S}$. The Steane $[[7,1,3]]$ code uses two copies of the classical $[7,4,3]$ Hamming parity check matrix ($H_X = H_Z = H_{[7,4,3]}$) to correct any single qubit $X, Z,$ or $Y$ error.
        </p>
      </div>
    `,
    timeline: [
      { year: "1948 to 1950", title: "Shannon & Hamming Foundations", desc: "Claude Shannon proves noisy channel coding theorem; Richard Hamming invents the [7,4,3] single error correcting code at Bell Labs." },
      { year: "1960 to 1962", title: "Reed Solomon & Gallager LDPC", desc: "Algebraic polynomial codes and Robert Gallager's sparse Low Density Parity Check (LDPC) graph codes." },
      { year: "1995 to 1997", title: "Shor [[9,1,3]], Steane [[7,1,3]] & Stabilizers", desc: "Shor and Steane prove quantum error correction is possible; Gottesman formulates the Pauli stabilizer group formalism." },
      { year: "1997 to 2002", title: "Kitaev Toric & Planar Surface Codes", desc: "Alexei Kitaev introduces topological quantum memory on 2D lattices where syndromes correspond to anyonic excitations." },
      { year: "2023 to 2026", title: "Break Even Logical Qubits & Quantum LDPC", desc: "Google Willow/Sycamore, IBM Heavy Hex qLDPC gross codes, and QuEra neutral atoms demonstrate below threshold logical error suppression." }
    ],
    ideasAndQuestions: {
      coreIdea:
        "Protect fragile information against local random faults by encoding logical degrees of freedom into global, nonlocal parity correlations (classical nullspaces or quantum entangled stabilizer subspaces) so that local noise reveals its location via orthogonal syndromes without revealing the message.",
      questions: [
        "How can we design low overhead Quantum LDPC and Triangle Hamming codes that match the high fault tolerance threshold of 2D Surface Codes (~1%) while encoding more than k=1 logical qubit per patch?",
        "What is the optimal real time decoding algorithm (Minimum Weight Perfect Matching vs. Union Find vs. Neural/Variational Decoders) that executes within superconducting qubit coherence times (< 1 microsecond per cycle)?",
        "How do hardware coupling topologies (such as IBM Heavy Hex vs. planar square grids) affect flag qubit requirements and hook error propagation?"
      ]
    },
    pioneers: [
      { name: "Richard W. Hamming (1915 to 1998)", role: "Bell Telephone Laboratories", contribution: "Invented the Hamming distance metric and the [7,4,3] perfect linear block code after frustration with Relay Computer punch card parity crashes." },
      { name: "Peter W. Shor (b. 1959)", role: "MIT / Bell Labs", contribution: "Constructed the first 9 qubit quantum error correcting code [[9,1,3]] concatenate bit flip and phase flip redundancy." },
      { name: "Andrew M. Steane", role: "University of Oxford", contribution: "Developed the [[7,1,3]] CSS quantum code based on the classical [7,4,3] Hamming Fano plane geometry." },
      { name: "Alexei Y. Kitaev & Daniel Gottesman", role: "Caltech & Perimeter / UMD", contribution: "Created topological surface codes and the Abelian Pauli stabilizer formalism that underpin modern fault tolerant architectures." }
    ],
    applications: {
      current: "5G NR Polar and LDPC wireless channels, RAID storage arrays, deep space telemetry (Voyager/Mars), ECC DRAM memory, and logical qubit syndrome cycles on IBM, Google, and Quantinuum processors.",
      future: "Fault tolerant million qubit quantum mainframes, magic state distillation factories for quantum chemistry simulation, and topological quantum memories immune to local thermal noise."
    },
    originAndFunFacts:
      "In 1947, Richard Hamming had weekend access to the Bell Model V electromechanical relay computer. Whenever a single punch card bit failed, the machine halted and ruined his entire weekend run. Hamming famously exclaimed: 'Damn it, if the machine can detect that an error has occurred, why can't it locate the position of the error and correct it?' That insight birthed overlapping parity checks. Half a century later, many physicists believed quantum error correction was fundamentally impossible due to the No Cloning Theorem until Peter Shor realized you can measure the *relative parity between qubits* ($Z_1 Z_2$) without measuring either qubit individually!",
    references: [
      "R. W. Hamming, Error Detecting and Error Correcting Codes, Bell System Technical Journal, vol. 29, no. 2, pp. 147 to 160, 1950.",
      "F. J. MacWilliams and N. J. A. Sloane, The Theory of Error Correcting Codes, North Holland, 1977.",
      "P. W. Shor, Scheme for reducing decoherence in quantum computer memory, Physical Review A, vol. 52, R2493, 1995.",
      "A. M. Steane, Error Correcting Codes in Quantum Theory, Physical Review Letters, vol. 77, no. 5, pp. 793 to 797, 1996.",
      "D. Gottesman, Stabilizer Codes and Quantum Error Correction, Ph.D. Thesis, Caltech, 1997.",
      "A. G. Fowler et al., Surface codes: Towards practical large scale quantum computation, Physical Review A, vol. 86, 032324, 2012."
    ],
    technicalExample: {
      title: "Worked Example: [7,4,3] Hamming & [[7,1,3]] Steane Parity Syndrome Localization",
      explanation:
        "Consider the 3x7 binary parity check matrix H whose columns are the binary representations of 1 through 7. If bit 5 (column 101) flips, the syndrome s = H e^T equals [1, 0, 1]^T = 5 in binary, pinpointing bit 5 immediately!",
      diagramSvg: `
        <svg viewBox="0 0 680 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="180" fill="#FFFFFF" stroke="#C8C4B8"/>
          <text x="20" y="30" font-family="Batang, serif" font-size="14" font-weight="bold" fill="#1E3A8A">Parity Check Matrix H (Columns = Binary 1 to 7) &amp; Syndrome Extraction</text>
          <rect x="20" y="45" width="290" height="115" fill="#F3F1EC" stroke="#1E293B"/>
          <text x="35" y="72" font-family="monospace" font-size="13" fill="#111827">Col: 1 2 3 4 5 6 7</text>
          <text x="35" y="96" font-family="monospace" font-size="13" fill="#1E3A8A">s1: [0 0 0 1 1 1 1]</text>
          <text x="35" y="118" font-family="monospace" font-size="13" fill="#1E3A8A">s2: [0 1 1 0 0 1 1]</text>
          <text x="35" y="140" font-family="monospace" font-size="13" fill="#1E3A8A">s3: [1 0 1 0 1 0 1]</text>
          <path d="M 325 102 L 375 102" stroke="#881337" stroke-width="2.5" marker-end="url(#arrow)"/>
          <rect x="385" y="45" width="275" height="115" fill="#FFF1F2" stroke="#881337"/>
          <text x="400" y="75" font-family="Batang, serif" font-size="13" font-weight="bold" fill="#881337">Fault on Qubit/Bit 5:</text>
          <text x="400" y="102" font-family="monospace" font-size="12.5" fill="#111827">e = [0, 0, 0, 0, 1, 0, 0]^T</text>
          <text x="400" y="126" font-family="monospace" font-size="12.5" fill="#881337">Syndrome s = H e = [1, 0, 1]^T</text>
          <text x="400" y="148" font-family="Batang, serif" font-size="12" fill="#065F46">Binary 101 = Position 5 Corrected!</text>
        </svg>
      `
    },
    highSchoolExample: {
      title: "High School Analogy: The Three Whispering Friends & The Secret Coin Game",
      content:
        "Imagine you want to send a yes/no answer (1 or 0) across a noisy stadium. If you shout '1' once, wind might make it sound like '0'. Instead, you shout '111' (three times). Even if one shout gets garbled so your friend hears '101', they take a majority vote (two 1s vs. one 0) and know you meant '1'! Now, how does Quantum Error Correction do this when you are not allowed to look at the secret coin inside a quantum box? Instead of opening the three boxes to see if they are Heads or Tails, you ask a referee two simple questions: (Question A) 'Do Box 1 and Box 2 match?' and (Question B) 'Do Box 2 and Box 3 match?' If the referee says 'Box 1 and 2 match, but Box 2 and 3 are different!', you know Box 3 was flipped—without ever finding out whether Box 1 and 2 were Heads or Tails!"
    },
    qaBank: [
      { q: "1. What is the Hamming weight of a binary vector?", a: "The Hamming weight wt(x) is the total number of non zero coordinates (1s) in the binary vector x." },
      { q: "2. How is Hamming distance defined between two codewords?", a: "The Hamming distance d_H(x, y) is the number of bit positions in which x and y differ, equal to wt(x ⊕ y)." },
      { q: "3. If a code has minimum distance d_min = 5, how many errors can it detect and correct?", a: "It can detect up to d_min - 1 = 4 errors and uniquely correct up to t = floor((5 - 1)/2) = 2 errors." },
      { q: "4. What is the role of the Generator Matrix G in an [n, k] linear code?", a: "G is a k × n matrix whose rows form a basis for the code subspace, mapping a k bit message u to an n bit codeword c = uG mod 2." },
      { q: "5. Why does the syndrome s = r H^T depend only on the error vector e?", a: "Because r H^T = (c ⊕ e)H^T = c H^T ⊕ e H^T = 0 ⊕ e H^T = e H^T, since every valid codeword lies in the nullspace of H." },
      { q: "6. What is a 'Perfect Code' in coding theory?", a: "A code that achieves equality in the Hamming Sphere Packing Bound, meaning Hamming balls of radius t around codewords partition the entire space F_2^n with no wasted vectors." },
      { q: "7. Why can't we simply copy a qubit |ψ⟩ → |ψ⟩|ψ⟩|ψ⟩ for repetition coding?", a: "The No Cloning Theorem proves that no unitary operation can duplicate an arbitrary unknown quantum superposition without violating linearity." },
      { q: "8. What is the difference between a bit flip (X) and a phase flip (Z) error on a qubit?", a: "A Pauli X error swaps |0⟩ ↔ |1⟩, whereas a Pauli Z error leaves |0⟩ unchanged and flips the relative phase of |1⟩ → -|1⟩." },
      { q: "9. How does a Pauli Y error relate to X and Z errors?", a: "Since Y = iXZ, a Pauli Y error is a simultaneous bit flip and phase flip on the same qubit." },
      { q: "10. What is an Abelian Stabilizer Group S?", a: "A subgroup of the n qubit Pauli group P_n where all generators commute with each other ([g_i, g_j] = 0) and -I is excluded." },
      { q: "11. How do ancilla qubits extract error syndromes without collapsing the logical qubit?", a: "By entangling data qubits with an ancilla via CNOT/CZ gates and measuring only the ancilla, projecting the eigenvalue (+1 or -1) of the collective parity operator." },
      { q: "12. What does the notation [[n, k, d]] mean for a quantum code?", a: "Double brackets denote a quantum code that uses n physical qubits to encode k logical qubits with minimum code distance d." },
      { q: "13. How is the Steane [[7,1,3]] code constructed?", a: "It is a Calderbank Shor Steane (CSS) code using the classical [7,4,3] Hamming parity check matrix H for both X stabilizers and Z stabilizers." },
      { q: "14. What are star (A_v) and plaquette (B_p) operators in a 2D Surface Code?", a: "Local weight 4 operators on a 2D grid: A_v = X⊗4 around a vertex detects Z phase errors, while B_p = Z⊗4 around a face detects X bit errors." },
      { q: "15. What is the Fault Tolerance Threshold Theorem?", a: "If the physical gate error rate p is below a threshold p_th (around 1% for surface codes), logical error rates can be suppressed exponentially by increasing code distance d." }
    ]
  },

  /* ==========================================================================
   * MODULE 02: CLASSICAL & QUANTUM CRYPTOGRAPHY
   * ========================================================================== */
  {
    id: "mod-crypto",
    num: "02",
    shortTitle: "02. Cryptography",
    fullTitle: "Basic Theory in Classical and Quantum Cryptography",
    summary:
      "Information theoretic secrecy versus computational trapdoors (RSA and Diffie Hellman), Shor's algorithm threat, and Quantum Key Distribution (BB84 and E91).",
    classicalTitle: "Part A: Classical Symmetric & Public Key Cryptography",
    classicalContent: `
      <p>
        Classical cryptography is divided into two paradigms: <strong>Symmetric Information Theoretic Secrecy</strong> and <strong>Asymmetric Computational Complexity Cryptography</strong>. In 1949, Claude Shannon proved that the Vernam One Time Pad ($C = M \\oplus K$) achieves perfect secrecy ($I(M; C) = 0$) if and only if the secret key $K$ is truly random, used only once, and has entropy $H(K) \\ge H(M)$.
      </p>
      <p>
        Because distributing long one time pads across global networks is logistically difficult, modern internet security (TLS, HTTPS, banking) relies on public key algorithms such as <strong>RSA</strong> (Rivest Shamir Adleman, 1977) and <strong>Diffie Hellman / Elliptic Curve Cryptography (ECC)</strong>. These systems assume that certain mathematical trapdoor functions—such as factoring $N = p \\cdot q$ or inverting $g^x \\bmod p$—are computationally intractable for classical computers.
      </p>
      <div class="equation-box">
        $$I(M; C) = H(M) - H(M \\mid C) = 0, \\qquad C \\equiv M^e \\pmod{p \\cdot q}$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Theorem 2.1: Vulnerability of Classical Public Key Trapdoors to Shor's Algorithm</div>
        <p>
          While the best classical General Number Field Sieve requires sub exponential time $\\exp(\\mathcal{O}((\\log N)^{1/3}(\\log\\log N)^{2/3}))$ to factor $N$, Peter Shor's quantum phase estimation algorithm finds the period $r$ of $f(x) = a^x \\bmod N$ in polynomial time $\\mathcal{O}((\\log N)^3)$, breaking RSA, DH, and ECDSA.
        </p>
      </div>
    `,
    quantumTitle: "Part B: Quantum Cryptography & QKD Protocols (BB84 & E91)",
    quantumContent: `
      <p>
        Quantum Key Distribution (QKD) solves the key distribution problem without computational assumptions by encoding random bits into single photons transmitted over an optical channel, backed by an authenticated classical public channel.
      </p>
      <p>
        In the <strong>BB84 protocol</strong> (Bennett &amp; Brassard, 1984), Alice randomly encodes each bit $b \\in \\{0,1\\}$ in either the Rectilinear $Z$ basis ($+$: $|0\\rangle, |1\\rangle$) or the Diagonal $X$ basis ($\\times$: $|+\\rangle, |-\\rangle$). Bob independently chooses $+$ or $\\times$ to measure each arriving photon. After transmission, Alice and Bob publicly announce their basis choices (not the bit values!) and keep only the ~50% sifted bits where their bases matched.
      </p>
      <div class="equation-box">
        $$R_{\\text{secret}} \\ge I(A:B) - \\chi(B:E) = 1 - 2 h_2(e_{\\text{bit}}), \\qquad e_{\\text{th}} \\approx 11.0\\%$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 2.2: Heisenberg Disturbance &amp; Ekert E91 Bell Monogamy</div>
        <p>
          Because $[Z, X] = 2iY \\neq 0$, an eavesdropper Eve cannot measure a photon without choosing a basis. When Eve guesses the wrong basis (50% of the time), she collapses the photon into a superposition that induces a 25% bit error rate (QBER) on Alice and Bob's sifted key. In Ekert's <strong>E91 protocol</strong>, security is verified via violation of the CHSH Bell inequality $|S_{\\text{CHSH}}| = 2\\sqrt{2} > 2$.
        </p>
      </div>
    `,
    timeline: [
      { year: "1917 & 1949", title: "Vernam One Time Pad & Shannon Secrecy", desc: "Gilbert Vernam invents XOR teletype cipher; Claude Shannon proves the mathematical condition H(K) >= H(M) for perfect secrecy." },
      { year: "1976 to 1977", title: "Diffie Hellman & RSA Public Key Era", desc: "Diffie, Hellman, Rivest, Shamir, and Adleman introduce asymmetric cryptography based on discrete logarithms and prime factorization." },
      { year: "1984", title: "BB84 Quantum Key Distribution", desc: "Charles Bennett and Gilles Brassard propose conjugate polarization coding for unconditionally secure quantum key distribution." },
      { year: "1991 to 1994", title: "Ekert E91 & Shor's Factoring Algorithm", desc: "Artur Ekert introduces entanglement based QKD via Bell's theorem; Peter Shor proves quantum computers break RSA and ECC." },
      { year: "2017 to 2026", title: "Micius Satellite QKD & Post Quantum Standards", desc: "Intercontinental satellite QKD over 1,200 km, Twin Field QKD exceeding 800 km fiber, and NIST Post Quantum Lattice Standards (ML KEM)." }
    ],
    ideasAndQuestions: {
      coreIdea:
        "Replace unproven assumptions about computational difficulty with fundamental laws of quantum physics—specifically the No Cloning Theorem, non commuting observables, and monogamy of entanglement—so that any passive wiretapping physically alters the signal.",
      questions: [
        "How can Continuous Variable QKD (CV QKD) coexist on the same WDM optical fiber alongside high power classical terabit data channels without being drowned by spontaneous Raman scattering noise?",
        "How do Device Independent QKD (DI QKD) protocols close side channel detector blinding attacks using loophole free Bell tests?",
        "How should hybrid cryptographic infrastructures combine QKD physical layer keys with Post Quantum Cryptography (Lattice ML KEM) for end to end network security?"
      ]
    },
    pioneers: [
      { name: "Stephen Wiesner (1942 to 2021)", role: "Columbia University", contribution: "Conceived 'Conjugate Coding' and unforgeable quantum banknotes in 1968, planting the seed for all of quantum cryptography." },
      { name: "Charles H. Bennett & Gilles Brassard", role: "IBM Research & Univ. de Montréal", contribution: "Co invented the BB84 QKD protocol while swimming in the ocean during a 1983 IEEE conference in Puerto Rico." },
      { name: "Artur K. Ekert (b. 1961)", role: "University of Oxford", contribution: "Invented entanglement based QKD (E91), connecting cryptographic security directly to Bell's inequality and nonlocality." },
      { name: "Claude E. Shannon (1916 to 2001)", role: "Bell Labs / MIT", contribution: "Established information theoretic cryptography and proved the optimality of the One Time Pad." }
    ],
    applications: {
      current: "Metro fiber QKD links for central banks, government diplomatic backbones, satellite to ground quantum encryption, and hardware Quantum Random Number Generators (QRNGs).",
      future: "Global quantum safe internet backbones, anonymous quantum voting and auction protocols, and blind quantum cloud computing."
    },
    originAndFunFacts:
      "In the late 1960s, graduate student Stephen Wiesner wrote a paper proposing 'Quantum Money'—banknotes embedded with 20 trapped photons polarized at random angles so counterfeiters could never copy them. His paper was rejected by journals for over a decade because reviewers thought it was science fiction! However, Wiesner told his college friend Charles Bennett about the idea. Years later, Bennett and Gilles Brassard realized that instead of trapping photons inside a dollar bill in a pocket, you could *send* those photons down a fiber optic cable to create a secret key—inventing BB84!",
    references: [
      "C. E. Shannon, Communication Theory of Secrecy Systems, Bell System Technical Journal, vol. 28, no. 4, pp. 656 to 715, 1949.",
      "S. Wiesner, Conjugate Coding, ACM SIGACT News, vol. 15, no. 1, pp. 78 to 88, 1983 (written c. 1970).",
      "C. H. Bennett and G. Brassard, Quantum Cryptography: Public Key Distribution and Coin Tossing, IEEE ICCSSP Bangalore, pp. 175 to 179, 1984.",
      "A. K. Ekert, Quantum Cryptography Based on Bell's Theorem, Physical Review Letters, vol. 67, no. 6, pp. 661 to 663, 1991.",
      "P. W. Shor and J. Preskill, Simple Proof of Security of the BB84 Quantum Key Distribution Protocol, Physical Review Letters, vol. 85, pp. 441 to 444, 2000."
    ],
    technicalExample: {
      title: "Worked Example: Why Eve's Intercept Resend Attack Causes Exactly 25% QBER",
      explanation:
        "Suppose Alice sends |0⟩ in the + basis, and Bob also measures in the + basis (a sifted key bit). If Eve intercepts in the + basis (50% chance), she measures 0 and resends |0⟩ (0% error for Bob). If Eve guesses the × basis (50% chance), she projects |0⟩ onto |+⟩ or |-⟩, and when Bob measures in +, he gets |1⟩ with 50% probability. Total QBER = 0.5(0) + 0.5(0.5) = 0.25 (25%)!",
      diagramSvg: `
        <svg viewBox="0 0 680 175" width="100%" height="175" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="175" fill="#FFFFFF" stroke="#C8C4B8"/>
          <text x="20" y="28" font-family="Batang, serif" font-size="14" font-weight="bold" fill="#1E3A8A">BB84 Intercept Resend Probability Tree (Alice Basis = +, Bob Basis = +)</text>
          <rect x="20" y="65" width="130" height="55" fill="#EFF6FF" stroke="#1E3A8A"/>
          <text x="85" y="90" text-anchor="middle" font-family="Batang, serif" font-size="12" font-weight="bold">Alice Sends |0⟩</text>
          <text x="85" y="108" text-anchor="middle" font-family="monospace" font-size="11">Basis: +</text>
          <line x1="150" y1="85" x2="245" y2="55" stroke="#1E3A8A" stroke-width="2"/>
          <line x1="150" y1="100" x2="245" y2="130" stroke="#881337" stroke-width="2"/>
          <rect x="245" y="32" width="195" height="45" fill="#ECFDF5" stroke="#065F46"/>
          <text x="342" y="52" text-anchor="middle" font-family="monospace" font-size="11" fill="#065F46">50%: Eve picks + (Correct)</text>
          <text x="342" y="68" text-anchor="middle" font-family="monospace" font-size="11">Bob gets 0 (0% Error)</text>
          <rect x="245" y="105" width="195" height="52" fill="#FFF1F2" stroke="#881337"/>
          <text x="342" y="125" text-anchor="middle" font-family="monospace" font-size="11" fill="#881337">50%: Eve picks × (Wrong!)</text>
          <text x="342" y="144" text-anchor="middle" font-family="monospace" font-size="11">State becomes |+⟩ or |-⟩</text>
          <line x1="440" y1="131" x2="495" y2="131" stroke="#881337" stroke-width="2"/>
          <rect x="495" y="95" width="165" height="65" fill="#FFF1F2" stroke="#881337"/>
          <text x="577" y="118" text-anchor="middle" font-family="Batang, serif" font-size="12" font-weight="bold" fill="#881337">Bob Measures in +</text>
          <text x="577" y="136" text-anchor="middle" font-family="monospace" font-size="11">50% Bit Flip Error!</text>
          <text x="577" y="152" text-anchor="middle" font-family="Batang, serif" font-size="11" font-weight="bold">Total QBER = 25%</text>
        </svg>
      `
    },
    highSchoolExample: {
      title: "High School Analogy: Polarized Sunglasses & The Self Destructing Postcard",
      content:
        "Imagine Alice sends Bob secret messages using light flashes through polarized sunglasses. Some sunglasses have vertical/horizontal slits (+), and others have diagonal slits (×). If Alice sends a Vertical flash and Bob wears + sunglasses, he sees it with 100% certainty. If Bob wears × sunglasses by mistake, the flash splits randomly 50/50! Now suppose a spy named Eve sits in the middle. Eve doesn't know which sunglasses Alice used! Whenever Eve wears the wrong sunglasses, she permanently scrambles the light's angle. When Alice and Bob compare a tiny sample of their results over the phone, they immediately see a 25% error spike and catch Eve red handed!"
    },
    qaBank: [
      { q: "1. What is the difference between symmetric and asymmetric cryptography?", a: "Symmetric encryption uses the same secret key for encryption and decryption (e.g., AES, OTP), whereas asymmetric encryption uses a public key to encrypt and a private key to decrypt (e.g., RSA)." },
      { q: "2. What three conditions are required for the One Time Pad to be unbreakable?", a: "The key must be truly random, at least as long as the message, and never reused in whole or in part." },
      { q: "3. Which mathematical problem secures the RSA cryptosystem?", a: "The computational difficulty of factoring the product N = p · q of two large prime numbers." },
      { q: "4. Why does Shor's quantum algorithm threaten RSA and Diffie Hellman?", a: "Because Shor's algorithm uses the Quantum Fourier Transform to find the period of modular exponentiation in polynomial time O((log N)^3)." },
      { q: "5. Does Shor's algorithm break symmetric AES-256 encryption?", a: "No. Quantum computers only achieve a quadratic speedup via Grover's search on symmetric ciphers, reducing AES-256 effective security to 128 bits, which remains safe." },
      { q: "6. What are the four quantum states used in the BB84 protocol?", a: "The rectilinear Z basis states {|0⟩, |1⟩} and the diagonal X basis states {|+⟩ = (|0⟩+|1⟩)/√2, |-⟩ = (|0⟩-|1⟩)/√2}." },
      { q: "7. Why do Alice and Bob discard roughly 50% of their raw bits during BB84 sifting?", a: "Because they choose their + and × bases independently at random, so their bases only match half the time." },
      { q: "8. Do Alice and Bob announce their secret bit values over the public channel during sifting?", a: "Never! They only announce which basis (+ or ×) they used for each time slot, plus a small sacrificed subset of bits to estimate QBER." },
      { q: "9. What is QBER in Quantum Key Distribution?", a: "Quantum Bit Error Rate: the fraction of mismatched bits in the sifted key between Alice and Bob." },
      { q: "10. What is the Shor Preskill QBER threshold for BB84?", a: "Approximately 11.0%. Below 11% QBER, Alice and Bob can distill a provably secret key; above 11%, Eve may hold too much information." },
      { q: "11. What are the two classical post processing steps after BB84 sifting?", a: "Information Reconciliation (classical error correction to fix channel errors) and Privacy Amplification (universal hashing to erase Eve's partial information)." },
      { q: "12. How does Ekert's E91 protocol differ from BB84?", a: "E91 uses entangled Bell pairs shared between Alice and Bob and verifies security by testing the violation of the CHSH Bell inequality." },
      { q: "13. What is a Photon Number Splitting (PNS) attack?", a: "When a weak laser pulse accidentally emits 2+ identical photons, Eve can split off one photon and store it without disturbing the photon reaching Bob." },
      { q: "14. How do Decoy State protocols defeat the Photon Number Splitting attack?", a: "Alice randomly varies the mean photon intensity of her laser pulses, allowing her to detect any selective attenuation of single photon vs. multi photon pulses." },
      { q: "15. What is Post Quantum Cryptography (PQC) compared to QKD?", a: "PQC uses classical mathematical problems (like high dimensional lattices) believed hard for quantum computers, while QKD uses quantum physics at the optical layer." }
    ]
  },

  /* ==========================================================================
   * MODULE 03: CLASSICAL & QUANTUM NETWORKS
   * ========================================================================== */
  {
    id: "mod-networks",
    num: "03",
    shortTitle: "03. Classical & Quantum Networks",
    fullTitle: "Basic Theory in Classical and Quantum Networks",
    summary:
      "Layered packet switching and optical EDFA amplification versus quantum repeaters, Bell state entanglement swapping, quantum memories, and teleportation.",
    classicalTitle: "Part A: Classical Telecommunications & Optical Networks",
    classicalContent: `
      <p>
        Classical communication networks are organized into modular protocol stacks (the 7 layer OSI model and 5 layer TCP/IP suite). At the physical layer, long haul transoceanic fibers suffer exponential Beer Lambert optical attenuation $P(L) = P_0 \\cdot 10^{-\\alpha L / 10}$ (typically $\\alpha \\approx 0.2\\text{ dB/km}$ at $\\lambda = 1550\\text{ nm}$).
      </p>
      <p>
        Classical networks overcome fiber attenuation by placing <strong>Erbium Doped Fiber Amplifiers (EDFAs)</strong> or optoelectronic regenerators every 50 to 80 km. Routers read packet headers deterministically, store packets in electronic RAM buffers, and retransmit lost packets via Automatic Repeat Request (ARQ).
      </p>
      <div class="equation-box">
        $$P_{\\text{rx}}(L) = P_{\\text{tx}} \\cdot 10^{-\\alpha L / 10}, \\qquad G_{\\text{EDFA}} = \\frac{P_{\\text{out}}}{P_{\\text{in}}}$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Classical Store and Forward &amp; Optical Amplification</div>
        <p>
          Because classical bits are macroscopic electromagnetic states containing millions of photons per pulse, copying headers, buffering packets, and stimulated emission amplification preserve digital integrity across thousands of kilometers.
        </p>
      </div>
    `,
    quantumTitle: "Part B: Quantum Networks, Repeaters & Entanglement Swapping",
    quantumContent: `
      <p>
        In a <strong>Quantum Network</strong> (the Quantum Internet), the fundamental unit of currency is not a classical packet, but shared <strong>multipartite entanglement</strong> (e.g., Bell pairs $|\\Phi^+\\rangle = \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle)$). Because single photons cannot be amplified by EDFAs without injecting spontaneous emission noise that destroys quantum coherence (the No Cloning limit), direct fiber transmission beyond ~100 km has exponentially vanishing probability $\\eta = 10^{-\\alpha L / 10}$.
      </p>
      <p>
        To span continental distances, quantum networks divide a total distance $L$ into $N$ short elementary links $L_0 = L/N$ bridged by <strong>Quantum Repeaters</strong>. Each repeater stores entangled photons in quantum memories and performs a joint <strong>Bell State Measurement (BSM)</strong> to execute <strong>Entanglement Swapping</strong>,stitching short range entanglement into end to end entanglement.
      </p>
      <div class="equation-box">
        $$|\\Phi^+\\rangle_{AB} \\otimes |\\Phi^+\\rangle_{CD} \\xrightarrow{\\text{BSM}(B,C)} \\frac{1}{2} \\sum_{i=0}^{3} |\\Psi_i\\rangle_{BC} \\otimes \\left(I_A \\otimes \\sigma_i^D\\right)|\\Phi^+\\rangle_{AD}$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 3.1: Polynomial Scaling of Quantum Repeater Chains</div>
        <p>
          Equipped with heralded quantum memories and entanglement purification, a chain of $N$ quantum repeaters improves the entanglement distribution rate from exponential decay $\\mathcal{O}(e^{-\\alpha L})$ to polynomial scaling $\\mathcal{O}(L^{-\\gamma})$ in distance $L$.
        </p>
      </div>
    `,
    timeline: [
      { year: "1969 to 1974", title: "ARPANET & TCP/IP Protocol Suite", desc: "Vint Cerf and Bob Kahn design TCP/IP packet switching, forming the architecture of the classical Internet." },
      { year: "1993", title: "Quantum Teleportation & Entanglement Swapping", desc: "Bennett, Brassard, Crépeau, Jozsa, Peres, and Wootters discover quantum teleportation; Żukowski et al. propose entanglement swapping." },
      { year: "1998", title: "Briegel Dür Cirac Zoller Quantum Repeaters", desc: "Landmark paper introducing nested entanglement purification and swapping to beat exponential fiber loss." },
      { year: "2008 to 2018", title: "Kimble Quantum Internet & Wehner Stages", desc: "Jeff Kimble outlines the optical quantum internet; Stephanie Wehner's group defines the 6 functional stages of quantum networks." },
      { year: "2021 to 2026", title: "Multi Node Solid State & Telecom Quantum Networks", desc: "Delft QuTech demonstrates 3 node entanglement swapping and teleportation between non neighboring NV diamond processors." }
    ],
    ideasAndQuestions: {
      coreIdea:
        "Instead of transmitting fragile quantum states physically across every hop of a lossy network, pre distribute entanglement across short links, purify noisy Bell pairs, swap them at intermediate repeaters, and teleport quantum states end to end using only 2 classical bits!",
      questions: [
        "How do we design a link layer and network layer protocol stack for quantum networks when entanglement has a strict coherence lifetime (T1, T2) and expires if not consumed immediately?",
        "What is the optimal tradeoff between 1st generation repeaters (heralded memory + purification) and 3rd generation repeaters (tree cluster states / QEC encoded photonic packets)?",
        "How do we efficiently transduce microwave qubits (superconducting processors at 15 mK) into 1550 nm telecom optical photons?"
      ]
    },
    pioneers: [
      { name: "Hans J. Briegel, Wolfgang Dür, Ignacio Cirac & Peter Zoller", role: "University of Innsbruck / MPQ", contribution: "Invented the Quantum Repeater architecture in 1998, solving the exponential photon loss barrier." },
      { name: "Charles Bennett, Asher Peres, William Wootters et al.", role: "IBM / Technion / Williams College", contribution: "Discovered Quantum Teleportation in 1993, proving an unknown qubit can be transferred using 1 Bell pair + 2 classical bits." },
      { name: "H. Jeff Kimble & Stephanie Wehner", role: "Caltech & QuTech TU Delft", contribution: "Pioneered cavity QED optical interconnects and the architectural stack of the Quantum Internet." }
    ],
    applications: {
      current: "Metropolitan entangled testbeds (QuTech Netherlands, Boston Quantum Network, Argonne Qloop), distributed clock synchronization, and entanglement assisted QKD.",
      future: "Distributed modular quantum supercomputing, very long baseline optical interferometry (quantum telescopes), and blind cloud quantum execution."
    },
    originAndFunFacts:
      "At a 1993 workshop in Montreal, Asher Peres asked whether two observers sharing an entangled EPR pair could help transfer an unknown quantum state without violating relativity (since entanglement alone cannot send faster than light signals). Within a single afternoon, six physicists worked out that measuring the input qubit jointly with half of an EPR pair collapses the distant partner into the exact original state up to one of 4 Pauli rotations—requiring 2 classical bits sent at the speed of light to complete the 'Teleportation'!",
    references: [
      "C. H. Bennett et al., Teleporting an unknown quantum state via dual classical and Einstein Podolsky Rosen channels, Physical Review Letters, vol. 70, pp. 1895 to 1899, 1993.",
      "H. J. Briegel, W. Dür, J. I. Cirac, and P. Zoller, Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication, Physical Review Letters, vol. 81, pp. 5932 to 5935, 1998.",
      "H. J. Kimble, The Quantum Internet, Nature, vol. 453, pp. 1023 to 1030, 2008.",
      "S. Wehner, D. Elkouss, and R. Hanson, Quantum internet: A vision for the road ahead, Science, vol. 362, no. 6412, 2018."
    ],
    technicalExample: {
      title: "Worked Example: Entanglement Swapping Across a Repeater Node",
      explanation:
        "Node A and Repeater R share Bell pair |Φ+⟩_AB. Repeater R and Node D share |Φ+⟩_CD. Repeater R performs a CNOT + Hadamard Bell State Measurement on qubits (B, C) and sends the 2 bit outcome (m1, m2) to Node D. Node D applies Z^m1 X^m2 to recover |Φ+⟩_AD.",
      diagramSvg: `
        <svg viewBox="0 0 680 165" width="100%" height="165" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="165" fill="#FFFFFF" stroke="#C8C4B8"/>
          <text x="20" y="28" font-family="Batang, serif" font-size="14" font-weight="bold" fill="#1E3A8A">Entanglement Swapping: |Φ+⟩_AB ⊗ |Φ+⟩_CD → |Φ+⟩_AD via Bell State Measurement</text>
          <circle cx="80" cy="85" r="24" fill="#1E3A8A"/>
          <text x="80" y="90" text-anchor="middle" fill="#FFF" font-family="Batang, serif" font-size="12" font-weight="bold">Node A</text>
          <path d="M 104 85 Q 190 45 276 85" fill="none" stroke="#1E3A8A" stroke-width="2.5" stroke-dasharray="5,3"/>
          <text x="190" y="55" text-anchor="middle" font-family="monospace" font-size="11" fill="#1E3A8A">|Φ+⟩_AB</text>
          <rect x="276" y="55" width="128" height="60" fill="#FFF1F2" stroke="#881337" stroke-width="2"/>
          <text x="340" y="80" text-anchor="middle" font-family="Batang, serif" font-size="12" font-weight="bold" fill="#881337">Repeater BSM</text>
          <text x="340" y="98" text-anchor="middle" font-family="monospace" font-size="11" fill="#111827">Measures (B, C)</text>
          <path d="M 404 85 Q 490 45 576 85" fill="none" stroke="#1E3A8A" stroke-width="2.5" stroke-dasharray="5,3"/>
          <text x="490" y="55" text-anchor="middle" font-family="monospace" font-size="11" fill="#1E3A8A">|Φ+⟩_CD</text>
          <circle cx="600" cy="85" r="24" fill="#1E3A8A"/>
          <text x="600" y="90" text-anchor="middle" fill="#FFF" font-family="Batang, serif" font-size="12" font-weight="bold">Node D</text>
          <path d="M 80 112 Q 340 165 600 112" fill="none" stroke="#065F46" stroke-width="3"/>
          <text x="340" y="152" text-anchor="middle" font-family="Batang, serif" font-size="12.5" font-weight="bold" fill="#065F46">Resulting Long Range Entanglement |Φ+⟩_AD!</text>
        </svg>
      `
    },
    highSchoolExample: {
      title: "High School Analogy: The Relay Race of Magic Dice",
      content:
        "Suppose you have a pair of 'quantum magic dice' that always land on the same number when rolled, no matter how far apart they are. However, if you try to throw one die 1,000 kilometers through a foggy forest, it gets lost 99.99% of the time. Instead, you station a helper halfway at 500 km. You throw one magic die to the helper, and your friend at 1,000 km also throws one of their magic dice to the helper. The helper clashes the two middle dice together in a special way ('Entanglement Swapping'). Instantly, the die in your hand at 0 km and the die in your friend's hand at 1,000 km become linked as a brand new magic pair—even though neither die ever traveled the full 1,000 km!"
    },
    qaBank: [
      { q: "1. Why can't classical optical amplifiers (EDFAs) be used in quantum networks?", a: "EDFAs rely on stimulated emission (cloning photons), which inevitably adds spontaneous emission noise that destroys quantum superposition and entanglement." },
      { q: "2. What is the typical attenuation rate of standard 1550 nm telecom optical fiber?", a: "Approximately 0.18 to 0.20 dB/km, meaning 99% of single photons are lost after 100 km." },
      { q: "3. What are the four maximally entangled two qubit Bell states?", a: "|Φ±⟩ = (|00⟩ ± |11⟩)/√2 and |Ψ±⟩ = (|01⟩ ± |10⟩)/√2." },
      { q: "4. What is Quantum Teleportation?", a: "A protocol that transfers an unknown quantum state |ψ⟩ from Alice to Bob by consuming one shared Bell pair and transmitting 2 classical bits." },
      { q: "5. Does Quantum Teleportation transmit information faster than the speed of light?", a: "No. Without the 2 classical bits (which travel at or below the speed of light), Bob's reduced density matrix is completely random (I/2)." },
      { q: "6. What is Entanglement Swapping?", a: "Teleporting entanglement itself: performing a Bell State Measurement on one half of two independent Bell pairs (A-B and C-D) to entangle A and D." },
      { q: "7. Why are Quantum Memories essential in a Quantum Repeater?", a: "Because photon arrival across lossy links is probabilistic; memories store a successfully heralded Bell pair on Link 1 while waiting for Link 2 to succeed." },
      { q: "8. What is Entanglement Purification (Distillation)?", a: "A protocol that sacrifices several low fidelity noisy Bell pairs using bilateral CNOT gates and measurements to produce fewer high fidelity Bell pairs." },
      { q: "9. What is a Werner State?", a: "An isotropic mixture of a maximally entangled Bell state and the maximally mixed state: ρ_W = F|Φ+⟩⟨Φ+| + ((1-F)/3)(|Φ-⟩⟨Φ-| + |Ψ+⟩⟨Ψ+| + |Ψ-⟩⟨Ψ-|)." },
      { q: "10. What are the three generations of Quantum Repeaters?", a: "1G uses heralded entanglement + purification; 2G uses heralded entanglement + QEC for operational errors; 3G uses full QEC against both photon loss and gate errors." },
      { q: "11. What is T1 and T2 in quantum network hardware?", a: "T1 is the longitudinal energy relaxation time; T2 is the transverse phase coherence time during which a quantum memory can preserve entanglement." },
      { q: "12. What is Heralded Entanglement Generation?", a: "A scheme where detection of a photon at a central beam splitter provides an explicit classical 'herald' signal confirming the remote matter qubits are now entangled." },
      { q: "13. Why is linear optics Bell State Measurement limited to 50% efficiency without ancillary photons?", a: "By the Calsamiglia Lütkenhaus theorem, standard linear beam splitters and photon detectors can only distinguish 2 of the 4 Bell states deterministically." },
      { q: "14. What is Quantum Transduction?", a: "Coherently converting single quantum excitations between microwave frequencies (~5 GHz superconducting qubits) and optical telecom frequencies (~193 THz)." },
      { q: "15. What is a Multipartite GHZ state in a quantum network?", a: "|GHZ_N⟩ = (|0⟩⊗N + |1⟩⊗N)/√2, a resource state enabling conference key agreement, secret sharing, and anonymous quantum routing." }
    ]
  },

  /* ==========================================================================
   * MODULE 04: CLASSICAL & QUANTUM ROUTING
   * ========================================================================== */
  {
    id: "mod-routing",
    num: "04",
    shortTitle: "04. Classical & Quantum Routing",
    fullTitle: "Basic Theory in Classical and Quantum Routing",
    summary:
      "Additive shortest path algorithms (Dijkstra and Bellman Ford) versus non additive Werner fidelity routing, decoherence constraints, and game theoretic anonymous GHZ routing.",
    classicalTitle: "Part A: Classical Graph Routing (Dijkstra & Bellman Ford)",
    classicalContent: `
      <p>
        In classical data networks, routing protocols model the network topology as a directed or undirected weighted graph $G = (V, E, w)$, where each edge $e = (u,v) \\in E$ carries a positive additive cost $w(u,v)$ representing propagation delay, hop count, or inverse bandwidth.
      </p>
      <p>
        Link state protocols (such as OSPF using <strong>Dijkstra's Algorithm</strong>) and distance vector protocols (such as RIP/BGP using the <strong>Bellman Ford Equation</strong>) rely on the monotonicity and additivity of path weights $W(\\mathcal{P}) = \\sum_{e \\in \\mathcal{P}} w(e)$ to guarantee optimal substructure.
      </p>
      <div class="equation-box">
        $$D(u) = \\min_{v \\in \\mathcal{N}(u)} \\left\\{ w(u, v) + D(v) \\right\\}, \\qquad \\mathcal{O}(|E| + |V|\\log |V|)$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Theorem 4.1: Bellman's Principle of Optimality in Classical Routing</div>
        <p>
          If a shortest path from source $s$ to destination $d$ passes through intermediate router $k$, then the subpath from $k$ to $d$ must also be a shortest path. Classical bits do not lose fidelity while buffered at router $k$.
        </p>
      </div>
    `,
    quantumTitle: "Part B: Quantum Entanglement Routing & Anonymous Networks",
    quantumContent: `
      <p>
        Quantum entanglement routing violates classical routing assumptions in three fundamental ways: (1) <strong>Entanglement is consumed upon use</strong> (one Bell pair teleports at most one qubit); (2) <strong>Fidelity degrades multiplicatively</strong> across entanglement swaps; and (3) <strong>Memory decoherence</strong> causes waiting Bell pairs to decay exponentially as $e^{-\\Delta t / T_2}$.
      </p>
      <p>
        Furthermore, in untrusted multi agent quantum networks, routing must protect <strong>sender and receiver anonymity</strong> and account for strategic repeater incentives via <strong>Game Theory</strong>. Using shared $N$ partite $|\\text{GHZ}_N\\rangle$ states, parity protocols establish anonymous entanglement between $S$ and $R$ without revealing their topological identities.
      </p>
      <div class="equation-box">
        $$F_{\\text{path}}(\\mathcal{P}) = \\frac{1}{4} + \\frac{3}{4} \\prod_{e \\in \\mathcal{P}} \\left( \\frac{4 F_e - 1}{3} \\right) \\ge F_{\\text{th}}$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 4.2: Multi Objective Fidelity &amp; Anonymous Routing Bound</div>
        <p>
          By taking the logarithmic transform $\\tilde{w}_e = -\\ln((4F_e - 1)/3)$, multiplicative Werner fidelity decay maps into an additive path metric, enabling modified Dijkstra / multi commodity flow algorithms subject to the end to end QKD threshold $F_{\\text{path}} \\ge F_{\\text{th}} \\approx 0.89$.
        </p>
      </div>
    `,
    timeline: [
      { year: "1956 to 1959", title: "Bellman Ford & Dijkstra Algorithms", desc: "Richard Bellman, Lester Ford, and Edsger Dijkstra establish classical shortest path graph routing algorithms." },
      { year: "1988", title: "Chaum's Dining Cryptographers & Anonymity", desc: "David Chaum introduces unconditional sender/receiver anonymity via parity broadcasts." },
      { year: "2005 to 2007", title: "Christandl Wehner Anonymous Quantum Transmission", desc: "Matthias Christandl and Stephanie Wehner formulate quantum anonymous routing using multipartite GHZ entanglement." },
      { year: "2014 to 2019", title: "Van Meter & Pant Multi Path Entanglement Routing", desc: "Rodney Van Meter and Mihir Pant prove that local link state multi path swapping outperforms single shortest path quantum routing." },
      { year: "2023 to 2026", title: "Game Theoretic & QAOA Quantum Network Routing", desc: "Coalition resilient anonymous quantum routing and variational QAOA combinatorial path optimization." }
    ],
    ideasAndQuestions: {
      coreIdea:
        "Route ephemeral quantum entanglement across stochastic topologies by jointly optimizing end to end Werner fidelity, swapping concurrency, memory coherence windows, and cryptographic anonymity.",
      questions: [
        "How do we design distributed routing algorithms when link entanglement generation is probabilistic in each time slot, so the instantaneous graph topology changes every millisecond?",
        "How can game theoretic mechanism design incentivize selfish autonomous quantum repeaters to allocate high fidelity Bell pairs truthfully?",
        "How can we verify the fidelity of a multipartite GHZ routing state against active Byzantine repeaters without consuming the entire resource?"
      ]
    },
    pioneers: [
      { name: "Edsger W. Dijkstra (1930 to 2002)", role: "Mathematical Center Amsterdam / UT Austin", contribution: "Designed the greedy shortest path graph algorithm in 20 minutes at a café terrace in Amsterdam." },
      { name: "Rodney Van Meter", role: "Keio University", contribution: "Pioneered Quantum Network Routing architectures, QDijkstra metrics, and the Quantum Internet Research Group (QIRG)." },
      { name: "Stephanie Wehner & Matthias Christandl", role: "TU Delft & Univ. of Copenhagen", contribution: "Created information theoretically secure anonymous quantum transmission protocols." },
      { name: "Saikat Guha & Don Towsley", role: "Univ. of Arizona & UMass Amherst", contribution: "Established analytical percolation bounds and multipath entanglement routing capacities on grid topologies." }
    ],
    applications: {
      current: "SDN controlled QKD key relay networks, quantum network simulators (NetSquid, SeQUeNCe), and multipath entanglement scheduling.",
      future: "Autonomous inter domain Quantum BGP (QBGP), anonymous diplomatic quantum communications, and congestion free quantum cloud interconnects."
    },
    originAndFunFacts:
      "Edsger Dijkstra designed his famous shortest path algorithm in 1956 without a pencil or paper while sitting with his fiancée at a café in Amsterdam! He wanted a simple demonstration for the new ARMAC computer showing how to find the shortest rail route between Rotterdam and Groningen. Six decades later, quantum network researchers discovered that applying a simple logarithm $\\tilde{w}_e = -\\ln w_e$ to Werner entanglement parameters allows Dijkstra's 1956 café algorithm to find the highest fidelity quantum path!",
    references: [
      "E. W. Dijkstra, A note on two problems in connexion with graphs, Numerische Mathematik, vol. 1, pp. 269 to 271, 1959.",
      "R. Van Meter, Quantum Networking, Wiley ISTE, 2014.",
      "M. Pant et al., Routing entanglement in the quantum internet, npj Quantum Information, vol. 5, no. 25, 2019.",
      "M. Christandl and S. Wehner, Quantum Anonymous Transmissions, ASIACRYPT, LNCS vol. 3788, pp. 217 to 235, 2005."
    ],
    technicalExample: {
      title: "Worked Example: Comparing Two Paths by Multiplicative Werner Fidelity",
      explanation:
        "Suppose Path A has 2 hops with link fidelities F = 0.96 each (w = 0.9467), while Path B has 3 hops with F = 0.98 each (w = 0.9733). Path A yields w_total = (0.9467)^2 = 0.896 (F_path = 0.922), whereas Path B yields w_total = (0.9733)^3 = 0.922 (F_path = 0.941). Longer hop Path B wins due to higher per link fidelity!",
      diagramSvg: `
        <svg viewBox="0 0 680 165" width="100%" height="165" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="165" fill="#FFFFFF" stroke="#C8C4B8"/>
          <text x="20" y="26" font-family="Batang, serif" font-size="14" font-weight="bold" fill="#1E3A8A">Fidelity Aware Routing: 2 Hop Path A (F_e=0.96) vs. 3 Hop Path B (F_e=0.98)</text>
          <circle cx="70" cy="95" r="22" fill="#1E3A8A"/><text x="70" y="99" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="11">Src S</text>
          <circle cx="340" cy="52" r="18" fill="#881337"/><text x="340" y="56" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="10">R1</text>
          <path d="M 90 85 L 322 52 M 358 52 L 590 85" stroke="#881337" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="340" y="30" text-anchor="middle" font-family="monospace" font-size="11" fill="#881337">Path A (2 Hops, F=0.96): End Fidelity = 0.922</text>
          <circle cx="240" cy="130" r="18" fill="#065F46"/><text x="240" y="134" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="10">R2</text>
          <circle cx="440" cy="130" r="18" fill="#065F46"/><text x="440" y="134" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="10">R3</text>
          <path d="M 90 102 L 222 130 M 258 130 L 422 130 M 458 130 L 590 102" stroke="#065F46" stroke-width="2.8"/>
          <text x="340" y="156" text-anchor="middle" font-family="Batang, serif" font-size="12" font-weight="bold" fill="#065F46">Optimal Path B (3 Hops, F=0.98): End Fidelity = 0.941 Selected!</text>
          <circle cx="610" cy="95" r="22" fill="#1E3A8A"/><text x="610" y="99" text-anchor="middle" fill="#FFF" font-family="monospace" font-size="11">Dst D</text>
        </svg>
      `
    },
    highSchoolExample: {
      title: "High School Analogy: Delivering Melting Ice Cream Across Bridges",
      content:
        "In normal GPS routing (Classical Routing), if Route 1 takes 10 minutes and Route 2 takes 12 minutes, you always pick Route 1. Now imagine you are delivering a delicate ice cream sculpture (Quantum Entanglement) across a city of bridges. Every time you hand the ice cream to a new runner at a bridge, 5% of it melts, AND if a runner has to wait at a stoplight for more than 10 seconds, the whole sculpture melts completely! Even worse, once a bridge is crossed, that bridge disappears and has to be rebuilt! Quantum routing is like a super smart GPS that checks which bridges are currently standing, picks the runners with the coldest freezers (highest fidelity), and synchronizes the handoffs so the ice cream never waits in the sun!"
    },
    qaBank: [
      { q: "1. What is the fundamental difference between routing packets and routing entanglement?", a: "Classical packets carry user data hop by hop, whereas quantum routing pre establishes end to end entangled Bell pairs that are consumed during teleportation." },
      { q: "2. Why does a simple hop count metric fail in quantum routing?", a: "Because different links have vastly different Bell fidelities, generation rates, and memory coherence times; a 3 hop high fidelity path can beat a 2 hop noisy path." },
      { q: "3. How do you convert multiplicative Werner parameters w_e into an additive Dijkstra weight?", a: "By defining the non negative edge weight c_e = -ln(w_e), since minimizing ∑ (-ln w_e) is equivalent to maximizing ∏ w_e." },
      { q: "4. What happens if end to end fidelity F_path drops below 0.5?", a: "A two qubit Werner state with F ≤ 0.5 is separable (classically correlated only) and contains zero distillable quantum entanglement." },
      { q: "5. What is a 'Cutoff Time' in quantum repeater routing?", a: "A maximum waiting threshold τ_cut after which a stored Bell pair is discarded and regenerated because decoherence has degraded its fidelity too much." },
      { q: "6. How does Multipath Entanglement Routing improve throughput?", a: "By attempting entanglement generation across multiple edge disjoint paths simultaneously and dynamically swapping along whichever links succeed first." },
      { q: "7. What is Sender/Receiver Anonymity in a network?", a: "The cryptographic guarantee that even intermediate routers and eavesdroppers cannot determine which node initiated a message or which node received it." },
      { q: "8. How does the Dining Cryptographers (DC) net achieve classical anonymity?", a: "Every pair of participants shares a secret bit and broadcasts the XOR of their shared bits (flipped by the sender), revealing the parity message without revealing who flipped." },
      { q: "9. How does an N qubit GHZ state enable Anonymous Quantum Routing?", a: "By applying local phase flips and Hadamard measurements on nodes other than Sender and Receiver, collapsing the N party GHZ state into a private 2 party Bell pair." },
      { q: "10. What is a Nash Equilibrium in game theoretic routing?", a: "A strategy profile where no autonomous repeater node can increase its net utility by unilaterally changing its entanglement allocation or fidelity bid." },
      { q: "11. What is Braess's Paradox in network routing?", a: "A counterintuitive phenomenon where adding an extra link to a network with selfish routing agents can actually degrade overall network performance." },
      { q: "12. What is Virtual Topology in a quantum network?", a: "The graph of already entangled pairs stored in quantum memories, which may include non adjacent physical nodes created by prior entanglement swaps." },
      { q: "13. Why must purification and routing decisions be coupled?", a: "Because purifying on intermediate hops consumes multiple Bell pairs and extra time, changing link capacities and coherence budgets." },
      { q: "14. What is Contention in concurrent multi user quantum routing?", a: "When two source destination requests attempt to reserve the same limited quantum memory slot or elementary link Bell pair simultaneously." },
      { q: "15. How can QAOA assist in quantum network routing?", a: "The Quantum Approximate Optimization Algorithm can solve NP hard multi commodity path selection and scheduling problems formulated as Ising Hamiltonians." }
    ]
  },

  /* ==========================================================================
   * MODULE 05: CLASSICAL & QUANTUM INFORMATION THEORY
   * ========================================================================== */
  {
    id: "mod-infotheory",
    num: "05",
    shortTitle: "05. Information Theory",
    fullTitle: "Basic Theory in Classical and Quantum Information Theory",
    summary:
      "Shannon entropy, mutual information, and MIMO channel capacity versus density matrices, Von Neumann entropy, Holevo bound, and coherent quantum channel capacity.",
    classicalTitle: "Part A: Classical Shannon Information Theory",
    classicalContent: `
      <p>
        In his landmark 1948 monograph <em>A Mathematical Theory of Communication</em>, Claude E. Shannon proved that information is a measurable physical quantity independent of semantic meaning. For a discrete random variable $X$ with probability mass function $p(x)$, the <strong>Shannon Entropy</strong> $H(X) = -\\sum_x p(x)\\log_2 p(x)$ establishes the exact minimum number of bits per symbol required for lossless source compression (Shannon's First Theorem).
      </p>
      <p>
        For a noisy communication channel characterized by transition probabilities $p(y \\mid x)$, the <strong>Channel Capacity</strong> $C = \\max_{p(x)} I(X; Y)$ is the maximum mutual information between input $X$ and output $Y$. In wireless multiple antenna (MIMO) systems with channel matrix $H \\in \\mathbb{C}^{N_r \\times N_t}$, Emre Telatar extended Shannon's law to matrix channels via Singular Value Decomposition.
      </p>
      <div class="equation-box">
        $$H(X) = -\\sum_{x} p(x)\\log_2 p(x), \\qquad C_{\\text{MIMO}} = \\log_2 \\det\\!\\left(I_{N_r} + \\frac{\\text{SNR}}{N_t} H H^\\dagger\\right)$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Theorem 5.1: Shannon's Noisy Channel Coding Theorem</div>
        <p>
          For any transmission rate $R < C$, there exist block codes of length $n$ whose maximum likelihood decoding error probability $P_e^{(n)} \\to 0$ exponentially as $n \\to \\infty$. Conversely, for any $R > C$, reliable communication is impossible.
        </p>
      </div>
    `,
    quantumTitle: "Part B: Quantum Information Theory (Von Neumann & Holevo)",
    quantumContent: `
      <p>
        Quantum Information Theory generalizes classical probability distributions $p(x)$ to positive semidefinite, unit trace <strong>density matrices</strong> $\\rho = \\sum_i p_i |\\psi_i\\rangle\\langle\\psi_i|$. First defined by John von Neumann in 1932, the <strong>Von Neumann Entropy</strong> $S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho) = -\\sum_k \\lambda_k \\log_2 \\lambda_k$ quantifies the mixedness of a quantum state and gives the optimal Schumacher compression rate of a quantum source.
      </p>
      <p>
        Unlike classical joint entropy, which is always monotonic ($H(X, Y) \\ge H(X)$), quantum conditional entropy $S(A \\mid B) = S(\\rho_{AB}) - S(\\rho_B)$ can be <strong>strictly negative</strong> for entangled states (e.g., for a Bell state $|\\Phi^+\\rangle_{AB}$, $S(\\rho_{AB}) = 0$ while $S(\\rho_B) = 1$, so $S(A \\mid B) = -1$)!
      </p>
      <div class="equation-box">
        $$S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho), \\qquad I(X; Y) \\le \\chi = S\\!\\left(\\sum_x p_x \\rho_x\\right) - \\sum_x p_x S(\\rho_x)$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 5.2: Holevo's Theorem &amp; Lloyd Shor Devetak Capacity</div>
        <p>
          Although a single qubit state $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ is specified by continuous complex parameters $(\\alpha, \\beta)$, Alexander Holevo proved in 1973 that at most $\\chi \\le 1$ bit of classical information can ever be extracted by measuring a single unentangled qubit.
        </p>
      </div>
    `,
    timeline: [
      { year: "1927 to 1932", title: "Hartley & Von Neumann Density Matrix Entropy", desc: "John von Neumann introduces the density operator ρ and defines quantum entropy S(ρ) = -Tr(ρ ln ρ) in Mathematical Foundations of Quantum Mechanics." },
      { year: "1948", title: "Claude Shannon's Mathematical Theory of Communication", desc: "Shannon defines the 'bit', source entropy H(X), mutual information I(X;Y), and channel capacity C." },
      { year: "1973", title: "Holevo Bound & Strong Subadditivity", desc: "Alexander Holevo bounds accessible classical information in quantum states; Lieb and Ruskai prove strong subadditivity of quantum entropy." },
      { year: "1995 to 1999", title: "Schumacher Qubit Compression & HSW Theorem", desc: "Benjamin Schumacher coins the term 'qubit' and proves S(ρ) is the quantum compression limit; Holevo, Schumacher, and Westmoreland find classical capacity of quantum channels." },
      { year: "2002 to 2026", title: "Devetak Quantum Capacity & Superactivation", desc: "Lloyd, Shor, and Devetak establish quantum channel capacity via coherent information; Smith and Yard discover superactivation of zero capacity quantum channels." }
    ],
    ideasAndQuestions: {
      coreIdea:
        "Treat physical channels—whether electromagnetic MIMO antennas, nonlinear optical fibers, or noisy quantum gates—as mathematical maps transforming probability distributions or density matrices, and determine their ultimate operational capacity limits.",
      questions: [
        "Why is the coherent information of general non degradable quantum channels non additive, requiring regularization over infinite tensor powers?",
        "How can entanglement assistance (the Bennett Shor Smolin Thapliyal theorem) boost the classical communication capacity of highly noisy optical and thermal channels?",
        "What are the finite blocklength (second order) dispersion bounds for quantum communication over short packet noisy channels?"
      ]
    },
    pioneers: [
      { name: "Claude E. Shannon (1916 to 2001)", role: "Bell Labs / MIT", contribution: "Single handedly founded Information Theory in 1948, unifying communications, data compression, and coding." },
      { name: "John von Neumann (1903 to 1957)", role: "Institute for Advanced Study, Princeton", contribution: "Formulated Hilbert space operator theory, density matrices, and Von Neumann entropy." },
      { name: "Alexander S. Holevo (b. 1943)", role: "Steklov Mathematical Institute", contribution: "Proved the Holevo Bound (1973) and co proved the HSW capacity theorem for quantum channels." },
      { name: "Benjamin Schumacher & Charles Bennett", role: "Kenyon College & IBM Research", contribution: "Coined the word 'Qubit', proved noiseless quantum data compression, and established entanglement assisted capacities." }
    ],
    applications: {
      current: "ZIP/MP4/PNG data compression, 5G/Wi Fi 7 Massive MIMO spatial multiplexing, coherent DWDM fiber transceivers, and quantum state tomography.",
      future: "Superadditive quantum optical deep space receivers, entanglement assisted radar/sensing (Quantum Illumination), and holographic quantum gravity bounds."
    },
    originAndFunFacts:
      "When Claude Shannon asked mathematician John von Neumann what he should call his new measure of information uncertainty $-\\sum p_i \\log p_i$, von Neumann famously replied: 'You should call it Entropy, for two reasons. In the first place your uncertainty function has been used in statistical mechanics under that name. In the second place, and more important, no one really knows what entropy really is, so in a debate you will always have the advantage!' And in 1992, Benjamin Schumacher invented the word 'Qubit' during a car ride with William Wootters as a playful rhyme with the biblical unit of length 'cubit'!",
    references: [
      "C. E. Shannon, A Mathematical Theory of Communication, Bell System Technical Journal, vol. 27, pp. 379 to 423, 1948.",
      "J. von Neumann, Mathematische Grundlagen der Quantenmechanik, Springer, 1932.",
      "A. S. Holevo, Bounds for the quantity of information transmitted by a quantum communication channel, Problems of Information Transmission, vol. 9, no. 3, pp. 177 to 183, 1973.",
      "T. M. Cover and J. A. Thomas, Elements of Information Theory, 2nd ed., Wiley, 2006.",
      "M. M. Wilde, Quantum Information Theory, 2nd ed., Cambridge University Press, 2017."
    ],
    technicalExample: {
      title: "Worked Example: Pure vs. Entangled Subsystem Von Neumann Entropy",
      explanation:
        "Consider the pure 2 qubit Bell state |Φ+⟩ = (|00⟩ + |11⟩)/√2. The joint density matrix ρ_AB = |Φ+⟩⟨Φ+| has eigenvalues {1, 0, 0, 0}, so S(ρ_AB) = 0 (zero global uncertainty!). Yet tracing out qubit B leaves ρ_A = Tr_B(ρ_AB) = I/2 with eigenvalues {1/2, 1/2}, giving S(ρ_A) = 1 bit of local entropy!",
      diagramSvg: `
        <svg viewBox="0 0 680 165" width="100%" height="165" xmlns="http://www.w3.org/2000/svg">
          <rect width="680" height="165" fill="#FFFFFF" stroke="#C8C4B8"/>
          <text x="20" y="28" font-family="Batang, serif" font-size="14" font-weight="bold" fill="#1E3A8A">Paradox of Quantum Entanglement Entropy: Global Purity S(AB)=0 vs. Local Mixedness S(A)=1</text>
          <rect x="25" y="48" width="280" height="98" fill="#EFF6FF" stroke="#1E3A8A" stroke-width="2"/>
          <text x="165" y="74" text-anchor="middle" font-family="Batang, serif" font-size="13" font-weight="bold" fill="#1E3A8A">Joint Entangled State |Φ+⟩_AB</text>
          <text x="165" y="98" text-anchor="middle" font-family="monospace" font-size="12">Eigenvalues λ = {1, 0, 0, 0}</text>
          <text x="165" y="124" text-anchor="middle" font-family="Batang, serif" font-size="13" font-weight="bold" fill="#065F46">Global Entropy S(ρ_AB) = 0 bits</text>
          <path d="M 315 95 L 365 95" stroke="#881337" stroke-width="2.5"/>
          <text x="340" y="84" text-anchor="middle" font-family="monospace" font-size="11" fill="#881337">Tr_B</text>
          <rect x="375" y="48" width="280" height="98" fill="#FFF1F2" stroke="#881337" stroke-width="2"/>
          <text x="515" y="74" text-anchor="middle" font-family="Batang, serif" font-size="13" font-weight="bold" fill="#881337">Reduced Marginal State ρ_A = I/2</text>
          <text x="515" y="98" text-anchor="middle" font-family="monospace" font-size="12">Eigenvalues λ = {0.5, 0.5}</text>
          <text x="515" y="124" text-anchor="middle" font-family="Batang, serif" font-size="13" font-weight="bold" fill="#881337">Local Entropy S(ρ_A) = 1 bit!</text>
        </svg>
      `
    },
    highSchoolExample: {
      title: "High School Analogy: The 20 Questions Game & The Magic Book",
      content:
        "In the game of '20 Questions', each yes/no question cuts the possibilities in half—that is exactly 1 bit of Shannon Entropy! If a secret number is between 1 and 8, you need log2(8) = 3 questions (3 bits) to find it. Now imagine a 'Classical Book' vs. a 'Quantum Entangled Book' with two pages. In a normal book, if you know nothing about the whole book, you find out half the story on Page 1 and half on Page 2. In a Quantum Entangled Book, Page 1 by itself looks like complete gibberish (1 bit of randomness), and Page 2 by itself ALSO looks like complete gibberish—all the information is hidden in the *correlation* between Page 1 and Page 2 when read together!"
    },
    qaBank: [
      { q: "1. What is the Shannon Entropy of a fair coin flip?", a: "H(X) = -0.5 log2(0.5) - 0.5 log2(0.5) = 1 bit." },
      { q: "2. What happens to Shannon Entropy when an outcome is 100% certain (p = 1)?", a: "H(X) = 0 bits, because there is zero surprise or uncertainty." },
      { q: "3. What is Mutual Information I(X; Y)?", a: "The reduction in uncertainty about X obtained by observing Y: I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)." },
      { q: "4. What is the capacity of a Binary Symmetric Channel (BSC) with bit flip probability p?", a: "C = 1 - h_2(p) bits per channel use, where h_2(p) is the binary entropy function." },
      { q: "5. What is a Density Matrix ρ in quantum mechanics?", a: "A Hermitian, positive semidefinite operator with Tr(ρ) = 1 that describes both pure quantum states and statistical mixtures." },
      { q: "6. How can you test mathematically if a density matrix ρ represents a pure state?", a: "By checking its purity: Tr(ρ^2) = 1 if and only if ρ is a pure state |ψ⟩⟨ψ|; for mixed states, Tr(ρ^2) < 1." },
      { q: "7. What is the Von Neumann Entropy of any pure quantum state |ψ⟩?", a: "S(|ψ⟩⟨ψ|) = 0, because a pure state has eigenvalues {1, 0, ..., 0}." },
      { q: "8. What is the maximum Von Neumann Entropy of a d dimensional quantum system?", a: "log2(d) bits, achieved when ρ = I/d is the maximally mixed state." },
      { q: "9. What is Schumacher's Quantum Source Coding Theorem?", a: "To compress n copies of a quantum state ρ, one needs n · S(ρ) qubits asymptotically with fidelity approaching 1." },
      { q: "10. What does the Holevo Bound state for 1 qubit?", a: "Even though a qubit state is described by continuous angles (θ, ϕ), measuring n single qubits can transmit at most n classical bits." },
      { q: "11. What is Superdense Coding?", a: "The dual of teleportation: by pre sharing 1 entangled Bell pair, Alice can send 2 classical bits to Bob by transmitting just 1 physical qubit." },
      { q: "12. How can Conditional Quantum Entropy S(A|B) = S(AB) - S(B) be negative?", a: "When A and B are entangled, the joint system AB can be pure (S(AB)=0) while the marginal subsystem B is mixed (S(B)>0), yielding S(A|B) < 0." },
      { q: "13. What is Quantum Relative Entropy D(ρ || σ)?", a: "D(ρ || σ) = Tr(ρ (log2 ρ - log2 σ)), a measure of distinguishability between two quantum states." },
      { q: "14. What is a Quantum Channel (CPTP Map)?", a: "A Completely Positive Trace Preserving linear map N(ρ) = ∑_k E_k ρ E_k† where the Kraus operators satisfy ∑_k E_k† E_k = I." },
      { q: "15. How does Massive MIMO increase wireless channel capacity?", a: "By decomposing the N_r × N_t spatial matrix H via SVD into r = rank(H) parallel eigenchannels, scaling capacity linearly with min(N_t, N_r)." }
    ]
  }
];

/* ----------------------------------------------------------------------------
 * 3. RESEARCH NOTEBOOK BLOG ARTICLES (USED IN LEARN PAGE)
 * ---------------------------------------------------------------------------- */
const thinkingPosts = [
  {
    id: "post-surface-codes-2026",
    date: "18 September 2026",
    year: "2026",
    readTime: "11 MIN READ",
    category: "Quantum Error Correction",
    tags: ["Surface Codes", "Stabilizer Formalism", "Topology", "Syndrome Decoding"],
    title: "Notes on Stabilizer Formalism & Syndrome Extraction in 2D Surface Codes",
    subtitle:
      "A geometric and algebraic walkthrough of plaquette and star operators, commutator algebra in the n qubit Pauli group, and syndrome matching on planar lattices.",
    contentHtml: `
      <p>
        Fault tolerant quantum computation requires encoding logical quantum states into subspaces of a physical Hilbert space $\\mathcal{H} = (\\mathbb{C}^2)^{\\otimes n}$ such that local environmental decoherence acts orthogonally on distinguishable error syndromes. Kitaev's <strong>2D topological surface code</strong> achieves a fault tolerance threshold ($p_{\\text{th}} \\approx 1.03\\%$) using nearest neighbor weight 4 parity checks.
      </p>
      <div class="equation-box">
        $$\\mathcal{C}_{\\mathcal{S}} = \\left\\{ |\\psi\\rangle \\in (\\mathbb{C}^2)^{\\otimes n} \\;:\\; S_i |\\psi\\rangle = +1|\\psi\\rangle, \\; \\forall S_i \\in \\mathcal{S} \\right\\}$$
      </div>
      <div class="theorem-callout">
        <div class="theorem-title">Stabilizer Lemma 1.1: Orthogonal Syndrome Projection</div>
        <p>
          For any Pauli error $E \\in \\mathcal{P}_n$ and stabilizer generator $g_i \\in \\mathcal{S}$, $E g_i = (-1)^{s_i} g_i E$ with $s_i \\in \\{0, 1\\}$. Measuring $g_i$ on $E|\\psi\\rangle$ extracts the binary syndrome $s_i$ without disturbing the encoded logical state:
        </p>
        <div class="equation-box">
          $$g_i (E |\\psi\\rangle) = (-1)^{s_i} E g_i |\\psi\\rangle = (-1)^{s_i} (E |\\psi\\rangle)$$
        </div>
      </div>
      <p>
        Identify data qubits with edges $e \\in E$ of a cellular surface complex. The vertex star ($A_v$) and face plaquette ($B_p$) generators commute everywhere because any star and plaquette share either zero or two common edges:
      </p>
      <div class="equation-box">
        $$A_v = \\prod_{e \\in \\delta(v)} X_e, \\qquad B_p = \\prod_{e \\in \\partial(p)} Z_e, \\qquad [A_v, B_p] = 0$$
      </div>
    `
  },
  {
    id: "post-anonymous-quantum-routing-2026",
    date: "04 July 2026",
    year: "2026",
    readTime: "9 MIN READ",
    category: "Quantum Cryptography",
    tags: ["Quantum Networks", "Game Theory", "Anonymity", "Entanglement Routing"],
    title: "Game Theoretic Routing in Anonymous Quantum Networks",
    subtitle:
      "Formulating multipartite GHZ entanglement allocation and sender receiver anonymity under strategic coalition deviations and noisy repeater channels.",
    contentHtml: `
      <p>
        In quantum network architectures, cryptographic security extends beyond payload secrecy (QKD) to <strong>metadata privacy</strong>: hiding the identities of communicating nodes within a distributed network graph $G = (V, E)$.
      </p>
      <div class="equation-box">
        $$|\\text{GHZ}_N\\rangle = \\frac{1}{\\sqrt{2}}\\left( |0\\rangle^{\\otimes N} + |1\\rangle^{\\otimes N} \\right)$$
      </div>
      <div class="theorem-callout burgundy">
        <div class="theorem-title">Theorem 2.1: Coalition Resilient Anonymity Bound</div>
        <p>
          For any adversarial coalition $\\mathcal{A} \\subset V \\setminus \\{S, R\\}$ of size $|\\mathcal{A}| \\le N - 2$, the reduced density operator $\\rho_{\\mathcal{A}}$ accessible to the coalition after parity syndrome announcement is invariant under permutation of honest nodes:
        </p>
        <div class="equation-box">
          $$I(S ; \\rho_{\\mathcal{A}} \\mid \\mathcal{A}) \\le 2 \\sqrt{1 - F(|\\Psi_{\\text{actual}}\\rangle, |\\text{GHZ}_N\\rangle)}$$
        </div>
      </div>
    `
  }
];

/* ----------------------------------------------------------------------------
 * 4. RESEARCH & PROJECTS + PUBLICATIONS INDEX (`window.researchData`)
 * ---------------------------------------------------------------------------- */
window.researchData = [
  {
    id: "pub01",
    year: "2026",
    title: "Fault Tolerant Syndrome Extraction & Decoding Architectures in 2D Topological Surface Codes",
    venue: "Memorial University | Graduate Research Track (Quantum Computing & Error Correction)",
    domain: "Quantum",
    mathFocus: "Stabilizer Group $\\mathcal{S} = \\langle A_v, B_p \\rangle$, Homology $H_1(\\mathcal{M}; \\mathbb{Z}_2)$ & MWPM Decoding",
    links: {
      pdf: "Manuscript Abstract: Fault Tolerant Syndrome Extraction in 2D Topological Surface Codes.",
      latex: "\\documentclass[journal]{IEEEtran}\n\\title{Fault Tolerant Syndrome Extraction in 2D Surface Codes}\n\\author{M. Imansyah Basudewa, S.T., M.T.}\n% Stabilizer condition: S_i |\\psi\\rangle = +1 |\\psi\\rangle",
      code: "import numpy as np\nH_z = np.array([[1,1,0,1,1,0,0,0,0], [0,1,1,0,1,1,0,0,0]])\nsyndrome = (H_z @ error_vec) % 2"
    }
  },
  {
    id: "pub02",
    year: "2025",
    title: "Triangle Hamming Codes for Low Overhead Error Correction in Next Generation Channels",
    venue: "Coding Theory & Fault Tolerant Architectures Research Monograph",
    domain: "Theory",
    mathFocus: "Triangular Parity Check Topologies $H_{\\Delta} \\mathbf{c}^T = \\mathbf{0} \\pmod 2$ & Burst Error Localization",
    links: {
      pdf: "Manuscript Abstract: Triangle Hamming Code Parity Geometries.",
      latex: "\\section{Triangle Hamming Code Formulation}\n$$d_{\\min}(\\mathcal{C}_{\\Delta}) \\ge 3, \\quad \\mathbf{s} = H_{\\Delta} \\mathbf{r}^T \\pmod 2$$",
      code: "def triangle_hamming_syndrome(received_bits, H_tri):\n    return (H_tri @ received_bits) % 2"
    }
  },
  {
    id: "pub03",
    year: "2025",
    title: "Game Theoretic Entanglement Routing and Coalition Resilience in Anonymous Quantum Networks",
    venue: "Quantum Cryptography & Network Information Theory Working Paper",
    domain: "Quantum",
    mathFocus: "Multipartite GHZ Anonymity Bounds & Nash Equilibria $u_i(\\gamma_i^*, \\gamma_{-i}^*)$",
    links: {
      pdf: "Manuscript Abstract: Game Theoretic Entanglement Routing in Anonymous Quantum Networks.",
      latex: "\\begin{theorem}[Anonymous Routing Fidelity]\n$$F_{\\text{path}} = \\frac{1}{4}\\left(1 + 3\\prod_{e \\in \\mathcal{P}} w_e\\right)$$\n\\end{theorem}",
      code: "def ghz_anonymity_capacity(fidelity, num_nodes):\n    return max(0.0, 1.0 - 2.0 * np.sqrt(1.0 - fidelity))"
    }
  },
  {
    id: "pub04",
    year: "2025",
    title: "Parametrized Quantum Circuits (PQC) and Variational Decoders for Combinatorial Syndrome Graphs",
    venue: "Quantum Machine Learning & Optimization Research Track",
    domain: "Quantum",
    mathFocus: "Cost Hamiltonian $H_C = \\sum_{(i,j)} J_{ij} Z_i Z_j$ & QAOA Variational Angles $(\\boldsymbol{\\gamma}, \\boldsymbol{\\beta})$",
    links: {
      pdf: "Manuscript Abstract: Parametrized Quantum Circuits for Syndrome Graph Decoding.",
      latex: "$$|\\psi(\\boldsymbol{\\gamma}, \\boldsymbol{\\beta})\\rangle = \\prod_{p=1}^{P} e^{-i\\beta_p H_B} e^{-i\\gamma_p H_C} |+\\rangle^{\\otimes n}$$",
      code: "def qaoa_cost_expectation(gamma, beta, J_matrix):\n    return np.sum(J_matrix * np.sin(2*gamma) * np.cos(2*beta))"
    }
  },
  {
    id: "pub05",
    year: "2024",
    title: "Coherent Optical Wave Propagation & Quantum Classical Coexistence over DWDM Fiber Links",
    venue: "Optical & Photonic Communications Engineering Study",
    domain: "Communications",
    mathFocus: "Nonlinear Schrödinger Equation (NLSE) & Spontaneous Raman Noise Spectral Density",
    links: {
      pdf: "Manuscript Abstract: Coherent Optical Wave Propagation & DWDM Quantum Coexistence.",
      latex: "$$\\frac{\\partial A}{\\partial z} + i\\frac{\\beta_2}{2}\\frac{\\partial^2 A}{\\partial t^2} = i\\gamma |A|^2 A - \\frac{\\alpha}{2}A$$",
      code: "A_freq = np.fft.fft(A_time * np.exp(1j * gamma * np.abs(A_time)**2 * dz))"
    }
  },
  {
    id: "pub06",
    year: "2024",
    title: "Spectral Efficiency & Hybrid Precoding Optimization in Multi User Massive MIMO OFDM Systems",
    venue: "Master of Engineering (M.T.) Telecommunications & Signal Processing Research",
    domain: "Communications",
    mathFocus: "Ergodic Capacity $C = \\mathbb{E}[\\log_2 \\det(I + \\frac{\\rho}{N_t} H F_{\\text{RF}} F_{\\text{BB}} F_{\\text{BB}}^\\dagger F_{\\text{RF}}^\\dagger H^\\dagger)]$",
    links: {
      pdf: "Manuscript Abstract: Hybrid Precoding Optimization in Massive MIMO OFDM Systems.",
      latex: "$$\\max_{F_{\\text{RF}}, F_{\\text{BB}}} \\; R_{\\text{sum}} \\quad \\text{s.t.} \\quad \\|F_{\\text{RF}} F_{\\text{BB}}\\|_F^2 \\le P_{\\text{max}}$$",
      code: "def mimo_capacity(H, snr_linear):\n    nr, nt = H.shape\n    return np.real(np.log2(np.linalg.det(np.eye(nr) + (snr_linear / nt) * (H @ H.conj().T))))"
    }
  },
  {
    id: "pub07",
    year: "2023",
    title: "Algebraic Homology, Unitary Lie Groups, and Steane Topologies for Quantum Memory",
    venue: "Mathematical Physics & Coding Theory Seminar",
    domain: "Theory",
    mathFocus: "Chain Complex Boundary Maps $\\partial_2 \\circ \\partial_1 = 0$, $SU(2)$ Unitary Topology & Clifford Hierarchy $\\mathcal{C}^{(k)}$",
    links: {
      pdf: "Manuscript Abstract: Algebraic Homology and Unitary Group Topologies.",
      latex: "$$\\mathcal{C}^{(k)} = \\{ U \\in U(2^n) \\;:\\; U \\mathcal{P}_n U^\\dagger \\subseteq \\mathcal{C}^{(k-1)} \\}$$",
      code: "def check_chain_complex(boundary_1, boundary_2):\n    return np.all((boundary_1 @ boundary_2) % 2 == 0)"
    }
  }
];

/* ----------------------------------------------------------------------------
 * 5. PROFILE & ACADEMIC TIMELINE DATA (`profileData`)
 * ---------------------------------------------------------------------------- */
const profileData = {
  fullName: "M. Imansyah Basudewa, S.T., M.T.",
  currentTitle: "Computer Engineering Graduate Researcher",
  institution: "Memorial University of Newfoundland, Canada",
  location: "St. John's, NL, Canada",
  email: "imansyah.basudewa@mun.ca",
  biography: [
    "M. Imansyah Basudewa, S.T., M.T. is a Computer Engineering Graduate Researcher at Memorial University specializing in the mathematical foundations of Quantum Information Science, Topological Quantum Error Correction, Quantum Cryptography, and Next Generation Optical and Wireless Communication Systems.",
    "Bridging rigorous theoretical inquiry with over four years of progressive engineering research and telecommunications project management experience, his work investigates the structural dualities between classical channel coding (Hamming Distance Cubes, Triangle Hamming Codes, LDPC, MIMO signal processing) and fault tolerant quantum architectures (2D Surface Codes, 7 Qubit Steane Codes, Unitary Group Topologies, and Anonymous Quantum Routing).",
    "Passionate about mathematical pedagogy, he designs textbook style comparative notes and interactive visual explanations that demystify abstract operator algebras, stabilizer homology, and physical layer wave propagation."
  ],
  education: [
    {
      period: "PRESENT | GRADUATE RESEARCH",
      degree: "Graduate Studies in Computer Engineering",
      institution: "Memorial University of Newfoundland (MUN), Canada",
      focus: "Research Focus: Quantum Error Correction (2D Surface Codes, Steane & Triangle Hamming Codes), Quantum Cryptography, Anonymous Quantum Network Routing, and Quantum Information Theory.",
      highlight: true
    },
    {
      period: "GRADUATE DEGREE | M.T.",
      degree: "Master of Engineering (Magister Teknik, M.T.)",
      institution: "Electrical & Telecommunications Engineering",
      focus: "Thesis & Advanced Coursework in Information Theory, Wireless & Optical Communications, Coding Theory, and Stochastic Signal Processing.",
      highlight: false
    },
    {
      period: "UNDERGRADUATE DEGREE | S.T.",
      degree: "Bachelor of Engineering (Sarjana Teknik, S.T.)",
      institution: "Telecommunications & Computer Engineering",
      focus: "Foundations in Electromagnetics, Digital Communications, Linear Algebra, Physical Layer Network Architecture, and Embedded Systems.",
      highlight: false
    }
  ],
  experience: [
    {
      period: "2024 TO PRESENT",
      role: "Graduate Researcher | Quantum & Communications Group",
      organization: "Memorial University, Faculty of Engineering & Applied Science",
      description: "Conducting theoretical and numerical investigations into fault tolerant syndrome decoding on 2D planar surface lattices, Steane and triangle Hamming code architectures, and game theoretic routing protocols for quantum networks."
    },
    {
      period: "2020 TO 2024 (4+ YEARS)",
      role: "Technology Researcher & Telecommunications Project Management Specialist",
      organization: "Telecommunications Infrastructure & Advanced R&D",
      description: "Led cross functional engineering deployments across optical backbone networks and wireless MIMO infrastructure; managed end to end technical project lifecycles, link budget optimization, and physical layer performance verification."
    }
  ]
};

/* ----------------------------------------------------------------------------
 * 6. SCHRÖDINGER'S CAT QUANTUM GLOSSARY & MULTI PAGE NAVIGATOR
 * ---------------------------------------------------------------------------- */
const quantumGlossary = [
  {
    key: "cryptography",
    title: "BB84 & E91 Quantum Cryptography",
    pageTarget: "illustrations.html",
    explanation:
      "Protocols leveraging non orthogonal quantum states ($+$, $\\times$) or Bell entanglement so any eavesdropping attempt by Eve introduces a detectable Quantum Bit Error Rate (QBER)."
  },
  {
    key: "hamming",
    title: "3D Hamming Distance Cube (000 and 111)",
    pageTarget: "illustrations.html",
    explanation:
      "Geometric representation of the $[3,1,3]$ binary repetition code on the Boolean hypercube $\\{0,1\\}^3$, separating valid codewords $000$ and $111$ by minimum Hamming distance $d_{\\min} = 3$."
  },
  {
    key: "steane",
    title: "[[7,1,3]] Steane Code & IBM Heavy Hex Topology",
    pageTarget: "illustrations.html",
    explanation:
      "A 7 qubit CSS quantum code built from the classical $[7,4,3]$ Hamming Fano plane, alongside IBM Quantum's degree 2/3 Heavy Hex superconducting processor topology and $SU(2)$ unitary manifold."
  },
  {
    key: "circuit",
    title: "Quantum Circuit Unitary Evolution",
    pageTarget: "illustrations.html",
    explanation:
      "Reversible unitary evolution $U = U_L \\cdots U_1$ composed of single qubit Clifford/phase gates ($H, X, Z, S, T$) and two qubit entangling CNOT gates."
  },
  {
    key: "entropy",
    title: "Shannon & Von Neumann Entropy",
    pageTarget: "learn.html",
    explanation:
      "Classical uncertainty $H(X) = -\\sum p(x)\\log_2 p(x)$ generalized to quantum density matrices via $S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho)$."
  }
];


/* ----------------------------------------------------------------------------
 * 7. FOUNDATIONAL THEORY SUPPLEMENTS FOR ALL 5 LEARN SUBTOPICS:
 *    - DEFINITIONS, SIMPLE EQUATIONS & EACH VARIABLE EXPLANATION (Revision #1)
 *    - STORY BEHIND THE EQUATION SECTION (Revision #6)
 * ---------------------------------------------------------------------------- */
const learnFoundationalSupplements = {
  "mod-ecc": {
    definitions: [
      {
        term: "Block Code [n, k, d_min] (Classical)",
        domain: "Classical Coding Theory",
        definition: "A mapping that encodes a message of k information bits into a longer block of n channel bits (n > k) such that any two valid codewords differ in at least d_min bit positions."
      },
      {
        term: "Hamming Distance d_H(x, y)",
        domain: "Classical Metric Space",
        definition: "The total number of bit coordinates i ∈ {1, ..., n} at which two binary n-tuples x and y differ: d_H(x, y) = wt(x ⊕ y)."
      },
      {
        term: "Stabilizer Code [[n, k, d]] (Quantum)",
        domain: "Quantum Error Correction",
        definition: "A 2^k-dimensional subspace C_Q of an n-qubit Hilbert space (C^2)^{⊗n} fixed by an Abelian subgroup S of the n-qubit Pauli group P_n (with -I ∉ S) such that S_i |ψ⟩ = +1|ψ⟩ for all S_i ∈ S."
      },
      {
        term: "Error Syndrome s",
        domain: "Classical & Quantum",
        definition: "A parity fingerprint extracted via H r^T (classical) or ancilla stabilizer eigenvalues (quantum) that reveals the exact error location without disturbing the encoded logical information."
      }
    ],
    simpleEquations: [
      {
        label: "Classical Parity Syndrome & Error Correction Bound",
        equation: "\\mathbf{s} = \\mathbf{r} H^T = \\mathbf{e} H^T \\pmod 2, \\qquad t = \\left\\lfloor \\frac{d_{\\min} - 1}{2} \\right\\rfloor",
        summary: "Multiplying the received bitstring r by the transpose of the parity-check matrix H cancels the valid codeword c (since c H^T = 0) and isolates the error pattern e."
      },
      {
        label: "Quantum Stabilizer Eigenvalue Condition & Knill-Laflamme",
        equation: "S_i |\\psi_L\\rangle = +1 |\\psi_L\\rangle, \\qquad S_i E_a = (-1)^{s_i(a)} E_a S_i",
        summary: "Valid logical quantum states live in the simultaneous +1 eigenspace of all stabilizer generators S_i. An error E_a that anti-commutes with S_i flips its ancilla measurement to -1 (s_i = 1)."
      }
    ],
    variableBreakdowns: [
      { symbol: "$n$", name: "Block Length / Physical Qubits", meaning: "Total number of transmitted physical bits (classical) or physical data qubits (quantum) per encoded block.", unitOrSpace: "$n \\in \\mathbb{Z}^+$ (bits / qubits)" },
      { symbol: "$k$", name: "Logical Dimension", meaning: "Number of protected payload message bits or logical qubits encoded inside the block.", unitOrSpace: "$k \\le n$ (logical bits / qubits)" },
      { symbol: "$d_{\\min}$", name: "Minimum Code Distance", meaning: "Smallest Hamming weight of a nonzero codeword (classical) or smallest Pauli weight of an undetectable logical operator (quantum).", unitOrSpace: "$d_{\\min} \\ge 2t + 1$" },
      { symbol: "$t$", name: "Correctable Error Weight", meaning: "Maximum number of arbitrary single-bit or single-qubit errors guaranteed to be uniquely corrected.", unitOrSpace: "$t = \\lfloor (d_{\\min}-1)/2 \\rfloor$" },
      { symbol: "$G, H$", name: "Generator & Parity-Check Matrices", meaning: "Binary matrices satisfying $G H^T = \\mathbf{0} \\pmod 2$; $G$ encodes messages ($\\mathbf{c}=\\mathbf{u}G$) and $H$ checks parity.", unitOrSpace: "$G \\in \\mathbb{F}_2^{k \\times n}, \\; H \\in \\mathbb{F}_2^{(n-k)\\times n}$" },
      { symbol: "$\\mathbf{r}, \\mathbf{e}, \\mathbf{s}$", name: "Received, Error & Syndrome Vectors", meaning: "$\\mathbf{r} = \\mathbf{c} \\oplus \\mathbf{e}$ is the noisy channel output, $\\mathbf{e}$ is the noise vector, and $\\mathbf{s} = \\mathbf{r}H^T$ is the $(n-k)$-bit syndrome.", unitOrSpace: "$\\mathbf{r}, \\mathbf{e} \\in \\mathbb{F}_2^n, \\; \\mathbf{s} \\in \\mathbb{F}_2^{n-k}$" },
      { symbol: "$S_i \\in \\mathcal{S}$", name: "Stabilizer Generator", meaning: "Mutually commuting tensor products of Pauli operators $\\{I, X, Y, Z\\}^{\\otimes n}$ that measure parity without collapsing logical state.", unitOrSpace: "$[S_i, S_j] = 0, \\; S_i^2 = I$" }
    ],
    storyBehindEquation: {
      title: "From Frustrated Friday Relays at Bell Labs (1947) to Shor's 9-Qubit Miracle (1995)",
      equationLatex: "\\mathbf{s} = H \\mathbf{e}^T \\pmod 2 \\quad \\longrightarrow \\quad S_i |\\psi_L\\rangle = +1 |\\psi_L\\rangle",
      historicalContext: "In 1947 at Bell Telephone Laboratories, Richard Hamming had limited access to the electromechanical Model V relay computer—only on weekends when no operators were on duty. Time after time, he arrived on Monday morning to find that a single stray cosmic ray or dusty relay contact had flipped one bit on his punch cards, causing the machine to halt and dump his entire weekend calculation.",
      eurekaMoment: "Exasperated, Hamming asked himself: 'If the machine can already use a parity bit to tell me an error occurred, why can't it tell me WHERE the error is so it can fix the bit itself?' By arranging three overlapping parity checks corresponding to the binary digits of indices 1 through 7 (the Fano plane geometry of the [7,4,3] code), he realized the parity-check outputs s = H e^T spelled out the exact binary address of the broken relay! Nearly 50 years later, physicists believed quantum error correction was impossible because of the No-Cloning Theorem and continuous phase noise—until Peter Shor (1995) and Andrew Steane (1996) proved that measuring multi-qubit Pauli parity operators S_i discretizes continuous quantum noise into just X (bit-flip) and Z (phase-flip) syndromes.",
      legacyAndImpact: "Every ECC memory module, deep-space Voyager telemetry link, 5G LDPC transceiver, and modern 2D topological surface-code quantum processor descends directly from Hamming's weekend frustration and Shor/Gottesman's stabilizer equation.",
      quote: "\"If the computer can recognize that an error has occurred, surely it can locate the position of the error and correct it.\" — Richard W. Hamming (1950)"
    }
  },

  "mod-crypto": {
    definitions: [
      {
        term: "Information-Theoretic Secrecy (One-Time Pad)",
        domain: "Classical Cryptography",
        definition: "A cipher achieves perfect Shannon secrecy if the ciphertext C reveals zero mutual information about the plaintext M: I(M; C) = 0, meaning P(M | C) = P(M) even against an adversary with infinite computing power."
      },
      {
        term: "Conjugate / Mutually Unbiased Bases (MUBs)",
        domain: "Quantum Cryptography",
        definition: "Two orthonormal Hilbert bases B_+ = {|0⟩, |1⟩} and B_× = {|+⟩, |-⟩} are mutually unbiased if the squared overlap between any state in B_+ and any state in B_× equals 1/d = 1/2."
      },
      {
        term: "Quantum Bit Error Rate (QBER, e_bit)",
        domain: "Quantum Key Distribution",
        definition: "The fraction of sifted key positions (where Alice and Bob selected the same measurement basis) in which Alice's prepared bit and Bob's measured bit disagree."
      },
      {
        term: "Privacy Amplification",
        domain: "Post-Processing",
        definition: "Application of a universal-2 hash family to compress a partially leaked sifted key into a shorter final key about which Eve's Holevo information χ(K : E) is exponentially negligible."
      }
    ],
    simpleEquations: [
      {
        label: "Classical One-Time Pad (Vernam Cipher) & Perfect Secrecy",
        equation: "C_i = M_i \\oplus K_i \\pmod 2, \\qquad H(M \\mid C) = H(M) \\iff H(K) \\ge H(M)",
        summary: "XORing message bit M_i with an independent uniform key bit K_i masks the message completely, provided the key is at least as long as the message and never reused."
      },
      {
        label: "Quantum BB84 Asymptotic Secret Key Rate (Shor-Preskill / Devetak-Winter)",
        equation: "R_{\\text{QKD}} = \\max\\Big(0, \\; 1 - h_2(e_{\\text{bit}}) - h_2(e_{\\text{phase}})\\Big) = 1 - 2 h_2(Q)",
        summary: "Subtracts the classical error-correction leakage h_2(e_bit) and Eve's phase-information bound h_2(e_phase) from 1 raw sifted bit, remaining positive up to Q ≈ 11.0%."
      }
    ],
    variableBreakdowns: [
      { symbol: "$M, C, K$", name: "Plaintext, Ciphertext & Secret Key", meaning: "Binary strings representing the original message $M$, transmitted encrypted string $C$, and shared secret key $K$.", unitOrSpace: "$\\{0,1\\}^L$ (binary strings)" },
      { symbol: "$\\oplus$", name: "Modulo-2 Addition (XOR)", meaning: "Bitwise exclusive-OR operation ($0\\oplus 0=0, 1\\oplus 0=1, 1\\oplus 1=0$), which is its own inverse.", unitOrSpace: "Group $(\\mathbb{Z}_2, \\oplus)$" },
      { symbol: "$B_+, B_\\times$", name: "Rectilinear ($Z$) & Diagonal ($X$) Bases", meaning: "Alice and Bob's two measurement bases: $B_+ = \\{|0\\rangle, |1\\rangle\\}$ and $B_\\times = \\{|+\\rangle, |-\\rangle\\}$.", unitOrSpace: "Orthonormal bases in $\\mathbb{C}^2$" },
      { symbol: "$e_{\\text{bit}}, Q$", name: "Quantum Bit Error Rate (QBER)", meaning: "Probability that a sifted bit is flipped between Alice and Bob due to channel noise or Eve's eavesdropping.", unitOrSpace: "$Q \\in [0, 0.5]$ (dimensionless ratio)" },
      { symbol: "$h_2(Q)$", name: "Binary Shannon Entropy Function", meaning: "Uncertainty of a Bernoulli bit with flip probability $Q$: $h_2(Q) = -Q\\log_2 Q - (1-Q)\\log_2(1-Q)$.", unitOrSpace: "Bits per sifted symbol ($[0, 1]$)" },
      { symbol: "$R_{\\text{QKD}}$", name: "Net Secret Key Fraction", meaning: "Number of unconditionally secure secret bits distilled per sifted photon after error correction and privacy amplification.", unitOrSpace: "Secret bits / sifted photon" }
    ],
    storyBehindEquation: {
      title: "Quantum Banknotes, a Caribbean Swimming Pool (1983), and Unconditional Secrecy",
      equationLatex: "R = 1 - 2 h_2(Q) > 0 \\quad \\text{for} \\quad Q < 11.0\\%",
      historicalContext: "In the late 1960s, Columbia University physics student Stephen Wiesner imagined 'Quantum Money'—banknotes embedded with 20 isolated polarized photons in secret + and × bases that counterfeiters could never copy because measuring a photon in the wrong basis randomizes it. Every physics journal rejected Wiesner's paper for over a decade as science fiction.",
      eurekaMoment: "In 1979, Charles Bennett (who knew Wiesner's manuscript) swam out to meet Gilles Brassard in the ocean off San Juan, Puerto Rico, during an IEEE symposium. Floating in the water, they realized: instead of trapping photons inside a static paper banknote for years, why not shoot them across an optical fiber to distribute a cryptographic One-Time Pad key? That conversation became the 1984 BB84 protocol. Sixteen years later, Peter Shor and John Preskill (2000) discovered a breathtaking shortcut: by mapping BB84 onto a virtual [[n,k,d]] CSS quantum error-correcting code, they proved the compact equation R = 1 - 2h_2(Q), showing that bit-flip correction and privacy amplification are simply X-syndrome and Z-syndrome decoding in disguise!",
      legacyAndImpact: "This single equation bridges quantum error correction and cryptography, establishing the exact 11.0% QBER fault-tolerance threshold used in fiber and satellite QKD networks worldwide.",
      quote: "\"Unlike classical public-key cryptography, whose security rests on unproven assumptions about computational complexity, quantum cryptography rests on the uncertainty principle itself.\" — Charles H. Bennett & Gilles Brassard (1984)"
    }
  },

  "mod-networks": {
    definitions: [
      {
        term: "OSI Layered Packet Switching",
        domain: "Classical Networking",
        definition: "A network architecture where digital payloads are encapsulated into discrete packets with headers and amplified/regenerated at every intermediate router without loss of logical content."
      },
      {
        term: "PLOB Repeaterless Bound",
        domain: "Quantum Optical Channels",
        definition: "The fundamental Pirandola-Laurenza-Ottaviani-Banchi limit C(η) = -log_2(1 - η) ≈ 1.44 η showing that direct fiber quantum capacity decays exponentially with distance L."
      },
      {
        term: "Quantum Repeater & Entanglement Swapping",
        domain: "Quantum Networking",
        definition: "An intermediate quantum node that converts two short-range entangled Bell pairs (A-R1 and R2-B) into one long-range entangled pair (A-B) via a joint Bell State Measurement (BSM) on (R1, R2)."
      },
      {
        term: "Entanglement Purification / Distillation",
        domain: "Quantum Link Layer",
        definition: "A protocol using local CNOT gates and classical parity checks to sacrifice k noisy Werner states of fidelity F > 1/2 to produce fewer pairs of higher fidelity F' > F."
      }
    ],
    simpleEquations: [
      {
        label: "Classical Fiber Attenuation vs. Regenerative Repeater Capacity",
        equation: "\\eta(L) = 10^{-\\alpha L / 10}, \\qquad C_{\\text{classical}} = B \\log_2(1 + \\text{SNR})",
        summary: "In fiber optics, transmissivity η drops exponentially with length L (α ≈ 0.2 dB/km). Classical repeaters measure and re-amplify the digital bits, defeating exponential decay."
      },
      {
        label: "Repeaterless PLOB Quantum Bound vs. N-Segment Werner Swapping Fidelity",
        equation: "C_{\\text{direct}}(\\eta) = -\\log_2(1 - \\eta), \\qquad F_N = \\frac{1}{4}\\left(1 + 3 w^N\\right) \\quad \\text{where } w = \\frac{4F_0 - 1}{3}",
        summary: "Because unknown quantum states cannot be amplified (No-Cloning), direct capacity is bounded by -log_2(1-η). Dividing L into N repeater segments raises rate scaling from η(L) to η(L/N)."
      }
    ],
    variableBreakdowns: [
      { symbol: "$L, N$", name: "Total Link Distance & Repeater Segments", meaning: "Total fiber distance $L$ (in km) subdivided into $N$ elementary hops of length $L_0 = L/N$.", unitOrSpace: "$L \\in \\mathbb{R}^+\\text{ (km)}, \\; N \\in \\mathbb{Z}^+$" },
      { symbol: "$\\alpha$", name: "Fiber Attenuation Coefficient", meaning: "Logarithmic optical power loss per kilometer of silica telecom fiber (typically $0.2\\text{ dB/km}$ at $1550\\text{ nm}$).", unitOrSpace: "$\\text{dB/km}$" },
      { symbol: "$\\eta$", name: "Channel Transmissivity", meaning: "Probability that a single emitted photon survives fiber attenuation without being absorbed: $\\eta = 10^{-\\alpha L/10}$.", unitOrSpace: "$\\eta \\in (0, 1]$" },
      { symbol: "$F, F_0$", name: "Bell-State Entanglement Fidelity", meaning: "Overlap $F = \\langle\\Phi^+|\\rho|\\Phi^+\\rangle$ between the actual noisy two-qubit density matrix $\\rho$ and the ideal Bell state $|\\Phi^+\\rangle$.", unitOrSpace: "$F \\in [0.25, 1.0]$" },
      { symbol: "$w$", name: "Werner Purity Parameter", meaning: "Depolarizing visibility parameter of a Werner state $\\rho_W = w|\\Phi^+\\rangle\\langle\\Phi^+| + (1-w)I_4/4$, related to fidelity by $w = (4F-1)/3$.", unitOrSpace: "$w \\in [0, 1]$" },
      { symbol: "$T_1, T_2$", name: "Quantum Memory Relaxation & Coherence Times", meaning: "Timescales over which a matter qubit memory loses population ($T_1$) or phase coherence ($T_2$) while waiting for heralding.", unitOrSpace: "Seconds ($\\text{ms}$ to $\\text{s}$)" }
    ],
    storyBehindEquation: {
      title: "Why You Can't Put an Erbium Amplifier on a Qubit: The Repeater Revolution (1998–2017)",
      equationLatex: "C(\\eta) = -\\log_2(1 - \\eta) \\quad \\xrightarrow{\\text{Briegel-Dür-Cirac-Zoller (1998)}} \\quad \\eta(L/N)",
      historicalContext: "In the 1990s, optical telecommunications engineers conquered transoceanic distances by splicing Erbium-Doped Fiber Amplifiers (EDFAs) every 80 km. When quantum physicists tried to send entangled photons through the same fibers, they hit a brick wall: at 1000 km, η = 10^{-20} (less than one photon per century), and any optical amplifier inevitably injects spontaneous emission noise that destroys quantum entanglement via the No-Cloning Theorem.",
      eurekaMoment: "In 1998, Hans Briegel, Wolfgang Dür, Juan Ignacio Cirac, and Peter Zoller asked a radical question: 'What if the photon never travels from Alice to Bob at all?' By combining entanglement swapping (teleported entanglement across short segments L/N) with nested entanglement purification (sacrificing noisy Bell pairs to boost Werner parameter w), they proved that quantum error rates and resource overhead scale only polynomially with distance! In 2017, Stefano Pirandola and colleagues (PLOB) cemented why repeaters are mandatory by proving the exact formula C(η) = -log_2(1 - η) for any repeaterless link.",
      legacyAndImpact: "The PLOB bound and the BDCZ quantum repeater equation now serve as the foundational link-budget equations for every quantum internet testbed, defining the exact hardware crossover point where repeaters beat direct fiber.",
      quote: "\"To conquer exponential photon loss without violating the no-cloning theorem, one must replace physical amplification with nested entanglement swapping and purification.\" — Briegel, Dür, Cirac & Zoller (1998)"
    }
  },

  "mod-routing": {
    definitions: [
      {
        term: "Shortest-Path Cost Metric (Dijkstra / OSPF)",
        domain: "Classical Routing",
        definition: "A graph algorithm on G=(V,E) that selects a path P minimizing the additive sum of non-negative edge link weights ∑_{e∈P} w(e) using Bellman's principle of optimality."
      },
      {
        term: "Bell State Measurement (BSM)",
        domain: "Quantum Entanglement Routing",
        definition: "A joint two-qubit projective measurement onto the four maximally entangled Bell basis states {|Φ+⟩, |Φ-⟩, |Ψ+⟩, |Ψ-⟩} performed at an intermediate repeater node to splice two entangled links into one."
      },
      {
        term: "Multiplicative Werner Bottleneck Metric",
        domain: "Quantum Path Selection",
        definition: "Unlike additive classical latency, end-to-end entanglement fidelity across a repeater path P is governed by the product of edge Werner purities ∏_{e∈P} w_e (or sum of logarithmic costs -ln w_e)."
      },
      {
        term: "Anonymous GHZ Quantum Routing",
        domain: "Privacy-Preserving Networks",
        definition: "A multipartite routing protocol using an N-node Greenberger-Horne-Zeilinger state |GHZ_N⟩ = (|0⟩^{⊗N} + |1⟩^{⊗N})/√2 to extract a private Bell pair between an unrevealed sender S and receiver R."
      }
    ],
    simpleEquations: [
      {
        label: "Classical Dijkstra Additive Path Cost & Log-Transformed Quantum Metric",
        equation: "D_{\\text{classical}}(\\mathcal{P}) = \\sum_{e \\in \\mathcal{P}} c_e, \\qquad D_{\\text{quantum}}(\\mathcal{P}) = \\sum_{e \\in \\mathcal{P}} (-\\ln w_e) \\iff \\max_{\\mathcal{P}} \\prod_{e \\in \\mathcal{P}} w_e",
        summary: "By taking the negative logarithm c_e = -ln(w_e) of each link's Werner purity w_e ∈ (0,1], multiplicative fidelity degradation is transformed into an additive shortest-path problem!"
      },
      {
        label: "Bell State Measurement (BSM) Entanglement Swapping Identity",
        equation: "|\\Phi^+\\rangle_{A,R_1} \\otimes |\\Phi^+\\rangle_{R_2,B} = \\frac{1}{2}\\sum_{m_1, m_2 \\in \\{0,1\\}} |\\mathcal{B}_{m_1 m_2}\\rangle_{R_1, R_2} \\otimes \\left(Z_B^{m_1} X_B^{m_2} |\\Phi^+\\rangle_{A,B}\\right)",
        summary: "Measuring repeater qubits (R_1, R_2) in the Bell basis collapses distant qubits (A, B) into a Bell pair up to a known Pauli frame correction Z^{m_1} X^{m_2} communicated via 2 classical bits."
      }
    ],
    variableBreakdowns: [
      { symbol: "$G = (V, E)$", name: "Network Topology Graph", meaning: "Set of router/repeater nodes $V$ and optical communication links $E$.", unitOrSpace: "Directed or undirected graph" },
      { symbol: "$\\mathcal{P}$", name: "End-to-End Routing Path", meaning: "Ordered sequence of connected edges $(v_0, v_1), (v_1, v_2), \\dots, (v_{h-1}, v_h)$ linking source $A$ to destination $B$.", unitOrSpace: "$\\mathcal{P} \\subseteq E$" },
      { symbol: "$|\\mathcal{B}_{m_1 m_2}\\rangle$", name: "Four Bell Basis States", meaning: "$|\\Phi^+\\rangle = |\\mathcal{B}_{00}\\rangle$, $|\\Phi^-\\rangle = |\\mathcal{B}_{10}\\rangle$, $|\\Psi^+\\rangle = |\\mathcal{B}_{01}\\rangle$, $|\\Psi^-\\rangle = |\\mathcal{B}_{11}\\rangle$.", unitOrSpace: "Orthonormal basis of $\\mathbb{C}^2 \\otimes \\mathbb{C}^2$" },
      { symbol: "$(m_1, m_2)$", name: "2-Bit BSM Classical Outcome", meaning: "Two classical heralding bits ($m_1$: phase parity, $m_2$: bit parity) broadcast from the repeater to Bob after BSM.", unitOrSpace: "$(m_1, m_2) \\in \\{0,1\\}^2$" },
      { symbol: "$Z_B^{m_1} X_B^{m_2}$", name: "Pauli Frame Correction Operator", meaning: "Local unitary applied by Bob to restore the exact state $|\\Phi^+\\rangle_{AB}$ based on the repeater's BSM outcome.", unitOrSpace: "Pauli group $\\{I, X, Z, XZ\\}$" },
      { symbol: "$p_{\\text{swap}}$", name: "BSM Success Probability", meaning: "Probability that the repeater's Bell State Measurement succeeds ($p_{\\text{swap}} \\le 0.5$ for linear optics without ancillas).", unitOrSpace: "$p_{\\text{swap}} \\in (0, 1]$" }
    ],
    storyBehindEquation: {
      title: "Twenty Minutes at an Amsterdam Café (1956) Meets Entanglement of Photons That Never Met (1993)",
      equationLatex: "|\\Phi^+\\rangle_{A R_1} |\\Phi^+\\rangle_{R_2 B} \\xrightarrow{\\text{BSM on }(R_1, R_2)} (Z_B^{m_1} X_B^{m_2})|\\Phi^+\\rangle_{AB}",
      historicalContext: "In 1956, 26-year-old Edsger Dijkstra sat with his fiancée at a sidewalk café in Amsterdam. Wanting a public demonstration for the new ARMAC computer at the Mathematical Centre, he designed the shortest-path routing algorithm in 20 minutes in his head without pencil or paper—reasoning that if you lacked paper, you were forced to keep the argument simple. Four decades later, physicists asked how to route quantum entanglement across a network when photons cannot be copied or buffered like classical IP packets.",
      eurekaMoment: "In 1993, Marek Żukowski, Anton Zeilinger, Michael Horne, and Artur Ekert discovered a mind-bending identity right after the invention of quantum teleportation: if Alice shares an entangled pair with Repeater qubit R_1, and Bob shares an independent entangled pair with Repeater qubit R_2, projecting (R_1, R_2) onto the Bell basis {|Φ±⟩, |Ψ±⟩} instantaneously entangles Alice's photon A and Bob's photon B—even though photons A and B originated at different sources and never interacted in the past! Combined with logarithmic weight mapping c_e = -ln(w_e), Dijkstra's 20-minute café algorithm was reborn to select optimal entanglement swapping paths.",
      legacyAndImpact: "Bell-state entanglement swapping is the fundamental switching primitive of quantum routers, enabling multi-hop quantum teleportation, distributed quantum computing, and anonymous GHZ communication.",
      quote: "\"Two particles that have no common past and have never interacted can nevertheless become entangled by a joint Bell-state measurement on their respective partners.\" — Żukowski, Zeilinger, Horne & Ekert (1993)"
    }
  },

  "mod-infotheory": {
    definitions: [
      {
        term: "Shannon Entropy H(X) (Classical)",
        domain: "Classical Information Theory",
        definition: "The expected surprise or minimum average number of binary questions (bits) required to specify an outcome drawn from a discrete probability distribution p(x): H(X) = -∑ p(x) log_2 p(x)."
      },
      {
        term: "Von Neumann Entropy S(ρ) (Quantum)",
        domain: "Quantum Information Theory",
        definition: "The quantum generalization of entropy for a density operator ρ, defined via its spectral eigenvalues λ_i as S(ρ) = -Tr(ρ log_2 ρ) = -∑ λ_i log_2 λ_i. Pure states have S(|ψ⟩⟨ψ|) = 0."
      },
      {
        term: "Mutual Information I(X; Y)",
        domain: "Channel Capacity Theory",
        definition: "The reduction in uncertainty about input X obtained by observing channel output Y: I(X; Y) = H(X) - H(X | Y). Maximizing I(X; Y) over all input distributions yields channel capacity C."
      },
      {
        term: "Holevo Accessible Information Bound χ",
        domain: "Quantum-Classical Readout",
        definition: "An upper bound proving that the classical information I(X; Y) extractable from an ensemble of quantum states {p_x, ρ_x} cannot exceed χ = S(∑ p_x ρ_x) - ∑ p_x S(ρ_x)."
      }
    ],
    simpleEquations: [
      {
        label: "Shannon Entropy & Additive White Gaussian Noise (AWGN) Channel Capacity",
        equation: "H(X) = -\\sum_{x \\in \\mathcal{X}} p(x) \\log_2 p(x), \\qquad C = B \\log_2\\left(1 + \\frac{P}{N_0 B}\\right) \\; \\text{[bits/sec]}",
        summary: "Shannon's noisy-channel coding theorem proves that error-free communication is achievable at any rate R < C, where C depends on bandwidth B and signal-to-noise ratio P/(N_0 B)."
      },
      {
        label: "Von Neumann Density Matrix Entropy & Holevo Capacity Bound",
        equation: "S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho) = -\\sum_{i} \\lambda_i \\log_2 \\lambda_i, \\qquad I(X; Y) \\le \\chi = S(\\bar{\\rho}) - \\sum_x p_x S(\\rho_x)",
        summary: "For pure entangled state |Ψ_AB⟩, S(ρ_AB) = 0 while subsystem entropy S(ρ_A) > 0 quantifies entanglement! Holevo's χ bounds how many classical bits n qubits can convey."
      }
    ],
    variableBreakdowns: [
      { symbol: "$p(x)$", name: "Probability Mass Function", meaning: "Classical probability of symbol $x \\in \\mathcal{X}$ occurring, satisfying $p(x) \\ge 0$ and $\\sum_x p(x) = 1$.", unitOrSpace: "$p(x) \\in [0, 1]$" },
      { symbol: "$H(X)$", name: "Shannon Entropy", meaning: "Average classical information content per source symbol.", unitOrSpace: "Bits (shannons) per symbol" },
      { symbol: "$\\rho$", name: "Quantum Density Operator", meaning: "Positive semi-definite Hermitian trace-1 matrix ($\\rho = \\rho^\\dagger \\succeq 0, \\text{Tr}(\\rho)=1$) describing a pure or mixed quantum state.", unitOrSpace: "$\\rho \\in \\mathcal{D}(\\mathcal{H})$" },
      { symbol: "$\\lambda_i$", name: "Eigenvalues of Density Matrix $\\rho$", meaning: "Classical probabilities in the diagonal spectral decomposition $\\rho = \\sum_i \\lambda_i |e_i\\rangle\\langle e_i|$.", unitOrSpace: "$\\lambda_i \\ge 0, \\; \\sum_i \\lambda_i = 1$" },
      { symbol: "$S(\\rho)$", name: "Von Neumann Entropy", meaning: "Quantum uncertainty of state $\\rho$; equals $0$ for pure states and $\\log_2 d$ for maximally mixed states $I_d/d$.", unitOrSpace: "Qubits / bits ($[0, \\log_2 d]$)" },
      { symbol: "$B, P, N_0$", name: "Bandwidth, Signal Power & Noise Spectral Density", meaning: "Channel bandwidth $B$ (Hz), received signal power $P$ (W), and thermal noise power per Hz $N_0$ (W/Hz).", unitOrSpace: "$\\text{Hz}, \\; \\text{Watts}, \\; \\text{W/Hz}$" },
      { symbol: "$\\chi$", name: "Holevo Quantity", meaning: "Maximum classical mutual information accessible by any POVM measurement on a quantum ensemble $\\{p_x, \\rho_x\\}$.", unitOrSpace: "Bits per quantum state" }
    ],
    storyBehindEquation: {
      title: "Why Both Equations Share the Same Formula: Von Neumann's Joke to Claude Shannon (1948)",
      equationLatex: "H(X) = -\\sum_x p(x)\\log_2 p(x) \\quad \\longleftrightarrow \\quad S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho)",
      historicalContext: "In 1927—twenty-one years before classical information theory existed—23-year-old John von Neumann formulated the density matrix ρ to unify pure quantum wavefunctions with statistical thermodynamics, deriving S(ρ) = -k_B Tr(ρ ln ρ) by considering an ideal gas of semi-permeable quantum membranes. Two decades later at Bell Labs, Claude Shannon independently derived the exact mathematical sum -∑ p_i log_2 p_i to measure the fundamental compressibility and capacity of telegraph and telephone channels.",
      eurekaMoment: "Uncertain what to call his new quantity (he considered 'information' or 'uncertainty'), Shannon visited John von Neumann at the Institute for Advanced Study in Princeton. Von Neumann famously advised him: 'You should call it entropy, for two reasons. In the first place your uncertainty function has been used in statistical mechanics under that name, so it already has a name. In the second place, and more important, nobody knows what entropy really is, so in a debate you will always have the advantage!' In 1973, Alexander Holevo unified both formulas by proving that the gap between global Von Neumann entropy S(ρ) and average conditional entropy ∑ p_x S(ρ_x) sets the ultimate ceiling on quantum-to-classical communication.",
      legacyAndImpact: "Together, Shannon's H(X) and Von Neumann's S(ρ) govern data compression, MIMO wireless capacity, black-hole holographic entanglement entropy, and quantum channel capacities.",
      quote: "\"My greatest concern was what to call it... Von Neumann told me: 'You should call it entropy, because nobody knows what entropy really is, so in a debate you will always have the advantage!'\" — Claude E. Shannon"
    }
  }
};

/* ----------------------------------------------------------------------------
 * 8. ILLUSTRATION LABORATORY TOPICS (ALL 5 TOPICS ON SEPARATE PAGES):
 *    - BLOCK-BY-BLOCK ANIMATION DESCRIPTIONS (Revision #4)
 *    - CLASSICAL ROUTING & BELL STATE MEASUREMENTS IN QUANTUM ROUTING (Revision #5)
 *    - WORKED MEASUREMENT EXAMPLES & 12-STEP TUTORIALS
 * ---------------------------------------------------------------------------- */
const illustrationTopicsData = {
  crypto: {
    id: "crypto",
    badge: "LABORATORY TOPIC 01 OF 05 | QUANTUM & CLASSICAL CRYPTOGRAPHY",
    equationBadge: "R \\ge 1 - 2h_2(e_{\\text{bit}})",
    title: "(1) Quantum & Classical Cryptography Channel Simulator (BB84 QKD)",
    subtitle:
      "White-grid notebook handwriting simulation of single-photon polarization key distribution across an optical link. Click any station block or follow the 12-step measurement guide below.",
    blockDescriptions: [
      {
        blockId: "alice",
        code: "BLOCK 01",
        name: "Alice Source & Random Bit Generator (Tx)",
        role: "Quantum State Preparation",
        mathModel: "$|\\psi_k\\rangle \\in \\{|0\\rangle, |1\\rangle, |+\\rangle, |-\\rangle\\}$",
        description: "Generates an attenuated single-photon pulse and encodes a random secret bit $b_A \\in \\{0,1\\}$ in either the Rectilinear ($+$) or Diagonal ($\\times$) polarization basis."
      },
      {
        blockId: "channel",
        code: "BLOCK 02",
        name: "Quantum Optical Fiber Channel",
        role: "Coherent Wavepacket Propagation",
        mathModel: "$U_{\\text{fiber}} = e^{-i k L} I_2$",
        description: "Guides single-photon polarization states from Alice to Bob. In an undisturbed channel, polarization coherence is preserved across the link."
      },
      {
        blockId: "eve",
        code: "BLOCK 03",
        name: "Eve Intercept-Resend Station (x = L/2)",
        role: "Adversarial Projective Collapse",
        mathModel: "$\\rho \\mapsto \\sum_m P_m^{(b_E)} \\rho P_m^{(b_E)}$",
        description: "When active, Eve measures each flying photon in a guessed basis $b_E \\in \\{+, \\times\\}$. Guessing wrong ($50\\%$ of slots) collapses the state into a superposition that induces a $25\\%$ QBER at Bob."
      },
      {
        blockId: "bob",
        code: "BLOCK 04",
        name: "Bob Polarizing Beam Splitter Analyzer (Rx)",
        role: "Basis Selection & Single-Photon Detection",
        mathModel: "$p(m) = |\\langle \\phi_m^{(b_B)} | \\psi \\rangle|^2$",
        description: "Routes incoming photons through an active Pockels-cell basis selector ($b_B \\in \\{+, \\times\\}$) into avalanche photodiode (APD) detectors D0 and D1."
      },
      {
        blockId: "ledger",
        code: "BLOCK 05",
        name: "Authenticated Classical Sifting & QBER Ledger",
        role: "Basis Reconciliation & Security Audit",
        mathModel: "$R = 1 - 2h_2(e_{\\text{bit}})$",
        description: "Compares Alice's and Bob's basis choices over a public channel, keeps matching-basis slots as the Sifted Key, and checks whether QBER $e_{\\text{bit}} < 11.0\\%$."
      }
    ],
    workedMeasurementExample: {
      title: "How to Perform Projective Polarization Measurements & Calculate QBER Step by Step",
      content: `
        <p>
          In quantum mechanics, performing a polarization measurement in a basis $\\mathcal{B} = \\{|\\phi_0\\rangle, |\\phi_1\\rangle\\}$ is modeled by a pair of orthogonal rank 1 projection operators $P_0 = |\\phi_0\\rangle\\langle\\phi_0|$ and $P_1 = |\\phi_1\\rangle\\langle\\phi_1|$ satisfying $P_0 + P_1 = I_2$. By the <strong>Born Rule</strong>, when a photon prepared in state $|\\psi\\rangle$ enters Bob's (or Eve's) polarizing beam splitter, the probability of outcome $m \\in \\{0, 1\\}$ and the post measurement collapsed state are:
        </p>
        <div class="equation-box">
          $$p(m) = \\langle \\psi | P_m | \\psi \\rangle = |\\langle \\phi_m | \\psi \\rangle|^2, \\qquad |\\psi_{\\text{post}}\\rangle = \\frac{P_m |\\psi\\rangle}{\\sqrt{p(m)}}$$
        </div>
        <p>
          <strong>Numerical Example:</strong> Suppose Alice prepares bit $0$ in the Rectilinear $+$ basis: $|\\psi_{\\text{Alice}}\\rangle = |0\\rangle = \\binom{1}{0}$.
          <br/>• <strong>Case 1 (Bob measures in $+$ basis, no Eve):</strong> $P_0^{(+)} = \\binom{1\\;0}{0\\;0}$, so $p(0) = |\\langle 0 | 0 \\rangle|^2 = 1.00$ ($100\\%$ deterministic agreement).
          <br/>• <strong>Case 2 (Eve intercepts in Diagonal $\\times$ basis):</strong> Eve's projector is $P_+^{(\\times)} = |+\\rangle\\langle+| = \\frac{1}{2}\\binom{1\\;1}{1\\;1}$. Eve obtains $+1$ with probability $p(+) = \\langle 0 | P_+^{(\\times)} | 0 \\rangle = 0.50$, collapsing the photon into $|+\\rangle = \\frac{1}{\\sqrt{2}}\\binom{1}{1}$. When that disturbed photon reaches Bob (who measures in $+$), Bob obtains bit $1$ (an error!) with probability $|\\langle 1 | + \\rangle|^2 = 0.50$. Averaged over Eve's $50\\%$ wrong basis choices, $\\text{QBER} = 0.50 \\times 0.50 = 25\\%$.
        </p>
      `
    },
    steps: [
      { step: "STEP 01", title: "Inspect the White-Grid Notebook Static State", desc: "Observe the wide notebook canvas in Static Mode. Six single photons sit along the optical link between Alice (Tx), the Quantum Channel / Eve node, and Bob (Rx)." },
      { step: "STEP 02", title: "Read Alice's State Preparation Row", desc: "Look at the top two rows of the handwritten ledger table inside the canvas: Alice chooses a random binary bit (0 or 1) and a polarization basis (+ Rectilinear or × Diagonal) for each slot." },
      { step: "STEP 03", title: "Compare Bob's Measurement Basis Row", desc: "Examine Row 3 ('Bob Basis'). Bob independently selects + or × for his Polarizing Beam Splitter (PBS) detector without knowing Alice's basis." },
      { step: "STEP 04", title: "Identify the Sifted Key Matches", desc: "In Row 4 ('Sifted Key'), slots where Alice Basis equals Bob Basis are highlighted in Academic Navy; slots where bases differ are marked 'drop' and discarded." },
      { step: "STEP 05", title: "Advance Photons Manually (+15% Step)", desc: "Click [Step Photon +15%] in the Motion Control bar. Watch each photon advance incrementally from Alice toward Bob so you can track its exact position." },
      { step: "STEP 06", title: "Switch to Dynamic Wavepacket Mode", desc: "Click [Dynamic Mode (Animate Photons)] to observe continuous sinusoidal electromagnetic wavepacket propagation and handwriting pen sketch progression." },
      { step: "STEP 07", title: "Activate Eve's Intercept Resend Attack", desc: "Click [Eve Eavesdropper: OFF] to switch Eve ON. Notice the center station turns Scholarly Burgundy ('EVE ACTIVE: Collapses ψ!')." },
      { step: "STEP 08", title: "Observe Mid Link Wavefunction Collapse", desc: "Watch photons passing through the center station (x = L/2): whenever Eve's basis mismatches Alice's basis, the photon color changes from Navy to Burgundy." },
      { step: "STEP 09", title: "Detect Errors in the Sifted Key Ledger", desc: "Look at the Sifted Key row when Eve is ON: matching basis slots that previously agreed 100% now display burgundy 'ERR' flags where Bob's bit flipped." },
      { step: "STEP 10", title: "Verify the Shor Preskill 11% Security Bound", desc: "Read the Telemetry bar: with Eve active, theoretical QBER rises to 25% (exceeding the 11.0% threshold), prompting Alice and Bob to abort the compromised key." },
      { step: "STEP 11", title: "Sample New Random Basis Blocks", desc: "Click [Generate New 6 Qubit Key Block] several times to run Monte Carlo trials and observe statistical fluctuations in sifted key length and error counts." },
      { step: "STEP 12", title: "Inspect Each Animation Block Below", desc: "Click any of the 5 Animation Block Cards below the canvas to highlight that block and read its exact operator model." }
    ]
  },

  hamming: {
    id: "hamming",
    badge: "LABORATORY TOPIC 02 OF 05 | CLASSICAL ERROR CORRECTION",
    equationBadge: "d_{\\min}(000, 111) = 3, \\; \\mathbf{s} = \\mathbf{r}H^T",
    title: "(2) 3D Box Hamming Distance Cube (000 and 111 Codewords)",
    subtitle:
      "White-grid notebook 3D Boolean hypercube {0,1}^3 laboratory illustrating the [3,1,3] repetition code, disjoint Hamming spheres of radius t=1, syndrome calculation, and nearest neighbor decoding.",
    blockDescriptions: [
      {
        blockId: "cw000",
        code: "BLOCK 01",
        name: "Codeword 000 Sphere Center (Logical 0)",
        role: "Valid Codeword Origin Vertex",
        mathModel: "$\\mathbf{c}_0 = 0 \\cdot G = (0, 0, 0)$",
        description: "Represents encoded logical bit $u=0$ at the origin of the 3D Boolean cube $\\{0,1\\}^3$. Surrounded by a radius-$1$ Hamming sphere containing $\\{000, 100, 010, 001\\}$."
      },
      {
        blockId: "cw111",
        code: "BLOCK 02",
        name: "Codeword 111 Sphere Center (Logical 1)",
        role: "Antipodal Codeword Vertex",
        mathModel: "$\\mathbf{c}_1 = 1 \\cdot G = (1, 1, 1)$",
        description: "Represents encoded logical bit $u=1$ at the opposite corner of the cube, separated from $000$ by $d_{\\min} = 3$ orthogonal edge hops."
      },
      {
        blockId: "sphere0",
        code: "BLOCK 03",
        name: "Single-Bit Error Shell Around 000",
        role: "Weight-1 Error Vertices {100, 010, 001}",
        mathModel: "$B_1(000) = \\{\\mathbf{r} : d_H(\\mathbf{r}, 000) \\le 1\\}$",
        description: "The 3 light-blue vertices at distance $1$ from $000$. Any single bit-flip on $000$ lands on one of these vertices and is pulled back to $000$ by majority voting."
      },
      {
        blockId: "sphere1",
        code: "BLOCK 04",
        name: "Single-Bit Error Shell Around 111",
        role: "Weight-1 Error Vertices {011, 101, 110}",
        mathModel: "$B_1(111) = \\{\\mathbf{r} : d_H(\\mathbf{r}, 111) \\le 1\\}$",
        description: "The 3 burgundy-tinted vertices at distance $1$ from $111$. Together, $B_1(000) \\cup B_1(111)$ partition all $8$ vertices of $\\{0,1\\}^3$ with zero overlap."
      },
      {
        blockId: "syndrome",
        code: "BLOCK 05",
        name: "Parity-Check Syndrome Decoder Block",
        role: "Linear Algebraic Fault Localization",
        mathModel: "$\\mathbf{s} = (r_1 \\oplus r_2, \\; r_2 \\oplus r_3)$",
        description: "Computes the 2-bit syndrome $\\mathbf{s} = \\mathbf{r}H^T \\pmod 2$ to identify which cube axis edge ($X, Y,$ or $Z$) suffered a bit flip."
      }
    ],
    workedMeasurementExample: {
      title: "How to Compute Parity Syndromes & Perform Nearest Neighbor Decoding Step by Step",
      content: `
        <p>
          In the $[3,1,3]$ binary repetition code, a single information bit $u \\in \\{0, 1\\}$ is encoded via the generator matrix $G = \\begin{pmatrix} 1 & 1 & 1 \\end{pmatrix}$ into codeword $\\mathbf{c}_0 = (0,0,0)$ or $\\mathbf{c}_1 = (1,1,1)$. Suppose the channel injects a single bit flip error on coordinate 2: $\\mathbf{e} = (0, 1, 0)$, so the received vector is $\\mathbf{r} = \\mathbf{c} \\oplus \\mathbf{e}$.
        </p>
        <div class="equation-box">
          $$\\mathbf{s} = \\mathbf{r} H^T = \\begin{pmatrix} r_1 & r_2 & r_3 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} r_1 \\oplus r_2, & r_2 \\oplus r_3 \\end{pmatrix} \\pmod 2$$
        </div>
        <p>
          <strong>Step by Step Decoding Table:</strong>
          <br/>• $\\mathbf{s} = (0, 0) \\implies$ No error ($\\hat{\\mathbf{e}} = 000$).
          <br/>• $\\mathbf{s} = (1, 0) \\implies$ Bit 1 flipped ($\\hat{\\mathbf{e}} = 100$, since $r_1 \\neq r_2$ but $r_2 = r_3$).
          <br/>• $\\mathbf{s} = (1, 1) \\implies$ Bit 2 flipped ($\\hat{\\mathbf{e}} = 010$, since both parity checks fired!).
          <br/>• $\\mathbf{s} = (0, 1) \\implies$ Bit 3 flipped ($\\hat{\\mathbf{e}} = 001$, since $r_1 = r_2$ but $r_2 \\neq r_3$).
          <br/>Subtracting $\\hat{\\mathbf{c}} = \\mathbf{r} \\oplus \\hat{\\mathbf{e}}$ moves the corrupted vertex along the single cube edge back to its true center ($000$ or $111$)!
        </p>
      `
    },
    steps: [
      { step: "STEP 01", title: "Examine the 8 Vertices on the White Grid Notebook", desc: "Start in Static Mode (Fixed Cube). Locate codeword 000 (dark Navy circle) and codeword 111 (dark Burgundy circle) at opposite corners of the 3D cube." },
      { step: "STEP 02", title: "Trace the 3 Edge Path for Minimum Distance", desc: "Follow any shortest path along the cube edges from 000 to 111 (e.g., 000 → 100 → 110 → 111). Counting 3 edges confirms d_min = 3." },
      { step: "STEP 03", title: "Inspect the Navy Decoding Sphere (Radius t=1)", desc: "Observe the 3 light blue vertices directly connected to 000 by a single navy edge: {100, 010, 001}. Any vector in this set decodes to 000." },
      { step: "STEP 04", title: "Inspect the Burgundy Decoding Sphere (Radius t=1)", desc: "Observe the 3 light pink vertices directly connected to 111 by a single burgundy edge: {011, 101, 110}. Any vector in this set decodes to 111." },
      { step: "STEP 05", title: "Inject a Single Bit Flip Error (e_1)", desc: "With Codeword 000 selected, click [Flip Bit 1 (e_1)]. The active halo jumps from 000 to 100 along the X axis edge." },
      { step: "STEP 06", title: "Read the Syndrome Vector s = r H^T", desc: "Check the Telemetry bar: for r = 100, the syndrome is s = (1, 0), and d_H(100, 000) = 1 < d_H(100, 111) = 2, so the decoder recovers 000." },
      { step: "STEP 07", title: "Inject a Second Bit Flip Error (Weight 2 Failure)", desc: "Now click [Flip Bit 2 (e_2)] as well, producing r = 110. Notice r = 110 lies at distance 2 from 000 but distance 1 from 111—causing a decoding error!" },
      { step: "STEP 08", title: "Click Any 3D Vertex Directly on the Canvas", desc: "Click directly on any of the 8 circular nodes in the wide canvas to jump the received vector r to that exact binary string." },
      { step: "STEP 09", title: "Switch Transmitted Codeword to 111", desc: "Click [Codeword 111] to transmit logical 1, then test single bit flips (111 → 011, 101, 110) and verify successful recovery." },
      { step: "STEP 10", title: "Step the 3D Rotation Angle (+15°)", desc: "Click [Rotate +15° Step] to inspect the 3D cube from different orthographic perspectives without continuous motion." },
      { step: "STEP 11", title: "Enable Dynamic 3D Euclidean Rotation", desc: "Click [Dynamic Mode (Rotate 3D Cube)] to watch the two Hamming spheres of radius 1 orbit smoothly on the notebook grid." },
      { step: "STEP 12", title: "Verify the Perfect Sphere Packing Identity", desc: "Confirm that 2^k · (1 + 3) = 2 · 4 = 8 = 2^n, proving that the two radius 1 spheres partition all 8 vertices of {0,1}^3 with zero leftover points." }
    ]
  },

  topology: {
    id: "topology",
    badge: "LABORATORY TOPIC 03 OF 05 | CODE & HARDWARE TOPOLOGY",
    equationBadge: "[[7,1,3]] \\text{ Steane} \\cdot \\text{IBM Heavy Hex} \\cdot SU(2)",
    title: "(3) Topology Explorer: [7,4,3] Hamming / [[7,1,3]] Steane, IBM Heavy Hex & SU(2) Group",
    subtitle:
      "White-grid notebook topological canvas comparing the projective Fano plane PG(2,2) of the 7 Qubit Steane code, IBM Quantum's Heavy Hex superconducting processor lattice, the SU(2) Unitary Lie group manifold, and 2D Planar Surface Codes.",
    blockDescriptions: [
      {
        blockId: "fano-corners",
        code: "BLOCK 01",
        name: "Outer Triangle Corner Qubits (q1, q2, q3)",
        role: "Weight-1 Syndrome Boundary Qubits",
        mathModel: "$\\mathbf{s}(q_1)=(0,0,1), \\; \\mathbf{s}(q_2)=(0,1,0), \\; \\mathbf{s}(q_3)=(1,0,0)$",
        description: "Each outer vertex of the Fano triangle participates in exactly one weight-4 stabilizer generator, producing a unit-weight binary syndrome when faulted."
      },
      {
        blockId: "fano-midpoints",
        code: "BLOCK 02",
        name: "Triangle Edge Midpoint Qubits (q4, q5, q6)",
        role: "Weight-2 Plaquette Intersection Qubits",
        mathModel: "$\\mathbf{s}(q_4)=(1,1,0), \\; \\mathbf{s}(q_5)=(1,0,1), \\; \\mathbf{s}(q_6)=(0,1,1)$",
        description: "Located along the inscribed circle of $\\text{PG}(2,2)$, each midpoint is shared by two stabilizer plaquettes and triggers two ancilla checks simultaneously."
      },
      {
        blockId: "fano-center",
        code: "BLOCK 03",
        name: "Central Centroid Qubit (q7)",
        role: "Triple-Plaquette Core Qubit",
        mathModel: "$\\mathbf{s}(q_7) = (1, 1, 1)_2 = 7_{10}$",
        description: "Lies at the intersection of all three median lines of the Fano plane ($S_1, S_2, S_3$), causing all three stabilizer checks to fire when an $X$ or $Z$ error occurs on $q_7$."
      },
      {
        blockId: "heavy-hex",
        code: "BLOCK 04",
        name: "IBM Heavy-Hex Vertex & Bridge Flag Qubits",
        role: "Hardware Crosstalk Suppression Graph",
        mathModel: "$\\text{deg}(v_{\\text{corner}})=3, \\; \\text{deg}(v_{\\text{bridge}})=2$",
        description: "Places degree-2 bridge flag qubits along every edge of a hexagonal lattice so no superconducting transmon exceeds degree 3, preventing cross-resonance frequency collisions."
      },
      {
        blockId: "su2-manifold",
        code: "BLOCK 05",
        name: "SU(2) ≅ S^3 Unitary Lie Group Fiber Bundle",
        role: "Continuous Single-Qubit Gate Geodesics",
        mathModel: "$U(t) = \\exp(-i t \\hat{n}\\cdot\\vec{\\sigma}/2) \\in SU(2)$",
        description: "Visualizes continuous unitary gate trajectories on the 3-sphere double cover of the Bloch sphere, where a $2\\pi$ rotation accumulates a $-1$ spinor phase."
      }
    ],
    workedMeasurementExample: {
      title: "How to Extract Stabilizer Syndromes on the [[7,1,3]] Steane Fano Plane & IBM Heavy Hex",
      content: `
        <p>
          In the $[[7,1,3]]$ Steane quantum code, 7 physical qubits $q_1, \\dots, q_7$ are placed at the 7 points of the projective <strong>Fano Plane $\\text{PG}(2,2)$</strong>. Three weight 4 $Z$ stabilizer generators ($S_1^Z, S_2^Z, S_3^Z$) detect $X$ bit flips, and three weight 4 $X$ stabilizer generators ($S_1^X, S_2^X, S_3^X$) detect $Z$ phase flips:
        </p>
        <div class="equation-box">
          $$S_1 = O_4 O_5 O_6 O_7, \\qquad S_2 = O_2 O_3 O_6 O_7, \\qquad S_3 = O_1 O_3 O_5 O_7 \\qquad (O \\in \\{X, Z\\})$$
        </div>
        <p>
          <strong>How to Localize a Fault from 3 Ancilla Measurements:</strong>
          Suppose a Pauli $X$ error hits the center centroid qubit $q_7$. Because $q_7$ belongs to all three stabilizer sets ($\\{4,5,6,7\\}$, $\\{2,3,6,7\\}$, and $\\{1,3,5,7\\}$), all three $Z$ ancillas anti commute with $X_7$ and output eigenvalue $-1$ (binary syndrome $\\mathbf{s} = (1, 1, 1)_2 = 7_{10}$). Reading the binary syndrome $(s_1, s_2, s_3)$ as a 3 bit integer directly gives the index $j \\in \\{1,\\dots,7\\}$ of the corrupted qubit!
        </p>
      `
    },
    steps: [
      { step: "STEP 01", title: "Start in Fano Plane Static Mode", desc: "Observe the 7 Qubit Steane / Hamming Fano Plane sketched on the white notebook grid. Note the 3 outer vertices, 3 edge midpoints, and 1 central centroid qubit (q7)." },
      { step: "STEP 02", title: "Click Center Qubit q7 on the Canvas", desc: "Click the central node q7. Watch it turn Burgundy and read the Telemetry bar: syndrome (s1, s2, s3) = (1, 1, 1), binary for 7." },
      { step: "STEP 03", title: "Test Outer Corner Qubits (q1, q2, q3)", desc: "Click top vertex q1, bottom left q2, and bottom right q3 one by one. Observe that each corner triggers only a single stabilizer check (weight 1 syndrome)." },
      { step: "STEP 04", title: "Test Edge Midpoint Qubits (q4, q5, q6)", desc: "Click midpoint nodes q4, q5, or q6. Notice each midpoint lies at the intersection of two stabilizer plaquettes, producing a weight 2 syndrome." },
      { step: "STEP 05", title: "Switch to IBM Heavy Hex Lattice Topology", desc: "Click [IBM Heavy Hex Lattice] in the Select Topology bar to load the superconducting processor coupling graph used by IBM Heron/Eagle." },
      { step: "STEP 06", title: "Distinguish Vertex Qubits vs. Bridge Flag Qubits", desc: "In the Heavy Hex view, compare the dark Navy corner qubits (degree 3) against the light blue midpoint bridge qubits (degree 2) that act as error flags." },
      { step: "STEP 07", title: "Click Heavy Hex Nodes to Simulate Crosstalk Isolation", desc: "Click different nodes on the hexagonal cells to see how placing degree 2 bridge qubits between degree 3 data qubits separates transmon resonance frequencies." },
      { step: "STEP 08", title: "Switch to SU(2) Unitary Group Topology", desc: "Click [SU(2) Unitary Group Topology] to view the Hopf fibration projection of the 3 sphere Lie group manifold SU(2) ≅ S^3." },
      { step: "STEP 09", title: "Step the Unitary Lie Group Parameter (+1 Step)", desc: "Click [Step Phase +1] to advance the unitary operator U(t) = exp(-it n·σ/2) along its closed geodesic fiber in Static Mode." },
      { step: "STEP 10", title: "Activate Dynamic Mode on SU(2) Manifold", desc: "Click [Dynamic Mode (Animate Wave/Flow)] to watch continuous unitary group evolution and handwriting sketch flow." },
      { step: "STEP 11", title: "Switch to 2D Planar Surface Code Lattice", desc: "Click [2D Planar Surface Code] to inspect the 3×3 planar grid of data qubits D0..D8 and nearest neighbor parity checks." },
      { step: "STEP 12", title: "Inspect Each Topological Block Below", desc: "Click any of the 5 Block Description cards below the canvas to highlight the corresponding qubits or manifold region." }
    ]
  },

  circuit: {
    id: "circuit",
    badge: "LABORATORY TOPIC 04 OF 05 | QUANTUM CIRCUIT & MATRICES",
    equationBadge: "|\\psi_{\\text{out}}\\rangle = U_4 U_3 U_2 U_1 |000\\rangle",
    title: "(4) Interactive 3 Qubit Quantum Circuit & Unitary Matrix Simulator",
    subtitle:
      "White-grid notebook 3-qubit quantum circuit composer and statevector engine. Click any gate box (I, H, X, Z, S) to edit operators, step the unitary wavefront column by column, and inspect each circuit block.",
    blockDescriptions: [
      {
        blockId: "register",
        code: "BLOCK 01",
        name: "3-Qubit Input Register |q0 q1 q2⟩ = |000⟩",
        role: "8-Dimensional Hilbert Space Initialization",
        mathModel: "$|\\psi_0\\rangle = |0\\rangle \\otimes |0\\rangle \\otimes |0\\rangle = (1,0,0,0,0,0,0,0)^T$",
        description: "Initializes three horizontal qubit wires in the computational ground state $|000\\rangle \\in (\\mathbb{C}^2)^{\\otimes 3}$ prior to unitary gate evolution."
      },
      {
        blockId: "col1",
        code: "BLOCK 02",
        name: "Layer Column 1: Hadamard Superposition Block",
        role: "Coherent Basis Branching",
        mathModel: "$U_1 = H \\otimes I \\otimes I, \\quad H = \\frac{1}{\\sqrt{2}}\\binom{1\\;\\;1}{1\\;-1}$",
        description: "Places control qubit $q_0$ into an equal superposition $(|0\\rangle+|1\\rangle)/\\sqrt{2}$, splitting the 8-dimensional statevector into two coherent branches."
      },
      {
        blockId: "col2",
        code: "BLOCK 03",
        name: "Layer Column 2: First Entangling CNOT_0,1 Block",
        role: "Bipartite Bell Entanglement Generation",
        mathModel: "$U_2 = \\text{CNOT}_{0,1} \\otimes I = |0\\rangle\\langle 0|\\otimes I_4 + |1\\rangle\\langle 1|\\otimes (X \\otimes I_2)$",
        description: "Flips target wire $q_1$ conditioned on $q_0 = |1\\rangle$, transforming $(|000\\rangle+|100\\rangle)/\\sqrt{2}$ into the entangled Bell-like state $(|000\\rangle+|110\\rangle)/\\sqrt{2}$."
      },
      {
        blockId: "col3",
        code: "BLOCK 04",
        name: "Layer Column 3: Cascade CNOT_1,2 / Phase Gate Block",
        role: "Tripartite GHZ Entanglement Propagation",
        mathModel: "$U_3 = I \\otimes \\text{CNOT}_{1,2} \\implies |\\text{GHZ}_3\\rangle = \\frac{|000\\rangle+|111\\rangle}{\\sqrt{2}}$",
        description: "Propagates entanglement from wire $q_1$ to wire $q_2$, locking all three qubits into a maximally entangled tripartite GHZ state (or custom Pauli/Phase gate when clicked)."
      },
      {
        blockId: "col4",
        code: "BLOCK 05",
        name: "Layer Column 4: Projective Z-Basis Readout Meters (M)",
        role: "Born-Rule Probability Collapse & Histogram",
        mathModel: "$P(x_0 x_1 x_2) = |\\langle x_0 x_1 x_2 | \\psi_{\\text{out}} \\rangle|^2$",
        description: "Performs simultaneous projective measurement $M^{\\otimes 3}$ in the computational $Z$ basis, outputting the 8-bar probability histogram on the right side of the notebook."
      }
    ],
    workedMeasurementExample: {
      title: "How to Multiply Kronecker Tensor Matrices & Compute Output Probabilities Step by Step",
      content: `
        <p>
          A 3 qubit register starts in the 8 dimensional computational basis vector $|000\\rangle = (1, 0, 0, 0, 0, 0, 0, 0)^T \\in (\\mathbb{C}^2)^{\\otimes 3}$. Let us trace the <strong>3 Qubit GHZ Circuit</strong> across its unitary layers:
        </p>
        <div class="equation-box">
          $$|\\psi_1\\rangle = (H \\otimes I \\otimes I)|000\\rangle = \\left(\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}\\right)\\otimes |00\\rangle = \\frac{1}{\\sqrt{2}}|000\\rangle + \\frac{1}{\\sqrt{2}}|100\\rangle$$
        </div>
        <p>
          <strong>Layer 2 ($\\text{CNOT}_{0,1} \\otimes I$):</strong> Flips target wire $q_1$ if and only if control wire $q_0 = |1\\rangle$:
          $$|\\psi_2\\rangle = \\frac{1}{\\sqrt{2}}|000\\rangle + \\frac{1}{\\sqrt{2}}|110\\rangle$$
          <strong>Layer 3 ($I \\otimes \\text{CNOT}_{1,2}$):</strong> Flips target wire $q_2$ if and only if control wire $q_1 = |1\\rangle$:
          $$|\\psi_3\\rangle = \\frac{1}{\\sqrt{2}}|000\\rangle + \\frac{1}{\\sqrt{2}}|111\\rangle = |\\text{GHZ}_3\\rangle$$
          <strong>Layer 4 (Projective Measurement $M^{\\otimes 3}$):</strong> By Born's rule, $P(000) = |1/\\sqrt{2}|^2 = 50\\%$ and $P(111) = |1/\\sqrt{2}|^2 = 50\\%$, while all 6 other 3 bit strings have $0\\%$ probability!
        </p>
      `
    },
    steps: [
      { step: "STEP 01", title: "Inspect the 3 Qubit Wires on the White Notebook Grid", desc: "Observe the three horizontal quantum wires q0 |0⟩, q1 |0⟩, and q2 |0⟩ initialized in the ground state |000⟩." },
      { step: "STEP 02", title: "Locate the Burgundy Wavefront Column Marker", desc: "In Static Mode, a vertical shaded burgundy band marks the currently inspected unitary gate column (starting at Column 1)." },
      { step: "STEP 03", title: "Read the Kronecker Layer Operator in Telemetry", desc: "Look at the Telemetry bar to see the exact tensor product operator U_1 = H ⊗ I ⊗ I for Column 1." },
      { step: "STEP 04", title: "Advance Through Gate Layers (+1 Step)", desc: "Click [Step Gate Layer +1] to move the wavefront marker from Column 1 (Hadamard) → Column 2 (CNOT 0,1) → Column 3 (CNOT 1,2) → Column 4 (Measurement M)." },
      { step: "STEP 05", title: "Click Any Gate Box on the Canvas to Edit", desc: "Click directly on any gate square in Columns 1, 2, or 3 on the canvas. Each click cycles the operator through I → H → X → Z → S and updates the output histogram live!" },
      { step: "STEP 06", title: "Load the Bell Pair |Φ+⟩ Circuit Preset", desc: "Click [Bell Pair |Φ+⟩] in the Circuit Presets bar to configure a 2 qubit maximally entangled state on q0 and q1 while q2 remains separable." },
      { step: "STEP 07", title: "Load the 3 Qubit ECC Repetition Encoding Circuit", desc: "Click [3 Qubit ECC Encoding] to see how two CNOT gates copy computational basis states α|0⟩+β|1⟩ into the logical codeword α|000⟩+β|111⟩." },
      { step: "STEP 08", title: "Load the Uniform Hadamard H⊗3 Circuit", desc: "Click [Uniform H⊗3] to place Hadamard gates on all three wires, creating an equal superposition of all 8 binary states (12.5% probability each)." },
      { step: "STEP 09", title: "Switch to Dynamic Wavefront Sweep Mode", desc: "Click [Dynamic Mode (Sweep Wavefront)] to animate the unitary time evolution operator sweeping continuously from left to right." },
      { step: "STEP 10", title: "Return to Static Mode at Any Instant", desc: "Click [Static Mode (Manual Step)] to freeze the wavefront and inspect the exact gate column." },
      { step: "STEP 11", title: "Verify Unitarity U†U = I in the Matrix Panel", desc: "Examine the 2×2 Pauli X, Z and 4×4 CNOT matrices below the canvas and verify that all rows and columns are orthonormal." },
      { step: "STEP 12", title: "Click Block Cards Below to Highlight Circuit Columns", desc: "Click any of the 5 Circuit Block Description cards below the controls to jump the wavefront directly to that circuit block." }
    ]
  },

  routing: {
    id: "routing",
    badge: "LABORATORY TOPIC 05 OF 05 | CLASSICAL & QUANTUM ENTANGLEMENT ROUTING",
    equationBadge: "|\\Phi^+\\rangle_{AR_1}|\\Phi^+\\rangle_{R_2B} \\xrightarrow{\\text{BSM}} Z_B^{m_1}X_B^{m_2}|\\Phi^+\\rangle_{AB}",
    title: "(5) Classical Shortest-Path Routing vs. Bell State Measurements (BSM) in Quantum Entanglement Routing",
    subtitle:
      "White-grid notebook interactive comparison of Classical Dijkstra Packet Switching (additive link cost ∑ c_e) against Quantum Repeater Entanglement Routing with joint Bell State Measurements (BSM), 2-bit classical feedforward, and Pauli frame correction.",
    blockDescriptions: [
      {
        blockId: "dijkstra",
        code: "BLOCK 01",
        name: "Classical Router Path (Dijkstra Store-and-Forward)",
        role: "Additive Cost Packet Switching",
        mathModel: "$D^*(\\mathcal{P}) = \\min_{\\mathcal{P}} \\sum_{e \\in \\mathcal{P}} c_e$",
        description: "In the upper track, classical routers measure, buffer, and copy digital packets hop-by-hop along the minimum additive latency path ($A \\to R_A \\to R_B \\to B$)."
      },
      {
        blockId: "elem-links",
        code: "BLOCK 02",
        name: "Elementary Entangled Bell Links (A—R1 and R2—B)",
        role: "Short-Hop Werner Entanglement Generation",
        mathModel: "$\\rho_{AR_1} \\otimes \\rho_{R_2 B}, \\quad F_0 = \\frac{1+3w}{4}$",
        description: "Simultaneously distributes two short-distance entangled EPR pairs: $|\Phi^+\\rangle_{A, R_1}$ on the left fiber segment and $|\Phi^+\\rangle_{R_2, B}$ on the right fiber segment."
      },
      {
        blockId: "bsm-box",
        code: "BLOCK 03",
        name: "Repeater Node Bell State Measurement (BSM) Analyzer",
        role: "Joint CNOT + Hadamard Entanglement Swapping",
        mathModel: "$P_{\\mathcal{B}_{m_1 m_2}} = |\\mathcal{B}_{m_1 m_2}\\rangle\\langle \\mathcal{B}_{m_1 m_2}|_{R_1 R_2}$",
        description: "Applies $\\text{CNOT}_{R_1 \\to R_2}$ followed by $H_{R_1}$ and measures both repeater memories $(R_1, R_2)$ in the $Z$ basis, collapsing them into one of the 4 Bell states $\\{|\\Phi^+\\rangle, |\\Phi^-\\rangle, |\\Psi^+\\rangle, |\\Psi^-\\rangle\\}$."
      },
      {
        blockId: "feedforward",
        code: "BLOCK 04",
        name: "2-Bit Classical Feedforward Heralding Channel",
        role: "Light-Speed Parity Notification (m1, m2)",
        mathModel: "$(m_1, m_2) \\in \\{00, 10, 01, 11\\}$",
        description: "Broadcasts the 2-bit BSM outcome $(m_1, m_2)$ from the central Repeater node to Destination Bob at classical speed of light $c/n$ so Bob knows which Bell state was projected."
      },
      {
        blockId: "pauli-frame",
        code: "BLOCK 05",
        name: "Bob's Local Pauli Frame Correction (Z^m1 X^m2)",
        role: "End-to-End Fidelity & State Recovery",
        mathModel: "$Z_B^{m_1} X_B^{m_2} |\\mathcal{B}_{m_1 m_2}\\rangle_{AB} = |\\Phi^+\\rangle_{AB}, \\quad F_{\\text{e2e}} = \\frac{1+3w_1 w_2}{4}$",
        description: "Applies $I$ (for $00$), $Z$ (for $10$), $X$ (for $01$), or $XZ$ (for $11$) on qubit $B$, completing long-distance entanglement $|\\Phi^+\\rangle_{AB}$ even though no photon ever traveled directly from $A$ to $B$!"
      }
    ],
    workedMeasurementExample: {
      title: "How to Perform a Bell State Measurement (BSM) & Derive Entanglement Swapping Step by Step",
      content: `
        <p>
          Suppose Alice ($A$) shares $|\Phi^+\\rangle_{A R_1} = \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle)$ with Repeater memory $R_1$, and Repeater memory $R_2$ shares $|\Phi^+\\rangle_{R_2 B} = \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle)$ with Bob ($B$). How does measuring $(R_1, R_2)$ at the central repeater entangle $A$ and $B$? We rewrite the 4-qubit product state by expressing the middle qubits $(R_1, R_2)$ in the <strong>4-state Bell basis</strong>:
        </p>
        <div class="equation-box">
          $$|\\Psi_{\\text{total}}\\rangle = |\\Phi^+\\rangle_{A R_1} \\otimes |\\Phi^+\\rangle_{R_2 B} = \\frac{1}{2}\\Big( |\\Phi^+\\rangle_{R_1 R_2}|\\Phi^+\\rangle_{AB} + |\\Phi^-\\rangle_{R_1 R_2}|\\Phi^-\\rangle_{AB} + |\\Psi^+\\rangle_{R_1 R_2}|\\Psi^+\\rangle_{AB} + |\\Psi^-\\rangle_{R_1 R_2}|\\Psi^-\\rangle_{AB} \\Big)$$
        </div>
        <p>
          <strong>Step-by-Step Hardware Implementation of BSM:</strong>
          <br/>1. <strong>Apply $\\text{CNOT}_{R_1 \\to R_2}$ then $H_{R_1}$:</strong> This unitary circuit maps the 4 entangled Bell states onto the 4 computational basis states: $|\\Phi^+\\rangle \\mapsto |00\\rangle$, $|\\Phi^-\\rangle \\mapsto |10\\rangle$, $|\\Psi^+\\rangle \\mapsto |01\\rangle$, $|\\Psi^-\\rangle \\mapsto |11\\rangle$.
          <br/>2. <strong>Measure $(R_1, R_2)$ in the $Z$ Basis:</strong> Each outcome $(m_1, m_2) \\in \\{00, 10, 01, 11\\}$ occurs with probability $p = 1/4 = 25\\%$.
          <br/>3. <strong>Apply Pauli Correction at Bob:</strong> If the repeater measures $(m_1, m_2) = (0, 1)$ (corresponding to $|\\Psi^+\\rangle_{R_1 R_2}$), Alice and Bob's remote qubits immediately collapse into $|\\Psi^+\\rangle_{AB} = \\frac{1}{\\sqrt{2}}(|01\\rangle + |10\\rangle)$. Bob receives $(0,1)$ over the classical channel and applies $X_B$, transforming $X_B |\\Psi^+\\rangle_{AB} = |\\Phi^+\\rangle_{AB}$!
        </p>
      `
    },
    steps: [
      { step: "STEP 01", title: "Compare Upper (Classical) vs. Lower (Quantum) Tracks", desc: "On the white notebook grid, observe the Upper Track (Classical Dijkstra Router Path) and the Lower Track (Quantum Entanglement Swapping via Repeater BSM)." },
      { step: "STEP 02", title: "Inspect Classical Additive Path Costs", desc: "In the Upper Track, notice how a classical IP packet hops A → R1 → R2 → B, accumulating additive latency cost D = c_1 + c_2 + c_3 while being copied at each router." },
      { step: "STEP 03", title: "Inspect Elementary Quantum Bell Pairs", desc: "In the Lower Track, observe the two separate short-hop entangled Bell pairs |Φ+⟩_{A,R1} and |Φ+⟩_{R2,B} generated prior to the Bell State Measurement." },
      { step: "STEP 04", title: "Examine the Central BSM Analyzer Circuit", desc: "Look at the central Quantum Repeater node R holding memories R1 and R2, where CNOT_{R1,R2} and Hadamard H_{R1} perform a joint Bell State Measurement." },
      { step: "STEP 05", title: "Select BSM Outcome 00 (|Φ+⟩ Projection)", desc: "Click [BSM: 00 (|Φ+⟩ → I)] in the controls. When the repeater measures 00, Alice and Bob immediately share |Φ+⟩_{AB} and Bob applies Identity I." },
      { step: "STEP 06", title: "Select BSM Outcome 10 (|Φ-⟩ Projection)", desc: "Click [BSM: 10 (|Φ-⟩ → Z_B)]. A relative phase flip occurred during swapping; Bob applies a Pauli Z_B gate after receiving the 2-bit classical message (1,0)." },
      { step: "STEP 07", title: "Select BSM Outcome 01 (|Ψ+⟩ Projection)", desc: "Click [BSM: 01 (|Ψ+⟩ → X_B)]. The repeater measured anti-correlated bits; Bob applies a Pauli X_B bit-flip gate to recover |Φ+⟩_{AB}." },
      { step: "STEP 08", title: "Select BSM Outcome 11 (|Ψ-⟩ Singlet Projection)", desc: "Click [BSM: 11 (|Ψ-⟩ → Z_B X_B)]. The repeater projected onto the antisymmetric singlet state; Bob applies both X_B and Z_B to restore |Φ+⟩_{AB}." },
      { step: "STEP 09", title: "Toggle Repeater Hop Count (1-Hop vs. 2-Hop Chain)", desc: "Click [Toggle 1-Repeater / 2-Repeater Chain] to observe how adding a second repeater node multiplies the Werner parameters w_total = w^N." },
      { step: "STEP 10", title: "Step the Routing Protocol Phase (+1 Step)", desc: "Click [Step Routing Phase +1] to step sequentially through Phase 1 (Link Generation) → Phase 2 (Joint BSM Collapse) → Phase 3 (Classical Feedforward) → Phase 4 (Long-Range |Φ+⟩_{AB})." },
      { step: "STEP 11", title: "Enable Dynamic Mode to Animate Packets & Swapping", desc: "Click [Dynamic Mode (Animate Routing & BSM)] to watch classical packets hop along the top path while quantum entanglement swaps across the bottom path." },
      { step: "STEP 12", title: "Click Any Routing Block on Canvas or Below", desc: "Click any router/repeater station on the notebook canvas or click the 5 Block Description cards below to inspect its exact mathematical role." }
    ]
  }
};
