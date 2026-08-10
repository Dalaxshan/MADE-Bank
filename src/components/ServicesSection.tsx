import { motion } from "framer-motion";
import { CheckCircle, ClockCheck, Forklift, Landmark, LandPlot, Percent, Sprout, Tractor, Users } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";

export default function ServicesSection() {
  const { t } = useLang();

  const services = [
    {
      id: "group-loan", icon: <Users strokeWidth={1.25} />,
      title: t.services.groupTitle, subtitle: t.services.groupSubtitle, desc: t.services.groupDesc,
      features: [t.services.groupF1, t.services.groupF2, t.services.groupF3, t.services.groupF4],
      color: "from-teal-500 to-cyan-600", bg: "bg-teal-50", border: "border-teal-200", iconBg: "bg-teal-100 text-teal-600",
      badge: t.services.groupBadge, badgeColor: "bg-teal-600",
    },
    {
      id: "mortgage", icon: <LandPlot strokeWidth={1.25} />,
      title: t.services.mortgageTitle, subtitle: t.services.mortgageSubtitle, desc: t.services.mortgageDesc,
      features: [t.services.mortgageF1, t.services.mortgageF2, t.services.mortgageF3, t.services.mortgageF4],
      color: "from-rose-500 to-pink-600", bg: "bg-rose-50", border: "border-rose-200", iconBg: "bg-rose-100 text-rose-600",
      badge: t.services.mortgageBadge, badgeColor: "bg-rose-600",
    },
    {
      id: "export-loan", icon: <Sprout strokeWidth={1.25} />,
      title: t.services.exportTitle, subtitle: t.services.exportSubtitle, desc: t.services.exportDesc,
      features: [t.services.exportF1, t.services.exportF2, t.services.exportF3, t.services.exportF4],
      color: "from-green-500 to-emerald-600", bg: "bg-green-50", border: "border-green-200", iconBg: "bg-green-100 text-green-600",
      badge: null, badgeColor: "bg-green-600",
    },
    {
      id: "land-loan", icon: <Landmark strokeWidth={1.25} />,
      title: t.services.landTitle, subtitle: t.services.landSubtitle, desc: t.services.landDesc,
      features: [t.services.landF1, t.services.landF2, t.services.landF3, t.services.landF4],
      color: "from-brown-500 to-amber-700", bg: "bg-amber-50", border: "border-amber-200", iconBg: "bg-amber-100 text-amber-700",
      badge: t.services.landBadge, badgeColor: "bg-amber-600",
    },
    {
      id: "vehicle-loan", icon: <Tractor strokeWidth={1.25} />,
      title: t.services.vehicleTitle, subtitle: t.services.vehicleSubtitle, desc: t.services.vehicleDesc,
      features: [t.services.vehicleF1, t.services.vehicleF2, t.services.vehicleF3, t.services.vehicleF4],
      color: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200", iconBg: "bg-blue-100 text-blue-600",
      badge: null, badgeColor: "",
    },
    {
      id: "machinery-loan", icon: <Forklift strokeWidth={1.25} />,
      title: t.services.machineryTitle, subtitle: t.services.machinerySubtitle, desc: t.services.machineryDesc,
      features: [t.services.machineryF1, t.services.machineryF2, t.services.machineryF3, t.services.machineryF4],
      color: "from-orange-500 to-red-500", bg: "bg-orange-50", border: "border-orange-200", iconBg: "bg-orange-100 text-orange-600",
      badge: null, badgeColor: "",
    },
  ];

  return (
    <section id="services" className="py-14 bg-section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            {t.services.title1}<br />
            <span className="gradient-text">{t.services.title2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.services.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative ${service.bg} border ${service.border} rounded-3xl p-6 cursor-pointer group overflow-hidden`}
            >
              {service.badge && (
                <div className={`absolute top-4 right-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {service.badge}
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
              <div className={`feature-icon ${service.iconBg} w-16 h-16 rounded-2xl`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{service.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-8 sm:p-10 text-center text-[#F3F7F5]"
          style={{ background: "var(--color-primary)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))" }}
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)" }} />
          <svg viewBox="0 0 200 200" className="absolute -top-6 -right-6 w-40 h-40 opacity-[0.12] pointer-events-none">
            <defs><path id="ctaStampCircle" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" fill="none" /></defs>
            <circle cx="100" cy="100" r="90" fill="none" stroke="#F3F7F5" strokeWidth="2" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#F3F7F5" strokeWidth="1.5" />
            <text fill="#F3F7F5" fontSize="11" letterSpacing="2">
              <textPath href="#ctaStampCircle" startOffset="0%">• MADECOOP · APPROVED · MADECOOP · APPROVED</textPath>
            </text>
          </svg>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-3">{t.services.ctaTitle}</h3>
            <p className="text-[#F3F7F5]/75 mb-8 text-lg">{t.services.ctaSub}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: <Percent strokeWidth={1.75} />, label: t.services.cta1 },
                { icon: <ClockCheck strokeWidth={1.75} />, label: t.services.cta2 },
                { icon: <CheckCircle strokeWidth={1.75} />, label: t.services.cta3 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 px-5 py-3 text-sm">
                  <span className="text-[#F3F7F5]">{item.icon}</span>
                  <span className="font-semibold tracking-wide">{item.label.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
