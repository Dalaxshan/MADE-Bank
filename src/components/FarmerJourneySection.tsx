import { motion } from 'framer-motion';
import { Banknote, Flower2, HandCoins, Handshake, ShieldQuestionMark, Ship, Sparkle, Store } from 'lucide-react';
import { FaArrowDown, FaCheckCircle } from 'react-icons/fa';
import { useLang } from '../i18n/LanguageContext';

const INK = '#1E2A38';
const PAPER = "var(--color-primary-100)";
const JADE = "var(--color-primary)";
const STEEL = "var(--color-secondary)";

const ROW_HEIGHT = 236;
const CARD_TOP_PAD = 8;
const CARD_VCENTER_OFFSET = 74;
const NODE_Y_OFFSET = 200;

type PathPoint = { x: number; y: number };

export default function FarmerJourneySection() {
  const { t } = useLang();

  const journeySteps = [
    { step: 1, icon: <ShieldQuestionMark strokeWidth={1.75} size={20} />, title: t.journey.s1Title, desc: t.journey.s1Desc, badge: 'Phase 1', color: '#16a34a' },
    { step: 2, icon: <Banknote strokeWidth={1.75} size={20} />, title: t.journey.s2Title, desc: t.journey.s2Desc, badge: 'Phase 2', color: '#2563eb' },
    { step: 3, icon: <Flower2 strokeWidth={1.75} size={20} />, title: t.journey.s3Title, desc: t.journey.s3Desc, badge: 'Phase 3', color: '#ea580c' },
    { step: 4, icon: <Store strokeWidth={1.75} size={20} />, title: t.journey.s4Title, desc: t.journey.s4Desc, badge: 'Phase 4', color: '#7c3aed' },
    { step: 5, icon: <Handshake strokeWidth={1.75} size={20} />, title: t.journey.s5Title, desc: t.journey.s5Desc, badge: 'Phase 5', color: '#0d9488' },
    { step: 6, icon: <Ship strokeWidth={1.75} size={20} />, title: t.journey.s6Title, desc: t.journey.s6Desc, badge: 'Phase 6', color: '#db2777' },
    { step: 7, icon: <HandCoins strokeWidth={1.75} size={20} />, title: t.journey.s7Title, desc: t.journey.s7Desc, badge: 'Phase 7', color: '#d97706' },
  ];

  const problemSolution = [
    { problem: t.journey.noCapitalProblem, solution: t.journey.noCapitalSolution },
    { problem: t.journey.noMarketProblem, solution: t.journey.noMarketSolution },
    { problem: t.journey.lowPricesProblem, solution: t.journey.lowPricesSolution },
    { problem: t.journey.noGuidanceProblem, solution: t.journey.noGuidanceSolution },
  ];

  const TOTAL_HEIGHT = journeySteps.length * ROW_HEIGHT + 40;

  const roadmapCards = journeySteps.map((s, i) => ({
    ...s,
    side: i % 2 === 0 ? 'left' : 'right',
    top: i * ROW_HEIGHT + CARD_TOP_PAD,
    vcenter: i * ROW_HEIGHT + CARD_VCENTER_OFFSET,
  }));

  const roadmapNodes = journeySteps.slice(0, -1).map((s, i) => ({
    color: s.color,
    y: i * ROW_HEIGHT + NODE_Y_OFFSET,
  }));

  const anchor = (card: (typeof roadmapCards)[number]): PathPoint => ({
    x: card.side === 'left' ? 46 : 54,
    y: card.vcenter,
  });

  const pathPoints: PathPoint[] = [];
  roadmapCards.forEach((card, i) => {
    pathPoints.push(anchor(card));
    if (i < roadmapNodes.length) pathPoints.push({ x: 50, y: roadmapNodes[i].y });
  });

  const roadmapPathD = pathPoints
    .slice(1)
    .reduce((d, p, idx) => {
      const prev = pathPoints[idx];
      const midY = prev.y + (p.y - prev.y) / 2;
      return `${d} C ${prev.x},${midY} ${p.x},${midY} ${p.x},${p.y}`;
    }, `M ${pathPoints[0].x},${pathPoints[0].y}`);

  return (
    <section className="py-14 overflow-hidden" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-[0.15em]"
            style={{ backgroundColor: 'var(--color-secondary)', color: '#fff' }}
          >
            {t.journey.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            {t.journey.title1}{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}>
              {t.journey.title2}
            </span>
            <br />
            {t.journey.title3}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>
            {t.journey.sub}
          </p>
        </motion.div>

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
              <div className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: `${INK}` }}>
                {t.journey.problem} {String(i + 1).padStart(2, '0')}
              </div>
              <div
                className="text-sm font-semibold mb-3 line-through decoration-1"
                style={{ color: '#000', textDecorationColor: 'red', backgroundColor: `var(--color-primary-200)`, padding: '4px 8px', borderRadius: '4px' }}
              >
                {item.problem}
              </div>
              <FaArrowDown size={12} className="mx-auto my-1" style={{ color: `${INK}` }} />
              <div className="flex items-center justify-center gap-1.5 text-sm font-bold mt-2" style={{ color: JADE }}>
                <FaCheckCircle size={13} />
                {item.solution}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-6 lg:hidden">
          {journeySteps.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-white shadow-sm" style={{ borderTop: `3px solid ${step.color}` }}>
              <div className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: step.color }}>{step.badge}</div>
              <h3 className="text-lg font-bold mb-1.5" style={{ color: INK }}>{step.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: `${INK}99` }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative" style={{ height: TOTAL_HEIGHT }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 100 ${TOTAL_HEIGHT}`} preserveAspectRatio="none">
            <path d={roadmapPathD} fill="none" stroke="#D1D5DB" strokeWidth="1.75" strokeDasharray="5 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>

          {roadmapCards.map((card, i) => (
            <motion.div
              key={card.step}
              initial={{ opacity: 0, x: card.side === 'left' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="absolute w-[46%] rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(30,42,56,0.15)]"
              style={{ left: card.side === 'left' ? '0%' : '54%', top: card.top, borderTop: `3px solid ${card.color}` }}
            >
              <h3 className="text-lg font-bold mb-1.5" style={{ color: INK }}>{card.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: `${INK}99` }}>{card.desc}</p>
            </motion.div>
          ))}

          {roadmapNodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
              className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md flex items-center justify-center"
              style={{ left: '50%', top: node.y, color: node.color }}
            >
              {journeySteps[i].icon}
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: INK }}>
                <Sparkle size={10} strokeWidth={2} fill="white" />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-0 relative overflow-hidden p-10 text-center text-[#F3F7F5]"
          style={{ backgroundColor: 'var(--color-light-green)', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))' }}
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)' }} />
          <svg viewBox="0 0 200 200" className="absolute -top-8 -right-8 w-44 h-44 opacity-[0.12] pointer-events-none">
            <defs><path id="journeyStampCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" fill="none" /></defs>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#F3F7F5" strokeWidth="2" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#F3F7F5" strokeWidth="1.5" />
            <text fill="#F3F7F5" fontSize="11" letterSpacing="2">
              <textPath href="#journeyStampCircle" startOffset="0%">• 500+ FARMERS · MADECOOP · 500+ FARMERS</textPath>
            </text>
          </svg>
          <div className="relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-3xl font-black mb-3">{t.journey.ctaTitle}</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto text-[#F3F7F5]/80">{t.journey.ctaSub}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[t.journey.tag1, t.journey.tag2, t.journey.tag3, t.journey.tag4].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 px-4 py-2 text-sm font-semibold tracking-wide">
                  <FaCheckCircle className="text-[#F3F7F5]" /> {tag.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
