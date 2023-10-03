import React from "react";
import {
  Bar,
  BarChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [{ name: "Data Point 1", value: 50, value2: 10 }];

const Slas = () => {
  return (
    <div style={{ height: "40vh", width: "10rem" }}>
      <ResponsiveContainer width="100%" height={70}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#1f305e" stackId="a" barSize={15}>
            <LabelList dataKey="value" position="insideStart" fill="white" />
          </Bar>
          <Bar dataKey="value2" fill="#0076CE" stackId="a" barSize={20}>
            <LabelList dataKey="value2" position="insideStart" fill="white" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Slas;
