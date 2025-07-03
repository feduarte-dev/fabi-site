import ServiceCard from "./ServiceCard";
import bariatric from '../assets/bariatrica.png';
import pregnancy from '../assets/gestante.png';
import children from '../assets/criancas.png';
import weightloss from '../assets/emagrecimento.png';
import diabets from '../assets/diabetes.jpg';
import enteral from '../assets/enteral.jpg';
import oncology from '../assets/oncologia.jpg';
import elderly from '../assets/idoso.png';

const services = [
  {
    title: 'Gestantes',
    image: pregnancy,
    description: 'sample-text',
    text: 'Ofereço acompanhamento nutricional especializado para gestantes, com foco na promoção da saúde materna, controle do ganho de peso e prevenção de intercorrências como diabetes gestacional e hipertensão. A alimentação adequada faz toda a diferença para uma gestação segura e saudável.'
  },
  {
    title: 'Crianças',
    image: children,
    description: 'sample-text',
    text: 'Desde a introdução alimentar até as fases do crescimento, a nutrição tem um papel essencial no desenvolvimento saudável da criança. Posso te ajudar a construir bons hábitos desde cedo, garantindo uma alimentação equilibrada e prevenindo problemas como obesidade infantil e diabetes no futuro.'
  },
  {
    title: 'Emagrecimento',
    image: weightloss,
    description: 'Orientação para uma alimentação saudável desde a infância.',
    text: 'Emagrecer com saúde é possível e você não precisa passar fome ou seguir dietas restritivas. Posso te ajudar a criar uma alimentação equilibrada, que respeita seu ritmo, suas preferências e seu corpo, promovendo mudanças reais e duradouras no seu estilo de vida.'
  },
  {
    title: 'Diabetes',
    image: diabets,
    description: 'sample-text',
    text: 'Ofereço suporte nutricional individualizado para pessoas com diabetes tipo 1 e tipo 2. O foco é no controle glicêmico, ajuste do plano alimentar, prevenção de complicações e promoção da autonomia, sempre respeitando as necessidades e a rotina de cada pessoa.'
  },
  {
    title: 'Cirurgia Bariátrica',
    image: bariatric,
    description: 'sample-text',
    text: 'A cirurgia é um passo importante, mas o sucesso está no cuidado antes e depois dela. Te ajudo na preparação nutricional, adaptação alimentar progressiva, prevenção de deficiências nutricionais e manutenção dos resultados com segurança e equilíbrio.'
  },
  {
    title: 'Nutrição Enteral',
    image: enteral,
    description: 'sample-text',
    text: 'A alimentação por sonda exige cuidados específicos e atenção constante. Ofereço suporte nutricional com foco na prescrição individualizada, escolha adequada de fórmulas, prevenção de complicações e monitoramento contínuo do estado nutricional.'
  },
  {
    title: 'Saúde do Idoso',
    image: elderly,
    description: 'sample-text',
    text: 'Foco na prevenção e controle de doenças comuns como hipertensão, diabetes e osteoporose, além da manutenção da massa muscular e suporte ao sistema imunológico para um envelhecimento ativo e saudável.'
  },
  {
    title: 'Oncologia',
    image: oncology,
    description: 'sample-text',
    text: 'Durante o tratamento oncológico, a nutrição é fundamental para fortalecer o corpo, amenizar os efeitos colaterais e melhorar sua qualidade de vida. Te ajudo com orientações personalizadas que respeitam suas necessidades e promovem mais força e disposição em cada etapa.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-green-light p-12 sm:px-8 lg:px-48">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-earth-mid font-text">Serviços</h2>
        <p className="text-earth-mid mt-2 font-text">Saiba como posso te ajudar</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
