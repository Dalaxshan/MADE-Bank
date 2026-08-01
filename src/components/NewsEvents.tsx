import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaArrowRight, FaNewspaper, FaGraduationCap, FaUsers, FaEnvelope } from 'react-icons/fa';

/**
 * Shared design tokens — same as HeroSection.tsx / Navbar.tsx / CTABanner.tsx /
 * FarmerJourneySection.tsx / DepositSection.tsx / DepositCalculator.tsx /
 * CompleteSupportSystem.tsx / ExportNetwork.tsx.
 */
const FONT_DISPLAY = "'Fraunces', Georgia, serif";
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";
const INK = '#1E2A38';
const PAPER = '#F3F7F5';
const JADE = '#2E9C82';
const STEEL = '#3B72A6';
const INDIGO = '#2B3A67';

// One color per category, not one per article — News/Training/Event each get
// a consistent identity instead of a different random Tailwind color apiece.
const typeStyles: Record<string, { color: string; icon: JSX.Element }> = {
  News: { color: STEEL, icon: <FaNewspaper /> },
  Training: { color: JADE, icon: <FaGraduationCap /> },
  Event: { color: INDIGO, icon: <FaUsers /> },
};

const news = [
  {
    type: 'News',
    date: 'December 15, 2024',
    title: 'MADECOOP Achieves Record Export Revenue of Rs. 118 Million in 2024',
    excerpt: "Matale District farmers celebrate a landmark year as MADECOOP's export partnerships delivered unprecedented returns, with cinnamon and pepper exports to Japan and Germany reaching new highs.",
    location: 'Matale',
  },
  {
    type: 'Training',
    date: 'January 10, 2025',
    title: 'Organic Farming Certification Workshop - January 2025',
    excerpt: 'A comprehensive 3-day workshop on organic farming certification for export markets. Learn how to qualify for premium organic export pricing through our certified partners.',
    location: 'MADECOOP Office, Matale',
  },
  {
    type: 'Event',
    date: 'January 25, 2025',
    title: 'Annual Farmer Cooperative Meeting & Dividend Distribution',
    excerpt: "MADECOOP's annual general meeting where farmer-members receive their cooperative dividends and vote on policy decisions for 2025.",
    location: 'Matale Town Hall',
  },
  {
    type: 'News',
    date: 'February 5, 2025',
    title: 'New Partnership with Bio Foods to Expand Organic Export Range',
    excerpt: 'MADECOOP announces expanded partnership with Bio Foods International, adding organic vegetables, herbs, and spices to the export portfolio.',
    location: 'Colombo',
  },
  {
    type: 'Training',
    date: 'February 20, 2025',
    title: 'Agricultural Export Seminar - Market Trends & Opportunities',
    excerpt: 'Expert speakers from the Export Development Board and international buyers discuss 2025 global market trends and opportunities for Sri Lankan agricultural products.',
    location: 'Hotel Matale',
  },
  {
    type: 'Event',
    date: 'March 1, 2025',
    title: 'Group Loan Inauguration Ceremony - New Batch of Farmer Groups',
    excerpt: 'Welcoming 25 new 5-member farmer groups into the MADECOOP Group Loan program. Ceremony to be attended by Central Provincial Council representatives.',
    location: 'MADECOOP Office, Matale',
  },
];

const upcomingEvents = [
  { date: 'Jan 10', event: 'Organic Farming Workshop', type: 'Training' },
  { date: 'Jan 25', event: 'Annual General Meeting', type: 'Event' },
  { date: 'Feb 20', event: 'Export Seminar 2025', type: 'Seminar' },
  { date: 'Mar 1', event: 'Group Loan Inauguration', type: 'Ceremony' },
  { date: 'Mar 15', event: 'Machinery Loan Open Day', type: 'Event' },
];

const achievements = [
  { label: 'New Farmers Enrolled', value: '847', color: STEEL },
  { label: 'Training Sessions', value: '24', color: JADE },
  { label: 'Export Shipments', value: '48', color: INDIGO },
];

export default function NewsEvents() {
  return (
    <section id="news" className="py-24" style={{ backgroundColor: PAPER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE, fontFamily: FONT_MONO }}
          >
            <FaNewspaper size={11} /> News & Events
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
            Stay Updated with
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              MADECOOP
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            Latest agricultural news, training programs, export seminars, and farmer workshops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Grid — gazette clippings */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {news.map((item, i) => {
              const style = typeStyles[item.type];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-5 cursor-pointer group transition-all"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${INK}14`,
                    borderLeftWidth: '3px',
                    borderLeftColor: style.color,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 tracking-widest flex items-center gap-1.5"
                      style={{ backgroundColor: `${style.color}18`, color: style.color, fontFamily: FONT_MONO }}
                    >
                      {style.icon} {item.type.toUpperCase()}
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-2 text-xs mb-3"
                    style={{ color: `${INK}66`, fontFamily: FONT_MONO }}
                  >
                    <FaCalendar size={10} />
                    <span>{item.date}</span>
                  </div>

                  <h3
                    className="font-bold text-sm leading-tight mb-2 transition-colors"
                    style={{ color: INK }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: `${INK}80` }}>
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: `${INK}66` }}>
                      <FaMapMarkerAlt size={10} />
                      <span>{item.location}</span>
                    </div>
                    <button
                      className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: style.color }}
                    >
                      Read More <FaArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Upcoming Events — ledger tab block */}
            <div
              className="relative overflow-hidden p-6 text-[#F3F7F5]"
              style={{
                background: `linear-gradient(115deg, ${STEEL} 0%, ${INDIGO} 100%)`,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)',
                }}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ fontFamily: FONT_DISPLAY }}>
                  <FaCalendar size={16} /> Upcoming Events
                </h3>
                <div className="space-y-2.5">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.event}
                      className="flex gap-3 p-3"
                      style={{ backgroundColor: '#F3F7F5' + '1A', border: '1px solid #F3F7F51F' }}
                    >
                      <div className="text-center min-w-12" style={{ fontFamily: FONT_MONO }}>
                        <div className="text-xs opacity-70 font-bold">{event.date.split(' ')[0]}</div>
                        <div className="text-sm font-black">{event.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold leading-tight">{event.event}</div>
                        <div className="text-xs opacity-70 mt-0.5" style={{ fontFamily: FONT_MONO }}>
                          {event.type.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}>
              <FaEnvelope size={22} style={{ color: STEEL }} className="mb-2" />
              <h3 className="font-bold mb-2" style={{ color: INK }}>Stay Informed</h3>
              <p className="text-sm mb-4" style={{ color: `${INK}80` }}>
                Get the latest farming tips, market prices, and MADECOOP updates.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 text-sm focus:outline-none"
                  style={{ border: `1px solid ${INK}26`, color: INK, fontFamily: FONT_MONO }}
                />
                <button
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 transition-colors"
                  style={{
                    backgroundColor: STEEL,
                    color: PAPER,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 70%)',
                  }}
                >
                  Subscribe Newsletter
                </button>
              </div>
            </div>

            {/* Achievements — ledger rows instead of a fake progress bar */}
            <div className="p-5" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}>
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: INK, fontFamily: FONT_MONO }}
              >
                2024 Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((item) => (
                  <div key={item.label} className="flex items-baseline gap-2">
                    <span className="text-xs" style={{ color: `${INK}80` }}>{item.label}</span>
                    <span className="flex-1 border-b border-dotted" style={{ borderColor: `${INK}26`, transform: 'translateY(-3px)' }} />
                    <span className="text-lg font-black" style={{ color: item.color, fontFamily: FONT_MONO }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}