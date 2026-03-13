
import { useEffect, useMemo, useState } from "react";
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
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "chartjs-adapter-date-fns";
import { forecastLoader } from "../functions/apiService.tsx";
import { getColors } from "../functions/getColors.tsx";
import type { components } from "../apischema.d.ts";

type Boardgame = components["schemas"]["BoardgameDetail"];
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

function BoardgameStatistics({
  boardgame,
  loadPrediction,
  start_date,
  end_date,
}: {
  boardgame: Boardgame;
  loadPrediction: boolean;
  start_date: string | undefined;
  end_date: string | undefined;
}) {
  const [predictionData, setPredictionData] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const colors = getColors();

  // 1. Memoize historical data
  const historical = useMemo(() => ({
    labels: boardgame.bgg_rank_history.map((e) => new Date(e.date)),
    ranks: boardgame.bgg_rank_history.map((e) => e.bgg_rank),
    geek: boardgame.bgg_rank_history.map((e) => e.bgg_geek_rating),
    avg: boardgame.bgg_rank_history.map((e) => e.bgg_average_rating),
  }), [boardgame]);

  const last_date = useMemo(() => 
    historical.labels.length > 0 ? historical.labels[historical.labels.length - 1] : new Date(), 
  [historical.labels]);

  // 2. Fetcher
  useEffect(() => {
    if (!loadPrediction) return;

    const fetchPrediction = async () => {
      setIsLoading(true);
      try {
        const data = await forecastLoader({
          params: { boardgameId: boardgame.bgg_id.toString() },
          searchParams: { start_date, end_date },
        });
        setPredictionData(data && Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch failed:", err);
        setPredictionData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrediction();
  }, [loadPrediction, boardgame.bgg_id, start_date, end_date]);

  const chartData = useMemo(() => {
    const isReady = loadPrediction && predictionData.length > 0;
  
      // Combine everything into one single array
    const combinedLabels = [
      ...historical.labels,
      ...(isReady ? predictionData.map((e) => new Date(e.date)) : []),
    ];

    console.log(predictionData)

    const historyLength = historical.labels.length;

    return {
      rank: {
        labels: combinedLabels,
        datasets: [
          {
            label: "BGG Rank",
            // Single continuous array of numbers
            data: [
              ...historical.ranks,
              ...(isReady ? predictionData.map((e) => e.bgg_rank) : []),
            ],
            borderColor: colors.secondary,
            tension: 0.1,
            pointRadius: (ctx: any) => (ctx.dataIndex < historyLength ? 2 : 0), // Hide prediction points if desired
            // This is the magic part:
            segment: {
              borderColor: (ctx: any) =>
                ctx.p0DataIndex >= historyLength - 1 ? colors.primary : undefined,
              borderDash: (ctx: any) =>
                ctx.p0DataIndex >= historyLength - 1 ? [5, 5] : undefined,
            },
          },
        ],
      },
      rating: {
        labels: combinedLabels,
        datasets: [
          {
            label: "Geek Rating",
            data: [...historical.geek, ...(isReady ? predictionData.map(e => e.bgg_geek_rating) : [])],
            yAxisID: "y1",
            borderColor: colors.primary,
            segment: {
              borderDash: (ctx: any) => ctx.p0DataIndex >= historyLength - 1 ? [5, 5] : undefined,
            },
          },
          {
            label: "Avg Rating",
            data: [...historical.avg, ...(isReady ? predictionData.map(e => e.bgg_average_rating) : [])],
            yAxisID: "y2",
            borderColor: colors.secondary,
            segment: {
              borderDash: (ctx: any) => ctx.p0DataIndex >= historyLength - 1 ? [5, 5] : undefined,
            },
          },
        ],
      },
    };
  }, [predictionData, historical, loadPrediction, colors]);

  // 4. Memoize Options
  const annotation = useMemo(() => ({
    line1: {
      type: "line" as const,
      xMin: last_date.toISOString(),
      xMax: last_date.toISOString(),
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      display: loadPrediction,
    },
  }), [last_date, loadPrediction]);

  const rankOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { type: "time" as const }, y: { reverse: true } },
    plugins: { annotation: { annotations: annotation } },
  }), [annotation]);

  const ratingOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { type: "time" as const }, y1: { position: "left" as const }, y2: { position: "right" as const } },
    plugins: { annotation: { annotations: annotation } },
  }), [annotation]);

  if (isLoading) return <div className="h-96 flex items-center justify-center">Loading forecast...</div>;

  return (
    <div className="w-full">
      <div className="relative h-96"><Line data={chartData.rank} options={rankOptions} /></div>
      <div className="relative h-96 mt-8"><Line data={chartData.rating} options={ratingOptions} /></div>
    </div>
  );
}

export default BoardgameStatistics;
