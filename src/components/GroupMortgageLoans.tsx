import { motion } from "framer-motion";
import { House, Shield, UsersRound } from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaHandshake } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function GroupMortgageLoans() {
  const { t } = useLang();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const groupFeatures = [
    t.groupMortgage.gf1,
    t.groupMortgage.gf2,
    t.groupMortgage.gf3,
    t.groupMortgage.gf4,
    t.groupMortgage.gf5,
    t.groupMortgage.gf6,
    t.groupMortgage.gf7,
  ];
  const mortgageFeatures = [
    t.groupMortgage.mf1,
    t.groupMortgage.mf2,
    t.groupMortgage.mf3,
    t.groupMortgage.mf4,
    t.groupMortgage.mf5,
    t.groupMortgage.mf6,
  ];

  const groupProcess = [
    {
      step: "01",
      title: t.groupMortgage.p1Title,
      desc: t.groupMortgage.p1Desc,
    },
    {
      step: "02",
      title: t.groupMortgage.p2Title,
      desc: t.groupMortgage.p2Desc,
    },
    {
      step: "03",
      title: t.groupMortgage.p3Title,
      desc: t.groupMortgage.p3Desc,
    },
    {
      step: "04",
      title: t.groupMortgage.p4Title,
      desc: t.groupMortgage.p4Desc,
    },
    {
      step: "05",
      title: t.groupMortgage.p5Title,
      desc: t.groupMortgage.p5Desc,
    },
    {
      step: "06",
      title: t.groupMortgage.p6Title,
      desc: t.groupMortgage.p6Desc,
    },
  ];

  return (
    <section id="group-loan" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t.groupMortgage.badge}
          </span>
          <h2 className="text-4xl font-semibold md:text-5xl fornt-semibold text-gray-900 mb-5">
            {t.groupMortgage.title1}
            <br />
            <span className="gradient-text">{t.groupMortgage.title2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.groupMortgage.sub}
          </p>
        </motion.div>

        <div
          id="group-loan-detail"
          className="grid lg:grid-cols-2 gap-10 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[color:var(--color-secondary)]/20 to-[color:var(--color-secondary)]/15 rounded-3xl p-8 border border-teal-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[color:var(--color-secondary)] flex items-center justify-center">
                <UsersRound
                  strokeWidth={1.75}
                  className="text-white text-3xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t.groupMortgage.groupTitle}
                </h3>
                <span className="inline-block bg-[color:var(--color-secondary)] border border-[color:var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full mt-1">
                  {t.groupMortgage.noCollateral}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  5
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  {t.groupMortgage.membersLabel}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  21%
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  {t.groupMortgage.interestLabel}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  1Y
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  {t.groupMortgage.durationLabel}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 mb-6 border border-teal-100">
              <div className="text-sm text-gray-500 mb-1">
                {t.groupMortgage.loanAmountLabel}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">
                    {t.groupMortgage.minimum}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    Rs. 25,000
                  </div>
                </div>
                <div className="text-gray-300 text-2xl font-light">-</div>
                <div>
                  <div className="text-xs text-gray-400">
                    {t.groupMortgage.maximum}
                  </div>
                  <div className="text-xl fornt-semibold text-gray-900">
                    Rs. 100,000
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 mb-6">
              {groupFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[color:var(--color-secondary)] mt-0.5 flex-shrink-0 text-sm" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("/apply-loan")}
              className="btn-primary"
              style={{ background: "var(--color-secondary)" }}
            >
              {t.groupMortgage.applyGroup} <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              {t.groupMortgage.howTitle}
            </h4>
            <div className="space-y-4">
              {groupProcess.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-[color:var(--color-secondary)]/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-[color:var(--color-secondary)] text-white rounded-xl flex items-center justify-center fornt-semibold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {step.title}
                    </div>
                    <div className="text-gray-600 text-sm">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-gradient-to-r from-[color:var(--color-secondary)]/50 to-[color:var(--color-secondary)]/60 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaHandshake className="text-2xl text-[color:var(--color-secondary)]" />
                <h4 className="font-bold text-black">
                  {t.groupMortgage.solidarityTitle}
                </h4>
              </div>
              <p className="text-black text-sm leading-relaxed">
                {t.groupMortgage.solidarityText}
              </p>
            </div>
          </motion.div>
        </div>

        <div id="mortgage-loan">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-8 border border-rose-100"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[color:var(--color-light-green)] flex items-center justify-center">
                    <House strokeWidth={1.75} className="text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl fornt-semibold text-gray-900">
                      {t.groupMortgage.mortgageTitle}
                    </h3>
                    <span className="inline-block bg-[color:var(--color-light-green)] text-white text-xs font-bold px-3 py-1 rounded-full mt-1">
                      {t.groupMortgage.forLarge}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      100K+
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      {t.groupMortgage.minLabel}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      10,000K
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      {t.groupMortgage.maxLabel}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      17%
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      {t.groupMortgage.rateLabel}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t.groupMortgage.mortgageDesc}
                </p>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100 mb-4">
                  <Shield
                    strokeWidth={1.75}
                    className="text-[color:var(--color-light-green)] text-xl flex-shrink-0"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {t.groupMortgage.collateralTitle}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {t.groupMortgage.collateralDesc}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick("/apply-loan")}
                  className="btn-primary justify-center w-full"
                  style={{ background: "var(--color-primary)" }}
                >
                  {t.groupMortgage.inquireMortgage} <FaArrowRight />
                </button>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  {t.groupMortgage.eligibilityTitle}
                </h4>
                <div className="space-y-3">
                  {mortgageFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[color:var(--color-light-green)]"
                    >
                      <FaCheckCircle className="text-[color:var(--color-light-green)] mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
