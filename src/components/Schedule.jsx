import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Schedule() {
  const [appointmentType, setAppointmentType] = useState('');
  const online = 'Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.Atendimento Online via videochamada. Mais flexível e acessível.';
  const presencial = 'Atendimento Presencial no consultório. Atendimento humanizado.Atendimento Presencial no consultório. Atendimento humanizado.Atendimento Presencial no consultório. Atendimento humanizado.Atendimento Presencial no consultório. Atendimento humanizado.Atendimento Presencial no consultório. Atendimento humanizado.';

  const hasSelected = appointmentType !== '';

  return (
    <section id="agendamento" className="bg-earth-warm/75 py-12 px-4">
      <motion.header
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-earth-mid mb-10 font-text text-center">
          Formas de Atendimento
        </h2>

        {/* Container animado com layout */}
        <motion.div
          layout
          transition={{ duration: 0, ease: 'easeInOut' }}
          className={hasSelected ? 'grid md:grid-cols-2 gap-8 items-center' : 'flex justify-center'}
        >
          {/* Botões com movimento lateral */}
          <motion.div
            layout
            transition={{ duration: 1 }}
            className="flex flex-col items-center md:items-start"
            animate={{ x: hasSelected ? 0 : 0 }}
          >
            <motion.button
              layout
              onClick={() => setAppointmentType(online)}
              className="md:px-10 md:py-4 px-6 py-2 w-56 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium mb-4"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Online
            </motion.button>

            <motion.button
              layout
              onClick={() => setAppointmentType(presencial)}
              className="md:px-10 md:py-4 px-6 py-2 w-56 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Presencial
            </motion.button>
          </motion.div>

          {/* Texto com fade + slide da direita */}
          <AnimatePresence>
            {hasSelected && (
              <motion.div
                key="appointmentText"
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ duration: 1 }}
                className="mt-8 md:mt-0 px-2 text-earth-mid text-left font-text"
              >
                <p className="text-lg leading-relaxed">{appointmentType}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </section>
  );
}
