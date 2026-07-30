import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Sunil Rathnayake',
    location: 'Matale, Central Province',
    role: 'Vegetable Farmer',
    emoji: '👨‍🌾',
    rating: 5,
    text: 'MADECOOP gave me a loan when no bank would help me. With that loan, I cultivated 2 acres of vegetables. They bought back my entire harvest at a fair price. Now I have expanded to 5 acres and my family income has tripled!',
    amount: 'Loan: Rs. 75,000',
    color: 'bg-green-50 border-green-200',
  },
  {
    name: 'Kumari Perera',
    location: 'Dambulla, Matale',
    role: 'Cinnamon Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: 'As a woman farmer, I always struggled with market access. MADECOOP not only gave me a loan but also connected me with export buyers. My cinnamon now goes to Japan! The buy-back guarantee changed everything.',
    amount: 'Loan: Rs. 50,000',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    name: 'Chaminda Silva',
    location: 'Ukuwela, Matale',
    role: 'Pepper & Cardamom Farmer',
    emoji: '🧑‍🌾',
    rating: 5,
    text: 'I joined MADECOOP\'s group loan program with four other farmers. We all cultivated pepper together and MADECOOP exported it to Europe. The premium export price was 40% higher than local market rates!',
    amount: 'Group Loan: Rs. 100,000',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    name: 'Priya Dissanayake',
    location: 'Rattota, Matale',
    role: 'Tea & Vegetable Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: 'The agricultural deposit plan with 10% interest is excellent. I deposited my harvest earnings and they grew significantly. Now I use the returns to fund my next season\'s cultivation without borrowing!',
    amount: 'Deposit: Rs. 200,000',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    name: 'Nimal Fernando',
    location: 'Naula, Matale',
    role: 'Mixed Crop Farmer',
    emoji: '👨‍🌾',
    rating: 5,
    text: 'The machinery loan from MADECOOP helped me buy a water pump and tractor accessories. My cultivation efficiency improved by 60%. The flexible repayment schedule aligned perfectly with my harvest cycle.',
    amount: 'Machinery Loan: Rs. 150,000',
    color: 'bg-teal-50 border-teal-200',
  },
  {
    name: 'Anoma Wickramasinghe',
    location: 'Galewela, Matale',
    role: 'Organic Vegetable Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: 'MADECOOP trained me in organic farming techniques and connected me with Bio Foods. Now my organic vegetables are certified and exported to the UK at premium prices. My income increased by 300%!',
    amount: 'Export Loan: Rs. 120,000',
    color: 'bg-emerald-50 border-emerald-200',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-200'} size={14} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-section-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Farmer Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Hear From Our
            <br />
            <span className="gradient-text">Thriving Farmers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real farmers whose lives have been transformed by MADECOOP's comprehensive support system.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`${t.color} border rounded-3xl p-6 h-full relative overflow-hidden`}
              >
                {/* Quote icon */}
                <FaQuoteLeft className="text-green-200 text-4xl absolute top-4 right-4" />

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 relative z-10">
                  "{t.text}"
                </p>

                {/* Loan info */}
                <div className="bg-white/70 rounded-xl px-3 py-2 mb-4 inline-block">
                  <span className="text-green-700 text-xs font-bold">{t.amount}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.role}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '95%', label: 'Loan Repayment Rate' },
            { value: '300%', label: 'Avg. Income Growth' },
            { value: '5★', label: 'Community Rating' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-md border border-green-100">
              <div className="text-2xl font-black text-green-700">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
