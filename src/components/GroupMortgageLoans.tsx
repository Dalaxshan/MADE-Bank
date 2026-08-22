import { motion } from "framer-motion";
import { House, Shield, UsersRound } from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaHandshake } from "react-icons/fa";

const groupFeatures = [
  "Period of 6 months to 1 year.",
  "Guaranteed by a group of 5 members.",
  "Initial loans to 2 members.",
  "Other 3 will get loans in 5th ,9th and 13th month.",
  "Interest rate 21% per annum.",
  "Minimum Savaings Account balance of Rs.2,000 by all of them.",
  "A commitment to deposit monthly an agreed amount.",
];

const mortgageFeatures = [
  "Loan amount: Above Rs. 200,000",
  "Period of 1 year to 5 years.",
  "Extent of the Exposure - 75% of the market value.",
  "Interest rate 17% per annum.",
  "Security - Freehold Property.",
  "Two guarantors with freehold property.",
];

const groupProcess = [
  {
    step: "01",
    title: "Form a Group",
    desc: "Five farmers come together to form a lending group",
  },
  {
    step: "02",
    title: "Open Group Account",
    desc: "Open a joint savings account with MADECOOP",
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "All five members submit loan applications together",
  },
  {
    step: "04",
    title: "Assessment",
    desc: "MADECOOP assesses the group's repayment capacity",
  },
  {
    step: "05",
    title: "Loan Disbursement",
    desc: "Funds disbursed to individual members' accounts",
  },
  {
    step: "06",
    title: "Group Repayment",
    desc: "Group meets regularly to collect and submit repayments",
  },
];

export default function GroupMortgageLoans() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="group-loan" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Special Loan Programs
          </span>
          <h2 className="text-4xl font-semibold md:text-5xl fornt-semibold text-gray-900 mb-5">
            {t.groupMortgage.title1}
            <br />
            <span className="gradient-text">Loan Programs</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Inclusive lending solutions for farmers without individual
            collateral and substantial financing for larger agricultural
            investments.
          </p>
        </motion.div>

        {/* Group Loan */}
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
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[color:var(--color-secondary)] flex items-center justify-center">
                {/* <FaUsers className="text-teal-600 text-3xl" /> */}
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
                  No Collateral Required
                </span>
              </div>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  5
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  Members Per Group
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  21%
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  Interest Rate
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center border border-teal-100">
                <div className="text-2xl fornt-semibold text-[color:var(--color-secondary)]">
                  1Y
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  Max Duration
                </div>
              </div>
            </div>

            {/* Loan range */}
            <div className="bg-white rounded-2xl p-4 mb-6 border border-teal-100">
              <div className="text-sm text-gray-500 mb-1">
                Loan Amount Per Member
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

            {/* Features */}
            <div className="space-y-2.5 mb-6">
              {groupFeatures.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[color:var(--color-secondary)] mt-0.5 flex-shrink-0 text-sm" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary  w-full justify-center"
              style={{
                background: "var(--color-secondary)",
              }}
            >
              Apply for Group Loan <FaArrowRight />
            </button>
          </motion.div>

          {/* Group Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              How Group Loans Work
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

            {/* Solidarity lending concept */}
            <div className="mt-6 p-5 bg-gradient-to-r from-[color:var(--color-secondary)]/50 to-[color:var(--color-secondary)]/60 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <FaHandshake className="text-2xl text-[color:var(--color-secondary)]" />
                <h4 className="font-bold text-black">Solidarity Lending</h4>
              </div>
              <p className="text-black text-sm leading-relaxed">
                Group lending is based on social trust and mutual
                accountability. When members support each other, repayment rates
                exceed 95%, enabling MADECOOP to offer loans without individual
                collateral.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mortgage Loan */}
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
                      For Large Investments
                    </span>
                  </div>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      100K+
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      Minimum (LKR)
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      10,000K
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      Maximum (LKR)
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-rose-100">
                    <div className="text-lg fornt-semibold text-[color:var(--color-light-green)]">
                      17%
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      Interest Rate Per Annum
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  For significant agricultural investments above Rs. 100,000,
                  our mortgage loan product provides the funding you need.
                  Property serves as collateral, enabling us to offer
                  competitive rates and extended repayment periods.
                </p>

                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100 mb-4">
                  <Shield
                    strokeWidth={1.75}
                    className="text-[color:var(--color-light-green)] text-xl flex-shrink-0"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      Accepted Collateral
                    </div>
                    <div className="text-gray-600 text-xs">
                      Residential land, agricultural land, buildings -
                      registered in borrower's name
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary justify-center w-full"
                  style={{
                    background: "var(--color-primary)",
                  }}
                >
                  Inquire About Mortgage Loan <FaArrowRight />
                </button>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  Eligibility Requirements
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
