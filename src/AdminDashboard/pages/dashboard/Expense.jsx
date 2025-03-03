import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";



export default function Expense() {
    const data = {
        labels: ["#E96F6F", "#63A3C7", "#94DE59"],
        datasets: [
          {
            label: "Votes",
            data: [15, 19, 10],
            backgroundColor: ["#E96F6F", "#63A3C7", "#94DE59"],
            barPercentage: 0.5,  
            categoryPercentage: 1,
          },
        ],
      };
     
      const options = {
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              drawTicks: false,
            },
          },
        },
      };

  return (
 
     <div className="bg-white shadow-lg rounded-lg w-[467px] h-[298px] mt-1 flex flex-col justify-center md:block hidden">
          
          <h3 className="text-[#1F87B4] text-2xl border-b-4 border-dotted border-[#1F87B4]  ml-2 w-[156px] text-nowrap ">
            Expense Tracker
          </h3>
    
          
          <div className="flex justify-center items-center w-full h-full p-8">
          <Bar data={data} options={options}/>
          </div>
        </div>
  )
};
