import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import IndicatorCard from '../../components/IndicatorCard';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <MapOne />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">




      <CardDataStats title="Novos Casos de HIV (2023)" total="0.24" rate="0%"
  explanation='novos casos para cada 100.000 habitantes'
  levelUp>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Incidência de Tuberculose (2023)" total="49" rate="0%"
  explanation='novos casos para cada 100.000 habitantes'
  levelUp>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Incidência de Malária (2021)" total="3.72" rate="-0.14"
  explanation='novos casos para cada 100.000 habitantes'
  levelDown>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Prevalência de Hepatite B (2020)" total="0.03%" rate="0%"
  explanation='novos casos para cada 100.000 habitantes'
  levelUp>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Probabilidade de Morte por DNTs (2019)" total="15%" rate="-1 ponto percentual"
  explanation='porcentagem atribuída a doenças não transmissíveis (DNTs)'
  levelDown>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortes no Trânsito" total="15.7" rate="estável desde 2022"
  explanation='ocorrências para cada 100.000 habitantes'
>
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade por Intoxicação Acidental" total="0.15" rate="melhorando desde 2018">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade por Suicídio" total="6.89" rate="melhorando desde 2018">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade por Homicídio" total="32.59" rate="piorando desde 2018">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade Materna" total="60.74" rate="piorando desde 2018">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade Infantil (menores de 5 anos)" total="14.02" rate="melhorando desde 2021">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>

<CardDataStats title="Mortalidade Neonatal" total="8.57" rate="melhorando desde 2021">
  <svg
    className="fill-primary dark:fill-white"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  </svg>
</CardDataStats>



      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />

        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>


      <div className="mt-4 grid grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">


      <IndicatorCard
  title="Hipertensão"
  year="Brasil, 2019"
  percentage="45% [39,9% - 50,2%]"
  change="−0,1 pontos percentuais"
  trend="melhorando desde 2018"
  description="Prevalência padronizada por idade de hipertensão entre adultos de 30-79 anos (%)"
/>

<IndicatorCard
  title="Uso de tabaco"
  year="Brasil, 2020"
  percentage="12,9% [9,7% - 16,1%]"
  change=""
  trend=""
  description="Prevalência padronizada por idade do uso de tabaco entre pessoas com 15 anos ou mais (%)"
/>

<IndicatorCard
  title="Consumo de álcool"
  year="Brasil, 2019"
  percentage="7,67 [5,14 - 10,27]"
  change="−0,52"
  trend="mudança desde 2015"
  description="Consumo total de álcool per capita (≥ 15 anos de idade) em litros de álcool puro"
/>

<IndicatorCard
  title="Obesidade em adultos"
  year="Brasil, 2022"
  percentage="28,1% [25,7% - 30,6%]"
  change="+1 ponto percentual"
  trend="piorando desde 2021"
  description="Prevalência padronizada por idade de obesidade entre adultos (18+ anos) (%)"
/>

<IndicatorCard
  title="Obesidade em crianças e adolescentes"
  year="Brasil, 2022"
  percentage="15,5% [13,4% - 17,7%]"
  change="+0,5 pontos percentuais"
  trend="piorando desde 2021"
  description="Prevalência de obesidade entre crianças e adolescentes (5–19 anos) (%)"
/>

<IndicatorCard
  title="Violência por parceiro íntimo (últimos 12 meses)"
  year="Brasil, 2018"
  percentage="6% [4% - 10%]"
  change=""
  trend=""
  description="Proporção de mulheres e meninas de 15–49 anos sujeitas a violência física e/ou sexual por parceiro íntimo nos últimos 12 meses (%)"
/>

<IndicatorCard
  title="Violência por parceiro íntimo (ao longo da vida)"
  year="Brasil, 2018"
  percentage="23% [15% - 34%]"
  change=""
  trend=""
  description="Proporção de mulheres e meninas de 15–49 anos sujeitas a violência física e/ou sexual por parceiro íntimo ao longo da vida (%)"
/>

<IndicatorCard
  title="Baixa estatura em menores de 5 anos"
  year="Brasil, 2022"
  percentage="7,2% [6,2% - 8,4%]"
  change="±0 pontos percentuais"
  trend="estável desde 2021"
  description="Prevalência de baixa estatura em crianças menores de 5 anos (%)"
/>

<IndicatorCard
  title="Emagrecimento em menores de 5 anos"
  year="Brasil, mais recente"
  percentage="3,4% [2,9% - 4,1%]"
  change="+1 ponto percentual"
  trend="piorando desde 1989"
  description="Prevalência de emagrecimento em crianças menores de 5 anos (%)"
/>

<IndicatorCard
  title="Água potável gerida com segurança"
  year="Brasil, 2022"
  percentage="87%"
  change="+1 ponto percentual"
  trend="melhorando desde 2021"
  description="Proporção da população utilizando serviços de água potável geridos com segurança (%)"
/>

<IndicatorCard
  title="Saneamento gerido com segurança"
  year="Brasil, 2022"
  percentage="50%"
  change="+0 pontos percentuais"
  trend="melhorando desde 2021"
  description="Proporção da população utilizando serviços de saneamento geridos com segurança (%)"
/>

<IndicatorCard
  title="Instalações para lavagem das mãos"
  year="Brasil, 2022"
  percentage="Dados não disponíveis"
  change=""
  trend=""
  description="Proporção da população com acesso a instalações para lavagem das mãos"
/>

<IndicatorCard
  title="Tratamento seguro de esgoto doméstico"
  year="Brasil, 2022"
  percentage="43%"
  change="+10 pontos percentuais"
  trend="melhorando desde 2020"
  description="Proporção de esgoto doméstico tratado com segurança (%)"
/>

<IndicatorCard
  title="Combustíveis limpos"
  year="Brasil, 2022"
  percentage="96,5% [84,3% - 99,9%]"
  change="±0 pontos percentuais"
  trend="estável desde 2021"
  description="Proporção da população com uso primário de combustíveis e tecnologias limpas (%)"
/>

<IndicatorCard
  title="Matéria particulada fina"
  year="Brasil, 2019"
  percentage="10,94 [9,37 - 13,01]"
  change="−0,21"
  trend="melhorando desde 2018"
  description="Médias anuais de concentração de matéria particulada fina (PM2.5) em áreas urbanas (µg/m³)"
/>


      </div>

    </>
  );
};

export default ECommerce;
