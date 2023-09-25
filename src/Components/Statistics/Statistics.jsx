import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const [donations, setDonations] = useState([]);
    const COLORS = ["#FF444A", "#00C49F"];
    const RADIAN = Math.PI / 180;

    useEffect(() => {
        const donationsList = JSON.parse(localStorage.getItem('donations'));
        if (donationsList) {
            setDonations(donationsList);
        }
    }, []);

    const donationsValue = donations.length;
    const data = [
        { name: 'Total Donation', value: 12 - donationsValue },
        { name: 'Your Donation', value: donationsValue },
    ];

    return (
        <div className="mb-20 w-10/12 m-auto">
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                            const x = cx + radius * Math.cos(-midAngle * RADIAN);
                            const y = cy + radius * Math.sin(-midAngle * RADIAN);
                            return (
                                <text
                                    x={x}
                                    y={y}
                                    fill="white"
                                    textAnchor={x > cx ? 'start' : 'end'}
                                    dominantBaseline="central"
                                >
                                    {`${(percent * 100).toFixed(0)}%`}
                                </text>
                            );
                        }}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex gap-10 justify-center font-semibold text-xl">
                <h1 className="flex flex-wrap justify-center items-center">Your Donation: <span className="w-24 h-3 inline-block rounded-sm ml-2" style={{ backgroundColor: "#00C49F" }}> </span></h1>
                <h1 className="flex flex-wrap justify-center items-center">Total Donation:<span className="w-24 h-3 inline-block rounded-sm ml-2" style={{ backgroundColor: "#FF444A" }} > </span></h1>
            </div>
        </div>
    );
};

export default Statistics;