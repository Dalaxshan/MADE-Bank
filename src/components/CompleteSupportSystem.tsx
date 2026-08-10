import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Trophy, Wallet, FileCheck2, Sprout, Warehouse,
  Handshake, Ship, TrendingUp, Star, ArrowDown,
  CheckCircle2, ArrowRight
} from 'lucide-react';

const PAPER = '#F3F7F5';
const JADE = '#2E9C82';
const STEEL = '#3B72A6';
const INDIGO = '#2B3A67';
const STEEL_LIGHT = '#8CB4DA';
const JADE_LIGHT = '#5FCDAA';

// Same steel → jade progression used in FarmerJourneySection, so the story
// ("cold problem" resolving into "profit") reads the same way in both places.
const stepColors = ['#3B72A6', '#3979A0', '#37809A', '#358794', '#328E8E', '#309588', '#2E9C82'];

const stages = [
  { step: 1, icon: Wallet, title: 'Need Money', desc: 'Farmer identifies cultivation opportunity but lacks capital' },
  { step: 2, icon: FileCheck2, title: 'Loan Approval', desc: 'Quick, fair agricultural loan approved within 5-7 days' },
  { step: 3, icon: Sprout, title: 'Cultivation', desc: 'Farm with technical guidance from MADECOOP officers' },
  { step: 4, icon: Warehouse, title: 'Harvest', desc: 'Bumper harvest achieved with proper farming practices' },
  { step: 5, icon: Handshake, title: 'Guaranteed Purchase', desc: 'MADECOOP buys 100% of your harvest at fair prices' },
  { step: 6, icon: Ship, title: 'Export', desc: 'Your produce shipped to global markets via export partners' },
  { step: 7, icon: TrendingUp, title: 'Profit', desc: 'Premium export income - repay loan, reinvest, prosper!' },
];

export default function CompleteSupportSystem() {
  const navigate = useNavigate();
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F1626 0%, #1B2A44 45%, #101A2E 100%)' }}
    >
      {/* Background decoration - steel/jade instead of green/emerald/yellow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" style={{ backgroundColor: `${STEEL}1A` }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" style={{ backgroundColor: `${JADE}1A` }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" style={{ backgroundColor: `${JADE}0D` }} />

        {/* ledger-line texture instead of dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent 37px, ${PAPER} 38px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 border px-5 py-2 mb-6 text-xs uppercase tracking-[0.15em]"
            style={{ backgroundColor: `${PAPER}0D`, borderColor: `${PAPER}26`, color: `${PAPER}E6` }}
          >
            <Star size={13} style={{ color: JADE_LIGHT }} />
            Our Signature Program
            <Star size={13} style={{ color: JADE_LIGHT }} />
          </div>

          <h2
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{ color: PAPER}}
          >
            Our Complete
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL_LIGHT}, ${JADE_LIGHT})` }}
            >
              Farmer Support System
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: `${PAPER}B3` }}>
            From the moment a farmer needs money to the moment they receive export profits -
            MADECOOP is with you at <strong style={{ color: PAPER }}>every single step</strong>.
          </p>
        </motion.div>

        {/* Step Flow */}
        <div className="flex flex-col items-center gap-0 mb-20">
          {stages.map((stage, i) => {
            const color = stepColors[i];
            const Icon = stage.icon;
            return (
              <div key={stage.step} className="flex flex-col items-center w-full max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="w-full p-6 relative overflow-hidden group cursor-pointer transition-all"
                  style={{
                    backgroundColor: `${PAPER}0D`,
                    border: `1px solid ${PAPER}1F`,
                    borderLeftWidth: '3px',
                    borderLeftColor: color,
                  }}
                >
                  {/* Step tag */}
                  <div
                    className="absolute top-4 right-4 text-[10px] font-bold px-2 py-1 tracking-wide"
                    style={{ backgroundColor: color, color: PAPER }}
                  >
                    STAGE {String(stage.step).padStart(2, '0')}
                  </div>

                  <div className="flex items-center gap-5">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}26`, color: PAPER }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-black text-xl mb-1" style={{ color: PAPER }}>
                        {stage.title}
                      </h3>
                      <p className="text-sm" style={{ color: `${PAPER}B3` }}>
                        {stage.desc}
                      </p>
                    </div>

                    {/* Checkmark on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 size={26} style={{ color: JADE_LIGHT }} />
                    </div>
                  </div>
                </motion.div>

                {/* Connector */}
                {i < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.3 }}
                    className="py-3 flex flex-col items-center"
                  >
                    <div className="w-px h-4" style={{ background: `${PAPER}33` }} />
                    <ArrowDown size={18} style={{ color: JADE_LIGHT }} />
                    <div className="w-px h-4" style={{ background: `${PAPER}33` }} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Result Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-block px-8 py-6 shadow-2xl"
            style={{
              background: `linear-gradient(115deg, ${JADE_LIGHT}, ${STEEL_LIGHT})`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
            }}
          >
            <div className="flex justify-center mb-3">
              <Trophy size={40} strokeWidth={1.75} style={{ color: INDIGO }} />
            </div>
            <div className="text-2xl font-black" style={{ color: INDIGO }}>
              Farmer's Dream Realized
            </div>
            <div className="font-medium" style={{ color: `${INDIGO}CC` }}>
              Profitable, Sustainable, Prosperous Agriculture
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-6" style={{ color: `${PAPER}B3` }}>
            Ready to join 500+ successful farmers?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group flex items-center gap-2 font-bold text-base px-8 py-4 transition-all"
              style={{
                background: `linear-gradient(115deg, ${STEEL}, ${JADE})`,
                color: PAPER,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 70%)',
              }}
            >
              Apply for a Loan Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-semibold text-base px-8 py-4 transition-all"
              style={{ backgroundColor: `${PAPER}14`, color: PAPER, border: `1px solid ${PAPER}4D` }}
            >
              Talk to Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}