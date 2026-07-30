import { motion } from 'framer-motion';
import {
  FaTimesCircle, FaMoneyBillWave, FaSeedling, FaWarehouse,
  FaHandshake, FaShip, FaSmile, FaArrowDown, FaCheckCircle
} from 'react-icons/fa';

const journeySteps = [
  {
    step: 1,
    icon: <FaTimesCircle className="text-4xl" />,
    title: 'Farmer Problem',
    desc: 'Traditional farmer lacks capital for cultivation. No access to credit, high-interest informal lenders, and no guaranteed market.',
    color: 'bg-red-100 text-red-600',
    borderColor: 'border-red-200',
    bg: 'bg-red-50',
    badge: 'The Challenge',
    badgeColor: 'bg-red-500',
  },
  {
    step: 2,
    icon: <FaMoneyBillWave className="text-4xl" />,
    title: 'MADECOOP Loan',
    desc: 'Apply for an affordable agricultural loan. Quick approval, fair interest rates, and repayment aligned with harvest cycles.',
    color: 'bg-blue-100 text-blue-600',
    borderColor: 'border-blue-200',
    bg: 'bg-blue-50',
    badge: 'Loan Approval',
    badgeColor: 'bg-blue-500',
  },
  {
    step: 3,
    icon: <FaSeedling className="text-4xl" />,
    title: 'Cultivation Begins',
    desc: 'Farmer uses funds for seeds, fertilizers, irrigation, and labor. Technical guidance provided by MADECOOP agricultural officers.',
    color: 'bg-green-100 text-green-600',
    borderColor: 'border-green-200',
    bg: 'bg-green-50',
    badge: 'Cultivation',
    badgeColor: 'bg-green-500',
  },
  {
    step: 4,
    icon: <FaWarehouse className="text-4xl" />,
    title: 'Harvest Collection',
    desc: 'Bumper harvest achieved with proper farming practices. MADECOOP provides quality assessment and grading support.',
    color: 'bg-amber-100 text-amber-600',
    borderColor: 'border-amber-200',
    bg: 'bg-amber-50',
    badge: 'Harvest',
    badgeColor: 'bg-amber-500',
  },
  {
    step: 5,
    icon: <FaHandshake className="text-4xl" />,
    title: 'MADECOOP Buy-Back',
    desc: 'Guaranteed purchase of your entire harvest at pre-agreed fair market prices. No middlemen, no exploitation.',
    color: 'bg-purple-100 text-purple-600',
    borderColor: 'border-purple-200',
    bg: 'bg-purple-50',
    badge: 'Buy-Back',
    badgeColor: 'bg-purple-500',
  },
  {
    step: 6,
    icon: <FaShip className="text-4xl" />,
    title: 'Global Export',
    desc: 'MADECOOP exports your quality produce to international markets through partnerships with Bio Foods and global buyers.',
    color: 'bg-teal-100 text-teal-600',
    borderColor: 'border-teal-200',
    bg: 'bg-teal-50',
    badge: 'Export',
    badgeColor: 'bg-teal-500',
  },
  {
    step: 7,
    icon: <FaSmile className="text-4xl" />,
    title: 'Farmer Profit',
    desc: 'Premium export prices translate to higher income. Loan repaid from profits. Farmer reinvests in next season with confidence.',
    color: 'bg-emerald-100 text-emerald-600',
    borderColor: 'border-emerald-200',
    bg: 'bg-emerald-50',
    badge: 'Success!',
    badgeColor: 'bg-emerald-500',
  },
];

const problemSolution = [
  { problem: '❌ No Capital', solution: '✅ Affordable Loans' },
  { problem: '❌ No Market', solution: '✅ Buy-Back Guarantee' },
  { problem: '❌ Low Prices', solution: '✅ Export Premium Prices' },
  { problem: '❌ No Guidance', solution: '✅ Technical Support' },
];

export default function FarmerJourneySection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Farmers Choose MADECOOP
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            The Complete{' '}
            <span className="gradient-text">Farmer Support</span>
            <br />
            System
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We solve every challenge a farmer faces - from access to finance to selling the harvest at premium export prices.
          </p>
        </motion.div>

        {/* Problem → Solution Grid */}
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-5 text-center border border-green-100"
            >
              <div className="text-sm font-semibold text-red-600 mb-2 bg-red-50 rounded-lg py-2 px-3">{item.problem}</div>
              <FaArrowDown className="text-green-500 mx-auto my-2" />
              <div className="text-sm font-semibold text-green-700 bg-green-50 rounded-lg py-2 px-3">{item.solution}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-green-300 to-emerald-400 -translate-x-1/2" />

          <div className="space-y-8">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`lg:flex lg:items-center lg:gap-8 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Card */}
                <div className="lg:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${step.bg} border ${step.borderColor} rounded-3xl p-6 relative overflow-hidden`}
                  >
                    <div className={`absolute top-4 right-4 ${step.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      Step {step.step}
                    </div>
                    <div className={`feature-icon ${step.color} w-16 h-16 rounded-2xl mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                    className={`w-14 h-14 rounded-full ${step.badgeColor} flex items-center justify-center text-white font-black text-lg z-10 shadow-lg`}
                  >
                    {step.step}
                  </motion.div>
                </div>

                {/* Empty space for alternating */}
                <div className="lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 rounded-3xl p-10 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="text-3xl font-black mb-3">Join 5000+ Successful Farmers</h3>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
              Start your journey from problem to profit with MADECOOP's complete farmer support ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['No Risk', 'Guaranteed Buy-Back', 'Export Income', 'Community Support'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                  <FaCheckCircle className="text-green-300" /> {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
