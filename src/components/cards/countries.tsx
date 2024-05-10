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
import { useEffect, useMemo, useState } from "react";
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
    indexAxis: 'y' as const,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        datalabels: {
            color: '#F1DDC3',
            align: "center",
            font: {
                size: 12,
                weight: "600",
                family: "sans",
                align: "center"
            },
            formatter: function (value: number) {
                return value + "%";
            }
        }
    },
    scales: {
        x: {
            display: false,
            grid: { display: false },
        },
        y: {
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

interface Country {
    name: string;
    percentage: number;
};

export default function CountriesCard() {
    const [countries, setCountries] = useState<Country[]>([]);

    const data = useMemo(() => {
        return {
            labels: countries.map(c => c.name),
            datasets: [
                {
                    label: 'Dataset 1',
                    data: countries.map(c => c.percentage),
                    backgroundColor: 'var(--foreground)',
                    borderRadius: 8,
                },
            ],
        };
    }, [countries]);

    useEffect(() => {
        fetch("http://localhost:8080/countries")
            .then(res => res.json())
            .then(setCountries);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Fumantes por país</CardTitle>
                <CardDescription>
                    em países em desenvolvimento em comparação à sua população
                </CardDescription>
                <Bar
                    options={options as any}
                    data={data}
                />
                <CardDescription>
                    Fonte: Banco Mundial e Ministério da Saúde (2019)
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
