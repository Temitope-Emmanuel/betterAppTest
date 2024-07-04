import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CartesianGrid } from "recharts";
import { currencyFormat } from "@/lib/utils";

const data = [
    {
        period: "Jan",
        amount: 5
    },
    {
        period: "Feb",
        amount: 7.5
    },
    {
        period: "Mar",
        amount: 6.5
    },
    {
        period: "Apr",
        amount: 8.3
    },
    {
        period: "May",
        amount: 8.3
    },
    {
        period: "Jun",
        amount: 8.5
    },
    {
        period: "Jul",
        amount: 8.7
    },
    {
        period: "Aug",
        amount: 8
    },
    {
        period: "Sep",
        amount: 6.7
    },
    {
        period: "Oct",
        amount: 8.7
    },
    {
        period: "Nov",
        amount: 8.7
    },
    {
        period: "Dec",
        amount: 8.7
    },
]

const CustomizedYAxisTick = (props: any) => {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x-16.5},${y})`}>
        <text x={0} y={0} dy={5} textAnchor="end" fill="#FFFFFF">
        {`$${payload.value}M`}
        </text>
      </g>
    );
}

const CustomizedXAxisTick = (props: any) => {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y+10})`}>
        <text x={0} y={0} dy={16} dx={0} textAnchor="start" fill="#FFFFFF">
          {payload.value}
        </text>
      </g>
    );
}

export const DashboardBarChart: React.FC<{}> = () => {

    return (
        <div className="relative text-[10px] text-[#989898]">
            <ResponsiveContainer width="100%" height={272}>
                <BarChart data={data}
                    margin={{ top: 20, right: 48, left: 30, bottom: 20 }}
                >
                    <defs>
                        <linearGradient
                            id="bar-chart"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset=".3" stopColor="#95FFBB" />
                            <stop offset=".7" stopColor="#FFFFFF" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeWidth={1} stroke="#FFFFFF1A" />
                    <YAxis tickLine={false} tick={CustomizedYAxisTick} axisLine={false}/>
                    <XAxis tick={CustomizedXAxisTick} tickLine={false}
                        axisLine={{
                            stroke: "#FFFFFF1A",
                            strokeWidth: 1.25,
                        }}
                        dataKey="period" color="#99999C" />
                    <Bar dataKey="amount" barSize={43}
                        // fill="#95FFBB"
                        radius={5} fill="url(#bar-chart)"
                        activeBar={false}

                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}