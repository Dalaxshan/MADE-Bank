import { motion } from 'framer-motion';
import { FaGlobeAsia, FaShip, FaLeaf } from 'react-icons/fa';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend
} from 'recharts';

const exportCountries = [
  { name: 'Japan', flag: '🇯🇵', products: ['Cinnamon', 'Pepper', 'Cardamom'], color: 'bg-red-50 border-red-200' },
  { name: 'Germany', flag: '🇩🇪', products: ['Organic Vegetables', 'Spices'], color: 'bg-gray-50 border-gray-200' },
  { name: 'United Kingdom', flag: '🇬🇧', products: ['Cinnamon', 'Tea'], color: 'bg-blue-50 border-blue-200' },
  { name: 'USA', flag: '🇺🇸', products: ['Organic Spices', 'Pepper'], color: 'bg-blue-50 border-blue-200' },
  { name: 'Australia', flag: '🇦🇺', products: ['Cinnamon', 'Vanilla'], color: 'bg-green-50 border-green-200' },
  { name: 'UAE', flag: '🇦🇪', products: ['Vegetables', 'Fruits'], color: 'bg-yellow-50 border-yellow-200' },
  { name: 'Netherlands', flag: '🇳🇱', products: ['Organic Produce', 'Spices'], color: 'bg-orange-50 border-orange-200' },
  { name: 'Canada', flag: '🇨🇦', products: ['Cardamom', 'Cinnamon'], color: 'bg-red-50 border-red-200' },
];

const exportPartners = [
  { name: 'Bio Foods', type: 'Organic Export', country: 'Sri Lanka / Global', color: 'bg-green-100 text-green-700', emoji: '🌿' },
  { name: 'Ceylon Spice Co.', type: 'Spice Export', country: 'Sri Lanka', color: 'bg-yellow-100 text-yellow-700', emoji: '🌶️' },
  { name: 'Lanka Organics', type: 'Organic Farming', country: 'Sri Lanka', color: 'bg-emerald-100 text-emerald-700', emoji: '🥦' },
  { name: 'Cinnamon Gardens', type: 'Cinnamon Export', country: 'Sri Lanka', color: 'bg-amber-100 text-amber-700', emoji: '🌿' },
  { name: 'Agri-Export Ltd.', type: 'Agricultural Products', country: 'Sri Lanka', color: 'bg-teal-100 text-teal-700', emoji: '🚢' },
  { name: 'Global Harvest', type: 'International Trade', country: 'Global', color: 'bg-blue-100 text-blue-700', emoji: '🌍' },
];

const exportData = [
  { year: '2019', value: 45, target: 40 },
  { year: '2020', value: 52, target: 50 },
  { year: '2021', value: 61, target: 58 },
  { year: '2022', value: 78, target: 70 },
  { year: '2023', value: 95, target: 85 },
  { year: '2024', value: 118, target: 100 },
];

const productData = [
  { product: 'Cinnamon', value: 38 },
  { product: 'Pepper', value: 22 },
  { product: 'Cardamom', value: 15 },
  { product: 'Vegetables', value: 18 },
  { product: 'Others', value: 7 },
];

const supplyChain = [
  { step: 'Farm', icon: '🌱', desc: 'MADECOOP farmers grow export-quality produce' },
  { step: 'Collection', icon: '🧺', desc: 'Organized collection centers across Matale District' },
  { step: 'Quality Check', icon: '🔬', desc: 'Rigorous quality assessment and grading' },
  { step: 'Processing', icon: '🏭', desc: 'Certified processing and packaging facilities' },
  { step: 'Export', icon: '🚢', desc: 'Shipped to international buyers via Colombo Port' },
  { step: 'Payment', icon: '💰', desc: 'Premium export prices paid directly to farmers' },
];

export default function ExportNetwork() {
  return (
    <section id="export-network" className="py-24 bg-section-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <FaGlobeAsia className="inline mr-1" /> Global Export Network
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            From Sri Lankan Farms
            <br />
            <span className="gradient-text">To Global Markets</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            MADECOOP connects Sri Lankan farmers with international buyers across 20+ countries, ensuring premium prices for export-quality produce.
          </p>
        </motion.div>

        {/* Export Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {exportCountries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className={`${country.color} border rounded-2xl p-4 card-hover`}
            >
              <div className="text-3xl mb-2">{country.flag}</div>
              <div className="font-bold text-gray-900 text-sm mb-2">{country.name}</div>
              <div className="space-y-1">
                {country.products.map((p) => (
                  <div key={p} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-gray-600 text-xs">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export Performance Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaShip className="text-blue-600" /> Annual Export Performance (Million LKR)
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={exportData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(v: unknown) => [`Rs. ${Number(v)}M`]}
                  contentStyle={{ borderRadius: '12px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#2E7D32" strokeWidth={3} dot={{ fill: '#2E7D32', r: 5 }} name="Actual" />
                <Line type="monotone" dataKey="target" stroke="#F9A825" strokeWidth={2} strokeDasharray="5 5" name="Target" dot={{ fill: '#F9A825', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaLeaf className="text-green-600" /> Export Product Mix (%)
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={productData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="product" type="category" tick={{ fontSize: 12 }} width={80} />
                <Tooltip
                  formatter={(v: unknown) => [`${Number(v)}%`]}
                  contentStyle={{ borderRadius: '12px' }}
                />
                <Bar dataKey="value" fill="#2E7D32" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Supply Chain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-gray-900 text-center mb-8">Farm-to-Export Supply Chain</h3>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {supplyChain.map((step, i) => (
              <>
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center bg-white rounded-2xl p-5 shadow-md border border-gray-100 w-36 text-center hover:border-green-300 transition-all"
                >
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{step.step}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{step.desc}</div>
                </motion.div>
                {i < supplyChain.length - 1 && (
                  <div key={`arrow-${i}`} className="text-green-400 text-2xl font-bold hidden md:block">→</div>
                )}
              </>
            ))}
          </div>
        </motion.div>

        {/* Export Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-black text-gray-900 text-center mb-8">Our Export Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {exportPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-4 shadow-md text-center border border-gray-100 hover:border-green-200 transition-all cursor-pointer"
              >
                <div className="text-3xl mb-2">{partner.emoji}</div>
                <div className="font-bold text-gray-900 text-xs mb-1">{partner.name}</div>
                <div className={`text-xs font-semibold px-2 py-0.5 rounded-full ${partner.color} mt-1`}>
                  {partner.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-5"
        >
          {[
            { icon: '🌍', title: '20+ Countries', desc: 'Our produce reaches markets across Asia, Europe, and beyond' },
            { icon: '🏅', title: 'Quality Certified', desc: 'Export-grade products meeting international quality standards' },
            { icon: '💱', title: 'Premium Prices', desc: 'Farmers earn 30-50% more through direct export partnerships' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-bold text-gray-900 mb-2">{item.title}</div>
              <div className="text-gray-600 text-sm">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
