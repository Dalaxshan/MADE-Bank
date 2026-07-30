import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLeaf, FaPhone, FaChevronDown } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services', href: '#services',
    children: [
      { label: 'Export Agriculture Loan', href: '#services' },
      { label: 'Land Purchasing Loan', href: '#services' },
      { label: 'Machinery Loan', href: '#services' },
      { label: 'Vehicle Loan', href: '#services' },
      { label: 'Group Loan', href: '#group-loan' },
      { label: 'Mortgage Loan', href: '#mortgage-loan' },
    ]
  },
  {
    label: 'Deposits', href: '#deposits',
    children: [
      { label: 'Deposit Plans', href: '#deposits' },
      { label: 'Deposit Calculator', href: '#deposit-calculator' },
    ]
  },
  { label: 'Loan Calculator', href: '#loan-calculator' },
  { label: 'Export Network', href: '#export-network' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-green-900 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaLeaf className="text-green-300" />
            Registered under Cooperative Societies Act No. 10 of 1990 - Central Provincial Council
          </span>
          <div className="flex items-center gap-4">
            <a href="tel:+94662222222" className="flex items-center gap-1 hover:text-green-300 transition-colors">
              <FaPhone size={10} /> +94 66 222 2222
            </a>
            <span className="text-green-400">|</span>
            <span>Mon–Sat: 8:30 AM – 4:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/10'
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              
                <img src="images/logo.png" alt="MADECOOP Logo" className="w-22 h-22 object-contain" />
             
             
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !link.children && handleNavClick(link.href)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    {link.label}
                    {link.children && <FaChevronDown size={10} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-secondary text-sm py-2.5 px-5"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="btn-primary text-sm py-2.5 px-5"
              >
                Apply for Loan
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            → {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <button onClick={() => handleNavClick('#services')} className="btn-primary justify-center">Apply for Loan</button>
                  <button onClick={() => handleNavClick('#deposits')} className="btn-secondary justify-center">Open Deposit</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
