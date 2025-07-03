import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
    { name: "M. O. - 28 anos - Veterinária", text: "Excelente atendimento e resultados visíveis em poucas semanas!Excelente atendimento e resultados visíveis em poucas semanas!Excelente atendimento e resultados visíveis em poucas semanas!Excelente atendimento e resultados visíveis em poucas semanas!" },
    { name: "J. S. - 42 anos - Advogado", text: "Profissional incrível, me senti acolhido em todo o processo.Profissional incrível, me senti acolhido em todo o processo.Profissional incrível, me senti acolhido em todo o processo.Profissional incrível, me senti acolhido em todo o processo." },
    { name: "F. L. - 16 anos - Estudante", text: "Me ajudou a mudar minha relação com a alimentação. Super recomendo!Me ajudou a mudar minha relação com a alimentação. Super recomendo!Me ajudou a mudar minha relação com a alimentação. Super recomendo!Me ajudou a mudar minha relação com a alimentação. Super recomendo!" },
    { name: "C. M. - 35 anos - Engenheiro", text: "Melhorei minha saúde e autoestima graças ao acompanhamento.Melhorei minha saúde e autoestima graças ao acompanhamento.Melhorei minha saúde e autoestima graças ao acompanhamento.Melhorei minha saúde e autoestima graças ao acompanhamento." },
    { name: "A. C. - 64 anos - Aposentada", text: "Atendimento personalizado e muito atencioso. Adorei!Atendimento personalizado e muito atencioso. Adorei!Atendimento personalizado e muito atencioso. Adorei!Atendimento personalizado e muito atencioso. Adorei!Atendimento personalizado e muito atencioso. Adorei!" },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const total = testimonials.length;
    const autoplayRef = useRef(null);

    const next = () => {
        setIndex((prev) => (prev + 1) % total);
    };
    const goNext = () => {
        next();
        resetAutoplay();
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };
    const goPrev = () => {
        prev();
        resetAutoplay();
    };

    const goTo = (i) => {
        setIndex(i);
        resetAutoplay();
    };

    const resetAutoplay = useCallback(() => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, 6000);
    }, [total]);

    useEffect(() => {
        resetAutoplay();
        return () => clearInterval(autoplayRef.current);
    }, [resetAutoplay]);

    const swipeConfidenceThreshold = 100;
    const handleDragEnd = (event, info) => {
        if (info.offset.x > swipeConfidenceThreshold) {
            goPrev();
        } else if (info.offset.x < -swipeConfidenceThreshold) {
            goNext();
        }
    };

    return (
        <section id='testimonials' className="py-16 px-4 bg-green-light w-full flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-earth-mid font-text">Depoimentos</h2>

            <div className="relative w-full max-w-xl min-h-[250px] sm:max-h-[250px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full"
                    >
                        <TestimonialsCard {...testimonials[index]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center space-x-3">
                <button
                    onClick={goPrev}
                    className="text-earth-mid hover:text-earth-deep text-xl px-2"
                    aria-label="Anterior"
                >
                    ‹
                </button>

                {testimonials.map((_, i) => (
                    <motion.button
                        key={i}
                        onClick={() => goTo(i)}
                        className="w-3 h-3 rounded-full"
                        initial={false}
                        animate={{
                            backgroundColor: i === index ? "#3B2F2F" : "#5A463A",
                            scale: i === index ? 1.4 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Ir para depoimento ${i + 1}`}
                    />
                ))}

                <button
                    onClick={goNext}
                    className="text-earth-mid hover:text-earth-deep text-xl px-2"
                    aria-label="Próximo"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
