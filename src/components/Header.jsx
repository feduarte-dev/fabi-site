import { motion } from 'framer-motion';

export default function Header() {
  return (
    <session className="bg-green-light/75 py-6 text-center ">
      <motion.header
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-earth-mid text-4xl md:text-6xl font-handwriting max-w-4xl mx-auto px-4 mt-12 mb-4">
          “Se não mudar o que faço hoje, todos os amanhãs serão iguais a ontem.”
        </h1>
        <h3 className="text-earth-mid text-lg md:text-xl  max-w-4xl mx-auto px-4 mb-24 text-end font-text">
          - Millôr Fernandes
        </h3>

        <div className='flex flex-col md:flex-row text-center justify-center'>
          <a href="#about" >
            <button className='md:mr-24 mt-4 md:px-10 md:py-4 px-6 py-2 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium'>
              Sobre a Fabiana
            </button>
          </a>

          <a href="#services" >
            <button className='mb-12 mt-4 md:px-10 md:py-4 px-6 py-2 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium'>
              Serviços
            </button>
          </a>
        </div>


      </motion.header>
    </session>
  );
}
