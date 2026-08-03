import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { BanknoteArrowUp } from "lucide-react";

/**
 * Shared design tokens — same as HeroSection.tsx / Navbar.tsx / CTABanner.tsx /
 * FarmerJourneySection.tsx. Worth lifting into one theme file.
 */
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";
const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const JADE = "var(--color-light-green)";
const STEEL = "var(--color-secondary)";
const INDIGO = "var(--color-primary)";

const depositPlans = [
  { period: "6 Months", months: 6, monthlyInterest: null, maturityInterest: 9.5 },
  { period: "1 Year", months: 12, monthlyInterest: 9.5, maturityInterest: 10.0 },
  { period: "2 Years", months: 24, monthlyInterest: 10.0, maturityInterest: 10.5 },
  { period: "3 Years", months: 36, monthlyInterest: 10.5, maturityInterest: 11.0 },
  { period: "4 Years", months: 48, monthlyInterest: 11.0, maturityInterest: 11.6 },
  { period: "5 Years", months: 60, monthlyInterest: 11.5, maturityInterest: 12.2 },
];

const depositFeatures = [
  "Guaranteed returns with fixed interest rates",
  "Monthly or maturity-based interest payout",
  "Premature withdrawal available with conditions",
  "Loan facility against deposit (up to 90%)",
  "Auto-renewal option available",
  "No hidden charges or penalties",
];

type SortKey = "period" | "monthlyInterest" | "maturityInterest";
type SortDir = "asc" | "desc";

export default function DepositSection() {
  const [sortKey, setSortKey] = useState<SortKey>("period");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [selected, setSelected] = useState<number | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...depositPlans].sort((a, b) => {
    let aVal: number, bVal: number;
    if (sortKey === "period") {
      aVal = a.months;
      bVal = b.months;
    } else if (sortKey === "monthlyInterest") {
      aVal = a.monthlyInterest ?? 0;
      bVal = b.monthlyInterest ?? 0;
    } else {
      aVal = a.maturityInterest;
      bVal = b.maturityInterest;
    }
    return sortDir === "asc" ? aVal - bVal : bVal - aVal;
  });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <FaSort className="text-[#F3F7F5]/40 text-xs" />;
    return sortDir === "asc" ? (
      <FaSortUp className="text-[#2E9C82] text-xs" />
    ) : (
      <FaSortDown className="text-[#2E9C82] text-xs" />
    );
  };

  return (
    <section id="deposits" className="py-14" style={{ backgroundColor: PAPER }}>
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
            Deposit Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            Grow Your Savings with
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              MADECOOP Deposits
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>
            Earn up to <strong style={{ color: INK }}>12.2% annual interest</strong> on your
            deposits with our flexible agricultural development savings plans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Table — styled as a ledger book */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white shadow-lg overflow-hidden" style={{ border: `1px solid ${INK}12` }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: `linear-gradient(1deg, ${STEEL}, ${INDIGO})` }}>
                      <th
                        className="px-6 py-4 text-left text-xs font-bold cursor-pointer uppercase tracking-wider transition-colors hover:bg-white/10"
                        style={{ color: PAPER}}
                        onClick={() => handleSort("period")}
                      >
                        <div className="flex items-center gap-2">
                          Deposit Period <SortIcon col="period" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-xs font-bold cursor-pointer uppercase tracking-wider transition-colors hover:bg-white/10"
                        style={{ color: PAPER }}
                        onClick={() => handleSort("monthlyInterest")}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Monthly Interest <SortIcon col="monthlyInterest" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-xs font-bold cursor-pointer uppercase tracking-wider transition-colors hover:bg-white/10"
                        style={{ color: PAPER }}
                        onClick={() => handleSort("maturityInterest")}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Maturity Interest <SortIcon col="maturityInterest" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((plan, i) => (
                      <motion.tr
                        key={plan.period}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        onClick={() => setSelected(selected === i ? null : i)}
                        className="cursor-pointer transition-all duration-200"
                        style={{
                          borderBottom: `1px dotted ${INK}1A`,
                          backgroundColor: selected === i ? `${STEEL}0D` : "transparent",
                          borderLeft: selected === i ? `4px solid ${STEEL}` : "4px solid transparent",
                        }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${STEEL}1A`, color: INDIGO }}
                            >
                              <BanknoteArrowUp size={20} strokeWidth={1.25} />
                            </div>
                            <div>
                              <div className="font-bold" style={{ color: INK }}>
                                {plan.period}
                              </div>
                              <div className="text-xs" style={{ color: `${INK}80`, fontFamily: FONT_MONO }}>
                                {plan.months} months
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {plan.monthlyInterest ? (
                            <span
                              className="inline-block font-bold text-sm px-3 py-1"
                              style={{ backgroundColor: `${STEEL}1A`, color: INDIGO}}
                            >
                              {plan.monthlyInterest}% p.a.
                            </span>
                          ) : (
                            <span className="text-sm" style={{ color: `${INK}40` }}>
                              —
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className="inline-block font-bold text-sm px-3 py-1"
                            style={{ backgroundColor: `${JADE}1A`, color: INDIGO}}
                          >
                            {plan.maturityInterest}% p.a.
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer note */}
              <div className="px-6 py-4" style={{ backgroundColor: `${INK}08`, borderTop: `1px solid ${INK}12` }}>
                <div className="flex items-center gap-2 text-xs" style={{ color: `${INK}99` }}>
                  <FaInfoCircle style={{ color: STEEL }} />
                  Interest rates are per annum. Subject to change. Terms & conditions apply.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Highlight card — ledger tab shape + stamp watermark, matching the rest of the page */}
            <div
              className="relative overflow-hidden p-6 text-[#F3F7F5]"
              style={{
                background: `linear-gradient(205deg, ${STEEL} 0%, ${INDIGO} 60%)`,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)",
                }}
              />
              <div className="relative z-10">
                <div className="text-5xl font-black mb-2" >
                  12.2%
                </div>
                <div className="text-lg font-semibold mb-1">Maximum Annual Interest</div>
                <div className="text-[#F3F7F5]/70 text-sm mb-4">
                  On maturity-based 5-year fixed deposits
                </div>

                {/* Example — ledger stub with dotted leaders, corrected to the 1-year maturity rate */}
                <div className="bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 p-4">
                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#F3F7F5]/80"
                    style={{ fontFamily: FONT_MONO }}
                  >
                    Example — 1-Year Maturity Plan
                  </div>
                  <div className="text-xs space-y-1.5" style={{ fontFamily: FONT_MONO }}>
                    <div className="flex justify-between">
                      <span className="text-[#F3F7F5]/70">Deposit</span>
                      <span>Rs. 100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F3F7F5]/70">Period</span>
                      <span>1 Year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F3F7F5]/70">Maturity Rate</span>
                      <span>10.0% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F3F7F5]/70">Interest</span>
                      <span>Rs. 10,000</span>
                    </div>
                    <div
                      className="flex justify-between font-bold pt-1.5 mt-1.5"
                      style={{ borderTop: "1px dotted rgba(243,247,245,0.25)" }}
                    >
                      <span>Maturity Value</span>
                      <span>Rs. 110,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-6 shadow-md" style={{ border: `1px solid ${INK}12` }}>
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: INK, fontFamily: FONT_MONO }}
              >
                Deposit Benefits
              </h4>
              <div className="space-y-3">
                {depositFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-sm" style={{ color: JADE }} />
                    <span className="text-sm" style={{ color: `${INK}99` }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}