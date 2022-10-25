import { useEffect, useState } from "react";
//Hello! I'm approaching this challenge with some assumptions, which I will state when necessary!
//assuming "input" props are coming from a provided source:
export default function Component({ input }) {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    //simply setting an interval to update time every second and date every hour
    //hourly updating of date accounts for weird time zones and daylight savings, as time is displayed locally.
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    setInterval(() => setDate(new Date().toLocaleTimeString()), 1000 * 60 * 60);
  }, []);

  return (
    <div>
      {!input && (
        <div>
          <h3>
            {date} {time}
          </h3>
        </div>
      )}

      {Array.isArray(input) && (
        //Problem non-specific on type of list: using unordered list here.
        <ul>
          {input.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      )}

      {input && !Array.isArray(input) && (
        //instructions: 'If the "input" prop is anything else, render the value in a .'
        //I will proceed as though that meant "div".
        <div>{input}</div>
      )}
    </div>
  );
}
