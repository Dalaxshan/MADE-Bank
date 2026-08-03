import { motion } from "framer-motion";
import {
  CheckCircle,
  ClockCheck,
  Forklift,
  Landmark,
  LandPlot,
  Percent,
  Sprout,
  Tractor,
  Users,
} from "lucide-react";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: "export-loan",
    icon: <Sprout strokeWidth={1.25} />,
    title: "Export Agriculture Loan",
    subtitle: "For Export-Oriented Cultivation",
    desc: "Financial assistance specifically designed for farmers engaged in export-quality crop cultivation including cinnamon, Vanilla,pepper, cardamom, and organic vegetables.",
    features: [
      "Up to Rs. 500,000",
      "Competitive interest rates",
      "Flexible repayment",
      "Buy-back guaranteed",
    ],
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green-100 text-green-600",
    badge: "Most Popular",
    badgeColor: "bg-green-600",
  },
  {
    id: "land-loan",
    icon: <Landmark strokeWidth={1.25} />,
    title: "Agriculture Land Purchasing Loan",
    subtitle: "Expand Your Farming Land",
    desc: "Helping farmers secure agricultural land for cultivation with affordable financing and flexible repayment terms tailored to farming income cycles.",
    features: [
      "Agricultural land only",
      "Long repayment period",
      "Low interest rate",
      "Title deed required",
    ],
    color: "from-brown-500 to-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100 text-amber-700",
    badge: null,
  },
  {
    id: "machinery-loan",
    icon: <Forklift strokeWidth={1.25} />,
    title: "Agricultural Machinery Loan",
    subtitle: "Modernize Your Farm",
    desc: "Loans for tractors, harvesters, irrigation equipment, water pumps, and modern agricultural machinery to increase productivity and efficiency.",
    features: [
      "Tractors & harvesters",
      "Irrigation systems",
      "Water pumps",
      "Processing equipment",
    ],
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
    badge: null,
  },
  {
    id: "vehicle-loan",
    icon: <Tractor strokeWidth={1.25} />,
    title: "Agricultural Vehicle Loan",
    subtitle: "Transport Your Harvest",
    desc: "Vehicle financing for agricultural transport including lorries, mini-trucks, and specialized farming vehicles to ensure your harvest reaches markets efficiently.",
    features: [
      "Agricultural vehicles",
      "Transport logistics",
      "Market connectivity",
      "Flexible terms",
    ],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    badge: null,
  },
  {
    id: "group-loan",
    icon: <Users strokeWidth={1.25} />,
    title: "Group Loan",
    subtitle: "Five-Member Farmer Groups",
    desc: "Community-based lending for groups of five farmers. Mutual guarantee system enables access to credit for those without individual collateral.",
    features: [
      "5-member groups",
      "Rs. 25,000–100,000",
      "21% interest rate",
      "6–12 months term",
    ],
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    iconBg: "bg-teal-100 text-teal-600",
    badge: "No Collateral",
    badgeColor: "bg-teal-600",
  },
  {
    id: "mortgage",
    icon: <LandPlot strokeWidth={1.25} />,
    title: "Mortgage Loan",
    subtitle: "Property-Backed Financing",
    desc: "For larger financial requirements above Rs. 100,000. Secure substantial funding using property as collateral with competitive interest rates.",
    features: [
      "Above Rs. 100,000",
      "Property collateral",
      "Long repayment",
      "Flexible schedule",
    ],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
    badge: "Large Loans",
    badgeColor: "bg-rose-600",
  },
];

export default function ServicesSection() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-14 bg-section-cream">
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Complete Financial Solutions
            <br />
            <span className="gradient-text">For Every Farmer</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From cultivation loans to export support, MADECOOP provides
            end-to-end financial services tailored to the agricultural
            community.
          </p>
        </motion.div>

        {/* Services Grid */}
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
              {/* Badge */}
              {service.badge && (
                <div
                  className={`absolute top-4 right-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {service.badge}
                </div>
              )}

              {/* Hover gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Icon */}
              <div
                className={`feature-icon ${service.iconBg} w-16 h-16 rounded-2xl`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex items-center gap-2 text-sm font-semibold text-green-700 group-hover:text-green-800 transition-colors"
              >
                Apply Now{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden p-8 sm:p-10 text-center text-[#F3F7F5]"
          style={{
            background:
              "var(--color-primary) ",
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
          }}
        >
          {/* faint ledger-line texture, matching the hero */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)",
            }}
          />

          {/* faint corner stamp watermark, tying back to the passbook seal */}
          <svg
            viewBox="0 0 200 200"
            className="absolute -top-6 -right-6 w-40 h-40 opacity-[0.12] pointer-events-none"
          >
            <defs>
              <path
                id="ctaStampCircle"
                d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                fill="none"
              />
            </defs>
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#F3F7F5"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke="#F3F7F5"
              strokeWidth="1.5"
            />
            <text fill="#F3F7F5" fontSize="11" letterSpacing="2">
              <textPath href="#ctaStampCircle" startOffset="0%">
                • MADECOOP · APPROVED · MADECOOP · APPROVED
              </textPath>
            </text>
          </svg>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              Ready to Transform Your Farm?
            </h3>
            <p className="text-[#F3F7F5]/75 mb-8 text-lg">
              Visit our office or call us to discuss which loan product is right
              for you.
            </p>

            {/* ledger-tag chips, matching the hero's shipment tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  icon: <Percent strokeWidth={1.75} />,
                  label: "Competitive Interest Rates",
                },
                {
                  icon: <ClockCheck strokeWidth={1.75} />,
                  label: "Quick Approval Process",
                },
                {
                  icon: <CheckCircle strokeWidth={1.75} />,
                  label: "No Hidden Charges",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-[#F3F7F5]/10 border border-[#F3F7F5]/20 px-5 py-3 text-sm"
                  style={{
                    fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
                  }}
                >
                  <span className="text-[#F3F7F5]">{item.icon}</span>
                  <span className="font-semibold tracking-wide">
                    {item.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
