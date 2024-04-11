"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        datalabels: {
            color: '#F1DDC3',
            align: "top",
            font: {
                size: 12,
                weight: "600",
                family: "sans",
                align: "center"
            },
            formatter: function (value: number) {
                return Math.round(value / 1000);
            }
        }
    },
    scales: {
        y: {
            display: false,
            grid: { display: false },
        },
        x: {
            grid: { display: false },
            ticks: {
                color: '#262626bb',
                beginAtZero: true,
                font: {
                    size: 14,
                    weight: "550",
                    family: "sans"
                },
            }
        }
    },
    layout: {
        padding: {
            // top: 25
        }
    }
};

const deathsByYear = {
    "2022": 161853,
    "2023": 161853,
    "2024": 161853,
    "2025": 161853,
};

const labels = Object.keys(deathsByYear);

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Object.values(deathsByYear),
            backgroundColor: 'var(--foreground)',
            borderRadius: 8,
        },
    ],
};
export default function DeathsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Mortes por ano</CardTitle>
                <CardDescription>
                    por tabagismo no Brasil (em milhares).
                </CardDescription>
                <Bar
                    options={options as any}
                    data={data}
                />
            </CardHeader>
        </Card>
    );
}
