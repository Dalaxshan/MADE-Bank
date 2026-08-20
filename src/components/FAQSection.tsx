import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import { useLang } from "@/i18n/LanguageContext";



export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { t } = useLang();
  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const faqs = [
  {
    category: t.faq.cat1,
    questions: [
      {
        q: t.faq.q1_1,
        a: t.faq.a1_1,
      },
      {
        q: t.faq.q1_2,
        a: t.faq.a1_2,
      },
      {
        q: t.faq.q1_3,
        a: t.faq.a1_3,
      },
    ],
  },
  {
    category: t.faq.cat2,
    questions: [
      {
        q: t.faq.q2_1,
        a: t.faq.a2_1,
      },
      {
        q: t.faq.q2_2,
        a: t.faq.a2_2,
      },
    ],
  },
  {
    category: t.faq.cat3,
    questions: [
      {
        q: t.faq.q3_1,
        a: t.faq.a3_1,
      },
      {
        q: t.faq.q3_2,
        a: t.faq.a3_2,
      },
      {
        q: t.faq.q3_3,
        a: t.faq.a3_3,
      },
    ],
  },
  {
    category: t.faq.cat4,
    questions: [
      {
        q: t.faq.q4_1,
        a: t.faq.a4_1,
      },
      {
        q: t.faq.q4_2,
        a: t.faq.a4_2,
      },
    ],
  },
];

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
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaQuestionCircle className="inline mr-1" />{t.faq.badge}
          </span>
          <h2 className="text-4xl font-semibold md:text-5xl font-black text-gray-900 mb-5">
           {t.faq.title1}
            <br />
            <span className="gradient-text">{t.faq.title2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t.faq.sub}
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
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                            isOpen
                              ? "bg-green-700 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {isOpen ? (
                            <FaMinus size={10} />
                          ) : (
                            <FaPlus size={10} />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                              dangerouslySetInnerHTML={{ __html: item.a }}
                            />
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
      </div>
    </section>
  );
}
