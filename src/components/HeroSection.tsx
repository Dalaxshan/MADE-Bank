import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BanknoteArrowDown,
  BanknoteArrowUp,
  HandCoins,
  Handshake,
  Ship,
  Sprout,
  Tractor,
  Truck,
  UserStar,
} from "lucide-react";

const ledgerEntries = [
  {
    value: 500,
    suffix: "+",
    label: "Farmers Supported",
    icon: <Tractor strokeWidth={1.25} />,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Loans Issued",
    icon: <BanknoteArrowDown strokeWidth={1.25} />,
  },
  {
    value: 6,
    suffix: "+",
    label: "Group Partners",
    icon: <Handshake strokeWidth={1.25} />,
  },
  {
    value: 1,
    suffix: "+",
    label: "Year of Service",
    icon: <UserStar strokeWidth={1.25} />,
  },
];

const shipmentTags = [
  { icon: <Sprout strokeWidth={1.25} />, label: "Organic Farming", rotate: -3 },
  { icon: <Truck strokeWidth={1.25} />, label: "Global Export", rotate: 2 },
  { icon: <Ship strokeWidth={1.25} />, label: "Modern Machinery", rotate: -2 },
  {
    icon: <HandCoins strokeWidth={1.25} />,
    label: "Buy-Back Guarantee",
    rotate: 3,
  },
];

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const navigate = useNavigate();

  const ledgerEntries = [
    {
      value: 500,
      suffix: "+",
      label: t.hero.ledger.farmerSupported,
      icon: <Tractor strokeWidth={1.25} />,
    },
    {
      value: 1000,
      suffix: "+",
      label: t.hero.ledger.loansIssued,
      icon: <BanknoteArrowDown strokeWidth={1.25} />,
    },
    {
      value: 6,
      suffix: "+",
      label: t.hero.ledger.groupPartners,
      icon: <Handshake strokeWidth={1.25} />,
    },
    {
      value: 1,
      suffix: "+",
      label: t.hero.ledger.yearOfService,
      icon: <UserStar strokeWidth={1.25} />,
    },
  ];

  const shipmentTags = [
    { icon: <Sprout strokeWidth={1.25} />, label: t.hero.tag1, rotate: -3 },
    { icon: <Truck strokeWidth={1.25} />, label: t.hero.tag2, rotate: 2 },
    { icon: <Ship strokeWidth={1.25} />, label: t.hero.tag3, rotate: -2 },
    { icon: <HandCoins strokeWidth={1.25} />, label: t.hero.tag4, rotate: 3 },
  ];
  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#E9F0DC]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_made-bank.mp4"
          type="video/mp4"
        />
      </video>

      {/* Directional scrim: strong behind the copy (left), fading out over the video (right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(233,240,220,0.96) 0%, rgba(233,240,220,0.90) 28%, rgba(233,240,220,0.55) 52%, rgba(233,240,220,0.22) 72%, rgba(233,240,220,0.08) 100%)",
          zIndex: 1,
        }}
      />

      {/* Subtle vertical grounding so the video doesn't float against the header/footer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(233,240,220,0.35) 0%, rgba(233,240,220,0) 18%, rgba(233,240,220,0) 78%, rgba(233,240,220,0.45) 100%)",
          zIndex: 1,
        }}
      />

      {/* Warm ambient glow behind headline */}
      <div
        className="absolute -top-40 -left-20 w-[32rem] h-[32rem] bg-[var(--color-primary)] rounded-full blur-[140px] opacity-[0.18] pointer-events-none"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[var(--color-secondary)] rounded-full blur-[140px] opacity-[0.20] pointer-events-none"
        style={{ zIndex: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ---------------- Left: the pitch ---------------- */}
          <div>
            {/* Stamp-style eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-dashed border-[var(--color-primary)]/50 rounded-sm px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
              <span className="text-[var(--color-primary)] text-[11px] tracking-[0.2em] uppercase">
                Central Province · Cooperative Society
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.75rem] md:text-7xl lg:text-[3.5rem] font-black font-semibold text-[#1E2A38] leading-[1.05] mb-6 max-w-3xl"
            >
              {t.hero.headline1}
              <br />
              <span className="text-[var(--color-primary)]">
                {t.hero.headline2} {t.hero.headline3}{" "}
              </span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#1E2A38]/70 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Affordable loans, guaranteed harvest purchasing, and a direct line
              to international buyers - built for Sri Lankan farmers who keep
              their word season after season.
            </motion.p>

            {/* CTA row - clipped "ledger tab" buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button
                onClick={() => handleNavClick("/services")}
                className="group flex items-center gap-2 bg-[var(--color-secondary)] text-[#fff] px-7 py-3.5 font-semibold text-[15px] hover:bg-[var(--color-secondary-light)] transition-colors duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 70%)",
                }}
              >
                Apply for a Loan
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => handleNavClick("/deposits")}
                className="flex items-center gap-2 bg-[var(--color-primary)] text-[#fff] px-7 py-3.5 font-semibold text-[15px] hover:bg-[var(--color-primary-light)] transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 70%, calc(100% - 12px) 100%, 0 100%)",
                }}
              >
                <BanknoteArrowUp strokeWidth={1.25} />
                Open a Deposit
              </button>
            </motion.div>

            {/* Shipment tags - desktop/tablet only */}
            <div
            
              className="hidden lg:flex flex-wrap gap-4"
            >
              {shipmentTags.map((tag, i) => (
                <div
                  key={tag.label}
                 
                 
                  className="relative flex items-center gap-2 bg-[#F3F7F5] text-[#1E2A38] pl-3 pr-4 py-2 text-xs font-semibold shadow-md"
                >
                  {/* tag hole, punched through to the page background */}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E1EEF3] shrink-0" />
                  <span className="text-[#3B72A6]">{tag.icon}</span>
                  {tag.label.toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- Right: the passbook (desktop/tablet only) ---------------- */}
          <div
            ref={ref}
            className="hidden lg:flex relative justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, rotate: 6, y: 30 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ rotate: 0 }}
              className="relative w-full max-w-md bg-[#F3F7F5]/80 text-[#1E2A38] shadow-2xl shadow-black/40 pl-8 pr-7 py-8"
            >
              {/* perforation holes along the binding edge */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-evenly items-center py-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-[#E1EEF3]"
                  />
                ))}
              </div>
              <div className="absolute left-8 top-0 bottom-0 border-l border-dashed border-[#1E2A38]/25" />

              {/* Passbook header */}
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#2B3A67] font-semibold">
                  Member Ledger
                </span>
                <span className="text-[11px] text-[#1E2A38]/40">
                  No. 000114
                </span>
              </div>
              <h2 className="text-xl font-black mb-6 pb-4 border-b-2 border-[#1E2A38]/15">
                Society Standing
              </h2>

              {/* Ledger rows */}
              <div className="space-y-4">
                {ledgerEntries.map((entry, i) => (
                  <motion.div
                    key={entry.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-base shrink-0">{entry.icon}</span>
                    <span className="text-[13px] text-[#1E2A38]/70 whitespace-nowrap">
                      {entry.label}
                    </span>
                    <span className="flex-1 border-b-2 border-dotted border-[#1E2A38]/25 translate-y-[-3px]" />
                    <span className="text-xl font-bold shrink-0">
                      {inView ? (
                        <CountUp
                          end={entry.value}
                          duration={2}
                          suffix={entry.suffix}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Legal line */}
              <div className="mt-8 pt-4 border-t border-[#1E2A38]/10">
                <div
                  className="flex items-start gap-2 px-3 py-2.5"
                  style={{
                    backgroundColor: "rgba(43,58,103,0.07)",
                    borderLeft: "3px solid #2B3A67",
                  }}
                >
                  <span className="text-[#2B3A67] font-black text-sm mt-0.5 shrink-0">
                    ✓
                  </span>
                  <p
                    className="text-[12.5px] leading-relaxed"
                    style={{ color: "#2B3A67", fontWeight: "bold" }}
                  >
                    <strong>Registered</strong> under Cooperative Societies Act
                    No. 10 of 1990, Central Provincial Council, as amended by
                    Act No. <strong>04 of 1993.</strong>
                  </p>
                </div>
              </div>

              {/* Ink stamp seal, pressed into the corner */}
              <motion.div
                initial={{ opacity: 0, scale: 1.6, rotate: -25 }}
                animate={inView ? { opacity: 0.9, scale: 1, rotate: -14 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 1.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute -bottom-6 -right-6 w-28 h-28"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="stampCircle"
                      d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                      fill="none"
                    />
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    fill="none"
                    stroke="#2B3A67"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="72"
                    fill="none"
                    stroke="#2B3A67"
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                  <text
                    fill="#2B3A67"
                    fontSize="11.5"
                    letterSpacing="2"
                    opacity="0.9"
                  >
                    <textPath href="#stampCircle" startOffset="0%">
                      • REGISTERED COOPERATIVE SOCIETY • EST. 1990
                    </textPath>
                  </text>
                  <text
                    x="100"
                    y="95"
                    textAnchor="middle"
                    fill="#2B3A67"
                    fontSize="20"
                    fontWeight="700"
                    opacity="0.9"
                  >
                    ✓
                  </text>
                  <text
                    x="100"
                    y="118"
                    textAnchor="middle"
                    fill="#2B3A67"
                    fontSize="10"
                    letterSpacing="1.5"
                    opacity="0.9"
                  >
                    APPROVED
                  </text>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
