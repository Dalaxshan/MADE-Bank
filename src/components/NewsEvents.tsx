import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaArrowRight, FaNewspaper, FaGraduationCap, FaUsers } from 'react-icons/fa';

const news = [
  {
    type: 'News',
    typeColor: 'bg-blue-100 text-blue-700',
    icon: <FaNewspaper />,
    date: 'December 15, 2024',
    title: 'MADECOOP Achieves Record Export Revenue of Rs. 118 Million in 2024',
    excerpt: 'Matale District farmers celebrate a landmark year as MADECOOP\'s export partnerships delivered unprecedented returns, with cinnamon and pepper exports to Japan and Germany reaching new highs.',
    emoji: '📰',
    location: 'Matale',
    color: 'border-blue-200 bg-blue-50',
  },
  {
    type: 'Training',
    typeColor: 'bg-green-100 text-green-700',
    icon: <FaGraduationCap />,
    date: 'January 10, 2025',
    title: 'Organic Farming Certification Workshop - January 2025',
    excerpt: 'A comprehensive 3-day workshop on organic farming certification for export markets. Learn how to qualify for premium organic export pricing through our certified partners.',
    emoji: '🎓',
    location: 'MADECOOP Office, Matale',
    color: 'border-green-200 bg-green-50',
  },
  {
    type: 'Event',
    typeColor: 'bg-amber-100 text-amber-700',
    icon: <FaUsers />,
    date: 'January 25, 2025',
    title: 'Annual Farmer Cooperative Meeting & Dividend Distribution',
    excerpt: 'MADECOOP\'s annual general meeting where farmer-members receive their cooperative dividends and vote on policy decisions for 2025.',
    emoji: '🤝',
    location: 'Matale Town Hall',
    color: 'border-amber-200 bg-amber-50',
  },
  {
    type: 'News',
    typeColor: 'bg-purple-100 text-purple-700',
    icon: <FaNewspaper />,
    date: 'February 5, 2025',
    title: 'New Partnership with Bio Foods to Expand Organic Export Range',
    excerpt: 'MADECOOP announces expanded partnership with Bio Foods International, adding organic vegetables, herbs, and spices to the export portfolio.',
    emoji: '🌍',
    location: 'Colombo',
    color: 'border-purple-200 bg-purple-50',
  },
  {
    type: 'Training',
    typeColor: 'bg-teal-100 text-teal-700',
    icon: <FaGraduationCap />,
    date: 'February 20, 2025',
    title: 'Agricultural Export Seminar - Market Trends & Opportunities',
    excerpt: 'Expert speakers from the Export Development Board and international buyers discuss 2025 global market trends and opportunities for Sri Lankan agricultural products.',
    emoji: '📊',
    location: 'Hotel Matale',
    color: 'border-teal-200 bg-teal-50',
  },
  {
    type: 'Event',
    typeColor: 'bg-rose-100 text-rose-700',
    icon: <FaUsers />,
    date: 'March 1, 2025',
    title: 'Group Loan Inauguration Ceremony - New Batch of Farmer Groups',
    excerpt: 'Welcoming 25 new 5-member farmer groups into the MADECOOP Group Loan program. Ceremony to be attended by Central Provincial Council representatives.',
    emoji: '🎉',
    location: 'MADECOOP Office, Matale',
    color: 'border-rose-200 bg-rose-50',
  },
];

const upcomingEvents = [
  { date: 'Jan 10', event: 'Organic Farming Workshop', type: 'Training' },
  { date: 'Jan 25', event: 'Annual General Meeting', type: 'Event' },
  { date: 'Feb 20', event: 'Export Seminar 2025', type: 'Seminar' },
  { date: 'Mar 1', event: 'Group Loan Inauguration', type: 'Ceremony' },
  { date: 'Mar 15', event: 'Machinery Loan Open Day', type: 'Event' },
];

export default function NewsEvents() {
  return (
    <section id="news" className="py-24 bg-white">
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
            News & Events
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Stay Updated with
            <br />
            <span className="gradient-text">MADECOOP</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Latest agricultural news, training programs, export seminars, and farmer workshops.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {news.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`${item.color} border rounded-2xl p-5 cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.typeColor}`}>
                    {item.type}
                  </span>
                  <span className="text-2xl">{item.emoji}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <FaCalendar size={10} />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <FaMapMarkerAlt size={10} />
                    <span>{item.location}</span>
                  </div>
                  <button className="text-green-700 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <FaArrowRight size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Upcoming Events */}
            <div className="bg-green-700 rounded-3xl p-6 text-white">
              <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                <FaCalendar /> Upcoming Events
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.event} className="flex gap-3 p-3 bg-white/10 rounded-xl">
                    <div className="text-center min-w-12">
                      <div className="text-xs text-green-300 font-bold">{event.date.split(' ')[0]}</div>
                      <div className="text-sm font-black">{event.date.split(' ')[1]}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">{event.event}</div>
                      <div className="text-xs text-green-300 mt-0.5">{event.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Stay Informed</h3>
              <p className="text-gray-600 text-sm mb-4">Get the latest farming tips, market prices, and MADECOOP updates.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input-field text-sm"
                />
                <button className="btn-primary w-full justify-center text-sm py-3">
                  Subscribe Newsletter
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 rounded-3xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">2024 Achievements</h3>
              {[
                { label: 'New Farmers Enrolled', value: '847', color: 'bg-green-500' },
                { label: 'Training Sessions', value: '24', color: 'bg-blue-500' },
                { label: 'Export Shipments', value: '48', color: 'bg-purple-500' },
              ].map((item) => (
                <div key={item.label} className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: '75%' }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
