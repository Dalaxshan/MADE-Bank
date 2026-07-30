import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { FaCalculator, FaChartBar, FaChartArea } from 'react-icons/fa';

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [months, setMonths] = useState(12);
  const [interestRate, setInterestRate] = useState(21);
  const [activeChart, setActiveChart] = useState<'area' | 'bar'>('area');

  const monthlyRate = interestRate / 100 / 12;
  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(Math.round(val));

  // Repayment schedule
  const schedule = [];
  let balance = loanAmount;
  for (let m = 1; m <= Math.min(months, 60); m++) {
    const interest = balance * monthlyRate;
    const principal = emi - interest;
    balance -= principal;
    schedule.push({
      month: `M${m}`,
      Principal: Math.round(principal),
      Interest: Math.round(interest),
      Balance: Math.round(Math.max(0, balance)),
    });
  }

  const loanTypes = [
    { label: 'Group Loan', rate: 21, maxMonths: 12 },
    { label: 'Agricultural Loan', rate: 18, maxMonths: 36 },
    { label: 'Machinery Loan', rate: 16, maxMonths: 60 },
    { label: 'Mortgage Loan', rate: 14, maxMonths: 120 },
  ];

  const periodOptions = [
    { label: '6M', value: 6 },
    { label: '1Y', value: 12 },
    { label: '2Y', value: 24 },
    { label: '3Y', value: 36 },
    { label: '5Y', value: 60 },
  ];

  return (
    <section id="loan-calculator" className="py-24 bg-section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaCalculator className="inline mr-1" /> Loan Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Plan Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Loan Repayment
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Calculate your monthly installments and plan your repayment schedule with our interactive loan calculator.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaCalculator className="text-blue-600" /> Loan Details
            </h3>

            {/* Loan Type Quick Select */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Quick Select - Loan Type</label>
              <div className="grid grid-cols-2 gap-2">
                {loanTypes.map((lt) => (
                  <button
                    key={lt.label}
                    onClick={() => {
                      setInterestRate(lt.rate);
                      setMonths(Math.min(months, lt.maxMonths));
                    }}
                    className={`text-left p-3 rounded-xl border text-sm transition-all ${
                      interestRate === lt.rate
                        ? 'bg-blue-50 border-blue-400 text-blue-700'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-200'
                    }`}
                  >
                    <div className="font-semibold">{lt.label}</div>
                    <div className="text-xs text-gray-500">{lt.rate}% p.a.</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Loan Amount */}
            <div className="mb-6">
              <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                <span>Loan Amount</span>
                <span className="text-blue-700">{formatCurrency(loanAmount)}</span>
              </label>
              <input
                type="range"
                min={10000}
                max={5000000}
                step={10000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Rs. 10,000</span>
                <span>Rs. 50,00,000</span>
              </div>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Math.max(10000, Math.min(5000000, Number(e.target.value))))}
                className="input-field mt-3"
              />
            </div>

            {/* Period */}
            <div className="mb-6">
              <label className="flex justify-between text-sm font-semibold text-gray-700 mb-3">
                <span>Loan Period</span>
                <span className="text-blue-700">{months} months</span>
              </label>
              <div className="flex gap-2">
                {periodOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setMonths(opt.value)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      months === opt.value
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={1}
                max={120}
                step={1}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600 mt-3"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                <span>Interest Rate</span>
                <span className="text-blue-700">{interestRate}% p.a.</span>
              </label>
              <input
                type="range"
                min={10}
                max={30}
                step={0.5}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>10%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-600 rounded-2xl p-5 text-white text-center">
                <div className="text-sm text-blue-200 mb-1">Monthly Installment (EMI)</div>
                <div className="text-3xl font-black">{formatCurrency(emi)}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <div className="text-xs text-gray-500 mb-1">Total Interest</div>
                  <div className="text-lg font-black text-amber-700">{formatCurrency(totalInterest)}</div>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                  <div className="text-xs text-gray-500 mb-1">Total Payment</div>
                  <div className="text-lg font-black text-green-700">{formatCurrency(totalPayment)}</div>
                </div>
              </div>
              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Principal: {Math.round((loanAmount / totalPayment) * 100)}%</span>
                  <span>Interest: {Math.round((totalInterest / totalPayment) * 100)}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"
                    style={{ width: `${(loanAmount / totalPayment) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveChart('area')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeChart === 'area'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaChartArea /> Repayment Trend
              </button>
              <button
                onClick={() => setActiveChart('bar')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeChart === 'bar'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaChartBar /> Monthly Breakdown
              </button>
            </div>

            {activeChart === 'area' ? (
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={schedule.slice(0, 24)}>
                  <defs>
                    <linearGradient id="principalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1565C0" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1565C0" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2E7D32" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                  <Tooltip
                    formatter={(v: unknown) => [formatCurrency(Number(v))]}
                    contentStyle={{ borderRadius: '12px' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="Balance" stroke="#2E7D32" fill="url(#balanceGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="Principal" stroke="#1565C0" fill="url(#principalGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={schedule.slice(0, 24)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                  <Tooltip
                    formatter={(v: unknown) => [formatCurrency(Number(v))]}
                    contentStyle={{ borderRadius: '12px' }}
                  />
                  <Legend />
                  <Bar dataKey="Principal" fill="#1565C0" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Interest" fill="#F9A825" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {/* Schedule table preview */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-700 mb-3">First 6 Months Schedule</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b">
                      <th className="text-left py-2">Month</th>
                      <th className="text-right py-2">Principal</th>
                      <th className="text-right py-2">Interest</th>
                      <th className="text-right py-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.slice(0, 6).map((row) => (
                      <tr key={row.month} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2 text-gray-600">{row.month}</td>
                        <td className="py-2 text-right text-blue-600 font-medium">
                          {formatCurrency(row.Principal)}
                        </td>
                        <td className="py-2 text-right text-amber-600 font-medium">
                          {formatCurrency(row.Interest)}
                        </td>
                        <td className="py-2 text-right text-green-700 font-medium">
                          {formatCurrency(row.Balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
