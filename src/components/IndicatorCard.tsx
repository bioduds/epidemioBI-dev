import React from 'react';

interface IndicatorCardProps {
  title: string;
  country: string;
  year: string;
  percentage: string;
  range: string;
  change: string;
  trend: string;
  description: string;
  indicatorType: string;
  showTable: boolean;
}

const IndicatorCard: React.FC<IndicatorCardProps> = ({
  title,
  country,
  year,
  percentage,
  range,
  change,
  trend,
  description,
  indicatorType,
  showTable
}) => {
  return (
    <div className="rounded-lg border border-gray-300 p-6 mb-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{country}, {year}</p>

      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-3xl font-semibold text-gray-800">{percentage}</span>
          <span className="text-sm font-medium text-gray-500 ml-2">[{range}]</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className={`text-sm font-medium ${trend === 'improving' ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
          <span className="text-sm font-medium text-gray-500 ml-2">{trend} since {year}</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-blue-600 cursor-pointer">
          {indicatorType}
        </span>
        <div className="flex items-center gap-4">
          {showTable && (
            <button className="text-sm text-blue-500 hover:text-blue-700">
              Show table
            </button>
          )}
          <button className="text-sm text-blue-500 hover:text-blue-700">
            Download data
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;
