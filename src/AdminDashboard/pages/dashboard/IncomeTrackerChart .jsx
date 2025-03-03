import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const IncomeTrackerChart = () => {
  const data = {
    labels: ["Control", "Balance"],
    datasets: [
      {
        data: [500, 200],
        backgroundColor: ["#80C57E", "#FF7878"],
      },
    ],
  };
 
  const options = {
    responsive: true,
    cutout: "75%", 
    rotation: Math.PI / 2, 
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg w-[467px] h-[298px] mt-1 flex flex-col justify-center md:block hidden">
      
      <h3 className="text-[#1F87B4] text-2xl border-b-4 border-dotted border-[#1F87B4] ml-2 w-[156px] text-nowrap ">
        Income Tracker
      </h3>

      
      <div className="flex justify-center items-center w-[467px] h-[298px] p-8">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default IncomeTrackerChart;
