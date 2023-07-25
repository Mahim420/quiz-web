import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistic = () => {
  const allData = useLoaderData();
  const graf = allData.data;
  console.log(graf);

  return (
    <div>
      <div className="text-center mt-12">
        <h1>
          <span className="text-4xl text-red-500 font-bold">Here is</span>
          <span className="text-5xl ml-2 font-semibold text-orange-500">Question Graf</span>
        </h1>
      </div>
      <div className="flex justify-center mt-16">
        <div>
          <LineChart height={500} width={700} data={graf}>
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
