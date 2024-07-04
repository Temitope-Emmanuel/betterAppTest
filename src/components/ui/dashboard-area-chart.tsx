import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, AreaChart, Area } from "recharts";
import { currencyFormat } from "@/lib/utils";

const data = [
    {
        period: "Apr 03",
        amount: 0
    },
    {
        period: "Apr 04",
        amount: 65
    },
    {
        period: "Apr 05",
        amount: 75
    },
    {
        period: "Apr 06",
        amount: 65
    },
    {
        period: "Apr 07",
        amount: 60
    },
    {
        period: "Apr 08",
        amount: 80
    },
    {
        period: "Apr 09",
        amount: 90
    },
    {
        period: "Apr 10",
        amount: 150
    },
    {
        period: "Today",
        amount: 135
    },
]

const CustomizedYAxisTick = (props: any) => {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x-16.5},${y})`}>
        <text x={0} y={0} dy={5} textAnchor="end" fill="#989898">
          {`${payload.value}%`}
        </text>
      </g>
    );
}

const CustomizedXAxisTick = (props: any) => {
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y+10})`}>
        <text x={0} y={0} dy={16} dx={0} textAnchor="start" fill="#989898">
          {payload.value}
        </text>
      </g>
    );
}

export const DashboardAreaChart: React.FC<{}> = () => {
    return (
        <div className="relative text-[10px] text-[#989898]">
            <ResponsiveContainer width="100%" height={272}>
                <AreaChart data={data}
                    margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                >
                    <defs>
                        <linearGradient
                            id="area-chart"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#006652" />
                            <stop offset="0.41" stopColor="#1ED760" />
                            <stop offset="0.75" stopColor="#FFFFFF" />
                            <stop offset="1" stopColor="#FFFFFF" />
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient
                            id="area-chart-background"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="100%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#12FF67" />
                            <stop offset="0.41" stopColor="#0A8B388C" />
                            <stop offset="0.75" stopColor="transparent" />
                            <stop offset="1" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeWidth={1} stroke="#FFFFFF1A"  />
                    <YAxis tickLine={false} axisLine={false} tick={CustomizedYAxisTick} />
                    <XAxis tickLine={false}
                        axisLine={{
                            stroke: "#FFFFFF1A",
                            strokeWidth: 1.25,
                        }}
                        dataKey="period" tick={CustomizedXAxisTick} color="#99999C"/>
                    <Area type="monotone" dataKey="amount" strokeWidth={5} stroke="url(#area-chart)" fill="url(#area-chart-background)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}