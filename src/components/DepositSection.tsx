import { useState } from "react";
import { motion } from "framer-motion";
import { FaSort, FaSortUp, FaSortDown, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { BanknoteArrowUp } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const JADE = "var(--color-light-green)";
const STEEL = "var(--color-secondary)";
const INDIGO = "var(--color-primary)";

const depositPlans = [
  { months: 6, monthlyInterest: null, maturityInterest: "9.5" },
  { months: 12, monthlyInterest: "9.5", maturityInterest: "10.0" },
  { months: 24, monthlyInterest: "10.0", maturityInterest: "10.5" },
  { months: 36, monthlyInterest: "10.5", maturityInterest: "11.0" },
  { months: 48, monthlyInterest: "11.0", maturityInterest: "11.6" },
  { months: 60, monthlyInterest: "11.5", maturityInterest: "12.2" },
];

type SortKey = "period" | "monthlyInterest" | "maturityInterest";
type SortDir = "asc" | "desc";

export default function DepositSection() {
  const { t } = useLang();
  const [sortKey, setSortKey] = useState<SortKey>("period");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [selected, setSelected] = useState<number | null>(null);

  const periodLabels: Record<number, string> = {
    6: t.calculator.p6m, 12: t.calculator.p1y,
    24: t.calculator.p2y, 36: t.calculator.p3y,
    48: t.calculator.p4y, 60: t.calculator.p5y,
  };

  const depositFeatures = [t.deposits.f1, t.deposits.f2, t.deposits.f3, t.deposits.f4, t.deposits.f5, t.deposits.f6];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const sorted = [...depositPlans].sort((a, b) => {
    let aVal: number, bVal: number;
    if (sortKey === "period") { aVal = a.months; bVal = b.months; }
    else if (sortKey === "monthlyInterest") { aVal = a.monthlyInterest ?? 0; bVal = b.monthlyInterest ?? 0; }
    else { aVal = a.maturityInterest; bVal = b.maturityInterest; }
    return sortDir === "asc" ? aVal - bVal : bVal - aVal;
  });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <FaSort className="text-[#F3F7F5]/40 text-xs" />;
    return sortDir === "asc" ? <FaSortUp className="text-[#2E9C82] text-xs" /> : <FaSortDown className="text-[#2E9C82] text-xs" />;
  };

  return (
    <section id="deposits" className="py-14" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]" style={{ borderColor: `${JADE}80`, color: JADE }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: JADE }} />
            {t.deposits.badge}
          </span>
          <h2 className="text-4xl font-semibold md:text-5xl mb-5" style={{ color: INK }}>
            {t.deposits.title1}<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}>
              {t.deposits.title2}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>{t.deposits.sub}</p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 w-full min-w-0"
          >
            <div className="bg-white shadow-lg overflow-hidden" style={{ border: `1px solid ${INK}12` }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: JADE }}>
                      <th className="px-3 sm:px-6 py-4 text-left text-xs font-bold cursor-pointer uppercase tracking-wider hover:bg-white/10" style={{ color: PAPER }} onClick={() => handleSort("period")}>
                        <div className="flex items-center gap-2">{t.deposits.colPeriod} <SortIcon col="period" /></div>
                      </th>
                      <th className="px-3 sm:px-6 py-4 text-center text-xs font-bold cursor-pointer uppercase tracking-wider hover:bg-white/10" style={{ color: PAPER }} onClick={() => handleSort("monthlyInterest")}>
                        <div className="flex items-center justify-center gap-2">{t.deposits.colMonthly} <SortIcon col="monthlyInterest" /></div>
                      </th>
                      <th className="px-3 sm:px-6 py-4 text-center text-xs font-bold cursor-pointer uppercase tracking-wider hover:bg-white/10" style={{ color: PAPER }} onClick={() => handleSort("maturityInterest")}>
                        <div className="flex items-center justify-center gap-2">{t.deposits.colMaturity} <SortIcon col="maturityInterest" /></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((plan, i) => (
                      <motion.tr
                        key={plan.months}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        onClick={() => setSelected(selected === i ? null : i)}
                        className="cursor-pointer transition-all duration-200"
                        style={{ borderBottom: `1px dotted ${INK}1A`, backgroundColor: selected === i ? `${STEEL}0D` : "transparent", borderLeft: selected === i ? `4px solid ${STEEL}` : "4px solid transparent" }}
                      >
                        <td className="px-3 sm:px-6 py-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${STEEL}1A`, color: INDIGO }}>
                              <BanknoteArrowUp size={16} strokeWidth={1.25} />
                            </div>
                            <div>
                              <div className="font-bold text-sm" style={{ color: INK }}>{periodLabels[plan.months]}</div>
                              <div className="text-xs" style={{ color: `${INK}80` }}>{plan.months} {t.deposits.mo}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-center">
                          {plan.monthlyInterest ? (
                            <span className="inline-block font-bold text-xs sm:text-sm px-2 sm:px-3 py-1" style={{ backgroundColor: `${STEEL}1A`, color: INDIGO }}>{plan.monthlyInterest}%</span>
                          ) : (
                            <span className="text-sm" style={{ color: `${INK}40` }}>-</span>
                          )}
                        </td>
                        <td className="px-3 sm:px-6 py-4 text-center">
                          <span className="inline-block font-bold text-xs sm:text-sm px-2 sm:px-3 py-1" style={{ backgroundColor: `${JADE}1A`, color: INDIGO }}>{plan.maturityInterest}%</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4" style={{ backgroundColor: `${INK}08`, borderTop: `1px solid ${INK}12` }}>
                <div className="flex items-center gap-2 text-xs" style={{ color: `${INK}99` }}>
                  <FaInfoCircle style={{ color: STEEL }} />
                  {t.deposits.tableNote}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 w-full"
          >
            <div className="relative overflow-hidden p-6 text-[#F3F7F5]" style={{ background: `linear-gradient(205deg, ${JADE} 0%, ${INDIGO} 60%)`, clipPath: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)" }} />
              <div className="relative z-10">
                <div className="text-5xl font-black mb-2">12.0%</div>
                <div className="text-lg font-semibold mb-1">{t.deposits.maxInterest}</div>
                <div className="text-[#F3F7F5]/70 text-sm mb-4">{t.deposits.maxInterestSub}</div>
                <div className="bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#F3F7F5]/80">{t.deposits.exampleTitle}</div>
                  <div className="text-xs space-y-1.5">
                    <div className="flex justify-between"><span className="text-[#F3F7F5]/70">{t.deposits.depositLabel}</span><span>Rs. 100,000</span></div>
                    <div className="flex justify-between"><span className="text-[#F3F7F5]/70">{t.deposits.periodLabel}</span><span>1 {t.calculator.p1y}</span></div>
                    <div className="flex justify-between"><span className="text-[#F3F7F5]/70">{t.deposits.maturityRateLabel}</span><span>10.0% p.a.</span></div>
                    <div className="flex justify-between"><span className="text-[#F3F7F5]/70">{t.deposits.interestLabel}</span><span>Rs. 10,000</span></div>
                    <div className="flex justify-between font-bold pt-1.5 mt-1.5" style={{ borderTop: "1px dotted rgba(243,247,245,0.25)" }}>
                      <span>{t.deposits.maturityValueLabel}</span><span>Rs. 110,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-md" style={{ border: `1px solid ${INK}12` }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: INK }}>{t.deposits.benefitsTitle}</h4>
              <div className="space-y-3">
                {depositFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-sm" style={{ color: JADE }} />
                    <span className="text-sm" style={{ color: `${INK}99` }}>{feature}</span>
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
