import type { components } from "../apischema";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import BoardgameStatistics from "../components/boardgameStatistics";
import imageResolver from "../functions/imageResolver.tsx";
import { useState } from "react";
import Datepicker, { DateRangeType } from "react-tailwindcss-datepicker";
import { format } from "date-fns";

type BoardgameWithHistoricalData =
  components["schemas"]["BoardgameWithHistoricalData"];

function Boardgame() {
  const boardgame = useLoaderData() as BoardgameWithHistoricalData;
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const [mode, setMode] = useState("auto");

  const urlStartDate = searchParams.get("start_date");
  const LAST_MONTH = new Date();
  LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);
  const initialDate = urlStartDate ? new Date(urlStartDate) : LAST_MONTH;
  const [value, setValue] = useState<DateRangeType>({
    startDate: initialDate,
    endDate: new Date(),
  });

  const handleModeChange = (event: { target: { value: string } }) => {
    setMode(event.target.value);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("mode", event.target.value);
    setSearchParams(newSearchParams, { preventScrollReset: true });
  };

  const handleDateChange = (newValue: DateRangeType | null) => {
    if (!newValue || !newValue.startDate || !newValue.endDate) return;

    setValue(newValue);

    const formattedEndDate = format(newValue.endDate, "yyyy-MM-dd");
    const formattedStartDate = format(newValue.startDate, "yyyy-MM-dd");

    // If searchParams already contains the same date, don't update it
    if (searchParams.get("end_date") === formattedEndDate) return;
    if (searchParams.get("start_date") === formattedStartDate) return;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("end_date", formattedEndDate);
    newSearchParams.set("start_date", formattedStartDate);
    setSearchParams(newSearchParams, { preventScrollReset: true });
  };

  const [loadPrediction, setLoadPrediction] = useState(false);

  const handleLoadPrediction = () => {
    setLoadPrediction((prev) => !prev);
  };

  if (navigation.state === "loading") {
    return (
      <span className="loading loading-dots loading-md text-primary"></span>
    );
  }

  return (
    <div>
      <title>{boardgame.name}</title>

      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="md:basis-1/3 md:w-1/2 lg:w-1/3 flex-grow max-w-full flex-shrink-0">
          <img
            className="max-w-64 pl-4 object-contain mx-auto"
            src={imageResolver(boardgame.image_url)}
            alt="Boardgame cover"
          />

          <div className="container bg-base-200 my-4 p-4 rounded-md">
            <div className="flex">
              <select
                className="select w-1/3"
                value={mode}
                onChange={handleModeChange}
              >
                <option value="auto">Auto</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>

              <Datepicker
                asSingle={false}
                useRange={true}
                maxDate={new Date()}
                startFrom={LAST_MONTH}
                primaryColor={"blue"}
                value={value}
                onChange={handleDateChange}
                showShortcuts={true}
                inputClassName="input w-full"
              />
            </div>

            <button
              className="btn btn-primary my-2"
              onClick={handleLoadPrediction}
            >
              Predict
            </button>
          </div>

          <BoardgameStatistics
            boardgame={boardgame}
            loadPrediction={loadPrediction}
            start_date={searchParams.get("start_date")}
            end_date={searchParams.get("end_date")}
          />
        </div>

        <div className="md:basis-2/3 flex-grow min-w-0">
          <div className="flex mb-2">
            <h1 className="text-3xl">
              {boardgame.name}{" "}
              <span className="text-sm font-bold">
                ({boardgame.year_published})
              </span>
            </h1>

            <div className="max-w-8 ml-2">
              <a
                href={"https://boardgamegeek.com/boardgame/" + boardgame.bgg_id}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="38"
                  viewBox="0 0 30 38"
                >
                  <g fill="none" fillRule="evenodd">
                    <polygon
                      fill="#FF5100"
                      points="24.87 7.01 21.107 8.035 24.792 0 .9 8.794 2.206 19.327 0 21.454 6.577 37.93 20.558 32.779 25.418 21.37 23.331 19.358"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="container bg-base-200 p-4 mb-2 rounded-md">
            {boardgame.designers.map((entry) => (
              <span>{entry.name} </span>
            ))}

            <p>
              {boardgame.minplayers} - {boardgame.maxplayers} players
            </p>

            <p>
              {boardgame.minplaytime} - {boardgame.maxplaytime} min
            </p>
          </div>

          <article className="prose whitespace-pre-wrap">
            <p>{boardgame.description}</p>
          </article>

          <div className="container">
            <div className="mb-2">
              {boardgame.categories.map((entry) => (
                <div className="badge badge-outline badge-neutral">
                  {entry.name}
                </div>
              ))}
            </div>
            <div className="mb-2">
              {boardgame.families.map((entry) => (
                <div className="badge badge-outline badge-neutral">
                  {entry.name}
                </div>
              ))}
            </div>
            <div className="mb-2">
              {boardgame.mechanics.map((entry) => (
                <div className="badge badge-outline badge-neutral">
                  {entry.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boardgame;
