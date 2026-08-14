import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { FaChartPie, FaChartLine } from 'react-icons/fa';
import { Calculator } from 'lucide-react';

const INK = '#1E2A38';
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";
const INDIGO = "var(--color-primary-dark)";
const COLORS = [STEEL, JADE];

const rateTable: Record<number, { monthly: number | null; maturity: number }> = {
  6: { monthly: null, maturity: 9.5 },
  12: { monthly: 9.5, maturity: 10.0 },
  24: { monthly: 10.0, maturity: 10.5 },
  36: { monthly: 10.5, maturity: 11.0 },
  48: { monthly: 11.0, maturity: 11.6 },
  60: { monthly: 11.5, maturity: 12.2 },
};

const getInterestRate = (months: number, isMonthly: boolean): number => {
  const entry = rateTable[months] ?? rateTable[12];
  if (isMonthly) return entry.monthly ?? entry.maturity;
  return entry.maturity;
};

export default function DepositCalculator() {
  const [amount, setAmount] = useState(100000);
  const [months, setMonths] = useState(12);
  const [isMonthly, setIsMonthly] = useState(false);
  const [activeTab, setActiveTab] = useState<'pie' | 'line'>('pie');

  const rate = getInterestRate(months, isMonthly);
  const years = months / 12;

  let totalInterest: number;
  let monthlyInterestAmount: number | null = null;

  if (isMonthly && months > 6) {
    monthlyInterestAmount = (amount * rate) / 100 / 12;
    totalInterest = monthlyInterestAmount * months;
  } else {
    totalInterest = (amount * rate * years) / 100;
  }

  const maturityAmount = amount + totalInterest;

  const pieData = [
    { name: 'Principal', value: amount },
    { name: 'Interest Earned', value: Math.round(totalInterest) },
  ];

  // Line chart: growth over the term, using the correctly-selected rate
  const lineData: { month: string; value: number }[] = [];
  for (let m = 0; m <= months; m += Math.max(1, Math.floor(months / 12))) {
    const yr = m / 12;
    const interest = (amount * rate * yr) / 100;
    lineData.push({
      month: m === 0 ? 'Start' : `${m}m`,
      value: Math.round(amount + interest),
    });
  }
  if (lineData[lineData.length - 1]?.month !== `${months}m`) {
    lineData.push({ month: `${months}m`, value: Math.round(maturityAmount) });
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', minimumFractionDigits: 0 }).format(val);

  const periodOptions = [
    { label: '6 Months', value: 6 },
    { label: '1 Year', value: 12 },
    { label: '2 Years', value: 24 },
    { label: '3 Years', value: 36 },
    { label: '4 Years', value: 48 },
    { label: '5 Years', value: 60 },
  ];

  return (
    <section id="deposit-calculator" className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
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
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
           <Calculator strokeWidth={1.75} /> Deposit Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK}}>
            Calculate Your
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              Deposit Returns
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            See exactly how much your savings will grow with MADECOOP's agricultural
            development deposits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8"
            style={{ backgroundColor: PAPER, border: `1px solid ${INK}14` }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: INK }}>
             <Calculator strokeWidth={1.75}  style={{ color: STEEL }} />Input Your Details
            </h3>

            {/* Amount slider */}
            <div className="mb-8">
              <label className="flex justify-between text-sm font-semibold mb-3" style={{ color: `${INK}CC` }}>
                <span>Deposit Amount</span>
                <span style={{ color: STEEL }}>{formatCurrency(amount)}</span>
              </label>
              <input
                type="range"
                min={5000}
                max={5000000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ backgroundColor: `${INK}1A`, accentColor: STEEL }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: `${INK}66` }}>
                <span>Rs. 5,000</span>
                <span>Rs. 50,00,000</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Math.max(5000, Math.min(5000000, Number(e.target.value))))}
                className="w-full mt-3 px-4 py-2.5 text-sm focus:outline-none"
                style={{ border: `1px solid ${INK}26`, backgroundColor: '#FFFFFF', color: INK }}
                placeholder="Enter amount"
              />
            </div>

            {/* Period selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3" style={{ color: `${INK}CC` }}>
                Deposit Period
              </label>
              <div className="grid grid-cols-3 gap-2">
                {periodOptions.map((option) => {
                  const active = months === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setMonths(option.value);
                        if (option.value === 6) setIsMonthly(false);
                      }}
                      className="py-3 text-sm font-semibold transition-all"
                      style={
                        active
                          ? { backgroundColor: STEEL, color: PAPER }
                          : { backgroundColor: '#FFFFFF', color: `${INK}99`, border: `1px solid ${INK}26` }
                      }
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Payout type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3" style={{ color: `${INK}CC` }}>
                Interest Payout
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsMonthly(false)}
                  className="flex-1 py-3 text-sm font-semibold transition-all"
                  style={
                    !isMonthly
                      ? { backgroundColor: STEEL, color: PAPER, border: `1px solid ${STEEL}` }
                      : { backgroundColor: '#FFFFFF', color: `${INK}99`, border: `1px solid ${INK}26` }
                  }
                >
                  At Maturity ({getInterestRate(months, false)}%)
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  disabled={months === 6}
                  className="flex-1 py-3 text-sm font-semibold transition-all"
                  style={
                    isMonthly && months !== 6
                      ? { backgroundColor: STEEL, color: PAPER, border: `1px solid ${STEEL}` }
                      : months === 6
                      ? { backgroundColor: `${INK}0A`, color: `${INK}40`, border: `1px solid ${INK}14`, cursor: 'not-allowed' }
                      : { backgroundColor: '#FFFFFF', color: `${INK}99`, border: `1px solid ${INK}26` }
                  }
                >
                  Monthly ({rateTable[months]?.monthly ?? '-'}%)
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}>
                <div className="text-xs mb-1" style={{ color: `${INK}80` }}>
                  Interest Rate
                </div>
                <div className="text-2xl font-black" style={{ color: JADE }}>
                  {rate}% p.a.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {isMonthly && monthlyInterestAmount && (
                  <div className="p-4" style={{ backgroundColor: `${STEEL}0D`, border: `1px solid ${STEEL}33` }}>
                    <div className="text-xs mb-1" style={{ color: `${INK}80` }}>
                      Monthly Interest
                    </div>
                    <div className="text-lg font-black" style={{ color: STEEL }}>
                      {formatCurrency(Math.round(monthlyInterestAmount))}
                    </div>
                  </div>
                )}
                <div className="p-4" style={{ backgroundColor: `${INDIGO}0D`, border: `1px solid ${INDIGO}33` }}>
                  <div className="text-xs mb-1" style={{ color: `${INK}80` }}>
                    Total Interest
                  </div>
                  <div className="text-lg font-black" style={{ color: INDIGO }}>
                    {formatCurrency(Math.round(totalInterest))}
                  </div>
                </div>
                <div
                  className="p-4"
                  style={{ background: `linear-gradient(115deg, ${STEEL}, ${INDIGO})`, gridColumn: isMonthly && monthlyInterestAmount ? 'auto' : 'span 2 / span 2' }}
                >
                  <div className="text-xs mb-1 text-[#F3F7F5]/70">
                    Maturity Amount
                  </div>
                  <div className="text-xl font-black text-[#F3F7F5]">
                    {formatCurrency(Math.round(maturityAmount))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Charts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 shadow-lg"
            style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}12` }}
          >
            {/* Tab switcher */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('pie')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all"
                style={
                  activeTab === 'pie'
                    ? { backgroundColor: STEEL, color: PAPER }
                    : { backgroundColor: `${INK}0A`, color: `${INK}80` }
                }
              >
                <FaChartPie /> Breakdown
              </button>
              <button
                onClick={() => setActiveTab('line')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all"
                style={
                  activeTab === 'line'
                    ? { backgroundColor: STEEL, color: PAPER }
                    : { backgroundColor: `${INK}0A`, color: `${INK}80` }
                }
              >
                <FaChartLine /> Growth
              </button>
            </div>

            {activeTab === 'pie' ? (
              <div>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {pieData.map((_, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: unknown) => formatCurrency(Number(v))} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {pieData.map((item, i) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-3"
                      style={{ backgroundColor: `${INK}05` }}
                    >
                      <div className="w-4 h-4 rounded-full" style={{ background: COLORS[i] }} />
                      <div>
                        <div className="text-xs" style={{ color: `${INK}80` }}>
                          {item.name}
                        </div>
                        <div className="text-sm font-bold" style={{ color: INK }}>
                          {formatCurrency(Math.round(item.value))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={`${INK}14`} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                    <Tooltip
                      formatter={(v: unknown) => [formatCurrency(Number(v)), 'Value']}
                      contentStyle={{ border: `1px solid ${INK}26` }}
                    />
                    <Line type="monotone" dataKey="value" stroke={STEEL} strokeWidth={3} dot={{ fill: STEEL, r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Summary */}
            <div className="mt-6 p-4" style={{ backgroundColor: `${JADE}0D`, border: `1px solid ${JADE}33` }}>
              <div className="text-center">
                <div className="text-sm mb-1" style={{ color: `${INK}80` }}>
                  Your money grows from
                </div>
                <div className="text-lg font-bold" style={{ color: INK }}>
                  {formatCurrency(amount)} → {formatCurrency(Math.round(maturityAmount))}
                </div>
                <div className="text-sm font-semibold mt-1" style={{ color: JADE }}>
                  +{((totalInterest / amount) * 100).toFixed(1)}% total return over {months} months
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}