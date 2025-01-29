import { Link } from "react-router-dom";

const newsData = [
  {
    title: "Casos de Dengue Aumentam em 2024",
    description: "O número de casos de dengue subiu 30% este ano em comparação a 2023.",
    time: "Há 2 horas",
  },
  {
    title: "Vacinação Contra Gripe Começa na Próxima Semana",
    description: "Campanha nacional de vacinação contra a gripe terá início na segunda-feira.",
    time: "Há 4 horas",
  },
  {
    title: "Novo Surto de Sarampo em Áreas Urbanas",
    description: "Especialistas alertam para aumento nos casos de sarampo em grandes cidades.",
    time: "Há 6 horas",
  },
  {
    title: "Avanços na Pesquisa da Vacina Contra Malária",
    description: "Pesquisadores relatam progresso significativo na eficácia da nova vacina.",
    time: "Há 1 dia",
  },
  {
    title: "OMS Alerta Para Nova Variante da COVID-19",
    description: "Nova variante do coronavírus é identificada e monitorada por cientistas.",
    time: "Há 2 dias",
  },
  {
    title: "Casos de Febre Amarela em Alta na Região Norte",
    description: "Autoridades de saúde reforçam campanhas de vacinação em áreas de risco.",
    time: "Há 3 dias",
  },
  {
    title: "Nova Estratégia Para Controle da Tuberculose",
    description: "Ministério da Saúde lança plano para reduzir incidência da tuberculose.",
    time: "Há 4 dias",
  },
  {
    title: "Pesquisadores Criam Teste Rápido Para Hepatite B",
    description: "Novo teste promete diagnóstico mais rápido e acessível para a população.",
    time: "Há 5 dias",
  },
  {
    title: "Projeto de Saneamento Promete Reduzir Doenças Infecciosas",
    description: "Iniciativa visa melhorar acesso à água potável e saneamento básico.",
    time: "Há 6 dias",
  },
  {
    title: "Aumento nos Casos de Intoxicação Alimentar",
    description: "Especialistas recomendam maior atenção à higiene na manipulação de alimentos.",
    time: "Há 1 semana",
  },
];

const NewsCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Notícias Epidemiológicas
      </h4>
      <div>
        {newsData.map((news, index) => (
          <Link
            to="/"
            className="block py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={index}
          >
            <h5 className="font-medium text-black dark:text-white">{news.title}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">{news.description}</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">{news.time}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
