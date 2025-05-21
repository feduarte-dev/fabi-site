import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-green-light">
      <motion.header
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="max-w-4xl mx-auto text-center"
      >

        <h2 className="text-3xl font-bold mb-8 text-earth-mid font-text">Agende sua consulta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="http://api.whatsapp.com/send?phone=5547988031135"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-earth-warm shadow-lg rounded-2xl p-6 flex flex-col items-center transition hover:shadow-xl hover:scale-105"
          >
            <ion-icon name="logo-whatsapp" class="text-earth-mid hover:text-earth-deep w-8 h-8"></ion-icon>
            <span className="text-lg font-medium text-earth-mid font-text">
              (47) 98803-1135
            </span>
          </a>
          <a
            href="mailto:nutrifabi@gmail.com"
            target="_blank"
            className="bg-earth-warm shadow-lg rounded-2xl p-6 flex flex-col items-center transition hover:shadow-xl hover:scale-105"
          >
            <ion-icon name="mail-outline" class="text-earth-mid hover:text-earth-deep w-8 h-8"></ion-icon>
            <span className="text-lg font-medium text-earth-mid font-text">
              nutrifabi@gmail.com
            </span>
          </a>
        </div>
      </motion.header>
    </section>
  );
};

export default Contact;
