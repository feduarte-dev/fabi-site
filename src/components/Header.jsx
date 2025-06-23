import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-green-light py-6 text-center z-50 h-30">
      <motion.header
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-earth-mid text-2xl md:text-3xl font-handwriting max-w-4xl mx-auto px-4">
          “Se não mudar o que faço hoje, todos os amanhãs serão iguais a ontem.”
        </h1>
        <h3 className="text-earth-mid text-2xl md:text-2xl font-handwriting max-w-4xl mx-auto px-4">
          Millôr Fernandes
        </h3>
      </motion.header>
    </header>
  );
}
