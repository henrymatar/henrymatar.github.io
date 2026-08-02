export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  slug: string;
  image?: string;
  date: string;
  desc: string;
  bullets?: string[];
  tech?: string[];
  categories: string[];
  links: ProjectLink[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Golden Arduino',
    slug: 'golden-arduino',
    date: '2026-05-01',
    desc: 'Custom ATmega328P-based Arduino designed in Altium with signal-integrity best practices, outperforming a commercial Arduino Uno.',
    bullets: [
      'Designed a custom ATmega328P-based Arduino with fewer cross-unders, decoupling capacitors at every VCC pin, a ferrite bead LC filter, and a continuous ground plane',
      'Bootloaded and characterized the board against a commercial Arduino Uno, achieving 2x faster rise times and 10x lower near-field emissions on the 5V rail',
      'Debugged a solder bridge under the ATmega and resolved a bootloading failure through systematic signal probing',
    ],
    tech: ['Altium', 'ATmega328P', 'Signal Integrity'],
    categories: ['PCB Design'],
    featured: true,
    links: [
      { label: 'Report (PDF)', url: '/reports/golden-arduino-report.pdf' },
    ],
  },
  {
    title: '4-Layer PCB - Thevenin Resistance Instrument',
    slug: 'thevenin-resistance-instrument',
    date: '2026-05-01',
    desc: '4-layer Arduino Uno shield measuring Thevenin resistance across 20 current steps using a DAC, op-amp feedback loop, and ADC over I2C.',
    bullets: [
      'Designed a 4-layer shield to compute Thevenin resistance of a device under test across 20 current steps, pulsed at a 10% duty cycle',
      'Included a DAC over I2C, a 1:3 voltage divider to support up to 12V while staying within the 5V ADC range, and smart LEDs plus a buzzer for status',
      'Simulated and verified analog subsystems including a MOSFET-driven electronic load, voltage dividers, and sense resistor circuitry in SPICE',
      'Debugged full system bring-up with oscilloscopes and test points, resolving component orientation errors and an ADC footprint mismatch',
    ],
    tech: ['Altium', 'SPICE', 'I2C', 'Analog Design'],
    categories: ['PCB Design', 'Analog Circuits'],
    featured: true,
    links: [
      { label: 'Report (PDF)', url: '/reports/thevenin-instrument-report.pdf' },
    ],
  },
  {
    title: 'Embedded Software Blackjack Game System',
    slug: 'embedded-blackjack',
    date: '2025-12-01',
    desc: 'Embedded casino-style Blackjack game on an STM32 microcontroller with real-time LCD graphics and custom game-state logic.',
    bullets: [
      'Developed a fully playable Blackjack game in C for an STM32, with real-time LCD graphics, button controls, randomized card generation, and dynamic balance tracking',
      'Implemented game-state management, hidden dealer card behavior, betting mechanics, and a custom cheat-code detection sequence using timed interrupts',
      'Built a multi-screen embedded UI with home navigation and win/loss states using low-level hardware drivers',
    ],
    tech: ['STM32', 'C', 'Embedded UI'],
    categories: ['Embedded Systems'],
    featured: true,
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/henrymatar/Embedded-STM32-Blackjack-Game/tree/main',
      },
      { label: 'Demo Video', url: 'https://www.youtube.com/shorts/6FZ1xUJ5GN0' },
    ],
  },
  {
    title: 'Electronics Design Lab Robot',
    slug: 'edl-robot',
    date: '2025-05-01',
    desc: 'Bluetooth-controlled mobile robot with closed-loop motor control, built and characterized across 6 lab milestones.',
    bullets: [
      'Designed and implemented a Bluetooth-controlled mobile robot using the HC-05 module for wireless command transmission',
      'Simulated all analog subsystems in SPICE (SIMetrix): dual DC motor models, speed sensor, compensator circuits, level shifting comparators, RC low-pass filters',
      'Engineered a BJT-based H-bridge for bidirectional control from a single supply',
      'Programmed an interrupt-driven position control system using encoder feedback for millimeter positional precision',
    ],
    tech: ['SPICE', 'Arduino Nano Every', 'Bluetooth (HC-05)'],
    categories: ['Embedded Systems', 'Analog Circuits'],
    featured: true,
    links: [
      { label: 'Milestone 0', url: '/reports/edl-report-0.pdf' },
      { label: 'Milestone 1', url: '/reports/edl-report-1.pdf' },
      { label: 'Milestone 2', url: '/reports/edl-report-2.pdf' },
      { label: 'Milestone 3', url: '/reports/edl-report-3.pdf' },
      { label: 'Milestone 4', url: '/reports/edl-report-4.pdf' },
      { label: 'Milestone 5', url: '/reports/edl-report-5.pdf' },
      {
        label: 'Final Presentation',
        url: '/reports/edl-robot-presentation.pdf',
      },
    ],
  },
  {
    title: 'RF & IR Robot',
    slug: 'rf-ir-robot',
    date: '2024-12-01',
    desc: 'Sumobot controllable via RF or IR, featuring a jammer, dual color sensors, and front-mounted forks for competition.',
    bullets: [
      'Directed a four-person team designing and building a dual-mode RF/IR controllable sumobot',
      'Designed PCB schematics integrating Arduino and modular connectors, plus a jammer and low-battery indicator',
      'Programmed microcontroller logic for dual-mode RF/IR control with hardware-based switching',
    ],
    tech: ['Arduino', 'RF/IR Communication'],
    categories: ['Embedded Systems'],
    featured: true,
    links: [{ label: 'Report (PDF)', url: '/reports/rf-ir-robot-report.pdf' }],
  },
  {
    title: 'Astable Multivibrator 555 Timer Board',
    slug: '555-timer-board',
    date: '2026-05-01',
    desc: '555 timer PCB outputting a 500Hz, 50% duty cycle signal, driving LEDs across a range of load resistances.',
    bullets: [
      'Designed a board powered by a 5V AC-to-DC charger, built around a 555 timer configured for a 500Hz, 50% duty cycle output',
      "Drove 4 LEDs with series resistances from 50 to 10k Ohms to test the timer's current-sourcing limits",
      'Included test points and isolation switches to measure the 5V input rail, 555 output voltage, and LED current',
    ],
    tech: ['Altium', '555 Timer'],
    categories: ['PCB Design'],
    featured: false,
    links: [{ label: 'Report (PDF)', url: '/reports/555-timer-report.pdf' }],
  },
  {
    title: 'Hex Inverter Switching Noise: Good vs. Bad Layout',
    slug: 'hex-inverter-switching-noise',
    date: '2026-05-01',
    desc: 'Side-by-side PCB comparing switching noise between best-practice and poor layout decisions on identical hex inverter circuits.',
    bullets: [
      'Built two identical hex inverter circuits side by side: one with a ground plane and decoupling capacitor placed close to the IC, one without',
      'Compared switching noise on an oscilloscope to empirically demonstrate the effect of layout choices on signal integrity',
      'Included a 555 timer clock source and a switchable 5V/3.3V rail via an LDO',
    ],
    tech: ['Altium', 'Signal Integrity', 'Oscilloscope'],
    categories: ['PCB Design'],
    featured: false,
    links: [
      { label: 'Report (PDF)', url: '/reports/hex-inverter-noise-report.pdf' },
    ],
  },
  {
    title: 'Trace Resistance and Current-Carrying Capacity',
    slug: 'trace-fatigue',
    date: '2026-05-01',
    desc: 'Compared 2-wire and 4-wire measurement methods to characterize PCB trace resistance and failure limits.',
    bullets: [
      'Measured PCB trace resistance using both 2-wire and 4-wire (Kelvin) measurement setups',
      'Used the 4-wire method to induce current through the trace and calculate resistance from the voltage drop',
    ],
    tech: ['PCB Design', 'Measurement'],
    categories: ['PCB Design'],
    featured: false,
    links: [
      {
        label: 'Presentation (PDF)',
        url: '/reports/trace-fatigue-presentation.pdf',
      },
    ],
  },
  {
    title: 'Inrush Current Measurement',
    slug: 'inrush-current',
    date: '2026-05-01',
    desc: 'Measured switching inrush current through a circuit using a sense resistor and oscilloscope math functions.',
    bullets: [
      'Used a 2.2 Ohm sense resistor to measure total current through the circuit',
      "Used the oscilloscope's math function to calculate the differential voltage across the sense resistor",
      'Drove current with a 555 timer to observe and measure switching current behavior',
    ],
    tech: ['Oscilloscope', '555 Timer'],
    categories: ['PCB Design', 'Power Electronics'],
    featured: false,
    links: [
      {
        label: 'Presentation (PDF)',
        url: '/reports/inrush-current-presentation.pdf',
      },
    ],
  },
  {
    title: 'Decoupling Capacitor Placement and Noise',
    slug: 'decoupling-capacitor-noise',
    date: '2026-05-01',
    desc: 'Tested how decoupling capacitor distance from an IC affects power rail noise using a MOSFET slammer circuit.',
    bullets: [
      'Used a MOSFET "slammer" circuit to draw a large current pulse from a 9V rail, mimicking IC switching behavior',
      'Varied decoupling capacitor value (1uF and 1000uF) and placement distance from the IC to observe loop inductance and rail noise effects',
      'Demonstrated the design principle of minimizing loop inductance by placing decoupling capacitors close to the load',
    ],
    tech: ['Altium', 'Power Integrity'],
    categories: ['PCB Design', 'Power Electronics'],
    featured: false,
    links: [
      { label: 'Report (PDF)', url: '/reports/capacitor-noise-report.pdf' },
    ],
  },
  {
    title: '3-Phase Induction Motor Analysis',
    slug: 'induction-motor-analysis',
    date: '2025-12-01',
    desc: 'Modeled and measured the performance of a 1.5HP three-phase induction motor across locked-rotor and free-spinning states.',
    bullets: [
      'Analyzed a 1.5HP three-phase induction motor using a Variable Frequency Drive at 10, 20, and 40 Hz',
      'Collected data in both Locked Rotor and Free Spinning states and compared results to simulation',
    ],
    tech: ['MATLAB', 'Motor Modeling'],
    categories: ['Power Electronics'],
    featured: false,
    links: [
      { label: 'Report (PDF)', url: '/reports/induction-motor-report.pdf' },
      {
        label: 'Presentation (PDF)',
        url: '/reports/induction-motor-presentation.pdf',
      },
    ],
  },
  {
    title: 'Ranking Teams Using Markov Chains',
    slug: 'markov-chain-rankings',
    date: '2026-04-24',
    desc: 'Team project ranking Big 12 basketball teams using Markov chains built from game statistics, beyond simple win-loss record.',
    bullets: [
      'Built an irreducible transition matrix from point differential and other statistics, normalized into a column-stochastic matrix',
      'Determined team rankings from the eigenvector corresponding to eigenvalue 1 of the transition matrix',
      'Contributed the Mathematical Formulation and Examples & Numerical Results sections (team project with Ashlyn Emery and Eshaan Murali)',
    ],
    tech: ['MATLAB', 'Linear Algebra'],
    categories: ['Applied Math', 'Data & Analytics'],
    featured: false,
    links: [
      {
        label: 'Report (PDF)',
        url: '/reports/markov-chain-rankings-report.pdf',
      },
    ],
  },
];

export default data;
