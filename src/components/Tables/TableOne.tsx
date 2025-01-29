import { BRAND } from '../../types/brand'; // you can remove this if not using the brand data
import { IndicatorCard } from '../components/IndicatorCard'; // assuming you have this component for individual data points

const healthData = [
  {
    title: "Population",
    value: "211,140,729 (2023)",
    change: "+3% projected by 2050",
    description: "Total population of Brazil with projections for 2050",
  },
  {
    title: "Current health expenditure (% of GDP)",
    value: "9.89% (2021)",
    change: "+1.3 percentage points",
    description: "Health expenditure as a percentage of GDP in Brazil",
  },
  {
    title: "Life Expectancy",
    value: "72.4 years (2021)",
    change: "▲ 0.889 years since 2000",
    description: "Life expectancy at birth in Brazil",
  },
  {
    title: "Top Cause of Death - Female",
    value: "COVID-19: 187.5 per 100,000",
    change: "",
    description: "Leading causes of death for females in Brazil in 2021",
  },
  {
    title: "Top Cause of Death - Male",
    value: "COVID-19: 255.6 per 100,000",
    change: "",
    description: "Leading causes of death for males in Brazil in 2021",
  },
  {
    title: "Density of Doctors",
    value: "21.42 per 10,000 population",
    change: "+2.99 since 2011",
    description: "Number of medical doctors per 10,000 population in Brazil",
  },
  {
    title: "Density of Nurses",
    value: "55.1 per 10,000 population",
    change: "−20.3 since 2013",
    description: "Number of nurses per 10,000 population in Brazil",
  },
  {
    title: "Density of Dentists",
    value: "6.7 per 10,000 population",
    change: "−5.7 since 2017",
    description: "Number of dentists per 10,000 population in Brazil",
  },
  {
    title: "Universal Health Coverage Progress",
    value: "−1.3m people projected by 2025",
    change: "",
    description: "Change in the number of people covered by essential health services in Brazil",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Health Data Overview: Brazil
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Indicator
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Value
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Change
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Description
            </h5>
          </div>
        </div>

        {healthData.map((data, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === healthData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.title}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.value}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{data.change}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
