import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format, parseISO } from 'date-fns';
const useStyles = makeStyles({
    chartContainer: {
        marginTop: 60,
        display: 'flex',
        justifyContent: 'center'
    },
    tooltip: {
        borderRadius: '0.25rem',
        background: '#26313c',
        color: '#fff',
        padding: '1rem',
        boxShadow: '15px 30px 40px 5px rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
      }
})


export default function UsersChart({data, dataKey}) {
    const classes = useStyles();
    function CustomTooltip ({active, payload, label}){
        if (active) {
          return (
            <div className={classes.tooltip}>
              <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
              <p>{payload[0].value}</p>
            </div>
          );
        }
        return null;
    }
    return (
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="90%" height={500}>
          <AreaChart
            data={data}
            margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          >

            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3f50b5" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#3f50b5" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
                type="monotone"
                dataKey={dataKey}
                stroke="#3f50b5"
                fill="url(#color)"
            />

            <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickFormatter={ str => {
                    const date = parseISO(str);
                    if (date.getDate() % 3 === 0) {
                      return format(date, "MMM, d");
                    }
                    return "";
                    }
                }
            />

            <YAxis
              dataKey="Users"
              axisLine={false}
              tickLine={false}
              tickCount={8}
            />

            <Tooltip content={<CustomTooltip/>} />

            <CartesianGrid opacity={0.3} vertical={false} />

            <Legend/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
}
