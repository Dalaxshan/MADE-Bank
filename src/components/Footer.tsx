import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";

const INK = "#1E2A38";
const JADE = "var(--color-light-green)";
const STEEL = "var(--color-secondary)";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useLang();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Loan Services": [
    { label: t.footer.exportLoan, href: "/services" },
    { label: t.footer.landLoan, href: "/services" },
    { label: t.footer.machineryLoan, href: "/services" },
    { label: t.footer.vehicleLoan, href: "/services" },
    { label: t.footer.groupLoan, href: "/services" },
    { label: t.footer.mortgageLoan, href: "/services" },
  ],
  "Deposit Services": [
    { label: t.footer.deposit6m, href: "/deposits" },
    { label: t.footer.deposit1y, href: "/deposits" },
    { label: t.footer.deposit25y, href: "/deposits" },
    { label: t.footer.monthlyInterest, href: "/deposits" },
    { label: t.footer.maturityPlans, href: "/deposits" },
    { label: t.footer.calculator, href: "/deposits" },
  ],
  // Company: [
  //   { label: "About MADECOOP", href: "/about" },
  //   { label: "Our Mission", href: "/about" },
  //   { label: "Farmer Stories", href: "/" },
  //   { label: "Gallery", href: "/gallery" },
  // ],
  Support: [
    { label: t.footer.faq, href: "/contact" },
    { label: t.footer.contactUs, href: "/contact" },
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.terms, href: "#" },
  ],
};


  const handleNavClick = (href: string) => {
    if (href === "#") return;
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ backgroundColor: INK }}>
      <div
        className="relative overflow-hidden"
        style={{
          background: `${JADE}/10`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)",
          }}
        />
        <svg
          viewBox="0 0 200 200"
          className="absolute -top-10 right-8 w-40 h-40 opacity-[0.12] pointer-events-none hidden md:block"
        >
          <defs>
            <path
              id="footerStampCircle"
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
            <textPath href="#footerStampCircle" startOffset="0%">
              • EST. 2025 · MADECOOP · MATALE ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10 lg:py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo-white.png"
              alt="MADECOOP Logo"
              className="w-42 h-42"
            />

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t.footer.tagline}
            </p>

            {/* Contact snippets - ledger-line style */}
            <div className="space-y-3 border-t border-dashed border-white/15 pt-4">
              <a
                href="tel:+94704732926"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FaPhone style={{ color: JADE }} className="text-xs" /> +94 70
                473 2926
              </a>
              <a
                href="mailto:info@madecoopbank.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FaEnvelope style={{ color: JADE }} className="text-xs" />{" "}
                info@madecoopbank.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <FaMapMarkerAlt
                  style={{ color: JADE }}
                  className="text-xs mt-0.5"
                />
                <span>
                  3/4, Yelakkare Junction, Dangan Place,
                  <br /> Yatawatta, Matale.
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/madecoopsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-gray-400 hover:border-transparent transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = STEEL;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "";
                }}
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="https://wa.me/94704732926"
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-gray-400 transition-all"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = JADE;
                  e.currentTarget.style.color = INK;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "";
                }}
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.12em] mb-4 pb-3 border-b border-dashed border-white/15">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left inline-flex items-center gap-1.5 group"
                    >
                      <span
                        className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: JADE }}
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-dashed border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} MADECOOP - Matale District Agriculture
            Development and Export Cooperative Society Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-wide text-gray-300">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.08, rotate: -4 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-18 right-18 w-12 h-12 flex items-center justify-center shadow-xl z-20"
        style={{ backgroundColor: JADE, color: " #fff" }}
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
