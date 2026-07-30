import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPiggyBank, FaSort, FaSortUp, FaSortDown, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const depositPlans = [
  { period: '6 Months', months: 6, monthlyInterest: null, maturityInterest: 9.5 },
  { period: '1 Year', months: 12, monthlyInterest: 9.5, maturityInterest: 10.0 },
  { period: '2 Years', months: 24, monthlyInterest: 9.5, maturityInterest: 10.0 },
  { period: '3 Years', months: 36, monthlyInterest: 9.5, maturityInterest: 10.0 },
  { period: '4 Years', months: 48, monthlyInterest: 9.5, maturityInterest: 10.0 },
  { period: '5 Years', months: 60, monthlyInterest: 9.5, maturityInterest: 10.0 },
];

const depositFeatures = [
  'Guaranteed returns with fixed interest rates',
  'Monthly or maturity-based interest payout',
  'Premature withdrawal available with conditions',
  'Loan facility against deposit (up to 90%)',
  'Auto-renewal option available',
  'No hidden charges or penalties',
];

type SortKey = 'period' | 'monthlyInterest' | 'maturityInterest';
type SortDir = 'asc' | 'desc';

export default function DepositSection() {
  const [sortKey, setSortKey] = useState<SortKey>('period');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'monthly' | 'maturity'>('all');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sorted = [...depositPlans]
    .filter((p) => {
      if (filter === 'monthly') return p.monthlyInterest !== null;
      return true;
    })
    .sort((a, b) => {
      let aVal: number, bVal: number;
      if (sortKey === 'period') {
        aVal = a.months;
        bVal = b.months;
      } else if (sortKey === 'monthlyInterest') {
        aVal = a.monthlyInterest ?? 0;
        bVal = b.monthlyInterest ?? 0;
      } else {
        aVal = a.maturityInterest;
        bVal = b.maturityInterest;
      }
      return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
    });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <FaSort className="text-gray-400 text-xs" />;
    return sortDir === 'asc'
      ? <FaSortUp className="text-green-600 text-xs" />
      : <FaSortDown className="text-green-600 text-xs" />;
  };

  return (
    <section id="deposits" className="py-24 bg-section-cream">
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
            Deposit Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Grow Your Savings with
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              MADECOOP Deposits
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Earn up to <strong>10% annual interest</strong> on your deposits with our flexible agricultural development savings plans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { key: 'all', label: 'All Plans' },
                { key: 'monthly', label: 'With Monthly Interest' },
                { key: 'maturity', label: 'All' },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key as typeof filter)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === f.key
                      ? 'bg-green-700 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full deposit-table">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-700 to-green-600 text-white">
                      <th
                        className="px-6 py-4 text-left text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => handleSort('period')}
                      >
                        <div className="flex items-center gap-2">
                          Deposit Period <SortIcon col="period" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => handleSort('monthlyInterest')}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Monthly Interest <SortIcon col="monthlyInterest" />
                        </div>
                      </th>
                      <th
                        className="px-6 py-4 text-center text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => handleSort('maturityInterest')}
                      >
                        <div className="flex items-center justify-center gap-2">
                          Maturity Interest <SortIcon col="maturityInterest" />
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold">Action</th>
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
                        className={`border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                          selected === i
                            ? 'bg-green-50 border-l-4 border-l-green-600'
                            : 'hover:bg-green-50/50'
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                              <FaPiggyBank className="text-green-600 text-sm" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">{plan.period}</div>
                              <div className="text-xs text-gray-500">{plan.months} months</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {plan.monthlyInterest ? (
                            <span className="inline-block bg-blue-100 text-blue-700 font-bold text-sm px-3 py-1 rounded-full">
                              {plan.monthlyInterest}% p.a.
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-block bg-green-100 text-green-700 font-bold text-sm px-3 py-1 rounded-full">
                            {plan.maturityInterest}% p.a.
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-xs font-semibold text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
                            Open Account
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table footer note */}
              <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
                <div className="flex items-center gap-2 text-amber-700 text-xs">
                  <FaInfoCircle />
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
            {/* Highlight card */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-3xl p-6 text-white">
              <div className="text-5xl font-black mb-2">10%</div>
              <div className="text-lg font-semibold mb-1">Maximum Annual Interest</div>
              <div className="text-white/70 text-sm mb-4">On fixed deposits of 1 year and above</div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-sm font-semibold mb-1">Example Calculation:</div>
                <div className="text-xs text-white/80 space-y-1">
                  <div>Deposit: Rs. 100,000</div>
                  <div>Period: 1 Year</div>
                  <div>Interest: Rs. 10,000</div>
                  <div className="font-bold">Maturity: Rs. 110,000</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Deposit Benefits</h4>
              <div className="space-y-3">
                {depositFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-6">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">Start Saving Today</h4>
              <p className="text-gray-600 text-sm mb-4">Minimum deposit: <strong>Rs. 5,000</strong></p>
              <button className="btn-primary w-full justify-center">
                Open Deposit Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
