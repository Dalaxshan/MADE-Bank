import { motion } from 'framer-motion';
import {
  FaMoneyBillWave, FaSeedling, FaWarehouse,
  FaHandshake, FaShip, FaSmile, FaArrowDown,
  FaCheckCircle, FaStar
} from 'react-icons/fa';

const stages = [
  {
    step: 1,
    emoji: '💸',
    icon: <FaMoneyBillWave />,
    title: 'Need Money',
    desc: 'Farmer identifies cultivation opportunity but lacks capital',
    color: 'from-red-400 to-orange-400',
    glow: 'shadow-red-200',
  },
  {
    step: 2,
    emoji: '✅',
    icon: <FaHandshake />,
    title: 'Loan Approval',
    desc: 'Quick, fair agricultural loan approved within 5-7 days',
    color: 'from-blue-400 to-indigo-500',
    glow: 'shadow-blue-200',
  },
  {
    step: 3,
    emoji: '🌱',
    icon: <FaSeedling />,
    title: 'Cultivation',
    desc: 'Farm with technical guidance from MADECOOP officers',
    color: 'from-green-400 to-emerald-500',
    glow: 'shadow-green-200',
  },
  {
    step: 4,
    emoji: '🌾',
    icon: <FaWarehouse />,
    title: 'Harvest',
    desc: 'Bumper harvest achieved with proper farming practices',
    color: 'from-amber-400 to-yellow-500',
    glow: 'shadow-amber-200',
  },
  {
    step: 5,
    emoji: '🤝',
    icon: <FaHandshake />,
    title: 'Guaranteed Purchase',
    desc: 'MADECOOP buys 100% of your harvest at fair prices',
    color: 'from-purple-400 to-violet-500',
    glow: 'shadow-purple-200',
  },
  {
    step: 6,
    emoji: '🚢',
    icon: <FaShip />,
    title: 'Export',
    desc: 'Your produce shipped to global markets via export partners',
    color: 'from-teal-400 to-cyan-500',
    glow: 'shadow-teal-200',
  },
  {
    step: 7,
    emoji: '💰',
    icon: <FaSmile />,
    title: 'Profit',
    desc: 'Premium export income - repay loan, reinvest, prosper!',
    color: 'from-emerald-400 to-green-500',
    glow: 'shadow-emerald-200',
  },
];

const benefits = [
  { icon: '🏦', title: 'Zero Hidden Fees', desc: 'Completely transparent loan terms' },
  { icon: '⚡', title: 'Fast Approval', desc: 'Loans approved in 5-7 working days' },
  { icon: '🛡️', title: 'Buy-Back Assured', desc: '100% harvest purchase guaranteed' },
  { icon: '🌍', title: 'Export Premium', desc: '30-50% higher prices vs local market' },
  { icon: '📚', title: 'Training Support', desc: 'Free agricultural guidance provided' },
  { icon: '🤝', title: 'Community First', desc: 'Cooperative model benefits all members' },
];

export default function CompleteSupportSystem() {
  return (
    <section className="py-28 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a2e0d 0%, #1a5f1e 30%, #1b5e20 60%, #0d3b10 100%)'
    }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blurred circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
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
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-white/90 text-sm font-semibold">Our Signature Program</span>
            <FaStar className="text-yellow-400 text-sm" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our Complete
            <br />
            <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Farmer Support System
            </span>
          </h2>

          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            From the moment a farmer needs money to the moment they receive export profits -
            MADECOOP is with you at <strong className="text-white">every single step</strong>.
          </p>
        </motion.div>

        {/* Step Flow - Large Visual */}
        <div className="flex flex-col items-center gap-0 mb-20">
          {stages.map((stage, i) => (
            <div key={stage.step} className="flex flex-col items-center w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className={`w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 relative overflow-hidden group cursor-pointer hover:bg-white/15 transition-all shadow-xl ${stage.glow}`}
              >
                {/* Step number */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stage.color} rounded-bl-3xl flex items-center justify-center`}>
                  <span className="text-white font-black text-lg">{stage.step}</span>
                </div>

                <div className="flex items-center gap-5">
                  {/* Emoji */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                    {stage.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-black text-xl mb-1">{stage.title}</h3>
                    <p className="text-white/70 text-sm">{stage.desc}</p>
                  </div>

                  {/* Checkmark for completed stages on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaCheckCircle className="text-green-400 text-2xl" />
                  </div>
                </div>
              </motion.div>

              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.3 }}
                  className="py-3 flex flex-col items-center"
                >
                  <div className="w-0.5 h-4 bg-gradient-to-b from-white/40 to-white/20" />
                  <FaArrowDown className="text-green-400 text-lg" />
                  <div className="w-0.5 h-4 bg-gradient-to-b from-white/20 to-white/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Final Result Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 rounded-3xl px-8 py-6 shadow-2xl">
            <div className="text-5xl mb-2">🏆</div>
            <div className="text-2xl font-black text-gray-900">Farmer's Dream Realized</div>
            <div className="text-gray-700 font-medium">Profitable, Sustainable, Prosperous Agriculture</div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-2xl font-black text-center mb-8">
            Why This System <span className="text-green-300">Works</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{benefit.title}</div>
                <div className="text-white/60 text-xs">{benefit.desc}</div>
              </motion.div>
            ))}
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
          <p className="text-white/70 text-lg mb-6">Ready to join 5000+ successful farmers?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-400 to-emerald-400 text-gray-900 font-black text-base px-8 py-4 rounded-full hover:from-green-300 hover:to-emerald-300 transition-all shadow-xl"
            >
              Apply for a Loan Today 🚀
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/15 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/30 hover:bg-white/25 transition-all"
            >
              Talk to Our Team 💬
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
