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

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={13} style={{ color: i < rating ? JADE : `${INK}1A` }} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const { t } = useLang();

  const testimonials = [
  { name: t.comments.name1, location: t.comments.location1, role: t.comments.role1, emoji: '👨🌾', rating: 5, text: t.comments.text1, amount: t.comments.amount1 },
  { name: t.comments.name2, location: t.comments.location2, role: t.comments.role2, emoji: '👩🌾', rating: 5, text: t.comments.text2, amount: t.comments.amount2 },
  { name: t.comments.name3, location: t.comments.location3, role: t.comments.role3, emoji: '🧑🌾', rating: 5, text: t.comments.text3, amount: t.comments.amount3 },
  { name: t.comments.name4, location: t.comments.location4, role: t.comments.role4, emoji: '👩🌾', rating: 5, text: t.comments.text4, amount: t.comments.amount4 },
  { name: t.comments.name5, location: t.comments.location5, role: t.comments.role5, emoji: '👨🌾', rating: 5, text: t.comments.text5, amount: t.comments.amount5 },
  { name: t.comments.name6, location: t.comments.location6, role: t.comments.role6, emoji: '👩🌾', rating: 5, text: t.comments.text6, amount: t.comments.amount6 },
];


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
          <h2 className="text-4xl font-semibold md:text-5xl font-black mb-5" style={{ color: INK }}>
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
