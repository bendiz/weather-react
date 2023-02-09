function CurrentDay({ date }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[date.getDay()];

  return (
    <h3 class="current-day" id="current-day">
      {day}
    </h3>
  );
}

export default CurrentDay;
