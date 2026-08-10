import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { AwardIcon, BanknoteArrowDown, ChartSpline, Earth, Leaf, Quote, Trophy, Users } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  const stats = [
    { value: 500, suffix: '+', label: t.about.farmers, icon: <Users strokeWidth={1.25} />, color: 'text-green-600' },
    { value: 100, suffix: '+', label: t.about.loans, icon: <BanknoteArrowDown strokeWidth={1.25} />, color: 'text-blue-600' },
    { value: 6, suffix: '+', label: t.about.partners, icon: <Earth strokeWidth={1.25} />, color: 'text-purple-600' },
    { value: 1, suffix: '+', label: t.about.years, icon: <Trophy strokeWidth={1.25} />, color: 'text-yellow-600' },
    { value: 500, suffix: 'M+', label: t.about.disbursed, icon: <ChartSpline strokeWidth={1.25} />, color: 'text-red-600' },
    { value: 1000, suffix: '+', label: t.about.acres, icon: <Leaf strokeWidth={1.25} />, color: 'text-emerald-600' },
  ];

  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            {t.about.title1}<br />
            <span className="gradient-text">{t.about.title2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">{t.about.sub}</p>
        </motion.div>

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
              <div className={`text-2xl mb-2 ${stat.color} flex justify-center`}>{stat.icon}</div>
              <div className={`text-xl font-black ${stat.color}`}>
                {inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix} separator="," /> : '0'}
              </div>
              <div className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/about-team.jpg" alt="MADECOOP farmer" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <div className="text-white font-bold text-lg">{t.about.trusted}</div>
                  <div className="text-white/80 text-sm">{t.about.trustedSub}</div>
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
              <div className="text-3xl font-black text-green-700">1+</div>
              <div className="text-xs text-gray-500 font-medium">{t.about.yearsServing}<br />{t.about.farmers}</div>
            </motion.div>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-yellow-100">
              <AwardIcon className="text-yellow-600 w-6 h-6 mb-1" strokeWidth={1.25} />
              <div className="text-xs text-gray-600 font-medium">{t.about.award}</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t.about.storyBadge}</span>
            <h3 className="text-3xl font-black text-gray-900 mb-5 leading-tight">
              {t.about.storyTitle1}<br />
              <span className="gradient-text">{t.about.storyTitle2}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">{t.about.storyP1}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{t.about.storyP2}</p>
            <div className="space-y-3">
              {[t.about.kp1, t.about.kp2, t.about.kp3, t.about.kp4].map((point) => (
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t.about.chairmanBadge}</span>
            <h3 className="text-3xl font-black text-gray-900 mb-5 leading-tight">
              {t.about.chairmanTitle1}<br />
              <span className="gradient-text">{t.about.chairmanTitle2}</span>
            </h3>
            <div className="relative pl-6 border-l-4 border-green-200 mb-6">
              <Quote className="absolute -left-[22px] -top-2 w-9 h-9 text-green-600 bg-white" strokeWidth={1.25} />
              <p className="text-gray-600 leading-relaxed italic">{t.about.chairmanQuote}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-100 flex-shrink-0">
                <img src="/images/logo.png" alt="Director, MADECOOP" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{t.about.chairmanName}</div>
                <div className="text-gray-500 text-sm">{t.about.chairmanRole}</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/director.png" alt="MADECOOP Director" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <div className="text-white font-bold text-lg">{t.about.leadingPurpose}</div>
                  <div className="text-white/80 text-sm">{t.about.leadingSub}</div>
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
              <Quote className="text-green-600 w-6 h-6 mb-1" strokeWidth={1.25} />
              <div className="text-xs text-gray-500 font-medium">{t.about.chairmanBadge}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
