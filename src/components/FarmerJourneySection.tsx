import { motion } from 'framer-motion';
import { Banknote, Flower2, HandCoins, Handshake, ShieldQuestionMark, Ship, Store } from 'lucide-react';
import { FaArrowDown, FaCheckCircle } from 'react-icons/fa';

/**
 * Shared design tokens — same as HeroSection.tsx / Navbar.tsx / CTABanner.tsx.
 * Worth lifting into one theme file once a fourth component needs them.
 */
const FONT_DISPLAY = "'Fraunces', Georgia, serif";
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";
const INK = '#1E2A38';
const PAPER = "var(--color-primary-100)";
const JADE = "var(--color-light-green)";
const STEEL = "var(--color-secondary)";
const INDIGO = "var(--color-primary-dark)";

// Deliberate steel → jade progression across the 7 steps — "cold problem"
// resolving into "profit" — instead of an arbitrary rainbow per card.
const stepColors = ['#1b5e20', '#187c2e', '#56a445', '#60b64d', '#77dd60', '#c6db44', '#d6ec48'];

const journeySteps = [
  {
    step: 1,
    icon: <ShieldQuestionMark strokeWidth={1.25} />,
    title: 'Farmer Problem',
    desc: 'Traditional farmer lacks capital for cultivation. No access to credit, high-interest informal lenders, and no guaranteed market.',
    badge: 'The Challenge',
  },
  {
    step: 2,
    icon: <Banknote strokeWidth={1.25} />,
    title: 'MADECOOP Loan',
    desc: 'Apply for an affordable agricultural loan. Quick approval, fair interest rates, and repayment aligned with harvest cycles.',
    badge: 'Loan Approval',
  },
  {
    step: 3,
    icon: <Flower2 strokeWidth={1.25} />,
    title: 'Cultivation Begins',
    desc: 'Farmer uses funds for seeds, fertilizers, irrigation, and labor. Technical guidance provided by MADECOOP agricultural officers.',
    badge: 'Cultivation',
  },
  {
    step: 4,
    icon: <Store strokeWidth={1.25} />,
    title: 'Harvest Collection',
    desc: 'Bumper harvest achieved with proper farming practices. MADECOOP provides quality assessment and grading support.',
    badge: 'Harvest',
  },
  {
    step: 5,
    icon: <Handshake strokeWidth={1.25} />,
    title: 'MADECOOP Buy-Back',
    desc: 'Guaranteed purchase of your entire harvest at pre-agreed fair market prices. No middlemen, no exploitation.',
    badge: 'Buy-Back',
  },
  {
    step: 6,
    icon: <Ship strokeWidth={1.25} />,
    title: 'Global Export',
    desc: 'MADECOOP exports your quality produce to international markets through partnerships with Bio Foods and global buyers.',
    badge: 'Export',
  },
  {
    step: 7,
    icon: <HandCoins strokeWidth={1.25} />,
    title: 'Farmer Profit',
    desc: 'Premium export prices translate to higher income. Loan repaid from profits. Farmer reinvests in next season with confidence.',
    badge: 'Success!',
  },
];

const problemSolution = [
  { problem: 'No Capital', solution: 'Affordable Loans' },
  { problem: 'No Market', solution: 'Buy-Back Guarantee' },
  { problem: 'Low Prices', solution: 'Export Premium Prices' },
  { problem: 'No Guidance', solution: 'Technical Support' },
];

export default function FarmerJourneySection() {
  return (
    <section className="py-14 overflow-hidden" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE, fontFamily: FONT_MONO }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JADE }} />
            Why Farmers Choose MADECOOP
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-5"
            style={{ color: INK, fontFamily: FONT_DISPLAY }}
          >
            The Complete{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              Farmer Support
            </span>
            <br />
            System
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>
            We solve every challenge a farmer faces — from access to finance to selling the
            harvest at premium export prices.
          </p>
        </motion.div>

        {/* Problem → Solution: ledger correction slips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {problemSolution.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5"
              style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}
            >
              <div
                className="text-[10px] uppercase tracking-[0.15em] mb-2"
                style={{ color: `${INK}5C`, fontFamily: FONT_MONO }}
              >
                Entry {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="text-sm font-semibold mb-3 line-through decoration-2"
                style={{ color: `${INK}66`, textDecorationColor: `${INK}40` }}
              >
                {item.problem}
              </div>
              <FaArrowDown size={12} className="mx-auto my-1" style={{ color: `${INK}33` }} />
              <div className="flex items-center justify-center gap-1.5 text-sm font-bold mt-2" style={{ color: JADE }}>
                <FaCheckCircle size={13} />
                {item.solution}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Vertical line for desktop — the steel → jade progression */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: `linear-gradient(to bottom, ${STEEL}, ${JADE})` }}
          />

          <div className="space-y-8">
            {journeySteps.map((step, i) => {
              const color = stepColors[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`lg:flex lg:items-center lg:gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Card */}
                  <div className="lg:w-5/12">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-6 relative"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: `1px solid ${INK}12`,
                        borderLeftWidth: '4px',
                        borderLeftColor: color,
                      }}
                    >
                      <div
                        className="absolute top-4 right-4 text-white text-[10px] font-bold px-2 py-1 tracking-wide"
                        style={{ backgroundColor: color, fontFamily: FONT_MONO }}
                      >
                        ENTRY {String(step.step).padStart(2, '0')}
                      </div>
                      <div
                        className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${color}1A`, color }}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: INK }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: `${INK}99` }}>
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg z-10 shadow-md"
                      style={{ backgroundColor: color }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating */}
                  <div className="lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA — same treatment as the closing CTA banner elsewhere on the page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden p-10 text-center text-[#F3F7F5]"
          style={{
            background: `linear-gradient(115deg, ${STEEL} 0%, ${INDIGO} 100%)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)',
            }}
          />
          <svg viewBox="0 0 200 200" className="absolute -top-8 -right-8 w-44 h-44 opacity-[0.12] pointer-events-none">
            <defs>
              <path id="journeyStampCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" fill="none" />
            </defs>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#F3F7F5" strokeWidth="2" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#F3F7F5" strokeWidth="1.5" />
            <text fill="#F3F7F5" fontSize="11" letterSpacing="2">
              <textPath href="#journeyStampCircle" startOffset="0%">
                • 5000+ FARMERS · MADECOOP · 5000+ FARMERS
              </textPath>
            </text>
          </svg>

          <div className="relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-3xl font-black mb-3" style={{ fontFamily: FONT_DISPLAY }}>
              Join 5000+ Successful Farmers
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto text-[#F3F7F5]/80">
              Start your journey from problem to profit with MADECOOP's complete farmer support
              ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['No Risk', 'Guaranteed Buy-Back', 'Export Income', 'Community Support'].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 px-4 py-2 text-sm font-semibold tracking-wide"
                  style={{ fontFamily: FONT_MONO }}
                >
                  <FaCheckCircle className="text-[var(--color-primary)]" /> {tag.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}