import type { components } from "../apischema.d.ts";
import { Line } from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    TimeScale,
    ChartDataset, ChartData
} from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';
import 'chartjs-adapter-date-fns';
import {forecastLoader} from "../functions/apiService.tsx";

type Boardgame = components["schemas"]["BoardgameWithHistoricalData"];
type Prediction = components["schemas"]["Prediction"];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin,
    TimeScale,
);
import {useEffect, useState} from "react";
import {getColors} from "../functions/getColors.tsx";

function BoardgameStatistics({ boardgame, loadPrediction }: { boardgame: Boardgame; loadPrediction: boolean }) {
    const labels = boardgame.bgg_rank_history.map(entry => new Date(entry.date));
    const bggRankData = boardgame.bgg_rank_history.map(entry => entry.bgg_rank);
    const bggGeekRatingData = boardgame.bgg_rank_history.map(entry => entry.bgg_geek_rating);
    const bggAverageRatingData = boardgame.bgg_rank_history.map(entry => entry.bgg_average_rating);

    const last_date = labels[labels.length-1]

    const colors = getColors();

    const [predictionData, setPredictionData] = useState<Prediction[]>([]);

    const fetchPrediction = async () => {
        try {
            const data = await forecastLoader({ params: { boardgameId: boardgame.bgg_id.toString() } });
            if (!data) {
                console.error('Invalid prediction data');
                setPredictionData([]);
            } else {
                setPredictionData(data.prediction);
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Effect triggers when `loadPrediction` changes
    useEffect(() => {
        if (loadPrediction) {
            fetchPrediction();
        }
    }, [loadPrediction]);

    const rankDataSets: ChartDataset<"line">[] = [
        {
            label: "BGG Rank",
            data: bggRankData,
            borderColor: colors.secondary,
            backgroundColor: colors.secondary,
            tension: 0.1,
        },
    ];

    let predictedRankData: (null | number)[] = [];
    let predictedAverageRatingData: number[] = [];
    let predictedGeekRatingData: number[] = [];
    let predictedLabels: Date[] = [];
    if (loadPrediction) {
        predictedRankData = [...bggRankData.map(() => null), ...predictionData.map(entry => entry.bgg_rank)];
        rankDataSets.push(
            {
                label: "BGG Rank (predicted)",
                data: predictedRankData,
                borderColor: colors.primary,
                backgroundColor: colors.primary,
                tension: 0.1,
            },
        )

        predictedAverageRatingData = predictionData.map(entry => entry.bgg_average_rating);
        predictedGeekRatingData = predictionData.map(entry => entry.bgg_geek_rating);
        predictedLabels = predictionData.map(entry => new Date(entry.date));
    }
    const fullLabels = [...labels, ...predictedLabels];
    const fullAverageRatingData = [...bggAverageRatingData, ...predictedAverageRatingData];
    const fullGeekRatingData = [...bggGeekRatingData, ...predictedGeekRatingData];

    const rankData: ChartData<"line"> = {
        labels: fullLabels,
        datasets: rankDataSets
    };

    const ratingData = {
        labels: fullLabels,
        datasets: [
            {
                label: "BGG Geek Rating",
                data: fullGeekRatingData,
                borderColor: colors.primary ,
                backgroundColor: colors.primary,
                yAxisID: 'y1',
                tension: 0.1
            },
            {
                label: "BGG Average Rating",
                data: fullAverageRatingData,
                borderColor: colors.secondary,
                backgroundColor: colors.secondary,
                yAxisID: 'y2',
                tension: 0.1
            }
        ]
    };

    const rank_options= {
        responsive: true,
        maintainAspectRatio: false,
        type: 'line',
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'day' as const
                },
                title: {
                    display: true,
                    text: "Date"
                },
                // min: new Date("2025-02-20").toISOString(), // Start date for x-axis
                // max: new Date("2025-03-30").toISOString(), // End date for x-axis
            },
            y: {
                type: 'linear' as const,
                title: {
                    display: true,
                    text: "Rank"
                },
                ticks: {
                    precision: 0,
                },
                beginAtZero: false,
                reverse: true
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    line1: {
                        type: 'line' as const,
                        xMin: last_date.toISOString(),
                        xMax: last_date.toISOString(),
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 2,
                        display: loadPrediction
                    }
                }
            }
        }
    };

    const rating_options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time' as const,
                title: {
                    display: true,
                    text: "Date"
                }
            },
            y1: {
                type: 'linear' as const,
                position: 'left' as const,
                title: {
                    display: true,
                    text: "Geek Rating"
                },
            },
            y2: {
                type: 'linear' as const,
                position: 'right' as const,
                title: {
                    display: true,
                    text: "Average Rating"
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    };

    return (
        <div>
            <div className="relative h-96">
                <Line options={rank_options} data={rankData}/>
            </div>
            <div className="relative h-96">
                <Line options={rating_options} data={ratingData}/>
            </div>
        </div>
    );
}

export default BoardgameStatistics;
