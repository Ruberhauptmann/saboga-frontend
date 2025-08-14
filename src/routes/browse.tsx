import BoardgameTable from "../components/boardgameTable.tsx";
import { useNavigation, useSearchParams } from "react-router-dom";
import Datepicker, { DateRangeType } from "react-tailwindcss-datepicker";
import { useState } from "react";
import { format, subMonths, subYears } from "date-fns";

function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const urlCompareTo = searchParams.get("compare_to");

  const LAST_MONTH = new Date();
  LAST_MONTH.setMonth(LAST_MONTH.getMonth() - 1);

  const initialDate = urlCompareTo ? new Date(urlCompareTo) : LAST_MONTH;
  const [value, setValue] = useState<DateRangeType>({
    startDate: initialDate,
    endDate: null,
  });

  // Update the searchParams when the user changes the date
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

  const selectQuickDate = (date: Date) => {
    handleDateChange({
      startDate: date,
      endDate: null,
    });
  };

  if (navigation.state === "loading") {
    return (
      <span className="loading loading-dots loading-md text-primary"></span>
    );
  }

  return (
    <div className="max-w-full">
      <title>Browse Boardgame Charts</title>

      <fieldset className="w-64 z-20">
        <legend className="text-sm font-light tracking-tight">
          Compare to
        </legend>

        <div className="flex gap-2 mb-2">
          <button
            type="button"
            className="btn btn-xs btn-outline"
            onClick={() => selectQuickDate(subMonths(new Date(), 1))}
          >
            1 month ago
          </button>
          <button
            type="button"
            className="btn btn-xs btn-outline"
            onClick={() => selectQuickDate(subYears(new Date(), 1))}
          >
            1 year ago
          </button>
          <button
            type="button"
            className="btn btn-xs btn-outline"
            onClick={() => selectQuickDate(subYears(new Date(), 5))}
          >
            5 years ago
          </button>
        </div>

        <Datepicker
          asSingle={true}
          useRange={false}
          maxDate={new Date()}
          startFrom={LAST_MONTH}
          primaryColor={"blue"}
          value={value}
          onChange={handleDateChange}
          inputClassName="input w-full"
        />
      </fieldset>

      <BoardgameTable />
    </div>
  );
}

export default Browse;
