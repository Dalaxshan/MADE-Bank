import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { FaGlobeAsia } from "react-icons/fa";

const INK = "#1E2A38";
const JADE = "var(--color-secondary)";
const STEEL = "var(--color-light-green)";

const galleryItems = [
  {
    id: 1,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad7.jpg",
    span: 1,
  },
  {
    id: 2,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/1.webp",
    span: 2,
  },
  {
    id: 3,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad17.jpg",
    span: 1,
  },
  {
    id: 4,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA02236.webp",
    span: 2,
  },
  {
    id: 5,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad15.jpg",
    span: 1,
  },


  {
    id: 6,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad16.jpeg",
    span: 2,
  },
  {
    id: 7,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad6.jpg",
    span: 2,
  },
  {
    id: 8,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad10.jpg",
    span: 2,
  },
  {
    id: 9,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/made-bank_mad14.jpg",
    span: 1,
  },

  {
    id: 10,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA02486.webp",
    span: 1,
  },
  {
    id: 11,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/BHA02719.webp",
    span: 1,
  },
  {
    id: 12,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/paralax6.webp",
    span: 1,
  },
  {
    id: 13,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/p23.webp",
    span: 2,
  },
  {
    id: 14,
    src: "https://pub-8476bede5a4146e8b7731cfe515f1c3b.r2.dev/made-bank/paralax2.webp",
    span: 2,
}

];

type Item = (typeof galleryItems)[0];

export default function GallerySection() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <section
      id="gallery"
      className="py-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-100)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 text-xs uppercase tracking-[0.15em]"
            style={{
              borderColor: `${JADE}80`,
              color: JADE,
            }}
          >
            <FaGlobeAsia size={11} /> Our Gallery
          </span>
          <h2
            className="text-4xl font-semibold md:text-5xl font-black mb-4"
            style={{ color: INK }}
          >
            Agriculture in Action
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              The MADECOOP Story
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: `${INK}99` }}>
            A visual journey through the farms, harvests, and export operations
            that define MADECOOP's work.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative overflow-hidden cursor-pointer group break-inside-avoid mb-4"
              style={{ borderRadius: "12px" }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  display: "block",
                  minHeight: item.span === 2 ? "280px" : "200px",
                  maxHeight: item.span === 2 ? "380px" : "260px",
                }}
              />
              {/* Expand icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <Expand size={14} color="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: "rgba(10,14,22,0.92)",
              backdropFilter: "blur(6px)",
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-xl w-full overflow-hidden"
              style={{ borderRadius: "16px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                className="w-full object-contain"
                style={{ maxHeight: "75vh" }}
              />
            
              <button
                onClick={() => setSelected(null)}
                className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <X size={16} color="white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
