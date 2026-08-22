import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import { Landmark, Globe } from "lucide-react";
import { useLang, Lang } from "../i18n/LanguageContext";

const INK = "var(--color-gold)";
const PAPER = "var(--color-primary-100)";
const JADE = "var(--color-light-green)";
const INDIGO = "var(--color-primary-dark)";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "tm", label: "தமிழ்" },
  { code: "si", label: "සිංහල" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.loans, href: "/loans" },
    { label: t.nav.deposits, href: "/deposits" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar - ink stamp strip */}
      <div
        className="text-[11px] py-2 px-4 hidden md:block"
        style={{ backgroundColor: INDIGO, color: PAPER }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <span className="flex items-center gap-2">
            <Landmark
              size={20}
              strokeWidth={1.25}
              className="text-[var(--color-primary-100)]"
            />
           {t.nav.registered}
          </span>
          <div className="flex items-center gap-3">
            <a
              href="tel:+94704732926"
              className="flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors"
            >
              <FaPhone size={10} /> +94 70 473 2926
            </a>
            <span className="text-[#F3F7F5]/25">|</span>
            <span className="text-[#F3F7F5]/70">{t.nav.hours}</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md shadow-sm" : ""
        }`}
        style={{
          backgroundColor: scrolled ? `${PAPER}F2` : PAPER,
          borderBottom: `1px solid ${INK}1A`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-19 py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick("/")}
            >
              <img
                src="images/logo.png"
                alt="MADE Co-op Society Logo"
                className="w-22 h-20 object-contain"
              />
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: `${INK}B3` }}
                  >
                    <span className="relative">
                      {link.label}
                      <span
                        className="absolute left-0 -bottom-1 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: JADE }}
                      />
                    </span>
                    {link.children && (
                      <FaChevronDown
                        size={9}
                        className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {/* Dropdown - ledger card */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-60 py-2 z-50 shadow-xl"
                        style={{
                          backgroundColor: PAPER,
                          border: `1px solid ${INK}14`,
                        }}
                      >
                        {link.children.map((child, ci) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="group/item w-full flex items-center gap-2 text-left px-4 py-2.5 text-sm transition-colors"
                            style={{
                              color: `${INK}CC`,
                              borderTop:
                                ci === 0 ? "none" : `1px dotted ${INK}14`,
                              fontSize: "12.5px",
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full shrink-0 transition-colors"
                              style={{ backgroundColor: `${INK}33` }}
                            />
                            <span className="group-hover/item:text-[var(--color-primary)] transition-colors">
                              {child.label}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons - ledger tabs, same shape as the hero */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: `${INK}B3` }}
                >
                  <Globe size={14} />
                  {LANGUAGES.find((l) => l.code === lang)?.label}
                  <FaChevronDown size={9} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 w-36 py-1 z-50 shadow-xl"
                      style={{ backgroundColor: PAPER, border: `1px solid ${INK}14` }}
                    >
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className="w-full text-left px-4 py-2 text-sm transition-colors hover:text-[var(--color-primary)]"
                          style={{
                            color: lang === l.code ? "var(--color-primary)" : `${INK}CC`,
                            fontWeight: lang === l.code ? 600 : 400,
                          }}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                onClick={() => handleNavClick("/apply-loan")}
                className="group flex items-center gap-2 text-sm font-semibold py-2.5 px-5 text-[#fff] transition-colors duration-300"
                style={{
                  backgroundColor: JADE,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 70%)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-primary-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = JADE)
                }
              >
             {t.nav.startLoan}
                <FaArrowRight
                  size={11}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              style={{ color: 'var(--color-primary)' }}
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{
                backgroundColor: PAPER,
                borderTop: `1px solid ${INK}14`,
              }}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium transition-colors"
                      style={{ color: `${INK}CC` }}
                    >
                      {link.label}
                    </button>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.href)}
                            className="w-full text-left px-4 py-2 text-sm transition-colors"
                            style={{
                              color: `${INK}99`,
                              fontSize: "12.5px",
                            }}
                          >
                            → {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile Language Switcher */}
                <div className="flex gap-2 pt-2 pb-1">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className="flex-1 py-2 text-xs font-medium transition-colors"
                      style={{
                        color: lang === l.code ? "var(--color-primary)" : `${INK}99`,
                        border: `1px solid ${lang === l.code ? "var(--color-primary)" : `${INK}22`}`,
                        fontWeight: lang === l.code ? 600 : 400,
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
                <div className="pt-3 flex flex-col gap-2.5">
                  <button
                    onClick={() => handleNavClick("/services")}
                    className="flex items-center justify-center gap-2 text-sm font-semibold py-3 text-[#F3F7F5]"
                    style={{
                      backgroundColor: JADE,
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 70%)",
                    }}
                  >
                   {t.nav.startLoan} <FaArrowRight size={11} />
                  </button>
                 
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
