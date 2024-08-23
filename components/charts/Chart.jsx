"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Sample data for the last 7 days
const chartData = [
  { day: "Mon", users: 30 },
  { day: "Tues", users: 50 },
  { day: "Wed", users: 20 },
  { day: "Thu", users: 40 },
  { day: "Fri", users: 25 },
  { day: "Sat", users: 45 },
  { day: "Sun", users: 60 },
]

export function Chart() {
  // Calculate percentage difference from yesterday
  const todayUsers = chartData[chartData.length - 1].users
  const yesterdayUsers = chartData[chartData.length - 2].users
  const percentageDifference = ((todayUsers - yesterdayUsers) / yesterdayUsers) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Last 7 Days</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={275}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#004A50" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Today: {todayUsers} users joined{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {`Total Users: ${chartData.reduce((acc, data) => acc + data.users, 0)}`}
        </div>
        <div className="leading-none text-muted-foreground">
          {`Change from yesterday: ${percentageDifference.toFixed(2)}%`}
        </div>
      </CardFooter>
    </Card>
  )
}
