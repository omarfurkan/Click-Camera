import React, { useEffect, useState } from 'react';
import { BarChart, LineChart, PieChart, FunnelChart } from 'recharts';
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, Funnel, LabelList } from 'recharts';


const Dashbord = () => {
    const [chart, setChart] = useState();
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center font-extrabold my-8'>Dashbord</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto w-5/6 mt-12'>
                <div className='border-2 border-[#ffb4b4] py-24 px-4 mr-4'>
                    <BarChart width={730} height={250} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>

                <div className='border-2 border-[#ffb4b4] py-24 px-4 ml-4'>
                    <LineChart width={730} height={250} data={chart}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="investment" />
                        <YAxis dataKey="sell" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#FA2FB5" />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto w-5/6 mt-12'>
                <div className='border-2 border-[#ffb4b4] py-24 px-4 mr-4'>
                    <PieChart width={730} height={250}>

                        <Pie data={chart} dataKey="revenue" nameKey="sell" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Pie data={chart} dataKey="month" nameKey="sell" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
                    </PieChart>
                </div>
                <div className='border-2 border-[#ffb4b4] py-24 px-4 ml-4'>
                    <FunnelChart width={730} height={250}>
                        <Tooltip />
                        <Funnel
                            dataKey="revenue"
                            data={chart}
                            isAnimationActive
                        >
                            <LabelList position="right" fill="#94B49F" stroke="#82ca9d" dataKey="sell" />
                        </Funnel>
                    </FunnelChart>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;