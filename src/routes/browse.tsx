import BoardgameTable from "../components/boardgameTable.tsx";
import {useLoaderData, useNavigation, useSearchParams} from "react-router-dom";
import type {components} from "../apischema";
import Datepicker, {DateRangeType} from "react-tailwindcss-datepicker";
import {useEffect, useState } from "react";
import { format } from "date-fns";

type BoardgameComparison = components["schemas"]["BoardgameComparison"];

function Browse() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigation = useNavigation();

    const urlStartDate = searchParams.get("startDate");
    const urlEndDate = searchParams.get("endDate");

    const LAST_MONTH = new Date();
    LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);

    const [value, setValue] = useState<DateRangeType>({
        startDate: urlStartDate ? new Date(urlStartDate) : LAST_MONTH,
        endDate: urlEndDate ? new Date(urlEndDate) : new Date(),
    });

    const {data: boardgames, links} = useLoaderData() as { data: BoardgameComparison[], links: Map<string, Map<string, string>> };

    useEffect(() => {
        const formattedStart = value.startDate ? format(value.startDate, "yyyy-MM-dd") : "";
        const formattedEnd = value.endDate ? format(value.endDate, "yyyy-MM-dd") : "";

        searchParams.set("startDate", formattedStart);
        searchParams.set("endDate", formattedEnd);
        setSearchParams(searchParams, {
            preventScrollReset: true,
        });

    }, [value, searchParams, setSearchParams]);

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div className="max-w-full">
            <div className="w-64 z-20">
                <Datepicker
                    useRange={false}
                    maxDate={new Date()}
                    primaryColor={"emerald"}
                    value={value}
                    onChange={newValue => newValue && setValue(newValue)}
                    showShortcuts={true}
                />
            </div>

            <BoardgameTable boardgames={boardgames} links={links}/>
        </div>
    )
}

export default Browse;
