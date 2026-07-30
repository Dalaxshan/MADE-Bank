import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { FaCalculator, FaChartPie, FaChartLine } from 'react-icons/fa';

const COLORS = ['#2E7D32', '#81C784', '#F9A825'];

const getInterestRate = (months: number, isMonthly: boolean): number => {
  if (months === 6) return 9.5;
  if (isMonthly) return 9.5;
  return 10.0;
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

  // Line chart: year-by-year growth
  const lineData = [];
  for (let m = 0; m <= months; m += Math.max(1, Math.floor(months / 12))) {
    const yr = m / 12;
    const interest = (amount * rate * yr) / 100;
    lineData.push({
      month: m === 0 ? 'Start' : `${m}m`,
      value: Math.round(amount + interest),
    });
  }
  // Ensure final point
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
    <section id="deposit-calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaCalculator className="inline mr-1" /> Deposit Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Calculate Your
            <br />
            <span className="gradient-text">Deposit Returns</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            See exactly how much your savings will grow with MADECOOP's agricultural development deposits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaCalculator className="text-green-600" /> Input Your Details
            </h3>

            {/* Amount slider */}
            <div className="mb-8">
              <label className="flex justify-between text-sm font-semibold text-gray-700 mb-3">
                <span>Deposit Amount</span>
                <span className="text-green-700">{formatCurrency(amount)}</span>
              </label>
              <input
                type="range"
                min={5000}
                max={5000000}
                step={5000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Rs. 5,000</span>
                <span>Rs. 50,00,000</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Math.max(5000, Math.min(5000000, Number(e.target.value))))}
                className="input-field mt-3"
                placeholder="Enter amount"
              />
            </div>

            {/* Period selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Deposit Period</label>
              <div className="grid grid-cols-3 gap-2">
                {periodOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setMonths(option.value);
                      if (option.value === 6) setIsMonthly(false);
                    }}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                      months === option.value
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Payout type */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Interest Payout</label>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    !isMonthly
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                  }`}
                >
                  At Maturity ({getInterestRate(months, false)}%)
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  disabled={months === 6}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                    isMonthly && months !== 6
                      ? 'bg-green-600 text-white border-green-600'
                      : months === 6
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'
                  }`}
                >
                  Monthly (9.5%)
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-green-100">
                <div className="text-xs text-gray-500 mb-1">Interest Rate</div>
                <div className="text-2xl font-black text-green-700">{rate}% p.a.</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {isMonthly && monthlyInterestAmount && (
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <div className="text-xs text-gray-500 mb-1">Monthly Interest</div>
                    <div className="text-lg font-black text-blue-700">
                      {formatCurrency(Math.round(monthlyInterestAmount))}
                    </div>
                  </div>
                )}
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <div className="text-xs text-gray-500 mb-1">Total Interest</div>
                  <div className="text-lg font-black text-amber-700">
                    {formatCurrency(Math.round(totalInterest))}
                  </div>
                </div>
                <div className="bg-green-600 rounded-2xl p-4">
                  <div className="text-xs text-green-200 mb-1">Maturity Amount</div>
                  <div className="text-xl font-black text-white">
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
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {/* Tab switcher */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('pie')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'pie'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaChartPie /> Breakdown
              </button>
              <button
                onClick={() => setActiveTab('line')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'line'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
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
                    <div key={item.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-4 h-4 rounded-full" style={{ background: COLORS[i] }} />
                      <div>
                        <div className="text-xs text-gray-500">{item.name}</div>
                        <div className="text-sm font-bold text-gray-900">{formatCurrency(Math.round(item.value))}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis
                      tick={{ fontSize: 11 }}
                      tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
                    />
                    <Tooltip
                      formatter={(v: unknown) => [formatCurrency(Number(v)), 'Value']}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2E7D32"
                      strokeWidth={3}
                      dot={{ fill: '#2E7D32', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Summary */}
            <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Your money grows from</div>
                <div className="text-lg font-bold text-gray-900">
                  {formatCurrency(amount)} → {formatCurrency(Math.round(maturityAmount))}
                </div>
                <div className="text-sm text-green-700 font-semibold mt-1">
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
