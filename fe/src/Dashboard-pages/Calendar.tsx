import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

interface Props {
  pageOpen: number;
}

const Calendar2 = ({ pageOpen }: Props) => {
  const [value, onChange] = useState(new Date());
  if (pageOpen === 1) {
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
  } else return null;
};
export default Calendar2;
