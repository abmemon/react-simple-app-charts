import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = () => {

    const data = [
        {
            name: 'January',
            income: 10000,
            expense: 9500,
        },
        {
            name: 'February',
            income: 20000,
            expense: 18800,
        },
        {
            name: 'March',
            income: 30000,
            expense: 30300,
        },
        {
            name: 'April',
            income: 128398,
            expense: 29834,
        },
        {
            name: 'May',
            income: 298347,
            expense: 12314,
        },
        {
            name: 'June',
            income: 387434,
            expense: 27421,
        },
        {
            name: 'July',
            income: 2837465,
            expense: 982139,
        },
        {
            name: 'August',
            income: 938475,
            expense: 287332,
        },
        {
            name: 'September',
            income: 298364,
            expense: 293326,
        },
        {
            name: 'October',
            income: 2938567,
            expense: 874354,
        },
        {
            name: 'November',
            income: 298734,
            expense: 308234,
        },
        {
            name: 'December',
            income: 982364,
            expense: 234587,
        },

    ];

  return (
    <div>
        <div class="maintext">
            <h1>My Monthly Income and Expense</h1>
        </div>
      
        <BarChart
            margin = {
                {
                    top: 100,
                    right: 50,
                    left: 50,
                    bottom: 50,
                }
            }
            
            width = {
                1200
            }
        
            height = {
                550
            }

            data = {
                data
            }
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="income" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    </div>
  )
}

export default Chart