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
    Tooltip
} from "chart.js";

type Boardgame = components["schemas"]["BoardgameWithHistoricalData"];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import daisyuiColors from 'daisyui/src/theming/themes'
// secondary color of light theme (#f000b8):

function BoardgameStatistics(boardgame: Boardgame) {
    const labels = boardgame.bgg_rank_history.map(entry =>
        new Date(entry.date).toLocaleDateString("en-US") // Convert to readable format
    );
    const bggRankData = boardgame.bgg_rank_history.map(entry => entry.bgg_rank);
    const bggGeekRatingData = boardgame.bgg_rank_history.map(entry => entry.bgg_geek_rating);
    const bggAverageRatingData = boardgame.bgg_rank_history.map(entry => entry.bgg_average_rating);

    console.log(
        daisyuiColors['cupcake'].secondary
    )

    const rank_data = {
        labels,
        datasets: [
            {
                label: "BGG Rank",
                data: bggRankData,
                borderColor: daisyuiColors['cupcake'].secondary,
                backgroundColor: daisyuiColors['cupcake'].secondary,
                fill: true
            },
        ]
    };

    const rating_data = {
        labels,
        datasets: [
            {
                label: "BGG Geek Rating",
                data: bggGeekRatingData,
                borderColor: daisyuiColors['cupcake'].primary ,
                backgroundColor: daisyuiColors['cupcake'].primary,
                yAxisID: 'y1',
                fill: true
            },
            {
                label: "BGG Average Rating",
                data: bggAverageRatingData,
                borderColor: daisyuiColors['cupcake'].secondary,
                backgroundColor: daisyuiColors['cupcake'].secondary,
                yAxisID: 'y2',
                fill: true
            }
        ]
    };

    const rank_options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date"
                }
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
        }
    };

    const rating_options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
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
                    drawOnChartArea: false  // Don't draw grid lines for the second Y-axis
                }
            }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96">
                <Line options={rank_options} data={rank_data}/>
            </div>
            <div className="relative h-96">
                <Line options={rating_options} data={rating_data}/>
            </div>
        </div>
    );
}

export default BoardgameStatistics;
