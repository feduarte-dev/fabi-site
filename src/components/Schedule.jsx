import { motion } from 'framer-motion';
import online from '../assets/online.jpg';
import onsite from '../assets/presencial.jpg';

export default function Schedule() {
  return (
    <section id="agendamento" className="bg-earth-warm py-12 px-4 mx">
      <motion.header
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-earth-mid mb-10 font-text">Formas de Atendimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <img
              src={online}
              alt="Atendimento Online"
              className="rounded-2xl object-cover w-full h-42"
            />
            <h3 className="text-xl font-medium text-earth-mid mt-4 font-text">Opção de atendimento pelo Google Meet ou outra plataforma de sua
              preferência</h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={onsite}
              alt="Atendimento Presencial"
              className="rounded-2xl object-cover w-full h-42"
            />
            <h3 className="text-xl font-medium text-earth-mid mt-4 font-text">Seja atendido no conforto de sua casa</h3>
          </div>
        </div>
        <p className="text-earth-mid text-lg max-w-2xl mx-auto font-text">
          *Dias e horários flexíveis
        </p>
      </motion.header>
    </section>
  );
}
