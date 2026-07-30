import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar
} from 'recharts';

const stats = [
  { value: 5247, suffix: '', label: 'Farmers Supported', icon: '👨‍🌾', color: 'bg-green-50 border-green-200', textColor: 'text-green-700' },
  { value: 1183, suffix: '', label: 'Loans Issued', icon: '💼', color: 'bg-blue-50 border-blue-200', textColor: 'text-blue-700' },
  { value: 312, suffix: '', label: 'Exports Completed', icon: '🚢', color: 'bg-purple-50 border-purple-200', textColor: 'text-purple-700' },
  { value: 12500, suffix: '+', label: 'Acres Developed', icon: '🌿', color: 'bg-emerald-50 border-emerald-200', textColor: 'text-emerald-700' },
  { value: 850, suffix: 'M', label: 'LKR Harvest Purchased', icon: '🌾', color: 'bg-amber-50 border-amber-200', textColor: 'text-amber-700' },
  { value: 425, suffix: 'M', label: 'LKR Deposits', icon: '💰', color: 'bg-red-50 border-red-200', textColor: 'text-red-700' },
];

const growthData = [
  { year: '2010', farmers: 500, loans: 120, exports: 15 },
  { year: '2012', farmers: 1200, loans: 280, exports: 35 },
  { year: '2014', farmers: 1900, loans: 450, exports: 68 },
  { year: '2016', farmers: 2600, loans: 620, exports: 112 },
  { year: '2018', farmers: 3400, loans: 780, exports: 180 },
  { year: '2020', farmers: 4100, loans: 950, exports: 240 },
  { year: '2022', farmers: 4700, loans: 1050, exports: 285 },
  { year: '2024', farmers: 5247, loans: 1183, exports: 312 },
];

const radarData = [
  { subject: 'Loan Disbursement', A: 92 },
  { subject: 'Export Revenue', A: 88 },
  { subject: 'Farmer Satisfaction', A: 98 },
  { subject: 'Repayment Rate', A: 95 },
  { subject: 'Deposit Growth', A: 85 },
  { subject: 'Export Reach', A: 82 },
];

const loanBreakdown = [
  { name: 'Export Agriculture', value: 35 },
  { name: 'Group Loan', value: 28 },
  { name: 'Machinery', value: 18 },
  { name: 'Land Purchase', value: 12 },
  { name: 'Mortgage', value: 7 },
];

export default function StatsDashboard() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="stats" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-green-950" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-900/50 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-green-700/50">
            Statistics Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Our Impact in
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            1+ year of transforming agricultural communities through cooperative economics.
          </p>
        </motion.div>

        {/* Main Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} separator="," />
                ) : '0'}
              </div>
              <div className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-white font-bold mb-5">Cooperative Growth Over Years</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="farmersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="loansGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="year" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} />
                <Tooltip
                  formatter={(v: unknown) => [Number(v).toLocaleString()]}
                  contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                />
                <Legend wrapperStyle={{ color: '#9ca3af' }} />
                <Area type="monotone" dataKey="farmers" stroke="#4ade80" fill="url(#farmersGrad)" strokeWidth={2} name="Farmers" />
                <Area type="monotone" dataKey="loans" stroke="#60a5fa" fill="url(#loansGrad)" strokeWidth={2} name="Loans" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-white font-bold mb-5">Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#ffffff20" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Radar name="Score" dataKey="A" stroke="#4ade80" fill="#4ade80" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Loan Breakdown Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6"
        >
          <h3 className="text-white font-bold mb-5">Loan Portfolio Breakdown (%)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={loanBreakdown} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis type="number" tick={{ fill: '#9ca3af', fontSize: 11 }} />
              <YAxis dataKey="name" type="category" tick={{ fill: '#9ca3af', fontSize: 11 }} width={120} />
              <Tooltip
                  formatter={(v: unknown) => [`${Number(v)}%`]}
                  contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                />
              <Bar dataKey="value" fill="#4ade80" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
