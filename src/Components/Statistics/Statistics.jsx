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
        <div className="mb-20">
            <div className="flex justify-center">
                <PieChart width={240} height={400}>
                    <Pie
                        data={data}
                        cx={120}
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
            <div className="flex lg:gap-10 md:gap-8 sm:gap-6 gap-4 justify-center items-center text-center font-semibold text-base sm:text-xl md:text-xl lg:text-xl">
                <h1 className="flex flex-wrap justify-center items-center text-center ml-2">Your Donation: <span className="w-20 h-3 inline-block rounded-sm ml-2" style={{ backgroundColor: "#00C49F" }}> </span></h1>
                <h1 className="flex flex-wrap justify-center items-center text-center ml-2">Total Donation:<span className="w-20 h-3 inline-block rounded-sm ml-2" style={{ backgroundColor: "#FF444A" }} > </span></h1>
            </div>
        </div>
    );
};

export default Statistics;