import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const INK = '#1E2A38';
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

const testimonials = [
  {
    name: 'Sunil Rathnayake',
    location: 'Matale, Central Province',
    role: 'Vegetable Farmer',
    emoji: '👨‍🌾',
    rating: 5,
    text: 'MADECOOP gave me a loan when no bank would help me. With that loan, I cultivated 2 acres of vegetables. They bought back my entire harvest at a fair price. Now I have expanded to 5 acres and my family income has tripled!',
  },
  {
    name: 'Kumari Perera',
    location: 'Dambulla, Matale',
    role: 'Cinnamon Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: "As a woman farmer, I always struggled with market access. MADECOOP not only gave me a loan but also connected me with export buyers. My cinnamon now goes to Japan! The buy-back guarantee changed everything.",
 
  },
  {
    name: 'Chaminda Silva',
    location: 'Ukuwela, Matale',
    role: 'Pepper & Cardamom Farmer',
    emoji: '🧑‍🌾',
    rating: 5,
    text: "I joined MADECOOP's group loan program with four other farmers. We all cultivated pepper together and MADECOOP exported it to Europe. The premium export price was 40% higher than local market rates!",
   
  },
  {
    name: 'Priya Dissanayake',
    location: 'Rattota, Matale',
    role: 'Vanilla Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: "The agricultural deposit plan with 10% interest is excellent. I deposited my harvest earnings and they grew significantly. Now I use the returns to fund my next season's cultivation without borrowing!",

  },
  {
    name: 'Nimal Fernando',
    location: 'Naula, Matale',
    role: 'Mixed Crop Farmer',
    emoji: '👨‍🌾',
    rating: 5,
    text: 'The machinery loan from MADECOOP helped me buy a water pump and tractor accessories. My cultivation efficiency improved by 60%. The flexible repayment schedule aligned perfectly with my harvest cycle.',
  },
  {
    name: 'Anoma Wickramasinghe',
    location: 'Galewela, Matale',
    role: 'Organic Vegetable Farmer',
    emoji: '👩‍🌾',
    rating: 5,
    text: 'MADECOOP trained me in organic farming techniques and connected me with Bio Foods. Now my organic vegetables are certified and exported to the UK at premium prices. My income increased by 300%!',
   
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={13} style={{ color: i < rating ? JADE : `${INK}1A` }} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 overflow-hidden" style={{ backgroundColor: PAPER }}>
      {/* Restyle Swiper's default pagination dots to match the palette */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet { background: ${INK}33; opacity: 1; }
        .testimonial-swiper .swiper-pagination-bullet-active { background: ${STEEL}; }
      `}</style>

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
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            Farmer Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: INK }}>
            Hear From Our
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})` }}
            >
              Thriving Farmers
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${INK}99` }}>
            Real stories from real farmers whose lives have been transformed by MADECOOP's
            comprehensive support system.
          </p>
        </motion.div>

        {/* Swiper - signed testimony cards */}
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
          className="pb-12 testimonial-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 h-full relative overflow-hidden transition-all"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}
              >
                {/* Quote mark */}
                <FaQuoteLeft className="absolute top-5 right-5 text-3xl" style={{ color: `${STEEL}14` }} />

                {/* Rating */}
                <StarRating rating={t.rating} />

                {/* Text */}
                <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: `${INK}CC` }}>
                  "{t.text}"
                </p>

                {/* Loan info - ledger tag */}
              
                </div>

                {/* Author - signature line */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: `1px dotted ${INK}26` }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${INK}05`, border: `1px solid ${INK}0F` }}
                  >
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: INK }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: `${INK}80` }}>{t.role}</div>
                    <div className="text-xs" style={{ color: `${INK}66` }}>{t.location}</div>
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
            { value: '98%', label: 'Customer Satisfaction', color: STEEL },
            { value: '95%', label: 'Loan Repayment Rate', color: JADE },
            { value: '300%', label: 'Avg. Income Growth', color: STEEL },
            { value: '5★', label: 'Community Rating', color: JADE },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 text-center shadow-sm"
              style={{ backgroundColor: '#FFFFFF', border: `1px solid ${INK}14` }}
            >
              <div className="text-2xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: `${INK}80` }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
