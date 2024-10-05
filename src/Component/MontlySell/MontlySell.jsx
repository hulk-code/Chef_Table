import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MontlySell = () => {
    const sellData = [
        {
          month: 'January',
          menuItem: 'Spaghetti Carbonara',
          bestSell: 12500,
          totalSales: 17000,
          other: 4500,
        },
        {
          month: 'February',
          menuItem: 'Margherita Pizza',
          bestSell: 13200,
          totalSales: 18000,
          other: 4800,
        },
        {
          month: 'March',
          menuItem: 'Grilled Salmon',
          bestSell: 14000,
          totalSales: 19000,
          other: 5000,
        },
        {
          month: 'April',
          menuItem: 'Caesar Salad',
          bestSell: 15800,
          totalSales: 20500,
          other: 4700,
        },
        {
          month: 'May',
          menuItem: 'Tiramisu',
          bestSell: 16500,
          totalSales: 22000,
          other: 5500,
        },
      ];
      
    return (
        <div className='lg:w-1/2 mx-auto'>
            <p className='text-5xl font-bold m-10'>Our Monthly Sells </p>
            <LineChart
          width={500}
          height={300}
          data={sellData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="menuItem" />
          <YAxis dataKey='totalSales' />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="other" stroke='red' activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="bestSell" stroke="yellow" />
         
        </LineChart>
        </div>
    );
};

export default MontlySell;