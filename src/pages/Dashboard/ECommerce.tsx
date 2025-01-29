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


        <CardDataStats title="New HIV Infections (2023)" total="0.24" rate="0%"
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

        <CardDataStats title="Tuberculosis Incidence (2023)" total="49" rate="0%"
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

        <CardDataStats title="Malaria Incidence (2021)" total="3.72" rate="-0.14"
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

        <CardDataStats title="Hepatitis B Prevalence (2020)" total="0.03%" rate="0%"
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

        <CardDataStats title="Probability of Dying from NCDs (2019)" total="15%" rate="-1 percentage point"
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

        <CardDataStats title="Road Traffic Deaths" total="15.7" rate="stable since 2022"
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

        <CardDataStats title="Unintentional Poisoning Mortality" total="0.15" rate="improving since 2018">
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

        <CardDataStats title="Suicide Mortality" total="6.89" rate="improving since 2018">
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

        <CardDataStats title="Homicide Mortality" total="32.59" rate="worsening since 2018">
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

        <CardDataStats title="Maternal Mortality" total="60.74" rate="worsening since 2018">
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

        <CardDataStats title="Under Five Mortality" total="14.02" rate="improving since 2021">
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

        <CardDataStats title="Neonatal Mortality" total="8.57" rate="improving since 2021">
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
          title="Hypertension"
          year="Brazil, 2019"
          percentage="45% [39.9% - 50.2%]"
          change="−0.1 percentage points"
          trend="improving since 2018"
          description="Age-standardized prevalence of hypertension among adults aged 30-79 years (%)"
        />

        <IndicatorCard
          title="Tobacco use"
          year="Brazil, 2020"
          percentage="12.9% [9.7% - 16.1%]"
          change=""
          trend=""
          description="Age-standardized prevalence of tobacco use among persons 15 years and older (%)"
        />

        <IndicatorCard
          title="Alcohol consumption"
          year="Brazil, 2019"
          percentage="7.67 [5.14 - 10.27]"
          change="−0.52"
          trend="change since 2015"
          description="Total alcohol per capita (≥ 15 years of age) consumption (litres of pure alcohol)"
        />

        <IndicatorCard
          title="Adult obesity"
          year="Brazil, 2022"
          percentage="28.1% [25.7% - 30.6%]"
          change="+1 percentage points"
          trend="worsening since 2021"
          description="Age-standardized prevalence of obesity among adults (18+ years) (%)"
        />

        <IndicatorCard
          title="Children and adolescents obesity"
          year="Brazil, 2022"
          percentage="15.5% [13.4% - 17.7%]"
          change="+0.5 percentage points"
          trend="worsening since 2021"
          description="Prevalence of obesity among children and adolescents (5–19 years) (%)"
        />

        <IndicatorCard
          title="Intimate partner violence (previous 12 months)"
          year="Brazil, 2018"
          percentage="6% [4% - 10%]"
          change=""
          trend=""
          description="Proportion of ever-partnered women and girls aged 15–49 years subjected to physical and/or sexual violence by a current or former intimate partner in the previous 12 months (%)"
        />

        <IndicatorCard
          title="Intimate partner violence (Lifetime)"
          year="Brazil, 2018"
          percentage="23% [15% - 34%]"
          change=""
          trend=""
          description="Proportion of ever-partnered women and girls aged 15–49 years subjected to physical and/or sexual violence by a current or former intimate partner in their lifetime (%)"
        />

        <IndicatorCard
          title="Stunting under 5"
          year="Brazil, 2022"
          percentage="7.2% [6.2% - 8.4%]"
          change="±0 percentage points"
          trend="stable since 2021"
          description="Prevalence of stunting in children under 5 (%)"
        />

        <IndicatorCard
          title="Wasting under 5"
          year="Brazil, latest"
          percentage="3.4% [2.9% - 4.1%]"
          change="+1 percentage point"
          trend="worsening since 1989"
          description="Prevalence of wasting in children under 5 (%)"
        />

        <IndicatorCard
          title="Safely managed drinking water"
          year="Brazil, 2022"
          percentage="87%"
          change="+1 percentage points"
          trend="improving since 2021"
          description="Proportion of population using safely-managed drinking-water services (%)"
        />

        <IndicatorCard
          title="Safely managed sanitation"
          year="Brazil, 2022"
          percentage="50%"
          change="+0 percentage points"
          trend="improving since 2021"
          description="Proportion of population using safely-managed sanitation services (%)"
        />

        <IndicatorCard
          title="Handwashing facilities"
          year="Brazil, 2022"
          percentage="Data not available"
          change=""
          trend=""
          description="Proportion of population with access to handwashing facilities"
        />

        <IndicatorCard
          title="Safely treated wastewater flows"
          year="Brazil, 2022"
          percentage="43%"
          change="+10 percentage points"
          trend="improving since 2020"
          description="Proportion of safely treated domestic wastewater flows (%)"
        />

        <IndicatorCard
          title="Clean fuels"
          year="Brazil, 2022"
          percentage="96.5% [84.3% - 99.9%]"
          change="±0 percentage points"
          trend="stable since 2021"
          description="Proportion of population with primary reliance on clean fuels and technology (%)"
        />

        <IndicatorCard
          title="Fine particulate matter"
          year="Brazil, 2019"
          percentage="10.94 [9.37 - 13.01]"
          change="−0.21"
          trend="improving since 2018"
          description="Annual mean concentrations of fine particulate matter (PM2.5) in urban areas (µg/m3)"
        />

      </div>

    </>
  );
};

export default ECommerce;
