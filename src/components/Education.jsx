import { motion } from 'framer-motion';
import profile2 from '../assets/profile2.png';

export default function Education() {
  return (
    <section id="education" className="bg-earth-warm py-12 px-4 shadow-2xl">

      <motion.header
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="flex justify-center">
          <img
            alt="Foto de Fabi Duarte"
            src={profile2}
            className="w-full max-w-xs md:max-w-sm object-cover rounded-[1rem] mx-auto mt-6 md:mt-0"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
            }}
          />
        </div>
        <div className="w-full md:max-w-md mx-auto text-center md:text-left">
          <h2 className="text-3xl font-semibold text-earth-mid mb-4 font-text">
            Formação
          </h2>
          <p className="text-earth-mid text-lg leading-relaxed font-text mb-2">
            Graduada em Nutrição, pela Universidade Federal de Pelotas,
            especializada em Nutrição Clínica.
            Graduada em Nutrição, pela Universidade Federal de Pelotas,
            especializada em Nutrição Clínica.
            Graduada em Nutrição, pela Universidade Federal de Pelotas,
            especializada em Nutrição Clínica.
            Graduada em Nutrição, pela Universidade Federal de Pelotas,
            especializada em Nutrição Clínica.
          </p>
          <p className="text-earth-mid text-lg leading-relaxed font-text">
            Tendo adquirido experiência ao longo dos 20 anos de profissão, posso
            ajudá-lo a alcançar seus objetivos, para uma vida mais saudável.
            Tendo adquirido experiência ao longo dos 20 anos de profissão, posso
            ajudá-lo a alcançar seus objetivos, para uma vida mais saudável.

            Tendo adquirido experiência ao longo dos 20 anos de profissão, posso
            ajudá-lo a alcançar seus objetivos, para uma vida mais saudável.Tendo adquirido experiência ao longo dos 20 anos de profissão, posso
            ajudá-lo a alcançar seus objetivos, para uma vida mais saudável.

          </p>
        </div>
      </motion.header>

    </section >
  );
}
