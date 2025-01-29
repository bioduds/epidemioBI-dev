const dadosSaude = [
  {
    titulo: "População",
    valor: "211.140.729 (2023)",
    mudanca: "+3% projetado até 2050",
    descricao: "População total do Brasil com projeções para 2050",
  },
  {
    titulo: "Gasto atual com saúde (% do PIB)",
    valor: "9,89% (2021)",
    mudanca: "+1,3 pontos percentuais",
    descricao: "Gasto com saúde como porcentagem do PIB no Brasil",
  },
  {
    titulo: "Expectativa de Vida",
    valor: "72,4 anos (2021)",
    mudanca: "▲ 0,889 anos desde 2000",
    descricao: "Expectativa de vida ao nascer no Brasil",
  },
  {
    titulo: "Principal Causa de Óbito - Mulheres",
    valor: "COVID-19: 187,5 por 100.000",
    mudanca: "",
    descricao: "Principais causas de óbito para mulheres no Brasil em 2021",
  },
  {
    titulo: "Principal Causa de Óbito - Homens",
    valor: "COVID-19: 255,6 por 100.000",
    mudanca: "",
    descricao: "Principais causas de óbito para homens no Brasil em 2021",
  },
  {
    titulo: "Densidade de Médicos",
    valor: "21,42 por 10.000 habitantes",
    mudanca: "+2,99 desde 2011",
    descricao: "Número de médicos por 10.000 habitantes no Brasil",
  },
  {
    titulo: "Densidade de Enfermeiros",
    valor: "55,1 por 10.000 habitantes",
    mudanca: "−20,3 desde 2013",
    descricao: "Número de enfermeiros por 10.000 habitantes no Brasil",
  },
  {
    titulo: "Densidade de Dentistas",
    valor: "6,7 por 10.000 habitantes",
    mudanca: "−5,7 desde 2017",
    descricao: "Número de dentistas por 10.000 habitantes no Brasil",
  },
  {
    titulo: "Progresso na Cobertura Universal de Saúde",
    valor: "−1,3 milhões de pessoas projetadas até 2025",
    mudanca: "",
    descricao: "Mudança no número de pessoas cobertas por serviços essenciais de saúde no Brasil",
  },
];

const TabelaSaude = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Visão Geral dos Dados de Saúde: Brasil
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Indicador
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Valor
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Mudança
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Descrição
            </h5>
          </div>
        </div>

        {dadosSaude.map((dado, chave) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              chave === dadosSaude.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={chave}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{dado.titulo}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{dado.valor}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{dado.mudanca}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{dado.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabelaSaude;
