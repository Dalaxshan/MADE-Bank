import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    category: 'Loan Application',
    questions: [
      {
        q: 'How do I apply for an agricultural loan at MADECOOP?',
        a: 'Visit our office in Matale with your National Identity Card (NIC), land documents (if applicable), recent utility bill for address proof, and any income verification. Complete our loan application form, and our agricultural officer will assess your requirements and guide you through the process. Group loan applicants must come with all five group members.',
      },
      {
        q: 'What documents are required for a loan application?',
        a: 'For individual loans: NIC, land/property documents, income proof (if available), guarantor details (for larger amounts). For group loans: All five members\' NICs, group savings account, group agreement form. For mortgage loans: Title deed, property valuation report, NIC.',
      },
      {
        q: 'How long does the loan approval process take?',
        a: 'Group loans are typically approved within 3-5 working days. Individual agricultural loans take 5-7 working days. Mortgage loans may take 10-15 working days due to property verification. We strive to make the process as fast as possible for genuine farming needs.',
      },
    ],
  },
  {
    category: 'Buy-Back Program',
    questions: [
      {
        q: 'How does the Buy-Back guarantee work?',
        a: 'When you take an Export Agriculture Loan from MADECOOP, we enter into a buy-back agreement guaranteeing that MADECOOP will purchase your entire harvest at pre-agreed market prices. This eliminates the risk of unsold produce and ensures you always have a ready buyer. Prices are fair market rates plus an export premium.',
      },
      {
        q: 'What crops are covered under the Buy-Back program?',
        a: 'Currently, our Buy-Back program covers: Cinnamon, Black Pepper, Cardamom, Fresh Vegetables (export-quality), Organic Produce certified by recognized bodies. We are continuously expanding this list based on international market demand. Speak to our agricultural officer to check eligibility for your specific crop.',
      },
    ],
  },
  {
    category: 'Deposits',
    questions: [
      {
        q: 'What is the minimum deposit amount?',
        a: 'The minimum deposit amount is Rs. 5,000. There is no maximum limit. Deposits can be made in cash or by cheque at our office. We offer 6-month to 5-year fixed deposit plans with interest rates from 9.5% to 10% per annum.',
      },
      {
        q: 'Can I withdraw my deposit before the maturity date?',
        a: 'Premature withdrawal is possible subject to conditions. If withdrawn within 3 months, no interest is payable. If withdrawn after 3 months but before maturity, interest is paid at a reduced rate (typically 2% below the contracted rate). We recommend discussing your needs with our team before breaking a deposit.',
      },
      {
        q: 'Can I take a loan against my deposit?',
        a: 'Yes! MADECOOP offers loans of up to 90% of your deposit value, with the deposit as collateral. This allows you to access funds without breaking your deposit and losing interest. The loan interest rate will be slightly above your deposit rate.',
      },
    ],
  },
  {
    category: 'Eligibility',
    questions: [
      {
        q: 'Who is eligible to join MADECOOP?',
        a: 'MADECOOP is open to all farmers, agricultural workers, and rural community members in the Matale District and surrounding areas. You must be a Sri Lankan citizen, 18 years or above, with a verifiable connection to agriculture (farming, processing, or marketing of agricultural products).',
      },
      {
        q: 'What collateral is required for different loan types?',
        a: 'Group Loans: No individual collateral - group mutual guarantee. Export Agriculture Loan (up to Rs. 200,000): No collateral if buy-back agreement is in place. Agriculture Land/Machinery/Vehicle Loans: Asset being financed serves as security. Mortgage Loan: Registered property (land or buildings). Speak to our loan officer for specific requirements.',
      },
    ],
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 bg-section-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaQuestionCircle className="inline mr-1" /> Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Got Questions?
            <br />
            <span className="gradient-text">We Have Answers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Everything you need to know about MADECOOP's loans, deposits, and buy-back programs.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-green-600 rounded-full" />
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((item, qi) => {
                  const id = `${ci}-${qi}`;
                  const isOpen = openItems.includes(id);

                  return (
                    <motion.div
                      key={id}
                      layout
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-green-50/50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-sm leading-relaxed">
                          {item.q}
                        </span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                          isOpen ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center"
        >
          <div className="text-4xl mb-3">💬</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
          <p className="text-gray-600 mb-5">
            Our friendly team is always ready to help. Contact us directly for personalized guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Contact Us
            </button>
            <a href="tel:+94662222222" className="btn-secondary">
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
