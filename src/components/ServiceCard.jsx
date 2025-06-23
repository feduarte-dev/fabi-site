import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, image, text }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="w-full max-w-xs aspect-[2/3] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full shadow-lg rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
          }}
        >
          <motion.div
            className="w-full h-full flex flex-col items-center justify-end p-4 sm:p-8"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black bg-opacity-50 p-2 rounded w-full">
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-semibold text-white text-center font-text">
                  {title}
                </h3>
                <button className="text-white text-sm sm:text-base flex items-center gap-1">
                  <span className="text-lg sm:text-xl">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute w-full h-full bg-earth-warm shadow-lg rounded-xl flex items-center justify-center p-4 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-xl z-0" />
          <div className="relative z-10 overflow-y-auto max-h-full p-2 sm:p-4 scrollbar-thin scrollbar-thumb-earth-mid scrollbar-track-earth-light rounded-xl">
            <p className="text-sm sm:text-base text-earth-light text-center break-words font-text">
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
