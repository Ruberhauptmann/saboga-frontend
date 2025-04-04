import BoardgameTable from "../components/boardgameTable.tsx";
import {useLoaderData, useNavigation, useSearchParams} from "react-router-dom";
import type {components} from "../apischema";
import Datepicker, {DateRangeType} from "react-tailwindcss-datepicker";
import {useState} from "react";
import { format } from "date-fns";

type BoardgameComparison = components["schemas"]["BoardgameComparison"];

function Browse() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigation = useNavigation();

    const urlCompareTo = searchParams.get("compare_to");

    const LAST_MONTH = new Date();
    LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);

    const initialDate = urlCompareTo ? new Date(urlCompareTo) : LAST_MONTH;
    const [value, setValue] = useState<DateRangeType>({ startDate: initialDate, endDate: null });

    const {data: boardgames, links} = useLoaderData() as { data: BoardgameComparison[], links: Map<string, Map<string, string>> };

    // Update the searchParams *only* when the user changes the date
    const handleDateChange = (newValue: DateRangeType | null) => {
        if (!newValue || !newValue.startDate) return;

        setValue(newValue);

        const formattedCompareTo = format(newValue.startDate, "yyyy-MM-dd");

        // If searchParams already contains the same date, don't update it
        if (searchParams.get("compare_to") === formattedCompareTo) return;

        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("compare_to", formattedCompareTo);
        setSearchParams(newSearchParams, { preventScrollReset: true });
    };

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div className="max-w-full">
            <title>Browse Boardgame Charts</title>

            <div className="w-64 z-20">
                <Datepicker
                    asSingle={true}
                    useRange={false}
                    maxDate={new Date()}
                    startFrom={LAST_MONTH}
                    primaryColor={"emerald"}
                    value={value}
                    onChange={handleDateChange}
                    showShortcuts={true}
                />
            </div>

            <BoardgameTable boardgames={boardgames} links={links}/>
        </div>
    )
}

export default Browse;
