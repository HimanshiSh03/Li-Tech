"use client";
import { useState } from "react";

const initial = Array.from({ length: 30 }, (_, i) =>
  [1, 2, 5, 8, 9, 12, 14, 19, 22, 26].includes(i) ? "present" : [3, 10, 15, 16, 24, 28].includes(i) ? "reserved" : "free"
);

export default function SeatMap() {
  const [seats, setSeats] = useState(initial);
  const count = (s) => seats.filter((x) => x === s).length;

  const toggle = (i) =>
    setSeats((prev) => prev.map((s, idx) => (idx === i ? (s === "free" ? "reserved" : s === "reserved" ? "free" : s) : s)));

  return (
    <div className="room" aria-label="Demo reading room">
      <div className="room-head">
        <strong>Reading Room A</strong>
        <span>{count("present")} in now · {count("free")} seats free</span>
      </div>
      <div className="grid">
        {seats.map((s, i) => (
          <button
            key={i}
            className={`seat ${s}`}
            onClick={() => toggle(i)}
            disabled={s === "present"}
            aria-label={`Seat ${i + 1}, ${s}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="legend">
        <span><i className="dot free" />Free</span>
        <span><i className="dot reserved" />Reserved</span>
        <span><i className="dot present" />Checked in</span>
      </div>
      <p className="hint">Try it: tap a free seat to reserve it.</p>
    </div>
  );
}