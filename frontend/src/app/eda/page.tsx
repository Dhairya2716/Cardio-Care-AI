"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ScatterChart, Scatter, Legend, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { Users, Activity, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const ageData = [
    { range: "30-40", count: 1200, risk: 300 },
    { range: "40-50", count: 15400, risk: 6500 },
    { range: "50-60", count: 32000, risk: 18000 },
    { range: "60+", count: 21400, risk: 14000 },
];

const genderStats = [
    { name: "Women", value: 45000, color: "#ec4899" }, // Pink-500
    { name: "Men", value: 25000, color: "#3b82f6" },   // Blue-500
];

const trendData = [
    { month: "Jan", admissions: 400 },
    { month: "Feb", admissions: 300 },
    { month: "Mar", admissions: 500 },
    { month: "Apr", admissions: 450 },
    { month: "May", admissions: 600 },
    { month: "Jun", admissions: 550 },
];

const scatterData = Array.from({ length: 100 }, () => ({
    height: Math.floor(Math.random() * (190 - 150) + 150),
    weight: Math.floor(Math.random() * (120 - 50) + 50),
    risk: Math.random() > 0.5 ? 1 : 0
}));

const stats = [
    { title: "Total Patients", value: "70,000", icon: Users, change: "+12%" },
    { title: "Avg. Age", value: "53.2", icon: Activity, change: "-0.5%" },
    { title: "Risk Prevalence", value: "48.5%", icon: Heart, change: "+2.1%", alert: true },
    { title: "Model Accuracy", value: "73.4%", icon: TrendingUp, change: "+1.2%" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-popover border border-border p-3 rounded-lg shadow-xl">
                <p className="font-semibold text-foreground">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} style={{ color: entry.color }} className="text-sm">
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function EDAPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] p-6 md:p-12 space-y-8 bg-background transition-colors duration-300">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:flex justify-between items-end mb-8"
            >
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-gradient-primary">Analytics Dashboard</h1>
                    <p className="text-muted-foreground text-lg">Deep dive into cardiovascular health trends.</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 rounded-full glass border-primary/20 text-sm font-medium text-primary">
                    Last Updated: Today
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="glass border-border hover:border-primary/50 transition-all duration-300">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                                <stat.icon className={cn("h-4 w-4", stat.alert ? "text-red-500" : "text-primary")} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className={cn("text-xs mt-1", stat.title === "Risk Prevalence" ? "text-red-400" : "text-green-400")}>
                                    {stat.change} from last month
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Age Distribution */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <Card className="glass border-border h-[400px]">
                        <CardHeader>
                            <CardTitle>Age & Risk Distribution</CardTitle>
                            <CardDescription>Comparative analysis of age groups vs cardiovascular risk.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                    <XAxis dataKey="range" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                                    <YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--muted)', opacity: 0.2 }} />
                                    <Legend />
                                    <Bar dataKey="count" name="Total" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="risk" name="At Risk" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Admission Trends */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <Card className="glass border-border h-[400px]">
                        <CardHeader>
                            <CardTitle>Analysis Trends</CardTitle>
                            <CardDescription>Monthly check-ups and risks detected over time.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[320px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={trendData}>
                                    <defs>
                                        <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                                    <YAxis stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="admissions" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorAdmissions)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Secondary Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Gender Pie Chart */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="md:col-span-1">
                    <Card className="glass border-border h-[350px]">
                        <CardHeader>
                            <CardTitle>Gender Split</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[270px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={genderStats}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {genderStats.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="var(--background)" strokeWidth={2} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend verticalAlign="bottom" />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* BMI Scatter Plot */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="md:col-span-2">
                    <Card className="glass border-border h-[350px]">
                        <CardHeader>
                            <CardTitle>BMI Cluster Analysis</CardTitle>
                            <CardDescription>Correlation between Height, Weight and Risk factors.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[270px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart>
                                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                                    <XAxis type="number" dataKey="height" name="Height" unit="cm" stroke="var(--muted-foreground)" domain={['dataMin - 5', 'dataMax + 5']} />
                                    <YAxis type="number" dataKey="weight" name="Weight" unit="kg" stroke="var(--muted-foreground)" domain={['dataMin - 5', 'dataMax + 5']} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                                    <Scatter name="Patients" data={scatterData} fill="var(--primary)" opacity={0.6} />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
