import ServiceCard from "./ServiceCard";
import bariatric from '../assets/bariatrica.jpg';
import pregnancy from '../assets/gestante.jpg';
import weightloss from '../assets/emagrecimento.jpg';
import diabets from '../assets/diabetes.jpg';
import enteral from '../assets/enteral.jpg';
import paliative from '../assets/paliativo.jpg';
import oncology from '../assets/oncologia.jpg';

const services = [
  {
    title: 'Gestantes e Crianças',
    image: pregnancy,
    description: 'sample-text',
    text: 'Posso ajudar desde a introdução alimentar até a necessidade de ajustes na alimentação de crianças que estejam acima do peso, levando em consideração o período de crescimento. A nutrição adequada nessa fase permite um desenvolvimento saudável e diminui as chances de doenças crônicas como o diabetes e a obesidade. Uma alimentação variada e equilibrada é importante durante o período gestacional para que não ocorra ganho de peso excessivo nem falta de nutrientes para o bebê.'
  },
  {
    title: 'Emagrecimento',
    image: weightloss,
    description: 'Orientação para uma alimentação saudável desde a infância.',
    text: 'O aumento de peso expõe o indivíduo a várias doenças e há diversas causas para obesidade, desde o estilo de vida a distúrbios hormonais e o tratamento está embasado em uma alimentação equilibrada e exercícios físicos. Se você necessita perder peso ou melhorar seus hábitos alimentares para não chegar a obesidade me procure, pois será elaborado um plano alimentar de acordo com suas preferências para que a “dieta” seja agradável e permanente.'
  },
  {
    title: 'Diabetes',
    image: diabets,
    description: 'sample-text',
    text: 'É uma doença caracterizada pela falta de produção ou utilização inadequada de insulina pelo organismo, uma dieta rica em carboidratos refinados e pobre em fibras pode aumentar a glicose, tanto do diabético como das pessoas predispostas, sendo ideal a todos uma dieta equilibrada e variada em macro e micro nutrientes.'
  },
  {
    title: 'Cirurgia Bariátrica',
    image: bariatric,
    description: 'sample-text',
    text: ' A cirurgia bariátrica é um procedimento indicado para tratar casos de obesidade grave. Ela ficou conhecida como “redução do estômago” porque muda a forma original do órgão e reduz sua capacidade de receber alimentos, dificultando a absorção de um número exagerado de calorias.'
  },
  {
    title: 'Nutrição Enteral',
    image: enteral,
    description: 'sample-text',
    text: 'A nutrição enteral é uma forma de alimentação para pacientes que não podem se alimentar por via oral (boca), trata-se de uma dieta líquida, que pode ser administrada por meio de sonda posicionada no intestino ou no estômago, em ambiente hospitalar ou em casa. Uma dieta equilibrada nesse período melhora o estado nutricional, minimizando o risco de desnutrição.'
  },
  {
    title: 'Saúde do Idoso',
    image: paliative,
    description: 'sample-text',
    text: 'sample-text'
  },
  {
    title: 'Oncologia',
    image: oncology,
    description: 'sample-text',
    text: 'Diariamente somos alvos de informações falsas, sem comprovação científica sobre a cura do câncer através da alimentação. Uma alimentação adequada minimiza os efeitos adversos da quimioterapia e ajuda na prevenção do câncer, podendo ser útil durante o tratamento.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-green-light p-12 sm:px-8 lg:px-48">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-earth-mid font-text">Serviços</h2>
        <p className="text-earth-mid mt-2 font-text">Conheça como posso te ajudar</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
