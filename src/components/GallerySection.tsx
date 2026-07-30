import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand } from 'react-icons/fa';

const categories = ['All', 'Farms', 'Vegetables', 'Spices', 'Machinery', 'Export', 'Farmers'];

const galleryItems = [
  { id: 1, category: 'Farms', emoji: '🌄', title: 'Tea Plantation', desc: 'Rolling hills of Matale tea estates', color: 'bg-green-100', size: 'large' },
  { id: 2, category: 'Vegetables', emoji: '🥦', title: 'Vegetable Harvest', desc: 'Fresh organic vegetables ready for export', color: 'bg-emerald-100', size: 'small' },
  { id: 3, category: 'Spices', emoji: '🌿', title: 'Cinnamon Processing', desc: 'Ceylon cinnamon bark processing', color: 'bg-amber-100', size: 'small' },
  { id: 4, category: 'Export', emoji: '🚢', title: 'Export Container', desc: 'Agricultural produce ready for shipping', color: 'bg-blue-100', size: 'medium' },
  { id: 5, category: 'Farmers', emoji: '👨‍🌾', title: 'Farmer Training', desc: 'MADECOOP agricultural training program', color: 'bg-yellow-100', size: 'small' },
  { id: 6, category: 'Machinery', emoji: '🚜', title: 'Modern Tractors', desc: 'Agricultural machinery for lease', color: 'bg-orange-100', size: 'medium' },
  { id: 7, category: 'Spices', emoji: '🌶️', title: 'Pepper Cultivation', desc: 'Black pepper vines in Matale', color: 'bg-red-100', size: 'small' },
  { id: 8, category: 'Farms', emoji: '🌾', title: 'Paddy Fields', desc: 'Traditional paddy cultivation', color: 'bg-lime-100', size: 'large' },
  { id: 9, category: 'Vegetables', emoji: '🍅', title: 'Tomato Farm', desc: 'Export quality tomatoes', color: 'bg-red-50', size: 'small' },
  { id: 10, category: 'Spices', emoji: '🫚', title: 'Cardamom', desc: 'Premium cardamom cultivation', color: 'bg-green-50', size: 'small' },
  { id: 11, category: 'Farmers', emoji: '👩‍🌾', title: 'Women Farmers', desc: 'Empowering women in agriculture', color: 'bg-pink-100', size: 'medium' },
  { id: 12, category: 'Export', emoji: '📦', title: 'Packaging Unit', desc: 'Export packaging facility', color: 'bg-indigo-100', size: 'small' },
  { id: 13, category: 'Machinery', emoji: '💧', title: 'Irrigation System', desc: 'Modern drip irrigation', color: 'bg-cyan-100', size: 'small' },
  { id: 14, category: 'Farms', emoji: '🏔️', title: 'Hill Country Farm', desc: 'High-altitude cultivation in Matale', color: 'bg-teal-100', size: 'medium' },
  { id: 15, category: 'Vegetables', emoji: '🫑', title: 'Bell Peppers', desc: 'Colorful export-grade peppers', color: 'bg-green-100', size: 'small' },
];

type GalleryItem = typeof galleryItems[0];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Agriculture in Action
            <br />
            <span className="gradient-text">The MADECOOP Story</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A visual journey through the farms, harvests, and export operations that define MADECOOP's work.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-green-700 text-white shadow-lg shadow-green-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className={`relative ${item.color} rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid mb-4
                  ${item.size === 'large' ? 'min-h-64' : item.size === 'medium' ? 'min-h-48' : 'min-h-36'}
                `}
                onClick={() => setSelectedItem(item)}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="text-5xl mb-3">{item.emoji}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-600 text-xs mt-1">{item.desc}</div>
                    <div className="inline-block bg-white/70 text-xs font-semibold text-gray-600 px-2 py-0.5 rounded-full mt-2">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaExpand className="text-white text-2xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className={`${selectedItem.color} rounded-3xl p-10 max-w-md w-full relative`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-900/20 rounded-full flex items-center justify-center"
                >
                  <FaTimes className="text-gray-700" />
                </button>
                <div className="text-8xl text-center mb-4">{selectedItem.emoji}</div>
                <h3 className="text-2xl font-black text-gray-900 text-center mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600 text-center">{selectedItem.desc}</p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-white text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
