import { motion } from 'framer-motion';
import { FaLeaf, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube, FaArrowUp } from 'react-icons/fa';

const footerLinks = {
  'Loan Services': [
    'Export Agriculture Loan',
    'Land Purchasing Loan',
    'Machinery Loan',
    'Vehicle Loan',
    'Group Loan',
    'Mortgage Loan',
  ],
  'Deposit Services': [
    '6 Month Deposit',
    '1 Year Deposit',
    '2-5 Year Deposits',
    'Monthly Interest Plans',
    'Maturity Plans',
    'Deposit Calculator',
  ],
  'Company': [
    'About MADECOOP',
    'Our Mission',
    'Export Network',
    'Farmer Stories',
    'News & Events',
    'Gallery',
  ],
  'Support': [
    'FAQ',
    'Contact Us',
    'Loan Calculator',
    'Deposit Calculator',
    'Privacy Policy',
    'Terms & Conditions',
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Newsletter strip */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-white font-bold text-lg">Stay Updated with MADECOOP</h3>
              <p className="text-green-200 text-sm">Get farming tips, market prices, and exclusive updates.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 md:w-72 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-green-800 font-bold px-6 py-3 rounded-full text-sm hover:bg-green-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
                <FaLeaf className="text-white text-xl" />
              </div>
              <div>
                <div className="font-black text-white text-xl leading-tight">MADECOOP</div>
                <div className="text-green-400 text-xs">Matale Agri. Dev. & Export</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering Sri Lankan farmers with financial solutions, guaranteed harvest purchasing, and global export opportunities since 2009.
            </p>

            {/* Contact snippets */}
            <div className="space-y-2.5">
              <a href="tel:+94662222222" className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <FaPhone className="text-green-500 text-xs" /> +94 66 222 2222
              </a>
              <a href="mailto:info@madecoop.lk" className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <FaEnvelope className="text-green-500 text-xs" /> info@madecoop.lk
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-green-500 text-xs mt-0.5" />
                <span>No. 123, Kandy Road, Matale,<br />Central Province, Sri Lanka</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/madecoopsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="https://wa.me/94771234567"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
              >
                <FaWhatsapp size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <div className="w-1 h-4 bg-green-500 rounded-full" />
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNavClick('#services')}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Registration */}
        <div className="mt-12 p-5 bg-green-900/30 border border-green-800/50 rounded-2xl">
          <p className="text-green-400 text-xs text-center leading-relaxed">
            🛡️ Registered under <strong className="text-green-300">Section 06 of the Cooperative Societies Act No. 10 of 1990</strong> of the Central Provincial Council,
            as amended by the <strong className="text-green-300">Cooperative Societies (Amendment) Act No. 04 of 1993.</strong>
            All financial services are governed by Sri Lanka Cooperative Regulations.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MADECOOP - Matale District Agriculture Development and Export Cooperative Society Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <button className="hover:text-gray-300 transition-colors">Privacy Policy</button>
            <button className="hover:text-gray-300 transition-colors">Terms & Conditions</button>
            <button className="hover:text-gray-300 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition-colors z-40"
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
