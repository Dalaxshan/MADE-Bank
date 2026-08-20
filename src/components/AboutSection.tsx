import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Award,
  BanknoteIcon,
  BarChart2,
  Globe,
  Leaf,
  Quote,
  Trophy,
  Users,
} from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const INK = "#1E2A38";

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: t.about.farmers,
      icon: <Users strokeWidth={1.25} />,
      color: "text-green-600",
    },
    {
      value: 100,
      suffix: "+",
      label: t.about.loans,
      icon: <BanknoteIcon strokeWidth={1.25} />,
      color: "text-blue-600",
    },
    {
      value: 6,
      suffix: "+",
      label: t.about.partners,
      icon: <Globe strokeWidth={1.25} />,
      color: "text-purple-600",
    },
    {
      value: 1,
      suffix: "+",
      label: t.about.years,
      icon: <Trophy strokeWidth={1.25} />,
      color: "text-yellow-600",
    },
    {
      value: 500,
      suffix: "M+",
      label: t.about.disbursed,
      icon: <BarChart2 strokeWidth={1.25} />,
      color: "text-red-600",
    },
    {
      value: 1000,
      suffix: "+",
      label: t.about.acres,
      icon: <Leaf strokeWidth={1.25} />,
      color: "text-emerald-600",
    },
  ];

  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        className="relative py-24 flex items-center overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        {/* background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source
            src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/av-plantations/Website/Branch%20Network/9-1_tifudo.mp4"
            type="video/mp4"
          />
        </video>
        {/* dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(30,42,56,0.72)' }} />

        {/* rotating stamp */}
        <div className="absolute right-10 top-10 hidden md:block">
          <motion.svg
            viewBox="0 0 160 160"
            className="h-28 w-28 opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="aboutStamp"
                d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
                fill="none"
              />
            </defs>
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#F3F7F5"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle
              cx="80"
              cy="80"
              r="58"
              fill="none"
              stroke="#F3F7F5"
              strokeWidth="1"
              opacity="0.35"
            />
            <text fill="#F3F7F5" fontSize="9" letterSpacing="2.5">
              <textPath href="#aboutStamp" startOffset="0%">
                • EST. 2025 · MADE Co-op · MATALE ·
              </textPath>
            </text>
          </motion.svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3.5xl"
          >
            <span
              className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.18em] -rotate-1"
              style={{
                borderColor: "rgba(86,164,69,0.6)",
                color: "var(--color-light-green)",
              }}
            >
              {t.about.badge}
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-6"
              style={{ color: "#F3F7F5" }}
            >
              {t.about.title1}
              <br />
              <span style={{ color: "var(--color-light-green)" }}>
                {t.about.title2}
              </span>
            </h1>

            <p
              className="text-md leading-relaxed max-w-xl"
              style={{ color: "rgba(243,247,245,0.75)" }}
            >
              {t.about.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section id="about" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 text-center rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className={`flex justify-center mb-2 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl font-semibold ${stat.color}`}>
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
                  alt="MADE Co-op farmer"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-white font-bold text-lg">
                      {t.about.trusted}
                    </div>
                    <div className="text-white/80 text-sm">
                      {t.about.trustedSub}
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-green-100"
              >
                <div className="text-3xl font-semibold text-green-700">1+</div>
                <div className="text-xs text-gray-500 font-medium">
                  {t.about.yearsServing}
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-yellow-100"
              >
                <Award
                  className="text-yellow-600 w-6 h-6 mb-1"
                  strokeWidth={1.25}
                />
                <div className="text-xs text-gray-600 font-medium">
                  {t.about.award}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                {t.about.storyBadge}
              </span>
              <h3 className="text-3xl font-semibold text-gray-900 mb-5 leading-tight">
                {t.about.storyTitle1}
                <br />
                <span className="gradient-text">{t.about.storyTitle2}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                {t.about.storyP1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.about.storyP2}
              </p>
              <div className="space-y-3">
                {[t.about.kp1, t.about.kp2, t.about.kp3, t.about.kp4].map(
                  (point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          {/* Chairman */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                {t.about.chairmanBadge}
              </span>
              <h3 className="text-3xl font-semibold text-gray-900 mb-5 leading-tight">
                {t.about.chairmanTitle1}
                <br />
                <span className="gradient-text">{t.about.chairmanTitle2}</span>
              </h3>
              <div className="relative pl-6 border-l-4 border-green-200 mb-6">
                <Quote
                  className="absolute -left-[22px] -top-2 w-9 h-9 text-green-600 bg-white"
                  strokeWidth={1.25}
                />
                <p className="text-gray-600 leading-relaxed italic">
                  {t.about.chairmanQuote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-100 flex-shrink-0">
                  <img
                    src="/images/logo.png"
                    alt="Director, MADE Co-op"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {t.about.chairmanName}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {t.about.chairmanRole}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/director.png"
                  alt="MADE Co-op Director"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-white font-bold text-lg">
                      {t.about.leadingPurpose}
                    </div>
                    <div className="text-white/80 text-sm">
                      {t.about.leadingSub}
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-green-100"
              >
                <Quote
                  className="text-green-600 w-6 h-6 mb-1"
                  strokeWidth={1.25}
                />
                <div className="text-xs text-gray-500 font-medium">
                  {t.about.chairmanBadge}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
