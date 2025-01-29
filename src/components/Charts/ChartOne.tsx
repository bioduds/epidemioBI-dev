import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#FF5733', '#FF8C00', '#33C1FF', '#F44336'], // Cores para Doença Cardíaca, Câncer e Doenças Respiratórias
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2, 2, 2],
    curve: 'smooth',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#FF5733', '#FF8C00', '#33C1FF', '#F44336'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

const generateRandomData = (size: number): number[] => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 80) + 20);
};

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartState>({
    series: [
      {
        name: 'COVID-19',
        data: generateRandomData(12),
      },
      {
        name: 'Doença Cardíaca Isquêmica',
        data: generateRandomData(12),
      },
      {
        name: 'Acidente Vascular Cerebral',
        data: generateRandomData(12),
      },
      {
        name: 'Infecções Respiratórias Inferiores',
        data: generateRandomData(12),
      }
    ],
  });

  const handleReset = (filter: string) => {
    let dataLength = 12;

    // Adjust data length based on selected filter
    if (filter === 'Dia') {
      dataLength = 1;
    } else if (filter === 'Semana') {
      dataLength = 7;
    }

    setState({
      series: [
        {
          name: 'COVID-19',
          data: generateRandomData(dataLength),
        },
        {
          name: 'Doença Cardíaca Isquêmica',
          data: generateRandomData(dataLength),
        },
        {
          name: 'Acidente Vascular Cerebral',
          data: generateRandomData(dataLength),
        },
        {
          name: 'Infecções Respiratórias Inferiores',
          data: generateRandomData(dataLength),
        },
      ],
    });
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <h4 className="text-xl font-semibold text-black dark:text-white">Prevalência Normalizada</h4>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleReset('Dia')}
            >
              Dia
            </button>
            <button
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleReset('Semana')}
            >
              Semana
            </button>
            <button
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
              onClick={() => handleReset('Mês')}
            >
              Mês
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
