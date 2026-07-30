import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { BanknoteArrowDown, ChartNoAxesCombined, ChartSpline, Earth, Handshake, Leaf, Shield, Trophy, Users } from 'lucide-react';

const stats = [
  { value: 5000, suffix: '+', label: 'Farmers Supported', icon: <Users strokeWidth={1.25} />, color: 'text-green-600' },
  { value: 1000, suffix: '+', label: 'Loans Issued', icon: <BanknoteArrowDown strokeWidth={1.25} />, color: 'text-blue-600' },
  { value: 20, suffix: '+', label: 'Export Partners', icon: <Earth strokeWidth={1.25} />, color: 'text-purple-600' },
  { value: 1, suffix: '+', label: 'Years of Service', icon: <Trophy strokeWidth={1.25} />, color: 'text-yellow-600' },
  { value: 500, suffix: 'M+', label: 'LKR Loans Disbursed', icon: <ChartSpline strokeWidth={1.25} />, color: 'text-red-600' },
  { value: 10000, suffix: '+', label: 'Acres Developed', icon: <Leaf strokeWidth={1.25} />, color: 'text-emerald-600' },
];

const features = [
  {
    icon: <Handshake strokeWidth={1.25} className="text-2xl" />,
    title: 'Supporting Traditional Farmers',
    desc: 'We provide comprehensive support to traditional farmers, helping them modernize while preserving their agricultural heritage.',
    color: 'bg-green-50',
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    icon: <ChartNoAxesCombined strokeWidth={1.25} className="text-2xl" />,
    title: 'Agriculture Financing',
    desc: 'Affordable loans with competitive interest rates designed specifically for the agricultural community.',
    color: 'bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: <Earth strokeWidth={1.25} className="text-2xl" />,
    title: 'Export Partnerships',
    desc: 'Direct partnerships with international buyers including Bio Foods, ensuring premium prices for quality produce.',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: <Shield strokeWidth={1.25} className="text-2xl" />,
    title: 'Buy-Back Guarantee',
    desc: 'MADECOOP guarantees to purchase your harvest at fair market prices, eliminating the risk of unsold produce.',
    color: 'bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    icon: <Leaf strokeWidth={1.25} className="text-2xl" />,
    title: 'Sustainable Agriculture',
    desc: 'Promoting environmentally responsible farming practices that benefit both farmers and future generations.',
    color: 'bg-emerald-50',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: <Users strokeWidth={1.25} className="text-2xl" />,
    title: 'Rural Economic Development',
    desc: 'Committed to uplifting rural communities through cooperative economics and shared prosperity.',
    color: 'bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-600',
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About MADECOOP
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Rooted in Agriculture,
            <br />
            <span className="gradient-text">Growing Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Matale District Agriculture Development and Export Cooperative Society Ltd. (MADECOOP) has been the backbone
            of traditional farming communities in Central Province for over 1+ year - providing financial empowerment,
            market access, and sustainable growth pathways.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="stat-card group"
            >
              <div className={`text-3xl mb-2 ${stat.color} flex justify-center`}>{stat.icon}</div>
              <div className={`text-3xl font-black ${stat.color}`}>
                {inView ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} separator="," />
                ) : '0'}
              </div>
              <div className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-team.jpg"
                alt="MADECOOP farmer"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <div className="text-white font-bold text-lg">Trusted by 5000+ Farmers</div>
                  <div className="text-white/80 text-sm">Across Matale District, Central Province</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-green-100"
            >
              <div className="text-3xl font-black text-green-700">1+</div>
              <div className="text-xs text-gray-500 font-medium">Years Serving<br />Farmers</div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-yellow-100"
            >
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs text-gray-600 font-medium">Award-winning<br />Cooperative</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h3 className="text-3xl font-black text-gray-900 mb-5 leading-tight">
              A Cooperative Built
              <br />
              <span className="gradient-text">For Farmers, By Farmers</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              MADECOOP was founded with a singular vision: to break the cycle of poverty that traps traditional farmers.
              By combining financial services with guaranteed market access and export partnerships, we create a complete
              ecosystem where farmers can thrive.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our buy-back guarantee means farmers never worry about unsold harvests. Our export network connects
              Sri Lankan farmers directly to international markets, ensuring premium prices for quality produce
              including cinnamon, pepper, cardamom, and fresh vegetables.
            </p>

            {/* Key points */}
            <div className="space-y-3">
              {[
                'Registered Cooperative under CPC Act No. 10 of 1990',
                'Transparent interest rates with flexible repayment',
                'Direct farm-to-export supply chain management',
                'Community-based group lending programs',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${feature.color} rounded-2xl p-6 card-hover border border-white`}
            >
              <div className={`feature-icon ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
