import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const [formData, setFormData] = useState({
        user: "",
        age: "",
        service: "",
        contact: "",
        message: "",
    });
    const services = [
        "Gestantes e Crianças",
        "Emagrecimento",
        "Diabetes",
        "Cirurgia Bariátrica",
        "Nutrição Enteral",
        "Saúde do Idoso",
        "Oncologia",
        "Outro"
    ];
    const [status, setStatus] = useState("");
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        emailjs
            .send(
                serviceId,
                templateId,
                formData,
                userId
            )
            .then(() => {
                setStatus("Formulário enviado com sucesso!");
                setFormData({ user: "", age: "", service: "", contact: "", message: "" });
            })
            .catch((err) => {
                console.error(err);
                setStatus("Erro ao enviar. Tente novamente.");
            });
    };

    return (
        <section className="max-w-xl w-full my-12 px-4 sm:px-6 py-6 bg-green-light rounded-xl shadow-lg sm:ml-12 text-earth-mid">
            <h2 className="text-2xl font-bold mb-4 text-center text-earth-mid font-text">Entre em contato</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-earth-mid">
                <input
                    name="user"
                    type="text"
                    placeholder="Nome"
                    value={formData.user}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-earth-mid rounded bg-green-light text-earth-mid placeholder:text-earth-mid"
                />

                <input
                    name="age"
                    type="number"
                    placeholder="Idade"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-earth-mid rounded bg-green-light text-earth-mid placeholder:text-earth-mid"
                />

                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-earth-mid rounded bg-green-light text-earth-mid"
                >
                    {services.map((service, index) => (
                        <option key={index} value={service}>
                            {service}
                        </option>
                    ))}
                </select>

                <input
                    name="contact"
                    type="text"
                    placeholder="WhatsApp, email ou telefone"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-earth-mid rounded bg-green-light text-earth-mid placeholder:text-earth-mid"
                />

                <textarea
                    name="message"
                    placeholder="Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 border border-earth-mid rounded bg-green-light text-earth-mid placeholder:text-earth-mid"
                />

                <button
                    type="submit"
                    className="w-full bg-earth-mid text-white p-2 rounded hover:bg-earth-deep transition"
                >
                    <span className="text-green-light" >
                        Enviar
                    </span >
                </button>

                {status && <p className="text-earth-mid text-center text-sm mt-2">{status}</p>}
            </form>
        </section>

    );
}
