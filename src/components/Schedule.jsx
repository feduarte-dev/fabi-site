import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Schedule() {
  const [appointmentType, setAppointmentType] = useState('');
  const online = 'aaaaaaaa'
  const presencial = 'bbbbbbb'

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
        <div className='grid md:grid-cols-2 justify-center'>
          <div className="flex flex-col md:text-start ">

            <button onClick={() => setAppointmentType(online)} className='md:px-10 md:py-4 px-6 py-2 max-w-48 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium'>
              Online
            </button>

            <button onClick={() => setAppointmentType(presencial)} className='mb-12 mt-4 md:px-10 md:py-4 px-6 py-2 max-w-48 bg-earth-warm/50 border border-earth-mid text-earth-mid rounded-lg hover:bg-earth-mid/70 transition duration-300 font-text hover:text-earth-warm font-medium'>
              Presencial
            </button>

          </div>
          <p>{appointmentType}</p>

        </div>

      </motion.header>
    </section >
  );
}
