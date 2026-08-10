import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLang } from '../i18n/LanguageContext';

const INK = '#1E2A38';
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

const testimonials = [
  { name: 'Sunil Rathnayake', location: 'Matale, Central Province', role: 'Vegetable Farmer', emoji: '👨🌾', rating: 5, text: 'MADECOOP gave me a loan when no bank would help me. With that loan, I cultivated 2 acres of vegetables. They bought back my entire harvest at a fair price. Now I have expanded to 5 acres and my family income has tripled!', amount: 'Loan: Rs. 75,000' },
  { name: 'Kumari Perera', location: 'Dambulla, Matale', role: 'Cinnamon Farmer', emoji: '👩🌾', rating: 5, text: "As a woman farmer, I always struggled with market access. MADECOOP not only gave me a loan but also connected me with export buyers. My cinnamon now goes to Japan! The buy-back guarantee changed everything.", amount: 'Loan: Rs. 50,000' },
  { name: 'Chaminda Silva', location: 'Ukuwela, Matale', role: 'Pepper & Cardamom Farmer', emoji: '🧑🌾', rating: 5, text: "I joined MADECOOP's group loan program with four other farmers. We all cultivated pepper together and MADECOOP exported it to Europe. The premium export price was 40% higher than local market rates!", amount: 'Group Loan: Rs. 100,000' },
  { name: 'Priya Dissanayake', location: 'Rattota, Matale', role: 'Vanilla Farmer', emoji: '👩🌾', rating: 5, text: "The agricultural deposit plan with 10% interest is excellent. I deposited my harvest earnings and they grew significantly. Now I use the returns to fund my next season's cultivation without borrowing!", amount: 'Deposit: Rs. 200,000' },
  { name: 'Nimal Fernando', location: 'Naula, Matale', role: 'Mixed Crop Farmer', emoji: '👨🌾', rating: 5, text: 'The machinery loan from MADECOOP helped me buy a water pump and tractor accessories. My cultivation efficiency improved by 60%. The flexible repayment schedule aligned perfectly with my harvest cycle.', amount: 'Machinery Loan: Rs. 150,000' },
  { name: 'Anoma Wickramasinghe', location: 'Galewela, Matale', role: 'Organic Vegetable Farmer', emoji: '👩🌾', rating: 5, text: 'MADECOOP trained me in organic farming techniques and connected me with Bio Foods. Now my organic vegetables are certified and exported to the UK at premium prices. My income increased by 300%!', amount: 'Export Loan: Rs. 120,000' },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={13} style={{ color: i < rating ? JADE : `${INK}1A` }} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="py-14 overflow-hidden" style={{ backgroundColor: PAPER }}>
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet { background: ${INK}33; opacity: 1; }
        .testimonial-swiper .swiper-pagination-bullet-active { background: ${STEEL}; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            {t.testimonials.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            {t.testimonials.title1}<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}>
              {t.testimonials.title2}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>{t.testimonials.sub}</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-12 testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 h-full relative overflow-hidden transition-all"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}
              >
                <FaQuoteLeft className="absolute top-5 right-5 text-3xl" style={{ color: `${STEEL}14` }} />
                <StarRating rating={item.rating} />
                <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: `${INK}CC` }}>"{item.text}"</p>
                <div className="px-3 py-1.5 mb-4 inline-block" style={{ backgroundColor: `${STEEL}14` }}>
                  <span className="text-xs font-bold" style={{ color: STEEL }}>{item.amount}</span>
                </div>
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: `1px dotted ${INK}26` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: `${INK}05`, border: `1px solid ${INK}0F` }}>
                    {item.emoji}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: INK }}>{item.name}</div>
                    <div className="text-xs" style={{ color: `${INK}80` }}>{item.role}</div>
                    <div className="text-xs" style={{ color: `${INK}66` }}>{item.location}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '98%', label: t.testimonials.satisfaction, color: STEEL },
            { value: '95%', label: t.testimonials.repayment, color: JADE },
            { value: '300%', label: t.testimonials.income, color: STEEL },
            { value: '5★', label: t.testimonials.rating, color: JADE },
          ].map((stat) => (
            <div key={stat.label} className="p-5 text-center shadow-sm" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}>
              <div className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: `${INK}80` }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
